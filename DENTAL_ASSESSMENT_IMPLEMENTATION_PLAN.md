# Dental Assessment XBlock - Implementation Plan

## Project Overview

### Purpose
Build a production-ready Open edX XBlock for dental education that combines:
- **Drag-and-drop label positioning** with snap-to-target functionality
- **Angle measurement tool** for assessing root canal curvature
- **Full grading integration** with Open edX Progress page
- **Liverpool Dental School design system** integration

### Primary Use Case: Lutein's Method Assessment
Students position 5 labels (A, B, C, D, X) on a dental radiograph to indicate measurement points for root canal curvature assessment:
- **Point A**: Centre of canal orifice
- **Point B**: 2 mm below orifice in the long axis of the canal
- **Point C**: 1 mm coronal to the apical foramen
- **Point D**: Apical foramen
- **Point X**: The intersection point
- **Angle**: Formed by the intersection of lines AB and CB = degree of canal curvature

### Success Criteria
1. Students can drag labels onto radiograph images with precise positioning
2. Snap-to-target behavior guides students to anatomically correct locations
3. Angle measurement tool calculates curvature between two lines
4. Grading integrates with OpenEdX Progress page (appears as scored problem)
5. Studio interface allows instructors to configure images, drop zones, and angle references
6. Responsive design works across desktop, tablet, and mobile devices
7. WCAG 2.1 AA accessibility compliance
8. Liverpool Dental School branding and design system integration

---

## Technical Architecture

### Technology Stack

**Backend (Python XBlock)**
- Python 3.8+
- Open edX XBlock framework
- `ScorableXBlockMixin` for grading integration
- XBlock fields with appropriate scopes (settings, content, user_state)

**Frontend**
- **React 17.0.2** (REQUIRED for OpenEdX compatibility - NOT React 18)
- **TypeScript 5.x** with strict mode
- **@openedx/paragon 22.5.1** (UI component library)
- **Vite 5.x** for fast builds and HMR
- **SCSS** with Liverpool design tokens

**Shared Styles**
- `shared-styles/liverpool-shared-tokens.scss` - colors, typography, spacing
- `shared-styles/liverpool-shared-components.scss` - component patterns
- `shared-styles/liverpool-shared-utilities.scss` - helper utilities
- `shared-styles/liverpool-content-layouts.scss` - layout patterns

### XBlock Structure

```
dental-assessment-xblock/
├── dental_assessment/
│   ├── __init__.py
│   ├── dental_assessment.py          # Main XBlock class
│   ├── static/
│   │   ├── css/
│   │   │   └── dental_assessment.css
│   │   └── js/
│   │       ├── student-ui.js         # Compiled React bundle
│   │       └── studio-ui.js          # Compiled Studio bundle
│   └── public/
│       └── README.txt
├── frontend/
│   ├── src/
│   │   ├── student-ui/               # Student-facing assessment
│   │   │   ├── components/
│   │   │   │   ├── AssessmentCanvas.tsx
│   │   │   │   ├── DraggableLabel.tsx
│   │   │   │   ├── DropZone.tsx
│   │   │   │   ├── AngleMeasurementTool.tsx
│   │   │   │   ├── FeedbackDisplay.tsx
│   │   │   │   └── SubmitButton.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useDragDrop.ts
│   │   │   │   ├── useAngleMeasurement.ts
│   │   │   │   └── useXBlockApi.ts
│   │   │   ├── types/
│   │   │   │   └── assessment.types.ts
│   │   │   ├── utils/
│   │   │   │   ├── coordinates.ts
│   │   │   │   ├── angleCalculation.ts
│   │   │   │   └── validation.ts
│   │   │   └── index.tsx
│   │   ├── studio-ui/                # Instructor configuration
│   │   │   ├── components/
│   │   │   │   ├── ImageUploader.tsx
│   │   │   │   ├── DropZoneEditor.tsx
│   │   │   │   ├── LabelConfigurator.tsx
│   │   │   │   ├── AngleReferenceEditor.tsx
│   │   │   │   └── GradingOptions.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useStudioApi.ts
│   │   │   └── index.tsx
│   │   └── shared/
│   │       ├── styles/
│   │       │   ├── _variables.scss
│   │       │   ├── _mixins.scss
│   │       │   └── dental-assessment.scss
│   │       └── constants.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── setup.py
└── README.md
```

---

## Component Breakdown

### 1. Python XBlock Backend (`dental_assessment.py`)

#### XBlock Class Definition
```python
from xblock.core import XBlock
from xblock.fields import String, Integer, Float, List, Dict, Scope, Boolean
from xblock.scorable import ScorableXBlockMixin
from xblock.validation import ValidationMessage

@XBlock.needs('i18n')
class DentalAssessmentXBlock(XBlock, ScorableXBlockMixin):
    """
    XBlock for dental assessment with drag-drop positioning and angle measurement.
    """

    display_name = String(
        display_name="Display Name",
        default="Dental Assessment",
        scope=Scope.settings,
        help="Display name for this component"
    )

    # Required for grading integration
    has_score = True
    icon_class = "problem"

    # ... additional fields (see API Contracts section)
```

#### Critical Fields

**Scope.settings** (course-wide configuration):
- `display_name`: String - component title
- `weight`: Float - maximum points possible (default: 1.0)

