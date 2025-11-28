/**
 * PropertiesAccordion Component
 *
 * Right column properties panel with collapsible sections.
 * Compact, beautiful UI using Liverpool design tokens.
 *
 * Features:
 * - Accordion sections for better organization
 * - No unnecessary helper text
 * - Liverpool design tokens throughout
 * - Compact form fields
 * - Empty state when no event selected
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Icon from '@openedx/paragon/dist/Icon';
import { ExpandMore, ExpandLess } from '@openedx/paragon/icons';
import type {
  TimelineEvent,
  ElementType,
  ShapeType,
  AnimationType,
  AnimationDirection,
} from '../../common/types';
import '../styles/properties-accordion.scss';

interface PropertiesAccordionProps {
  event: TimelineEvent | null;
  onChange: (updates: Partial<TimelineEvent>) => void;
  onSave: () => void;
  onCancel: () => void;
}

/**
 * Get valid animation types for element type
 */
function getValidAnimations(elementType?: ElementType, shapeType?: ShapeType): AnimationType[] {
  if (!elementType) return ['fade', 'scale', 'slide', 'draw', 'show'];

  switch (elementType) {
    case 'text':
      return ['fade', 'scale', 'slide', 'show'];
    case 'shape':
      if (shapeType === 'ring') {
        return ['fade', 'scale', 'draw', 'slide', 'show'];
      }
      return ['fade', 'scale', 'slide', 'show'];
    case 'line':
    case 'arrow':
      return ['fade', 'draw', 'show'];
    default:
      return ['fade', 'show'];
  }
}

