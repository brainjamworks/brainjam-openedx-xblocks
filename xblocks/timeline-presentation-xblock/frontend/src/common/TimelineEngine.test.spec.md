# TimelineEngine Test Specification

This document describes all test cases for the Timeline Playback Engine.

## LayerStateMachine Tests

### Phase Calculation Tests

#### Test 1: Element Before Start Time
```typescript
const event: TimelineEventExtended = {
  id: 'test-1',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
};

const phase = LayerStateMachine.getPhase(event, 5);
// Expected: TimelinePhase.HIDDEN
```

#### Test 2: Element During Entry Animation
```typescript
const event: TimelineEventExtended = {
  id: 'test-2',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
};

const phase = LayerStateMachine.getPhase(event, 10.25);
// Expected: TimelinePhase.ENTERING
```

#### Test 3: Element Fully Visible
```typescript
const event: TimelineEventExtended = {
  id: 'test-3',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
  exitAnimation: { type: 'fade', duration: 300 },
};

const phase = LayerStateMachine.getPhase(event, 12);
// Expected: TimelinePhase.VISIBLE
```

#### Test 4: Element During Exit Animation
```typescript
const event: TimelineEventExtended = {
  id: 'test-4',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
  exitAnimation: { type: 'fade', duration: 300 },
};

const phase = LayerStateMachine.getPhase(event, 14.8);
// Expected: TimelinePhase.EXITING
// Note: exitStartTime = 15 - 0.3 = 14.7, so 14.8 is in exit phase
```

#### Test 5: Element After End Time
```typescript
const event: TimelineEventExtended = {
  id: 'test-5',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
};

const phase = LayerStateMachine.getPhase(event, 20);
// Expected: TimelinePhase.EXITED
```

### Progress Calculation Tests

#### Test 6: Halfway Through Entry Animation
```typescript
const event: TimelineEventExtended = {
  id: 'test-6',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
};

const phase = TimelinePhase.ENTERING;
const progress = LayerStateMachine.getProgress(event, 10.25, phase);
// Expected: 0.5 (250ms / 500ms)
```

#### Test 7: Fully Visible Progress
```typescript
const phase = TimelinePhase.VISIBLE;
const progress = LayerStateMachine.getProgress(event, 12, phase);
// Expected: 1.0
```

#### Test 8: 30% Through Exit Animation
```typescript
const event: TimelineEventExtended = {
  id: 'test-8',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
  exitAnimation: { type: 'fade', duration: 300 },
};

const phase = TimelinePhase.EXITING;
const progress = LayerStateMachine.getProgress(event, 14.79, phase);
// Expected: 0.3
// exitStartTime = 15 - 0.3 = 14.7
// timeInPhase = 14.79 - 14.7 = 0.09
// progress = 0.09 / 0.3 = 0.3
```

## AnimationCalculator Tests

### Opacity Tests

#### Test 9: Fade Animation Entering at 50%
```typescript
const opacity = AnimationCalculator.calculateOpacity('fade', TimelinePhase.ENTERING, 0.5, true);
// Expected: ~0.5 (with easing applied)
```

#### Test 10: Scale Animation Fully Visible
```typescript
const opacity = AnimationCalculator.calculateOpacity('scale', TimelinePhase.VISIBLE, 1, true);
// Expected: 1
```

#### Test 11: Show Animation (Instant) Entering
```typescript
const opacity = AnimationCalculator.calculateOpacity('show', TimelinePhase.ENTERING, 0.5, true);
// Expected: 1 (instant, no fade)
```

#### Test 12: Wipe Animation (No Fade)
```typescript
const opacity = AnimationCalculator.calculateOpacity('wipe', TimelinePhase.ENTERING, 0.5, true);
// Expected: 1 (wipe doesn't fade)
```

#### Test 13: Fade Animation Exiting at 75%
```typescript
const opacity = AnimationCalculator.calculateOpacity('fade', TimelinePhase.EXITING, 0.75, false);
// Expected: ~0.25 (1 - 0.75, with easing)
```

### Transform Tests

#### Test 14: Scale Animation Entering at 50%
```typescript
const transform = AnimationCalculator.calculateTransform(
  'scale',
  undefined,
  TimelinePhase.ENTERING,
  0.5,
  true
);
// Expected: 'scale(0.5)' (with easing applied to progress)
```

