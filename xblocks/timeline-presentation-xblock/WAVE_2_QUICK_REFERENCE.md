# Wave 2: Konva Rendering - Quick Reference

## File Structure

```
frontend/src/student-ui/
├── components/
│   └── TimelineKonvaElement.tsx    ← NEW: Konva element renderer
├── DiagramCanvas.tsx                ← MODIFIED: Now uses Konva Stage
├── TimelineElement.tsx              ← LEGACY: CSS-based (kept for reference)
├── StudentView.tsx                  ← No changes
├── TimelinePlayer.tsx               ← No changes
└── styles/
    └── minimal-paragon.scss         ← MODIFIED: Removed CSS animations
```

## Component Hierarchy

```
DiagramCanvas
└── <Stage width={W} height={H}>
    ├── <Layer> ← Background
    │   └── <KonvaImage image={bg} />
    └── <Layer> ← Elements
        └── <TimelineKonvaElement> (for each active element)
            ├── <AnimatedText>      (if elementType === 'text')
            ├── <AnimatedCircle>    (if shapeType === 'circle')
            ├── <AnimatedRect>      (if shapeType === 'rectangle')
            ├── <AnimatedLine>      (if elementType === 'line')
            └── <AnimatedArrow>     (if elementType === 'arrow')
```

## Animation Types

### 1. Fade
```typescript
opacity: isVisible ? 1 : 0
```

### 2. Scale
```typescript
opacity: isVisible ? 1 : 0,
scaleX: isVisible ? 1 : 0.01,
scaleY: isVisible ? 1 : 0.01
```

### 3. Slide
```typescript
opacity: isVisible ? 1 : 0,
offsetX: isVisible ? 0 : xOffset,  // Based on direction
offsetY: isVisible ? 0 : yOffset   // Based on direction
```

**Directions:**
- `right`: Slides from left (-50px when hidden)
- `left`: Slides from right (+50px when hidden)
- `down`: Slides from top (-50px when hidden)
- `up`: Slides from bottom (+50px when hidden)

## Coordinate System

### Percentage to Pixels
```typescript
const percentToPixels = (x: number, y: number) => ({
  x: (x / 100) * stageDimensions.width,
  y: (y / 100) * stageDimensions.height,
});
```

### Stage Dimensions
Automatically set from background image:
```typescript
setStageDimensions({
  width: img.width,
  height: img.height,
});
```

## Element Rendering Details

### Text
```typescript
<AnimatedText
  x={pos.x}
  y={pos.y}
  text={event.content}
  fontSize={event.fontSize || event.dimensions?.height || 16}
  fill={event.color || '#333F48'}
  fontFamily="Poppins, sans-serif"
  offsetY={fontSize / 2}  // Center vertically
/>
```

### Circle
```typescript
const diameter = event.dimensions?.width || 50;  // Percentage
const radiusPixels = ((diameter / 100) * stageDimensions.width) / 2;

<AnimatedCircle
  x={pos.x}
  y={pos.y}
  radius={radiusPixels}
  fill={event.color || '#00A689'}
/>
```

### Rectangle
```typescript
const width = ((event.dimensions?.width || 100) / 100) * stageDimensions.width;
const height = ((event.dimensions?.height || 50) / 100) * stageDimensions.height;

<AnimatedRect
  x={pos.x}
  y={pos.y}
  width={width}
  height={height}
  offsetX={width / 2}   // Center horizontally
  offsetY={height / 2}  // Center vertically
  fill={event.color || '#00A689'}
  cornerRadius={4}
/>
```

### Line
```typescript
const start = percentToPixels(coords.x1, coords.y1);
const end = percentToPixels(coords.x2, coords.y2);

<AnimatedLine
  points={[start.x, start.y, end.x, end.y]}
  stroke={event.color || '#212b58'}
  strokeWidth={event.thickness || 2}
/>
```

### Arrow
```typescript
const start = percentToPixels(coords.x1, coords.y1);
const end = percentToPixels(coords.x2, coords.y2);

<AnimatedArrow
  points={[start.x, start.y, end.x, end.y]}
  stroke={event.color || '#212b58'}
  strokeWidth={event.thickness || 2}
  fill={event.color || '#212b58'}
  pointerLength={10}
  pointerWidth={10}
/>
```

