/**
 * Hotspot Canvas Component
 *
 * Pure visual editor for positioning a single circular hotspot on an image.
 * Supports:
 * - Click & drag to create/reposition hotspot
 * - Visual feedback with SVG overlay
 * - Percentage-based coordinates for responsiveness
 * - Mouse wheel zoom
 * - Space + drag to pan
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

interface PanState {
  isPanning: boolean;
  startX: number;
  startY: number;
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

  // Zoom and pan state
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [panState, setPanState] = useState<PanState | null>(null);

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
    if (imageDimensions.width === 0 || imageDimensions.height === 0) return [0, 0, 0];
    return [
      (x / imageDimensions.width) * 100,
      (y / imageDimensions.height) * 100,
      (r / imageDimensions.width) * 100 // Radius as percentage of width
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

  // Get mouse position relative to image (accounting for zoom and pan)
  const getMousePos = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return { x: 0, y: 0 };

    // Get mouse position relative to container
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    // Adjust for zoom and pan to get position on original image
    const x = (mouseX - panX) / zoom;
    const y = (mouseY - panY) / zoom;

    return { x, y };
  };

  // Handle mouse wheel for zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const delta = -e.deltaY * 0.001;
    const newZoom = Math.max(0.5, Math.min(5, zoom + delta));

    if (newZoom !== zoom) {
      // Zoom towards mouse position
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Adjust pan to zoom towards mouse
        const zoomRatio = newZoom / zoom;
        setPanX(mouseX - (mouseX - panX) * zoomRatio);
        setPanY(mouseY - (mouseY - panY) * zoomRatio);
      }

      setZoom(newZoom);
    }
  };

  // Start drawing hotspot or panning
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Space key + mouse down = start panning
    if (e.button === 1 || e.shiftKey) { // Middle mouse or Shift+click for pan
      e.preventDefault();
      setPanState({
        isPanning: true,
        startX: e.clientX - panX,
        startY: e.clientY - panY
      });
      return;
    }

    // Regular click = start drawing
    const pos = getMousePos(e);
    setDrawingState({
      isDrawing: true,
      centerX: pos.x,
      centerY: pos.y,
      radius: 0
    });
  };

  // Update hotspot radius while dragging or pan while panning
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Handle panning
    if (panState?.isPanning) {
      setPanX(e.clientX - panState.startX);
      setPanY(e.clientY - panState.startY);
      return;
    }

    // Handle drawing
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

  // Finish drawing hotspot or panning
  const handleMouseUp = () => {
    // End panning
    if (panState?.isPanning) {
      setPanState(null);
      return;
    }

    // End drawing
    if (!drawingState?.isDrawing) return;

    // Require minimum radius of 10px (adjusted for zoom)
    const minRadius = 10 / zoom;
    if (drawingState.radius < minRadius) {
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
        cursor: panState?.isPanning ? 'grabbing' : 'crosshair',
        backgroundColor: '#f8f9fa',
        userSelect: 'none',
        maxHeight: '600px'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <div
        style={{
          transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
          transformOrigin: '0 0',
          transition: panState?.isPanning ? 'none' : 'transform 0.1s ease-out'
        }}
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

      {/* Zoom controls and instructions */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          padding: '8px 12px',
          background: 'rgba(0, 0, 0, 0.75)',
          color: 'white',
          borderRadius: '4px',
          fontSize: '0.75rem',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <div>Zoom: {(zoom * 100).toFixed(0)}%</div>
        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
          Scroll to zoom • Shift+drag to pan
        </div>
      </div>
    </div>
  );
};
