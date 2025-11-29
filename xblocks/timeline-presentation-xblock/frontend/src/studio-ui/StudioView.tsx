/**
 * Timeline Presentation XBlock - Studio View
 *
 * Beautiful fullscreen editor with Liverpool design tokens.
 * Three-column layout: Events | Editor | Properties
 */

import React, { useState, useRef, useEffect } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import Card from '@openedx/paragon/dist/Card';
import Tabs from '@openedx/paragon/dist/Tabs';
import IconButton from '@openedx/paragon/dist/IconButton';
import Icon from '@openedx/paragon/dist/Icon';
import { StandardModal } from '@openedx/paragon';
import { Close } from '@openedx/paragon/icons';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields, TimelineEvent, AssetUploadResponse, DrawingMode, CourseAsset, ListAssetsResponse } from '../common/types';
import { AssetUploader } from './components/AssetUploader';
import { VisualEditor } from './components/VisualEditor';
import { generateKonvaConfig } from './utils/konvaConfigGenerator';
import { useTimelineEvents } from './hooks/useTimelineEvents';

// NEW COMPONENTS
import { EventSidebar } from './components/EventSidebar';
import { CompactWaveform } from './components/CompactWaveform';
import { CanvasToolbar } from './components/CanvasToolbar';
import { PropertiesAccordion } from './components/PropertiesAccordion';
import { EditorActions } from './components/EditorActions';

// NEW STYLES
import './styles/studio-layout.scss';
import './styles/setup-tab.scss';

interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
}

/**
 * Helper to get CSRF token from cookies
 */
