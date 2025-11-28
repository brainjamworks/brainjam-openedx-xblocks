/**
 * ElementEditor Component
 *
 * Form for configuring element properties with conditional fields based on element type
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import type { TimelineEvent, ElementType, ShapeType, AnimationType, AnimationDirection } from '../../common/types';

interface ElementEditorProps {
  event: TimelineEvent;
  onChange: (updates: Partial<TimelineEvent>) => void;
}

export const ElementEditor: React.FC<ElementEditorProps> = ({ event, onChange }) => {
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
        ...event.lineCoordinates,
        x1: event.lineCoordinates?.x1 || 0,
        y1: event.lineCoordinates?.y1 || 0,
        x2: event.lineCoordinates?.x2 || 100,
        y2: event.lineCoordinates?.y2 || 100,
        [coord]: Math.max(0, Math.min(100, numValue)),
      },
    });
  };

  return (
    <div className="element-editor">
      {/* Element Type */}
      <Form.Group>
        <Form.Label>Element Type</Form.Label>
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
          <Form.Group className="mt-3">
            <Form.Label>Text Content</Form.Label>
            <Form.Control
              type="text"
              value={event.content || ''}
              onChange={(e) => onChange({ content: e.target.value })}
              placeholder="Enter text content"
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Font Size (px)</Form.Label>
            <Form.Control
              type="number"
              value={event.fontSize || 16}
              onChange={(e) => onChange({ fontSize: parseInt(e.target.value) || 16 })}
              min="8"
              max="72"
            />
          </Form.Group>
        </>
      )}

      {/* Conditional Fields: Shape Element */}
      {event.elementType === 'shape' && (
        <>
          <Form.Group className="mt-3">
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

          <div className="row mt-3">
            <div className="col-6">
              <Form.Group>
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
              <Form.Group>
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
          <div className="row mt-3">
            <div className="col-6">
              <Form.Group>
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
              <Form.Group>
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

          <div className="row mt-3">
            <div className="col-6">
              <Form.Group>
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
              <Form.Group>
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

          <Form.Group className="mt-3">
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
        <div className="row mt-3">
          <div className="col-6">
            <Form.Group>
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
            <Form.Group>
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
      <Form.Group className="mt-3">
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

      {/* Animation Settings */}
      <Form.Group className="mt-3">
        <Form.Label>Animation Type</Form.Label>
        <Form.Control
          as="select"
          value={event.animation}
          onChange={(e) => onChange({ animation: e.target.value as AnimationType })}
        >
          <option value="fade">Fade In</option>
          <option value="scale">Scale</option>
          <option value="slide">Slide</option>
          <option value="draw">Draw</option>
          <option value="show">Show (instant)</option>
        </Form.Control>
      </Form.Group>

      {/* Animation Direction (for slide only - draw follows element direction) */}
      {event.animation === 'slide' && (
        <Form.Group className="mt-3">
          <Form.Label>Animation Direction</Form.Label>
          <Form.Control
            as="select"
            value={event.animationDirection || 'up'}
            onChange={(e) => onChange({ animationDirection: e.target.value as AnimationDirection })}
          >
            <option value="up">Up</option>
            <option value="down">Down</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </Form.Control>
        </Form.Group>
      )}

      {/* Animation Duration */}
      <Form.Group className="mt-3">
        <Form.Label>Animation Duration (ms)</Form.Label>
        <Form.Control
          type="number"
          value={event.animationDuration}
          onChange={(e) => onChange({ animationDuration: parseInt(e.target.value) || 300 })}
          min="100"
          max="5000"
          step="100"
        />
      </Form.Group>
    </div>
  );
};
