# Agent 3: SVG Renderer - Quick Reference Card

## 🚀 5-Minute Integration Guide

### 1. Import
```tsx
import { SVGCanvas } from './components/svg';
```

### 2. Use
```tsx
<SVGCanvas
  imageUrl={imageUrl}
  timelineEvents={timelineEvents}
  layerStates={layerStates}  // From Agent 2
  canvasDimensions={{ width: 800, height: 600 }}
/>
```

### 3. Done!
The SVG canvas will automatically:
- Scale to fit container
- Render visible elements
- Apply opacity + transforms from layerStates
- Handle all animations

---

## 🔑 Critical Pattern: Transform-Box

**ALWAYS include this CSS on animated SVG elements:**

```tsx
style={{
  transformOrigin: 'center',
  transformBox: 'fill-box',  // Critical for Chrome!
}}
```

**Why?** Without `transform-box: fill-box`, Chrome defaults to `view-box`, causing transforms to use the entire SVG as the origin instead of the element's center. This breaks scale/rotate animations.

---

## 📊 LayerState Interface

```typescript
interface LayerState {
  id: string;           // Must match TimelineEvent.id
  phase: TimelinePhase; // hidden|entering|visible|exiting|exited
  opacity: number;      // 0-1
  transform: string;    // CSS transform string
  visible: boolean;     // Render or skip
  progress: number;     // 0-1 within phase
}
```

### Transform String Examples

```typescript
// Fade (opacity only)
transform: ""

// Scale from center
transform: "scale(0.5)"

// Slide right (enter from left)
transform: "translateX(-50px)"

// Slide down (enter from top)
transform: "translateY(-50px)"

// Wipe horizontal
transform: "scaleX(0)"

// Wipe vertical
transform: "scaleY(0)"

// Combined
transform: "translateX(20px) scale(1.2) rotate(45deg)"
```

---

## 🎨 Component Map

| Timeline Event Type | Renderer Component | SVG Element |
|---------------------|-------------------|-------------|
| `elementType: 'shape', shapeType: 'circle'` | SVGCircle | `<circle>` |
| `elementType: 'shape', shapeType: 'rectangle'` | SVGRectangle | `<rect>` |
| `elementType: 'line'` | SVGLine | `<line>` |
| `elementType: 'arrow'` | SVGArrow | `<g><line><polygon>` |
| `elementType: 'text'` | SVGText | `<text>` |

---

## 📐 Coordinate Conversion

### Percentage → Pixels
```typescript
import { percentToPixels } from './components/svg';

const pos = percentToPixels(50, 50, { width: 800, height: 600 });
// Result: { x: 400, y: 300 }
```

### ViewBox Magic
```tsx
<svg viewBox="0 0 800 600" style={{ width: '100%' }}>
  {/* Everything automatically scales! */}
  <circle cx="400" cy="300" r="50" />
</svg>
```

The viewBox defines a coordinate system (800×600), and SVG automatically scales it to fit the container. No manual calculations!

---

## 🐛 Debugging Checklist

### If transforms look wrong:
- [ ] Check `transform-box: fill-box` is set
- [ ] Check `transform-origin: center` is set
- [ ] Test in Chrome (most strict about transform-box)
- [ ] Verify transform string is valid CSS

### If elements don't appear:
- [ ] Check `layerState.visible` is true
- [ ] Check `layerState.opacity` > 0
- [ ] Check element ID matches LayerState ID
- [ ] Check canvasDimensions are correct

### If scaling is wrong:
- [ ] Check viewBox matches canvasDimensions
- [ ] Check percentToPixels uses correct dimensions
- [ ] Verify event.position is in percentage (0-100)

### If animations are jerky:
- [ ] Check layerStates are updating smoothly
- [ ] Verify no unnecessary re-renders
- [ ] Consider adding React.memo() to renderers

---

## 🎯 Animation Phase States

```
HIDDEN (before start)
  ↓
ENTERING (entry animation)
  ↓
VISIBLE (fully visible)
  ↓
EXITING (exit animation)
  ↓
EXITED (after end)
```

### Typical LayerState Values

```typescript
// HIDDEN
{ opacity: 0, transform: "scale(0)", visible: false }

// ENTERING (fade + scale)
{ opacity: 0.5, transform: "scale(0.8)", visible: true }

// VISIBLE
{ opacity: 1, transform: "", visible: true }

// EXITING (fade + scale)
{ opacity: 0.5, transform: "scale(0.8)", visible: true }

// EXITED
{ opacity: 0, transform: "scale(0)", visible: false }
```

---

## 📦 File Structure