#### Test 15: Slide Left Entering at 25%
```typescript
const transform = AnimationCalculator.calculateTransform(
  'slide',
  'left',
  TimelinePhase.ENTERING,
  0.25,
  true
);
// Expected: 'translate(-X%, 0)' where X is calculated from eased progress
// At 25% progress with easing, element slides from -100% to target position
```

#### Test 16: Fully Visible (No Transform)
```typescript
const transform = AnimationCalculator.calculateTransform(
  'scale',
  undefined,
  TimelinePhase.VISIBLE,
  1,
  true
);
// Expected: 'none'
```

#### Test 17: Wipe Down Entering at 75%
```typescript
const transform = AnimationCalculator.calculateTransform(
  'wipe',
  'down',
  TimelinePhase.ENTERING,
  0.75,
  true
);
// Expected: 'scaleY(0.75)' (with easing applied)
```

#### Test 18: Slide Right Exiting at 50%
```typescript
const transform = AnimationCalculator.calculateTransform(
  'slide',
  'right',
  TimelinePhase.EXITING,
  0.5,
  false
);
// Expected: 'translate(X%, 0)' where X increases as exit progresses
```

### Transform Origin Tests

#### Test 19: Wipe Left Transform Origin
```typescript
const origin = AnimationCalculator.getTransformOrigin('wipe', 'left');
// Expected: 'left center'
```

#### Test 20: Wipe Down Transform Origin
```typescript
const origin = AnimationCalculator.getTransformOrigin('wipe', 'down');
// Expected: 'center bottom'
```

#### Test 21: Scale Transform Origin (Default)
```typescript
const origin = AnimationCalculator.getTransformOrigin('scale', undefined);
// Expected: 'center'
```

## TimelinePlaybackManager Tests

### Layer States Calculation

#### Test 22: Multiple Elements at Different Phases
```typescript
const events: TimelineEventExtended[] = [
  {
    id: '1',
    timing: { startTime: 10, duration: 5 },
    entryAnimation: { type: 'fade', duration: 500 },
    exitAnimation: { type: 'fade', duration: 300 },
  },
  {
    id: '2',
    timing: { startTime: 12, duration: 3 },
    entryAnimation: { type: 'scale', duration: 300 },
  },
  {
    id: '3',
    timing: { startTime: 8, duration: 2 },
    entryAnimation: { type: 'fade', duration: 200 },
  },
];

const manager = new TimelinePlaybackManager(events);
const states = manager.calculateLayerStates(10.25);

// Expected:
// Event 1: phase=ENTERING, progress=0.5, visible=true
// Event 2: phase=HIDDEN, progress=0, visible=false
// Event 3: phase=EXITED, progress=1, visible=false
```

#### Test 23: Visible Events Only
```typescript
const manager = new TimelinePlaybackManager(events);
const visibleStates = manager.getVisibleEvents(10.25);

// Expected: Only event 1 should be returned
// Length: 1
// visibleStates[0].id === '1'
```

### Duration Calculation

#### Test 24: Total Timeline Duration
```typescript
const events: TimelineEventExtended[] = [
  { timing: { startTime: 10, duration: 5 } },     // ends at 15
  { timing: { startTime: 8, duration: 12 } },     // ends at 20
  { timing: { startTime: 5, endTime: 18 } },      // ends at 18
];

const manager = new TimelinePlaybackManager(events);
const duration = manager.getTotalDuration();

// Expected: 20 (latest end time)
```

#### Test 25: Empty Timeline Duration
```typescript
const manager = new TimelinePlaybackManager([]);
const duration = manager.getTotalDuration();

// Expected: 0
```

### Animation Activity Detection

#### Test 26: Has Active Animations
```typescript
const manager = new TimelinePlaybackManager(events);
const hasActive = manager.hasActiveAnimations(10.25);

// Expected: true (event 1 is in ENTERING phase)
```

#### Test 27: No Active Animations
```typescript
const manager = new TimelinePlaybackManager(events);
const hasActive = manager.hasActiveAnimations(12);

// Expected: false (all events in VISIBLE or HIDDEN/EXITED)
```

## Integration Tests

