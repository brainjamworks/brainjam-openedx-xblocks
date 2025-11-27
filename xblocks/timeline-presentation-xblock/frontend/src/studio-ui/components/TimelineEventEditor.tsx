/**
 * TimelineEventEditor Component
 *
 * List of timeline events with add/edit/delete/duplicate functionality
 * Now includes JSON import/export for Storyline timeline data
 */

import React, { useState, useRef } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import { StandardModal, Form, Alert } from '@openedx/paragon';
import IconButton from '@openedx/paragon/dist/IconButton';
import { Add, Edit, Delete, ContentCopy, FileUpload, FileDownload } from '@openedx/paragon/icons';
import type { TimelineEvent, AnimationType, CanvasDimensions } from '../../common/types';
import { ElementEditor } from './ElementEditor';
import { generateKonvaConfig } from '../utils/konvaConfigGenerator';

interface TimelineEventEditorProps {
  events: TimelineEvent[];
  onChange: (events: TimelineEvent[]) => void;
  audioDuration?: number;
  canvasDimensions: CanvasDimensions;
}

/**
 * Storyline JSON format structure
 */
interface StorylineEvent {
  time: number;
  duration: number;
  animation: string;
  element: string;
  action?: string;
}

interface StorylineJSON {
  title?: string;
  totalDuration?: number;
  events: StorylineEvent[];
}

/**
 * Import preview data
 */
interface ImportPreview {
  totalEvents: number;
  sampleEvents: TimelineEvent[];
  warnings: string[];
}

/**
 * Map Storyline animation type to our AnimationType
 */
const mapStorylineAnimation = (storylineAnim: string): AnimationType => {
  const mapping: Record<string, AnimationType> = {
    'appear': 'fade',
    'entrance': 'slide',
    'fade': 'fade',
    'scale': 'scale',
    'wipe': 'wipe',
    'slide': 'slide',
  };
  return mapping[storylineAnim.toLowerCase()] || 'fade';
};

/**
 * Convert Storyline event to our TimelineEvent format
 */
const convertStorylineEvent = (
  storylineEvent: StorylineEvent,
  index: number
): TimelineEvent => {
  // Skip audio events
  if (storylineEvent.action === 'audio_play') {
    return null as any;
  }

  // Create element definition with intelligent defaults
  const elementType = inferElementType(storylineEvent.animation);

  // Grid-based positioning (4 columns)
  const column = index % 4;
  const row = Math.floor(index / 4);
  const x = 20 + (column * 20); // 20%, 40%, 60%, 80%
  const y = 20 + (row * 15); // Spread vertically

  return {
    id: `imported-${storylineEvent.element}-${index}`,
    timestamp: storylineEvent.time,
    animationDuration: storylineEvent.duration || 500,
    animation: mapStorylineAnimation(storylineEvent.animation),
    animationDirection: storylineEvent.animation === 'entrance' ? 'right' : undefined,
    elementType,
    position: { x, y },
    content: `Element ${index + 1}`,
    color: elementType === 'text' ? '#000000' : '#4A90E2',
    fontSize: 16,
  };
};

/**
 * Infer element type from animation
 */
const inferElementType = (animation: string): 'text' | 'shape' | 'line' | 'arrow' => {
  if (animation.includes('fade') || animation.includes('appear')) {
    return 'text';
  }
  return 'shape';
};

/**
 * Parse and validate Storyline JSON
 */
const parseStorylineJSON = (jsonText: string): { data: StorylineJSON | null; error: string | null } => {
  try {
    const parsed = JSON.parse(jsonText);

    // Validate structure
    if (!parsed.events || !Array.isArray(parsed.events)) {
      return { data: null, error: 'Invalid JSON structure: missing "events" array' };
    }

    // Validate each event
    for (let i = 0; i < parsed.events.length; i++) {
      const event = parsed.events[i];
      if (typeof event.time !== 'number') {
        return { data: null, error: `Event ${i + 1}: missing or invalid "time" field` };
      }
      if (!event.animation && !event.action) {
        return { data: null, error: `Event ${i + 1}: missing "animation" or "action" field` };
      }
    }

    return { data: parsed, error: null };
  } catch (e) {
    return { data: null, error: `JSON parse error: ${(e as Error).message}` };
  }
};

