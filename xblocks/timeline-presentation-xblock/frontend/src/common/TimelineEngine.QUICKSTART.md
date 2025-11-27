# Timeline Engine Quick Start

Get started with the Timeline Engine in 5 minutes.

## Installation

```typescript
import { TimelinePlaybackManager } from './common/TimelineEngine';
import { TimelineEvent } from './common/types';
```

## Basic Usage

```typescript
// 1. Define your timeline events
const events: TimelineEvent[] = [
  {
    id: 'text-1',
    elementType: 'text',
    content: 'Hello World',
    position: { x: 50, y: 50 },
    timing: {
      startTime: 2,      // Appears at 2s
      endTime: 8,        // Disappears at 8s
    },
    entryAnimation: {
      type: 'fade',
      duration: 500,     // 500ms fade in
    },
    exitAnimation: {
      type: 'fade',
      duration: 300,     // 300ms fade out
    },
  },
];

// 2. Create the engine
const engine = new TimelinePlaybackManager(events);

// 3. Calculate states for current time
const currentTime = 5.5; // seconds
const states = engine.calculateLayerStates(currentTime);

// 4. Use the states
states.forEach(state => {
  if (state.visible) {
    console.log(`${state.id}: opacity=${state.opacity}, transform=${state.transform}`);
  }
});
```

## With Audio/Video

```typescript
const audioElement = document.getElementById('audio') as HTMLAudioElement;
const engine = new TimelinePlaybackManager(timelineEvents);

audioElement.addEventListener('timeupdate', () => {
  const states = engine.calculateLayerStates(audioElement.currentTime);

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
});
```

## With React

```typescript
function TimelinePlayer({ audioUrl, events }) {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const engine = useMemo(
    () => new TimelinePlaybackManager(events),
    [events]
  );

  const layerStates = useMemo(
    () => engine.calculateLayerStates(currentTime),
    [engine, currentTime]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} controls />

      <div className="timeline-canvas">
        {layerStates.map(state =>
          state.visible ? (
            <TimelineLayer
              key={state.id}
              state={state}
              event={events.find(e => e.id === state.id)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

function TimelineLayer({ state, event }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${event.position.x}%`,
        top: `${event.position.y}%`,
        opacity: state.opacity,
        transform: state.transform,
      }}
    >
      {event.content}
    </div>
  );
}
```

## Animation Types Cheat Sheet

### Fade
```typescript
entryAnimation: { type: 'fade', duration: 500 }
// Just opacity, no transform
```

### Scale
```typescript
entryAnimation: { type: 'scale', duration: 400 }
// Scale from 0 to 1 with fade
```

### Slide
```typescript
entryAnimation: { type: 'slide', direction: 'left', duration: 600 }
// Slide in from specified direction
// Directions: 'left', 'right', 'up', 'down'
```

### Wipe
```typescript
entryAnimation: { type: 'wipe', direction: 'down', duration: 500 }
// Curtain-style reveal (no fade)
// IMPORTANT: Apply transform-origin:
const origin = AnimationCalculator.getTransformOrigin('wipe', 'down');
element.style.transformOrigin = origin;
```

### Show (Instant)
```typescript
entryAnimation: { type: 'show', duration: 0 }
// Instant appearance, no animation
```

## Common Patterns

### Infinite Duration
```typescript
{
  timing: {
    startTime: 5,
    // No endTime = stays visible forever
  },
  entryAnimation: { type: 'fade', duration: 500 },
  // No exitAnimation = never exits
}
```

### Sequential Events
```typescript
const events = [
  { id: '1', timing: { startTime: 0, endTime: 3 }, ... },
  { id: '2', timing: { startTime: 3, endTime: 6 }, ... },
  { id: '3', timing: { startTime: 6, endTime: 9 }, ... },
];
// Events appear one after another
```

### Overlapping Events
```typescript
const events = [
  { id: '1', timing: { startTime: 0, endTime: 5 }, ... },
  { id: '2', timing: { startTime: 2, endTime: 7 }, ... },
  { id: '3', timing: { startTime: 4, endTime: 9 }, ... },
];
// Multiple events visible simultaneously
```

### Different Entry/Exit Animations
```typescript
{
  entryAnimation: { type: 'scale', duration: 600 },
  exitAnimation: { type: 'fade', duration: 300 },
  // Scale in, fade out
}
```

## Utility Methods

### Get Total Duration
```typescript
const duration = engine.getTotalDuration();
console.log(`Timeline is ${duration} seconds long`);
```

### Get Only Visible Events
```typescript
const visible = engine.getVisibleEvents(currentTime);
console.log(`${visible.length} elements currently visible`);
```

### Check for Active Animations
```typescript
if (engine.hasActiveAnimations(currentTime)) {
  console.log('Animations are playing');
  // Maybe request animation frame
}
```

## Debugging

### Log Phase Information
```typescript
states.forEach(state => {
  console.log(`${state.id}:`, {
    phase: state.phase,           // HIDDEN, ENTERING, VISIBLE, EXITING, EXITED
    progress: state.progress,     // 0-1 within phase
    opacity: state.opacity,       // 0-1
    transform: state.transform,   // CSS string
    visible: state.visible,       // boolean
  });
});
```

### Validate Event Timing
```typescript
const event = events[0];
const normalized = normalizeTimelineEvent(event);
console.log('Timing:', {
  startTime: normalized.timing.startTime,
  endTime: normalized.timing.endTime,
  entryDuration: normalized.entryAnimation.duration / 1000,
  exitDuration: normalized.exitAnimation?.duration / 1000,
});
```

## Performance Tips

### Filter Events by Time Range
```typescript
const buffer = 1; // seconds
const relevantEvents = events.filter(e => {
  const norm = normalizeTimelineEvent(e);
  return currentTime >= norm.timing.startTime - buffer &&
         currentTime <= (norm.timing.endTime ?? Infinity) + buffer;
});
const engine = new TimelinePlaybackManager(relevantEvents);
```

### Memoize in React
```typescript
// Memoize engine
const engine = useMemo(
  () => new TimelinePlaybackManager(events),
  [events]
);

// Memoize states
const states = useMemo(
  () => engine.calculateLayerStates(currentTime),
  [engine, currentTime]
);
```

### Throttle Updates
```typescript
let lastUpdateTime = 0;
const UPDATE_INTERVAL = 16; // ~60fps

audioElement.addEventListener('timeupdate', () => {
  const now = Date.now();
  if (now - lastUpdateTime < UPDATE_INTERVAL) return;

  lastUpdateTime = now;
  const states = engine.calculateLayerStates(audioElement.currentTime);
  updateDOM(states);
});
```

## Troubleshooting

### Element not appearing?
Check: `state.visible === true` and `state.opacity > 0`

### Animation jerky?
Call `calculateLayerStates()` every frame, not just once.

### Transform not working?
For SVG, use `element.style.transform`, not `setAttribute('transform')`.

### Wipe looks wrong?
Apply transform-origin:
```typescript
element.style.transformOrigin = AnimationCalculator.getTransformOrigin(
  event.entryAnimation.type,
  event.entryAnimation.direction
);
```

## Next Steps

- Read full API docs: `TimelineEngine.README.md`
- Check test cases: `TimelineEngine.test.spec.md`
- See type definitions: `types.ts`

## Support

The engine is pure TypeScript with full type safety. Let TypeScript guide you - hover over methods to see documentation.