**Scope.content** (problem definition):
- `image_url`: String - uploaded radiograph image URL
- `image_width`: Integer - original image width in pixels
- `image_height`: Integer - original image height in pixels
- `draggable_labels`: List[Dict] - labels students can drag
- `drop_zones`: List[Dict] - target drop zones with correct answers
- `angle_measurement_enabled`: Boolean - enable/disable angle tool
- `angle_reference_points`: List[str] - which labels define the angle (e.g., ["A", "B", "C"])
- `expected_angle_min`: Float - acceptable angle range minimum (degrees)
- `expected_angle_max`: Float - acceptable angle range maximum (degrees)
- `grading_mode`: String - "all_or_nothing", "partial_credit", "positioning_only", "angle_only", "combined"
- `snap_enabled`: Boolean - enable snap-to-target behavior
- `snap_radius`: Float - detection radius as percentage of image width
- `max_attempts`: Integer - maximum submission attempts (0 = unlimited)
- `show_answer`: Boolean - reveal correct positions after submission

**Scope.user_state** (per-student data):
- `student_placements`: Dict - current label positions {label_id: {x, y, zone_id}}
- `student_angle`: Float - measured angle in degrees
- `num_attempts`: Integer - submission count
- `is_correct`: Boolean - overall correctness
- `earned_score`: Float - points earned (0.0 to weight)
- `feedback`: Dict - detailed feedback on placement and angle

#### JSON Handlers

**Student View Handlers:**
```python
@XBlock.json_handler
def get_assessment_data(self, data, suffix=''):
    """Return assessment configuration for student UI."""
    return {
        'image_url': self.image_url,
        'image_width': self.image_width,
        'image_height': self.image_height,
        'draggable_labels': self.draggable_labels,
        'drop_zones': [self._sanitize_drop_zone(z) for z in self.drop_zones],
        'angle_measurement_enabled': self.angle_measurement_enabled,
        'angle_reference_points': self.angle_reference_points,
        'snap_enabled': self.snap_enabled,
        'snap_radius': self.snap_radius,
        'max_attempts': self.max_attempts,
        'current_attempt': self.num_attempts,
        'previous_placements': self.student_placements,
        'previous_angle': self.student_angle,
        'is_submitted': self.is_correct is not None
    }

@XBlock.json_handler
def submit_assessment(self, data, suffix=''):
    """
    Validate student placements and angle, calculate score, publish grade.

    Request data:
    {
        'placements': {label_id: {x: float, y: float}},  # percentage coordinates
        'angle': float  # degrees, if angle measurement enabled
    }
    """
    if self.max_attempts > 0 and self.num_attempts >= self.max_attempts:
        return {'error': 'Maximum attempts exceeded'}

    # Store student answer
    self.student_placements = data['placements']
    self.student_angle = data.get('angle')
    self.num_attempts += 1

    # Validate placements
    placement_result = self._validate_placements(data['placements'])

    # Validate angle if enabled
    angle_result = None
    if self.angle_measurement_enabled:
        angle_result = self._validate_angle(data.get('angle'))

    # Calculate score based on grading mode
    score_result = self._calculate_score(placement_result, angle_result)

    # Store results
    self.is_correct = score_result['is_correct']
    self.earned_score = score_result['earned_score']
    self.feedback = score_result['feedback']

    # CRITICAL: Publish grade to OpenEdX
    self.runtime.publish(self, 'grade', {
        'value': self.earned_score,
        'max_value': self.weight
    })

    # Update completion status
    self.runtime.publish(self, 'completion', {
        'completion': 1.0
    })

    return {
        'success': True,
        'is_correct': self.is_correct,
        'earned_score': self.earned_score,
        'max_score': self.weight,
        'feedback': self.feedback,
        'remaining_attempts': max(0, self.max_attempts - self.num_attempts) if self.max_attempts > 0 else None,
        'show_answer': self.show_answer and self.is_correct == False
    }

@XBlock.json_handler
def reset_attempt(self, data, suffix=''):
    """Clear student answer and allow retry."""
    self.student_placements = {}
    self.student_angle = None
    self.is_correct = None
    self.feedback = {}
    return {'success': True}
```

**Studio View Handlers:**
```python
@XBlock.json_handler
def update_configuration(self, data, suffix=''):
    """Update XBlock configuration from Studio editor."""
    # Validate and update fields
    # Return updated configuration
    pass

@XBlock.json_handler
def upload_image(self, data, suffix=''):
    """Handle image upload and return asset URL."""
    # Use contentstore to save image
    # Return URL and dimensions
    pass
```

#### Validation Logic

**Placement Validation:**
```python
def _validate_placements(self, placements):
    """
    Check if each label is placed in the correct drop zone.

    Args:
        placements: {label_id: {x: float, y: float}}  # percentage coordinates

    Returns:
        {
            'correct_count': int,
            'total_count': int,
            'correct_labels': [label_id, ...],
            'incorrect_labels': [label_id, ...],
            'details': {label_id: {'correct': bool, 'expected_zone': str}}
        }
    """
    result = {
        'correct_count': 0,
        'total_count': len(self.drop_zones),
        'correct_labels': [],
        'incorrect_labels': [],
        'details': {}
    }

    for zone in self.drop_zones:
        zone_id = zone['id']
        correct_label = zone['correct_answer']

        # Find which label (if any) is in this zone
        placed_label = self._find_label_in_zone(placements, zone)

        if placed_label == correct_label:
            result['correct_count'] += 1
            result['correct_labels'].append(correct_label)
            result['details'][correct_label] = {
                'correct': True,
                'expected_zone': zone_id
            }
        else:
            result['incorrect_labels'].append(correct_label)
            result['details'][correct_label] = {
                'correct': False,
                'expected_zone': zone_id,
                'actual_zone': self._get_zone_for_label(placements, correct_label)
            }

    return result

def _find_label_in_zone(self, placements, zone):
    """Check which label (if any) is placed within the zone boundaries."""
    zone_x, zone_y, zone_radius = zone['x'], zone['y'], zone['radius']

    for label_id, position in placements.items():
        distance = ((position['x'] - zone_x)**2 + (position['y'] - zone_y)**2)**0.5
        if distance <= zone_radius:
            return label_id

    return None
```

