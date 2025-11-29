/**
 * TypeScript types for Sort Into Bins XBlock
 *
 * Students drag items (text, images, or HTML) into categorized bins.
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
 * Item content types supported
 */
export type ItemType = 'text' | 'image' | 'html';

/**
 * Bin definition with capacity constraints
 */
export interface BinDefinition {
  id: string;
  label: string;
  description: string;
  max_capacity: number; // 0 = unlimited
}

/**
 * Sortable item definition
 */
export interface SortableItem {
  id: string;
  type: ItemType;
  content: string; // Text content, image URL, or HTML markup
  correct_bin_id: string;
}

/**
 * Student placement data (supports both immediate and on_submit modes)
 */
export interface StudentPlacement {
  binId: string;
  correct?: boolean; // Only set in immediate mode or after submission
}

/**
 * Student's current placements (item_id -> placement data)
 * Can be either old format (string bin_id) or new format (object with binId and correct)
 */
export type StudentPlacements = Record<string, string | StudentPlacement>;

/**
 * Result for a single item after submission
 */
export interface ItemResult {
  itemId: string;
  correct: boolean;
  correctBinId: string | null; // null if not shown yet
  studentBinId: string;
}

/**
 * Result of immediate feedback (submit_item handler)
 * Returned for each individual item placement
 */
export interface ImmediateFeedbackResult {
  success: boolean;
  correct: boolean;
  score: number;
  maxScore: number;
  percentage: number;
  correctCount: number;
  totalItems: number;
  attemptsRemaining: number | null;
  error?: string;
}

/**
 * Result of batch submission (submit_placements handler)
 * Returned when submitting all placements at once
 */
export interface BatchSubmissionResult {
  success: boolean;
  results: Record<string, {
    correct: boolean;
    correctBinId: string;
    binId: string;
  }>;
  allCorrect: boolean;
  correctCount: number;
  totalItems: number;
  score: number;
  maxScore: number;
  percentage: number;
  attemptsRemaining: number | null;
  explanation?: string;
  error?: string;
}

/**
 * Show Answer response
 */
export interface ShowAnswerResult {
  success: boolean;
  correctAnswers: Record<string, string>; // item_id -> correct_bin_id
  error?: string;
}

/**
 * Legacy SubmissionResult (maintained for backwards compatibility)
 */
export interface SubmissionResult {
  success: boolean;
  correct: boolean; // All items correct
  correctCount: number;
  totalItems: number;
  score: number;
  maxScore: number;
  percentage: number;
  itemResults: ItemResult[];
  attemptsRemaining: number | null;
  explanation?: string;
  error?: string;
}

/**
 * Student view data passed from Python
 */
export interface StudentViewData {
  displayName: string;
  instructions: string;
  bins: BinDefinition[];
  items: SortableItem[];
  studentPlacements: StudentPlacements;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  gradingMode: 'all_or_nothing' | 'partial_credit';
  showCorrectAnswers: boolean;
  feedbackMode: 'immediate' | 'on_submit';
  lastSubmissionResult?: SubmissionResult;
  isGraded: boolean;
}

/**
 * Studio view fields passed from Python
 */
export interface StudioViewFields {
  display_name: string;
  instructions: string;
  randomize_items: boolean;
  bins: BinDefinition[];
  items: SortableItem[];
  explanation: string;
  weight: number;
  max_attempts: number;
  grading_mode: 'all_or_nothing' | 'partial_credit';
  show_correct_answers: 'never' | 'after_attempts' | 'always';
  show_feedback_mode: 'immediate' | 'on_submit';
}

/**
 * Props for StudentView component
 */
export interface StudentViewProps {
  runtime: XBlockRuntime;
  displayName: string;
  instructions: string;
  bins: BinDefinition[];
  items: SortableItem[];
  studentPlacements: StudentPlacements;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  gradingMode: 'all_or_nothing' | 'partial_credit';
  showCorrectAnswers: boolean;
  feedbackMode: 'immediate' | 'on_submit';
  lastSubmissionResult?: SubmissionResult;
  isGraded: boolean;
}

/**
 * Props for StudioView component
 */
export interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
}

/**
 * Drag and drop item interface
 */
export interface DragItem {
  id: string;
  type: 'SORTABLE_ITEM';
  item: SortableItem;
}

/**
 * Drop result when item is dropped into bin
 */
export interface DropResult {
  binId: string;
  binLabel: string;
}

/**
 * Bin capacity status
 */
export interface BinCapacityStatus {
  current: number;
  max: number;
  isFull: boolean;
  isNearFull: boolean; // Within 1 of capacity
}

/**
 * Feedback display variants (Paragon Alert variants)
 */
export type FeedbackVariant = 'success' | 'danger' | 'warning' | 'info';

/**
 * Problem state for UI management
 */
export interface ProblemState {
  placements: StudentPlacements;
  isSubmitting: boolean;
  showFeedback: boolean;
  submissionResult?: SubmissionResult;
}

/**
 * Wizard step identifiers for Studio authoring
 */
export type WizardStep = 'bins' | 'items' | 'settings';

/**
 * Wizard state for Studio UI
 */
export interface WizardState {
  currentStep: WizardStep;
  bins: BinDefinition[];
  items: SortableItem[];
  settings: {
    display_name: string;
    problem_title: string;
    instructions: string;
    explanation: string;
    weight: number;
    max_attempts: number;
    grading_mode: 'all_or_nothing' | 'partial_credit';
    show_correct_answers: 'never' | 'after_attempts' | 'always';
    show_feedback_mode: 'immediate' | 'on_submit';
  };
  hasChanges: boolean;
  isSaving: boolean;
}
