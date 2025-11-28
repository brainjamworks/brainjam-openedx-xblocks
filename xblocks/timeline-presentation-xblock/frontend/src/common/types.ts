/**
 * Type definitions for Timeline Presentation XBlock
 *
 * MIGRATION STRATEGY (v1 → v2):
 * ================================
 * v1 Format (OLD): Used flat structure with `timestamp`, `animation`, `animationDuration`
 * v2 Format (NEW): Uses structured `timing`, `entryAnimation`, `exitAnimation` objects
 *
 * BACKWARD COMPATIBILITY:
 * - v1 events without `timing` → automatically converted via `normalizeTimelineEvent()`
 * - Events without `endTime` → stay visible forever (preserves old behavior)
 * - Events without `exitAnimation` → no exit animation (preserves old behavior)
 * - ZERO BREAKING CHANGES for existing content
 */

/**
 * Animation types supported by timeline elements
 */
export type AnimationType = 'fade' | 'scale' | 'draw' | 'slide' | 'show';

/**
 * Direction for directional animations (slide, draw)
 */
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Element types that can be rendered on the diagram
 */
export type ElementType = 'text' | 'shape' | 'line' | 'arrow';

/**
 * Drawing modes for visual editor
 */
export type DrawingMode = 'select' | 'text' | 'line' | 'arrow' | 'circle' | 'rectangle' | 'ring';

/**
 * Shape types for shape elements
 */
export type ShapeType = 'circle' | 'rectangle' | 'triangle' | 'ring';

/**
 * Timeline phases for playback state machine
 *
 * Lifecycle: HIDDEN → ENTERING → VISIBLE → EXITING → EXITED
 */
export enum TimelinePhase {
  HIDDEN = 'hidden',       // Before start time
  ENTERING = 'entering',   // Entry animation playing
  VISIBLE = 'visible',     // Fully visible, between entry and exit
  EXITING = 'exiting',     // Exit animation playing
  EXITED = 'exited'        // After end time
}

/**
 * Animation configuration for entry/exit animations
 */
export interface AnimationConfig {
  type: AnimationType;
  duration: number;        // milliseconds
  direction?: AnimationDirection;
  easing?: string;         // GSAP easing (e.g., 'power2.out', 'elastic.out')
}

/**
 * Timing configuration for timeline events (v2 format)
 */
export interface TimingConfig {
  startTime: number;       // seconds - when element starts entering
  endTime?: number;        // seconds - when element starts exiting (optional)
  duration?: number;       // seconds - @deprecated, use animation durations instead
}

/**
 * Konva animation configuration (pre-calculated by studio)
 *
 * This config is generated in studio view and contains all the necessary
 * information to render and animate an element in the student view.
 * Student view becomes a "dumb renderer" that just applies this config.
 */
export interface KonvaAnimationConfig {
  /**
   * Konva rendering properties (final/visible state)
   * These are the properties passed directly to Konva shape components
   */
  konvaProps: {
    // Position (in pixels, converted from percentage)
    x: number;
    y: number;

    // Shape-specific properties
    radius?: number;          // Circle
    innerRadius?: number;     // Ring
    outerRadius?: number;     // Ring
    width?: number;           // Rectangle, Text
    height?: number;          // Rectangle
    fill?: string;            // Shapes
    stroke?: string;          // Lines, Arrows, Ring
    strokeWidth?: number;     // Lines, Arrows, Ring
    points?: number[];        // Lines, Arrows

    // Text properties
    text?: string;            // Text
    fontSize?: number;        // Text
    fontFamily?: string;      // Text

    // Layout properties
    offsetX?: number;         // Center point offset
    offsetY?: number;         // Center point offset
    cornerRadius?: number;    // Rectangle

    // Arrow properties
    pointerLength?: number;   // Arrow
    pointerWidth?: number;    // Arrow
  };