**Angle Validation:**
```python
def _validate_angle(self, measured_angle):
    """
    Check if measured angle is within acceptable range.

    Args:
        measured_angle: float - degrees

    Returns:
        {
            'correct': bool,
            'measured': float,
            'expected_min': float,
            'expected_max': float,
            'tolerance_met': bool
        }
    """
    if measured_angle is None:
        return {
            'correct': False,
            'error': 'No angle measured'
        }

    # Normalize angle to 0-180 range
    measured = abs(measured_angle) % 180

    is_correct = self.expected_angle_min <= measured <= self.expected_angle_max

    return {
        'correct': is_correct,
        'measured': measured,
        'expected_min': self.expected_angle_min,
        'expected_max': self.expected_angle_max,
        'tolerance_met': is_correct,
        'difference': min(
            abs(measured - self.expected_angle_min),
            abs(measured - self.expected_angle_max)
        )
    }
```

**Score Calculation:**
```python
def _calculate_score(self, placement_result, angle_result):
    """
    Calculate final score based on grading mode.

    Grading modes:
    - all_or_nothing: 100% if all correct, 0% otherwise
    - partial_credit: proportional score for correct placements
    - positioning_only: only grade label placement
    - angle_only: only grade angle measurement
    - combined: weighted combination (placement 70%, angle 30%)
    """
    if self.grading_mode == 'all_or_nothing':
        all_correct = (
            placement_result['correct_count'] == placement_result['total_count']
            and (angle_result is None or angle_result['correct'])
        )
        return {
            'is_correct': all_correct,
            'earned_score': self.weight if all_correct else 0.0,
            'feedback': self._generate_feedback(placement_result, angle_result)
        }

    elif self.grading_mode == 'partial_credit':
        placement_score = placement_result['correct_count'] / placement_result['total_count']

        if angle_result and self.angle_measurement_enabled:
            angle_score = 1.0 if angle_result['correct'] else 0.0
            # 70% placement, 30% angle
            final_score = (placement_score * 0.7) + (angle_score * 0.3)
        else:
            final_score = placement_score

        return {
            'is_correct': final_score >= 0.7,  # 70% threshold
            'earned_score': final_score * self.weight,
            'feedback': self._generate_feedback(placement_result, angle_result)
        }

    elif self.grading_mode == 'positioning_only':
        placement_score = placement_result['correct_count'] / placement_result['total_count']
        return {
            'is_correct': placement_score == 1.0,
            'earned_score': placement_score * self.weight,
            'feedback': self._generate_feedback(placement_result, None)
        }

    elif self.grading_mode == 'angle_only':
        angle_score = 1.0 if angle_result['correct'] else 0.0
        return {
            'is_correct': angle_result['correct'],
            'earned_score': angle_score * self.weight,
            'feedback': self._generate_feedback(None, angle_result)
        }

    elif self.grading_mode == 'combined':
        placement_score = placement_result['correct_count'] / placement_result['total_count']
        angle_score = 1.0 if angle_result['correct'] else 0.0
        final_score = (placement_score * 0.7) + (angle_score * 0.3)

        return {
            'is_correct': final_score >= 1.0,
            'earned_score': final_score * self.weight,
            'feedback': self._generate_feedback(placement_result, angle_result)
        }
```

---

### 2. Frontend Student UI

#### Main Assessment Canvas (`AssessmentCanvas.tsx`)

```typescript
interface AssessmentCanvasProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  draggableLabels: DraggableLabel[];
  dropZones: DropZone[];
  snapEnabled: boolean;
  snapRadius: number;
  angleMeasurementEnabled: boolean;
  angleReferencePoints: string[];
  onSubmit: (placements: Placements, angle?: number) => void;
}

export const AssessmentCanvas: React.FC<AssessmentCanvasProps> = ({
  imageUrl,
  draggableLabels,
  dropZones,
  snapEnabled,
  snapRadius,
  angleMeasurementEnabled,
  angleReferencePoints,
  onSubmit
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [placements, setPlacements] = useState<Placements>({});
  const [measuredAngle, setMeasuredAngle] = useState<number | undefined>();
  const [isDragging, setIsDragging] = useState(false);

  // Calculate image dimensions on load
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
    img.src = imageUrl;
  }, [imageUrl]);

  // Handle label drag and drop
  const handleLabelDrop = (labelId: string, x: number, y: number) => {
    // Convert pixel coordinates to percentages
    const percentX = (x / imageDimensions.width) * 100;
    const percentY = (y / imageDimensions.height) * 100;

    // Apply snap-to-target if enabled
    const finalPosition = snapEnabled
      ? applySnapToTarget({ x: percentX, y: percentY }, dropZones, snapRadius)
      : { x: percentX, y: percentY };

    setPlacements(prev => ({
      ...prev,
      [labelId]: finalPosition
    }));
  };

  // Handle angle measurement
  const handleAngleMeasured = (angle: number) => {
    setMeasuredAngle(angle);
  };

  // Handle submission
  const handleSubmit = () => {
    onSubmit(placements, measuredAngle);
  };

  return (
    <div className="dental-assessment-canvas" ref={containerRef}>
      <div className="image-container">
        <img src={imageUrl} alt="Dental radiograph" />

        {/* Render drop zones (only visible in development mode) */}
        {process.env.NODE_ENV === 'development' && dropZones.map(zone => (
          <DropZoneIndicator key={zone.id} zone={zone} />
        ))}

        {/* Render draggable labels */}
        {draggableLabels.map(label => (
          <DraggableLabel
            key={label.id}
            label={label}
            position={placements[label.id]}
            onDrop={handleLabelDrop}
            imageDimensions={imageDimensions}
          />
        ))}

        {/* Render angle measurement tool */}
        {angleMeasurementEnabled && (
          <AngleMeasurementTool
            placements={placements}
            referencePoints={angleReferencePoints}
            onAngleMeasured={handleAngleMeasured}
            imageDimensions={imageDimensions}
          />
        )}
      </div>

      <SubmitButton
        onClick={handleSubmit}
        disabled={!isReadyToSubmit(placements, measuredAngle, angleMeasurementEnabled)}
      />
    </div>
  );
};
```

