/**
 * Drop Zone Component
 *
 * Invisible drop target positioned on the background image to accept
 * draggable labels. Uses react-dnd's useDrop hook for drag-and-drop handling.
 *
 * Features:
 * - Invisible by default (only visible in debug/studio mode)
 * - Positioned absolutely on canvas using zone coordinates
 * - Accepts draggable labels
 * - Enforces single occupancy (one label per zone)
 * - Handles snap-to-center logic when labels are dropped nearby
 * - Visual feedback when hovering with a draggable item
 */

import React from 'react';
import type { DropZone as DropZoneType } from '../../common/types';

interface DropZoneProps {
  zone: DropZoneType;
  isOccupied: boolean;
  visible?: boolean; // For debug mode
  scale: number; // Canvas scale factor for responsive sizing
}

/**
 * Drop Zone Component (Visualization Only)
 *
 * This component renders visual indicators for drop zones.
 * Drop handling is done by the parent AssessmentCanvas component.
 *
 * Coordinates are stored in pixels and scaled for responsive display.
 */
export const DropZone: React.FC<DropZoneProps> = ({
  zone,
  isOccupied,
  visible = false,
  scale
}) => {

  // =======================================================================
  // COMPUTED VALUES - Apply scale to pixel coordinates
  // =======================================================================

  // Zone is already in pixels, just apply scale
  const zoneDiameter = zone.radius * 2 * scale;

  // Determine background color based on state
  const getBackgroundColor = () => {
    if (!visible) return 'transparent';

    if (isOccupied) {
      return 'rgba(108, 117, 125, 0.2)'; // Gray when occupied
    }

    return 'rgba(0, 123, 255, 0.2)'; // Blue when empty
  };

  // Determine border style
  const getBorderStyle = () => {
    if (!visible) return 'none';

    if (isOccupied) {
      return '2px solid #6c757d'; // Gray solid border when occupied
    }

    return '2px dashed #007bff'; // Blue dashed border when empty
  };

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div
      className={`drop-zone ${isOccupied ? 'occupied' : 'empty'}`}
      data-zone-id={zone.id}
      data-correct-answer={zone.correctAnswer}
      title={visible ? `Zone ${zone.id} - ${zone.description || 'Drop zone'}` : undefined}
      style={{
        position: 'absolute',
        // Use pixel coordinates with scale
        left: `${zone.x * scale}px`,
        top: `${zone.y * scale}px`,
        width: `${zoneDiameter}px`,
        height: `${zoneDiameter}px`, // Equal width/height for perfect circle
        // Offset by half to center (using CSS transform)
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%', // Circular shape
        backgroundColor: getBackgroundColor(),
        border: getBorderStyle(),
        pointerEvents: 'none',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${Math.max(10 * scale, 8)}px`,
        color: visible ? '#6c757d' : 'transparent',
        zIndex: 1
      }}
    >
      {/* Debug label - only visible in debug/studio mode */}
      {visible && (
        <div
          className="zone-label"
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        >
          {zone.correctAnswer}
          {zone.description && (
            <div style={{ fontSize: '0.8em', fontWeight: 'normal' }}>
              {zone.description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropZone;