  /**
   * Animation configuration (pre-calculated states)
   */
  animation: {
    type: AnimationType;
    duration: number;  // milliseconds
    easing: 'EaseOut' | 'EaseIn' | 'Linear' | 'EaseInOut' | 'BackEaseOut';

    /**
     * Initial state (where element starts - hidden)
     * Only includes properties that animate
     */
    initialState: {
      opacity?: number;
      x?: number;
      y?: number;
      scaleX?: number;
      scaleY?: number;
      dashOffset?: number;
      dash?: number[];
      visible?: boolean;
      points?: number[];
    };

    /**
     * Target state (where element ends - visible)
     * Only includes properties that animate
     */
    targetState: {
      opacity?: number;
      x?: number;
      y?: number;
      scaleX?: number;
      scaleY?: number;
      dashOffset?: number;
      dash?: number[];
      visible?: boolean;
      points?: number[];
    };
  };
}

/**
 * Timeline event structure
 *
 * SUPPORTS BOTH FORMATS:
 * - v1 (legacy): Uses `timestamp`, `animation`, `animationDuration` at root
 * - v2 (new): Uses `timing`, `entryAnimation`, `exitAnimation` objects
 *
 * TypeScript allows both for backward compatibility. Runtime code uses
 * normalizeTimelineEvent() to convert v1 → v2 before processing.
 */
export interface TimelineEvent {
  // ============================================================================
  // CORE FIELDS (required in both v1 and v2)
  // ============================================================================

  /** Unique identifier for this event */
  id: string;

  /** User-friendly name for this event (for identification in lists/dropdowns) */
  name?: string;

  /**
   * Type of element to render
   * Optional during creation - must be set before rendering in student view
   */
  elementType?: ElementType;

  /** Position on diagram (0-100 percentage) */
  position: {
    x: number;
    y: number;
  };

  // ============================================================================
  // V2 FORMAT (new structured format)
  // ============================================================================

  /**
   * Timing configuration (v2 format)
   * If present, this is a v2 event. If absent, fall back to v1 `timestamp` field.
   */
  timing?: TimingConfig;

  /**
   * Entry animation configuration (v2 format)
   * If present, this is a v2 event. If absent, fall back to v1 `animation` field.
   */
  entryAnimation?: AnimationConfig;

  /**
   * Exit animation configuration (v2 format - OPTIONAL)
   * If omitted, element stays visible forever (old v1 behavior)
   */
  exitAnimation?: AnimationConfig;

  // ============================================================================
  // V1 FORMAT (legacy flat structure - DEPRECATED but still supported)
  // ============================================================================

  /**
   * @deprecated Use timing.startTime instead
   * v1 field: Timestamp in seconds when this event should trigger
   */
  timestamp?: number;

  /**
   * @deprecated Use entryAnimation.type instead
   * v1 field: Animation to apply
   */
  animation?: AnimationType;

  /**
   * @deprecated Use entryAnimation.direction instead
   * v1 field: Direction for directional animations
   */
  animationDirection?: AnimationDirection;

  /**
   * @deprecated Use entryAnimation.duration instead
   * v1 field: Duration of animation in milliseconds
   */
  animationDuration?: number;

  // ============================================================================
  // ELEMENT PROPERTIES (same in both formats)
  // ============================================================================

  /** Dimensions (optional, depends on element type) */
  dimensions?: {
    width?: number;
    height?: number;
  };

  /** Content for text elements */
  content?: string;

  /** Shape type for shape elements */
  shapeType?: ShapeType;

  /** Color for the element (hex or CSS color) */
  color?: string;

  /** Font size for text elements */
  fontSize?: number;

  /** Line thickness for line/arrow elements */
  thickness?: number;

  /** Line coordinates for line/arrow elements */
  lineCoordinates?: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };

  /** Additional CSS classes (optional) */
  className?: string;

  // ============================================================================
  // KONVA RENDERING CONFIG (generated by studio)
  // ============================================================================

  /**
   * Pre-calculated Konva animation configuration
   * Generated by studio view, consumed by student view
   * If missing, element cannot be rendered (studio must regenerate)
   */
  konvaConfig?: KonvaAnimationConfig;
}

/**
 * Calculated layer state at a point in time
 */
export interface LayerState {
  id: string;
  phase: TimelinePhase;
  progress: number;        // 0-1 progress within current phase
  opacity: number;         // 0-1 opacity value
  transform: string;       // CSS transform string
  visible: boolean;        // Whether layer should be rendered
}

/**
 * Timeline state for playback
 */