export const PropertiesAccordion: React.FC<PropertiesAccordionProps> = ({
  event,
  onChange,
  onSave,
  onCancel,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    content: true,
    style: true,
    animation: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  if (!event) {
    return (
      <div className="properties-accordion">
        <div className="properties-empty">
          <p className="properties-empty-text">No event selected</p>
          <p className="properties-empty-subtext">
            Select an event from the timeline to edit its properties
          </p>
        </div>
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
    <div className="properties-accordion">
      <div className="properties-accordion-header">
        <h5 className="properties-accordion-title">Event Properties</h5>
      </div>

      <div className="properties-accordion-body">
        {/* BASIC SECTION */}
        <div className="properties-section">
          <button
            className="properties-section-header"
            onClick={() => toggleSection('basic')}
            type="button"
          >
            <span className="properties-section-title">Basic</span>
            <Icon src={expandedSections.basic ? ExpandLess : ExpandMore} />
          </button>
          {expandedSections.basic && (
            <div className="properties-section-content">
              <div className="properties-field">
                <label className="properties-label">Event Name</label>
                <input
                  type="text"
                  value={event.name || ''}
                  onChange={(e) => onChange({ name: e.target.value })}
                  placeholder="e.g. Introduction"
                  className="properties-input"
                />
              </div>

              <div className="properties-field">
                <label className="properties-label">Element Type</label>
                <select
                  value={event.elementType}
                  onChange={(e) => onChange({ elementType: e.target.value as ElementType })}
                  className="properties-select"
                >
                  <option value="text">Text</option>
                  <option value="shape">Shape</option>
                  <option value="line">Line</option>
                  <option value="arrow">Arrow</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* CONTENT SECTION */}
        <div className="properties-section">
          <button
            className="properties-section-header"
            onClick={() => toggleSection('content')}
            type="button"
          >
            <span className="properties-section-title">Content</span>
            <Icon src={expandedSections.content ? ExpandLess : ExpandMore} />
          </button>
          {expandedSections.content && (
            <div className="properties-section-content">
              {/* Text Element */}
              {event.elementType === 'text' && (
                <div className="properties-field">
                  <label className="properties-label">Text Content</label>
                  <textarea
                    rows={3}
                    value={event.content || ''}
                    onChange={(e) => onChange({ content: e.target.value })}
                    placeholder="Enter text..."
                    className="properties-textarea"
                  />
                </div>
              )}

              {/* Shape Element */}
              {event.elementType === 'shape' && (
                <div className="properties-field">
                  <label className="properties-label">Shape Type</label>
                  <select
                    value={event.shapeType || 'circle'}
                    onChange={(e) => onChange({ shapeType: e.target.value as ShapeType })}
                    className="properties-select"
                  >
                    <option value="circle">Circle</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="ring">Ring</option>
                  </select>
                </div>
              )}

              {/* Line/Arrow Coordinates */}
              {(event.elementType === 'line' || event.elementType === 'arrow') && (
                <>
                  <div className="properties-field-row">
                    <div className="properties-field">
                      <label className="properties-label">Start X (%)</label>
                      <input
                        type="number"
                        value={event.lineCoordinates?.x1 || 0}
                        onChange={(e) => handleLineCoordinateChange('x1', e.target.value)}
                        min="0"
                        max="100"
                        className="properties-input"
                      />
                    </div>
                    <div className="properties-field">
                      <label className="properties-label">Start Y (%)</label>
                      <input
                        type="number"
                        value={event.lineCoordinates?.y1 || 0}
                        onChange={(e) => handleLineCoordinateChange('y1', e.target.value)}
                        min="0"
                        max="100"
                        className="properties-input"
                      />
                    </div>
                  </div>
                  <div className="properties-field-row">
                    <div className="properties-field">
                      <label className="properties-label">End X (%)</label>
                      <input
                        type="number"
                        value={event.lineCoordinates?.x2 || 100}
                        onChange={(e) => handleLineCoordinateChange('x2', e.target.value)}
                        min="0"
                        max="100"
                        className="properties-input"
                      />
                    </div>
                    <div className="properties-field">
                      <label className="properties-label">End Y (%)</label>
                      <input
                        type="number"
                        value={event.lineCoordinates?.y2 || 100}
                        onChange={(e) => handleLineCoordinateChange('y2', e.target.value)}
                        min="0"
                        max="100"
                        className="properties-input"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Position (for text/shape) */}
              {(event.elementType === 'text' || event.elementType === 'shape') && (
                <div className="properties-field-row">
                  <div className="properties-field">
                    <label className="properties-label">Position X (%)</label>
                    <input
                      type="number"
                      value={event.position.x}
                      onChange={(e) => handlePositionChange('x', e.target.value)}
                      min="0"
                      max="100"
                      className="properties-input"
                    />
                  </div>
                  <div className="properties-field">
                    <label className="properties-label">Position Y (%)</label>
                    <input
                      type="number"
                      value={event.position.y}
                      onChange={(e) => handlePositionChange('y', e.target.value)}
                      min="0"
                      max="100"
                      className="properties-input"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* STYLE SECTION */}
        <div className="properties-section">
          <button
            className="properties-section-header"
            onClick={() => toggleSection('style')}
            type="button"
          >
            <span className="properties-section-title">Style</span>
            <Icon src={expandedSections.style ? ExpandLess : ExpandMore} />
          </button>
          {expandedSections.style && (
            <div className="properties-section-content">
              <div className="properties-field">
                <label className="properties-label">Color</label>
                <div className="properties-color">
                  <input
                    type="color"
                    value={event.color || '#000000'}
                    onChange={(e) => onChange({ color: e.target.value })}
                    className="properties-color-picker"
                  />
                  <input
                    type="text"
                    value={event.color || '#000000'}
                    onChange={(e) => onChange({ color: e.target.value })}
                    className="properties-color-input"
                  />
                </div>
              </div>

              {/* Font Size (text only) */}
              {event.elementType === 'text' && (
                <div className="properties-field">
                  <label className="properties-label">Font Size: {event.fontSize || 16}px</label>
                  <input
                    type="range"
                    value={event.fontSize || 16}
                    onChange={(e) => onChange({ fontSize: parseInt(e.target.value) })}
                    min="8"
                    max="72"
                    className="properties-slider"
                  />
                </div>
              )}

              {/* Dimensions (shape only) */}
              {event.elementType === 'shape' && (
                <div className="properties-field-row">
                  <div className="properties-field">
                    <label className="properties-label">Width (px)</label>
                    <input
                      type="number"
                      value={event.dimensions?.width || 50}
                      onChange={(e) => handleDimensionChange('width', e.target.value)}
                      min="10"
                      max="500"
                      className="properties-input"
                    />
                  </div>
                  <div className="properties-field">
                    <label className="properties-label">Height (px)</label>
                    <input
                      type="number"
                      value={event.dimensions?.height || 50}
                      onChange={(e) => handleDimensionChange('height', e.target.value)}
                      min="10"
                      max="500"
                      className="properties-input"
                    />
                  </div>
                </div>
              )}

              {/* Thickness (line/arrow only) */}
              {(event.elementType === 'line' || event.elementType === 'arrow') && (
                <div className="properties-field">
                  <label className="properties-label">Thickness (px)</label>
                  <input
                    type="number"
                    value={event.thickness || 2}
                    onChange={(e) => onChange({ thickness: parseInt(e.target.value) })}
                    min="1"
                    max="20"
                    className="properties-input"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* ANIMATION SECTION */}
        <div className="properties-section">
          <button
            className="properties-section-header"
            onClick={() => toggleSection('animation')}
            type="button"
          >
            <span className="properties-section-title">Animation</span>
            <Icon src={expandedSections.animation ? ExpandLess : ExpandMore} />
          </button>
          {expandedSections.animation && (
            <div className="properties-section-content">
              <div className="properties-field">
                <label className="properties-label">Animation Type</label>
                <select
                  value={event.animation}
                  onChange={(e) => onChange({ animation: e.target.value as AnimationType })}
                  className="properties-select"
                >
                  {getValidAnimations(event.elementType, event.shapeType).map((animType) => (
                    <option key={animType} value={animType}>
                      {animType === 'fade' && 'Fade In'}
                      {animType === 'scale' && 'Scale'}
                      {animType === 'slide' && 'Slide'}
                      {animType === 'draw' && 'Draw'}
                      {animType === 'show' && 'Show'}
                    </option>
                  ))}
                </select>
              </div>

              {event.animation === 'slide' && (
                <div className="properties-field">
                  <label className="properties-label">Direction</label>
                  <select
                    value={event.animationDirection || 'up'}
                    onChange={(e) => onChange({ animationDirection: e.target.value as AnimationDirection })}
                    className="properties-select"
                  >
                    <option value="up">Up</option>
                    <option value="down">Down</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              )}

              <div className="properties-field">
                <label className="properties-label">Duration: {event.animationDuration}ms</label>
                <input
                  type="range"
                  value={event.animationDuration}
                  onChange={(e) => onChange({ animationDuration: parseInt(e.target.value) })}
                  min="100"
                  max="3000"
                  step="100"
                  className="properties-slider"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="properties-accordion-footer">
        <Button
          variant="tertiary"
          size="sm"
          onClick={onCancel}
          className="properties-btn properties-btn-cancel"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={onSave}
          className="properties-btn properties-btn-save"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
