/**
 * Event Properties Panel Component
 *
 * Side panel for editing timeline event properties
 * Opens when an event is selected from the timeline or list
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Card from '@openedx/paragon/dist/Card';
import { Close } from '@openedx/paragon/icons';
import IconButton from '@openedx/paragon/dist/IconButton';
import type {
  TimelineEvent,
  ElementType,
  ShapeType,
  AnimationType,
  AnimationDirection,
} from '../../common/types';

interface EventPropertiesPanelProps {
  event: TimelineEvent | null;
  audioDuration: number;
  onChange: (updates: Partial<TimelineEvent>) => void;
  onSave: () => void;
  onCancel: () => void;
}

/**
 * Get valid animation types for an element type
 * Based on Animation Design System research
 */
function getValidAnimations(elementType?: ElementType, shapeType?: ShapeType): AnimationType[] {
  if (!elementType) {
    // If no element type set, show all (defensive)
    return ['fade', 'scale', 'slide', 'draw', 'show'];
  }

  switch (elementType) {
    case 'text':
      // Text: Essential Three + scale
      return ['fade', 'scale', 'slide', 'show'];

    case 'shape':
      // Ring supports draw animation (dash offset circular drawing)
      if (shapeType === 'ring') {
        return ['fade', 'scale', 'draw', 'slide', 'show'];
      }
      // Other shapes (circle, rectangle): Essential Three + scale
      return ['fade', 'scale', 'slide', 'show'];

    case 'line':
    case 'arrow':
      // Lines and arrows: Essential Three + draw
      return ['fade', 'draw', 'show'];

    default:
      return ['fade', 'show'];
  }
}