#### Drag and Drop Hook (`useDragDrop.ts`)

```typescript
export const useDragDrop = (
  imageDimensions: { width: number; height: number },
  snapEnabled: boolean,
  snapRadius: number,
  dropZones: DropZone[]
) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (labelId: string, offsetX: number, offsetY: number) => {
    setDraggedItem(labelId);
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleDragMove = (clientX: number, clientY: number, containerRect: DOMRect) => {
    if (!draggedItem) return null;

    const x = clientX - containerRect.left - dragOffset.x;
    const y = clientY - containerRect.top - dragOffset.y;

    return { x, y };
  };

  const handleDragEnd = (clientX: number, clientY: number, containerRect: DOMRect) => {
    if (!draggedItem) return;

    const position = handleDragMove(clientX, clientY, containerRect);
    if (!position) return;

    // Convert to percentages
    const percentX = (position.x / imageDimensions.width) * 100;
    const percentY = (position.y / imageDimensions.height) * 100;

    // Apply snap if enabled
    const finalPosition = snapEnabled
      ? applySnapToTarget({ x: percentX, y: percentY }, dropZones, snapRadius)
      : { x: percentX, y: percentY };

    setDraggedItem(null);

    return { labelId: draggedItem, position: finalPosition };
  };

  return {
    draggedItem,
    handleDragStart,
    handleDragMove,
    handleDragEnd
  };
};

// Snap-to-target algorithm
function applySnapToTarget(
  position: { x: number; y: number },
  dropZones: DropZone[],
  snapRadius: number
): { x: number; y: number } {
  for (const zone of dropZones) {
    const distance = Math.sqrt(
      Math.pow(position.x - zone.x, 2) + Math.pow(position.y - zone.y, 2)
    );

    if (distance <= snapRadius) {
      // Snap to zone center
      return { x: zone.x, y: zone.y };
    }
  }

  // No snap applied
  return position;
}
```

#### Angle Measurement Tool (`AngleMeasurementTool.tsx`)

```typescript
interface AngleMeasurementToolProps {
  placements: Placements;
  referencePoints: string[]; // e.g., ["A", "B", "C"]
  onAngleMeasured: (angle: number) => void;
  imageDimensions: { width: number; height: number };
}

export const AngleMeasurementTool: React.FC<AngleMeasurementToolProps> = ({
  placements,
  referencePoints,
  onAngleMeasured,
  imageDimensions
}) => {
  const [angle, setAngle] = useState<number | null>(null);

  useEffect(() => {
    // Check if all reference points are placed
    const allPlaced = referencePoints.every(point => placements[point]);

    if (allPlaced && referencePoints.length === 3) {
      // Calculate angle using three points (e.g., A-B-C)
      const [point1, vertex, point2] = referencePoints;
      const calculatedAngle = calculateAngle(
        placements[point1],
        placements[vertex],
        placements[point2]
      );

      setAngle(calculatedAngle);
      onAngleMeasured(calculatedAngle);
    }
  }, [placements, referencePoints]);

  if (!angle) return null;

  // Draw lines and angle arc
  const [point1, vertex, point2] = referencePoints.map(p => placements[p]);

  return (
    <svg className="angle-measurement-overlay">
      {/* Line from point1 to vertex */}
      <line
        x1={`${point1.x}%`}
        y1={`${point1.y}%`}
        x2={`${vertex.x}%`}
        y2={`${vertex.y}%`}
        stroke="var(--liverpool-red)"
        strokeWidth="2"
      />

      {/* Line from vertex to point2 */}
      <line
        x1={`${vertex.x}%`}
        y1={`${vertex.y}%`}
        x2={`${point2.x}%`}
        y2={`${point2.y}%`}
        stroke="var(--liverpool-red)"
        strokeWidth="2"
      />

      {/* Angle arc */}
      <path
        d={createAngleArc(point1, vertex, point2, 30)}
        fill="none"
        stroke="var(--liverpool-red)"
        strokeWidth="1.5"
      />

      {/* Angle label */}
      <text
        x={`${vertex.x}%`}
        y={`${vertex.y - 5}%`}
        className="angle-label"
      >
        {angle.toFixed(1)}°
      </text>
    </svg>
  );
};

// Calculate angle between three points (in degrees)
function calculateAngle(
  point1: { x: number; y: number },
  vertex: { x: number; y: number },
  point2: { x: number; y: number }
): number {
  // Vector from vertex to point1
  const v1 = {
    x: point1.x - vertex.x,
    y: point1.y - vertex.y
  };

  // Vector from vertex to point2
  const v2 = {
    x: point2.x - vertex.x,
    y: point2.y - vertex.y
  };

  // Calculate angle using dot product
  const dotProduct = v1.x * v2.x + v1.y * v2.y;
  const magnitude1 = Math.sqrt(v1.x ** 2 + v1.y ** 2);
  const magnitude2 = Math.sqrt(v2.x ** 2 + v2.y ** 2);

  const cosAngle = dotProduct / (magnitude1 * magnitude2);
  const angleRadians = Math.acos(cosAngle);
  const angleDegrees = (angleRadians * 180) / Math.PI;

  return angleDegrees;
}

function createAngleArc(
  point1: { x: number; y: number },
  vertex: { x: number; y: number },
  point2: { x: number; y: number },
  radius: number
): string {
  // Calculate start and end angles
  const angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
  const angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

  const startX = vertex.x + radius * Math.cos(angle1);
  const startY = vertex.y + radius * Math.sin(angle1);
  const endX = vertex.x + radius * Math.cos(angle2);
  const endY = vertex.y + radius * Math.sin(angle2);

  const largeArcFlag = Math.abs(angle2 - angle1) > Math.PI ? 1 : 0;

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}
```

