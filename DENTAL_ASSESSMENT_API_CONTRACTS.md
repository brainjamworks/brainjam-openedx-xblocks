# Dental Assessment XBlock - API Contracts

**Version**: 1.0
**Status**: APPROVED FOR DEVELOPMENT
**Last Updated**: [Current Date]

This document defines the API contracts and interfaces between all components of the Dental Assessment XBlock. All agents MUST adhere to these contracts to ensure parallel development succeeds.

---

## Table of Contents

1. [Python XBlock Fields](#python-xblock-fields)
2. [JSON Handler Contracts](#json-handler-contracts)
3. [TypeScript Type Definitions](#typescript-type-definitions)
4. [Event Contracts](#event-contracts)
5. [State Management Contracts](#state-management-contracts)
6. [Validation Contracts](#validation-contracts)
7. [Error Handling Contracts](#error-handling-contracts)

---

## 1. Python XBlock Fields

### XBlock Class Definition

```python
from xblock.core import XBlock
from xblock.fields import String, Integer, Float, List, Dict, Scope, Boolean
from xblock.scorable import ScorableXBlockMixin

class DentalAssessmentXBlock(XBlock, ScorableXBlockMixin):
    """
    XBlock for dental assessment with drag-drop positioning and angle measurement.
    """

    # Required for grading
    has_score = True
    icon_class = "problem"

    # Fields defined below...
```

### Scope.settings (Course-wide Configuration)

```python
display_name = String(
    display_name="Display Name",
    default="Dental Assessment",
    scope=Scope.settings,
    help="Display name for this component in the LMS"
)

weight = Float(
    display_name="Problem Weight",
    default=1.0,
    scope=Scope.settings,
    help="Maximum points for this assessment"
)
```

**Contract**:
- `display_name`: Must be non-empty string, max 255 characters
- `weight`: Must be positive float, typically 0.0-10.0

### Scope.content (Problem Definition)

```python
# Image configuration
image_url = String(
    display_name="Image URL",
    default="",
    scope=Scope.content,
    help="URL to the uploaded radiograph image"
)

image_width = Integer(
    display_name="Image Width",
    default=800,
    scope=Scope.content,
    help="Original image width in pixels (for coordinate conversion)"
)

image_height = Integer(
    display_name="Image Height",
    default=600,
    scope=Scope.content,
    help="Original image height in pixels (for coordinate conversion)"
)

# Draggable labels configuration
draggable_labels = List(
    display_name="Draggable Labels",
    default=[],
    scope=Scope.content,
    help="List of labels students can drag. Each item is a dict with: id, text, initial_x, initial_y, color (optional)"
)

# Drop zones configuration
drop_zones = List(
    display_name="Drop Zones",
    default=[],
    scope=Scope.content,
    help="List of drop zone targets. Each item is a dict with: id, x, y, radius, correct_answer, feedback (optional)"
)

# Snap configuration
snap_enabled = Boolean(
    display_name="Enable Snap-to-Target",
    default=True,
    scope=Scope.content,
    help="Enable magnetic snap behavior when labels are near zones"
)

snap_radius = Float(
    display_name="Snap Radius",
    default=5.0,
    scope=Scope.content,
    help="Detection radius for snap-to-target as percentage of image width"
)

# Angle measurement configuration
angle_measurement_enabled = Boolean(
    display_name="Enable Angle Measurement",
    default=False,
    scope=Scope.content,
    help="Enable angle measurement tool"
)

angle_reference_points = List(
    display_name="Angle Reference Points",
    default=[],
    scope=Scope.content,
    help="Three label IDs defining the angle: [point1_id, vertex_id, point2_id]"
)

expected_angle_min = Float(
    display_name="Expected Angle Minimum",
    default=0.0,
    scope=Scope.content,
    help="Minimum acceptable angle in degrees"
)

expected_angle_max = Float(
    display_name="Expected Angle Maximum",
    default=180.0,
    scope=Scope.content,
    help="Maximum acceptable angle in degrees"
)

# Grading configuration
grading_mode = String(
    display_name="Grading Mode",
    default="partial_credit",
    values=["all_or_nothing", "partial_credit", "positioning_only", "angle_only", "combined"],
    scope=Scope.content,
    help="How to calculate the final score"
)

max_attempts = Integer(
    display_name="Maximum Attempts",
    default=0,
    scope=Scope.content,
    help="Maximum submission attempts (0 = unlimited)"
)

show_answer = Boolean(
    display_name="Show Answer After Incorrect",
    default=True,
    scope=Scope.content,
    help="Display correct positions after an incorrect submission"
)
```

**Contract**:
- `image_url`: Must be valid URL or empty string
- `image_width`, `image_height`: Must be positive integers
- `draggable_labels`: List of dicts, each with required keys: `id` (string), `text` (string), `initial_x` (float 0-100), `initial_y` (float 0-100), optional `color` (hex string)
- `drop_zones`: List of dicts, each with required keys: `id` (string), `x` (float 0-100), `y` (float 0-100), `radius` (float 0-100), `correct_answer` (string matching a label id), optional `feedback` (string)
- `snap_radius`: Float 0-100 (percentage)
- `angle_reference_points`: List of exactly 3 strings (label IDs), or empty list if angle measurement disabled
- `expected_angle_min`, `expected_angle_max`: Floats 0-180, min < max
- `grading_mode`: Must be one of the enum values
- `max_attempts`: Non-negative integer
- `show_answer`: Boolean

### Scope.user_state (Per-Student Data)

```python
student_placements = Dict(
    display_name="Student Placements",
    default={},
    scope=Scope.user_state,
    help="Current label positions: {label_id: {x: float, y: float, zone_id: str}}"
)

student_angle = Float(
    display_name="Student Angle",
    default=None,
    scope=Scope.user_state,
    help="Measured angle in degrees (if angle measurement enabled)"
)

num_attempts = Integer(
    display_name="Number of Attempts",
    default=0,
    scope=Scope.user_state,
    help="Count of submission attempts"
)

is_correct = Boolean(
    display_name="Is Correct",
    default=None,
    scope=Scope.user_state,
    help="Overall correctness status (None if not yet submitted)"
)

earned_score = Float(
    display_name="Earned Score",
    default=0.0,
    scope=Scope.user_state,
    help="Points earned (0.0 to weight)"
)

feedback = Dict(
    display_name="Feedback",
    default={},
    scope=Scope.user_state,
    help="Detailed feedback on placements and angle"
)
```

**Contract**:
- `student_placements`: Dict with string keys (label IDs) and dict values containing `x` (float 0-100), `y` (float 0-100), `zone_id` (string or None)
- `student_angle`: Float 0-180 or None
- `num_attempts`: Non-negative integer
- `is_correct`: Boolean or None (None = not yet submitted)
- `earned_score`: Float 0.0 to `weight`
- `feedback`: Dict with keys `placement_feedback` (dict), `angle_feedback` (dict), `overall_message` (string)

---

## 2. JSON Handler Contracts

### Student View Handlers

#### `get_assessment_data`

**Purpose**: Return assessment configuration and student state for rendering

**Request**:
```python
# No parameters required
data = {}
```

**Response**:
```python
{
    # Image configuration
    "image_url": str,           # URL to radiograph image
    "image_width": int,         # Original image width (pixels)
    "image_height": int,        # Original image height (pixels)

    # Labels configuration
    "draggable_labels": [
        {
            "id": str,          # e.g., "label-A"
            "text": str,        # e.g., "A"
            "initial_x": float, # 0-100 (percentage)
            "initial_y": float, # 0-100 (percentage)
            "color": str        # Optional hex color
        },
        # ... more labels
    ],

    # Drop zones (sanitized - no correct_answer exposed to student)
    "drop_zones": [
        {
            "id": str,          # e.g., "zone-1"
            "x": float,         # 0-100 (percentage)
            "y": float,         # 0-100 (percentage)
            "radius": float     # 0-100 (percentage)
            # NOTE: correct_answer is NOT included in student view
        },
        # ... more zones
    ],

    # Snap configuration
    "snap_enabled": bool,
    "snap_radius": float,       # 0-100 (percentage)

    # Angle configuration
    "angle_measurement_enabled": bool,
    "angle_reference_points": [str, str, str],  # [point1_id, vertex_id, point2_id]

    # Attempts configuration
    "max_attempts": int,        # 0 = unlimited
    "current_attempt": int,     # Number of attempts so far

    # Student state
    "previous_placements": {
        "label_id": {"x": float, "y": float, "zone_id": str},
        # ... more placements
    },
    "previous_angle": float,    # Or None
    "is_submitted": bool,       # Has student submitted at least once?

    # Feedback (if submitted)
    "feedback": {
        "placement_feedback": dict,
        "angle_feedback": dict,
        "overall_message": str
    },
    "is_correct": bool,         # Or None if not submitted
    "earned_score": float,
    "max_score": float
}
```

**Contract**:
- Must NOT expose `correct_answer` fields from drop zones to student
- All coordinates must be in percentage (0-100) format
- Response must include all fields even if empty/None
- Handler must return 200 status on success

---

#### `submit_assessment`

**Purpose**: Validate student answer, calculate score, publish grade

**Request**:
```python
{
    "placements": {
        "label_id": {
            "x": float,       # 0-100 (percentage)
            "y": float        # 0-100 (percentage)
        },
        # ... all labels
    },
    "angle": float            # Optional, degrees, only if angle_measurement_enabled
}
```

**Response** (Success):
```python
{
    "success": True,
    "is_correct": bool,
    "earned_score": float,
    "max_score": float,
    "feedback": {
        "placement_feedback": {
            "correct_count": int,
            "total_count": int,
            "correct_labels": [str, ...],
            "incorrect_labels": [str, ...],
            "details": {
                "label_id": {
                    "correct": bool,
                    "expected_zone": str,
                    "actual_zone": str  # Or None
                },
                # ... per-label details
            }
        },
        "angle_feedback": {      # Only if angle_measurement_enabled
            "correct": bool,
            "measured": float,
            "expected_min": float,
            "expected_max": float,
            "difference": float
        },
        "overall_message": str
    },
    "remaining_attempts": int,   # Or None if unlimited
    "show_answer": bool          # Should correct positions be revealed?
}
```

**Response** (Error):
```python
{
    "success": False,
    "error": str,               # Error message
    "error_code": str           # e.g., "max_attempts_exceeded", "invalid_placements"
}
```

**Contract**:
- Request must include `placements` for all labels
- Request must include `angle` if and only if `angle_measurement_enabled` is True
- Handler must validate that `num_attempts < max_attempts` (if max_attempts > 0)
- Handler MUST call `self.runtime.publish(self, 'grade', {'value': earned_score, 'max_value': self.weight})`
- Handler MUST update user state fields: `student_placements`, `student_angle`, `num_attempts`, `is_correct`, `earned_score`, `feedback`
- Response must indicate success/failure clearly
- Error responses must have 200 status but `success: False`

---

#### `reset_attempt`

**Purpose**: Clear student answer and allow retry

**Request**:
```python
# No parameters required
data = {}
```

**Response**:
```python
{
    "success": True
}
```

**Contract**:
- Handler must reset: `student_placements`, `student_angle`, `is_correct`, `feedback`
- Handler must NOT reset: `num_attempts` (attempts are cumulative)
- Response must have 200 status

---

### Studio View Handlers

#### `get_studio_configuration`

**Purpose**: Return current XBlock configuration for Studio editor

**Request**:
```python
# No parameters required
data = {}
```

**Response**:
```python
{
    # All Scope.settings and Scope.content fields
    "display_name": str,
    "weight": float,
    "image_url": str,
    "image_width": int,
    "image_height": int,
    "draggable_labels": [...],  # Full label configs with correct_answer
    "drop_zones": [...],        # Full zone configs
    "snap_enabled": bool,
    "snap_radius": float,
    "angle_measurement_enabled": bool,
    "angle_reference_points": [str, str, str],
    "expected_angle_min": float,
    "expected_angle_max": float,
    "grading_mode": str,
    "max_attempts": int,
    "show_answer": bool
}
```

**Contract**:
- Must return ALL configuration fields (unlike student view)
- Must include `correct_answer` fields in drop zones
- Response must have 200 status

---

#### `update_configuration`

**Purpose**: Update XBlock configuration from Studio editor

**Request**:
```python
{
    # Any subset of configuration fields can be updated
    "display_name": str,           # Optional
    "weight": float,               # Optional
    "image_url": str,              # Optional
    "image_width": int,            # Optional
    "image_height": int,           # Optional
    "draggable_labels": [...],     # Optional
    "drop_zones": [...],           # Optional
    "snap_enabled": bool,          # Optional
    "snap_radius": float,          # Optional
    "angle_measurement_enabled": bool,  # Optional
    "angle_reference_points": [str, str, str],  # Optional
    "expected_angle_min": float,   # Optional
    "expected_angle_max": float,   # Optional
    "grading_mode": str,           # Optional
    "max_attempts": int,           # Optional
    "show_answer": bool            # Optional
}
```

**Response** (Success):
```python
{
    "success": True,
    "configuration": {
        # Full updated configuration (same as get_studio_configuration response)
    }
}
```

**Response** (Error):
```python
{
    "success": False,
    "error": str,
    "validation_errors": {
        "field_name": str,  # Field-specific error messages
        # ...
    }
}
```

**Contract**:
- Handler must validate all updated fields before saving
- Validation errors must be specific to each field
- Handler must return full updated configuration on success
- If validation fails, no fields should be updated (atomic operation)

---

#### `upload_image`

**Purpose**: Upload radiograph image to contentstore and return URL

**Request**:
```python
{
    "file_data": str,    # Base64-encoded image data
    "file_name": str,    # Original filename
    "mime_type": str     # e.g., "image/jpeg", "image/png"
}
```

**Response** (Success):
```python
{
    "success": True,
    "image_url": str,    # Contentstore URL
    "image_width": int,  # Extracted from image
    "image_height": int  # Extracted from image
}
```

**Response** (Error):
```python
{
    "success": False,
    "error": str,
    "error_code": str    # e.g., "invalid_file_type", "file_too_large"
}
```

**Contract**:
- Handler must validate file type (allow: jpeg, png, webp)
- Handler must validate file size (max: 5MB)
- Handler must extract image dimensions before returning
- Handler must store image in contentstore using `self.runtime.resources_fs`
- Image URL must be accessible from student view

---

## 3. TypeScript Type Definitions

### Core Data Types

```typescript
/**
 * Draggable label configuration
 */
export interface DraggableLabel {
  id: string;              // Unique identifier (e.g., "label-A")
  text: string;            // Display text (e.g., "A")
  initial_x: number;       // Starting X position (0-100 percentage)
  initial_y: number;       // Starting Y position (0-100 percentage)
  color?: string;          // Optional hex color (e.g., "#FF0000")
}

/**
 * Drop zone configuration
 * NOTE: correct_answer is only present in Studio view, NOT student view
 */
export interface DropZone {
  id: string;              // Unique identifier (e.g., "zone-1")
  x: number;               // Center X coordinate (0-100 percentage)
  y: number;               // Center Y coordinate (0-100 percentage)
  radius: number;          // Detection radius (0-100 percentage of image width)
  correct_answer?: string; // ID of correct label (only in Studio view)
  feedback?: string;       // Optional zone-specific feedback
}

/**
 * Label placement by student
 */
export interface LabelPlacement {
  x: number;               // Current X position (0-100 percentage)
  y: number;               // Current Y position (0-100 percentage)
  zone_id?: string;        // Assigned zone ID if snapped
}

/**
 * Collection of all label placements
 */
export type Placements = {
  [labelId: string]: LabelPlacement;
};

/**
 * Assessment configuration from backend
 */
export interface AssessmentConfiguration {
  // Image
  image_url: string;
  image_width: number;
  image_height: number;

  // Labels and zones
  draggable_labels: DraggableLabel[];
  drop_zones: DropZone[];

  // Snap configuration
  snap_enabled: boolean;
  snap_radius: number;

  // Angle configuration
  angle_measurement_enabled: boolean;
  angle_reference_points: [string, string, string] | [];
  expected_angle_min?: number;
  expected_angle_max?: number;

  // Attempts
  max_attempts: number;
  current_attempt: number;

  // Previous state
  previous_placements: Placements;
  previous_angle?: number;
  is_submitted: boolean;

  // Feedback (if submitted)
  feedback?: FeedbackData;
  is_correct?: boolean;
  earned_score?: number;
  max_score: number;
}

/**
 * Placement validation feedback
 */
export interface PlacementFeedback {
  correct_count: number;
  total_count: number;
  correct_labels: string[];
  incorrect_labels: string[];
  details: {
    [labelId: string]: {
      correct: boolean;
      expected_zone: string;
      actual_zone?: string;
    };
  };
}

/**
 * Angle validation feedback
 */
export interface AngleFeedback {
  correct: boolean;
  measured: number;
  expected_min: number;
  expected_max: number;
  difference: number;
}

/**
 * Complete feedback data
 */
export interface FeedbackData {
  placement_feedback: PlacementFeedback;
  angle_feedback?: AngleFeedback;
  overall_message: string;
}

/**
 * Submission request payload
 */
export interface SubmissionRequest {
  placements: Placements;
  angle?: number;
}

/**
 * Submission response payload
 */
export interface SubmissionResponse {
  success: boolean;
  is_correct?: boolean;
  earned_score?: number;
  max_score?: number;
  feedback?: FeedbackData;
  remaining_attempts?: number;
  show_answer?: boolean;
  error?: string;
  error_code?: string;
}
```

**Contract**:
- All coordinates MUST use percentage (0-100) format, never pixels
- `angle_reference_points` must be exactly 3 strings or empty array
- `Placements` keys must match label IDs from `draggable_labels`
- `zone_id` in placements must match a zone ID from `drop_zones` or be undefined
- All optional fields must be explicitly typed with `?` or union with `undefined`

---

### React Component Props

```typescript
/**
 * Main assessment canvas component props
 */
export interface AssessmentCanvasProps {
  configuration: AssessmentConfiguration;
  onSubmit: (placements: Placements, angle?: number) => Promise<SubmissionResponse>;
  onReset: () => Promise<void>;
}

/**
 * Draggable label component props
 */
export interface DraggableLabelProps {
  label: DraggableLabel;
  position?: LabelPlacement;
  imageDimensions: { width: number; height: number };
  snapEnabled: boolean;
  snapRadius: number;
  dropZones: DropZone[];
  onDrop: (labelId: string, x: number, y: number) => void;
  disabled?: boolean;
}

/**
 * Drop zone component props
 */
export interface DropZoneProps {
  zone: DropZone;
  isVisible: boolean;  // Show zone boundaries (dev mode only)
}

/**
 * Angle measurement tool props
 */
export interface AngleMeasurementToolProps {
  placements: Placements;
  referencePoints: [string, string, string];
  imageDimensions: { width: number; height: number };
  onAngleMeasured: (angle: number) => void;
}

/**
 * Feedback display component props
 */
export interface FeedbackDisplayProps {
  feedback: FeedbackData;
  isCorrect: boolean;
  earnedScore: number;
  maxScore: number;
  showAnswer: boolean;
  correctPlacements?: Placements;  // Only if show_answer is true
}

/**
 * Submit button component props
 */
export interface SubmitButtonProps {
  onSubmit: () => void;
  disabled: boolean;
  isLoading: boolean;
  remainingAttempts?: number;
}
```

**Contract**:
- All props must be explicitly typed
- Optional props must use `?` suffix
- Callback props must specify parameter and return types
- Component props must not expose internal state management

---

### Studio Editor Props

```typescript
/**
 * Studio editor main component props
 */
export interface StudioEditorProps {
  configuration: AssessmentConfiguration;
  onSave: (config: AssessmentConfiguration) => Promise<{ success: boolean; error?: string }>;
}

/**
 * Image uploader component props
 */
export interface ImageUploaderProps {
  currentUrl: string;
  onUpload: (url: string, width: number, height: number) => void;
}

/**
 * Label configurator component props
 */
export interface LabelConfiguratorProps {
  labels: DraggableLabel[];
  onChange: (labels: DraggableLabel[]) => void;
}

/**
 * Drop zone editor component props
 */
export interface DropZoneEditorProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  zones: DropZone[];
  labels: DraggableLabel[];
  snapEnabled: boolean;
  snapRadius: number;
  onChange: (zones: DropZone[], snapEnabled: boolean, snapRadius: number) => void;
}

/**
 * Angle reference editor component props
 */
export interface AngleReferenceEditorProps {
  enabled: boolean;
  referencePoints: [string, string, string] | [];
  expectedMin: number;
  expectedMax: number;
  labels: DraggableLabel[];
  onChange: (
    enabled: boolean,
    points: [string, string, string] | [],
    min: number,
    max: number
  ) => void;
}

/**
 * Grading options component props
 */
export interface GradingOptionsProps {
  mode: 'all_or_nothing' | 'partial_credit' | 'positioning_only' | 'angle_only' | 'combined';
  weight: number;
  maxAttempts: number;
  showAnswer: boolean;
  onChange: (mode: string, weight: number, maxAttempts: number, showAnswer: boolean) => void;
}
```

**Contract**:
- Studio props must expose full configuration (including `correct_answer`)
- All `onChange` callbacks must pass updated values, not trigger side effects directly
- Validation must occur in parent component, not in individual editors

---

## 4. Event Contracts

### XBlock Events (Python)

```python
# Grade event - triggers OpenEdX grading cascade
self.runtime.publish(self, 'grade', {
    'value': float,      # Earned score (0.0 to weight)
    'max_value': float   # Maximum possible score (weight)
})

# Completion event - updates progress tracking
self.runtime.publish(self, 'completion', {
    'completion': float  # 0.0 = not started, 1.0 = completed
})

# Custom event - for analytics (optional)
self.runtime.publish(self, 'dental_assessment.submitted', {
    'placements_correct': int,
    'placements_total': int,
    'angle_correct': bool,
    'angle_measured': float,
    'attempt_number': int
})
```

**Contract**:
- Grade event MUST be published on every successful submission
- Grade value MUST be between 0.0 and weight (inclusive)
- Completion event should be published alongside grade event
- Custom events are optional but encouraged for analytics

---

### React Events (TypeScript)

```typescript
/**
 * Label drag start event
 */
export interface DragStartEvent {
  labelId: string;
  startX: number;
  startY: number;
  timestamp: number;
}

/**
 * Label drag end event
 */
export interface DragEndEvent {
  labelId: string;
  endX: number;
  endY: number;
  snapped: boolean;
  zoneId?: string;
  timestamp: number;
}

/**
 * Angle measured event
 */
export interface AngleMeasuredEvent {
  angle: number;
  point1Id: string;
  vertexId: string;
  point2Id: string;
  timestamp: number;
}

/**
 * Submission event
 */
export interface SubmissionEvent {
  placements: Placements;
  angle?: number;
  attemptNumber: number;
  timestamp: number;
}
```

**Contract**:
- All events must include `timestamp` (milliseconds since epoch)
- Events should be logged to console in development mode
- Events can be sent to analytics service (optional)

---

## 5. State Management Contracts

### React State Structure

```typescript
/**
 * Student UI state
 */
export interface StudentState {
  // Configuration (from backend)
  configuration: AssessmentConfiguration | null;

  // Current placements (updated on drag)
  currentPlacements: Placements;

  // Current angle (updated when reference points move)
  currentAngle?: number;

  // Submission state
  isSubmitting: boolean;
  submissionResponse?: SubmissionResponse;

  // Error state
  error?: string;

  // Loading state
  isLoading: boolean;
}

/**
 * Studio UI state
 */
export interface StudioState {
  // Configuration being edited
  configuration: AssessmentConfiguration;

  // Dirty flag (has unsaved changes)
  isDirty: boolean;

  // Active tab
  activeTab: 'image' | 'labels' | 'zones' | 'angle' | 'grading';

  // Selected item (for property editing)
  selectedZoneId?: string;
  selectedLabelId?: string;

  // Save state
  isSaving: boolean;
  saveError?: string;

  // Validation errors
  validationErrors: {
    [field: string]: string;
  };
}
```

**Contract**:
- State must be immutable (use spread operators or immer)
- Loading states must be tracked separately from data
- Errors must be user-friendly strings, not raw exceptions
- Configuration changes must set `isDirty` flag in Studio

---

### State Update Patterns

```typescript
// Student UI: Update placements
setPlacements(prev => ({
  ...prev,
  [labelId]: { x, y, zone_id }
}));

// Student UI: Update angle
setAngle(calculatedAngle);

// Student UI: Submit assessment
setIsSubmitting(true);
try {
  const response = await submitAssessment(placements, angle);
  setSubmissionResponse(response);
} catch (error) {
  setError(error.message);
} finally {
  setIsSubmitting(false);
}

// Studio UI: Update configuration
setConfiguration(prev => ({
  ...prev,
  draggable_labels: [...prev.draggable_labels, newLabel]
}));
setIsDirty(true);

// Studio UI: Save configuration
setIsSaving(true);
try {
  const response = await saveConfiguration(configuration);
  if (response.success) {
    setIsDirty(false);
    setConfiguration(response.configuration);
  } else {
    setValidationErrors(response.validation_errors);
  }
} catch (error) {
  setSaveError(error.message);
} finally {
  setIsSaving(false);
}
```

**Contract**:
- All state updates must be immutable
- Async operations must set loading flag before starting
- Errors must be caught and stored in state (not thrown to render)
- Success/failure must be clearly indicated in state

---

## 6. Validation Contracts

### Backend Validation

```python
def validate_configuration(self) -> Tuple[bool, Dict[str, str]]:
    """
    Validate XBlock configuration.

    Returns:
        (is_valid, error_dict)
        - is_valid: True if configuration is valid
        - error_dict: {field_name: error_message} for any invalid fields
    """
    errors = {}

    # Validate image
    if not self.image_url:
        errors['image_url'] = "Image is required"
    if self.image_width <= 0 or self.image_height <= 0:
        errors['image_dimensions'] = "Invalid image dimensions"

    # Validate labels
    if not self.draggable_labels:
        errors['draggable_labels'] = "At least one label is required"
    label_ids = set()
    for i, label in enumerate(self.draggable_labels):
        if not label.get('id'):
            errors[f'draggable_labels.{i}.id'] = "Label ID is required"
        elif label['id'] in label_ids:
            errors[f'draggable_labels.{i}.id'] = "Duplicate label ID"
        else:
            label_ids.add(label['id'])

        if not label.get('text'):
            errors[f'draggable_labels.{i}.text'] = "Label text is required"

        if not (0 <= label.get('initial_x', -1) <= 100):
            errors[f'draggable_labels.{i}.initial_x'] = "X coordinate must be 0-100"
        if not (0 <= label.get('initial_y', -1) <= 100):
            errors[f'draggable_labels.{i}.initial_y'] = "Y coordinate must be 0-100"

    # Validate zones
    if not self.drop_zones:
        errors['drop_zones'] = "At least one drop zone is required"
    zone_ids = set()
    for i, zone in enumerate(self.drop_zones):
        if not zone.get('id'):
            errors[f'drop_zones.{i}.id'] = "Zone ID is required"
        elif zone['id'] in zone_ids:
            errors[f'drop_zones.{i}.id'] = "Duplicate zone ID"
        else:
            zone_ids.add(zone['id'])

        if not (0 <= zone.get('x', -1) <= 100):
            errors[f'drop_zones.{i}.x'] = "X coordinate must be 0-100"
        if not (0 <= zone.get('y', -1) <= 100):
            errors[f'drop_zones.{i}.y'] = "Y coordinate must be 0-100"
        if not (0 < zone.get('radius', -1) <= 100):
            errors[f'drop_zones.{i}.radius'] = "Radius must be 0-100"

        if zone.get('correct_answer') not in label_ids:
            errors[f'drop_zones.{i}.correct_answer'] = "Correct answer must be a valid label ID"

    # Validate angle configuration
    if self.angle_measurement_enabled:
        if len(self.angle_reference_points) != 3:
            errors['angle_reference_points'] = "Exactly 3 reference points required for angle measurement"
        elif not all(p in label_ids for p in self.angle_reference_points):
            errors['angle_reference_points'] = "Reference points must be valid label IDs"
        elif len(set(self.angle_reference_points)) != 3:
            errors['angle_reference_points'] = "Reference points must be distinct"

        if not (0 <= self.expected_angle_min < self.expected_angle_max <= 180):
            errors['expected_angle_range'] = "Angle range must be 0 <= min < max <= 180"

    # Validate grading
    if self.weight <= 0:
        errors['weight'] = "Weight must be positive"
    if self.max_attempts < 0:
        errors['max_attempts'] = "Max attempts must be non-negative"

    return (len(errors) == 0, errors)
```

**Contract**:
- Validation must be called before saving configuration
- Validation must return bool (is_valid) and dict of errors
- Error messages must be user-friendly
- Field names in error dict must match field names in configuration

---

### Frontend Validation

```typescript
/**
 * Validate label configuration
 */
export function validateLabel(label: Partial<DraggableLabel>): string[] {
  const errors: string[] = [];

  if (!label.id) {
    errors.push("Label ID is required");
  }
  if (!label.text) {
    errors.push("Label text is required");
  }
  if (typeof label.initial_x !== 'number' || label.initial_x < 0 || label.initial_x > 100) {
    errors.push("X coordinate must be 0-100");
  }
  if (typeof label.initial_y !== 'number' || label.initial_y < 0 || label.initial_y > 100) {
    errors.push("Y coordinate must be 0-100");
  }
  if (label.color && !/^#[0-9A-Fa-f]{6}$/.test(label.color)) {
    errors.push("Color must be valid hex format (#RRGGBB)");
  }

  return errors;
}

/**
 * Validate drop zone configuration
 */
export function validateDropZone(zone: Partial<DropZone>, labelIds: string[]): string[] {
  const errors: string[] = [];

  if (!zone.id) {
    errors.push("Zone ID is required");
  }
  if (typeof zone.x !== 'number' || zone.x < 0 || zone.x > 100) {
    errors.push("X coordinate must be 0-100");
  }
  if (typeof zone.y !== 'number' || zone.y < 0 || zone.y > 100) {
    errors.push("Y coordinate must be 0-100");
  }
  if (typeof zone.radius !== 'number' || zone.radius <= 0 || zone.radius > 100) {
    errors.push("Radius must be 0-100");
  }
  if (zone.correct_answer && !labelIds.includes(zone.correct_answer)) {
    errors.push("Correct answer must be a valid label ID");
  }

  return errors;
}

/**
 * Validate angle configuration
 */
export function validateAngleConfiguration(
  referencePoints: string[],
  labelIds: string[],
  minAngle: number,
  maxAngle: number
): string[] {
  const errors: string[] = [];

  if (referencePoints.length !== 3) {
    errors.push("Exactly 3 reference points required");
  } else {
    const uniquePoints = new Set(referencePoints);
    if (uniquePoints.size !== 3) {
      errors.push("Reference points must be distinct");
    }
    if (!referencePoints.every(p => labelIds.includes(p))) {
      errors.push("Reference points must be valid label IDs");
    }
  }

  if (minAngle < 0 || maxAngle > 180 || minAngle >= maxAngle) {
    errors.push("Angle range must be 0 <= min < max <= 180");
  }

  return errors;
}
```

**Contract**:
- Frontend validation must match backend validation logic
- Validation functions must return array of error strings
- Empty array = valid
- Validation should be called on blur and before save

---

## 7. Error Handling Contracts

### Python Error Handling

```python
@XBlock.json_handler
def submit_assessment(self, data, suffix=''):
    """Submit assessment with comprehensive error handling."""
    try:
        # Validate request data
        if 'placements' not in data:
            return {
                'success': False,
                'error': 'Missing placements data',
                'error_code': 'missing_placements'
            }

        # Check attempts limit
        if self.max_attempts > 0 and self.num_attempts >= self.max_attempts:
            return {
                'success': False,
                'error': 'Maximum attempts exceeded',
                'error_code': 'max_attempts_exceeded'
            }

        # Validate placements
        placements = data['placements']
        if not isinstance(placements, dict):
            return {
                'success': False,
                'error': 'Invalid placements format',
                'error_code': 'invalid_format'
            }

        # Check angle if required
        if self.angle_measurement_enabled and 'angle' not in data:
            return {
                'success': False,
                'error': 'Angle measurement required',
                'error_code': 'missing_angle'
            }

        # Process submission
        # ... (grading logic)

        return {
            'success': True,
            # ... success response
        }

    except Exception as e:
        log.error(f"Error in submit_assessment: {str(e)}", exc_info=True)
        return {
            'success': False,
            'error': 'An unexpected error occurred. Please try again.',
            'error_code': 'server_error'
        }
```

**Contract**:
- All handlers must have try-catch block
- User-facing errors must be friendly (not raw exception messages)
- Error codes must be consistent (snake_case strings)
- Exceptions must be logged with full traceback
- Handlers must return 200 status even on errors (errors in response body)

---

### TypeScript Error Handling

```typescript
/**
 * API client with error handling
 */
export async function submitAssessment(
  placements: Placements,
  angle?: number
): Promise<SubmissionResponse> {
  try {
    const response = await fetch('/xblock/dental_assessment/submit_assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ placements, angle }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Submission failed');
    }

    return data;

  } catch (error) {
    console.error('Error submitting assessment:', error);
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Network error. Please check your connection and try again.'
    );
  }
}

/**
 * Error boundary fallback component
 */
export const ErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({
  error,
  resetError,
}) => {
  return (
    <div className="error-boundary" role="alert">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <Button onClick={resetError}>Try Again</Button>
    </div>
  );
};
```

**Contract**:
- All async operations must have try-catch
- Network errors must be user-friendly
- Errors must be logged to console
- Error boundaries must be used in React components
- Error messages must suggest next steps ("Try again", "Refresh page", etc.)

---

## 8. Coordinate System Contract

### CRITICAL: Percentage-Based Coordinates

**All coordinates MUST be stored and transmitted as percentages (0-100), NOT pixels.**

**Reason**: Responsive design - assessments must work across different screen sizes.

### Conversion Functions

```typescript
/**
 * Convert pixel coordinates to percentage
 */
export function pixelToPercent(
  x: number,
  y: number,
  imageDimensions: { width: number; height: number }
): { x: number; y: number } {
  if (imageDimensions.width === 0 || imageDimensions.height === 0) {
    return { x: 0, y: 0 };
  }

  return {
    x: (x / imageDimensions.width) * 100,
    y: (y / imageDimensions.height) * 100,
  };
}

/**
 * Convert percentage coordinates to pixels
 */
export function percentToPixel(
  x: number,
  y: number,
  imageDimensions: { width: number; height: number }
): { x: number; y: number } {
  return {
    x: (x / 100) * imageDimensions.width,
    y: (y / 100) * imageDimensions.height,
  };
}
```

**Contract**:
- Backend stores coordinates as percentages (0-100 floats)
- Frontend stores coordinates as percentages in state
- Frontend converts to pixels only for rendering (CSS positioning)
- Conversion functions must handle zero dimensions gracefully
- Snap radius is also percentage-based (percentage of image width)

---

## 9. Accessibility Contracts

### ARIA Attributes

```typescript
// Draggable label
<div
  role="button"
  aria-label={`Label ${label.text}. Press Space to pick up, Arrow keys to move, Space to drop.`}
  aria-grabbed={isDragging}
  tabIndex={0}
  onKeyDown={handleKeyDown}
>
  {label.text}
</div>

// Drop zone (only visible in dev mode or with screen reader)
<div
  role="region"
  aria-label={`Drop zone for ${zone.correct_answer}`}
  aria-dropeffect="move"
>
</div>

// Angle measurement
<div
  role="img"
  aria-label={`Angle measurement: ${angle.toFixed(1)} degrees`}
>
</div>

// Feedback
<div
  role="alert"
  aria-live="polite"
  aria-atomic="true"
>
  {feedback.overall_message}
</div>
```

**Contract**:
- All interactive elements must have `role` attribute
- All interactive elements must have descriptive `aria-label`
- Draggable elements must have `aria-grabbed` (true/false)
- Drop zones must have `aria-dropeffect`
- Feedback must use `aria-live="polite"` and `aria-atomic="true"`
- All elements must be keyboard accessible (tabIndex, onKeyDown)

---

### Keyboard Navigation

**Required keyboard support**:
- Tab/Shift+Tab: Navigate between labels and submit button
- Space/Enter: Pick up/drop label
- Arrow keys: Move label while picked up (5% increments)
- Escape: Cancel drag and return to original position
- Enter on submit button: Submit assessment

**Contract**:
- All interactions must be possible with keyboard only
- Keyboard movements must announce position changes to screen readers
- Focus must be clearly visible (2px outline, Liverpool blue)

---

## Conclusion

These contracts define the interfaces between all components of the Dental Assessment XBlock. Adherence to these contracts is MANDATORY for successful parallel development.

**Key Principles**:
1. **Immutability**: All state updates must be immutable
2. **Type Safety**: All TypeScript types must be explicitly defined
3. **Error Handling**: All errors must be caught and user-friendly
4. **Validation**: All inputs must be validated on both frontend and backend
5. **Coordinates**: All coordinates must be percentage-based (0-100)
6. **Accessibility**: All components must be keyboard accessible and screen-reader friendly
7. **Grading**: All submissions must publish grade event to OpenEdX

**Questions or Clarifications**:
If any agent encounters ambiguity in these contracts, raise the issue immediately before proceeding with implementation.

---

**Status**: ✅ APPROVED FOR DEVELOPMENT
**Next Step**: Agents may now begin parallel development adhering to these contracts.
