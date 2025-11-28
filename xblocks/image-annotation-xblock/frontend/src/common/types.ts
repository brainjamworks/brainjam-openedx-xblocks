/**
 * IMPLEMENTATION: TypeScript types for Problem XBlocks
 *
 * These types define the interfaces for gradable problem XBlocks.
 * Customize these types based on your problem requirements.
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
 * IMPLEMENTATION: Image Annotation types
 */
export type LabelType = 'normal' | 'dot' | 'cross';

export interface LabelDefinition {
  id: string;           // e.g., "label_A"
  label: string;        // Display text, e.g., "A" or "Heart"
  type: LabelType;      // Label visual style: 'normal' (badge), 'dot' (marker), or 'cross' (X symbol)
  startX: number;       // Initial X position in pixels
  startY: number;       // Initial Y position in pixels
  width: number;        // Label width in pixels (e.g., 60)
  height: number;       // Label height in pixels (e.g., 40)
}

export interface DropZone {
  id: string;           // e.g., "zone_A"
  x: number;            // Center X position in pixels
  y: number;            // Center Y position in pixels
  radius: number;       // Detection and visual radius in pixels
  correctAnswer: string; // Correct label ID (e.g., "A")
  description?: string;  // Human-readable description
  visible?: boolean;     // Whether to show zone outline (for studio)
}

export interface StudentPlacement {
  labelId: string;
  x: number;           // Current X position in pixels
  y: number;           // Current Y position in pixels
  inZone?: string;     // Zone ID if snapped
  correct?: boolean;   // After validation
}

export interface LabelPlacements {
  [labelId: string]: StudentPlacement;
}

export interface PlacementValidation {
  correct: boolean;
  zone_id: string | null;  // Backend uses snake_case, actual zone placed
  expected_zone: string;   // Backend uses snake_case
  distance: number;
  message: string;
}

export interface ValidationResult {
  success: boolean;
  score: number;
  maxScore: number;
  percentage: number;
  allCorrect: boolean;
  feedbackMessage: string;
  explanation?: string;
  attemptsRemaining: number | null;
  results: {  // Backend returns 'results', not 'placements'
    [labelId: string]: PlacementValidation;
  };
  validationResults?: any;  // Additional field from backend
}

/**
 * Immediate Feedback Result - returned when submitting individual label in immediate mode
 */
export interface ImmediateFeedbackResult {
  success: boolean;
  correct: boolean;
  score: number;
  maxScore: number;
  percentage: number;
  attemptsRemaining: number | null;
}

/**
 * MULTI-PART EXAMPLE: For problems with multiple questions
 * Uncomment and modify for multi-part problems:
 */
// export interface MultiPartQuestion extends ProblemQuestion {
//   id: string;           // Unique identifier for the question
//   type: 'text' | 'multiple_choice' | 'numeric';  // Question type
//   points: number;       // Points available for this question
//   options?: string[];   // For multiple choice questions
// }

/**
 * IMPLEMENTATION: Result of a submission attempt
 * Returned from submit_placements handler
 */
export interface SubmissionResult {
  success: boolean;                // Whether the submission was processed
  score: number;                   // Points earned
  maxScore: number;                // Maximum points possible (weight)
  percentage: number;              // Score as percentage (0-100)
  feedback: string;                // Feedback message to display
  attemptsRemaining: number | null; // Attempts left (null = unlimited)
  placements?: {                   // Detailed placement validation results
    [labelId: string]: PlacementValidation;
  };
  error?: string;                  // Error message if success=false
}

/**
 * MULTI-PART EXAMPLE: Result for multi-part problems
 */
// export interface MultiPartSubmissionResult extends SubmissionResult {
//   results: Array<{
//     questionId: string;
//     correct: boolean;
//     earned: number;
//     possible: number;
//   }>;
// }

/**
 * IMPLEMENTATION: Student view data passed from Python
 * Matches the data dict in student_view()
 */
export interface StudentData {
  runtime: any;
  url: string;
  questionText: string;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  labels: LabelDefinition[];
  dropZones: DropZone[];
  studentPlacements: LabelPlacements;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'on_submit' | 'immediate';
  isGraded: boolean;
  snapEnabled: boolean;
  showCorrectOnSubmit: boolean;
  hasSubmitted: boolean;
  lastSubmissionResult?: ValidationResult;
}

/**
 * MULTI-PART EXAMPLE: Student view data for multi-part problems
 */
// export interface MultiPartStudentViewData {
//   questions: MultiPartQuestion[];
//   studentAnswers: Record<string, string>; // Map of questionId -> answer
//   currentScore: number;
//   maxScore: number;
//   attemptsRemaining: number | null;
//   feedbackMode: 'immediate' | 'on_submit';
//   lastSubmissionResult?: MultiPartSubmissionResult;
// }

/**
 * IMPLEMENTATION: Studio view data passed from Python
 * Matches the data dict in studio_view()
 */
export interface StudioData {
  runtime: any;
  url: string;
  displayName: string;
  questionText: string;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  labels: LabelDefinition[];
  dropZones: DropZone[];
  weight: number;
  maxAttempts: number;
  showFeedbackMode: string;
  gradingMode: string;
  snapEnabled: boolean;
  showCorrectOnSubmit: boolean;
  courseId: string;
}

/**
 * MULTI-PART EXAMPLE: Studio view fields for multi-part problems
 */
// export interface MultiPartStudioViewFields {
//   display_name: string;
//   questions: MultiPartQuestion[];
//   weight: number;
//   max_attempts: number;
//   show_feedback_mode: string;
// }

/**
 * IMPLEMENTATION: Props for StudentView component
 */
export interface StudentViewProps {
  runtime: XBlockRuntime;
  url: string;
  questionText: string;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  labels: LabelDefinition[];
  dropZones: DropZone[];
  studentPlacements: LabelPlacements;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'on_submit' | 'immediate';
  isGraded: boolean;
  snapEnabled: boolean;
  showCorrectOnSubmit: boolean;
  hasSubmitted: boolean;
  lastSubmissionResult?: ValidationResult;
}

/**
 * IMPLEMENTATION: Props for StudioView component
 */
export interface StudioViewProps {
  runtime: XBlockRuntime;
  url: string;
  displayName: string;
  questionText: string;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  labels: LabelDefinition[];
  dropZones: DropZone[];
  weight: number;
  maxAttempts: number;
  showFeedbackMode: string;
  gradingMode: string;
  snapEnabled: boolean;
  showCorrectOnSubmit: boolean;
  courseId: string;
}

/**
 * IMPLEMENTATION: Feedback display variants
 */
export type FeedbackVariant = 'success' | 'danger' | 'warning' | 'info';

/**
 * IMPLEMENTATION: Problem state for tracking UI state
 */
export interface ProblemState {
  currentAnswer: string;
  isSubmitting: boolean;
  showFeedback: boolean;
  submissionResult?: SubmissionResult;
}

/**
 * MULTI-PART EXAMPLE: State for multi-part problems
 */
// export interface MultiPartProblemState {
//   answers: Record<string, string>;  // Map of questionId -> answer
//   isSubmitting: boolean;
//   showFeedback: boolean;
//   submissionResult?: MultiPartSubmissionResult;
// }

/**
 * IMPLEMENTATION: Course asset types for image picker
 */
export interface CourseAsset {
  filename: string;
  url: string;
  portable_url: string;
  content_type: string;
  upload_date: string;
  thumbnail_url: string;
}

export interface ListAssetsResponse {
  success: boolean;
  assets: CourseAsset[];
  count: number;
  error?: string;
}
