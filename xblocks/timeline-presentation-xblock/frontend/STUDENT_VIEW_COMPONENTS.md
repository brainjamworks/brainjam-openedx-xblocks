# Timeline Presentation XBlock - Student View Components

## Overview
Complete React 18 + TypeScript implementation for the Timeline Presentation XBlock student view.

## Architecture

### Component Hierarchy
```
StudentView (Main Container)
  └─ TimelinePlayer
      ├─ DiagramCanvas
      │   └─ TimelineElement (multiple instances)
      └─ Audio Controls (Play/Pause/Replay)
```

### Data Flow
```
XBlock Python → StudentData → StudentView → TimelinePlayer → useTimelineSync → TimelineElement
```

## Components

### 1. StudentView.tsx
**Location:** `/frontend/src/student-ui/StudentView.tsx`

**Purpose:** Main container component that displays title, description, and timeline player

**Features:**
- Displays title and rich HTML description
- Renders TimelinePlayer with all required data
- Shows empty state when data is missing
- Accessible layout with ARIA labels

**Props:**
```typescript
interface StudentViewProps {
  displayName: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
  timelineEvents: TimelineEvent[];
  runtime: XBlockRuntime;
}
```

### 2. TimelinePlayer.tsx
**Location:** `/frontend/src/student-ui/TimelinePlayer.tsx`

**Purpose:** Orchestrates audio playback and animation synchronization

**Features:**
- HTML5 audio player with custom controls
- Progress bar showing current time / duration
- Play, Pause, and Replay buttons
- Syncs timeline events with audio using `useTimelineSync` hook
- Error and loading states
- Development debug panel

**Key Hooks:**
```typescript
const activeElements = useTimelineSync(audioRef, timelineEvents, onEventTrigger);
```

### 3. DiagramCanvas.tsx
**Location:** `/frontend/src/student-ui/DiagramCanvas.tsx`

**Purpose:** Displays background diagram image with animated overlay

**Features:**
- Responsive image display
- Loading and error states
- Absolute positioned overlay for animations
- Percentage-based coordinate system (0-100)
- Preserves aspect ratio

**Props:**
```typescript
interface DiagramCanvasProps {
  imageUrl: string;
  activeElements: TimelineEvent[];
  onImageLoad?: () => void;
}
```

### 4. TimelineElement.tsx
**Location:** `/frontend/src/student-ui/TimelineElement.tsx`

**Purpose:** Renders individual animated elements (text, shapes, lines, arrows)

**Features:**
- Supports 4 element types: text, shape, line, arrow
- Multiple shape types: circle, rectangle, triangle
- CSS-based animations for performance
- Percentage-based positioning
- Configurable colors and dimensions

**Element Types:**
- **Text:** Displays text with configurable font size and color
- **Shape:** Renders circles, rectangles, or triangles
- **Line:** Horizontal or vertical lines
- **Arrow:** Directional arrows with customizable direction

### 5. AnimationEngine.ts
**Location:** `/frontend/src/student-ui/AnimationEngine.ts`

**Purpose:** Utility functions and hooks for timeline synchronization

**Key Exports:**
```typescript
// Main hook for syncing animations with audio
useTimelineSync(
  audioRef: RefObject<HTMLAudioElement>,
  timelineEvents: TimelineEvent[],
  onEventTrigger?: (event: TimelineEvent) => void
): TimelineEvent[]

// Get CSS classes for animations
getAnimationClasses(event: TimelineEvent, isAnimating: boolean): string

// Calculate animation delay
calculateAnimationDelay(event: TimelineEvent, currentTime: number): number
```

**Animation Synchronization:**
- Listens to audio `timeupdate` events
- Triggers events at correct timestamps
- Handles seeking (forward/backward)
- Manages animation states
- Keeps elements visible after animation

## Types (types.ts)