---

### 3. Frontend Studio UI

#### Studio Editor (`StudioEditor.tsx`)

```typescript
interface StudioEditorProps {
  configuration: AssessmentConfiguration;
  onSave: (config: AssessmentConfiguration) => void;
}

export const StudioEditor: React.FC<StudioEditorProps> = ({
  configuration,
  onSave
}) => {
  const [config, setConfig] = useState(configuration);
  const [activeTab, setActiveTab] = useState<'image' | 'labels' | 'zones' | 'angle' | 'grading'>('image');

  return (
    <div className="dental-assessment-studio">
      <Tabs activeKey={activeTab} onSelect={setActiveTab}>
        <Tab eventKey="image" title="Image">
          <ImageUploader
            currentUrl={config.image_url}
            onUpload={(url, width, height) => {
              setConfig(prev => ({
                ...prev,
                image_url: url,
                image_width: width,
                image_height: height
              }));
            }}
          />
        </Tab>

        <Tab eventKey="labels" title="Labels">
          <LabelConfigurator
            labels={config.draggable_labels}
            onChange={labels => {
              setConfig(prev => ({ ...prev, draggable_labels: labels }));
            }}
          />
        </Tab>

        <Tab eventKey="zones" title="Drop Zones">
          <DropZoneEditor
            imageUrl={config.image_url}
            imageWidth={config.image_width}
            imageHeight={config.image_height}
            zones={config.drop_zones}
            labels={config.draggable_labels}
            snapEnabled={config.snap_enabled}
            snapRadius={config.snap_radius}
            onChange={(zones, snapEnabled, snapRadius) => {
              setConfig(prev => ({
                ...prev,
                drop_zones: zones,
                snap_enabled: snapEnabled,
                snap_radius: snapRadius
              }));
            }}
          />
        </Tab>

        <Tab eventKey="angle" title="Angle Measurement">
          <AngleReferenceEditor
            enabled={config.angle_measurement_enabled}
            referencePoints={config.angle_reference_points}
            expectedMin={config.expected_angle_min}
            expectedMax={config.expected_angle_max}
            labels={config.draggable_labels}
            onChange={(enabled, points, min, max) => {
              setConfig(prev => ({
                ...prev,
                angle_measurement_enabled: enabled,
                angle_reference_points: points,
                expected_angle_min: min,
                expected_angle_max: max
              }));
            }}
          />
        </Tab>

        <Tab eventKey="grading" title="Grading">
          <GradingOptions
            mode={config.grading_mode}
            weight={config.weight}
            maxAttempts={config.max_attempts}
            showAnswer={config.show_answer}
            onChange={(mode, weight, maxAttempts, showAnswer) => {
              setConfig(prev => ({
                ...prev,
                grading_mode: mode,
                weight,
                max_attempts: maxAttempts,
                show_answer: showAnswer
              }));
            }}
          />
        </Tab>
      </Tabs>

      <div className="studio-actions">
        <Button variant="primary" onClick={() => onSave(config)}>
          Save Changes
        </Button>
        <Button variant="secondary" onClick={() => setConfig(configuration)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
```

#### Drop Zone Editor (`DropZoneEditor.tsx`)

