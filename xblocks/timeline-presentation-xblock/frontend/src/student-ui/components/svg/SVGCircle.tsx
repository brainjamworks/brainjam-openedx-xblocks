/**
 * SVGCircle - Circle shape renderer
 *
 * Renders a circle element with animation state from Agent 2.
 *
 * Critical CSS Properties:
 * - transform-origin: center - ensures transforms happen from circle center
 * - transform-box: fill-box - fixes Chrome defaulting to view-box (CRITICAL!)
 */

import React from 'react';
import { TimelineEvent, LayerState } from '../../../common/types';
import { percentToPixels } from './SVGElement';

interface SVGCircleProps {
  event: TimelineEvent;
  layerState: LayerState;
  canvasDimensions: { width: number; height: number };
}

/**
 * SVGCircle Component
 *
 * Renders a circle at the specified position with animation state.
 * Circle is centered on its position coordinates.
 */
export const SVGCircle: React.FC<SVGCircleProps> = ({
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

  // For circles, dimensions.width is the diameter in percentage
  const diameterPercent = event.dimensions?.width || 50;
  const radiusPixels = ((diameterPercent / 100) * canvasDimensions.width) / 2;

  return (
    <circle
      cx={pos.x}
      cy={pos.y}
      r={radiusPixels}
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