export const TimelineEventEditor: React.FC<TimelineEventEditorProps> = ({
  events,
  onChange,
  audioDuration,
  canvasDimensions,
}) => {
  const [editingEvent, setEditingEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewEvent, setIsNewEvent] = useState(false);

  // Import/Export state
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importMethod, setImportMethod] = useState<'file' | 'paste'>('file');
  const [importJsonText, setImportJsonText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [importPreview, setImportPreview] = useState<ImportPreview | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sort events by timestamp
  const sortedEvents = [...events].sort((a, b) => a.timestamp - b.timestamp);

  const createNewEvent = (): TimelineEvent => ({
    id: `event-${Date.now()}`,
    timestamp: 0,
    elementType: 'text',
    animation: 'fade',
    animationDuration: 500,
    position: { x: 50, y: 50 },
    content: 'New Element',
    color: '#000000',
  });

  const handleAddEvent = () => {
    setEditingEvent(createNewEvent());
    setIsNewEvent(true);
    setIsModalOpen(true);
  };

  const handleEditEvent = (event: TimelineEvent) => {
    setEditingEvent({ ...event });
    setIsNewEvent(false);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (eventId: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      onChange(events.filter(e => e.id !== eventId));
    }
  };

  const handleDuplicateEvent = (event: TimelineEvent) => {
    const duplicated = {
      ...event,
      id: `event-${Date.now()}`,
      timestamp: Math.min((event.timestamp + 1), audioDuration || 999),
    };

    // Generate Konva config for duplicated event
    const konvaConfig = generateKonvaConfig(duplicated, canvasDimensions);
    const duplicatedWithConfig = {
      ...duplicated,
      konvaConfig,
    };

    onChange([...events, duplicatedWithConfig]);
  };

  const handleSaveEvent = () => {
    if (!editingEvent) return;

    // Generate Konva config before saving
    const konvaConfig = generateKonvaConfig(editingEvent, canvasDimensions);
    const eventWithConfig = {
      ...editingEvent,
      konvaConfig,
    };

    if (isNewEvent) {
      onChange([...events, eventWithConfig]);
    } else {
      onChange(events.map(e => e.id === editingEvent.id ? eventWithConfig : e));
    }

    setIsModalOpen(false);
    setEditingEvent(null);
    setIsNewEvent(false);
  };

  const handleUpdateEditingEvent = (updates: Partial<TimelineEvent>) => {
    if (editingEvent) {
      setEditingEvent({ ...editingEvent, ...updates });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ========== Import/Export Handlers ==========

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      processImportJSON(text);
    };
    reader.onerror = () => {
      setImportError('Failed to read file');
    };
    reader.readAsText(file);
  };

  const handlePasteJSON = () => {
    processImportJSON(importJsonText);
  };

  const processImportJSON = (jsonText: string) => {
    setImportError(null);
    setImportPreview(null);

    // Parse and validate
    const { data, error } = parseStorylineJSON(jsonText);

    if (error) {
      setImportError(error);
      return;
    }

    if (!data) {
      setImportError('Failed to parse JSON');
      return;
    }

    // Convert events
    const warnings: string[] = [];
    let validEventIndex = 0;
    const convertedEvents = data.events
      .map((storylineEvent, index) => {
        const converted = convertStorylineEvent(storylineEvent, validEventIndex);
        if (converted) {
          validEventIndex++;
        }
        return converted;
      })
      .filter((e): e is TimelineEvent => e !== null);

    // Check for audio events (skipped)
    const audioEvents = data.events.filter(e => e.action === 'audio_play');
    if (audioEvents.length > 0) {
      warnings.push(`Skipped ${audioEvents.length} audio event(s) - not supported`);
    }

    // Create preview
    const preview: ImportPreview = {
      totalEvents: convertedEvents.length,
      sampleEvents: convertedEvents.slice(0, 5),
      warnings,
    };

    setImportPreview(preview);
    setImportJsonText(jsonText); // Save for later use
  };

  const handleConfirmImport = () => {
    if (!importPreview) return;

    // Re-parse and convert the JSON
    const { data } = parseStorylineJSON(importJsonText);
    if (!data) return;

    let validEventIndex = 0;
    const convertedEvents = data.events
      .map((storylineEvent, index) => {
        const converted = convertStorylineEvent(storylineEvent, validEventIndex);
        if (converted) {
          validEventIndex++;
        }
        return converted;
      })
      .filter((e): e is TimelineEvent => e !== null);

    // Replace existing events
    onChange(convertedEvents);

    // Close modal and reset
    setIsImportModalOpen(false);
    setImportJsonText('');
    setImportError(null);
    setImportPreview(null);
  };

  const handleCancelImport = () => {
    setIsImportModalOpen(false);
    setImportJsonText('');
    setImportError(null);
    setImportPreview(null);
  };

  const handleExportJSON = () => {
    const exportData = {
      title: 'Timeline Events Export',
      totalDuration: audioDuration || 0,
      exportedAt: new Date().toISOString(),
      events,
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `timeline-events-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="timeline-event-editor">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Timeline Events ({events.length})</h5>
        <div className="d-flex gap-2">
          <Button
            variant="outline-secondary"
            iconBefore={FileUpload}
            onClick={() => setIsImportModalOpen(true)}
            size="sm"
          >
            Import JSON
          </Button>
          {events.length > 0 && (
            <Button
              variant="outline-secondary"
              iconBefore={FileDownload}
              onClick={handleExportJSON}
              size="sm"
            >
              Export JSON
            </Button>
          )}
          <Button
            variant="primary"
            iconBefore={Add}
            onClick={handleAddEvent}
            size="sm"
          >
            Add Event
          </Button>
        </div>
      </div>

      {sortedEvents.length === 0 ? (
        <Card className="text-center py-4">
          <Card.Body>
            <p className="text-muted mb-3">No timeline events yet</p>
            <Button variant="outline-primary" iconBefore={Add} onClick={handleAddEvent}>
              Add Your First Event
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <div className="events-list" style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {sortedEvents.map((event, index) => (
            <Card key={event.id} className="mb-2">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center mb-1">
                      <span className="badge badge-secondary mr-2">#{index + 1}</span>
                      <strong>{formatTime(event.timestamp)}</strong>
                      <span className="mx-2">-</span>
                      <span className="text-capitalize">{event.elementType}</span>
                      {event.elementType === 'text' && event.content && (
                        <span className="ml-2 text-muted">
                          "{event.content.substring(0, 30)}{event.content.length > 30 ? '...' : ''}"
                        </span>
                      )}
                    </div>
                    <div className="text-muted small">
                      Animation: {event.animation}
                      {event.animationDirection && ` (${event.animationDirection})`}
                      {' • '}Duration: {event.animationDuration}ms
                    </div>
                  </div>
                  <div className="d-flex">
                    <IconButton
                      src={Edit}
                      iconAs="svg"
                      alt="Edit"
                      onClick={() => handleEditEvent(event)}
                      variant="primary"
                      size="sm"
                      className="mr-1"
                    />
                    <IconButton
                      src={ContentCopy}
                      iconAs="svg"
                      alt="Duplicate"
                      onClick={() => handleDuplicateEvent(event)}
                      variant="secondary"
                      size="sm"
                      className="mr-1"
                    />
                    <IconButton
                      src={Delete}
                      iconAs="svg"
                      alt="Delete"
                      onClick={() => handleDeleteEvent(event.id)}
                      variant="danger"
                      size="sm"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <StandardModal
        title={isNewEvent ? 'Add Timeline Event' : 'Edit Timeline Event'}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingEvent(null);
          setIsNewEvent(false);
        }}
        size="lg"
        footerNode={
          <>
            <Button
              variant="tertiary"
              onClick={() => {
                setIsModalOpen(false);
                setEditingEvent(null);
                setIsNewEvent(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveEvent}>
              {isNewEvent ? 'Add Event' : 'Save Changes'}
            </Button>
          </>
        }
      >
        {editingEvent && (
          <div>
            {/* Timestamp */}
            <div className="form-group">
              <label className="font-weight-bold">
                Timestamp (seconds)
                {audioDuration && (
                  <span className="ml-2 text-muted small">
                    (0 - {audioDuration.toFixed(1)}s)
                  </span>
                )}
              </label>
              <input
                type="number"
                className="form-control"
                value={editingEvent.timestamp}
                onChange={(e) => handleUpdateEditingEvent({
                  timestamp: Math.max(0, Math.min(parseFloat(e.target.value) || 0, audioDuration || 999))
                })}
                min="0"
                max={audioDuration || undefined}
                step="0.1"
              />
              <small className="form-text text-muted">
                When should this element appear? (in seconds from start)
              </small>
            </div>

            <hr />

            {/* Element Configuration */}
            <ElementEditor
              event={editingEvent}
              onChange={handleUpdateEditingEvent}
            />
          </div>
        )}
      </StandardModal>

      {/* Import JSON Modal */}
      <StandardModal
        title="Import Timeline Events from JSON"
        isOpen={isImportModalOpen}
        onClose={handleCancelImport}
        size="lg"
        footerNode={
          <>
            <Button variant="tertiary" onClick={handleCancelImport}>
              Cancel
            </Button>
            {importPreview && (
              <Button variant="danger" onClick={handleConfirmImport}>
                Replace All Events ({importPreview.totalEvents} events)
              </Button>
            )}
          </>
        }
      >
        <div>
          {/* Import Method Selection */}
          <Form.Group className="mb-3">
            <Form.Label>Import Method</Form.Label>
            <div className="d-flex gap-3">
              <Form.Radio
                name="importMethod"
                value="file"
                checked={importMethod === 'file'}
                onChange={() => setImportMethod('file')}
              >
                Upload JSON File
              </Form.Radio>
              <Form.Radio
                name="importMethod"
                value="paste"
                checked={importMethod === 'paste'}
                onChange={() => setImportMethod('paste')}
              >
                Paste JSON
              </Form.Radio>
            </div>
          </Form.Group>

          {/* File Upload */}
          {importMethod === 'file' && (
            <Form.Group className="mb-3">
              <Form.Label>Select JSON File</Form.Label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileSelect}
                className="form-control"
              />
              <Form.Text>
                Upload a Storyline timeline JSON file (e.g., lutein-timeline.json)
              </Form.Text>
            </Form.Group>
          )}

          {/* Paste JSON */}
          {importMethod === 'paste' && (
            <Form.Group className="mb-3">
              <Form.Label>Paste JSON Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                placeholder='Paste your JSON here, e.g.:
{
  "title": "Timeline",
  "events": [
    { "time": 0.0, "duration": 750, "animation": "appear", "element": "..." }
  ]
}'
              />
              <div className="mt-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handlePasteJSON}
                  disabled={!importJsonText.trim()}
                >
                  Parse JSON
                </Button>
              </div>
            </Form.Group>
          )}

          {/* Error Display */}
          {importError && (
            <Alert variant="danger" className="mt-3">
              <Alert.Heading>Import Error</Alert.Heading>
              <p className="mb-0">{importError}</p>
            </Alert>
          )}

          {/* Import Preview */}
          {importPreview && (
            <Alert variant="success" className="mt-3">
              <Alert.Heading>Import Preview</Alert.Heading>
              <p className="mb-2">
                <strong>{importPreview.totalEvents} events</strong> ready to import
              </p>

              {/* Warnings */}
              {importPreview.warnings.length > 0 && (
                <Alert variant="warning" className="mb-3">
                  {importPreview.warnings.map((warning, idx) => (
                    <div key={idx}>{warning}</div>
                  ))}
                </Alert>
              )}

              {/* Sample Events */}
              <div className="mt-3">
                <strong>Sample Events (first 5):</strong>
                <div className="mt-2" style={{ fontSize: '0.875rem' }}>
                  {importPreview.sampleEvents.map((event, idx) => (
                    <div key={idx} className="mb-1">
                      <span className="badge badge-secondary mr-2">#{idx + 1}</span>
                      <strong>{formatTime(event.timestamp)}</strong>
                      <span className="mx-2">-</span>
                      <span className="text-capitalize">{event.elementType}</span>
                      <span className="mx-2">•</span>
                      <span>{event.animation}</span>
                      {event.content && (
                        <span className="ml-2 text-muted">
                          "{event.content}"
                        </span>
                      )}
                    </div>
                  ))}
                  {importPreview.totalEvents > 5 && (
                    <div className="text-muted mt-2">
                      ... and {importPreview.totalEvents - 5} more events
                    </div>
                  )}
                </div>
              </div>

              {/* Warning about replacement */}
              {events.length > 0 && (
                <Alert variant="warning" className="mt-3">
                  <strong>Warning:</strong> Importing will replace all {events.length} existing event(s).
                </Alert>
              )}
            </Alert>
          )}
        </div>
      </StandardModal>
    </div>
  );
};
