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
 * IMPLEMENTATION: Drag and Drop Matching types
 */
export interface MatchingPair {
  id: string;
  term: string;
  description: string;
}

export interface Term {
  id: string;
  term: string;
}

export interface Description {
  id: string;
  description: string;
}

export interface StudentMatch {
  correct: boolean;
  descriptionId: string;
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
 * IMPLEMENTATION: Result of batch submission (all matches at once)
 * Returned from submit_all_matches handler
 */
export interface BatchSubmissionResult {
  success: boolean;                           // Whether the submission was processed
  results: Record<string, {                   // Results for each term-description match
    correct: boolean;
    descriptionId: string;
  }>;
  score: number;                              // Points earned
  maxScore: number;                           // Maximum points possible (weight)
  percentage: number;                         // Score as percentage (0-100)
  allCorrect: boolean;                        // Whether all matches are correct
  explanation: string;                        // Explanation (shown if all correct or no attempts left)
  attemptsRemaining: number | null;           // Attempts left (null = unlimited)
  error?: string;                             // Error message if success=false
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
  displayName: string;
  questionText: string;
  terms: Term[];
  descriptions: Description[];
  studentMatches: Record<string, StudentMatch>;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'immediate' | 'on_submit';
  lastSubmissionResult?: SubmissionResult;
  isGraded: boolean;
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
  matching_pairs: MatchingPair[];
  randomize_items: boolean;
  explanation: string;
  weight: number;
  max_attempts: number;
  unlimited_attempts: boolean;
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
  displayName: string;
  questionText: string;
  terms: Term[];
  descriptions: Description[];
  studentMatches: Record<string, StudentMatch>;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'immediate' | 'on_submit';
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
