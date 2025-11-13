/**
 * TypeScript types for Image Hotspot XBlock
 *
 * These types define the interfaces for the image hotspot problem XBlock.
 */

/**
 * ARCHITECTURAL: XBlock Runtime interface
 * Provided by OpenEdX XBlock framework
 */
export interface XBlockRuntime {
  handlerUrl: (element: HTMLElement, handlerName: string) => string;
  element?: HTMLElement;
  notify?: (event: string, data: any) => void;
}

/**
 * Image Hotspot definition
 * Defines a clickable region on the image
 */
export interface Hotspot {
  id: string;                    // Unique identifier
  label: string;                 // Display name/label
  shape: 'rectangle' | 'circle' | 'polygon'; // Shape type
  coordinates: number[];         // Coordinates (percentage 0-100)
  correct: boolean;              // Whether this is a correct answer
  points: number;                // Points awarded for clicking this
  feedback: string;              // Feedback message for this hotspot
}

/**
 * Student click record
 * Tracks individual click attempts
 */
export interface HotspotClick {
  x: number;                     // Click X coordinate (percentage 0-100)
  y: number;                     // Click Y coordinate (percentage 0-100)
  hotspot_id: string | null;     // ID of hotspot clicked (null if miss)
  correct: boolean;              // Whether click was correct
  points: number;                // Points earned
  timestamp: string;             // ISO timestamp
}

/**
 * Course asset (image from contentstore)
 */
export interface CourseAsset {
  filename: string;              // Asset filename
  url: string;                   // Full asset URL
  portable_url: string;          // Portable/relative URL
  content_type: string;          // MIME type
  upload_date: string;           // Upload timestamp
  thumbnail_url: string;         // Thumbnail URL
}

/**
 * Result of a click submission attempt
 * Returned from submit_answer handler (immediate mode)
 */
export interface SubmissionResult {
  success: boolean;                // Whether the submission was processed
  correct: boolean;                // Whether the click was correct
  clickedHotspot: string | null;   // ID of hotspot clicked (null if miss)
  points: number;                  // Points earned for this click
  score: number;                   // Total score earned
  maxScore: number;                // Maximum points possible (weight)
  percentage: number;              // Score as percentage (0-100)
  feedback: string;                // Feedback message to display
  attemptsRemaining: number | null; // Attempts left (null = unlimited)
  totalClicks: number;             // Total number of clicks made
  error?: string;                  // Error message if success=false
}

/**
 * Result of a batch submission (on_submit mode)
 * Returned from submit_all_clicks handler
 */
export interface BatchSubmissionResult {
  success: boolean;                // Whether the submission was processed
  results: Record<string, {        // Results for each click
    correct: boolean;
    hotspotId: string | null;
  }>;
  score: number;                   // Total score earned
  maxScore: number;                // Maximum points possible
  percentage: number;              // Score as percentage (0-100)
  allCorrect: boolean;             // Whether all clicks were correct
  explanation: string;             // Overall explanation/feedback
  attemptsRemaining: number | null; // Attempts left (null = unlimited)
  totalClicks: number;             // Total number of clicks submitted
  correctClicks: number;           // Number of correct clicks
  error?: string;                  // Error message if success=false
}

/**
 * Student view data passed from Python
 * Matches the data dict in student_view()
 */
export interface StudentViewData {
  questionText: string;
  imageUrl: string;
  hotspots: Hotspot[];
  studentClicks: HotspotClick[];
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'immediate' | 'on_submit';
  gradingMode: 'all_or_nothing' | 'partial_credit' | 'first_correct';
  lastSubmissionResult?: SubmissionResult;
  isGraded: boolean;
}

/**
 * Studio view fields passed from Python
 * Matches the fields dict in studio_view()
 */
export interface StudioViewFields {
  display_name: string;
  question_text: string;
  image_url: string;
  hotspots: Hotspot[];
  grading_mode: string;
  weight: number;
  max_attempts: number;
  show_feedback_mode: string;
  course_id: string;  // For contentstore API calls
}

/**
 * Props for StudentView component
 */
export interface StudentViewProps {
  runtime: XBlockRuntime;
  questionText: string;
  imageUrl: string;
  hotspots: Hotspot[];
  studentClicks: HotspotClick[];
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'immediate' | 'on_submit';
  gradingMode: 'all_or_nothing' | 'partial_credit' | 'first_correct';
  lastSubmissionResult?: SubmissionResult;
  isGraded: boolean;
}

/**
 * IMPLEMENTATION: Props for StudioView component
 */
export interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
}

/**
 * Feedback display variants
 */
export type FeedbackVariant = 'success' | 'danger' | 'warning' | 'info';

/**
 * Upload response from upload_image handler
 */
export interface UploadImageResponse {
  success: boolean;
  asset_url?: string;
  filename?: string;
  error?: string;
}

/**
 * Asset list response from list_course_assets handler
 */
export interface ListAssetsResponse {
  success: boolean;
  assets?: CourseAsset[];
  count?: number;
  error?: string;
}
