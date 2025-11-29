/**
 * HotspotItem Component
 *
 * Individual hotspot preview for DraggableList.
 * Shows label, correct/incorrect badge, feedback snippet, and coordinates.
 *
 * Pattern: Matches drag-drop-matching (plain div, no Card wrapper)
 */

import React from 'react';
import Badge from '@openedx/paragon/dist/Badge';
import type { Hotspot } from '../../common/types';

interface HotspotItemProps {
  hotspot: Hotspot;
  index: number;
}

export const HotspotItem: React.FC<HotspotItemProps> = ({ hotspot, index }) => {
  const formatCoordinates = () => {
    if (hotspot.shape === 'circle') {
      const [x, y, radius] = hotspot.coordinates;
      return `Circle (${x.toFixed(1)}%, ${y.toFixed(1)}%, r=${radius.toFixed(1)}%)`;
    } else if (hotspot.shape === 'rectangle') {
      const [x1, y1, x2, y2] = hotspot.coordinates;
      return `Rectangle (${x1.toFixed(1)}%, ${y1.toFixed(1)}%) to (${x2.toFixed(1)}%, ${y2.toFixed(1)}%)`;
    } else if (hotspot.shape === 'polygon') {
      return `Polygon (${hotspot.coordinates.length / 2} points)`;
    }
    return 'Unknown shape';
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="flex-grow-1">
          {/* Label */}
          <div className="mb-2">
            <strong>Hotspot {index + 1}: {hotspot.label || '(No label)'}</strong>
          </div>

          {/* Correct/Incorrect Badge */}
          <div className="mb-2">
            <Badge variant={hotspot.correct ? 'success' : 'secondary'}>
              {hotspot.correct ? 'Correct' : 'Incorrect'}
            </Badge>
          </div>

          {/* Feedback */}
          {hotspot.feedback && (
            <div className="mb-2">
              <small className="text-muted">
                Feedback: {hotspot.feedback.substring(0, 50)}
                {hotspot.feedback.length > 50 ? '...' : ''}
              </small>
            </div>
          )}

          {/* Coordinates */}
          <div>
            <small className="text-muted">{formatCoordinates()}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
