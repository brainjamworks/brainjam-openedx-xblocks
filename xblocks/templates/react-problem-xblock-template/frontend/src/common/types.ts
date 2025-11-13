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
 * IMPLEMENTATION: Single question problem data
 * Default structure for simple single-answer problems
 */
export interface ProblemQuestion {
  text: string;           // Question text to display
  correctAnswer?: string; // Optional - only for Studio view
  explanation?: string;   // Optional explanation shown after submission
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
 * Returned from submit_answer handler
 */
export interface SubmissionResult {
  success: boolean;                // Whether the submission was processed
  correct: boolean;                // Whether the answer was correct
  score: number;                   // Points earned
  maxScore: number;                // Maximum points possible (weight)
  percentage: number;              // Score as percentage (0-100)
  feedback: string;                // Feedback message to display
  attemptsRemaining: number | null; // Attempts left (null = unlimited)
  explanation?: string;            // Optional detailed explanation
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
export interface StudentViewData {
  questionText: string;
  studentAnswer: string;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'immediate' | 'on_submit';
  lastSubmissionResult?: SubmissionResult;
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
 * IMPLEMENTATION: Studio view fields passed from Python
 * Matches the fields dict in studio_view()
 */
export interface StudioViewFields {
  display_name: string;
  question_text: string;
  correct_answer: string;
  explanation: string;
  weight: number;
  max_attempts: number;
  show_feedback_mode: string;
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
  questionText: string;
  studentAnswer: string;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'immediate' | 'on_submit';
  lastSubmissionResult?: SubmissionResult;
}

/**
 * IMPLEMENTATION: Props for StudioView component
 */
export interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
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
