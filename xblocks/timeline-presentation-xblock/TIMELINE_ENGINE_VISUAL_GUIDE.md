# Timeline Engine Visual Guide

Visual diagrams to understand the Timeline Engine.

## Timeline Lifecycle

```
                    ENTRY ANIMATION           EXIT ANIMATION
                    ←─────500ms────→          ←────300ms────→
Time:    ─────┬─────┬───────────────┬─────────┬──────────────┬─────→
         ... 5.0s  5.5s           10.0s      14.7s          15.0s  ...

Phase:   HIDDEN ENTERING    VISIBLE        EXITING      EXITED

Opacity:   0   ╱─────────────────────────────────╲      0
              ╱                                   ╲
             ╱                                     ╲
            0          →        1        →         0

Visible:   NO        YES        YES        YES           NO

Progress:  0.0   0.0→1.0      1.0      0.0→1.0       1.0

Elements shown for phases ENTERING, VISIBLE, EXITING only.
```

### Configuration

```typescript
{
  timing: {
    startTime: 5,      // Animation starts here
    endTime: 15,       // Final disappearance here
  },
  entryAnimation: {
    type: 'fade',
    duration: 500      // 500ms = 0.5s entry
  },
  exitAnimation: {
    type: 'fade',
    duration: 300      // 300ms = 0.3s exit
  }
}
```

### Timeline Calculation

```
Entry phase ends at:  startTime + (entryDuration / 1000)
                     = 5s + 0.5s = 5.5s

Exit phase starts at: endTime - (exitDuration / 1000)
                     = 15s - 0.3s = 14.7s

VISIBLE duration:     14.7s - 5.5s = 9.2 seconds
```

## Animation Types Visual

### 1. Fade Animation

```
Entry (ENTERING):
Opacity: 0 ────────────────────► 1
Transform: none

Visible (VISIBLE):
Opacity: 1 (steady)
Transform: none

Exit (EXITING):
Opacity: 1 ────────────────────► 0
Transform: none
```

### 2. Scale Animation

```
Entry (ENTERING):
Scale:   ⚫ ──► 🔴 ──► 🔴🔴
        tiny    medium  full size
Opacity: 0 ─────────────────────► 1

Visible (VISIBLE):
Scale:   🔴🔴 (full, steady)
Opacity: 1

Exit (EXITING):
Scale:   🔴🔴 ──► 🔴 ──► ⚫
        full    medium  tiny
Opacity: 1 ─────────────────────► 0
```

### 3. Slide Animation (Left)

```
Entry (ENTERING):
Position: ◄──────────────────────────────┤
          off-screen          on-screen  │
Transform: translate(-100%, 0) → translate(0, 0)
Opacity: 0 → 1

Visible (VISIBLE):
Position: │ on-screen
Transform: none
Opacity: 1

Exit (EXITING):
Position: │──────────────────────────────►
          on-screen          off-screen
Transform: translate(0, 0) → translate(-100%, 0)
Opacity: 1 → 0
```

#### Slide Directions

```
slide: 'left'    ◄─────┤  Transform: translateX(-100% → 0%)
slide: 'right'   ├─────►  Transform: translateX(100% → 0%)
slide: 'up'      ▲       Transform: translateY(-100% → 0%)
                 │
slide: 'down'    │       Transform: translateY(100% → 0%)
                 ▼
```

### 4. Wipe Animation (Down)

```
Entry (ENTERING):
┌──────────────┐
│░░░░░░░░░░░░░░│ ← Revealing from top
│██████████████│
│██████████████│
└──────────────┘
Transform: scaleY(0 → 1)
Transform-origin: center top
Opacity: 1 (no fade)

Visible (VISIBLE):
┌──────────────┐
│██████████████│
│██████████████│
│██████████████│
└──────────────┘

Exit (EXITING):
┌──────────────┐
│██████████████│
│██████████████│
│░░░░░░░░░░░░░░│ ← Hiding from bottom
└──────────────┘
Transform: scaleY(1 → 0)
```

#### Wipe Directions

```
wipe: 'left'     ├─────► scaleX(0→1), origin: left center
wipe: 'right'    ◄─────┤ scaleX(0→1), origin: right center
wipe: 'up'       ▲      scaleY(0→1), origin: center top
                 │
wipe: 'down'     │      scaleY(0→1), origin: center bottom
                 ▼
```

### 5. Show Animation (Instant)

```
Entry (ENTERING):
Opacity: 0 ─►█ 1  (instant, no transition)

Visible (VISIBLE):
Opacity: 1 (steady)

Exit (EXITING):
Opacity: 1 █◄─ 0  (instant, no transition)
```

