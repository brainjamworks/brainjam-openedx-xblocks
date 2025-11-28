/**
 * Assessment Canvas Component
 *
 * Container component that renders the background image with draggable labels
 * and invisible drop zones overlaid on the image. Manages the image-relative
 * coordinate system for label placement and drop zone positioning.
 *
 * Features:
 * - Background image with proper sizing and aspect ratio
 * - Positioned draggable labels
 * - Invisible drop zones overlaid on image
 * - Debug mode to show zone outlines
 */

import React, { useRef, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Alert from '@openedx/paragon/dist/Alert';
import type {
  LabelDefinition,
  DropZone,
  LabelPlacements
} from '../../common/types';
import { DraggableLabel, ITEM_TYPE } from './DraggableLabel';
import { DropZone as DropZoneComponent } from './DropZone';
import { LabelBank } from './LabelBank';

interface AssessmentCanvasProps {
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  labels: LabelDefinition[];
  dropZones: DropZone[];
  placements: LabelPlacements;
  snapEnabled: boolean;
  onLabelDrop: (labelId: string, x: number, y: number, zoneId?: string) => void;
  onLabelRemove: (labelId: string) => void;
  disabled: boolean;
  showingAnswer?: boolean; // When true, display correct answers and disable interaction
  showZones?: boolean; // For debug/studio mode
}

/**
 * Assessment Canvas Component
 */
export const AssessmentCanvas: React.FC<AssessmentCanvasProps> = ({
  backgroundImageUrl,
  backgroundImageWidth,
  backgroundImageHeight,
  labels,
  dropZones,
  placements,
  snapEnabled,
  onLabelDrop,
  onLabelRemove,
  disabled,
  showingAnswer = false,
  showZones = false
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [canvasScale, setCanvasScale] = useState(1);
  const [imageNaturalWidth, setImageNaturalWidth] = useState(backgroundImageWidth); // Store actual natural width

  // =======================================================================
  // DRAG AND DROP - Canvas as drop target
  // =======================================================================

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item: { labelId: string; label: string }, monitor) => {
      // Get the drop position relative to the canvas
      const canvasElement = canvasRef.current;
      if (!canvasElement) return;

      // Get the source offset (top-left of dragged element in screen coordinates)
      const sourceOffset = monitor.getSourceClientOffset();
      if (!sourceOffset) return;

      // Find label definition to get type and dimensions
      const labelDef = labels.find(l => l.id === item.labelId);
      if (!labelDef) return;

      const labelType = labelDef.type || 'normal';
      const scaledWidth = labelDef.width * canvasScale;
      const scaledHeight = labelDef.height * canvasScale;

      // Calculate the aiming point based on label type
      // sourceOffset is the TOP-LEFT corner of the drag preview
      let aimingPointX: number;
      let aimingPointY: number;

      if (labelType === 'normal') {
        // Normal labels: Container uses translate(-50%, -50%)
        // Aiming point = center of rectangle
        // Center = top-left + (width/2, height/2)
        aimingPointX = sourceOffset.x + (scaledWidth / 2);
        aimingPointY = sourceOffset.y + (scaledHeight / 2);
      } else if (labelType === 'dot') {
        // Dot labels: Container uses translate(-25%, -25%)
        // Marker at bottom-left of container
        // Aiming point = center of dot marker
        const dotSize = 15 * canvasScale; // Must match DraggableLabel
        aimingPointX = sourceOffset.x + (dotSize / 2);
        aimingPointY = sourceOffset.y + scaledHeight - (dotSize / 2);
      } else if (labelType === 'cross') {
        // Cross labels: Container uses translate(-25%, -25%)
        // Marker at bottom-left of container
        // Aiming point = center of cross marker
        const crossSize = 25 * canvasScale; // Must match DraggableLabel
        aimingPointX = sourceOffset.x + (crossSize / 2);
        aimingPointY = sourceOffset.y + scaledHeight - (crossSize / 2);
      } else {
        // Fallback: assume normal label behavior
        aimingPointX = sourceOffset.x + (scaledWidth / 2);
        aimingPointY = sourceOffset.y + (scaledHeight / 2);
      }

      // Calculate position relative to canvas
      const canvasRect = canvasElement.getBoundingClientRect();
      const relativeX = aimingPointX - canvasRect.left;
      const relativeY = aimingPointY - canvasRect.top;

      // Convert from display coordinates to actual coordinates (unscale)
      const actualX = relativeX / canvasScale;
      const actualY = relativeY / canvasScale;

      // Check if drop is near any zone (within zone's radius)
      if (snapEnabled) {
        for (const zone of dropZones) {
          // Zones are already in pixels, use directly
          const distance = Math.sqrt(
            Math.pow(actualX - zone.x, 2) + Math.pow(actualY - zone.y, 2)
          );

          if (distance <= zone.radius) {
            // Check if zone is already occupied by a different label
            const occupyingLabelId = Object.entries(placements).find(
              ([placedLabelId, placement]) =>
                placement.inZone === zone.id && placedLabelId !== item.labelId
            )?.[0];

            if (occupyingLabelId) {
              // Zone occupied - reject drop, label returns to previous position
              console.log('Zone occupied:', zone.id);
              return { snapped: false, occupied: true, zoneId: zone.id };
            }

            // Zone is free - snap to zone center
            // Adjust coordinates based on label type to compensate for CSS transform
            let storeX = zone.x;
            let storeY = zone.y;

            if (labelType === 'dot' || labelType === 'cross') {
              // Dot/cross labels use translate(-25%, -25%) with marker at bottom-left
              // Marker has a size and we need to center its CENTER, not its corner
              const markerSize = labelType === 'dot' ? 15 : 25; // Unscaled pixels

              // Marker center within container: (markerSize/2, containerHeight - markerSize/2)
              // After transform(-25%, -25%), marker center is at:
              //   x = left - 25%W + markerSize/2
              //   y = top + 75%H - markerSize/2
              // To center marker at zone:
              //   left = zone.x + 25%W - markerSize/2
              //   top = zone.y - 75%H + markerSize/2
              storeX = zone.x + (labelDef.width * 0.25) - (markerSize / 2);
              storeY = zone.y - (labelDef.height * 0.75) + (markerSize / 2);
            }
            // Normal labels use translate(-50%, -50%) which centers correctly at zone.x, zone.y

            console.log('Label snapped to zone:', zone.id);
            onLabelDrop(item.labelId, storeX, storeY, zone.id);
            return { snapped: true, zoneId: zone.id };
          }
        }
      }

      // No zone nearby - don't update placement, label returns to start position
      return { snapped: false };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true })
    })
  }), [canvasScale, dropZones, snapEnabled, onLabelDrop, backgroundImageWidth, backgroundImageHeight, placements, labels]);

  // =======================================================================
  // EFFECTS - Image Loading and Scaling
  // =======================================================================

  useEffect(() => {
    setImageLoaded(false);
    setImageError(null);

    // Check if image URL is provided
    if (!backgroundImageUrl || backgroundImageUrl.trim() === '') {
      setImageError('No background image configured. Please configure an image in Studio.');
      return;
    }

    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setImageError(null);

      // Store actual natural width from loaded image
      const naturalWidth = img.naturalWidth;
      setImageNaturalWidth(naturalWidth);

      // Calculate scale factor using ACTUAL image dimensions
      if (canvasRef.current) {
        const containerWidth = canvasRef.current.clientWidth;
        const scale = containerWidth / naturalWidth;
        setCanvasScale(scale);
      }
    };
    img.onerror = () => {
      console.error('Failed to load background image:', backgroundImageUrl);
      setImageError(`Failed to load image: ${backgroundImageUrl}. Please check the image URL in Studio.`);
    };
    img.src = backgroundImageUrl;
  }, [backgroundImageUrl]);

  // Update scale on window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const containerWidth = canvasRef.current.clientWidth;
        const scale = containerWidth / imageNaturalWidth;
        setCanvasScale(scale);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageNaturalWidth]);

  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  // Calculate which zones are occupied
  const occupiedZones = new Set<string>();
  Object.values(placements).forEach(placement => {
    if (placement.inZone) {
      occupiedZones.add(placement.inZone);
    }
  });

  // Scale dimensions for display
  const displayWidth = backgroundImageWidth * canvasScale;
  const displayHeight = backgroundImageHeight * canvasScale;

  // =======================================================================
  // RENDER
  // =======================================================================

  if (imageError) {
    return (
      <Alert variant="danger" className="mb-3">
        <strong>Image Loading Error:</strong> {imageError}
      </Alert>
    );
  }

  if (!imageLoaded) {
    return (
      <div className="assessment-canvas-loading">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading image...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="assessment-canvas-container">
      {/* Label Bank - Shows unplaced labels */}
      <LabelBank
        labels={labels}
        placements={placements}
        onLabelRemove={onLabelRemove}
        disabled={disabled || showingAnswer}
      />

      <div
        ref={(node) => {
          canvasRef.current = node;
          drop(node);
        }}
        className="assessment-canvas"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: `${backgroundImageWidth}px`,
          margin: '0 auto'
        }}
      >
        {/* Background Image */}
        <img
          src={backgroundImageUrl}
          alt="Assessment background"
          className="canvas-background-image"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        />

        {/* Drop Zones Layer - invisible overlay on image */}
        <div
          className="drop-zones-layer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: (disabled || showingAnswer) ? 'none' : 'auto'
          }}
        >
          {dropZones.map(zone => (
            <DropZoneComponent
              key={zone.id}
              zone={zone}
              isOccupied={occupiedZones.has(zone.id)}
              visible={showZones}
              scale={canvasScale}
            />
          ))}
        </div>

        {/* Labels Layer - draggable labels positioned on image */}
        <div
          className="labels-layer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: (disabled || showingAnswer) ? 'none' : 'auto'
          }}
        >
          {labels.map(label => {
            const placement = placements[label.id];

            // Only render labels that are in zones (not in label bank)
            if (!placement?.inZone) {
              return null;
            }

            return (
              <DraggableLabel
                key={label.id}
                label={label}
                placement={placement}
                isCorrect={placement?.correct}
                disabled={disabled || showingAnswer}
                scale={canvasScale}
              />
            );
          })}
        </div>
      </div>

      {/* Legend/Instructions */}
      <div className="canvas-instructions" style={{
        backgroundColor: showingAnswer ? '#e7f3ff' : undefined,
        borderLeft: showingAnswer ? '4px solid #0075b4' : undefined
      }}>
        <p className="text-muted">
          {showingAnswer ? (
            <strong style={{ color: '#0075b4' }}>Showing Correct Answer - All labels positioned at their correct locations</strong>
          ) : (
            <>
              Drag labels to their correct positions on the image.
              {snapEnabled && ' Labels will snap to target areas when close.'}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AssessmentCanvas;
