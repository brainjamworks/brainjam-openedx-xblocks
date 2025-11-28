/**
 * DrawingToolbar Component
 *
 * Horizontal toolbar for visual editor drawing modes and styling controls
 * Provides mode selection, color picker, and line thickness adjustment
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import {
  Edit,
  Create,
  HorizontalRule,
  ArrowForward,
  RadioButtonUnchecked,
  CropSquare
} from '@openedx/paragon/icons';
import type { DrawingMode } from '../../common/types';

interface DrawingToolbarProps {
  /** Current active drawing mode */
  currentMode: DrawingMode;

  /** Callback when mode changes */
  onModeChange: (mode: DrawingMode) => void;

  /** Current drawing color */
  color: string;

  /** Callback when color changes */
  onColorChange: (color: string) => void;

  /** Current line thickness (1-10px) */
  thickness: number;

  /** Callback when thickness changes */
  onThicknessChange: (thickness: number) => void;
}

export const DrawingToolbar: React.FC<DrawingToolbarProps> = ({
  currentMode,
  onModeChange,
  color,
  onColorChange,
  thickness,
  onThicknessChange,
}) => {
  const modes: Array<{ mode: DrawingMode; label: string; icon: any }> = [
    { mode: 'select', label: 'Select', icon: Edit },
    { mode: 'text', label: 'Text', icon: Create },
    { mode: 'line', label: 'Line', icon: HorizontalRule },
    { mode: 'arrow', label: 'Arrow', icon: ArrowForward },
    { mode: 'circle', label: 'Circle', icon: RadioButtonUnchecked },
    { mode: 'ring', label: 'Ring', icon: RadioButtonUnchecked }, // Non-obscuring highlight
    { mode: 'rectangle', label: 'Rectangle', icon: CropSquare },
  ];

  return (
    <div className="drawing-toolbar">
      <div className="d-flex align-items-center gap-3">
        {/* Drawing Mode Buttons */}
        <div className="drawing-toolbar-modes">
          <div className="btn-group" role="group" aria-label="Drawing modes">
            {modes.map(({ mode, label, icon }) => (
              <Button
                key={mode}
                variant={currentMode === mode ? 'primary' : 'outline-primary'}
                iconBefore={icon}
                onClick={() => onModeChange(mode)}
                size="sm"
                className="drawing-toolbar-mode-btn"
                aria-label={label}
                aria-pressed={currentMode === mode}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="drawing-toolbar-divider" />

        {/* Color Picker */}
        <div className="drawing-toolbar-color">
          <Form.Group className="mb-0">
            <Form.Label className="mb-1 small">Color</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="color"
                value={color}
                onChange={(e) => onColorChange(e.target.value)}
                style={{
                  width: '50px',
                  height: '38px',
                  marginRight: '0.5rem',
                  cursor: 'pointer'
                }}
                aria-label="Select drawing color"
              />
              <Form.Control
                type="text"
                value={color}
                onChange={(e) => onColorChange(e.target.value)}
                placeholder="#000000"
                style={{ width: '100px' }}
                pattern="^#[0-9A-Fa-f]{6}$"
                aria-label="Color hex code"
              />
            </div>
          </Form.Group>
        </div>

        {/* Thickness Slider (for line/arrow/ring modes) */}
        {(currentMode === 'line' || currentMode === 'arrow' || currentMode === 'ring') && (
          <>
            <div className="drawing-toolbar-divider" />
            <div className="drawing-toolbar-thickness">
              <Form.Group className="mb-0">
                <Form.Label className="mb-1 small">
                  {currentMode === 'ring' ? 'Ring Width' : 'Thickness'}: {thickness}px
                </Form.Label>
                <Form.Control
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={thickness}
                  onChange={(e) => onThicknessChange(parseInt(e.target.value))}
                  style={{ width: '150px' }}
                  aria-label={currentMode === 'ring' ? 'Ring width' : 'Line thickness'}
                />
              </Form.Group>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
