/**
 * Diagram Canvas Component
 *
 * Displays the background diagram image and renders animated timeline elements
 * on top using absolute positioning with percentage-based coordinates.
 */

import React, { useState } from 'react';
import { DiagramCanvasProps } from '../common/types';
import { TimelineElement } from './TimelineElement';

/**
 * DiagramCanvas - Container for diagram image and animated overlays
 *
 * Features:
 * - Responsive image display with aspect ratio preservation
 * - Percentage-based coordinate system (0-100)
 * - Layered rendering: image → animated elements
 * - Loading state handling
 */
export const DiagramCanvas: React.FC<DiagramCanvasProps> = ({
  imageUrl,
  activeElements,
  onImageLoad,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  /**
   * Handle successful image load
   */
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
    if (onImageLoad) {
      onImageLoad();
    }
  };

  /**
   * Handle image load error
   */
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
    console.error('Failed to load diagram image:', imageUrl);
  };

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

      {/* Image container - maintains aspect ratio */}
      <div
        className={`timeline-diagram-image-container ${
          imageLoaded ? 'timeline-diagram-image-loaded' : ''
        }`}
      >
        {/* Background image */}
        <img
          src={imageUrl}
          alt="Timeline diagram"
          className="timeline-diagram-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />

        {/* Animated elements overlay */}
        {imageLoaded && (
          <div className="timeline-diagram-overlay">
            {activeElements.map(event => (
              <TimelineElement
                key={event.id}
                event={event}
                isActive={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Debug info (only in development) */}
      {process.env.NODE_ENV === 'development' && imageLoaded && (
        <div className="timeline-diagram-debug">
          <small>
            Active elements: {activeElements.length}
          </small>
        </div>
      )}
    </div>
  );
};