function getCSRFToken(): string {
  const name = 'csrftoken';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

export const StudioView: React.FC<StudioViewProps> = ({ runtime, fields }) => {
  // =======================================================================
  // STATE - Form Fields
  // =======================================================================

  const [displayName, setDisplayName] = useState(fields.display_name);
  const [title, setTitle] = useState(fields.title || '');
  const [description, setDescription] = useState(fields.description || '');
  const [imageUrl, setImageUrl] = useState(fields.image_url || '');
  const [audioUrl, setAudioUrl] = useState(fields.audio_url || '');

  // Timeline events managed by service
  const timelineEventsService = useTimelineEvents();
  const timelineEvents = timelineEventsService.events;

  const [editorCanvasDimensions, setEditorCanvasDimensions] = useState(
    fields.editor_canvas_dimensions || { width: 800, height: 600 }
  );
  const [audioDuration, setAudioDuration] = useState(0);

  // Initialize service with data from backend
  useEffect(() => {
    timelineEventsService.initialize(fields.timeline_events || []);
  }, []);

  // =======================================================================
  // STATE - UI
  // =======================================================================

  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingAudio, setUploadingAudio] = useState(false);
  const [imageError, setImageError] = useState<string | undefined>();
  const [audioError, setAudioError] = useState<string | undefined>();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState('setup');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Visual editor state
  const [drawingMode, setDrawingMode] = useState<DrawingMode>('select');
  const [drawingColor, setDrawingColor] = useState('#212b58'); // Liverpool blue
  const [drawingThickness, setDrawingThickness] = useState(2);

  // Course images browser state
  const [showAssetPicker, setShowAssetPicker] = useState(false);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [courseAssets, setCourseAssets] = useState<CourseAsset[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);

  // =======================================================================
  // HELPER FUNCTIONS
  // =======================================================================

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // =======================================================================
  // EFFECTS - Load audio duration
  // =======================================================================

  useEffect(() => {
    if (!audioUrl) {
      setAudioDuration(0);
      return;
    }

    let cancelled = false;

    const loadAudioDuration = async () => {
      try {
        const duration = await new Promise<number>((resolve, reject) => {
          const audio = new Audio(audioUrl);

          audio.addEventListener('loadedmetadata', () => {
            if (cancelled) return;
            if (audio.duration && isFinite(audio.duration)) {
              resolve(audio.duration);
            } else {
              reject(new Error('Could not determine audio duration'));
            }
          });

          audio.addEventListener('error', () => {
            if (cancelled) return;
            reject(new Error('Failed to load audio file'));
          });

          setTimeout(() => {
            if (cancelled) return;
            reject(new Error('Audio loading timed out'));
          }, 10000);

          audio.load();
        });

        if (!cancelled) {
          setAudioDuration(duration);
          console.log(`[Timeline] Audio duration loaded: ${duration.toFixed(1)}s`);
        }
      } catch (error) {
        if (!cancelled) {
          console.warn('[Timeline] Could not get audio duration:', error);
          setAudioDuration(30);
        }
      }
    };

    loadAudioDuration();

    return () => {
      cancelled = true;
    };
  }, [audioUrl]);

  // =======================================================================
  // HANDLERS - Asset Upload
  // =======================================================================

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true);
    setImageError(undefined);

    try {
      const uploadUrl = `/assets/${fields.course_id}/`;
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Accept': 'application/json',
        },
        body: formData,
      });

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = { error: text || 'Upload failed' };
      }

      if (response.ok && result.asset) {
        setImageUrl(result.asset.url);
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        const errorMsg = result.error || result.message || 'Upload failed';
        setImageError(errorMsg);
      }
    } catch (error) {
      console.error('Image upload error:', error);
      setImageError(error instanceof Error ? error.message : 'Upload failed');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleAudioUpload = async (file: File) => {
    setUploadingAudio(true);
    setAudioError(undefined);

    try {
      const uploadUrl = `/assets/${fields.course_id}/`;
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Accept': 'application/json',
        },
        body: formData,
      });

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = { error: text || 'Upload failed' };
      }

      if (response.ok && result.asset) {
        setAudioUrl(result.asset.url);

        try {
          const duration = await new Promise<number>((resolve, reject) => {
            const audio = new Audio(result.asset.url);

            audio.addEventListener('loadedmetadata', () => {
              if (audio.duration && isFinite(audio.duration)) {
                resolve(audio.duration);
              } else {
                reject(new Error('Could not determine audio duration'));
              }
            });

            audio.addEventListener('error', (e) => {
              reject(new Error('Failed to load audio file'));
            });

            setTimeout(() => {
              reject(new Error('Audio loading timed out'));
            }, 10000);

            audio.load();

            if (audioRef.current) {
              audioRef.current.src = result.asset.url;
            }
          });

          setAudioDuration(duration);
          setMessage({ type: 'success', text: `Audio uploaded successfully! Duration: ${duration.toFixed(1)}s` });
          setTimeout(() => setMessage(null), 3000);
        } catch (durationError) {
          console.warn('Could not get audio duration:', durationError);
          setAudioDuration(30);
          setMessage({ type: 'success', text: 'Audio uploaded successfully! (Duration detection failed, defaulted to 30s)' });
          setTimeout(() => setMessage(null), 4000);
        }
      } else {
        const errorMsg = result.error || result.message || 'Upload failed';
        setAudioError(errorMsg);
      }
    } catch (error) {
      console.error('Audio upload error:', error);
      setAudioError(error instanceof Error ? error.message : 'Upload failed');
    } finally {
      setUploadingAudio(false);
    }
  };

  const handleDeleteImage = () => {
    if (confirm('Are you sure you want to remove this image?')) {
      setImageUrl('');
    }
  };

  const handleDeleteAudio = () => {
    if (confirm('Are you sure you want to remove this audio?')) {
      setAudioUrl('');
      setAudioDuration(0);
    }
  };

  // =======================================================================
  // HANDLERS - Course Images Browser
  // =======================================================================

  const handleOpenAssetPicker = async () => {
    setShowAssetPicker(true);
    setLoadingAssets(true);

    try {
      const result = await xblockPost<ListAssetsResponse>(runtime, 'list_course_assets', {});

      if (result.success && result.assets) {
        setCourseAssets(result.assets);
      } else {
        console.error('Failed to load assets:', result.error);
      }
    } catch (error) {
      console.error('Asset list error:', error);
    } finally {
      setLoadingAssets(false);
    }
  };

  const handleSelectAsset = (asset: CourseAsset) => {
    setImageUrl(asset.url);
    setShowAssetPicker(false);
  };

  // =======================================================================
  // HANDLERS - Save/Cancel
  // =======================================================================

  const validateForm = (): string | null => {
    if (!displayName.trim()) {
      return 'Display name is required';
    }
    if (!title.trim()) {
      return 'Title is required';
    }
    if (!imageUrl) {
      return 'Diagram image is required';
    }
    if (!audioUrl) {
      return 'Audio narration is required';
    }
    return null;
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const validationError = validateForm();
      if (validationError) {
        setMessage({ type: 'error', text: validationError });
        setSaving(false);
        return;
      }

      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        title: title,
        description: description,
        image_url: imageUrl,
        audio_url: audioUrl,
        timeline_events: timelineEvents,
        editor_canvas_dimensions: editorCanvasDimensions,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Timeline presentation saved successfully!' });

        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save changes.' });

        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving.' });

      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  // =======================================================================
  // HANDLERS - Event Management
  // =======================================================================

  const handleAddEvent = () => {
    const eventNumber = timelineEventsService.count() + 1;
    const eventName = `Event ${eventNumber}`;

    const newEvent: TimelineEvent = {
      id: `event-${Date.now()}`,
      name: eventName,
      timing: { startTime: 0 },
      position: { x: 50, y: 50 },
    };

    timelineEventsService.create(newEvent);
    setSelectedEventId(newEvent.id);
  };

  const handleSelectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  const handleEditEvent = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  const handleDeleteEvent = (eventId: string) => {
    timelineEventsService.delete(eventId);
    if (selectedEventId === eventId) {
      setSelectedEventId(null);
    }
  };

  const handleEventPropertyChange = (updates: Partial<TimelineEvent>) => {
    if (selectedEventId) {
      const currentEvent = timelineEventsService.getById(selectedEventId);
      if (currentEvent) {
        const updatedEvent = { ...currentEvent, ...updates };
        const konvaConfig = generateKonvaConfig(updatedEvent, editorCanvasDimensions);
        timelineEventsService.update(selectedEventId, {
          ...updates,
          konvaConfig,
        });
      }
    }
  };

  const handleSaveEventProperties = () => {
    setMessage({ type: 'success', text: 'Event properties saved' });
    setTimeout(() => setMessage(null), 2000);
  };

  const handleCancelEventEdit = () => {
    setSelectedEventId(null);
  };

  // =======================================================================
  // HANDLERS - Waveform
  // =======================================================================

  const handleWaveformEventClick = (event: TimelineEvent) => {
    setSelectedEventId(event.id);
  };

  const handleWaveformEventUpdate = (eventId: string, newTimestamp: number) => {
    timelineEventsService.update(eventId, {
      timing: { startTime: newTimestamp }
    });
  };

  const handleWaveformAddEvent = (timestamp: number) => {
    const eventNumber = timelineEventsService.count() + 1;
    const eventName = `Event ${eventNumber}`;

    const newEvent: TimelineEvent = {
      id: `event_${Date.now()}`,
      name: eventName,
      timing: { startTime: timestamp },
      position: { x: 50, y: 50 },
    };

    timelineEventsService.create(newEvent);
    setSelectedEventId(newEvent.id);
  };

  // =======================================================================
  // HANDLERS - Visual Editor
  // =======================================================================

  const handleCanvasDimensionsChange = (width: number, height: number) => {
    setEditorCanvasDimensions({ width, height });
  };

  const handleEventCreate = (newEvent: Partial<TimelineEvent>) => {
    const completeEvent: TimelineEvent = {
      ...newEvent,
      id: newEvent.id ?? `event-${Date.now()}`,
      timestamp: newEvent.timestamp ?? 0,
      elementType: newEvent.elementType ?? 'text',
      animation: newEvent.animation ?? 'fade',
      animationDuration: newEvent.animationDuration ?? 500,
      position: newEvent.position ?? { x: 50, y: 50 },
    };

    const konvaConfig = generateKonvaConfig(completeEvent, editorCanvasDimensions);
    const eventWithConfig = { ...completeEvent, konvaConfig };

    timelineEventsService.create(eventWithConfig);
    setSelectedEventId(eventWithConfig.id);
  };

  const handleEventUpdateFromVisual = (eventId: string, updates: Partial<TimelineEvent>) => {
    const currentEvent = timelineEventsService.getById(eventId);
    if (currentEvent) {
      const updatedEvent = { ...currentEvent, ...updates };
      const konvaConfig = generateKonvaConfig(updatedEvent, editorCanvasDimensions);
      timelineEventsService.update(eventId, {
        ...updates,
        konvaConfig,
      });
    }
  };

  const handleEventSelectFromVisual = (eventId: string | null) => {
    setSelectedEventId(eventId);
  };

  const handleEventDeleteFromVisual = (eventId: string) => {
    timelineEventsService.delete(eventId);
    if (selectedEventId === eventId) {
      setSelectedEventId(null);
    }
  };

  // Get selected event
  const selectedEvent = selectedEventId ? timelineEventsService.getById(selectedEventId) : null;

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="timeline-presentation-xblock-studio-view">
      {/* Success/error messages */}
      {message && (
        <Alert
          variant={message.type === 'success' ? 'success' : 'danger'}
          dismissible
          onClose={() => setMessage(null)}
        >
          {message.text}
        </Alert>
      )}

      {/* Tabbed Interface */}
      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key as string)}
        className="mb-3"
      >
        {/* Setup Tab - Combined Basic Information + Assets */}
        <Tabs.Tab eventKey="setup" title="Setup">
          <div className="timeline-presentation-setup-tab">
            {/* Basic Information Section */}
            <div className="setup-card">
              <h3 className="setup-card-title">Basic Information</h3>

              <div className="setup-form-group">
                <label className="setup-form-label">Display Name *</label>
                <input
                  type="text"
                  className="setup-form-input"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g., Dental Anatomy Timeline"
                />
              </div>

              <div className="setup-form-group">
                <label className="setup-form-label">Student Title *</label>
                <input
                  type="text"
                  className="setup-form-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Understanding Tooth Development"
                />
              </div>

              <div className="setup-form-group">
                <label className="setup-form-label">Description</label>
                <textarea
                  className="setup-form-textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of this presentation"
                />
              </div>
            </div>

            {/* Assets Section */}
            <div className="setup-card">
              <h3 className="setup-card-title">Assets</h3>

              <div className="setup-form-group">
                <AssetUploader
                  label="Diagram Image *"
                  accept="image/png,image/jpeg,image/jpg"
                  currentAsset={imageUrl}
                  assetType="image"
                  onUpload={handleImageUpload}
                  onDelete={handleDeleteImage}
                  uploading={uploadingImage}
                  error={imageError}
                />

                {/* Course Images Browser Button */}
                <div className="mt-2">
                  <Button
                    variant="outline-primary"
                    onClick={handleOpenAssetPicker}
                    disabled={uploadingImage}
                    size="sm"
                  >
                    Browse Course Images
                  </Button>
                </div>
              </div>

              <div className="setup-form-group">
                <AssetUploader
                  label="Audio Narration *"
                  accept="audio/mpeg,audio/mp3"
                  currentAsset={audioUrl}
                  assetType="audio"
                  onUpload={handleAudioUpload}
                  onDelete={handleDeleteAudio}
                  uploading={uploadingAudio}
                  error={audioError}
                />
              </div>
            </div>
          </div>
        </Tabs.Tab>

        {/* NEW: Unified Editor Tab */}
        <Tabs.Tab eventKey="editor" title="Editor">
          {!audioUrl || !imageUrl ? (
            <Alert variant="warning">
              {!imageUrl && !audioUrl
                ? 'Please upload both an image and audio file first.'
                : !imageUrl
                ? 'Please upload a diagram image first.'
                : 'Please upload an audio file first.'
              }
            </Alert>
          ) : audioDuration === 0 ? (
            <Alert variant="info">
              Loading audio duration... Please wait.
            </Alert>
          ) : (
            <div className="timeline-editor-root">
              {/* Minimal close button */}
              <IconButton
                src={Close}
                iconAs={Icon}
                alt="Close editor"
                onClick={handleCancel}
                className="modal-close-button"
                variant="tertiary"
                size="sm"
              />

              {/* LEFT COLUMN: Event Sidebar */}
              <div className="editor-left-column">
                <EventSidebar
                  events={timelineEvents}
                  selectedEventId={selectedEventId}
                  onSelectEvent={handleSelectEvent}
                  onAddEvent={handleAddEvent}
                  onEditEvent={handleEditEvent}
                  onDeleteEvent={handleDeleteEvent}
                />
              </div>

              {/* CENTER COLUMN: Waveform + Toolbar + Canvas */}
              <div className="editor-center-column">
                <CompactWaveform
                  audioUrl={audioUrl}
                  events={timelineEvents}
                  audioDuration={audioDuration}
                  onEventClick={handleWaveformEventClick}
                  onEventUpdate={handleWaveformEventUpdate}
                  onAddEvent={handleWaveformAddEvent}
                />

                <CanvasToolbar
                  currentMode={drawingMode}
                  onModeChange={setDrawingMode}
                  color={drawingColor}
                  onColorChange={setDrawingColor}
                  thickness={drawingThickness}
                  onThicknessChange={setDrawingThickness}
                />

                <div style={{ flex: 1, minHeight: 0, maxHeight: 'calc(98vh - 336px)', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
                  <VisualEditor
                    backgroundImageUrl={imageUrl}
                    events={timelineEvents}
                    selectedEventId={selectedEventId}
                    editingEventId={selectedEventId}
                    drawingMode={drawingMode}
                    currentColor={drawingColor}
                    currentThickness={drawingThickness}
                    onEventCreate={handleEventCreate}
                    onEventUpdate={handleEventUpdateFromVisual}
                    onEventSelect={handleEventSelectFromVisual}
                    onEventDelete={handleEventDeleteFromVisual}
                    onCanvasDimensionsChange={handleCanvasDimensionsChange}
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: Properties Accordion */}
              <div className="editor-right-column">
                <PropertiesAccordion
                  event={selectedEvent}
                  onChange={handleEventPropertyChange}
                  onSave={handleSaveEventProperties}
                  onCancel={handleCancelEventEdit}
                />
              </div>

              {/* BOTTOM ROW: Editor Actions */}
              <div className="editor-actions-row">
                <EditorActions
                  onSave={handleSave}
                  onCancel={handleCancel}
                  hasUnsavedChanges={false}
                />
              </div>
            </div>
          )}
        </Tabs.Tab>

      </Tabs>

      {/* Action Buttons (shown outside editor tab) */}
      {activeTab !== 'editor' && (
        <div className="setup-actions">
          <Button
            onClick={handleCancel}
            disabled={saving}
            className="setup-btn setup-btn-cancel"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={saving}
            className="setup-btn setup-btn-save"
          >
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </div>
      )}

      {/* Course Images Browser Modal */}
      <StandardModal
        title="Choose Course Image"
        isOpen={showAssetPicker}
        onClose={() => setShowAssetPicker(false)}
        size="lg"
        isOverflowVisible={false}
        footerNode={
          <Button variant="tertiary" onClick={() => setShowAssetPicker(false)}>
            Close
          </Button>
        }
      >
        {loadingAssets ? (
          <div className="text-center p-4">
            <p>Loading images...</p>
          </div>
        ) : courseAssets.length === 0 ? (
          <div className="text-center p-4">
            <p>No images found in course. Upload an image first.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1rem',
            padding: '1rem'
          }}>
            {courseAssets.map((asset) => (
              <div
                key={asset.url}
                onClick={() => handleSelectAsset(asset)}
                style={{
                  cursor: 'pointer',
                  border: imageUrl === asset.url ? '2px solid #0075b4' : '1px solid #ccc',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (imageUrl !== asset.url) {
                    e.currentTarget.style.borderColor = '#999';
                  }
                }}
                onMouseLeave={(e) => {
                  if (imageUrl !== asset.url) {
                    e.currentTarget.style.borderColor = '#ccc';
                  }
                }}
              >
                <img
                  src={asset.thumbnail_url || asset.url}
                  alt={asset.filename}
                  style={{
                    width: '100%',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '2px'
                  }}
                />
                <small style={{
                  display: 'block',
                  marginTop: '0.5rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {asset.filename}
                </small>
              </div>
            ))}
          </div>
        )}
      </StandardModal>
    </div>
  );
};