### Core Types
```typescript
type AnimationType = 'fade' | 'scale' | 'wipe' | 'slide' | 'show';
type AnimationDirection = 'up' | 'down' | 'left' | 'right';
type ElementType = 'text' | 'shape' | 'line' | 'arrow';
type ShapeType = 'circle' | 'rectangle' | 'triangle';
```

### TimelineEvent
```typescript
interface TimelineEvent {
  id: string;
  timestamp: number; // seconds
  elementType: ElementType;
  animation: AnimationType;
  animationDirection?: AnimationDirection;
  animationDuration: number; // milliseconds
  position: { x: number; y: number }; // 0-100 percentage
  dimensions?: { width?: number; height?: number };
  content?: string; // for text elements
  shapeType?: ShapeType; // for shape elements
  color?: string; // hex or CSS color
  className?: string; // custom CSS class
}
```

## Animations

### Available Animation Types

1. **fade** - Fade in from transparent to opaque
2. **scale** - Scale up from 0 to full size
3. **slide** - Slide in from a direction (up/down/left/right)
4. **wipe** - Reveal effect with clipping (up/down/left/right)
5. **show** - Instant appearance (no animation)

### CSS Classes
- `.timeline-animation-fade`
- `.timeline-animation-scale`
- `.timeline-animation-slide-{direction}`
- `.timeline-animation-wipe-{direction}`
- `.timeline-animation-show`

## Styling

### Liverpool Design Tokens
All components use Liverpool design tokens from:
```scss
@import '../../../../../../../shared-styles/student-ui/styles/liverpool-student-tokens';
```

**Key Tokens Used:**
- Colors: `$liverpool-blue`, `$liverpool-teal`, `$liverpool-text-*`
- Spacing: `$liverpool-space-*`
- Typography: `$liverpool-font-*`
- Shadows: `$liverpool-shadow-*`
- Transitions: `$liverpool-duration-*`, `$liverpool-easing-*`
- Buttons: `$liverpool-btn-*`

### Responsive Design
- Desktop: Full size, side-by-side buttons
- Tablet (≤768px): Reduced spacing, stacked buttons
- Mobile (≤480px): Further reduced, smaller text

## Usage Example

### Python (XBlock)
```python
def student_view(self, context=None):
    """Render the student view"""
    context = {
        'displayName': self.display_name,
        'title': self.title,
        'description': self.description,
        'imageUrl': self.image_url,
        'audioUrl': self.audio_url,
        'timelineEvents': [
            {
                'id': 'event-1',
                'timestamp': 2.5,  # seconds
                'elementType': 'text',
                'animation': 'fade',
                'animationDuration': 500,  # milliseconds
                'position': {'x': 50, 'y': 30},  # percentage
                'content': 'Introduction',
                'color': '#212b58'
            },
            {
                'id': 'event-2',
                'timestamp': 5.0,
                'elementType': 'arrow',
                'animation': 'slide',
                'animationDirection': 'right',
                'animationDuration': 600,
                'position': {'x': 40, 'y': 50},
                'dimensions': {'width': 100, 'height': 2},
                'color': '#00A689'
            }
        ]
    }
    # ... render fragment
```

## Development Features

### Debug Panels
Both `TimelinePlayer` and `DiagramCanvas` include debug panels visible in development:
- Active elements count
- Current playback time
- Event trigger logging

### Error Handling
- Image load errors → Shows error message
- Audio load errors → Shows error message
- Missing data → Empty state with guidance

## Performance Considerations

1. **CSS Animations:** All animations use CSS for GPU acceleration
2. **Event Optimization:** Timeline sync uses debouncing via audio `timeupdate`
3. **Percentage Positioning:** Responsive without JavaScript calculations
4. **Lazy Element Rendering:** Only active elements are rendered

## Accessibility

- ARIA labels on audio controls
- Semantic HTML structure
- Screen reader descriptions
- Keyboard navigation support (audio controls)
- Focus management

## Next Steps

1. Build frontend: `npm run build`
2. Test with sample data
3. Add Studio UI components for authoring
4. Implement backend handlers for saving events
5. Add validation for timeline event data
