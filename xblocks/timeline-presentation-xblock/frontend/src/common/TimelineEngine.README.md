# Timeline Playback Engine

A pure, testable timeline state calculator for the Timeline Presentation XBlock.

## Overview

The Timeline Engine is a **pure functional state machine** that calculates layer states (opacity, transform, visibility) for any given time point. It has zero side effects, making it fully testable and deterministic.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  TimelinePlaybackManager                     │
│  (Main API - orchestrates state calculation)                 │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
┌────────▼──────────┐   ┌───────▼───────────┐
│ LayerStateMachine │   │ AnimationCalculator│
│ (Phase & Progress)│   │ (Opacity & Transform)
└───────────────────┘   └───────────────────┘
         │                       │
         └───────────┬───────────┘
                     │
           ┌─────────▼──────────┐
           │  EasingFunctions   │
           │ (Smooth animations)│
           └────────────────────┘
```

## Core Concepts

### Timeline Phases

Every element progresses through five phases:

```
┌────────┬──────────┬──────────┬──────────┬─────────┐
│ HIDDEN │ ENTERING │ VISIBLE  │ EXITING  │ EXITED  │
└────────┴──────────┴──────────┴──────────┴─────────┘
         ^startTime            ^exitStart  ^endTime
```

1. **HIDDEN**: Before startTime (opacity=0, not rendered)
2. **ENTERING**: Entry animation playing (progress 0→1)
3. **VISIBLE**: Fully visible between animations (opacity=1)
4. **EXITING**: Exit animation playing (progress 0→1)
5. **EXITED**: After endTime (opacity=0, not rendered)

### State Calculation

For any time `t`, the engine calculates:

```typescript
interface LayerState {
  id: string;           // Element identifier
  phase: TimelinePhase; // Current lifecycle phase
  progress: number;     // 0-1 progress within phase
  opacity: number;      // 0-1 opacity value
  transform: string;    // CSS transform (e.g., 'scale(0.5)')
  visible: boolean;     // Should render to DOM?
}
```

## Usage

### Basic Example

```typescript
import { TimelinePlaybackManager } from './TimelineEngine';
import { TimelineEvent } from './types';

// Define your timeline events
const events: TimelineEvent[] = [
  {
    id: 'text-1',
    elementType: 'text',
    position: { x: 50, y: 50 },
    timing: {
      startTime: 2,    // Start at 2 seconds
      endTime: 10,     // Exit at 10 seconds
    },
    entryAnimation: {
      type: 'fade',
      duration: 500,   // 500ms fade in
    },
    exitAnimation: {
      type: 'fade',
      duration: 300,   // 300ms fade out
    },
  },
  {
    id: 'shape-1',
    elementType: 'shape',
    shapeType: 'circle',
    position: { x: 75, y: 25 },
    timing: {
      startTime: 5,
      endTime: 12,
    },
    entryAnimation: {
      type: 'scale',
      duration: 400,
    },
    exitAnimation: {
      type: 'scale',
      duration: 400,
    },
  },
];

// Create the engine
const engine = new TimelinePlaybackManager(events);

// Calculate states at specific time
const states = engine.calculateLayerStates(6.5);

