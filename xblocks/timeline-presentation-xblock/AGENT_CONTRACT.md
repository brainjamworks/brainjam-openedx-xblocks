# Timeline Presentation - Agent Contract

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        AGENT 1: DATA MODEL                       │
│                       (COMPLETED ✅)                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Input:  Raw TimelineEvent[] (v1 or v2 format)                  │
│  Output: Normalized TimelineEvent[] (v2 format)                 │
│                                                                  │
│  Key Function: normalizeTimelineEvent()                         │
│                                                                  │
│  Guarantees:                                                     │
│  ✓ All events have `timing` object                              │
│  ✓ All events have `entryAnimation` object                      │
│  ✓ V1 events converted transparently                            │
│  ✓ V1 behavior preserved (no exit = stays forever)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    AGENT 2: TIMELINE ENGINE                      │
│                       (TODO - NEXT)                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Input:  Normalized TimelineEvent[], currentTime                │
│  Output: LayerState[] for each visible event                    │
│                                                                  │
│  Key Function: calculateLayerStates(events, time)               │
│                                                                  │
│  Responsibilities:                                               │
│  • Determine phase for each event (HIDDEN/ENTERING/etc.)        │
│  • Calculate animation progress (0-1)                            │
│  • Compute opacity based on phase + animation                   │
│  • Compute transform based on phase + animation                 │
│  • Mark layers as visible/hidden                                │
│                                                                  │
│  Guarantees:                                                     │
│  ✓ Phase transitions follow lifecycle                           │
│  ✓ Animations respect timing.startTime and timing.endTime       │
│  ✓ Events without exitAnimation stay visible                    │
│  ✓ GSAP easing applied correctly                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     AGENT 3: SVG RENDERER                        │
│                       (TODO - LAST)                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Input:  LayerState[], TimelineEvent[] (for element props)      │
│  Output: Rendered SVG elements                                   │
│                                                                  │
│  Key Component: DiagramCanvas.tsx                                │
│                                                                  │
│  Responsibilities:                                               │
│  • Render only visible layers (visible === true)                │
│  • Apply opacity from LayerState                                │
│  • Apply transform from LayerState                              │
│  • Render correct element type (text/shape/line/arrow)          │
│  • Position elements correctly (percentage → pixels)            │
│                                                                  │
│  Guarantees:                                                     │
│  ✓ Hidden layers not rendered (performance)                     │
│  ✓ Smooth visual updates (opacity/transform transitions)        │
│  ✓ Correct SVG element types                                    │
│  ✓ Responsive scaling based on canvas dimensions                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Type Contracts

### AGENT 1 → AGENT 2

```typescript
// Input: Raw timeline event (v1 or v2)
interface TimelineEvent {
  // Either v1 fields (timestamp, animation, animationDuration)
  // OR v2 fields (timing, entryAnimation, exitAnimation)
  // See types.ts for full definition
}

// Output: Normalized event (guaranteed v2 structure)
interface NormalizedEvent {
  id: string;
  elementType: ElementType;
  timing: TimingConfig;           // ALWAYS present
  entryAnimation: AnimationConfig; // ALWAYS present
  exitAnimation?: AnimationConfig; // Optional - if absent, stays visible
  position: { x: number; y: number };
  // ... other element properties
}

// Function signature
function normalizeTimelineEvent(event: TimelineEvent): NormalizedEvent;
```

### AGENT 2 → AGENT 3

```typescript
// Input: Normalized events + current time
interface CalculateLayerStatesInput {
  events: NormalizedEvent[];
  currentTime: number; // seconds
}

// Output: Layer states for rendering
interface LayerState {
  id: string;                   // Matches event.id
  phase: TimelinePhase;         // HIDDEN | ENTERING | VISIBLE | EXITING | EXITED
  progress: number;             // 0-1 progress within current phase
  opacity: number;              // 0-1 computed opacity
  transform: string;            // CSS transform (e.g., 'translateX(100px)')
  visible: boolean;             // true = render, false = skip
}

// Function signature
function calculateLayerStates(
  events: NormalizedEvent[],
  currentTime: number
): LayerState[];
```

### AGENT 3 Input

```typescript
// Component props
interface DiagramCanvasProps {
  layerStates: LayerState[];      // From AGENT 2
  events: NormalizedEvent[];       // For element properties (content, color, etc.)
  canvasDimensions: { width: number; height: number };
  backgroundImageUrl: string;
}
```

---

## Phase Lifecycle (AGENT 2 Responsibility)

