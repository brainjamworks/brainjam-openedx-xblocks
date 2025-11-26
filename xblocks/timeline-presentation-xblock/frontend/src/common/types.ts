/**
 * Type definitions for Timeline Presentation XBlock
 */

/**
 * Animation types supported by timeline elements
 */
export type AnimationType = 'fade' | 'scale' | 'wipe' | 'slide' | 'show';

/**
 * Direction for directional animations (slide, wipe)
 */
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Element types that can be rendered on the diagram
 */
export type ElementType = 'text' | 'shape' | 'line' | 'arrow';

/**
 * Shape types for shape elements
 */
export type ShapeType = 'circle' | 'rectangle' | 'triangle';

/**
 * Timeline event structure
 */
export interface TimelineEvent {
  /** Unique identifier for this event */
  id: string;

  /** Timestamp in seconds when this event should trigger */
  timestamp: number;

  /** Type of element to render */
  elementType: ElementType;

  /** Animation to apply */
  animation: AnimationType;

  /** Direction for directional animations (optional) */
  animationDirection?: AnimationDirection;

  /** Duration of animation in milliseconds */
  animationDuration: number;

  /** Position on diagram (0-100 percentage) */
  position: {
    x: number;
    y: number;
  };

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
}

/**
 * Props for DiagramCanvas component
 */
export interface DiagramCanvasProps {
  imageUrl: string;
  activeElements: TimelineEvent[];
  onImageLoad?: () => void;
}

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
