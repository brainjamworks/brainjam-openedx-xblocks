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
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields, TimelineEvent, AssetUploadResponse } from '../common/types';
import { AssetUploader } from './components/AssetUploader';
import { TimelineEventEditor } from './components/TimelineEventEditor';
import { WaveformTimeline } from './components/WaveformTimeline';
import { PreviewPanel } from './components/PreviewPanel';
import { EventPropertiesPanel } from './components/EventPropertiesPanel';
import { EventListView } from './components/EventListView';

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
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(fields.timeline_events || []);
  const [audioDuration, setAudioDuration] = useState(0);

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
  const [editingEvent, setEditingEvent] = useState<TimelineEvent | null>(null);
  const [isNewEvent, setIsNewEvent] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

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
    setTimelineEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === eventId
          ? { ...event, timestamp: newTimestamp }
          : event
      )
    );
    console.log(`[Timeline] Event ${eventId} moved to ${newTimestamp.toFixed(2)}s`);
  };

  const handleWaveformAddEvent = (timestamp: number) => {
    // Create new event at clicked position
    const newEvent: TimelineEvent = {
      id: `event_${Date.now()}`,
      timestamp: timestamp,
      elementType: 'text',
      animation: 'fade',
      animationDuration: 500,
      position: { x: 50, y: 50 },
      content: 'New text element',
    };

    setEditingEvent(newEvent);
    setIsNewEvent(true);
  };

  // =======================================================================
  // HANDLERS - Event List & Properties Panel
  // =======================================================================

  const handleAddEvent = () => {
    const newEvent: TimelineEvent = {
      id: `event-${Date.now()}`,
      timestamp: 0,
      elementType: 'text',
      animation: 'fade',
      animationDuration: 500,
      position: { x: 50, y: 50 },
      content: 'New Element',
      color: '#000000',
    };
    setEditingEvent(newEvent);
    setIsNewEvent(true);
  };

  const handleEditEvent = (event: TimelineEvent) => {
    setEditingEvent({ ...event });
    setIsNewEvent(false);
  };

  const handleDeleteEvent = (eventId: string) => {
    setTimelineEvents(events => events.filter(e => e.id !== eventId));
    if (editingEvent?.id === eventId) {
      setEditingEvent(null);
      setIsNewEvent(false);
    }
  };

  const handleDuplicateEvent = (event: TimelineEvent) => {
    const duplicated = {
      ...event,
      id: `event-${Date.now()}`,
      timestamp: Math.min((event.timestamp + 1), audioDuration || 999),
    };
    setTimelineEvents(events => [...events, duplicated]);
  };

  const handleEventPropertyChange = (updates: Partial<TimelineEvent>) => {
    if (editingEvent) {
      setEditingEvent({ ...editingEvent, ...updates });
    }
  };

  const handleSaveEvent = () => {
    if (!editingEvent) return;

    if (isNewEvent) {
      setTimelineEvents(events => [...events, editingEvent]);
      setMessage({ type: 'success', text: `Event added at ${editingEvent.timestamp.toFixed(1)}s` });
    } else {
      setTimelineEvents(events =>
        events.map(e => e.id === editingEvent.id ? editingEvent : e)
      );
      setMessage({ type: 'success', text: 'Event updated' });
    }

    setTimeout(() => setMessage(null), 2000);
    setEditingEvent(null);
    setIsNewEvent(false);
  };

  const handleCancelEdit = () => {
    setEditingEvent(null);
    setIsNewEvent(false);
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

        {/* Timeline Events Tab */}
        <Tabs.Tab eventKey="timeline" title="Timeline Events">
          {!audioUrl || audioDuration === 0 ? (
            <Alert variant="warning">
              {!audioUrl
                ? 'Please upload an audio file first to configure timeline events.'
                : 'Loading audio duration... Please wait.'
              }
            </Alert>
          ) : (
            <div className="row">
              {/* Left Column: Timeline & Event List (70%) */}
              <div className="col-lg-8">
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

              {/* Right Column: Properties Panel (30%) */}
              <div className="col-lg-4">
                <EventPropertiesPanel
                  event={editingEvent}
                  audioDuration={audioDuration}
                  onChange={handleEventPropertyChange}
                  onSave={handleSaveEvent}
                  onCancel={handleCancelEdit}
                />
              </div>
            </div>
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
