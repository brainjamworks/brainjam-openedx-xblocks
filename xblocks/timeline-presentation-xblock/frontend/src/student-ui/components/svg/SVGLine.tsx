/**
 * SVGLine - Line element renderer
 *
 * Renders a line between two points with animation state from Agent 2.
 *
 * Line Animation:
 * - Lines can use stroke-dasharray/dashoffset for "wipe" animations
 * - Agent 2 handles the dashoffset calculation via transform property
 */

import React from 'react';
import { TimelineEvent, LayerState } from '../../../common/types';
import { percentToPixels } from './SVGElement';

interface SVGLineProps {
  event: TimelineEvent;
  layerState: LayerState;
  canvasDimensions: { width: number; height: number };
}

/**
 * SVGLine Component
 *
 * Renders a line from (x1, y1) to (x2, y2).
 * Supports stroke width and color customization.
 */
export const SVGLine: React.FC<SVGLineProps> = ({
  event,
  layerState,
  canvasDimensions,
}) => {
  // Guard: ensure line coordinates exist
  if (!event.lineCoordinates) {
  // console.warn('Line element missing lineCoordinates:', event.id);
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

  return (
    <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      stroke={event.color || '#212b58'}
      strokeWidth={event.thickness || 2}
      strokeLinecap="round" // Smooth line endings
      opacity={layerState.opacity}
      transform={layerState.transform}
      style={{
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
    />
  );
};
