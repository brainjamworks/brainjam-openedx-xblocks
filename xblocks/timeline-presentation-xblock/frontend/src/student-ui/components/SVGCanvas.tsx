/**
 * SVGCanvas - Main rendering surface for timeline presentation
 *
 * Uses SVG viewBox for automatic scaling (replaces Konva Stage/Layer)
 *
 * Key Features:
 * - SVG viewBox provides automatic responsive scaling
 * - No canvas/WebGL overhead - pure DOM rendering
 * - Perfect for print/PDF export
 * - Accessibility-friendly (screen readers can access SVG)
 *
 * Architecture:
 * - Agent 2 (TimelineEngine) calculates LayerState with opacity/transform
 * - Agent 3 (this) renders LayerState as SVG elements
 * - viewBox handles all coordinate scaling automatically
 */

import React from 'react';
import { TimelineEvent, LayerState } from '../../common/types';
import { SVGElement } from './svg/SVGElement';

interface SVGCanvasProps {
  /** Background image URL */
  imageUrl: string;

  /** Timeline events configuration */
  timelineEvents: TimelineEvent[];

  /** Current state for each layer (from Agent 2's TimelineEngine) */
  layerStates: LayerState[];

  /** Canvas dimensions (from editor or image natural size) */
  canvasDimensions: { width: number; height: number };
}

/**
 * SVGCanvas Component
 *
 * Renders timeline presentation using SVG with automatic scaling.
 *
 * ViewBox Magic:
 * - viewBox defines the coordinate system (e.g., "0 0 800 600")
 * - SVG automatically scales this to fit the container
 * - All child elements use these coordinates naturally
 * - No manual scaling calculations needed!
 */
export const SVGCanvas: React.FC<SVGCanvasProps> = ({
  imageUrl,
  timelineEvents,
  layerStates,
  canvasDimensions,
}) => {
  return (
    <svg
      viewBox={`0 0 ${canvasDimensions.width} ${canvasDimensions.height}`}
      style={{ width: '100%', height: 'auto' }}
      preserveAspectRatio="xMidYMid meet"
      className="timeline-svg-canvas"
      role="img"
      aria-label="Timeline presentation diagram"
    >
      {/* Background image layer */}
      <image
        href={imageUrl}
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        preserveAspectRatio="xMidYMid meet"
      />

      {/* Timeline elements layer - render only visible/animating elements */}
      {timelineEvents.map((event) => {
        const layerState = layerStates.find(s => s.id === event.id);

        // Skip if no layer state or element is hidden/exited
        if (!layerState || !layerState.visible) {
          return null;
        }

        return (
          <SVGElement
            key={event.id}
            event={event}
            layerState={layerState}
            canvasDimensions={canvasDimensions}
          />
        );
      })}
    </svg>
  );
};