```
frontend/src/student-ui/
└── components/
    ├── SVGCanvas.tsx         ← Main component
    └── svg/
        ├── index.ts          ← Barrel export
        ├── SVGElement.tsx    ← Router
        ├── SVGCircle.tsx     ← Circle renderer
        ├── SVGRectangle.tsx  ← Rectangle renderer
        ├── SVGLine.tsx       ← Line renderer
        ├── SVGArrow.tsx      ← Arrow renderer
        └── SVGText.tsx       ← Text renderer
```

---

## 🔧 Adding New Element Type

### 1. Create Renderer
```tsx
// svg/SVGNewType.tsx
export const SVGNewType: React.FC<Props> = ({ event, layerState, canvasDimensions }) => {
  const pos = percentToPixels(event.position.x, event.position.y, canvasDimensions);

  return (
    <newElement
      // ... positioning
      opacity={layerState.opacity}
      transform={layerState.transform}
      style={{
        transformOrigin: 'center',
        transformBox: 'fill-box',
      }}
    />
  );
};
```

### 2. Export
```tsx
// svg/index.ts
export { SVGNewType } from './SVGNewType';
```

### 3. Route
```tsx
// svg/SVGElement.tsx
case 'newtype':
  return <SVGNewType event={event} layerState={layerState} canvasDimensions={canvasDimensions} />;
```

### 4. Add Type
```typescript
// types.ts
export type ElementType = 'text' | 'shape' | 'line' | 'arrow' | 'newtype';
```

---

## 🎨 Styling Reference

### Default Colors
```typescript
Circle/Rectangle: '#00A689' (teal)
Line/Arrow: '#212b58' (dark blue)
Text: '#333F48' (dark gray)
```

### Font
```css
font-family: "Poppins, sans-serif"
```

Make sure Poppins is loaded in your page CSS!

### Transitions
```css
transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out
```

Smooth interpolation between states.

---

## 📊 Performance Tips

### Optimize for 60fps
1. Keep element count < 50
2. Batch layerState updates
3. Use React.memo() on renderers
4. Avoid unnecessary re-renders

### Profile with DevTools
```javascript
// Chrome DevTools → Performance
// Record timeline while playing
// Look for:
// - Long frames (> 16.67ms)
// - Excessive re-renders
// - Layout thrashing
```

---

## 🧪 Testing Commands

### Visual Inspection
```bash
# Run dev server
npm run dev

# Test in Chrome, Firefox, Safari
# Verify:
# - Elements appear centered
# - Animations are smooth
# - Scaling is responsive
```

### TypeScript Check
```bash
npm run build
# Should compile without errors
```

### Browser Tests
```javascript
// Chrome DevTools Console
document.querySelector('.timeline-svg-canvas')
document.querySelectorAll('circle, rect, line, text')
```

---

## 🎯 Common Patterns

### Fade Animation
```typescript
layerState = {
  opacity: 0.5,        // 0 → 1 during entering
  transform: "",       // No transform needed
  visible: true,
}
```

### Scale Animation
```typescript
layerState = {
  opacity: 1,
  transform: "scale(0.5)",  // 0 → 1 during entering
  visible: true,
}
```

### Slide Animation
```typescript
layerState = {
  opacity: 1,
  transform: "translateX(-50px)",  // -50 → 0 during entering
  visible: true,
}
```

### Wipe Animation
```typescript
layerState = {
  opacity: 1,
  transform: "scaleX(0)",  // 0 → 1 during entering
  visible: true,
}
```

---

## 🔗 Useful Links

- [MDN: SVG transform-box](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box)
- [MDN: SVG viewBox](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
- [MDN: SVG Transforms](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
- [React SVG Guide](https://react.dev/learn/rendering-lists#rendering-data-from-arrays)

---

## 💡 Pro Tips

1. **Always test in Chrome** - It's strictest about transform-box
2. **Use viewBox** - Don't fight SVG scaling, embrace it
3. **Percentage coordinates** - Keep event definitions resolution-independent
4. **Batch updates** - Group layerState changes for performance
5. **Profile first** - Only optimize if you have actual performance issues

---

## ✅ Integration Checklist

- [ ] Import SVGCanvas
- [ ] Get layerStates from Agent 2
- [ ] Pass layerStates to SVGCanvas
- [ ] Verify canvasDimensions match image size
- [ ] Test transform-box in Chrome
- [ ] Test responsive scaling
- [ ] Test all animation types
- [ ] Test accessibility
- [ ] Remove Konva dependencies
- [ ] Update package.json

---

**That's it! You're ready to use Agent 3's SVG renderer. 🚀**

**Questions? Check the comprehensive docs:**
- `AGENT_3_SVG_RENDERER_IMPLEMENTATION.md`
- `AGENT_3_COMPONENT_HIERARCHY.md`
- `AGENT_3_IMPLEMENTATION_SUMMARY.md`
