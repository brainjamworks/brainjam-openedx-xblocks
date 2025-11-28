/**
 * Timeline Presentation XBlock - Studio View
 *
 * Main editor interface for course authors to create timeline presentations
 */

import React, { useState, useRef, useEffect } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import Card from '@openedx/paragon/dist/Card';
import Tabs from '@openedx/paragon/dist/Tabs';
// Row and Col use Bootstrap classes directly (not separate Paragon exports)
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields, TimelineEvent, AssetUploadResponse, DrawingMode } from '../common/types';
import { AssetUploader } from './components/AssetUploader';
import { TimelineEventEditor } from './components/TimelineEventEditor';
import { WaveformTimeline } from './components/WaveformTimeline';
import { PreviewPanel } from './components/PreviewPanel';
import { EventPropertiesPanel } from './components/EventPropertiesPanel';
import { EventListView } from './components/EventListView';
import { VisualEditor } from './components/VisualEditor';
import { DrawingToolbar } from './components/DrawingToolbar';
import { generateKonvaConfig } from './utils/konvaConfigGenerator';
import { useTimelineEvents } from './hooks/useTimelineEvents';

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

  // Timeline events managed by service (single source of truth)
  const timelineEventsService = useTimelineEvents();
  const timelineEvents = timelineEventsService.events;

  const [editorCanvasDimensions, setEditorCanvasDimensions] = useState(
    fields.editor_canvas_dimensions || { width: 800, height: 600 }
  );
  const [audioDuration, setAudioDuration] = useState(0);

  // Initialize service with data from backend
  useEffect(() => {
    timelineEventsService.initialize(fields.timeline_events || []);
  }, []);  // Only run once on mount

  // =======================================================================
  // STATE - UI
  // =======================================================================

  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingAudio, setUploadingAudio] = useState(false);
  const [imageError, setImageError] = useState<string | undefined>();
  const [audioError, setAudioError] = useState<string | undefined>();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState('basic');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  // Editing state: just store ID, derive event from service
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const editingEvent = editingEventId ? timelineEventsService.getById(editingEventId) : null;

  const [isNewEvent, setIsNewEvent] = useState(false);

  // Visual editor state
  const [editorMode, setEditorMode] = useState<'form' | 'visual'>('form');
  const [drawingMode, setDrawingMode] = useState<DrawingMode>('select');
  const [drawingColor, setDrawingColor] = useState('#212b58'); // Liverpool blue
  const [drawingThickness, setDrawingThickness] = useState(2);

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
  // EFFECTS - Load audio duration when audioUrl exists
  // =======================================================================

  useEffect(() => {
    // If no audio URL, reset duration and exit
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

          // Set timeout to prevent indefinite waiting
          setTimeout(() => {
            if (cancelled) return;
            reject(new Error('Audio loading timed out'));
          }, 10000);

          // Explicitly trigger load
          audio.load();
        });

        if (!cancelled) {
          setAudioDuration(duration);
          console.log(`[Timeline] Audio duration loaded: ${duration.toFixed(1)}s`);
        }
      } catch (error) {
        if (!cancelled) {
          console.warn('[Timeline] Could not get audio duration:', error);
          // Set default duration so timeline is still usable
          setAudioDuration(30);
        }
      }
    };

    loadAudioDuration();

    // Cleanup function to prevent memory leaks and race conditions
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
        setTimeout(() => setMessage(null), 3000); // Clear after 3 seconds
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

        // Load audio to get duration - use ref and await properly
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

            // Set timeout to prevent indefinite waiting
            setTimeout(() => {
              reject(new Error('Audio loading timed out'));
            }, 10000);

            // Explicitly trigger load
            audio.load();

            // Store in ref for potential later use
            if (audioRef.current) {
              audioRef.current.src = result.asset.url;
            }
          });

          setAudioDuration(duration);
          setMessage({ type: 'success', text: `Audio uploaded successfully! Duration: ${duration.toFixed(1)}s` });
          setTimeout(() => setMessage(null), 3000); // Clear after 3 seconds
        } catch (durationError) {
          console.warn('Could not get audio duration:', durationError);
          // Set a default duration so timeline tab is still usable
          setAudioDuration(30); // Default to 30 seconds if duration can't be determined
          setMessage({ type: 'success', text: 'Audio uploaded successfully! (Duration detection failed, defaulted to 30s)' });
          setTimeout(() => setMessage(null), 4000); // Clear after 4 seconds
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
      // Validate
      const validationError = validateForm();
      if (validationError) {
        setMessage({ type: 'error', text: validationError });
        setSaving(false);
        return;
      }

      // Notify Studio
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // Save data
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
  // HANDLERS - Waveform Timeline Interactions
  // =======================================================================

  const handleWaveformEventClick = (event: TimelineEvent) => {
    // Find event in list and scroll to it or highlight it
    console.log('[Timeline] Event clicked from waveform:', event.id);
    // Future: Could auto-scroll to event in event editor
  };

  const handleWaveformEventUpdate = (eventId: string, newTimestamp: number) => {
    // Update timestamp in service (v2 format)
    timelineEventsService.update(eventId, {
      timing: { startTime: newTimestamp }
    });
    console.log(`[Timeline] Event ${eventId} moved to ${newTimestamp.toFixed(2)}s`);
  };

  const handleWaveformAddEvent = (timestamp: number) => {
    // Generate auto-incrementing event name
    const eventNumber = timelineEventsService.count() + 1;
    const eventName = `Event ${eventNumber}`;

    // Create minimal event - user will set type/animation in Design tab
    const newEvent: TimelineEvent = {
      id: `event_${Date.now()}`,
      name: eventName,
      timing: { startTime: timestamp },
      position: { x: 50, y: 50 },
      // No elementType, animation, or other presets
      // User must configure in Design tab
    };

    console.log('[StudioView] Creating new event from waveform:', newEvent);
    // Add to service immediately
    timelineEventsService.create(newEvent);
    // Set as editing
    setEditingEventId(newEvent.id);
    setIsNewEvent(true);
  };

  // =======================================================================
  // HANDLERS - Event List & Properties Panel
  // =======================================================================

  const handleAddEvent = () => {
    // Generate auto-incrementing event name
    const eventNumber = timelineEventsService.count() + 1;
    const eventName = `Event ${eventNumber}`;

    // Create minimal event - user will set type/animation in Design tab
    const newEvent: TimelineEvent = {
      id: `event-${Date.now()}`,
      name: eventName,
      timing: { startTime: 0 },
      position: { x: 50, y: 50 },
      // No elementType, animation, or other presets
      // User must configure in Design tab
    };

    console.log('[StudioView] Creating new event from Add button:', newEvent);
    // Add to service immediately
    timelineEventsService.create(newEvent);
    // Set as editing
    setEditingEventId(newEvent.id);
    setIsNewEvent(true);
  };

  const handleEditEvent = (event: TimelineEvent) => {
    // Store ID and sync visual selection so VisualEditor knows about form selection
    setEditingEventId(event.id);
    setSelectedEvent(event);
    setIsNewEvent(false);
  };

  const handleDeleteEvent = (eventId: string) => {
    timelineEventsService.delete(eventId);
    if (editingEventId === eventId) {
      setEditingEventId(null);
      setIsNewEvent(false);
    }
  };

  const handleDuplicateEvent = (event: TimelineEvent) => {
    // Generate name for duplicated event
    const originalName = event.name || 'Event';
    const duplicatedName = `${originalName} (Copy)`;

    const duplicated: TimelineEvent = {
      ...event,
      id: `event-${Date.now()}`,
      name: duplicatedName,
      timing: {
        ...event.timing,
        startTime: Math.min(((event.timing.startTime ?? 0) + 1), audioDuration || 999),
      },
    };

    // Generate Konva config for duplicated event
    const konvaConfig = generateKonvaConfig(duplicated, editorCanvasDimensions);
    const duplicatedWithConfig = {
      ...duplicated,
      konvaConfig,
    };

    timelineEventsService.create(duplicatedWithConfig);
  };

  const handleEventPropertyChange = (updates: Partial<TimelineEvent>) => {
    console.log('[StudioView] handleEventPropertyChange called:', { editingEventId, updates });
    if (editingEventId) {
      // Update immediately in service (no "Save" button needed)
      // But regenerate Konva config
      const currentEvent = timelineEventsService.getById(editingEventId);
      console.log('[StudioView] Current event from service:', currentEvent);
      if (currentEvent) {
        const updatedEvent = { ...currentEvent, ...updates };
        const konvaConfig = generateKonvaConfig(updatedEvent, editorCanvasDimensions);
        console.log('[StudioView] Calling service.update with:', { editingEventId, updates, konvaConfig });
        timelineEventsService.update(editingEventId, {
          ...updates,
          konvaConfig,
        });
        console.log('[StudioView] service.update completed');
      }
    }
  };

  const handleSaveEvent = () => {
    // With immediate updates, this just clears editing state
    // But we keep it for backward compatibility with UI
    if (!editingEvent) return;

    setMessage({ type: 'success', text: isNewEvent
      ? `Event added at ${(editingEvent.timestamp ?? 0).toFixed(1)}s`
      : 'Event updated'
    });

    setTimeout(() => setMessage(null), 2000);
    setEditingEventId(null);
    setIsNewEvent(false);
  };

  const handleCancelEdit = () => {
    if (isNewEvent && editingEventId) {
      // If it was a new event, delete it on cancel
      timelineEventsService.delete(editingEventId);
    }
    setEditingEventId(null);
    setIsNewEvent(false);
  };

  // =======================================================================
  // HANDLERS - Visual Editor
  // =======================================================================

  const handleCanvasDimensionsChange = (width: number, height: number) => {
    // Update canvas dimensions when background image loads
    setEditorCanvasDimensions({ width, height });
  };

  const handleEventCreate = (newEvent: Partial<TimelineEvent>) => {
    // Create complete event with required fields
    // Spread incoming data first, then set defaults only for missing fields
    const completeEvent: TimelineEvent = {
      // Spread incoming event data first
      ...newEvent,
      // Only set defaults if values are null/undefined (use ?? instead of ||)
      // This preserves timestamp: 0 as a valid value
      id: newEvent.id ?? `event-${Date.now()}`,
      timestamp: newEvent.timestamp ?? 0,
      elementType: newEvent.elementType ?? 'text',
      animation: newEvent.animation ?? 'fade',
      animationDuration: newEvent.animationDuration ?? 500,
      position: newEvent.position ?? { x: 50, y: 50 },
    };

    // Generate Konva config for the new event
    const konvaConfig = generateKonvaConfig(completeEvent, editorCanvasDimensions);
    const eventWithConfig = { ...completeEvent, konvaConfig };

    // Add to service
    timelineEventsService.create(eventWithConfig);
    // Set as selected and editing
    setSelectedEvent(eventWithConfig);
    setEditingEventId(eventWithConfig.id);
    setIsNewEvent(false); // Already added to service
  };

  const handleEventUpdateFromVisual = (eventId: string, updates: Partial<TimelineEvent>) => {
    // Update in service and regenerate Konva config
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
    const event = eventId ? timelineEventsService.getById(eventId) : null;
    setSelectedEvent(event || null);
    setEditingEventId(eventId);
    setIsNewEvent(false);
  };

  const handleEventDeleteFromVisual = (eventId: string) => {
    timelineEventsService.delete(eventId);
    if (selectedEvent?.id === eventId) {
      setSelectedEvent(null);
      setEditingEventId(null);
      setIsNewEvent(false);
    }
  };

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
        {/* Basic Information Tab */}
        <Tabs.Tab eventKey="basic" title="Basic Information">
          <Card className="mb-3">
            <Card.Body>
              <Form.Group>
                <Form.Label>Display Name *</Form.Label>
                <Form.Control
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g., Dental Anatomy Timeline"
                />
                <Form.Text className="text-muted">
                  Name shown in Studio (not visible to students)
                </Form.Text>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Title *</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Understanding Tooth Development"
                />
                <Form.Text className="text-muted">
                  Title shown to students
                </Form.Text>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of this presentation (optional)"
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Tabs.Tab>

        {/* Assets Tab */}
        <Tabs.Tab eventKey="assets" title="Assets">
          <Card className="mb-3">
            <Card.Body>
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
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
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
            </Card.Body>
          </Card>
        </Tabs.Tab>

        {/* Timeline Tab - Event Creation & Timing */}
        <Tabs.Tab eventKey="timeline" title="Timeline">
          {!audioUrl || audioDuration === 0 ? (
            <Alert variant="warning">
              {!audioUrl
                ? 'Please upload an audio file first to configure timeline events.'
                : 'Loading audio duration... Please wait.'
              }
            </Alert>
          ) : (
            <div className="row">
              {/* Left Column: Timeline & Event List */}
              <div className="col-lg-12">
                <Alert variant="info" className="mb-3">
                  <strong>Timeline Tab:</strong> Create events and set when they appear.
                  Click on the waveform or use the "Add Event" button below.
                  Then switch to the Design tab to add visual properties.
                </Alert>

                {/* Waveform Timeline */}
                <Card className="mb-3">
                  <Card.Body>
                    <WaveformTimeline
                      audioUrl={audioUrl}
                      events={timelineEvents}
                      audioDuration={audioDuration}
                      onEventClick={handleEditEvent}
                      onEventUpdate={handleWaveformEventUpdate}
                      onAddEvent={handleWaveformAddEvent}
                    />
                  </Card.Body>
                </Card>

                {/* Event List View */}
                <EventListView
                  events={timelineEvents}
                  onAddEvent={handleAddEvent}
                  onEditEvent={handleEditEvent}
                  onDeleteEvent={handleDeleteEvent}
                  onDuplicateEvent={handleDuplicateEvent}
                />
              </div>
            </div>
          )}
        </Tabs.Tab>

        {/* Design Tab - Visual Editing Only */}
        <Tabs.Tab eventKey="design" title="Design">
          {!imageUrl ? (
            <Alert variant="warning">
              Please upload a diagram image in the Assets tab first.
            </Alert>
          ) : timelineEvents.length === 0 ? (
            <Alert variant="info">
              No events created yet. Go to the Timeline tab to create events first,
              then return here to add visual properties.
            </Alert>
          ) : (
            <>
              <Alert variant="info" className="mb-3">
                <strong>Design Tab:</strong> Edit visual properties of existing events.
                Select an event from the dropdown below to modify its appearance, position, and styling.
                (Timestamps are set in the Timeline tab only)
              </Alert>

              {/* Event Selector */}
              <Card className="mb-3">
                <Card.Body>
                  <Form.Group className="mb-0">
                    <Form.Label>
                      <strong>Select Event to Edit</strong>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={editingEventId || ''}
                      onChange={(e) => {
                        const selectedId = e.target.value;
                        setEditingEventId(selectedId || null);
                        setIsNewEvent(false);
                      }}
                    >
                      <option value="">-- Select an event --</option>
                      {timelineEvents.map((event) => (
                        <option key={event.id} value={event.id}>
                          {event.name || 'Unnamed Event'} (t={formatTime(event.timing?.startTime ?? 0)})
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Text className="text-muted">
                      Choose an event to edit its visual properties and animation settings
                    </Form.Text>
                  </Form.Group>
                </Card.Body>
              </Card>

              <div className="row">
                <div className="col-lg-9">
                  {/* Drawing Toolbar */}
                  <Card className="mb-3">
                    <Card.Body>
                      <DrawingToolbar
                        currentMode={drawingMode}
                        onModeChange={setDrawingMode}
                        color={drawingColor}
                        onColorChange={setDrawingColor}
                        thickness={drawingThickness}
                        onThicknessChange={setDrawingThickness}
                      />
                    </Card.Body>
                  </Card>

                  {/* Mode Indicator */}
                  <Alert variant="info" className="mb-3">
                    <strong>Current Mode:</strong> {drawingMode.charAt(0).toUpperCase() + drawingMode.slice(1)}
                    {drawingMode === 'select' && ' - Select and position existing elements'}
                    {drawingMode === 'text' && ' - Add text to selected event'}
                    {drawingMode === 'line' && ' - Add line to selected event'}
                    {drawingMode === 'arrow' && ' - Add arrow to selected event'}
                    {drawingMode === 'circle' && ' - Add circle to selected event'}
                    {drawingMode === 'ring' && ' - Add ring highlight (non-obscuring)'}
                    {drawingMode === 'rectangle' && ' - Add rectangle to selected event'}
                  </Alert>

                  {/* Visual Canvas */}
                  <Card>
                    <Card.Body>
                      <VisualEditor
                        backgroundImageUrl={imageUrl}
                        events={timelineEvents}
                        selectedEventId={selectedEvent?.id || null}
                        editingEventId={editingEventId}
                        drawingMode={drawingMode}
                        currentColor={drawingColor}
                        currentThickness={drawingThickness}
                        onEventCreate={handleEventCreate}
                        onEventUpdate={handleEventUpdateFromVisual}
                        onEventSelect={handleEventSelectFromVisual}
                        onEventDelete={handleEventDeleteFromVisual}
                        onCanvasDimensionsChange={handleCanvasDimensionsChange}
                      />
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-lg-3">
                  {/* Event Properties Panel */}
                  <EventPropertiesPanel
                    event={editingEvent}
                    audioDuration={audioDuration}
                    onChange={handleEventPropertyChange}
                    onSave={handleSaveEvent}
                    onCancel={handleCancelEdit}
                  />
                </div>
              </div>
            </>
          )}
        </Tabs.Tab>

        {/* Preview Tab */}
        <Tabs.Tab eventKey="preview" title="Preview">
          <PreviewPanel
            imageUrl={imageUrl}
            audioUrl={audioUrl}
            events={timelineEvents}
          />
        </Tabs.Tab>
      </Tabs>

      {/* Action Buttons */}
      <div className="d-flex justify-content-end mt-4 pt-3 border-top">
        <Button
          variant="tertiary"
          onClick={handleCancel}
          disabled={saving}
          className="mr-2"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </div>
  );
};
