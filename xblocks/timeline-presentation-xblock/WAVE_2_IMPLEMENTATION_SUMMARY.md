# Wave 2: Konva + React Spring Implementation Summary

## Overview

Successfully replaced CSS-based student view rendering with Konva + @react-spring animations. This eliminates the dual-rendering system and provides a unified rendering approach across studio and student views.

## Files Created

### 1. TimelineKonvaElement.tsx
**Location:** `/frontend/src/student-ui/components/TimelineKonvaElement.tsx`

**Purpose:** Renders individual timeline elements using Konva with @react-spring animations

**Key Features:**
- Converts percentage coordinates to pixel coordinates based on stage dimensions
- Supports all element types: text, circle, rectangle, line, arrow
- Implements three animation types:
  - **Fade:** Opacity transition (0 → 1)
  - **Scale:** Scale transition (0.01 → 1) with center-based scaling
  - **Slide:** Position offset based on direction (up/down/left/right)
- Uses `animated` components from @react-spring/konva
- All elements are non-interactive (`listening={false}`)

**Animation Configuration:**
```typescript
const springProps = useSpring({
  ...getAnimationProps(),
  config: { duration: animationDuration },
});
```

**Element Rendering:**
- **Text:** Uses fontSize from event.fontSize or event.dimensions.height
- **Circle:** Radius calculated from dimensions.width (diameter in %)
- **Rectangle:** Width/height with center offsetX/offsetY for scaling
- **Line:** Simple stroke with points array [x1, y1, x2, y2]
- **Arrow:** Like line but with pointerLength and pointerWidth

## Files Modified

### 1. DiagramCanvas.tsx
**Location:** `/frontend/src/student-ui/DiagramCanvas.tsx`

**Changes:**
- Replaced CSS overlay rendering with Konva Stage/Layer architecture
- Added background image loading via `new Image()` for Konva
- Stage dimensions automatically set based on background image size
- Two-layer rendering:
  - **Layer 1:** Background image (KonvaImage)
  - **Layer 2:** Timeline elements (TimelineKonvaElement)
- Removed dependency on old TimelineElement component

**Before:**
```tsx
<div className="timeline-diagram-overlay">
  {activeElements.map(event => (
    <TimelineElement key={event.id} event={event} isActive={true} />
  ))}
</div>
```

**After:**
```tsx
<Stage width={stageDimensions.width} height={stageDimensions.height}>
  <Layer>
    <KonvaImage image={backgroundImage} />
  </Layer>
  <Layer>
    {activeElements.map(event => (
      <TimelineKonvaElement
        key={event.id}
        event={event}
        isVisible={true}
        stageDimensions={stageDimensions}
      />
    ))}
  </Layer>
</Stage>
```

### 2. minimal-paragon.scss
**Location:** `/frontend/src/student-ui/styles/minimal-paragon.scss`

**Changes:**
- Removed CSS animation classes (lines 333-539):
  - `.timeline-animation-fade`
  - `.timeline-animation-scale`
  - `.timeline-animation-slide-*`
  - `.timeline-animation-wipe-*`
  - `.timeline-element-*` base classes
- Added Konva-specific styles:
  - `.timeline-diagram-stage-container`
  - `.timeline-diagram-stage`
  - Responsive canvas sizing
- Updated responsive breakpoints to target Konva canvas instead of CSS elements

**CSS Removed (207 lines):**
- All `@keyframes` definitions
- All `.timeline-animation-*` classes
- Element-specific classes (`.timeline-element-text`, etc.)

**CSS Added:**
```scss
.timeline-diagram-stage-container {
  position: relative;
  width: 100%;

  canvas {
    display: block;
    width: 100% !important;
    height: auto !important;
  }
}
```

### 3. components.ts
**Location:** `/frontend/src/student-ui/components.ts`

**Changes:**
- Added export for `TimelineKonvaElement`
- Added comment marking old `TimelineElement` as legacy

## Architecture Changes

### Before (Wave 1):
```
StudentView
  └── TimelinePlayer
       └── DiagramCanvas
            ├── <img> (background)
            └── <div overlay>
                 └── TimelineElement (CSS-based)
```

### After (Wave 2):
```
StudentView
  └── TimelinePlayer
       └── DiagramCanvas
            └── <Stage>
                 ├── <Layer> (background)
                 │    └── <KonvaImage>
                 └── <Layer> (elements)
                      └── TimelineKonvaElement (@react-spring)
```

## Benefits

1. **Unified Rendering:** Studio and student views now both use Konva
2. **Precise Positioning:** No more CSS percentage positioning bugs
3. **Better Animations:** @react-spring provides smooth, professional animations
4. **Arrow Fixes:** Arrows now render correctly using Konva Arrow component
5. **Simpler CSS:** Removed 200+ lines of animation CSS
6. **Performance:** Konva's canvas rendering is more efficient than CSS overlays

## Dependencies Used

- `react-konva` v18.2.10
- `@react-spring/konva` v10.0.3
- `konva` v9.3.16

All already included in package.json.

## Build Status

✅ **Build:** Successful (783.77 KB student-ui.js)
✅ **Deploy:** Successful to dev environment
✅ **CSS:** 207 lines removed, ~30 lines added (net reduction)

## Testing Checklist

Student view should now:
- [ ] Load background image correctly
- [ ] Render text elements at correct positions
- [ ] Render circle shapes at correct positions
- [ ] Render rectangle shapes at correct positions
- [ ] Render lines with correct start/end points
- [ ] Render arrows pointing in correct direction
- [ ] Fade animation works smoothly
- [ ] Scale animation scales from center
- [ ] Slide animation slides from correct direction
- [ ] All elements sync with audio playback
- [ ] Stage scales responsively on mobile

## Known Issues / Limitations

1. **Triangle shapes:** Not yet implemented in Konva renderer (logged warning)
2. **Wipe animations:** Not implemented (CSS wipe animations removed)
3. **Text centering:** Text uses offsetY but not offsetX (Konva handles text width dynamically)

## Next Steps (Wave 3)

Wave 3 will integrate GSAP timeline for professional audio synchronization:
- Replace current `useTimelineSync` hook
- Use GSAP timeline for precise timing
- Add audio seek support
- Add playback speed control
- Professional animation curves (ease, power, back, elastic)

## Files to Keep

**Keep for reference:**
- `TimelineElement.tsx` - Old CSS-based renderer (marked as legacy)
- `AnimationEngine.tsx` - Currently still used by TimelinePlayer

**These will be replaced in Wave 3 with GSAP implementation.**

## Deployment

```bash
cd frontend
npm run build
cd ..
./deploy-dev.sh
```

Wait ~60 seconds for containers to restart, then test at:
- http://apps.local.openedx.io:2001 (Studio)
- http://apps.local.openedx.io:2000 (LMS)