```
Timeline:  ─────●─────────────────────●─────────────▶
               start                  end

HIDDEN     ███████░░░░░░░░░░░░░░░░░░░░
                  (before startTime)

ENTERING          ░░░██████░░░░░░░░░░░░
                    (entry animation)

VISIBLE                 ░░░████████░░░░
                           (visible period)

EXITING                           ░░░██████░
                                    (exit animation)

EXITED                                   ░░░████████
                                           (after exit)
```

### Phase Calculation Rules (AGENT 2)

```typescript
function determinePhase(event: NormalizedEvent, currentTime: number): TimelinePhase {
  const { startTime, endTime } = event.timing;
  const entryDuration = event.entryAnimation.duration / 1000; // ms → s
  const entryEndTime = startTime + entryDuration;

  // Before entry starts
  if (currentTime < startTime) {
    return TimelinePhase.HIDDEN;
  }

  // During entry animation
  if (currentTime < entryEndTime) {
    return TimelinePhase.ENTERING;
  }

  // No exit defined → stay visible forever
  if (!endTime || !event.exitAnimation) {
    return TimelinePhase.VISIBLE;
  }

  // Before exit starts
  if (currentTime < endTime) {
    return TimelinePhase.VISIBLE;
  }

  // During exit animation
  const exitDuration = event.exitAnimation.duration / 1000; // ms → s
  const exitEndTime = endTime + exitDuration;
  if (currentTime < exitEndTime) {
    return TimelinePhase.EXITING;
  }

  // After exit complete
  return TimelinePhase.EXITED;
}
```

---

## Animation Implementation (AGENT 2 Responsibility)

### Opacity Calculation

```typescript
function calculateOpacity(phase: TimelinePhase, progress: number): number {
  switch (phase) {
    case TimelinePhase.HIDDEN:
      return 0;

    case TimelinePhase.ENTERING:
      // Fade in during entry (all animation types start invisible)
      return progress; // 0 → 1

    case TimelinePhase.VISIBLE:
      return 1;

    case TimelinePhase.EXITING:
      // Fade out during exit
      return 1 - progress; // 1 → 0

    case TimelinePhase.EXITED:
      return 0;
  }
}
```

### Transform Calculation

```typescript
function calculateTransform(
  phase: TimelinePhase,
  progress: number,
  animation: AnimationConfig
): string {
  switch (animation.type) {
    case 'fade':
      // No transform, just opacity
      return '';

    case 'scale':
      // Scale from 0 to 1 during entry
      if (phase === TimelinePhase.ENTERING) {
        const scale = progress; // 0 → 1
        return `scale(${scale})`;
      }
      // Scale from 1 to 0 during exit
      if (phase === TimelinePhase.EXITING) {
        const scale = 1 - progress; // 1 → 0
        return `scale(${scale})`;
      }
      return '';

    case 'slide':
      // Slide from direction during entry
      if (phase === TimelinePhase.ENTERING) {
        const distance = 100 * (1 - progress); // 100 → 0
        switch (animation.direction) {
          case 'left': return `translateX(-${distance}px)`;
          case 'right': return `translateX(${distance}px)`;
          case 'up': return `translateY(-${distance}px)`;
          case 'down': return `translateY(${distance}px)`;
        }
      }
      // Slide to opposite direction during exit
      if (phase === TimelinePhase.EXITING) {
        const distance = 100 * progress; // 0 → 100
        switch (animation.direction) {
          case 'left': return `translateX(${distance}px)`;
          case 'right': return `translateX(-${distance}px)`;
          case 'up': return `translateY(${distance}px)`;
          case 'down': return `translateY(-${distance}px)`;
        }
      }
      return '';

    case 'wipe':
      // Use clip-path for wipe effect
      // Implementation depends on direction
      // Return appropriate clip-path value
      return ''; // TODO: Implement in AGENT 2

    case 'show':
      // Instant appearance, no animation
      return '';
  }
}
```

---

## Visibility Rules (AGENT 2 → AGENT 3)

```typescript
function isLayerVisible(phase: TimelinePhase): boolean {
  switch (phase) {
    case TimelinePhase.HIDDEN:
    case TimelinePhase.EXITED:
      return false; // Don't render (performance optimization)

    case TimelinePhase.ENTERING:
    case TimelinePhase.VISIBLE:
    case TimelinePhase.EXITING:
      return true; // Render with appropriate opacity/transform
  }
}
```

---

## GSAP Easing Support (AGENT 2)

