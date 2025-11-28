/**
 * Hotspot Canvas Component
 *
 * Pure visual editor for positioning a single circular hotspot on an image.
 * Supports:
 * - Click & drag to create/reposition hotspot
 * - Visual feedback with SVG overlay
 * - Percentage-based coordinates for responsiveness
 */

import React, { useState, useRef } from 'react';
import type { Hotspot } from '../../common/types';

interface HotspotCanvasProps {
  imageUrl: string;
  hotspot: Hotspot;
  onChange: (coordinates: number[]) => void;
}

interface DrawingState {
  isDrawing: boolean;
  centerX: number;
  centerY: number;
  radius: number;
}

export const HotspotCanvas: React.FC<HotspotCanvasProps> = ({
  imageUrl,
  hotspot,
  onChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [drawingState, setDrawingState] = useState<DrawingState | null>(null);

  // Update image dimensions when image loads
  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight
      });
    }
  };

  // Convert pixel coordinates to percentages
  const pixelToPercent = (x: number, y: number, r: number) => {
    if (!imageRef.current) return [0, 0, 0];
    const rect = imageRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return [0, 0, 0];
    return [
      (x / rect.width) * 100,
      (y / rect.height) * 100,
      (r / rect.width) * 100 // Radius as percentage of width
    ];
  };

  // Convert percentage coordinates to pixels
  const percentToPixel = (coords: number[]) => {
    const [xPercent, yPercent, rPercent] = coords;
    return {
      x: (xPercent / 100) * imageDimensions.width,
      y: (yPercent / 100) * imageDimensions.height,
      r: (rPercent / 100) * imageDimensions.width
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

  // Start drawing hotspot
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const pos = getMousePos(e);
    setDrawingState({
      isDrawing: true,
      centerX: pos.x,
      centerY: pos.y,
      radius: 0
    });
  };

  // Update hotspot radius while dragging
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

  // Finish drawing hotspot
  const handleMouseUp = () => {
    if (!drawingState?.isDrawing) return;

    // Require minimum radius of 10px
    if (drawingState.radius < 10) {
      setDrawingState(null);
      return;
    }

    // Convert to percentages and update parent
    const [centerXPercent, centerYPercent, radiusPercent] = pixelToPercent(
      drawingState.centerX,
      drawingState.centerY,
      drawingState.radius
    );

    onChange([centerXPercent, centerYPercent, radiusPercent]);
    setDrawingState(null);
  };

  // Get current hotspot position in pixels
  const currentHotspot = imageDimensions.width > 0 && hotspot.coordinates[2] > 0
    ? percentToPixel(hotspot.coordinates)
    : null;

  // Determine color based on correctness
  const hotspotColor = hotspot.correct ? '#178253' : '#C32D3A';

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        border: '2px solid #dee2e6',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'crosshair',
        backgroundColor: '#f8f9fa',
        userSelect: 'none',
        maxHeight: '600px'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Hotspot image"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          maxHeight: '600px',
          objectFit: 'contain'
        }}
        onLoad={handleImageLoad}
        draggable={false}
      />

      {/* SVG Overlay for hotspots */}
      {imageDimensions.width > 0 && (
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
          viewBox={`0 0 ${imageDimensions.width} ${imageDimensions.height}`}
        >
          {/* Render current hotspot (if exists and has valid radius) */}
          {currentHotspot && (
            <circle
              cx={currentHotspot.x}
              cy={currentHotspot.y}
              r={currentHotspot.r}
              fill={hotspotColor}
              fillOpacity={0.25}
              stroke={hotspotColor}
              strokeWidth={3}
            />
          )}

          {/* Render hotspot being drawn */}
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

          {/* Crosshair at center (if hotspot exists) */}
          {currentHotspot && (
            <>
              <line
                x1={currentHotspot.x - 10}
                y1={currentHotspot.y}
                x2={currentHotspot.x + 10}
                y2={currentHotspot.y}
                stroke={hotspotColor}
                strokeWidth={2}
              />
              <line
                x1={currentHotspot.x}
                y1={currentHotspot.y - 10}
                x2={currentHotspot.x}
                y2={currentHotspot.y + 10}
                stroke={hotspotColor}
                strokeWidth={2}
              />
            </>
          )}
        </svg>
      )}

      {/* Instructions overlay */}
      {!drawingState && (!currentHotspot || currentHotspot.r === 0) && (
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
          Click and drag to create a hotspot
        </div>
      )}
    </div>
  );
};
