/**
 * Draggable Label Component
 *
 * A label badge that can be dragged to positions on the canvas image.
 * Based on DraggableTerm but adapted for absolute positioning on an image.
 * Shows label text in a circular badge with visual feedback for placement state.
 *
 * Features:
 * - Drag and drop using react-dnd
 * - Positioned absolutely within canvas
 * - Visual feedback for correct/incorrect/neutral state
 * - Starts at initial position, moves to placement position
 */

import React from 'react';
import { useDrag } from 'react-dnd';
import type { LabelDefinition, StudentPlacement } from '../../common/types';

const ITEM_TYPE = 'LABEL';

interface DraggableLabelProps {
  label: LabelDefinition;
  placement?: StudentPlacement;
  isCorrect?: boolean;
  disabled: boolean;
  scale?: number; // Canvas scale factor for responsive sizing
}

/**
 * Draggable Label Component
 */
export const DraggableLabel: React.FC<DraggableLabelProps> = ({
  label,
  placement,
  isCorrect,
  disabled,
  scale = 1
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { labelId: label.id, label: label.label },
    canDrag: !disabled,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [label.id, label.label, disabled]);

  // =======================================================================
  // COMPUTED VALUES - Position and State
  // =======================================================================

  // Use placement position if available, otherwise use start position (both in pixels)
  const x = placement ? placement.x : label.startX;
  const y = placement ? placement.y : label.startY;
  const hasBeenPlaced = !!placement;

  // Determine CSS classes based on state
  const getClassName = () => {
    const classes = ['draggable-label'];

    if (isDragging) {
      classes.push('dragging');
    }

    if (hasBeenPlaced) {
      classes.push('placed');

      // Show correctness feedback if available
      if (isCorrect !== undefined) {
        classes.push(isCorrect ? 'correct' : 'incorrect');
      }
    } else {
      classes.push('unplaced');
    }

    if (disabled) {
      classes.push('disabled');
    }

    return classes.join(' ');
  };

  // Apply scale to pixel coordinates
  const scaledX = x * scale;
  const scaledY = y * scale;
  const scaledWidth = label.width * scale;
  const scaledHeight = label.height * scale;

  // Get label type (default to 'normal' for backward compatibility)
  const labelType = label.type || 'normal';

  // Calculate border radius for circular appearance (normal type)
  const borderRadius = Math.min(scaledWidth, scaledHeight) / 2;

  // =======================================================================
  // RENDER - Type-specific rendering
  // =======================================================================

  // Common colors based on state
  const getColor = () => {
    if (hasBeenPlaced) {
      if (isCorrect === true) return '#28a745'; // Green when correct
      if (isCorrect === false) return '#dc3545'; // Red when incorrect
      return '#ff9800'; // Orange/amber when placed on canvas (active state)
    }
    return '#6c757d'; // Gray when in bank
  };

  // Correctness indicator (reused across all types)
  const renderCorrectnessIndicator = () => {
    if (!hasBeenPlaced || isCorrect === undefined) return null;

    return (
      <div
        className="correctness-indicator"
        style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          width: `${Math.max(16 * scale, 12)}px`,
          height: `${Math.max(16 * scale, 12)}px`,
          borderRadius: '50%',
          backgroundColor: isCorrect ? '#28a745' : '#dc3545',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: `${Math.max(10 * scale, 8)}px`,
          fontWeight: 'bold',
          border: '2px solid #ffffff',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)'
        }}
      >
        {isCorrect ? '✓' : '✗'}
      </div>
    );
  };

  // Render normal badge (circular with text inside)
  if (labelType === 'normal') {
    return (
      <div
        ref={drag}
        className={getClassName()}
        data-label-id={label.id}
        data-type="label"
        style={{
          position: 'absolute',
          // Pixel positioning with scale - center at (x, y) in scaled pixels
          left: `${scaledX}px`,
          top: `${scaledY}px`,
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`, // Equal width/height for perfect circle
          // Center the element at the position (skip when in label bank)
          transform: placement ? 'translate(-50%, -50%)' : 'none',
          opacity: isDragging ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getColor(),
          color: '#ffffff',
          borderRadius: `${borderRadius}px`, // Circular with pixel radius
          border: '2px solid #ffffff',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          fontWeight: 'bold',
          fontSize: `${Math.max(14 * scale, 12)}px`,
          userSelect: 'none',
          transition: 'all 0.2s ease',
          zIndex: isDragging ? 1000 : hasBeenPlaced ? 10 : 5
        }}
      >
        <div className="label-content">{label.label}</div>
        {renderCorrectnessIndicator()}
      </div>
    );
  }

  // Render dot marker with floating text
  if (labelType === 'dot') {
    // Calculate pixel-based dimensions with scale
    const dotSize = 15 * scale; // Fixed dot size scaled
    const textBoxWidth = scaledWidth - dotSize;
    const textBoxHeight = scaledHeight - dotSize;

    return (
      <div
        ref={drag}
        className={getClassName()}
        data-label-id={label.id}
        data-type="label"
        style={{
          position: 'absolute',
          // Pixel positioning with scale
          left: `${scaledX}px`,
          top: `${scaledY}px`,
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
          transform: placement ? 'translate(-25%, -25%)' : 'none', // Offset so dot (at bottom-left) is at (x, y) (skip in bank)
          opacity: isDragging ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'grab',
          userSelect: 'none',
          zIndex: isDragging ? 1000 : hasBeenPlaced ? 10 : 5
        }}
      >
        {/* Dot marker at bottom-left - this is the registration/aiming point */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderRadius: '50%',
            backgroundColor: getColor(),
            border: '2px solid #ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
        />

        {/* Floating text box (northeast) */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: `${textBoxWidth}px`,
            height: `${textBoxHeight}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: getColor(),
            color: '#ffffff',
            borderRadius: `${Math.max(8 * scale, 6)}px`,
            border: '2px solid #ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            fontWeight: 'bold',
            fontSize: `${Math.max(14 * scale, 12)}px`,
            padding: `${Math.max(4 * scale, 2)}px ${Math.max(8 * scale, 4)}px`
          }}
        >
          {label.label}
        </div>

        {renderCorrectnessIndicator()}
      </div>
    );
  }

  // Render cross (X) marker with floating text
  if (labelType === 'cross') {
    // Calculate pixel-based dimensions with scale
    const crossSize = 12 * scale; // Fixed cross size scaled (smaller than dot marker)
    const textBoxWidth = scaledWidth - crossSize;
    const textBoxHeight = scaledHeight - crossSize;

    return (
      <div
        ref={drag}
        className={getClassName()}
        data-label-id={label.id}
        data-type="label"
        style={{
          position: 'absolute',
          // Pixel positioning with scale
          left: `${scaledX}px`,
          top: `${scaledY}px`,
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
          transform: placement ? 'translate(-25%, -25%)' : 'none', // Offset so cross (at bottom-left) is at (x, y) (skip in bank)
          opacity: isDragging ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'grab',
          userSelect: 'none',
          zIndex: isDragging ? 1000 : hasBeenPlaced ? 10 : 5
        }}
      >
        {/* Cross (X) marker at bottom-left - this is the registration/aiming point */}
        <svg
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: `${crossSize}px`,
            height: `${crossSize}px`,
            filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))'
          }}
          viewBox="0 0 20 20"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="20"
            stroke={getColor()}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="0"
            x2="0"
            y2="20"
            stroke={getColor()}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating text box (northeast) */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: `${textBoxWidth}px`,
            height: `${textBoxHeight}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: getColor(),
            color: '#ffffff',
            borderRadius: `${Math.max(8 * scale, 6)}px`,
            border: '2px solid #ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            fontWeight: 'bold',
            fontSize: `${Math.max(14 * scale, 12)}px`,
            padding: `${Math.max(4 * scale, 2)}px ${Math.max(8 * scale, 4)}px`,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {label.label}
        </div>

        {renderCorrectnessIndicator()}
      </div>
    );
  }

  // Fallback (should never reach here)
  return null;
};

export { ITEM_TYPE };
export default DraggableLabel;