## Engine Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                Input: TimelineEvent[], currentTime           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│          TimelinePlaybackManager.calculateLayerStates()      │
│                                                              │
│  FOR EACH event:                                            │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
         ┌────────────────────────────────┐
         │  1. normalizeTimelineEvent()   │
         │     Convert v1 → v2 if needed  │
         └────────────────┬───────────────┘
                          │
                          ▼
         ┌────────────────────────────────┐
         │  2. LayerStateMachine.getPhase()│
         │     → HIDDEN, ENTERING, etc.    │
         └────────────────┬───────────────┘
                          │
                          ▼
         ┌────────────────────────────────┐
         │  3. LayerStateMachine.getProgress()│
         │     → 0.0 to 1.0               │
         └────────────────┬───────────────┘
                          │
                          ▼
         ┌────────────────────────────────┐
         │  4. AnimationCalculator.calculateOpacity()│
         │     → 0.0 to 1.0 (with easing) │
         └────────────────┬───────────────┘
                          │
                          ▼
         ┌────────────────────────────────┐
         │  5. AnimationCalculator.calculateTransform()│
         │     → 'scale(0.5)'            │
         └────────────────┬───────────────┘
                          │
                          ▼
         ┌────────────────────────────────┐
         │  6. Construct LayerState       │
         │     { id, phase, progress,     │
         │       opacity, transform,      │
         │       visible }                │
         └────────────────┬───────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│              Output: LayerState[]                           │
│  [{ id: '1', phase: ENTERING, opacity: 0.5, ... }, ...]    │
└─────────────────────────────────────────────────────────────┘
```

## Progress Calculation Example

### Entry Animation (500ms)

```
Time:     5.0s    5.1s    5.2s    5.3s    5.4s    5.5s
          │       │       │       │       │       │
Phase:    ├───────────── ENTERING ──────────────┤
          │                                       │
Progress: 0.0     0.2     0.4     0.6     0.8     1.0

Calculation:
progress = (currentTime - startTime) / (entryDuration / 1000)
         = (5.25 - 5.0) / 0.5
         = 0.25 / 0.5
         = 0.5 (50% through entry)
```

### Exit Animation (300ms)

```
Time:    14.7s   14.8s   14.9s   15.0s
          │       │       │       │
Phase:    ├───── EXITING ─────────┤
          │                       │
Progress: 0.0     0.33    0.67    1.0

Calculation:
exitStartTime = endTime - (exitDuration / 1000)
              = 15.0 - 0.3 = 14.7

progress = (currentTime - exitStartTime) / (exitDuration / 1000)
         = (14.8 - 14.7) / 0.3
         = 0.1 / 0.3
         = 0.33 (33% through exit)
```

## Easing Functions Visual

### Linear (No Easing)

```
1.0 │                    ╱
    │                  ╱
    │                ╱
0.5 │              ╱
    │            ╱
    │          ╱
0.0 └────────┴────────────►
    0.0    0.5          1.0
           progress

Output = Input (straight line)
```

### Ease-Out Cubic

```
1.0 │         ╱──────────
    │       ╱
    │     ╱
0.5 │   ╱
    │  ╱
    │ ╱
0.0 └────────────────────►
    0.0    0.5          1.0
           progress

Fast start, slow end (deceleration)
Used for ENTERING animations
```

### Ease-In Cubic

```
1.0 │                 ╱
    │               ╱
    │             ╱
0.5 │           ╱
    │        ╱
    │────────╱
0.0 └────────────────────►
    0.0    0.5          1.0
           progress

Slow start, fast end (acceleration)
Used for EXITING animations
```

## State Machine Diagram

```
         ┌───────────────────────────────────────┐
         │                                       │
         │        t < startTime                  │
         ▼                                       │
    ┌─────────┐                                  │
    │ HIDDEN  │                                  │
    │ opacity=0│                                  │
    │ visible=false│                             │
    └────┬────┘                                  │
         │                                       │
         │ t ≥ startTime                         │
         ▼                                       │
    ┌──────────┐                                 │
    │ ENTERING │                                 │
    │ opacity: 0→1 │                             │
    │ visible=true │                             │
    └────┬─────┘                                 │
         │                                       │
         │ t ≥ startTime + entryDuration         │
         ▼                                       │
    ┌─────────┐                                  │
    │ VISIBLE │                                  │
    │ opacity=1│                                  │
    │ visible=true│                               │
    └────┬────┘                                  │
         │                                       │
         │ t ≥ endTime - exitDuration            │
         ▼                                       │
    ┌─────────┐                                  │
    │ EXITING │                                  │
    │ opacity: 1→0│                               │
    │ visible=true│                               │
    └────┬────┘                                  │
         │                                       │
         │ t ≥ endTime                           │
         ▼                                       │
    ┌────────┐                                   │
    │ EXITED │───────────────────────────────────┘
    │ opacity=0│
    │ visible=false│
    └────────┘
