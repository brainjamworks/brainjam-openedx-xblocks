/**
 * VisualEditor - Visual Canvas Editor Component
 *
 * Provides an interactive canvas for creating and editing timeline events
 * using react-konva. Supports drawing text, shapes, lines, and arrows.
 *
 * Architecture:
 * - Uses react-konva for rendering and interactions
 * - Maintains background image and stage dimensions
 * - Provides transformer for resizing/rotating selected elements
 * - Emits events for parent component to update state
 */

import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage, Text, Circle, Ring, Rect, Line, Arrow, Transformer } from 'react-konva';
import type Konva from 'konva';
import type { TimelineEvent, DrawingMode } from '../../common/types';
import { pixelsToPercent, percentToPixels } from '../utils/coordinates';
import { useDrawing, PathPoint } from '../hooks/useDrawing';

/**
 * Props for VisualEditor component
 */
export interface VisualEditorProps {
  /** URL of the background image to display */
  backgroundImageUrl: string;

  /** Array of timeline events to render on canvas */
  events: TimelineEvent[];

  /** ID of currently selected event (if any) */
  selectedEventId: string | null;

  /** ID of event being edited in form (if any) - determines edit vs create mode */
  editingEventId: string | null;

  /** Current drawing mode from toolbar */
  drawingMode: DrawingMode;

  /** Current color for new elements */
  currentColor?: string;

  /** Current thickness for lines/arrows */
  currentThickness?: number;

  /** Callback when an event is created */
  onEventCreate: (event: Partial<TimelineEvent>) => void;

  /** Callback when an event is updated */
  onEventUpdate: (eventId: string, updates: Partial<TimelineEvent>) => void;

  /** Callback when an event is selected */
  onEventSelect: (eventId: string | null) => void;

  /** Callback when an event is deleted */
  onEventDelete: (eventId: string) => void;

  /** Callback when canvas dimensions change (for saving to backend) */
  onCanvasDimensionsChange?: (width: number, height: number) => void;
}

/**
 * Stage dimensions state
 */
interface StageDimensions {
  width: number;
  height: number;
}

/**
 * VisualEditor Component
 *
 * Renders an interactive canvas for visual timeline event editing.
 */