## React Spring Configuration

```typescript
const springProps = useSpring({
  ...getAnimationProps(),
  config: { duration: animationDuration },
});

// Then spread into component:
<AnimatedText {...springProps} />
```

## TimelineEvent Type Reference

```typescript
interface TimelineEvent {
  id: string;
  timestamp: number;
  elementType: 'text' | 'shape' | 'line' | 'arrow';
  animation: 'fade' | 'scale' | 'slide' | 'show';
  animationDirection?: 'up' | 'down' | 'left' | 'right';
  animationDuration: number;

  position: { x: number; y: number };  // Percentage (0-100)
  dimensions?: { width?: number; height?: number };  // Percentage

  content?: string;           // For text
  shapeType?: 'circle' | 'rectangle' | 'triangle';
  color?: string;             // CSS color or hex
  fontSize?: number;          // Pixels
  thickness?: number;         // Pixels

  lineCoordinates?: {         // For line/arrow
    x1: number;  // Percentage
    y1: number;
    x2: number;
    y2: number;
  };
}
```

## CSS Classes (Still Used)

### Container Styles
```scss
.timeline-diagram-canvas          // Main container
.timeline-diagram-stage-container // Konva stage wrapper
.timeline-diagram-stage           // Konva stage element
```

### Loading/Error States
```scss
.timeline-diagram-loading         // Loading state
.timeline-diagram-loading-spinner
.timeline-diagram-error           // Error state
.timeline-diagram-debug           // Debug info (dev only)
```

### Responsive
```scss
@media (max-width: 768px) {
  .timeline-diagram-stage-container canvas {
    max-height: 400px;
  }
}
```

## Debugging

### Development Console
```typescript
if (process.env.NODE_ENV === 'development') {
  console.log('Element rendering:', event.id, event.elementType);
}
```

### Debug Panel (Rendered in Development)
Shows:
- Active elements count
- Stage dimensions (width x height)

## Common Issues & Solutions

### Issue: Elements not visible
**Check:**
1. `isVisible` prop is true
2. `stageDimensions` is set correctly
3. `event.position` is within 0-100 range
4. Background image loaded successfully

### Issue: Animations not working
**Check:**
1. `animationDuration` > 0
2. `@react-spring/konva` is imported correctly
3. Using `animated` components (not plain Konva components)

### Issue: Arrows pointing wrong direction
**Solution:** Use `lineCoordinates.x1/y1` as start, `x2/y2` as end
(Not animationDirection - that's for slide animation)

### Issue: Text not centered
**Solution:** Text uses `offsetY` for vertical centering
Horizontal centering is automatic based on text width

### Issue: Stage too large on mobile
**Solution:** CSS handles responsive scaling:
```scss
.timeline-diagram-stage-container canvas {
  width: 100% !important;
  height: auto !important;
}
```

## Build & Deploy

```bash
# 1. Make changes to TimelineKonvaElement.tsx
# 2. Build
cd frontend
npm run build

# 3. Deploy
cd ..
./deploy-dev.sh

# 4. Wait 60 seconds for restart
# 5. Test at http://apps.local.openedx.io:2000
```

## Testing Checklist

```
□ Background image loads
□ Text elements render at correct position
□ Circle shapes render at correct position
□ Rectangle shapes render at correct position
□ Lines connect correct start/end points
□ Arrows point in correct direction
□ Fade animation smooth (opacity change)
□ Scale animation scales from center
□ Slide animation slides from correct direction
□ Elements sync with audio playback
□ Responsive on mobile (canvas scales)
□ No console errors
```

## Performance Notes

- Konva uses canvas rendering (faster than DOM)
- Each `<Layer>` is a separate canvas
- Background and elements on separate layers for efficiency
- All student view elements have `listening={false}` (no event handling needed)
- React Spring uses requestAnimationFrame for smooth 60fps animations

## Next: Wave 3

Wave 3 will replace the animation engine with GSAP:
- More animation types (elastic, bounce, etc.)
- Better timeline control (seek, speed)
- Professional easing curves
- Audio sync improvements