export interface TimelineState {
  currentTime: number;
  isPlaying: boolean;
  duration: number;
  playbackRate: number;
}

// ============================================================================
// MIGRATION UTILITIES
// ============================================================================

/**
 * Normalize timeline event to v2 format (with backward compatibility)
 *
 * CONVERSION RULES:
 * 1. If event has `timing` object → already v2 format, return as-is
 * 2. If event has `timestamp` → v1 format, convert to v2
 * 3. v1 events without `endTime` → stay visible forever (old behavior)
 * 4. v1 events without exit animation → no exit (old behavior)
 *
 * @param event - Timeline event in v1 or v2 format
 * @returns Normalized event in v2 format
 */
export function normalizeTimelineEvent(event: TimelineEvent): Required<Pick<TimelineEvent, 'timing' | 'entryAnimation'>> & TimelineEvent {
  // Already v2 format with timing and entryAnimation
  if (event.timing && event.entryAnimation) {
    return event as Required<Pick<TimelineEvent, 'timing' | 'entryAnimation'>> & TimelineEvent;
  }

  // Convert v1 → v2
  const normalized: Required<Pick<TimelineEvent, 'timing' | 'entryAnimation'>> & TimelineEvent = {
    ...event,
    timing: event.timing || {
      startTime: event.timestamp ?? 0,
      // No endTime = stays visible forever (v1 behavior)
    },
    entryAnimation: event.entryAnimation || {
      type: event.animation || 'fade',
      duration: event.animationDuration ?? 500,
      direction: event.animationDirection,
    },
    // exitAnimation remains undefined if not present (stays visible forever)
  };

  return normalized;
}

/**
 * Check if event uses v2 format
 */
export function isV2Event(event: TimelineEvent): boolean {
  return !!(event.timing && event.entryAnimation);
}

/**
 * Check if event uses v1 format
 */
export function isV1Event(event: TimelineEvent): boolean {
  return !!(event.timestamp !== undefined && event.animation);
}

// ============================================================================
// EXISTING INTERFACES (preserved for compatibility)
// ============================================================================

/**
 * Canvas dimensions from studio editor
 */
export interface CanvasDimensions {
  width: number;
  height: number;
}

/**
 * Student data received from Python backend
 */
export interface StudentData {
  displayName: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
  timelineEvents: TimelineEvent[];
  editorCanvasDimensions?: CanvasDimensions;
}

/**
 * Props for StudentView component
 */
export interface StudentViewProps extends StudentData {
  runtime: any; // XBlockRuntime
}

/**
 * Props for TimelinePlayer component
 */
export interface TimelinePlayerProps {
  audioUrl: string;
  imageUrl: string;
  timelineEvents: TimelineEvent[];
  editorCanvasDimensions?: CanvasDimensions;
}

/**
 * Props for DiagramCanvas component
 * Note: DiagramCanvasProps is now defined locally in DiagramCanvas.tsx
 * to support GSAP timeline integration
 */

/**
 * Props for TimelineElement component
 */
export interface TimelineElementProps {
  event: TimelineEvent;
  isActive: boolean;
}

/**
 * State for active timeline events
 */
export interface ActiveEventState {
  eventId: string;
  startTime: number;
  isAnimating: boolean;
}

/**
 * Response from course asset handlers
 */
export interface CourseAsset {
  filename: string;
  url: string;
  portable_url: string;
  thumbnail_url?: string;
  content_type: string;
  upload_date: string;
}

/**
 * Response from list_course_assets handler
 */
export interface ListAssetsResponse {
  success: boolean;
  assets?: CourseAsset[];
  count?: number;
  error?: string;
}

/**
 * Studio view fields from Python backend
 */
export interface StudioViewFields {
  display_name: string;
  title: string;
  description: string;
  image_url: string;
  audio_url: string;
  timeline_events: TimelineEvent[];
  course_id: string;
  editor_canvas_dimensions?: CanvasDimensions;
}

/**
 * Props for StudioView component
 */
export interface StudioViewProps {
  runtime: any; // XBlockRuntime
  fields: StudioViewFields;
}

/**
 * Asset upload response
 */
export interface AssetUploadResponse {
  success: boolean;
  url?: string;
  filename?: string;
  error?: string;
  asset?: CourseAsset;
}
