/**
 * Diagram Canvas Component
 *
 * Wave 3: Konva-based rendering with @react-spring animations + GSAP timeline sync.
 * Displays the background diagram image and renders animated timeline elements
 * using react-konva for precise positioning and smooth animations.
 * Visibility is controlled by GSAP timeline for 60fps audio synchronization.
 */

import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { TimelineEvent } from '../common/types';
import { TimelineKonvaElement } from './components/TimelineKonvaElement';

/**
 * Canvas dimensions from studio editor
 */
interface CanvasDimensions {
  width: number;
  height: number;
}

/**
 * Props for DiagramCanvas component
 */
interface DiagramCanvasProps {
  imageUrl: string;
  timelineEvents: TimelineEvent[];
  visibleEventIds: Set<string>;
  editorCanvasDimensions?: CanvasDimensions;
  onImageLoad?: () => void;
}

/**
 * DiagramCanvas - Konva-based canvas for diagram and timeline elements
 *
 * Features:
 * - Konva Stage/Layer architecture for rendering
 * - Background image layer + elements layer
 * - Automatic stage sizing based on background image
 * - Percentage-based coordinate system (0-100)
 * - @react-spring animations via TimelineKonvaElement
 * - GSAP-controlled visibility for 60fps audio sync
 * - Loading and error state handling
 */
export const DiagramCanvas: React.FC<DiagramCanvasProps> = ({
  imageUrl,
  timelineEvents,
  visibleEventIds,
  editorCanvasDimensions,
  onImageLoad,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);
  const [stageDimensions, setStageDimensions] = useState({ width: 800, height: 600 });
  const [scaleFactors, setScaleFactors] = useState({ x: 1, y: 1 });

  /**
   * Load background image for Konva
   */
  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();

    img.onload = () => {
      setBackgroundImage(img);
      setStageDimensions({
        width: img.width,
        height: img.height,
      });

      // Calculate scale factors if editor dimensions are available
      if (editorCanvasDimensions) {
        setScaleFactors({
          x: img.width / editorCanvasDimensions.width,
          y: img.height / editorCanvasDimensions.height,
        });
      } else {
        // No editor dimensions available (legacy content) - no scaling needed
        setScaleFactors({ x: 1, y: 1 });
      }

      setImageLoaded(true);
      setImageError(false);

      if (onImageLoad) {
        onImageLoad();
      }
    };

    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
      setBackgroundImage(null);
      console.error('Failed to load diagram image:', imageUrl);
    };

    img.src = imageUrl;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl, onImageLoad]);

  return (
    <div className="timeline-diagram-canvas">
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="timeline-diagram-loading">
          <div className="timeline-diagram-loading-spinner" />
          <p className="timeline-diagram-loading-text">Loading diagram...</p>
        </div>
      )}

      {/* Error state */}
      {imageError && (
        <div className="timeline-diagram-error">
          <p className="timeline-diagram-error-text">
            Failed to load diagram image.
          </p>
          <p className="timeline-diagram-error-subtext">
            Please check that the image URL is correct and accessible.
          </p>
        </div>
      )}

      {/* Konva Stage - only render when image is loaded */}
      {imageLoaded && backgroundImage && (
        <div className="timeline-diagram-stage-container">
          <Stage
            width={stageDimensions.width}
            height={stageDimensions.height}
            className="timeline-diagram-stage"
          >
            {/* Background image layer */}
            <Layer>
              <KonvaImage
                image={backgroundImage}
                width={stageDimensions.width}
                height={stageDimensions.height}
              />
            </Layer>

            {/* Timeline elements layer - scaled to match editor dimensions */}
            <Layer scaleX={scaleFactors.x} scaleY={scaleFactors.y}>
              {timelineEvents
                .filter(event => visibleEventIds.has(event.id))
                .map(event => (
                  <TimelineKonvaElement
                    key={event.id}
                    event={event}
                    stageDimensions={editorCanvasDimensions || stageDimensions}
                  />
                ))}
            </Layer>
          </Stage>
        </div>
      )}

      {/* Debug info (only in development) */}
      {process.env.NODE_ENV === 'development' && imageLoaded && (
        <div className="timeline-diagram-debug">
          <small>
            Visible: {visibleEventIds.size}/{timelineEvents.length} |
            Stage: {stageDimensions.width}x{stageDimensions.height} |
            Scale: {scaleFactors.x.toFixed(2)}x{scaleFactors.y.toFixed(2)} |
            Editor: {editorCanvasDimensions ? `${editorCanvasDimensions.width}x${editorCanvasDimensions.height}` : 'N/A'}
          </small>
        </div>
      )}
    </div>
  );
};