```typescript
// Map GSAP easing strings to easing functions
// For calculating progress within animations
function applyEasing(linearProgress: number, easingName?: string): number {
  if (!easingName) {
    return linearProgress; // Linear (no easing)
  }

  // Common GSAP easings
  switch (easingName) {
    case 'power2.out':
      return 1 - Math.pow(1 - linearProgress, 2);

    case 'power2.in':
      return Math.pow(linearProgress, 2);

    case 'power2.inOut':
      return linearProgress < 0.5
        ? 2 * linearProgress * linearProgress
        : 1 - Math.pow(-2 * linearProgress + 2, 2) / 2;

    case 'elastic.out':
      // Elastic overshoot effect
      const c4 = (2 * Math.PI) / 3;
      return linearProgress === 0 ? 0
           : linearProgress === 1 ? 1
           : Math.pow(2, -10 * linearProgress) * Math.sin((linearProgress * 10 - 0.75) * c4) + 1;

    // Add more easings as needed
    default:
      return linearProgress; // Fallback to linear
  }
}
```

---

## Validation Checklist

### AGENT 1 (Completed ✅)

- [x] TypeScript types defined
- [x] Backward compatibility interfaces
- [x] Migration function (`normalizeTimelineEvent`)
- [x] Helper functions (`isV1Event`, `isV2Event`)
- [x] Python backend documentation
- [x] Build verification

### AGENT 2 (TODO)

- [ ] Phase determination logic
- [ ] Progress calculation (0-1 within phase)
- [ ] Opacity calculation per phase
- [ ] Transform calculation per animation type
- [ ] GSAP easing implementation
- [ ] LayerState generation
- [ ] Handle events without exit (stay visible forever)
- [ ] Unit tests for edge cases

### AGENT 3 (TODO)

- [ ] Render only visible layers
- [ ] Apply LayerState opacity
- [ ] Apply LayerState transform
- [ ] Render correct SVG element types
- [ ] Position conversion (percentage → pixels)
- [ ] Background image scaling
- [ ] Performance optimization (skip hidden layers)

---

## Critical Edge Cases (All Agents)

1. **V1 Event without Exit**
   - AGENT 1: Normalize without `exitAnimation`
   - AGENT 2: Return `VISIBLE` phase forever (never `EXITING`)
   - AGENT 3: Render at full opacity forever

2. **V2 Event without EndTime**
   - AGENT 1: Normalize with `timing.endTime === undefined`
   - AGENT 2: Return `VISIBLE` phase after entry (never `EXITING`)
   - AGENT 3: Render at full opacity after entry

3. **Overlapping Events**
   - AGENT 2: Process each event independently
   - AGENT 3: Render in order (z-index based on array order)

4. **currentTime Before All Events**
   - AGENT 2: Return all layers as `HIDDEN` phase
   - AGENT 3: Render nothing (all `visible: false`)

5. **currentTime After All Events**
   - AGENT 2: Events with exits → `EXITED`, events without → `VISIBLE`
   - AGENT 3: Render only events without exits

---

## Success Criteria

### Integration Test Scenario

```typescript
// V1 event (should stay visible forever)
const v1Event = {
  id: "legacy-1",
  timestamp: 2.0,
  animation: "fade",
  animationDuration: 500,
  elementType: "text",
  content: "Legacy Text",
  position: { x: 50, y: 50 }
};

// V2 event with exit
const v2Event = {
  id: "modern-1",
  timing: { startTime: 5.0, endTime: 8.0 },
  entryAnimation: { type: "scale", duration: 600, easing: "elastic.out" },
  exitAnimation: { type: "fade", duration: 400 },
  elementType: "shape",
  shapeType: "circle",
  position: { x: 30, y: 70 },
  dimensions: { width: 50, height: 50 }
};

// Expected behavior at different times:
// t=0s:    Both HIDDEN
// t=2.0s:  v1 ENTERING (fade in), v2 HIDDEN
// t=2.5s:  v1 VISIBLE, v2 HIDDEN
// t=5.0s:  v1 VISIBLE, v2 ENTERING (elastic scale)
// t=5.6s:  v1 VISIBLE, v2 VISIBLE
// t=8.0s:  v1 VISIBLE, v2 EXITING (fade out)
// t=8.4s:  v1 VISIBLE, v2 EXITED
// t=20.0s: v1 VISIBLE (forever), v2 EXITED
```

✅ **Pass Criteria**: Above behavior matches actual rendering at all times.

---

## Contact Points

- **AGENT 1**: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/frontend/src/common/types.ts`
- **AGENT 2**: Will create timeline engine (likely in `TimelinePlayer.tsx` or separate utility)
- **AGENT 3**: Will update `DiagramCanvas.tsx` to consume `LayerState[]`

**Next Agent**: AGENT 2 should start with implementing `calculateLayerStates()` function.
