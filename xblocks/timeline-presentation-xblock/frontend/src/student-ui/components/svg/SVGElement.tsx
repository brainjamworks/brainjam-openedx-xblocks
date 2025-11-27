/**
 * SVGElement - Router component for timeline elements
 *
 * Routes to the appropriate SVG renderer based on element type.
 * Handles percentage-to-pixel coordinate conversion.
 */

import React from 'react';
import { TimelineEvent, LayerState } from '../../../common/types';
import { SVGCircle } from './SVGCircle';
import { SVGRectangle } from './SVGRectangle';
import { SVGLine } from './SVGLine';
import { SVGArrow } from './SVGArrow';
import { SVGText } from './SVGText';

interface SVGElementProps {
  /** Timeline event configuration */
  event: TimelineEvent;

  /** Current animation state (from Agent 2) */
  layerState: LayerState;

  /** Canvas dimensions for coordinate conversion */
  canvasDimensions: { width: number; height: number };
}

/**
 * Coordinate conversion helper
 * Converts percentage coordinates (0-100) to pixel coordinates
 */
export const percentToPixels = (
  x: number,
  y: number,
  dimensions: { width: number; height: number }
) => ({
  x: (x / 100) * dimensions.width,
  y: (y / 100) * dimensions.height,
});

/**
 * SVGElement Component
 *
 * Routes timeline events to appropriate SVG renderers.
 * All renderers receive the same props structure for consistency.
 */
export const SVGElement: React.FC<SVGElementProps> = ({
  event,
  layerState,
  canvasDimensions,
}) => {
  // Route to appropriate renderer based on element type
  switch (event.elementType) {
    case 'shape':
      switch (event.shapeType) {
        case 'circle':
          return (
            <SVGCircle
              event={event}
              layerState={layerState}
              canvasDimensions={canvasDimensions}
            />
          );
        case 'rectangle':
          return (
            <SVGRectangle
              event={event}
              layerState={layerState}
              canvasDimensions={canvasDimensions}
            />
          );
        case 'triangle':
          console.warn('Triangle shapes not yet implemented in SVG renderer');
          return null;
        default:
          return null;
      }

    case 'line':
      return (
        <SVGLine
          event={event}
          layerState={layerState}
          canvasDimensions={canvasDimensions}
        />
      );

    case 'arrow':
      return (
        <SVGArrow
          event={event}
          layerState={layerState}
          canvasDimensions={canvasDimensions}
        />
      );

    case 'text':
      return (
        <SVGText
          event={event}
          layerState={layerState}
          canvasDimensions={canvasDimensions}
        />
      );

    default:
      console.warn(`Unknown element type: ${event.elementType}`);
      return null;
  }
};
