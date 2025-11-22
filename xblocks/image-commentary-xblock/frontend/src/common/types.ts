/**
 * Type Definitions for Image Commentary XBlock
 */

/**
 * Marker type for commentary annotations
 * - info: General information (blue)
 * - warning: Important notes (yellow/orange)
 * - success: Positive feedback (green)
 * - danger: Critical points (red)
 */
export type MarkerType = 'info' | 'warning' | 'success' | 'danger';

/**
 * Marker represents a clickable point on the image with commentary
 */
export interface Marker {
  id: string;           // Unique identifier
  x: number;            // X coordinate (percentage 0-100)
  y: number;            // Y coordinate (percentage 0-100)
  label: string;        // Short label for the marker
  commentary: string;   // Detailed commentary text shown in popover
  type: MarkerType;     // Visual type for color coding
}

/**
 * Fields passed to Studio View from Python backend
 * Note: course_id comes from runtime, not fields
 */
export interface StudioViewFields {
  display_name: string;
  title: string;
  image_url: string;
  markers: Marker[];
  course_id: string;  // Passed for asset uploads and picker
}

/**
 * Props for Student View component
 */
export interface StudentViewProps {
  displayName: string;
  title: string;
  imageUrl: string;
  markers: Marker[];
}

/**
 * Course asset from content store
 */
export interface CourseAsset {
  display_name: string;
  filename: string;
  url: string;
  thumbnail_url: string;
  content_type: string;
}

/**
 * Response from list_course_assets handler
 */
export interface ListAssetsResponse {
  success: boolean;
  assets?: CourseAsset[];
  error?: string;
}