// Use states to render
states.forEach(state => {
  if (state.visible) {
    console.log(`${state.id}: phase=${state.phase}, opacity=${state.opacity}`);
    // Apply state.opacity and state.transform to your DOM elements
  }
});
```

### Animation Loop Integration

```typescript
// In your animation loop (e.g., synced with audio)
function onTimeUpdate(currentTime: number) {
  const states = engine.calculateLayerStates(currentTime);

  states.forEach(state => {
    const element = document.getElementById(state.id);
    if (!element) return;

    if (state.visible) {
      element.style.display = 'block';
      element.style.opacity = state.opacity.toString();
      element.style.transform = state.transform;
    } else {
      element.style.display = 'none';
    }
  });
}
```

### React Integration Example

```typescript
function TimelineRenderer() {
  const [currentTime, setCurrentTime] = useState(0);
  const engine = useMemo(
    () => new TimelinePlaybackManager(timelineEvents),
    [timelineEvents]
  );

  const layerStates = useMemo(
    () => engine.calculateLayerStates(currentTime),
    [engine, currentTime]
  );

  return (
    <div className="timeline-canvas">
      {layerStates.map(state => (
        state.visible && (
          <TimelineLayer
            key={state.id}
            opacity={state.opacity}
            transform={state.transform}
            {...getEventById(state.id)}
          />
        )
      ))}
    </div>
  );
}
```

## API Reference

### TimelinePlaybackManager

Main class for calculating timeline states.

#### Constructor

```typescript
constructor(events: TimelineEvent[])
```

Creates a new timeline engine with the given events.

#### Methods

##### `calculateLayerStates(currentTime: number): LayerState[]`

Calculate states for ALL layers at given time.

- **Pure function**: Same inputs always produce same outputs
- **No side effects**: Safe to call repeatedly
- **Performance**: O(n) where n = number of events

```typescript
const states = engine.calculateLayerStates(5.5);
// Returns array of LayerState objects
```

##### `getVisibleEvents(currentTime: number): LayerState[]`

Get only the visible layers (convenience filter).

```typescript
const visible = engine.getVisibleEvents(5.5);
// Returns only layers with visible=true
```

##### `getTotalDuration(): number`

Get the total timeline duration (latest end time).

```typescript
const duration = engine.getTotalDuration();
// Returns: 15.5 (seconds)
```

##### `hasActiveAnimations(currentTime: number): boolean`

Check if any animations are currently playing.

```typescript
const animating = engine.hasActiveAnimations(5.5);
// Returns: true if any layer is ENTERING or EXITING
```

### LayerStateMachine

Static utility class for phase calculations.

#### Methods

##### `getPhase(event: TimelineEvent, currentTime: number): TimelinePhase`

Determine which phase an element is in.

```typescript
const phase = LayerStateMachine.getPhase(event, 5.5);
// Returns: TimelinePhase.VISIBLE
```

##### `getProgress(event: TimelineEvent, currentTime: number, phase: TimelinePhase): number`

Calculate 0-1 progress within the current phase.

```typescript
const progress = LayerStateMachine.getProgress(event, 5.25, TimelinePhase.ENTERING);
// Returns: 0.5 (halfway through entry animation)
```

### AnimationCalculator

Static utility class for visual property calculations.

#### Methods

##### `calculateOpacity(type: AnimationType, phase: TimelinePhase, progress: number, isEntry: boolean): number`

Calculate opacity based on animation type and phase.

```typescript
const opacity = AnimationCalculator.calculateOpacity('fade', TimelinePhase.ENTERING, 0.5, true);
// Returns: ~0.5 (with easing applied)
```

##### `calculateTransform(type: AnimationType, direction: AnimationDirection | undefined, phase: TimelinePhase, progress: number, isEntry: boolean): string`

Calculate CSS transform string.

```typescript
const transform = AnimationCalculator.calculateTransform(
  'slide',
  'left',
  TimelinePhase.ENTERING,
  0.75,
  true
);
// Returns: 'translate(-25%, 0)'
```

##### `getTransformOrigin(type: AnimationType, direction?: AnimationDirection): string`

Get CSS transform-origin for animation (important for wipe animations).

```typescript
const origin = AnimationCalculator.getTransformOrigin('wipe', 'down');
// Returns: 'center bottom'
```

### EasingFunctions

Static utility class providing easing functions.

#### Available Functions

- `linear(t)` - No easing
- `easeInCubic(t)` - Accelerate from zero velocity
- `easeOutCubic(t)` - Decelerate to zero velocity
- `easeInOutCubic(t)` - Accelerate then decelerate

All functions take a 0-1 input and return a 0-1 output with curve applied.

## Animation Types

### 1. Fade

Opacity-only animation (no transform).

```typescript
entryAnimation: { type: 'fade', duration: 500 }
// ENTERING: opacity 0 → 1
// VISIBLE: opacity 1
// EXITING: opacity 1 → 0
```

### 2. Scale

Scale from/to zero.

```typescript
entryAnimation: { type: 'scale', duration: 400 }
// ENTERING: scale(0) → scale(1), opacity 0 → 1
// VISIBLE: scale(1), opacity 1
// EXITING: scale(1) → scale(0), opacity 1 → 0
```

### 3. Slide

Slide in from direction.

```typescript
entryAnimation: { type: 'slide', direction: 'left', duration: 600 }
// ENTERING: translate(-100%, 0) → translate(0, 0), opacity 0 → 1
// VISIBLE: no transform, opacity 1
// EXITING: translate(0, 0) → translate(-100%, 0), opacity 1 → 0
```

Directions: `left`, `right`, `up`, `down`

### 4. Wipe

Scale-based reveal (like a curtain).

```typescript
entryAnimation: { type: 'wipe', direction: 'right', duration: 500 }
// ENTERING: scaleX(0) → scaleX(1), opacity 1 (no fade)
// VISIBLE: no transform, opacity 1
// EXITING: scaleX(1) → scaleX(0), opacity 1 (no fade)
```

Important: Apply `transform-origin` from `getTransformOrigin()`.

### 5. Show

Instant appearance (no animation).

```typescript
entryAnimation: { type: 'show', duration: 0 }
// ENTERING: opacity jumps to 1 instantly
// VISIBLE: opacity 1
// EXITING: opacity jumps to 0 instantly
```

## Backward Compatibility

The engine supports both v1 (legacy) and v2 (new) event formats automatically.

### V1 Format (Legacy)

```typescript
const v1Event = {
  id: 'legacy',
  timestamp: 5,              // Old field
  animation: 'fade',         // Old field
  animationDuration: 500,    // Old field
  // ... other fields
};
```

### V2 Format (New)

```typescript
const v2Event = {
  id: 'modern',
  timing: {
    startTime: 5,
    endTime: 10,
  },
  entryAnimation: {
    type: 'fade',
    duration: 500,
  },
  exitAnimation: {
    type: 'fade',
    duration: 300,
  },
  // ... other fields
};
```

The engine uses `normalizeTimelineEvent()` from `types.ts` to automatically convert v1 events to v2 format internally. **Zero breaking changes** for existing content.

## Testing

The engine is designed for easy testing. All functions are pure.

### Example Test

```typescript
test('calculates entering phase correctly', () => {
  const event: TimelineEvent = {
    id: 'test',
    timing: { startTime: 10, endTime: 15 },
    entryAnimation: { type: 'fade', duration: 500 },
    exitAnimation: { type: 'fade', duration: 300 },
  };

  const engine = new TimelinePlaybackManager([event]);
  const states = engine.calculateLayerStates(10.25);

  expect(states[0].phase).toBe(TimelinePhase.ENTERING);
  expect(states[0].progress).toBeCloseTo(0.5);
  expect(states[0].visible).toBe(true);
});
```

See `TimelineEngine.test.spec.md` for comprehensive test cases.

## Performance Characteristics

- **Time Complexity**: O(n) per frame, where n = number of events
- **Space Complexity**: O(n) for state array
- **Recommended Max Events**: ~1000 events for 60fps performance
- **Optimization**: Consider filtering events by time range for very large timelines

## Design Principles

1. **Pure Functions**: No side effects, deterministic output
2. **Immutability**: Never mutate input data
3. **Separation of Concerns**: Engine calculates state, renderer applies it
4. **Testability**: Every function can be unit tested
5. **Type Safety**: Full TypeScript typing
6. **Zero Dependencies**: Uses only browser APIs (Math, etc.)

## Integration Checklist

When integrating the engine:

- [ ] Import `TimelinePlaybackManager` and create instance
- [ ] Sync `currentTime` with your audio/video player
- [ ] Call `calculateLayerStates()` in animation loop (or on time update)
- [ ] Apply `opacity` and `transform` to DOM elements
- [ ] Show/hide elements based on `visible` flag
- [ ] For wipe animations, apply `transform-origin` from `getTransformOrigin()`
- [ ] Handle edge cases (empty timeline, no events, etc.)

## Troubleshooting

### Elements not appearing

Check that `timing.startTime` is less than `currentTime` and phase is not `HIDDEN`.

### Animations jerky

Ensure you're calling `calculateLayerStates()` on every frame or time update, not just once.

### Transform not working

For SVG elements, use `element.style.transform`, not `setAttribute('transform')`.

### Wipe animation looks wrong

Apply `transform-origin` from `AnimationCalculator.getTransformOrigin()`.

### Performance issues

Consider filtering events before calculation:

```typescript
const relevantEvents = events.filter(e => {
  const normalized = normalizeTimelineEvent(e);
  return currentTime >= normalized.timing.startTime - 1 &&
         currentTime <= (normalized.timing.endTime ?? Infinity) + 1;
});
const engine = new TimelinePlaybackManager(relevantEvents);
```

## Future Enhancements

Potential improvements (not yet implemented):

- [ ] Custom easing function support
- [ ] Animation curves from GSAP
- [ ] Path-based animations
- [ ] Parallel animation tracks
- [ ] Animation composition (combine multiple animations)
- [ ] Timeline scrubbing optimization (cache calculations)

## License

Part of the Timeline Presentation XBlock for Open edX.
