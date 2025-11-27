# Timeline Presentation XBlock - Data Model Migration Strategy

## Overview

This document describes the migration from v1 (flat structure) to v2 (GSAP timeline with entry/exit animations) data model.

**CRITICAL**: This migration is **100% backward compatible**. All existing v1 content will continue to work without any changes.

---

## Version Comparison

### V1 Format (Legacy - Still Supported)

```typescript
{
  id: "event-1",
  timestamp: 7.25,              // seconds from audio start
  animation: "fade",
  animationDuration: 750,       // milliseconds
  animationDirection: "left",   // optional
  elementType: "text",
  position: { x: 50, y: 50 },
  content: "Hello",
  color: "#FFFFFF"
}
```

**Behavior**:
- Element appears at `timestamp`
- Entry animation plays for `animationDuration` ms
- **Element stays visible forever** (no exit)

---

### V2 Format (New - GSAP Timeline)

```typescript
{
  id: "event-1",
  timing: {
    startTime: 7.25,            // seconds from audio start
    endTime: 12.5               // OPTIONAL - when to exit
  },
  entryAnimation: {
    type: "fade",
    duration: 750,              // milliseconds
    direction: "left",          // optional
    easing: "power2.out"        // GSAP easing, optional
  },
  exitAnimation: {              // OPTIONAL - if omitted, stays visible
    type: "fade",
    duration: 500,
    easing: "power2.in"
  },
  elementType: "text",
  position: { x: 50, y: 50 },
  content: "Hello",
  color: "#FFFFFF"
}
```

**Behavior**:
- Element enters at `timing.startTime`
- Entry animation plays for `entryAnimation.duration` ms
- Element stays visible until `timing.endTime` (or forever if omitted)
- Exit animation plays for `exitAnimation.duration` ms
- Element disappears after exit animation completes

**Key New Features**:
1. Elements can **exit** (not just enter)
2. Separate control over entry and exit animations
3. GSAP easing support for professional animations
4. Complex choreography with overlapping elements

---

## Backward Compatibility Strategy

### Automatic Conversion

The `normalizeTimelineEvent()` function in `types.ts` automatically converts v1 → v2:

```typescript
// V1 event (old format)
const v1Event = {
  id: "event-1",
  timestamp: 5.0,
  animation: "fade",
  animationDuration: 500,
  elementType: "text",
  position: { x: 50, y: 50 }
};

// Automatically converted to V2
const v2Event = normalizeTimelineEvent(v1Event);
// Result:
// {
//   ...v1Event,
//   timing: { startTime: 5.0 },        // No endTime = stays forever
//   entryAnimation: {
//     type: "fade",
//     duration: 500
//   }
//   // No exitAnimation = stays forever
// }
```

### Preservation of V1 Behavior

**Key guarantee**: V1 events without `endTime` or `exitAnimation` **stay visible forever**, exactly like the old behavior.

| V1 Field | V2 Field | Notes |
|----------|----------|-------|
| `timestamp` | `timing.startTime` | Direct mapping |
| `animation` | `entryAnimation.type` | Direct mapping |
| `animationDuration` | `entryAnimation.duration` | Direct mapping |
| `animationDirection` | `entryAnimation.direction` | Direct mapping |
| (none) | `timing.endTime` | **Omitted** → stays forever |
| (none) | `exitAnimation` | **Omitted** → no exit |

---

## Implementation Status

### ✅ Completed

1. **TypeScript Types** (`frontend/src/common/types.ts`)
   - `TimelinePhase` enum (lifecycle states)
   - `AnimationConfig` interface
   - `TimingConfig` interface
   - Updated `TimelineEvent` interface (supports both v1 and v2)
   - `LayerState` interface
   - `TimelineState` interface
   - `normalizeTimelineEvent()` migration function
   - `isV1Event()` and `isV2Event()` helper functions

2. **Python Backend** (`timeline_presentation/timeline_presentation.py`)
   - Updated comments documenting both v1 and v2 formats
   - Python just stores data (validation happens in TypeScript)
   - No breaking changes to existing fields

3. **Build Verification**
   - TypeScript compilation successful
   - No type errors
   - Backward compatible with existing code

---

## Migration Examples

### Example 1: Simple Fade In (V1 → V2)

**Before (V1)**:
```json
{
  "id": "label-1",
  "timestamp": 3.5,
  "animation": "fade",
  "animationDuration": 800,
  "elementType": "text",
  "content": "Step 1",
  "position": {"x": 20, "y": 30}
}
```

**After Normalization (V2)**:
```json
{
  "id": "label-1",
  "timing": {
    "startTime": 3.5
  },
  "entryAnimation": {
    "type": "fade",
    "duration": 800
  },
  "elementType": "text",
  "content": "Step 1",
  "position": {"x": 20, "y": 30}
}
```

