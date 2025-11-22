/**
 * Student View - Image Commentary Display
 *
 * Displays an image with clickable markers that show commentary in popovers.
 * Markers are color-coded by type (info, warning, success, danger).
 */

import React, { useState } from 'react';
import Card from '@openedx/paragon/dist/Card';
import type { StudentViewProps, Marker } from '../common/types';

export const StudentView: React.FC<StudentViewProps> = ({
  displayName,
  title,
  imageUrl,
  markers
}) => {
  // State for managing image dimensions (needed for positioning markers)
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  /**
   * Toggle marker popover
   */
  const toggleMarker = (markerId: string) => {
    setActiveMarker(activeMarker === markerId ? null : markerId);
  };

  /**
   * Get marker CSS class based on type
   */
  const getMarkerClass = (type: Marker['type']): string => {
    return `marker-${type}`;
  };

  /**
   * Get popover header CSS class based on type
   */
  const getHeaderClass = (type: Marker['type']): string => {
    return `header-${type}`;
  };

  /**
   * Handle keyboard interaction for markers
   */
  const handleMarkerKeyDown = (e: React.KeyboardEvent, markerId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMarker(markerId);
    }
  };

  /**
   * Render marker with custom popover
   */
  const renderMarker = (marker: Marker, index: number) => {
    const isActive = activeMarker === marker.id;

    return (
      <div key={marker.id}>
        <div
          role="button"
          tabIndex={0}
          className={`image-commentary-marker ${getMarkerClass(marker.type)} ${isActive ? 'active' : ''}`}
          style={{
            left: `${marker.x}%`,
            top: `${marker.y}%`
          }}
          onClick={() => toggleMarker(marker.id)}
          onKeyDown={(e) => handleMarkerKeyDown(e, marker.id)}
          aria-label={`View commentary: ${marker.label}`}
        >
          {index + 1}
        </div>

        {/* Custom Popover */}
        {isActive && (
          <div
            className="custom-popover"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`
            }}
          >
            <div className={`popover-header ${getHeaderClass(marker.type)}`}>
              {marker.label}
            </div>
            <div className="popover-body">
              {marker.commentary}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="image-commentary-student-view">
      {title && <h3 className="image-commentary-main-title">{title}</h3>}
      <Card>
        <Card.Section>
          {!imageUrl ? (
            <div className="text-center p-4 bg-light rounded">
              <p className="text-muted mb-0">No image configured</p>
            </div>
          ) : (
            <div className="image-commentary-container">
              <img
                src={imageUrl}
                alt={displayName}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Render markers after image loads */}
              {imageLoaded && markers.map((marker, index) => renderMarker(marker, index))}
            </div>
          )}

          {markers.length === 0 && imageUrl && (
            <p className="text-muted text-center mt-3 mb-0">
              No commentary markers added yet
            </p>
          )}
        </Card.Section>
      </Card>
    </div>
  );
};
