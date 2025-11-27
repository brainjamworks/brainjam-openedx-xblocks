/**
 * SVGText - Text element renderer
 *
 * Renders text with animation state from Agent 2.
 *
 * Text Positioning:
 * - textAnchor="middle" centers text horizontally
 * - dominantBaseline="middle" centers text vertically
 * - transform-origin: center ensures transforms happen from text center
 *
 * Font Support:
 * - Uses Poppins font (must be loaded in page CSS)
 * - Falls back to sans-serif if Poppins unavailable
 */

import React from 'react';
import { TimelineEvent, LayerState } from '../../../common/types';
import { percentToPixels } from './SVGElement';

interface SVGTextProps {
  event: TimelineEvent;
  layerState: LayerState;
  canvasDimensions: { width: number; height: number };
}

/**
 * SVGText Component
 *
 * Renders text centered on its position coordinates.
 * Supports multi-line text via <tspan> if needed (future enhancement).
 */
export const SVGText: React.FC<SVGTextProps> = ({
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

  const fontSize = event.fontSize || event.dimensions?.height || 16;
  const textContent = event.content || '';

  return (
    <text
      x={pos.x}
      y={pos.y}
      fontSize={fontSize}
      fill={event.color || '#333F48'}
      fontFamily="Poppins, sans-serif"
      fontWeight="normal"
      textAnchor="middle" // Center horizontally
      dominantBaseline="middle" // Center vertically
      opacity={layerState.opacity}
      transform={layerState.transform}
      style={{
        transformOrigin: 'center',
        transformBox: 'fill-box', // CRITICAL: fixes Chrome defaulting to view-box
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
    >
      {textContent}
    </text>
  );
};
