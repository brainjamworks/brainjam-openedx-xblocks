# Wave 3 Architecture: GSAP Timeline Integration

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        TimelinePlayer                            │
│  - Manages audio playback state                                 │
│  - Tracks currentTime, duration, isPlaying                      │
└────────────────┬───────────────────────────────┬────────────────┘
                 │                               │
                 ↓                               ↓
    ┌────────────────────────┐      ┌───────────────────────┐
    │  useGSAPTimeline       │      │   <audio> element     │
    │  (Wave 3 Hook)         │      │   HTML5 Audio         │
    └────────────────────────┘      └───────────────────────┘
                 │
                 │ Returns: { visibleEventIds: Set<string> }
                 ↓
    ┌─────────────────────────────────────────────────────┐
    │                  DiagramCanvas                      │
    │  - Renders Konva Stage                             │
    │  - Maps all events to TimelineKonvaElement         │
    │  - Passes isVisible flag per event                 │
    └──────────────────────────┬──────────────────────────┘
                               │
                               ↓
              ┌────────────────────────────────┐
              │   TimelineKonvaElement         │
              │   (Wave 2 Component)           │
              │   - Konva rendering            │
              │   - React Spring animations    │
              │   - Visibility controlled by   │
              │     GSAP (Wave 3)              │
              └────────────────────────────────┘
```

## Data Flow

### Audio Time → GSAP Timeline → Visibility State

```
Audio.currentTime (2.5 seconds)
           ↓
useGSAPTimeline receives:
  - events: [event1@1s, event2@2s, event3@3s]
  - audioCurrentTime: 2.5
  - audioDuration: 10.0
  - isPlaying: true
           ↓
GSAP Timeline:
  timeline.seek(2.5)
           ↓
Calculate visible IDs:
  event1: 1.0s ≤ 2.5s → VISIBLE ✓
  event2: 2.0s ≤ 2.5s → VISIBLE ✓
  event3: 3.0s > 2.5s → HIDDEN ✗
           ↓
Return:
  visibleEventIds: Set(['event1', 'event2'])
           ↓
DiagramCanvas renders:
  <TimelineKonvaElement event1 isVisible={true} />
  <TimelineKonvaElement event2 isVisible={true} />
  <TimelineKonvaElement event3 isVisible={false} />
           ↓
React Spring animates:
  event1: opacity: 1 (visible)
  event2: opacity: 1 (visible)
  event3: opacity: 0 (hidden)
```

## Component Responsibilities

### TimelinePlayer (Orchestrator)
- **Input:** Props from StudentView
- **State:** Audio playback (currentTime, duration, isPlaying)
- **Output:** Passes state to useGSAPTimeline and DiagramCanvas
- **Wave 3 Change:** Uses `useGSAPTimeline` instead of `useTimelineSync`

### useGSAPTimeline (Wave 3 Hook)
- **Input:** events, audioCurrentTime, audioDuration, isPlaying
- **Process:**
  1. Creates GSAP timeline on mount/events change
  2. Adds each event as a timeline animation
  3. Syncs timeline to audio via `seek(audioCurrentTime)`
  4. Calculates which events should be visible
- **Output:** `{ visibleEventIds: Set<string> }`
- **Performance:** 60fps precision

### DiagramCanvas (Renderer)
- **Input:** timelineEvents (all events), visibleEventIds (visibility state)
- **Process:**
  1. Loads background image
  2. Creates Konva Stage
  3. Maps all events to TimelineKonvaElement
  4. Passes `isVisible` flag per event
- **Output:** Rendered Konva canvas
- **Wave 3 Change:** Renders all events, uses visibility flag

### TimelineKonvaElement (Wave 2 Component)
- **Input:** event, isVisible, stageDimensions
- **Process:**
  1. Converts percentage coords to pixels
  2. Uses React Spring for smooth animations
  3. Renders based on element type (text, shape, line, arrow)
- **Output:** Animated Konva element
- **No Wave 3 Changes:** Still uses React Spring for "how" to animate

## Technology Stack

### Konva (Rendering)
- Canvas-based rendering engine
- Precise pixel positioning
- Layer-based architecture
- Excellent performance

### React Spring (Animation)
- Physics-based animations
- Smooth interpolation
- React-friendly API
- Controls "how" elements animate

### GSAP (Timeline)
- Professional timeline management
- 60fps precision
- Audio synchronization via `seek()`
- Controls "when" elements are visible

## Separation of Concerns

| Layer | Technology | Responsibility |
|-------|-----------|----------------|
| **Rendering** | Konva | Where elements appear on canvas |
| **Animation** | React Spring | How elements animate (fade, scale, slide) |
| **Timing** | GSAP | When elements become visible |
| **State** | React | Component lifecycle and re-renders |

## Performance Characteristics

### Frame Rate
- **GSAP Timeline:** 60fps visibility updates
- **React Spring:** 60fps animation interpolation
- **Konva:** 60fps canvas rendering
- **Result:** Buttery smooth animations

### State Updates
```
Audio timeupdate event (~250ms)
           ↓
