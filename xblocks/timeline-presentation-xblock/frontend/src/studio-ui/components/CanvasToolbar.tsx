/**
 * CanvasToolbar Component
 *
 * Beautiful toolbar for visual editor in center column.
 * Provides drawing mode selection, color picker, and styling controls.
 *
 * Features:
 * - Pill-style mode buttons
 * - Inline color picker and hex input
 * - Thickness slider for applicable modes
 * - Liverpool design tokens throughout
 * - Compact layout to maximize canvas space
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Icon from '@openedx/paragon/dist/Icon';
import {
  Edit,
  Create,
  HorizontalRule,
  ArrowForward,
  RadioButtonUnchecked,
  CropSquare,
} from '@openedx/paragon/icons';
import type { DrawingMode } from '../../common/types';
import '../styles/canvas-toolbar.scss';

interface CanvasToolbarProps {
  currentMode: DrawingMode;
  onModeChange: (mode: DrawingMode) => void;
}

const modes: Array<{ mode: DrawingMode; label: string; icon: any }> = [
  { mode: 'select', label: 'Select', icon: Edit },
  { mode: 'text', label: 'Text', icon: Create },
  { mode: 'line', label: 'Line', icon: HorizontalRule },
  { mode: 'arrow', label: 'Arrow', icon: ArrowForward },
  { mode: 'circle', label: 'Circle', icon: RadioButtonUnchecked },
  { mode: 'ring', label: 'Ring', icon: RadioButtonUnchecked },
  { mode: 'rectangle', label: 'Rectangle', icon: CropSquare },
];

export const CanvasToolbar: React.FC<CanvasToolbarProps> = ({
  currentMode,
  onModeChange,
}) => {
  return (
    <div className="canvas-toolbar">
      {/* Mode buttons */}
      <div className="canvas-toolbar-modes">
        {modes.map(({ mode, label, icon }) => (
          <Button
            key={mode}
            variant={currentMode === mode ? 'primary' : 'tertiary'}
            size="sm"
            onClick={() => onModeChange(mode)}
            className={`canvas-toolbar-mode-btn ${currentMode === mode ? 'active' : ''}`}
            iconBefore={icon}
            aria-label={label}
            aria-pressed={currentMode === mode}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};