**Behavior**: Identical - fades in at 3.5s, stays visible forever.

---

### Example 2: Slide from Left (V1 → V2)

**Before (V1)**:
```json
{
  "id": "arrow-1",
  "timestamp": 5.0,
  "animation": "slide",
  "animationDirection": "left",
  "animationDuration": 600,
  "elementType": "arrow",
  "lineCoordinates": {"x1": 10, "y1": 50, "x2": 90, "y2": 50}
}
```

**After Normalization (V2)**:
```json
{
  "id": "arrow-1",
  "timing": {
    "startTime": 5.0
  },
  "entryAnimation": {
    "type": "slide",
    "direction": "left",
    "duration": 600
  },
  "elementType": "arrow",
  "lineCoordinates": {"x1": 10, "y1": 50, "x2": 90, "y2": 50}
}
```

**Behavior**: Identical - slides from left at 5.0s, stays visible forever.

---

### Example 3: NEW - Element with Exit Animation

**V2 Only** (not possible in v1):
```json
{
  "id": "highlight-1",
  "timing": {
    "startTime": 7.0,
    "endTime": 12.0
  },
  "entryAnimation": {
    "type": "scale",
    "duration": 500,
    "easing": "elastic.out"
  },
  "exitAnimation": {
    "type": "fade",
    "duration": 300,
    "easing": "power2.in"
  },
  "elementType": "shape",
  "shapeType": "circle",
  "position": {"x": 50, "y": 50},
  "dimensions": {"width": 100, "height": 100},
  "color": "#FFD700"
}
```

**Behavior**:
- Appears at 7.0s with elastic scale animation
- Stays visible until 12.0s
- Fades out over 300ms
- Disappears completely at 12.3s

---

## Testing Checklist

### For Existing V1 Content

- [ ] Load old v1 timeline events
- [ ] Verify elements appear at correct timestamps
- [ ] Verify entry animations play correctly
- [ ] Verify elements stay visible (don't disappear)
- [ ] Verify no console errors

### For New V2 Content

- [ ] Create timeline events with `timing` object
- [ ] Test entry animations
- [ ] Test exit animations
- [ ] Test elements without `endTime` (should stay visible)
- [ ] Test elements without `exitAnimation` (should stay visible)
- [ ] Test overlapping elements (complex choreography)

---

## Future Agent Instructions

### For AGENT 2 (Timeline Engine)

You will receive normalized v2 events from `normalizeTimelineEvent()`. Your engine should:

1. **Accept normalized events** with guaranteed `timing` and `entryAnimation` fields
2. **Handle optional `exitAnimation`** - if present, play exit animation; if absent, keep visible
3. **Handle optional `timing.endTime`** - if present, schedule exit; if absent, stay visible forever
4. **Calculate phase** (HIDDEN → ENTERING → VISIBLE → EXITING → EXITED)
5. **Generate LayerState** objects for rendering

### For AGENT 3 (SVG Renderer)

You will receive `LayerState` objects with:
- `phase`: Current lifecycle phase
- `opacity`: Calculated opacity (0-1)
- `transform`: CSS transform string
- `visible`: Boolean for rendering

You should:
1. Only render layers where `visible === true`
2. Apply opacity and transform from `LayerState`
3. Handle phase transitions smoothly

---

## Questions & Answers

### Q: What happens to existing v1 content in the database?

**A**: Nothing. The Python backend stores events as-is (JSON). The TypeScript frontend automatically normalizes v1 → v2 at runtime using `normalizeTimelineEvent()`. No database migration needed.

### Q: Can we mix v1 and v2 events in the same timeline?

**A**: Yes! The normalization function handles both formats transparently. Each event is normalized individually.

### Q: Will v1 events behave differently after migration?

**A**: No. V1 events are converted to v2 format with **identical behavior**:
- Entry at same timestamp
- Same entry animation
- No exit (stays visible forever, just like v1)

### Q: When should we use v2 format?

**A**: Use v2 when you need:
- Elements to **exit** (not just enter)
- Different entry/exit animations
- Complex choreography with overlapping elements
- Professional easing (GSAP easings)

### Q: Can we convert v2 → v1?

**A**: Partially. V2 events without `exitAnimation` and `endTime` can be losslessly converted back. V2 events with exits cannot (v1 doesn't support exits).

---

## Summary

✅ **Zero breaking changes** for existing content
✅ **Automatic conversion** v1 → v2 at runtime
✅ **V1 behavior preserved** exactly (elements stay visible forever)
✅ **New v2 features** available (exit animations, choreography)
✅ **TypeScript compilation** successful
✅ **Python backend** updated with documentation
✅ **Ready for AGENT 2** (Timeline Engine) to implement

**Next Step**: AGENT 2 should implement the timeline engine that processes normalized v2 events and generates `LayerState` objects for rendering.