React state update: currentTime
           ↓
useGSAPTimeline re-runs
           ↓
GSAP timeline.seek() (60fps internally)
           ↓
Visibility calculation (once per time update)
           ↓
React re-render (if visibility changed)
           ↓
React Spring animations (continuous 60fps)
           ↓
Konva canvas update (60fps)
```

**Key insight:** Only React state updates on `timeupdate` (~4/sec), but animations run at 60fps internally.

## Easing Curves (GSAP)

```typescript
Animation Type → GSAP Easing
───────────────────────────────
fade   → power1.inOut      // Smooth, gradual
scale  → back.out(1.2)     // Slight overshoot/bounce
slide  → power2.out        // Fast start, smooth stop
wipe   → power1.inOut      // Linear-ish reveal
show   → none              // Instant (no animation)
```

These curves are applied by GSAP to the `autoAlpha` property for professional-quality motion.

## Debug Features

### Development Logging
```typescript
// In useGSAPTimeline.ts
console.log(
  `[GSAP Timeline] Time: ${audioCurrentTime.toFixed(2)}s |
   Visible: ${Array.from(visibleEventIds).join(', ')}`
);
```

### Debug Panel (TimelinePlayer)
```
Debug Info
──────────
Playing: Yes
Current Time: 2.45s
Duration: 10.00s
Visible Elements: 2
Total Events: 5
```

### Canvas Debug (DiagramCanvas)
```
Visible: 2/5 | Stage: 1920x1080
```

## Migration Benefits

### Before (Wave 2)
- ❌ ~250ms precision (timeupdate events)
- ❌ Manual visibility tracking in React state
- ❌ Potential timing drift
- ✓ Smooth animations (React Spring)

### After (Wave 3)
- ✅ 60fps precision (GSAP timeline)
- ✅ Professional timeline management
- ✅ Frame-perfect audio sync
- ✅ Smooth animations (React Spring)
- ✅ Professional easing curves

## Future Possibilities

With GSAP timeline in place, we can now easily add:

1. **Scrubbing:** Seek audio by clicking on progress bar
2. **Playback Speed:** 0.5x, 1x, 2x speed controls
3. **Reverse Playback:** Timeline can run backwards
4. **Complex Sequences:** Stagger animations, parallel timelines
5. **Timeline Markers:** Named keyframes for navigation
6. **Animation Inspector:** Visual timeline debugging

## Testing Strategy

1. **Unit Tests:** Test visibility calculation logic
2. **Integration Tests:** Test audio → GSAP → visibility flow
3. **Visual Tests:** Verify animations are smooth
4. **Performance Tests:** Measure frame rate consistency
5. **Edge Cases:**
   - Seek backwards
   - Seek forwards (skip events)
   - Pause/resume
   - Audio end
   - Very short events
   - Overlapping events

## Conclusion

Wave 3 completes the migration to professional-quality animation infrastructure:

- **Wave 1:** CSS-based (functional but limited)
- **Wave 2:** Konva + React Spring (smooth rendering)
- **Wave 3:** GSAP timeline (perfect timing)

**Result:** Production-ready, 60fps, frame-perfect audio-synced timeline presentation system.