export const EventPropertiesPanel: React.FC<EventPropertiesPanelProps> = ({
  event,
  audioDuration,
  onChange,
  onSave,
  onCancel,
}) => {
  if (!event) {
    return (
      <div className="event-properties-panel-empty">
        <Card className="h-100 d-flex align-items-center justify-content-center">
          <Card.Body className="text-center text-muted">
            <p>Select an event to edit its properties</p>
            <p className="small">or click "Add Event" to create a new one</p>
          </Card.Body>
        </Card>
      </div>
    );
  }

  const handlePositionChange = (axis: 'x' | 'y', value: string) => {
    const numValue = parseFloat(value) || 0;
    onChange({
      position: {
        ...event.position,
        [axis]: Math.max(0, Math.min(100, numValue)),
      },
    });
  };

  const handleDimensionChange = (dimension: 'width' | 'height', value: string) => {
    const numValue = parseFloat(value) || 0;
    onChange({
      dimensions: {
        ...event.dimensions,
        [dimension]: Math.max(0, numValue),
      },
    });
  };

  const handleLineCoordinateChange = (coord: 'x1' | 'y1' | 'x2' | 'y2', value: string) => {
    const numValue = parseFloat(value) || 0;
    onChange({
      lineCoordinates: {
        x1: event.lineCoordinates?.x1 || 0,
        y1: event.lineCoordinates?.y1 || 0,
        x2: event.lineCoordinates?.x2 || 100,
        y2: event.lineCoordinates?.y2 || 100,
        [coord]: Math.max(0, Math.min(100, numValue)),
      },
    });
  };

  return (
    <div className="event-properties-panel">
      <Card className="h-100">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Event Properties</h5>
          <IconButton
            src={Close}
            iconAs="svg"
            alt="Close"
            onClick={onCancel}
            variant="tertiary"
            size="sm"
          />
        </Card.Header>
        <Card.Body style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          {/* Timestamp removed - set in Timeline tab only */}

          {/* Event Name */}
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Event Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              value={event.name || ''}
              onChange={(e) => onChange({ name: e.target.value })}
              placeholder="e.g., 'Introduction', 'Step 1'"
            />
            <Form.Text className="text-muted">
              Give this event a descriptive name for easy identification
            </Form.Text>
          </Form.Group>

          {/* Element Type */}
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Element Type</strong>
            </Form.Label>
            <Form.Control
              as="select"
              value={event.elementType}
              onChange={(e) => onChange({ elementType: e.target.value as ElementType })}
            >
              <option value="text">Text</option>
              <option value="shape">Shape</option>
              <option value="line">Line</option>
              <option value="arrow">Arrow</option>
            </Form.Control>
          </Form.Group>

          {/* Conditional Fields: Text Element */}
          {event.elementType === 'text' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Text Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={event.content || ''}
                  onChange={(e) => onChange({ content: e.target.value })}
                  placeholder="Enter text content"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Font Size</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="range"
                    value={event.fontSize || 16}
                    onChange={(e) => onChange({ fontSize: parseInt(e.target.value) || 16 })}
                    min="8"
                    max="72"
                    className="flex-grow-1 mr-2"
                  />
                  <span className="text-muted" style={{ minWidth: '50px' }}>
                    {event.fontSize || 16}px
                  </span>
                </div>
              </Form.Group>
            </>
          )}

          {/* Conditional Fields: Shape Element */}
          {event.elementType === 'shape' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Shape Type</Form.Label>
                <Form.Control
                  as="select"
                  value={event.shapeType || 'circle'}
                  onChange={(e) => onChange({ shapeType: e.target.value as ShapeType })}
                >
                  <option value="circle">Circle</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="triangle">Triangle</option>
                </Form.Control>
              </Form.Group>

              <div className="row">
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Width (px)</Form.Label>
                    <Form.Control
                      type="number"
                      value={event.dimensions?.width || 50}
                      onChange={(e) => handleDimensionChange('width', e.target.value)}
                      min="10"
                      max="500"
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Height (px)</Form.Label>
                    <Form.Control
                      type="number"
                      value={event.dimensions?.height || 50}
                      onChange={(e) => handleDimensionChange('height', e.target.value)}
                      min="10"
                      max="500"
                    />
                  </Form.Group>
                </div>
              </div>
            </>
          )}

          {/* Conditional Fields: Line/Arrow Element */}
          {(event.elementType === 'line' || event.elementType === 'arrow') && (
            <>
              <div className="row">
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Start X (%)</Form.Label>
                    <Form.Control
                      type="number"
                      value={event.lineCoordinates?.x1 || 0}
                      onChange={(e) => handleLineCoordinateChange('x1', e.target.value)}
                      min="0"
                      max="100"
                      step="1"
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Start Y (%)</Form.Label>
                    <Form.Control
                      type="number"
                      value={event.lineCoordinates?.y1 || 0}
                      onChange={(e) => handleLineCoordinateChange('y1', e.target.value)}
                      min="0"
                      max="100"
                      step="1"
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Label>End X (%)</Form.Label>
                    <Form.Control
                      type="number"
                      value={event.lineCoordinates?.x2 || 100}
                      onChange={(e) => handleLineCoordinateChange('x2', e.target.value)}
                      min="0"
                      max="100"
                      step="1"
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Label>End Y (%)</Form.Label>
                    <Form.Control
                      type="number"
                      value={event.lineCoordinates?.y2 || 100}
                      onChange={(e) => handleLineCoordinateChange('y2', e.target.value)}
                      min="0"
                      max="100"
                      step="1"
                    />
                  </Form.Group>
                </div>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Thickness (px)</Form.Label>
                <Form.Control
                  type="number"
                  value={event.thickness || 2}
                  onChange={(e) => onChange({ thickness: parseInt(e.target.value) || 2 })}
                  min="1"
                  max="20"
                />
              </Form.Group>
            </>
          )}

          {/* Position (for text and shape) */}
          {(event.elementType === 'text' || event.elementType === 'shape') && (
            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3">
                  <Form.Label>Position X (%)</Form.Label>
                  <Form.Control
                    type="number"
                    value={event.position.x}
                    onChange={(e) => handlePositionChange('x', e.target.value)}
                    min="0"
                    max="100"
                    step="1"
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3">
                  <Form.Label>Position Y (%)</Form.Label>
                  <Form.Control
                    type="number"
                    value={event.position.y}
                    onChange={(e) => handlePositionChange('y', e.target.value)}
                    min="0"
                    max="100"
                    step="1"
                  />
                </Form.Group>
              </div>
            </div>
          )}

          {/* Color (all element types) */}
          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="color"
                value={event.color || '#000000'}
                onChange={(e) => onChange({ color: e.target.value })}
                style={{ width: '60px', height: '38px', marginRight: '0.5rem' }}
              />
              <Form.Control
                type="text"
                value={event.color || '#000000'}
                onChange={(e) => onChange({ color: e.target.value })}
                placeholder="#000000"
              />
            </div>
          </Form.Group>

          <hr />

          {/* Animation Settings */}
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Animation Type</strong>
            </Form.Label>
            <Form.Control
              as="select"
              value={event.animation}
              onChange={(e) => onChange({ animation: e.target.value as AnimationType })}
            >
              {getValidAnimations(event.elementType, event.shapeType).map((animType) => (
                <option key={animType} value={animType}>
                  {animType === 'fade' && 'Fade In'}
                  {animType === 'scale' && 'Scale'}
                  {animType === 'slide' && 'Slide'}
                  {animType === 'draw' && 'Draw'}
                  {animType === 'show' && 'Show (instant)'}
                </option>
              ))}
            </Form.Control>
            <Form.Text className="text-muted">
              {event.elementType === 'text' || event.elementType === 'shape'
                ? 'Text and shapes support fade, scale, slide, and show animations'
                : 'Lines and arrows support fade, draw, and show animations'}
            </Form.Text>
          </Form.Group>

          {/* Animation Direction (for slide only - draw always follows element direction) */}
          {event.animation === 'slide' && (
            <Form.Group className="mb-3">
              <Form.Label>Animation Direction</Form.Label>
              <Form.Control
                as="select"
                value={event.animationDirection || 'up'}
                onChange={(e) =>
                  onChange({ animationDirection: e.target.value as AnimationDirection })
                }
              >
                <option value="up">Up</option>
                <option value="down">Down</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </Form.Control>
              <Form.Text className="text-muted">
                Direction the element slides in from
              </Form.Text>
            </Form.Group>
          )}

          {/* Animation Duration */}
          <Form.Group className="mb-3">
            <Form.Label>Animation Duration</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="range"
                value={event.animationDuration}
                onChange={(e) =>
                  onChange({ animationDuration: parseInt(e.target.value) || 300 })
                }
                min="100"
                max="3000"
                step="100"
                className="flex-grow-1 mr-2"
              />
              <span className="text-muted" style={{ minWidth: '70px' }}>
                {event.animationDuration}ms
              </span>
            </div>
          </Form.Group>
        </Card.Body>

        <Card.Footer className="d-flex justify-content-end">
          <Button variant="tertiary" onClick={onCancel} className="mr-2">
            Cancel
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save Changes
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};