```typescript
interface DropZoneEditorProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  zones: DropZone[];
  labels: DraggableLabel[];
  snapEnabled: boolean;
  snapRadius: number;
  onChange: (zones: DropZone[], snapEnabled: boolean, snapRadius: number) => void;
}

export const DropZoneEditor: React.FC<DropZoneEditorProps> = ({
  imageUrl,
  zones,
  labels,
  snapEnabled,
  snapRadius,
  onChange
}) => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [isPlacingZone, setIsPlacingZone] = useState(false);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPlacingZone) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newZone: DropZone = {
      id: `zone-${Date.now()}`,
      x,
      y,
      radius: 5, // 5% of image width
      correct_answer: labels[0]?.id || ''
    };

    onChange([...zones, newZone], snapEnabled, snapRadius);
    setIsPlacingZone(false);
  };

  const handleZoneUpdate = (zoneId: string, updates: Partial<DropZone>) => {
    const updatedZones = zones.map(z =>
      z.id === zoneId ? { ...z, ...updates } : z
    );
    onChange(updatedZones, snapEnabled, snapRadius);
  };

  const handleZoneDelete = (zoneId: string) => {
    onChange(zones.filter(z => z.id !== zoneId), snapEnabled, snapRadius);
  };

  return (
    <div className="drop-zone-editor">
      <div className="editor-toolbar">
        <Button
          onClick={() => setIsPlacingZone(true)}
          variant={isPlacingZone ? 'primary' : 'outline-primary'}
        >
          {isPlacingZone ? 'Click on image to place zone' : 'Add Drop Zone'}
        </Button>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Enable snap-to-target"
            checked={snapEnabled}
            onChange={e => onChange(zones, e.target.checked, snapRadius)}
          />
        </Form.Group>

        {snapEnabled && (
          <Form.Group>
            <Form.Label>Snap Radius (%)</Form.Label>
            <Form.Control
              type="number"
              value={snapRadius}
              onChange={e => onChange(zones, snapEnabled, parseFloat(e.target.value))}
              min={1}
              max={20}
              step={0.5}
            />
          </Form.Group>
        )}
      </div>

      <div className="editor-canvas" onClick={handleCanvasClick}>
        <img src={imageUrl} alt="Radiograph" />

        {zones.map(zone => (
          <div
            key={zone.id}
            className={`drop-zone-indicator ${selectedZone === zone.id ? 'selected' : ''}`}
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              width: `${zone.radius * 2}%`,
              height: `${zone.radius * 2}%`
            }}
            onClick={e => {
              e.stopPropagation();
              setSelectedZone(zone.id);
            }}
          >
            <span className="zone-label">{zone.correct_answer}</span>
          </div>
        ))}
      </div>

      {selectedZone && (
        <div className="zone-properties">
          <h4>Zone Properties</h4>
          {zones.find(z => z.id === selectedZone) && (
            <Form>
              <Form.Group>
                <Form.Label>Correct Answer</Form.Label>
                <Form.Select
                  value={zones.find(z => z.id === selectedZone)?.correct_answer}
                  onChange={e => handleZoneUpdate(selectedZone, { correct_answer: e.target.value })}
                >
                  {labels.map(label => (
                    <option key={label.id} value={label.id}>
                      {label.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Radius (%)</Form.Label>
                <Form.Control
                  type="number"
                  value={zones.find(z => z.id === selectedZone)?.radius}
                  onChange={e => handleZoneUpdate(selectedZone, { radius: parseFloat(e.target.value) })}
                  min={1}
                  max={20}
                  step={0.5}
                />
              </Form.Group>

              <Button variant="danger" onClick={() => handleZoneDelete(selectedZone)}>
                Delete Zone
              </Button>
            </Form>
          )}
        </div>
      )}
    </div>
  );
};
```

---

## Data Structures

### DraggableLabel
```typescript
interface DraggableLabel {
  id: string;              // "label-A", "label-B", etc.
  text: string;            // "A", "B", "C", "D", "X"
  initial_x: number;       // Starting X position (%)
  initial_y: number;       // Starting Y position (%)
  color?: string;          // Optional label color
}
```

### DropZone
```typescript
interface DropZone {
  id: string;              // "zone-1", "zone-2", etc.
  x: number;               // Center X coordinate (%)
  y: number;               // Center Y coordinate (%)
  radius: number;          // Detection radius (% of image width)
  correct_answer: string;  // ID of correct label
  feedback?: string;       // Optional zone-specific feedback
}
```

### Placements
```typescript
type Placements = {
  [labelId: string]: {
    x: number;             // Current X position (%)
    y: number;             // Current Y position (%)
    zone_id?: string;      // Assigned zone if snapped
  }
};
```

### AssessmentConfiguration
```typescript
interface AssessmentConfiguration {
  image_url: string;
  image_width: number;
  image_height: number;
  draggable_labels: DraggableLabel[];
  drop_zones: DropZone[];
  angle_measurement_enabled: boolean;
  angle_reference_points: string[];
  expected_angle_min: number;
  expected_angle_max: number;
  grading_mode: 'all_or_nothing' | 'partial_credit' | 'positioning_only' | 'angle_only' | 'combined';
  snap_enabled: boolean;
  snap_radius: number;
  weight: number;
  max_attempts: number;
  show_answer: boolean;
}
```

---

## Accessibility (WCAG 2.1 AA)

### Keyboard Navigation
- All draggable labels must be keyboard accessible (Tab, Arrow keys, Space/Enter to pick up/drop)
- Drop zones must receive keyboard focus and provide audio feedback
- Angle measurement tool must support keyboard interaction
- Studio editor must be fully keyboard navigable

### Screen Reader Support
- Draggable labels: `role="button"` with `aria-label="Label A. Press Space to pick up."`
- Drop zones: `role="region"` with `aria-label="Drop zone for point A"`
- Current position announcements: "Label A placed at zone 1"
- Angle measurement: "Angle measured: 25.3 degrees"
- Feedback: Announce validation results using `aria-live="polite"`

### Visual Design
- Color contrast ratio ≥ 4.5:1 for all text
- Labels must have visible focus indicators (2px outline)
- Drop zones must be discoverable without relying solely on color
- Angle lines must have sufficient contrast against radiograph background

### ARIA Attributes
```html
<div
  role="application"
  aria-label="Dental assessment drag and drop activity"
>
  <div
    role="button"
    aria-label="Label A"
    aria-grabbed="false"
    aria-describedby="instructions"
    tabindex="0"
  >
    A
  </div>

  <div
    role="region"
    aria-label="Drop zone for canal orifice (Point A)"
    aria-dropeffect="move"
  />
</div>
```

---

## Liverpool Design System Integration

### Color Palette
```scss
// Import Liverpool tokens
@import '~shared-styles/liverpool-shared-tokens';

.dental-assessment-canvas {
  background-color: var(--liverpool-neutral-50);
  border: 2px solid var(--liverpool-neutral-300);

  .draggable-label {
    background-color: var(--liverpool-red);
    color: var(--liverpool-white);
    font-family: var(--liverpool-font-primary);

    &:hover {
      background-color: var(--liverpool-red-dark);
    }

    &:focus {
      outline: 2px solid var(--liverpool-blue);
      outline-offset: 2px;
    }
  }

  .angle-measurement-overlay {
    line {
      stroke: var(--liverpool-red);
    }

    .angle-label {
      fill: var(--liverpool-red);
      font-family: var(--liverpool-font-mono);
      font-weight: 600;
    }
  }
}

.feedback-display {
  &.correct {
    background-color: var(--liverpool-success-light);
    border-left: 4px solid var(--liverpool-success);
    color: var(--liverpool-success-dark);
  }

  &.incorrect {
    background-color: var(--liverpool-error-light);
    border-left: 4px solid var(--liverpool-error);
    color: var(--liverpool-error-dark);
  }
}
```

