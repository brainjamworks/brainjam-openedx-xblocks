/**
 * Marker Canvas - Interactive image for placing markers
 *
 * Allows clicking on image to position a marker.
 * Shows current marker position with color-coded badge.
 */

import React, { useRef, useState } from 'react';
import type { MarkerType } from '../../common/types';

interface MarkerCanvasProps {
  imageUrl: string;
  coordinates: [number, number]; // [x%, y%]
  markerType: MarkerType;
  onChange: (coordinates: [number, number]) => void;
}

export const MarkerCanvas: React.FC<MarkerCanvasProps> = ({
  imageUrl,
  coordinates,
  markerType,
  onChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  /**
   * Get marker CSS class based on type
   */
  const getPreviewClass = (type: MarkerType): string => {
    return `preview-${type}`;
  };

  /**
   * Handle click on image to position marker
   */
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Clamp to valid range
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    onChange([clampedX, clampedY]);
  };

  return (
    <div
      ref={containerRef}
      className="marker-canvas"
      onClick={handleImageClick}
    >
      <img
        src={imageUrl}
        alt="Click to position marker"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Show marker at current position */}
      {imageLoaded && (
        <div
          className={`marker-preview ${getPreviewClass(markerType)}`}
          style={{
            left: `${coordinates[0]}%`,
            top: `${coordinates[1]}%`
          }}
        >
          ?
        </div>
      )}
    </div>
  );
};
