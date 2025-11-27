# Agent 3: SVG Component Hierarchy

## Visual Component Tree

```
TimelinePlayer (Agent 1)
  │
  ├─ useTimelineEngine() hook (Agent 2)
  │   └─ returns: layerStates[]
  │
  └─ SVGCanvas (Agent 3 - Main)
      │
      ├─ <svg viewBox="...">
      │   │
      │   ├─ <image> (background diagram)
      │   │
      │   └─ timelineEvents.map()
      │       │
      │       └─ SVGElement (Router)
      │           │
      │           ├─ case 'shape':
      │           │   ├─ SVGCircle
      │           │   │   └─ <circle cx cy r fill opacity transform />
      │           │   │
      │           │   └─ SVGRectangle
      │           │       └─ <rect x y width height fill opacity transform />
      │           │
      │           ├─ case 'line':
      │           │   └─ SVGLine
      │           │       └─ <line x1 y1 x2 y2 stroke opacity transform />
      │           │
      │           ├─ case 'arrow':
      │           │   └─ SVGArrow
      │           │       └─ <g opacity transform>
      │           │           ├─ <line /> (shaft)
      │           │           └─ <polygon /> (arrowhead)
      │           │
      │           └─ case 'text':
      │               └─ SVGText
      │                   └─ <text x y fontSize fill opacity transform>
      │                       └─ {content}
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────┐
│ TimelinePlayer (Agent 1 - Orchestrator)            │
│                                                     │
│  - Manages audio playback                          │
│  - Provides currentTime to Agent 2                 │
│  - Passes layerStates from Agent 2 to Agent 3      │
└────────────┬────────────────────────────────────────┘
             │
             │ currentTime, isPlaying
             ↓
┌─────────────────────────────────────────────────────┐
│ useTimelineEngine() (Agent 2 - State Calculator)   │
│                                                     │
│  Input: timelineEvents[], currentTime, isPlaying   │
│  Output: layerStates[]                             │
│                                                     │
│  Calculates for each event:                        │
│  - phase: hidden|entering|visible|exiting|exited   │
│  - opacity: 0-1                                    │
│  - transform: CSS transform string                 │
│  - visible: true/false                             │
└────────────┬────────────────────────────────────────┘
             │
             │ layerStates[]
             ↓
┌─────────────────────────────────────────────────────┐
│ SVGCanvas (Agent 3 - Renderer)                     │
│                                                     │
│  Input: layerStates[], timelineEvents[]            │
│  Output: SVG DOM elements                          │
│                                                     │
│  - Filters visible elements                        │
│  - Routes to appropriate renderer                  │
│  - Applies opacity + transform from layerState     │
└────────────┬────────────────────────────────────────┘
             │
             │ event + layerState
             ↓
┌─────────────────────────────────────────────────────┐
│ SVG Element Renderers                              │
│                                                     │
│  - SVGCircle: <circle> with center transforms      │
│  - SVGRectangle: <rect> with center transforms     │
│  - SVGLine: <line> with endpoints                  │
│  - SVGArrow: <g> with <line> + <polygon>           │
│  - SVGText: <text> with center alignment           │
│                                                     │
│  All apply:                                         │
│  - opacity={layerState.opacity}                    │
│  - transform={layerState.transform}                │
│  - style={{ transformOrigin: center, ...}}        │
└─────────────────────────────────────────────────────┘
```

---

## File Structure

```
frontend/src/student-ui/
├── TimelinePlayer.tsx (Agent 1)
├── hooks/
│   └── useTimelineEngine.ts (Agent 2)
└── components/
    ├── SVGCanvas.tsx (Agent 3 Main)
    └── svg/
        ├── index.ts (Barrel export)
        ├── SVGElement.tsx (Router)
        ├── SVGCircle.tsx
        ├── SVGRectangle.tsx
        ├── SVGLine.tsx
        ├── SVGArrow.tsx
        └── SVGText.tsx
```

---

## Props Flow

### SVGCanvas Props
```typescript
{
  imageUrl: string;                          // Background diagram
  timelineEvents: TimelineEvent[];           // Event definitions
  layerStates: LayerState[];                 // Current state (from Agent 2)
  canvasDimensions: { width, height };       // ViewBox dimensions
}
```

### SVGElement Props (all renderers)
```typescript
{
  event: TimelineEvent;                      // Element configuration
  layerState: LayerState;                    // Current animation state
  canvasDimensions: { width, height };       // For coordinate conversion
}
```

### LayerState Structure
```typescript
{
  id: string;                                // Matches event.id
  phase: TimelinePhase;                      // Animation phase
  opacity: number;                           // 0-1
  transform: string;                         // CSS transform
  visible: boolean;                          // Render or skip
  progress: number;                          // 0-1 within phase
}
```

---

## Coordinate Systems

### 1. Percentage System (Event Definition)
```typescript
event.position = { x: 50, y: 50 }  // 50% from left, 50% from top
```

### 2. ViewBox Pixel System (SVG Canvas)
```svg
<svg viewBox="0 0 800 600">
  <!-- All coordinates in pixels within 800x600 space -->
</svg>
```

