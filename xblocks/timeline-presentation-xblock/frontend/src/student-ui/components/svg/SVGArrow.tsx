/**
 * SVGArrow - Arrow element renderer
 *
 * Renders a line with an arrowhead at the end.
 *
 * Arrow Implementation:
 * - Uses <line> for the shaft
 * - Uses <polygon> for the arrowhead
 * - Wrapped in <g> to apply transforms to both together
 * - Arrowhead rotates to match line direction
 */

import React from 'react';
import { TimelineEvent, LayerState } from '../../../common/types';
import { percentToPixels } from './SVGElement';

interface SVGArrowProps {
  event: TimelineEvent;
  layerState: LayerState;
  canvasDimensions: { width: number; height: number };
}

/**
 * SVGArrow Component
 *
 * Renders an arrow from (x1, y1) to (x2, y2) with arrowhead at (x2, y2).
 * Arrowhead automatically rotates to match line direction.
 */
export const SVGArrow: React.FC<SVGArrowProps> = ({
  event,
  layerState,
  canvasDimensions,
}) => {
  // Guard: ensure line coordinates exist
  if (!event.lineCoordinates) {
    console.warn('Arrow element missing lineCoordinates:', event.id);
    return null;
  }

  // Convert percentage coordinates to pixels
  const start = percentToPixels(
    event.lineCoordinates.x1,
    event.lineCoordinates.y1,
    canvasDimensions
  );
  const end = percentToPixels(
    event.lineCoordinates.x2,
    event.lineCoordinates.y2,
    canvasDimensions
  );

  // Calculate arrowhead angle (in degrees)
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // Arrowhead size (adjust as needed)
  const arrowheadSize = 10;

  const strokeColor = event.color || '#212b58';
  const strokeWidth = event.thickness || 2;

  return (
    <g
      opacity={layerState.opacity}
      transform={layerState.transform}
      style={{
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
    >
      {/* Arrow shaft */}
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Arrowhead - triangle pointing right, rotated to match line direction */}
      <polygon
        points={`-${arrowheadSize},-${arrowheadSize / 2} 0,0 -${arrowheadSize},${arrowheadSize / 2}`}
        fill={strokeColor}
        transform={`translate(${end.x}, ${end.y}) rotate(${angle})`}
        style={{
          transformOrigin: 'center',
          transformBox: 'fill-box',
        }}
      />
    </g>
  );
};