### Test 28: Complete Lifecycle
```typescript
const event: TimelineEventExtended = {
  id: 'lifecycle-test',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
  exitAnimation: { type: 'fade', duration: 300 },
};

const manager = new TimelinePlaybackManager([event]);

// Test at various time points
const t1 = manager.calculateLayerStates(9)[0];    // Before start
const t2 = manager.calculateLayerStates(10.25)[0]; // Entering
const t3 = manager.calculateLayerStates(12)[0];    // Visible
const t4 = manager.calculateLayerStates(14.85)[0]; // Exiting
const t5 = manager.calculateLayerStates(16)[0];    // Exited

// Expected progression:
// t1: HIDDEN, opacity=0, visible=false
// t2: ENTERING, opacity>0, visible=true
// t3: VISIBLE, opacity=1, visible=true
// t4: EXITING, opacity<1, opacity>0, visible=true
// t5: EXITED, opacity=0, visible=false
```

### Test 29: No Exit Animation
```typescript
const event: TimelineEventExtended = {
  id: 'no-exit',
  timing: { startTime: 10, duration: 5 },
  entryAnimation: { type: 'fade', duration: 500 },
  // No exit animation
};

const manager = new TimelinePlaybackManager([event]);
const state = manager.calculateLayerStates(14.9)[0];

// Expected: Should still transition to EXITED at endTime
// No exit animation means instant disappearance
```

### Test 30: Infinite Duration
```typescript
const event: TimelineEventExtended = {
  id: 'infinite',
  timing: { startTime: 10 }, // No duration or endTime
  entryAnimation: { type: 'fade', duration: 500 },
};

const manager = new TimelinePlaybackManager([event]);
const state = manager.calculateLayerStates(1000)[0];

// Expected: phase=VISIBLE, visible=true
// Element never exits
```

## Edge Cases

### Test 31: Zero Duration Animation
```typescript
const event: TimelineEventExtended = {
  id: 'instant',
  timing: { startTime: 10, duration: 0 },
  entryAnimation: { type: 'show', duration: 0 },
};

const manager = new TimelinePlaybackManager([event]);
const state = manager.calculateLayerStates(10)[0];

// Expected: Should handle gracefully
```

### Test 32: Negative Time
```typescript
const manager = new TimelinePlaybackManager(events);
const states = manager.calculateLayerStates(-5);

// Expected: All events in HIDDEN phase
```

### Test 33: Overlapping Events
```typescript
const events: TimelineEventExtended[] = [
  {
    id: 'a',
    timing: { startTime: 10, duration: 5 },
    entryAnimation: { type: 'fade', duration: 500 },
  },
  {
    id: 'b',
    timing: { startTime: 12, duration: 5 },
    entryAnimation: { type: 'fade', duration: 500 },
  },
];

const manager = new TimelinePlaybackManager(events);
const states = manager.calculateLayerStates(12.5);

// Expected: Both events visible
// Event a: VISIBLE phase
// Event b: ENTERING phase
// Both should have visible=true
```

## Performance Tests

### Test 34: Many Events
```typescript
const events: TimelineEventExtended[] = Array.from({ length: 1000 }, (_, i) => ({
  id: `event-${i}`,
  timing: { startTime: i * 0.1, duration: 2 },
  entryAnimation: { type: 'fade', duration: 500 },
  exitAnimation: { type: 'fade', duration: 300 },
}));

const manager = new TimelinePlaybackManager(events);

// Measure time
const startTime = performance.now();
const states = manager.calculateLayerStates(50);
const endTime = performance.now();

// Expected: Should complete in < 50ms
// Result should be deterministic
```

### Test 35: Repeated Calculations (Purity Test)
```typescript
const manager = new TimelinePlaybackManager(events);

const result1 = manager.calculateLayerStates(10.5);
const result2 = manager.calculateLayerStates(10.5);
const result3 = manager.calculateLayerStates(10.5);

// Expected: All three results should be deeply equal
// Proves function purity
```

## Conversion Helper Tests

### Test 36: Legacy Event Conversion
```typescript
const legacyEvent = {
  id: 'legacy',
  timestamp: 10,
  animation: 'fade',
  animationDuration: 800,
  animationDirection: 'left',
  duration: 5,
};

const converted = convertToExtendedEvent(legacyEvent);

// Expected:
// converted.timing.startTime === 10
// converted.entryAnimation.type === 'fade'
// converted.entryAnimation.duration === 800
// converted.exitAnimation.duration === 300 (default)
```

## Notes

- All test cases should be deterministic (pure functions)
- All calculations should handle edge cases gracefully
- Transform strings should be valid CSS
- Opacity values should be clamped to [0, 1]
- Progress values should be clamped to [0, 1]
- No mutations of input data
- No side effects (no DOM manipulation, no console logs in production)