### 3. Conversion (percentToPixels helper)
```typescript
const pos = percentToPixels(50, 50, { width: 800, height: 600 });
// Result: { x: 400, y: 300 }
```

### 4. Browser Scaling (Automatic)
```
SVG automatically scales viewBox to fit container:
- Container 400px wide → scale 0.5x
- Container 1600px wide → scale 2x
```

---

## Animation States

### Phase Lifecycle
```
HIDDEN (opacity=0, visible=false)
  ↓ (currentTime >= startTime)
ENTERING (opacity: 0→1, transform: entry animation)
  ↓ (animation complete)
VISIBLE (opacity=1, transform="")
  ↓ (currentTime >= endTime)
EXITING (opacity: 1→0, transform: exit animation)
  ↓ (animation complete)
EXITED (opacity=0, visible=false)
```

### Animation Types & Transforms

| Animation | Transform String Example |
|-----------|-------------------------|
| **Fade** | `""` (opacity only) |
| **Scale** | `"scale(0.5)"` |
| **Slide Right** | `"translateX(-50px)"` |
| **Slide Up** | `"translateY(50px)"` |
| **Wipe Horizontal** | `"scaleX(0)"` |
| **Wipe Vertical** | `"scaleY(0)"` |

---

## Transform-Box Critical Fix

### The Problem
```css
/* BAD: Chrome defaults to view-box */
transform-origin: center;
/* Element scales from SVG origin (0,0) instead of element center */
```

### The Solution
```css
/* GOOD: Explicitly set fill-box */
transform-origin: center;
transform-box: fill-box;  /* Use element's bounding box */
/* Element scales from its own center ✓ */
```

### Visual Example
```
Without transform-box: fill-box:
┌─────────────────────────────┐ SVG viewBox
│                             │
│  ●────────────────────○ Element scales
│ (0,0)                from here (wrong!)
│
│         ●  Element should scale
│         from here (center)

With transform-box: fill-box:
┌─────────────────────────────┐ SVG viewBox
│                             │
│         ┌─────┐             │
│         │  ●  │ Element     │ Element scales
│         └─────┘ scales      │ from its center ✓
│         from here (center)  │
```

---

## Integration Checklist

- [ ] Agent 2 provides `layerStates[]` with correct structure
- [ ] Agent 1 passes `layerStates` to SVGCanvas
- [ ] Canvas dimensions match image natural size
- [ ] All timeline events have unique IDs
- [ ] LayerState IDs match TimelineEvent IDs
- [ ] Opacity values are 0-1 (not 0-100)
- [ ] Transform strings are valid CSS
- [ ] Poppins font is loaded in page CSS
- [ ] Test in Chrome (transform-box fix)
- [ ] Test responsive scaling
- [ ] Test with screen reader

---

## Performance Notes

### Rendering Strategy
- **Visibility filtering**: Only visible elements are rendered
- **React keys**: Each element has unique key (event.id)
- **Minimal re-renders**: Only updates when layerStates change
- **No RAF loops**: Pure declarative rendering

### Expected Performance
- **< 20 elements**: Smooth 60fps (typical use case)
- **20-50 elements**: Smooth 60fps with occasional drops
- **50-100 elements**: 30-60fps (acceptable)
- **> 100 elements**: Consider virtualization or canvas fallback

### Optimization Opportunities
1. **Memoization**: Wrap element renderers in React.memo()
2. **Batch updates**: Group layerState changes
3. **CSS animations**: Use CSS transitions instead of JS for simple fades
4. **Lazy rendering**: Only render elements near viewport (future)

---

## Debugging Tools

### Chrome DevTools
```javascript
// Inspect SVG DOM
document.querySelector('.timeline-svg-canvas')

// Check current transforms
const circle = document.querySelector('circle');
console.log(window.getComputedStyle(circle).transform);

// Check opacity
console.log(window.getComputedStyle(circle).opacity);
```

### React DevTools
```
<SVGCanvas>
  ├── <svg>
  │   ├── <image> (background)
  │   ├── <circle key="event-1"> opacity={0.5} transform="scale(0.8)"
  │   └── <text key="event-2"> opacity={1} transform=""
```

### Console Logging
```typescript
// In SVGCanvas
console.log('Rendering', layerStates.filter(s => s.visible).length, 'visible elements');

// In SVGElement
console.log('Element', event.id, 'phase:', layerState.phase, 'opacity:', layerState.opacity);
```

---

## Quick Reference

### Import Pattern
```tsx
import { SVGCanvas } from './components/svg';
```

### Basic Usage
```tsx
<SVGCanvas
  imageUrl={imageUrl}
  timelineEvents={timelineEvents}
  layerStates={layerStates}
  canvasDimensions={{ width: 800, height: 600 }}
/>
```

### Adding New Element Type
1. Create new renderer: `svg/SVGNewType.tsx`
2. Export from `svg/index.ts`
3. Add case to `SVGElement.tsx` router
4. Add type to `types.ts` ElementType union

---

**End of Component Hierarchy Documentation**