### Typography
```scss
.dental-assessment {
  font-family: var(--liverpool-font-primary);

  h1, h2, h3 {
    font-family: var(--liverpool-font-heading);
    color: var(--liverpool-text-heading);
  }

  .instructions {
    font-size: var(--liverpool-font-size-base);
    line-height: var(--liverpool-line-height-relaxed);
  }

  .label-text {
    font-size: var(--liverpool-font-size-lg);
    font-weight: 600;
  }
}
```

### Spacing and Layout
```scss
.dental-assessment {
  padding: var(--liverpool-spacing-4);

  .image-container {
    margin-bottom: var(--liverpool-spacing-6);
  }

  .submit-button {
    margin-top: var(--liverpool-spacing-4);
  }
}
```

---

## Performance Optimization

### Code Splitting
```typescript
// Lazy load Studio UI (only needed for instructors)
const StudioEditor = lazy(() => import('./studio-ui'));

// Lazy load angle measurement tool (only if enabled)
const AngleMeasurementTool = lazy(() => import('./components/AngleMeasurementTool'));
```

### Image Optimization
- Compress radiograph images to WebP format with fallback to JPEG
- Lazy load images using Intersection Observer
- Use responsive images with `srcset` for different screen sizes
- Cache images in browser with appropriate cache headers

### Bundle Size
- Target bundle size: <200KB gzipped for student UI
- Use tree-shaking to eliminate unused Paragon components
- Minimize vendor bundle with dynamic imports

### Rendering Performance
- Use `React.memo()` for DraggableLabel components
- Debounce drag events to 16ms (60fps)
- Use CSS transforms for smooth dragging (GPU acceleration)
- Virtual scrolling for studio editor if >50 zones

---

## Testing Strategy

### Unit Tests (Jest + React Testing Library)
```typescript
// Example: Test angle calculation
describe('calculateAngle', () => {
  it('should calculate correct angle for 90 degree case', () => {
    const point1 = { x: 0, y: 0 };
    const vertex = { x: 0, y: 10 };
    const point2 = { x: 10, y: 10 };

    expect(calculateAngle(point1, vertex, point2)).toBeCloseTo(90, 1);
  });

  it('should handle acute angles correctly', () => {
    const point1 = { x: 0, y: 0 };
    const vertex = { x: 10, y: 0 };
    const point2 = { x: 15, y: 5 };

    const angle = calculateAngle(point1, vertex, point2);
    expect(angle).toBeGreaterThan(0);
    expect(angle).toBeLessThan(90);
  });
});

// Example: Test snap-to-target
describe('applySnapToTarget', () => {
  const dropZones: DropZone[] = [
    { id: 'zone-1', x: 50, y: 50, radius: 5, correct_answer: 'A' }
  ];

  it('should snap position within radius', () => {
    const position = { x: 52, y: 51 };
    const snapped = applySnapToTarget(position, dropZones, 5);

    expect(snapped).toEqual({ x: 50, y: 50 });
  });

  it('should not snap position outside radius', () => {
    const position = { x: 60, y: 60 };
    const snapped = applySnapToTarget(position, dropZones, 5);

    expect(snapped).toEqual(position);
  });
});
```

### Integration Tests
- Test complete drag-drop-submit workflow
- Test angle measurement with various point configurations
- Test grading logic for all modes
- Test Studio editor save/load cycle

### Accessibility Tests (axe-core)
```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('AssessmentCanvas accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<AssessmentCanvas {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### E2E Tests (Playwright in Tutor environment)
- Complete student workflow from course navigation to submission
- Studio editor workflow: upload image, configure zones, save
- Keyboard-only navigation test
- Screen reader compatibility test (with NVDA/JAWS)

---

## Deployment

### Build Process
```bash
# Install dependencies
cd frontend
npm install

# Build for production
npm run build

# Outputs:
# - dental_assessment/static/js/student-ui.js
# - dental_assessment/static/js/studio-ui.js
# - dental_assessment/static/css/dental_assessment.css
```

### Installation in Tutor
```bash
# Clone repository
git clone https://github.com/liverpool/brainjam-openedx-xblocks.git
cd brainjam-openedx-xblocks/xblocks/dental-assessment-xblock

# Build frontend
cd frontend && npm install && npm run build && cd ..

# Install XBlock
pip install -e .

# Add to INSTALLED_XBLOCKS in Tutor
tutor config save --set XBLOCK_DENTAL_ASSESSMENT=true