export const VisualEditor: React.FC<VisualEditorProps> = ({
  backgroundImageUrl,
  events,
  selectedEventId,
  editingEventId,
  drawingMode,
  currentColor = '#000000',
  currentThickness = 2,
  onEventCreate,
  onEventUpdate,
  onEventSelect,
  onEventDelete,
  onCanvasDimensionsChange,
}) => {
  // ============================================================================
  // STATE
  // ============================================================================

  /** Background image object */
  const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);

  /** Stage dimensions (set based on background image or container) */
  const [stageDimensions, setStageDimensions] = useState<StageDimensions>({
    width: 800,
    height: 600,
  });

  /** Original image dimensions (before zoom) */
  const [originalImageDimensions, setOriginalImageDimensions] = useState<StageDimensions | null>(null);

  /** Zoom level (0.25 to 2.0, where 1.0 = 100%) */
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  /** Auto-calculated zoom to fit editor */
  const [autoFitZoom, setAutoFitZoom] = useState<number>(1);

  /** Stage position for panning (offset from origin) */
  const [stagePosition, setStagePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  /** Whether user is actively panning (space + drag) */
  const [isPanning, setIsPanning] = useState<boolean>(false);

  /** Pan drag start position */
  const [panStartPos, setPanStartPos] = useState<{ x: number; y: number } | null>(null);

  /** Whether space bar is currently pressed (enables pan mode) */
  const [isSpacePressed, setIsSpacePressed] = useState<boolean>(false);

  /** Drawing state from useDrawing hook */
  const {
    isDrawing,
    currentPath,
    startDrawing,
    updateLastPoint,
    endDrawing,
    clearPath,
  } = useDrawing();

  /** Reference to the Konva stage */
  const stageRef = useRef<any>(null);

  /** Reference to the transformer for selected elements */
  const transformerRef = useRef<any>(null);

  /** Reference to the container div for measuring dimensions */
  const containerRef = useRef<HTMLDivElement>(null);

  // ============================================================================
  // EFFECTS
  // ============================================================================

  /**
   * Load background image when URL changes
   * Sets stage dimensions based on image aspect ratio
   */
  useEffect(() => {
    if (!backgroundImageUrl) {
      setBackgroundImage(null);
      return;
    }

    const img = new window.Image();
    img.crossOrigin = 'anonymous'; // Handle CORS for course assets

    img.onload = () => {
      setBackgroundImage(img);

      // Store original image dimensions
      setOriginalImageDimensions({
        width: img.width,
        height: img.height,
      });

      // Set FIXED stage dimensions to original image size
      // Zoom will be applied via scale props, not by resizing stage
      setStageDimensions({
        width: img.width,
        height: img.height,
      });

      // Calculate auto-fit zoom to fit editor space
      const maxEditorWidth = 1200;
      const maxEditorHeight = 900;

      const zoomToFitWidth = maxEditorWidth / img.width;
      const zoomToFitHeight = maxEditorHeight / img.height;
      const calculatedZoom = Math.min(zoomToFitWidth, zoomToFitHeight, 1); // Cap at 100%

      setAutoFitZoom(calculatedZoom);
      setZoomLevel(calculatedZoom); // Start at auto-fit
      setStagePosition({ x: 0, y: 0 }); // Reset pan position

      // IMPORTANT: Save ORIGINAL image dimensions (not zoomed) to backend
      // This ensures percentage calculations work correctly
      if (onCanvasDimensionsChange) {
        onCanvasDimensionsChange(img.width, img.height);
      }
    };

    img.onerror = () => {
      console.error('Failed to load background image:', backgroundImageUrl);
      setBackgroundImage(null);
    };

    img.src = backgroundImageUrl;
  }, [backgroundImageUrl]);

  /**
   * Handle zoom level changes - only update zoom state, NOT stage dimensions
   * Stage dimensions stay fixed, zoom is applied via scaleX/scaleY props
   */
  const handleZoomChange = (newZoom: number) => {
    if (!originalImageDimensions) return;
    setZoomLevel(newZoom);
    // ✅ Stage dimensions stay fixed - zoom handled by scale props
  };

  /**
   * Update transformer when selection changes
   */
  useEffect(() => {
    if (!transformerRef.current || !stageRef.current) return;

    const transformer = transformerRef.current;
    const stage = stageRef.current;

    if (!selectedEventId) {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
      return;
    }

    const selectedNode = stage.findOne(`#${selectedEventId}`);
    if (selectedNode) {
      transformer.nodes([selectedNode]);
      transformer.getLayer()?.batchDraw();
    } else {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
    }
  }, [selectedEventId]);

  /**
   * Clear drawing when mode changes
   */
  useEffect(() => {
    if (isDrawing) {
      clearPath();
    }
  }, [drawingMode, clearPath]);

  /**
   * Keyboard shortcuts
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Space bar: Enable pan mode (temporary)
      if (e.code === 'Space' && !isSpacePressed) {
        // Prevent space from scrolling page
        e.preventDefault();
        setIsSpacePressed(true);
      }

      // Escape: Cancel drawing / deselect
      if (e.key === 'Escape') {
        if (isDrawing) {
          clearPath();
        } else {
          onEventSelect(null);
        }
      }

      // Delete / Backspace: Delete selected element
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedEventId) {
        // Prevent default only if not in an input field
        if (!(e.target as HTMLElement).matches('input, textarea')) {
          e.preventDefault();
          onEventDelete(selectedEventId);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // Space bar released: Disable pan mode
      if (e.code === 'Space') {
        setIsSpacePressed(false);
        setIsPanning(false);
        setPanStartPos(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isDrawing, selectedEventId, isSpacePressed, onEventDelete, onEventSelect, clearPath]);

  /**
   * Force layer redraw when drawing state changes
   */
  useEffect(() => {
    if (stageRef.current) {
      const layers = stageRef.current.getLayers();
      layers.forEach((layer: any) => layer.batchDraw());
    }
  }, [events, isDrawing, currentPath]);

  // ============================================================================
  // HELPER FUNCTIONS - ELEMENT CREATION
  // ============================================================================

  /**
   * Generate unique ID for new events
   */
  const generateId = (): string => {
    return `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  /**
   * Create a text event at the specified position
   */
  const createTextEvent = (x: number, y: number): Partial<TimelineEvent> => {
    const percentPos = pixelsToPercent(x, y, stageDimensions.width, stageDimensions.height);

    return {
      id: generateId(),
      timestamp: 0,
      elementType: 'text',
      animation: 'fade',
      animationDuration: 500,
      position: percentPos,
      content: 'New Text',
      fontSize: 16,
      color: currentColor,
    };
  };

  /**
   * Create a line event from coordinates
   */
  const createLineEvent = (x1: number, y1: number, x2: number, y2: number): Partial<TimelineEvent> => {
    const pos1 = pixelsToPercent(x1, y1, stageDimensions.width, stageDimensions.height);
    const pos2 = pixelsToPercent(x2, y2, stageDimensions.width, stageDimensions.height);

    return {
      id: generateId(),
      timestamp: 0,
      elementType: 'line',
      animation: 'fade',
      animationDuration: 500,
      position: pos1,
      lineCoordinates: {
        x1: pos1.x,
        y1: pos1.y,
        x2: pos2.x,
        y2: pos2.y,
      },
      color: currentColor,
      thickness: currentThickness,
    };
  };

  /**
   * Create an arrow event from coordinates
   */
  const createArrowEvent = (x1: number, y1: number, x2: number, y2: number): Partial<TimelineEvent> => {
    const pos1 = pixelsToPercent(x1, y1, stageDimensions.width, stageDimensions.height);
    const pos2 = pixelsToPercent(x2, y2, stageDimensions.width, stageDimensions.height);

    return {
      id: generateId(),
      timestamp: 0,
      elementType: 'arrow',
      animation: 'fade',
      animationDuration: 500,
      position: pos1,
      lineCoordinates: {
        x1: pos1.x,
        y1: pos1.y,
        x2: pos2.x,
        y2: pos2.y,
      },
      color: currentColor,
      thickness: currentThickness,
    };
  };

  /**
   * Create a circle event from center and radius
   */
  const createCircleEvent = (centerX: number, centerY: number, radius: number): Partial<TimelineEvent> => {
    const percentPos = pixelsToPercent(centerX, centerY, stageDimensions.width, stageDimensions.height);
    const percentRadius = (radius / stageDimensions.width) * 100;

    return {
      id: generateId(),
      timestamp: 0,
      elementType: 'shape',
      shapeType: 'circle',
      animation: 'fade',
      animationDuration: 500,
      position: percentPos,
      dimensions: {
        width: percentRadius * 2,
        height: percentRadius * 2,
      },
      color: currentColor,
      thickness: currentThickness,
    };
  };

  /**
   * Create a ring event from center and radius (non-obscuring highlight)
   */
  const createRingEvent = (centerX: number, centerY: number, radius: number): Partial<TimelineEvent> => {
    const percentPos = pixelsToPercent(centerX, centerY, stageDimensions.width, stageDimensions.height);
    const percentRadius = (radius / stageDimensions.width) * 100;

    return {
      id: generateId(),
      timestamp: 0,
      elementType: 'shape',
      shapeType: 'ring',
      animation: 'fade',
      animationDuration: 500,
      position: percentPos,
      dimensions: {
        width: percentRadius * 2,
        height: percentRadius * 2,
      },
      color: currentColor,
      thickness: currentThickness, // Ring uses thickness for ring width
    };
  };

  /**
   * Create a rectangle event from coordinates and dimensions
   */
  const createRectangleEvent = (x: number, y: number, width: number, height: number): Partial<TimelineEvent> => {
    const percentPos = pixelsToPercent(x, y, stageDimensions.width, stageDimensions.height);
    const percentWidth = (width / stageDimensions.width) * 100;
    const percentHeight = (height / stageDimensions.height) * 100;

    return {
      id: generateId(),
      timestamp: 0,
      elementType: 'shape',
      shapeType: 'rectangle',
      animation: 'fade',
      animationDuration: 500,
      position: percentPos,
      dimensions: {
        width: percentWidth,
        height: percentHeight,
      },
      color: currentColor,
      thickness: currentThickness,
    };
  };

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  /**
   * Get mouse position relative to stage (accounting for zoom/pan transforms)
   */
  const getMousePos = (e: any): { x: number; y: number } | null => {
    const stage = stageRef.current;
    if (!stage) return null;
    // Use getRelativePointerPosition to account for stage scale/position transforms
    return stage.getRelativePointerPosition();
  };

  /**
   * Handle stage click - deselect or create new element
   */
  const handleStageClick = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty && drawingMode === 'select') {
      onEventSelect(null);
    }
  };

  /**
   * Handle stage mouse down - start drawing operation
   */
  const handleStageMouseDown = (e: any) => {
    // Debug logging
    console.log('[VisualEditor] Mouse down:', {
      drawingMode,
      targetType: e.target.getType(),
      targetName: e.target.name(),
      isStage: e.target === e.target.getStage()
    });

    // PRIORITY 1: Check if pan mode is active (space pressed)
    if (isSpacePressed) {
      const stage = stageRef.current;
      if (!stage) return;

      const pointerPos = stage.getPointerPosition();
      if (pointerPos) {
        setPanStartPos({ x: pointerPos.x, y: pointerPos.y });
        setIsPanning(true);
      }
      return; // Exit early - don't process drawing
    }

    // PRIORITY 2: Allow drawing on background image or stage, but not on draggable elements
    const clickedElement = e.target;
    const isBackgroundClick =
      clickedElement === clickedElement.getStage() ||
      clickedElement.name() === 'background-image' ||
      !clickedElement.draggable();

    // In select mode, allow selecting elements
    if (drawingMode === 'select') {
      if (!isBackgroundClick && clickedElement.draggable && clickedElement.draggable()) {
        // Let element selection happen naturally
        return;
      }
      // Clicking background in select mode does nothing
      return;
    }

    // In drawing modes, only process clicks on background or empty areas
    if (!isBackgroundClick) {
      console.log('[VisualEditor] Ignoring click on existing element in draw mode');
      return;
    }

    const pos = getMousePos(e);
    if (!pos) return;

    console.log('[VisualEditor] Starting drawing operation:', { mode: drawingMode, pos, editingEventId });

    // ========================================================================
    // EDIT MODE: If editing an event, UPDATE it instead of creating new
    // ========================================================================
    if (editingEventId) {
      console.log('[VisualEditor] Edit mode active - will update event:', editingEventId);

      // For text mode: Update immediately (no drag needed)
      if (drawingMode === 'text') {
        const percentPos = pixelsToPercent(pos.x, pos.y, stageDimensions.width, stageDimensions.height);
        onEventUpdate(editingEventId, {
          position: percentPos,
          elementType: 'text',
          content: 'New Text',
          fontSize: 16,
          color: currentColor,
        });
        return;
      }

      // For shape/line/arrow modes: Start drawing (will update in handleStageMouseUp)
      if (drawingMode === 'line' || drawingMode === 'arrow' || drawingMode === 'circle' || drawingMode === 'ring' || drawingMode === 'rectangle') {
        startDrawing({ x: pos.x, y: pos.y });
        return;
      }

      return; // Exit early for edit mode
    }

    // ========================================================================
    // CREATE MODE: No event selected, create new event
    // ========================================================================
    console.log('[VisualEditor] Create mode - will create new event');

    if (drawingMode === 'text') {
      const textEvent = createTextEvent(pos.x, pos.y);
      onEventCreate(textEvent);
      return;
    }

    if (drawingMode === 'line' || drawingMode === 'arrow' || drawingMode === 'circle' || drawingMode === 'ring' || drawingMode === 'rectangle') {
      startDrawing({ x: pos.x, y: pos.y });
    }
  };

  /**
   * Handle stage mouse move - update drawing in progress
   */
  const handleStageMouseMove = (e: any) => {
    // PRIORITY 1: Handle panning
    if (isPanning && panStartPos) {
      const stage = stageRef.current;
      if (!stage) return;

      const pointerPos = stage.getPointerPosition();
      if (!pointerPos) return;

      const dx = pointerPos.x - panStartPos.x;
      const dy = pointerPos.y - panStartPos.y;

      setStagePosition({
        x: stagePosition.x + dx,
        y: stagePosition.y + dy,
      });

      // Update pan start for next delta calculation
      setPanStartPos({ x: pointerPos.x, y: pointerPos.y });
      return;
    }

    // PRIORITY 2: Existing drawing preview logic
    if (!isDrawing) return;

    const pos = getMousePos(e);
    if (!pos) return;

    updateLastPoint({ x: pos.x, y: pos.y });
  };

  /**
   * Handle stage mouse up - complete drawing operation
   */
  const handleStageMouseUp = (e: any) => {
    // PRIORITY 1: End panning
    if (isPanning) {
      setIsPanning(false);
      setPanStartPos(null);
      return;
    }

    // PRIORITY 2: Existing drawing completion logic
    if (!isDrawing) return;

    const pos = getMousePos(e);
    if (!pos) {
      clearPath();
      return;
    }

    const path = endDrawing();
    if (path.length < 2) {
      clearPath();
      return;
    }

    const start = path[0];
    const end = path[path.length - 1];

    // ========================================================================
    // EDIT MODE: Update existing event
    // ========================================================================
    if (editingEventId) {
      console.log('[VisualEditor] Edit mode - updating event:', editingEventId, 'with mode:', drawingMode);

      if (drawingMode === 'line' || drawingMode === 'arrow') {
        const pos1 = pixelsToPercent(start.x, start.y, stageDimensions.width, stageDimensions.height);
        const pos2 = pixelsToPercent(end.x, end.y, stageDimensions.width, stageDimensions.height);
        onEventUpdate(editingEventId, {
          elementType: drawingMode,
          position: pos1,
          lineCoordinates: {
            x1: pos1.x,
            y1: pos1.y,
            x2: pos2.x,
            y2: pos2.y,
          },
          color: currentColor,
          thickness: currentThickness,
        });
      } else if (drawingMode === 'circle') {
        const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        const percentPos = pixelsToPercent(start.x, start.y, stageDimensions.width, stageDimensions.height);
        const percentRadius = (radius / stageDimensions.width) * 100;
        onEventUpdate(editingEventId, {
          elementType: 'shape',
          shapeType: 'circle',
          position: percentPos,
          dimensions: {
            width: percentRadius * 2,
            height: percentRadius * 2,
          },
          color: currentColor,
          thickness: currentThickness,
        });
      } else if (drawingMode === 'ring') {
        const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        const percentPos = pixelsToPercent(start.x, start.y, stageDimensions.width, stageDimensions.height);
        const percentRadius = (radius / stageDimensions.width) * 100;
        onEventUpdate(editingEventId, {
          elementType: 'shape',
          shapeType: 'ring',
          position: percentPos,
          dimensions: {
            width: percentRadius * 2,
            height: percentRadius * 2,
          },
          color: currentColor,
          thickness: currentThickness, // Ring uses thickness for ring width
        });
      } else if (drawingMode === 'rectangle') {
        const width = Math.abs(end.x - start.x);
        const height = Math.abs(end.y - start.y);
        const x = Math.min(start.x, end.x);
        const y = Math.min(start.y, end.y);
        const percentPos = pixelsToPercent(x, y, stageDimensions.width, stageDimensions.height);
        const percentWidth = (width / stageDimensions.width) * 100;
        const percentHeight = (height / stageDimensions.height) * 100;
        onEventUpdate(editingEventId, {
          elementType: 'shape',
          shapeType: 'rectangle',
          position: percentPos,
          dimensions: {
            width: percentWidth,
            height: percentHeight,
          },
          color: currentColor,
          thickness: currentThickness,
        });
      }

      clearPath();
      return;
    }

    // ========================================================================
    // CREATE MODE: Create new event
    // ========================================================================
    let newEvent: Partial<TimelineEvent> | null = null;

    if (drawingMode === 'line') {
      newEvent = createLineEvent(start.x, start.y, end.x, end.y);
    } else if (drawingMode === 'arrow') {
      newEvent = createArrowEvent(start.x, start.y, end.x, end.y);
    } else if (drawingMode === 'circle') {
      const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
      newEvent = createCircleEvent(start.x, start.y, radius);
    } else if (drawingMode === 'ring') {
      const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
      newEvent = createRingEvent(start.x, start.y, radius);
    } else if (drawingMode === 'rectangle') {
      const width = Math.abs(end.x - start.x);
      const height = Math.abs(end.y - start.y);
      const x = Math.min(start.x, end.x);
      const y = Math.min(start.y, end.y);
      newEvent = createRectangleEvent(x, y, width, height);
    }

    if (newEvent) {
      onEventCreate(newEvent);
    }

    clearPath();
  };

  /**
   * Handle element drag end - update position
   */
  const handleElementDragEnd = (eventId: string, e: any) => {
    const node = e.target;
    const { x, y } = node.position();
    const percentPosition = pixelsToPercent(x, y, stageDimensions.width, stageDimensions.height);
    onEventUpdate(eventId, { position: percentPosition });
  };

  /**
   * Handle element transform end - update dimensions and position
   */
  const handleElementTransformEnd = (eventId: string, e: any) => {
    const node = e.target;
    const { x, y } = node.position();
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    const width = node.width ? node.width() * scaleX : undefined;
    const height = node.height ? node.height() * scaleY : undefined;
    const radius = node.radius ? node.radius() * scaleX : undefined;

    const percentPosition = pixelsToPercent(x, y, stageDimensions.width, stageDimensions.height);
    const updates: Partial<TimelineEvent> = { position: percentPosition };

    if (width !== undefined && height !== undefined) {
      updates.dimensions = {
        width: (width / stageDimensions.width) * 100,
        height: (height / stageDimensions.height) * 100,
      };
    }

    if (radius !== undefined) {
      updates.dimensions = {
        width: (radius * 2 / stageDimensions.width) * 100,
        height: (radius * 2 / stageDimensions.height) * 100,
      };
    }

    node.scaleX(1);
    node.scaleY(1);

    onEventUpdate(eventId, updates);
  };

  // ============================================================================
  // RENDER HELPERS
  // ============================================================================

  /**
   * Render background image layer
   */
  const renderBackgroundLayer = () => {
    if (!backgroundImage) return null;
    return (
      <KonvaImage
        name="background-image"
        listening={false}
        image={backgroundImage}
        width={stageDimensions.width}
        height={stageDimensions.height}
      />
    );
  };

  /**
   * Render text elements
   */
  const renderTextElements = () => {
    return events
      .filter(event => event.elementType === 'text')
      .map(event => {
        const pixelPosition = percentToPixels(
          event.position.x,
          event.position.y,
          stageDimensions.width,
          stageDimensions.height
        );

        return (
          <Text
            key={event.id}
            id={event.id}
            x={pixelPosition.x}
            y={pixelPosition.y}
            text={event.content || 'New Text'}
            fontSize={event.fontSize || 16}
            fill={event.color || '#000000'}
            draggable={drawingMode === 'select'}
            onClick={() => onEventSelect(event.id)}
            onTap={() => onEventSelect(event.id)}
            onDragEnd={(e) => handleElementDragEnd(event.id, e)}
            onTransformEnd={(e) => handleElementTransformEnd(event.id, e)}
          />
        );
      });
  };

  /**
   * Render shape elements (circle, rectangle)
   */
  const renderShapeElements = () => {
    return events
      .filter(event => event.elementType === 'shape')
      .map(event => {
        const pixelPos = percentToPixels(
          event.position.x,
          event.position.y,
          stageDimensions.width,
          stageDimensions.height
        );

        const width = event.dimensions?.width
          ? (event.dimensions.width / 100) * stageDimensions.width
          : 50;
        const height = event.dimensions?.height
          ? (event.dimensions.height / 100) * stageDimensions.height
          : 50;

        const shapeProps = {
          key: event.id,
          id: event.id,
          x: pixelPos.x,
          y: pixelPos.y,
          fill: event.color || '#00A689',
          stroke: event.color || '#00A689',
          strokeWidth: 1,
          draggable: drawingMode === 'select',
          onClick: () => onEventSelect(event.id),
          onTap: () => onEventSelect(event.id),
          onDragEnd: (e: any) => handleElementDragEnd(event.id, e),
          onTransformEnd: (e: any) => handleElementTransformEnd(event.id, e),
        };

        if (event.shapeType === 'circle') {
          return <Circle {...shapeProps} radius={width / 2} />;
        } else if (event.shapeType === 'ring') {
          // Ring - non-obscuring circular highlight
          const outerRadius = width / 2;
          const thickness = event.thickness || 4;
          const innerRadius = Math.max(0, outerRadius - thickness);
          return (
            <Ring
              {...shapeProps}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill={undefined} // Remove fill - rings should be hollow
            />
          );
        } else if (event.shapeType === 'rectangle') {
          return (
            <Rect
              {...shapeProps}
              width={width}
              height={height}
              offsetX={width / 2}
              offsetY={height / 2}
            />
          );
        }

        return null;
      });
  };

  /**
   * Render line elements
   */
  const renderLineElements = () => {
    return events
      .filter(event => event.elementType === 'line')
      .map(event => {
        if (!event.lineCoordinates) return null;

        const start = percentToPixels(
          event.lineCoordinates.x1,
          event.lineCoordinates.y1,
          stageDimensions.width,
          stageDimensions.height
        );
        const end = percentToPixels(
          event.lineCoordinates.x2,
          event.lineCoordinates.y2,
          stageDimensions.width,
          stageDimensions.height
        );

        return (
          <Line
            key={event.id}
            id={event.id}
            points={[start.x, start.y, end.x, end.y]}
            stroke={event.color || '#000000'}
            strokeWidth={event.thickness || 2}
            onClick={() => onEventSelect(event.id)}
            onTap={() => onEventSelect(event.id)}
          />
        );
      });
  };

  /**
   * Render arrow elements
   */
  const renderArrowElements = () => {
    return events
      .filter(event => event.elementType === 'arrow')
      .map(event => {
        if (!event.lineCoordinates) return null;

        const start = percentToPixels(
          event.lineCoordinates.x1,
          event.lineCoordinates.y1,
          stageDimensions.width,
          stageDimensions.height
        );
        const end = percentToPixels(
          event.lineCoordinates.x2,
          event.lineCoordinates.y2,
          stageDimensions.width,
          stageDimensions.height
        );

        return (
          <Arrow
            key={event.id}
            id={event.id}
            points={[start.x, start.y, end.x, end.y]}
            stroke={event.color || '#000000'}
            strokeWidth={event.thickness || 2}
            fill={event.color || '#000000'}
            pointerLength={10}
            pointerWidth={10}
            onClick={() => onEventSelect(event.id)}
            onTap={() => onEventSelect(event.id)}
          />
        );
      });
  };

  /**
   * Render preview of element being drawn
   */
  const renderDrawingPreview = () => {
    console.log('[renderDrawingPreview]', {
      isDrawing,
      pathLength: currentPath.length,
      drawingMode,
      currentPath
    });

    if (!isDrawing || currentPath.length < 1) return null;

    const start = currentPath[0];
    const end = currentPath.length > 1 ? currentPath[currentPath.length - 1] : start;

    if (drawingMode === 'line') {
      return (
        <Line
          points={[start.x, start.y, end.x, end.y]}
          stroke={currentColor}
          strokeWidth={currentThickness}
          opacity={0.5}
          dash={[5, 5]}
        />
      );
    }

    if (drawingMode === 'arrow') {
      return (
        <Arrow
          points={[start.x, start.y, end.x, end.y]}
          stroke={currentColor}
          strokeWidth={currentThickness}
          fill={currentColor}
          opacity={0.5}
          dash={[5, 5]}
          pointerLength={10}
          pointerWidth={10}
        />
      );
    }

    if (drawingMode === 'circle') {
      const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
      return (
        <Circle
          x={start.x}
          y={start.y}
          radius={radius || 1}
          fill={currentColor}
          stroke={currentColor}
          strokeWidth={1}
          opacity={0.5}
        />
      );
    }

    if (drawingMode === 'ring') {
      const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
      const thickness = currentThickness || 4; // Default 4px ring thickness
      return (
        <Ring
          x={start.x}
          y={start.y}
          innerRadius={Math.max(0, (radius || 1) - thickness)}
          outerRadius={radius || 1}
          stroke={currentColor}
          strokeWidth={2}
          opacity={0.5}
        />
      );
    }

    if (drawingMode === 'rectangle') {
      const width = Math.abs(end.x - start.x);
      const height = Math.abs(end.y - start.y);
      return (
        <Rect
          x={Math.min(start.x, end.x) + width / 2}
          y={Math.min(start.y, end.y) + height / 2}
          width={width}
          height={height}
          offsetX={width / 2}
          offsetY={height / 2}
          fill={currentColor}
          stroke={currentColor}
          strokeWidth={1}
          opacity={0.5}
        />
      );
    }

    return null;
  };

  /**
   * Render transformer for selected element
   */
  const renderTransformer = () => {
    return (
      <Transformer
        ref={transformerRef}
        boundBoxFunc={(oldBox, newBox) => {
          if (newBox.width < 10 || newBox.height < 10) {
            return oldBox;
          }
          return newBox;
        }}
      />
    );
  };

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  const cursorClass = isSpacePressed
    ? `visual-editor-container mode-pan ${isPanning ? 'is-panning' : ''}`
    : `visual-editor-container mode-${drawingMode}`;

  return (
    <>
      {/* Zoom Controls */}
      {originalImageDimensions && (
        <div className="zoom-controls">
          <label className="zoom-controls-label">
            Zoom: {Math.round(zoomLevel * 100)}%
          </label>
          <input
            type="range"
            min="0.25"
            max="2"
            step="0.25"
            value={zoomLevel}
            onChange={(e) => handleZoomChange(parseFloat(e.target.value))}
            className="zoom-controls-slider"
          />
          <button
            onClick={() => {
              handleZoomChange(autoFitZoom);
              setStagePosition({ x: 0, y: 0 }); // Reset pan position
            }}
            className="zoom-controls-button"
            title="Fit to screen"
          >
            Fit
          </button>
          <button
            onClick={() => handleZoomChange(1)}
            className="zoom-controls-button"
            title="100% size"
          >
            100%
          </button>
        </div>
      )}

      <div ref={containerRef} className={cursorClass}>
        <Stage
        ref={stageRef}
        width={stageDimensions.width}
        height={stageDimensions.height}
        scaleX={zoomLevel}
        scaleY={zoomLevel}
        x={stagePosition.x}
        y={stagePosition.y}
        onClick={handleStageClick}
        onMouseDown={handleStageMouseDown}
        onMouseMove={handleStageMouseMove}
        onMouseUp={handleStageMouseUp}
      >
        {/* Background Layer */}
        <Layer>
          {renderBackgroundLayer()}
        </Layer>

        {/* Elements Layer */}
        <Layer>
          {renderTextElements()}
          {renderShapeElements()}
          {renderLineElements()}
          {renderArrowElements()}
        </Layer>

        {/* Preview Layer - Shows element being drawn */}
        <Layer>
          {renderDrawingPreview()}
        </Layer>

        {/* Transformer Layer */}
        <Layer>
          {renderTransformer()}
        </Layer>
      </Stage>
    </div>
    </>
  );
};

export default VisualEditor;