```

## Multiple Events Timeline

```
Time:    0s     2s     4s     6s     8s     10s    12s
         ├──────┼──────┼──────┼──────┼──────┼──────┤

Event 1: ░░░░░░████████████████████░░░░░░
         HIDDEN  ← VISIBLE →   EXITED

Event 2:        ░░░░░░████████████████████░░░░░░
                HIDDEN  ← VISIBLE →   EXITED

Event 3:               ░░░░░░████████████████████
                       HIDDEN  ← VISIBLE →

Legend:
  ░░░░ = HIDDEN or EXITED (not rendered)
  ████ = VISIBLE (rendered)
```

### Visibility Overlap

```
Time:     5s     6s     7s     8s     9s
          ├──────┼──────┼──────┼──────┤

Event 1:  ███████████████░░░░░░
Event 2:  ░░░░░░████████████████
Event 3:        ░░░░░░████████████████

States at t=7s:
  Event 1: phase=VISIBLE,  visible=true  ✓
  Event 2: phase=VISIBLE,  visible=true  ✓
  Event 3: phase=ENTERING, visible=true  ✓

  → 3 elements rendered simultaneously
```

## Performance Profile

```
Number of Events vs. Calculation Time (60fps = 16.6ms budget)

Events    Time      Status
──────    ────      ──────
10        <1ms      ✓ Excellent
100       ~2ms      ✓ Great
500       ~8ms      ✓ Good
1000      ~15ms     ✓ Acceptable
2000      ~30ms     ⚠ May drop frames
5000      ~75ms     ✗ Will drop frames

Recommendation: Keep under 1000 events for smooth 60fps playback
```

## Integration Pattern

```
┌──────────────────┐
│   Audio/Video    │
│     Player       │
└────────┬─────────┘
         │ timeupdate event
         ▼
┌──────────────────┐
│  React Component │
│  or JS Handler   │
└────────┬─────────┘
         │ currentTime
         ▼
┌──────────────────────────────┐
│ TimelinePlaybackManager      │
│ .calculateLayerStates(time)  │
└────────┬─────────────────────┘
         │ LayerState[]
         ▼
┌──────────────────┐
│  DOM Renderer    │
│  (applies styles)│
└──────────────────┘
         │
         ▼
┌──────────────────┐
│   User Sees      │
│   Animation      │
└──────────────────┘
```

## Common Mistakes

### ❌ Wrong: Calling once

```typescript
// Calculate once
const states = engine.calculateLayerStates(5);

// Apply to DOM
applyStates(states);

// Result: Elements frozen at time=5s
```

### ✓ Correct: Calling every frame

```typescript
function animate() {
  const currentTime = audioElement.currentTime;
  const states = engine.calculateLayerStates(currentTime);
  applyStates(states);

  requestAnimationFrame(animate);
}

// Result: Smooth animation
```

### ❌ Wrong: Ignoring visible flag

```typescript
states.forEach(state => {
  element.style.opacity = state.opacity;
  // Always renders, even when HIDDEN
});
```

### ✓ Correct: Check visible flag

```typescript
states.forEach(state => {
  if (state.visible) {
    element.style.display = 'block';
    element.style.opacity = state.opacity;
    element.style.transform = state.transform;
  } else {
    element.style.display = 'none';
  }
});
```

## Quick Reference

```typescript
// Create engine
const engine = new TimelinePlaybackManager(events);

// Get states for time
const states = engine.calculateLayerStates(currentTime);

// Each state has:
state.id           // string - element ID
state.phase        // TimelinePhase enum
state.progress     // 0-1 within phase
state.opacity      // 0-1 opacity value
state.transform    // 'scale(0.5)' or 'none'
state.visible      // boolean - render or not

// Utility methods
engine.getTotalDuration()        // Get timeline length
engine.getVisibleEvents(time)    // Get only visible
engine.hasActiveAnimations(time) // Check if animating
```

## Summary

The Timeline Engine is a **pure state calculator**:

- **Input**: Events array + current time (number)
- **Output**: Layer states array (opacity, transform, visible)
- **Guarantee**: Same inputs = same outputs (deterministic)
- **Performance**: O(n) calculation, works up to 1000+ events
- **Integration**: Call every frame, apply styles to DOM

**No rendering, no side effects, just pure math.**