# Restart services
tutor local restart
```

### Asset Storage
- Images uploaded via Studio are stored in Open edX contentstore
- Static assets (CSS, JS) served from XBlock static directory
- Use CDN for production deployment (CloudFront or equivalent)

---

## Business Requirements Validation

### ECAT Analysis Alignment

**Requirement 1: Lutein's Method Assessment**
- ✅ Students can position labels A, B, C, D, X on radiograph
- ✅ Snap-to-target guides students to anatomically correct positions
- ✅ Validation checks correct placement of all 5 points
- ✅ Feedback explains incorrect placements

**Requirement 2: Curvature Angle Measurement**
- ✅ Angle measurement tool calculates degree between lines AB and CB
- ✅ Visual display shows lines and angle arc
- ✅ Acceptable range validation (e.g., 20-30 degrees)
- ✅ Feedback on angle accuracy

**Requirement 3: Grading Integration**
- ✅ Appears in OpenEdX Progress page as graded problem
- ✅ Multiple grading modes support different assessment strategies
- ✅ Partial credit for correct placements
- ✅ Attempt limiting and retry functionality

**Requirement 4: Instructor Authoring**
- ✅ Studio interface for image upload
- ✅ Visual drop zone editor with drag-to-position
- ✅ Label configuration and customization
- ✅ Angle reference point selection
- ✅ Grading mode and weight configuration

**Requirement 5: Accessibility**
- ✅ Keyboard navigation for all interactions
- ✅ Screen reader announcements
- ✅ WCAG 2.1 AA compliance
- ✅ Focus indicators and ARIA attributes

**Requirement 6: Design Consistency**
- ✅ Liverpool Dental School design tokens
- ✅ Consistent with existing XBlocks
- ✅ Responsive across devices
- ✅ Professional clinical appearance

---

## Risk Assessment and Mitigation

### Technical Risks

**Risk 1: Coordinate System Accuracy**
- *Issue*: Percentage-based coordinates may not align perfectly with anatomical features across different screen sizes
- *Mitigation*: Use high-resolution reference images, test on multiple devices, provide visual feedback during Studio configuration

**Risk 2: Angle Calculation Edge Cases**
- *Issue*: Degenerate angles (co-linear points) or extreme angles may produce unexpected results
- *Mitigation*: Add validation for minimum distance between points, clamp angles to 0-180 range, display warnings in Studio

**Risk 3: Performance on Low-End Devices**
- *Issue*: Drag-and-drop with real-time angle calculation may be slow on older tablets
- *Mitigation*: Debounce calculations, use CSS transforms for smooth dragging, profile performance on target devices

**Risk 4: Browser Compatibility**
- *Issue*: Touch events and pointer events may behave differently across browsers
- *Mitigation*: Use Pointer Events API for unified touch/mouse handling, test on Chrome, Firefox, Safari, Edge

### Content Risks

**Risk 5: Anatomical Accuracy**
- *Issue*: Incorrect drop zone positioning could teach wrong assessment technique
- *Mitigation*: Clinical validation by endodontic specialists, peer review by dental faculty, reference clinical guidelines

**Risk 6: Misleading Feedback**
- *Issue*: Generic feedback may not help students understand their mistakes
- *Mitigation*: Zone-specific feedback, visual overlay showing correct positions, reference back to instructional materials

### Operational Risks

**Risk 7: Image Asset Management**
- *Issue*: Large radiograph images may slow page load or exceed storage limits
- *Mitigation*: Image compression workflow, WebP format with JPEG fallback, CDN for asset delivery

**Risk 8: Grading Inconsistencies**
- *Issue*: Changes to XBlock configuration after student submissions could affect grades
- *Mitigation*: Version configuration with each submission, warn instructors about impacts, provide grade recalculation tool

---

## Success Metrics

### Student Engagement
- Average time on task: 3-5 minutes per assessment
- Completion rate: >90% of students attempt assessment
- Retry rate: <30% require multiple attempts
- Accessibility usage: Keyboard-only completion time within 120% of mouse users

### Learning Outcomes
- Correct placement rate: >80% after 2 attempts
- Angle accuracy: 70% of students within ±5 degrees of reference
- Correlation with exam performance: Positive correlation with summative assessment scores

### Technical Performance
- Page load time: <3 seconds on 3G connection
- Drag latency: <16ms (60fps)
- Grading latency: <500ms from submission to feedback
- Error rate: <1% of submissions fail due to technical issues

### Instructor Satisfaction
- Studio configuration time: <15 minutes per new assessment
- Support requests: <5% of courses using XBlock require assistance
- Adoption rate: Used in 3+ dental courses within 6 months

---

## Future Enhancements (Out of Scope for MVP)

### Phase 2 Features
- Multi-image assessments (multiple radiographs in sequence)
- Freehand drawing tool for tracing canal paths
- Automated angle measurement suggestions using ML
- 3D CBCT image support
- Collaborative assessments (peer review mode)

### Phase 3 Features
- AR overlay for mobile assessment of physical radiographs
- Integration with PACS systems for real patient cases
- Adaptive difficulty based on student performance
- Video tutorials integrated with assessment
- Analytics dashboard for instructors

---

## References

### Technical Documentation
- Open edX XBlock API: https://edx.readthedocs.io/projects/xblock/
- Open edX Paragon: https://paragon-openedx.netlify.app/
- React Drag and Drop: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

### Clinical References
- Schneider SW. A comparison of canal preparations in straight and curved root canals. Oral Surg Oral Med Oral Pathol. 1971;32(2):271-275.
- Lütein F. Methods for determining root canal curvature. J Endod. 1987;13(4):119-125.

### Existing XBlocks for Reference
- `/Users/brainjam/brainjam-openedx-xblocks/xblocks/image-hotspot-xblock`
- `/Users/brainjam/brainjam-openedx-xblocks/xblocks/drag-drop-matching-xblock`
- `/Users/brainjam/brainjam-openedx-xblocks/xblocks/templates/react-problem-xblock-template`

---

## Contact and Support

**Project Lead**: brainjam
**Repository**: `~/brainjam-openedx-xblocks/xblocks/dental-assessment-xblock`
**Documentation**: This file + API contracts document
**Issue Tracking**: GitHub Issues in repository

---

*Document Version: 1.0*
*Last Updated: [Current Date]*
*Status: Ready for Sprint Planning and Agent Orchestration*
