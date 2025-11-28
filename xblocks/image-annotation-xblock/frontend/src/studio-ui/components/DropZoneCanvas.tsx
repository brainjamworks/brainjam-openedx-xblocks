/**
 * DropZone Canvas Component
 *
 * Pure visual editor for positioning a single circular drop zone on an image.
 * Supports two modes:
 * - Quick Point: Click once to create zone with default 5% radius
 * - Draw Custom: Click & drag to create zone with custom radius
 * - Visual feedback with SVG overlay
 * - Pixel-based coordinates stored in original image space for accuracy
 *
 * Adapted from image-hotspot-xblock HotspotCanvas component
 */

import React, { useState, useRef } from 'react';
import type { DropZone } from '../../common/types';

interface DropZoneCanvasProps {
  imageUrl: string;
  zone: DropZone;
  onChange: (coordinates: number[]) => void;
}

interface DrawingState {
  isDrawing: boolean;
  centerX: number;
  centerY: number;
  radius: number;
}

type DrawingMode = 'quick-point' | 'draw-custom';

const DEFAULT_RADIUS_PERCENT = 5.0; // Default radius: 5% of image width

export const DropZoneCanvas: React.FC<DropZoneCanvasProps> = ({
  imageUrl,
  zone,
  onChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 }); // Display dimensions
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 }); // Original image dimensions
  const [displayScale, setDisplayScale] = useState(1); // Scale factor: display / original
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 }); // No offset needed - full image rendering
  const [drawingState, setDrawingState] = useState<DrawingState | null>(null);
  const [drawingMode, setDrawingMode] = useState<DrawingMode>('quick-point');

  // Update image dimensions when image loads
  const handleImageLoad = () => {
    if (imageRef.current) {
      // Get the rendered size of the image element
      const renderedWidth = imageRef.current.offsetWidth;
      const renderedHeight = imageRef.current.offsetHeight;

      // Get the natural (original) dimensions of the image
      const naturalWidth = imageRef.current.naturalWidth;
      const naturalHeight = imageRef.current.naturalHeight;

      // Set display dimensions (no letterboxing calculation needed)
      setImageDimensions({
        width: renderedWidth,
        height: renderedHeight
      });

      // Set original dimensions (reference for coordinate storage)
      setOriginalDimensions({
        width: naturalWidth,
        height: naturalHeight
      });

      // Calculate scale factor: display size / original size
      setDisplayScale(renderedWidth / naturalWidth);

      // No offset needed - image fills container naturally
      setImageOffset({ x: 0, y: 0 });
    }
  };

  // Convert from display coordinates to original image coordinates
  const displayToOriginal = (displayX: number, displayY: number, displayR: number) => {
    if (displayScale === 0) return { x: 0, y: 0, r: 0 };
    return {
      x: displayX / displayScale,
      y: displayY / displayScale,
      r: displayR / displayScale
    };
  };

  // Convert from original image coordinates to display coordinates
  const originalToDisplay = (originalX: number, originalY: number, originalR: number) => {
    return {
      x: originalX * displayScale,
      y: originalY * displayScale,
      r: originalR * displayScale
    };
  };

  // Get mouse position relative to image
  const getMousePos = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return { x: 0, y: 0 };
    const rect = imageRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Start drawing zone
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const pos = getMousePos(e);

    if (drawingMode === 'quick-point') {
      // Quick Point mode: Create zone immediately with default radius
      // Calculate radius in original image space
      const defaultRadiusOriginal = (DEFAULT_RADIUS_PERCENT / 100) * originalDimensions.width;
      // Convert display coordinates to original space
      const original = displayToOriginal(pos.x, pos.y, 0);
      onChange([original.x, original.y, defaultRadiusOriginal]);
    } else {
      // Draw Custom mode: Start drawing
      setDrawingState({
        isDrawing: true,
        centerX: pos.x,
        centerY: pos.y,
        radius: 0
      });
    }
  };

  // Update zone radius while dragging
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!drawingState?.isDrawing) return;

    const pos = getMousePos(e);
    const dx = pos.x - drawingState.centerX;
    const dy = pos.y - drawingState.centerY;
    const radius = Math.sqrt(dx * dx + dy * dy);

    setDrawingState({
      ...drawingState,
      radius
    });
  };

  // Finish drawing zone
  const handleMouseUp = () => {
    if (!drawingState?.isDrawing) return;

    // Require minimum radius of 10px
    if (drawingState.radius < 10) {
      setDrawingState(null);
      return;
    }

    // Convert from display space to original image space before saving
    const original = displayToOriginal(drawingState.centerX, drawingState.centerY, drawingState.radius);
    onChange([original.x, original.y, original.r]);
    setDrawingState(null);
  };

  // Convert zone from original image space to display space for rendering
  const currentZone = imageDimensions.width > 0 && zone.radius > 0
    ? originalToDisplay(zone.x, zone.y, zone.radius)
    : null;

  // Zone color (blue for all drop zones)
  const zoneColor = '#0075b4';

  return (
    <>
      {/* Mode Toggle */}
      <div style={{
        marginBottom: '12px',
        padding: '12px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '4px'
      }}>
        <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>
          Zone Drawing Mode
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}>
            <input
              type="radio"
              name="drawing-mode"
              value="quick-point"
              checked={drawingMode === 'quick-point'}
              onChange={() => setDrawingMode('quick-point')}
              style={{ marginRight: '6px' }}
            />
            <span>
              <strong>Quick Point</strong> - Click to place zone (5% radius)
            </span>
          </label>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}>
            <input
              type="radio"
              name="drawing-mode"
              value="draw-custom"
              checked={drawingMode === 'draw-custom'}
              onChange={() => setDrawingMode('draw-custom')}
              style={{ marginRight: '6px' }}
            />
            <span>
              <strong>Draw Custom</strong> - Click & drag to set size
            </span>
          </label>
        </div>
      </div>

      {/* Canvas */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          border: '2px solid #dee2e6',
          borderRadius: '4px',
          overflow: 'hidden',
          cursor: 'crosshair',
          backgroundColor: '#f8f9fa',
          userSelect: 'none'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Drop zone image"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto'
        }}
        onLoad={handleImageLoad}
        draggable={false}
      />

      {/* SVG Overlay for zones */}
      {imageDimensions.width > 0 && (
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${imageDimensions.width}px`,
            height: `${imageDimensions.height}px`,
            pointerEvents: 'none'
          }}
          viewBox={`0 0 ${imageDimensions.width} ${imageDimensions.height}`}
        >
          {/* Render current zone (if exists and has valid radius) */}
          {currentZone && (
            <circle
              cx={currentZone.x}
              cy={currentZone.y}
              r={currentZone.r}
              fill={zoneColor}
              fillOpacity={0.25}
              stroke={zoneColor}
              strokeWidth={3}
            />
          )}

          {/* Render zone being drawn */}
          {drawingState?.isDrawing && drawingState.radius > 0 && (
            <circle
              cx={drawingState.centerX}
              cy={drawingState.centerY}
              r={drawingState.radius}
              fill="#0075b4"
              fillOpacity={0.25}
              stroke="#0075b4"
              strokeWidth={3}
              strokeDasharray="5,5"
            />
          )}

          {/* Crosshair at center (if zone exists) */}
          {currentZone && (
            <>
              <line
                x1={currentZone.x - 10}
                y1={currentZone.y}
                x2={currentZone.x + 10}
                y2={currentZone.y}
                stroke={zoneColor}
                strokeWidth={2}
              />
              <line
                x1={currentZone.x}
                y1={currentZone.y - 10}
                x2={currentZone.x}
                y2={currentZone.y + 10}
                stroke={zoneColor}
                strokeWidth={2}
              />
            </>
          )}
        </svg>
      )}

      {/* Instructions overlay */}
      {!drawingState && (!currentZone || currentZone.r === 0) && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '1rem 2rem',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '4px',
            fontSize: '0.875rem',
            pointerEvents: 'none',
            textAlign: 'center'
          }}
        >
          {drawingMode === 'quick-point'
            ? 'Click to place zone'
            : 'Click and drag to create a drop zone'}
        </div>
      )}
    </div>
    </>
  );
};
