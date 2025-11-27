/**
 * SVGRectangle - Rectangle shape renderer
 *
 * Renders a rectangle element with animation state from Agent 2.
 *
 * Critical CSS Properties:
 * - transform-origin: center - ensures transforms happen from rectangle center
 * - transform-box: fill-box - fixes Chrome defaulting to view-box (CRITICAL!)
 *
 * Note: SVG <rect> x,y is top-left corner, so we offset to center the rectangle
 */

import React from 'react';
import { TimelineEvent, LayerState } from '../../../common/types';
import { percentToPixels } from './SVGElement';

interface SVGRectangleProps {
  event: TimelineEvent;
  layerState: LayerState;
  canvasDimensions: { width: number; height: number };
}

/**
 * SVGRectangle Component
 *
 * Renders a rectangle centered on its position coordinates.
 * Supports rounded corners for modern appearance.
 */
export const SVGRectangle: React.FC<SVGRectangleProps> = ({
  event,
  layerState,
  canvasDimensions,
}) => {
  // Convert percentage position to pixels
  const pos = percentToPixels(
    event.position.x,
    event.position.y,
    canvasDimensions
  );

  // Convert percentage dimensions to pixels
  const widthPixels = ((event.dimensions?.width || 100) / 100) * canvasDimensions.width;
  const heightPixels = ((event.dimensions?.height || 50) / 100) * canvasDimensions.height;

  // Offset to center the rectangle on its position
  const x = pos.x - widthPixels / 2;
  const y = pos.y - heightPixels / 2;

  return (
    <rect
      x={x}
      y={y}
      width={widthPixels}
      height={heightPixels}
      rx={4} // Rounded corners
      ry={4}
      fill={event.color || '#00A689'}
      opacity={layerState.opacity}
      transform={layerState.transform}
      style={{
        transformOrigin: 'center',
        transformBox: 'fill-box', // CRITICAL: fixes Chrome defaulting to view-box
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
    />
  );
};
