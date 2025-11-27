# Konva Quick Reference

## Why Canvas Rendering is Different

### DOM (Retained Mode)
```javascript
// Browser remembers and manages everything
element.style.left = '100px';
// Browser automatically redraws just this element
```

### Canvas (Immediate Mode)
```javascript
// Canvas forgets everything after drawing
context.clearRect(0, 0, width, height);
drawEverything();  // Must redraw ALL shapes every frame
```

**Konva's Solution:** Virtual node tree (like DOM) + efficient canvas rendering

---

## Animation Methods

### 1. Tween (Simple Transitions)

```javascript
// Long form
const tween = new Konva.Tween({
  node: shape,
  duration: 1,
  x: 200,
  rotation: 360,
  easing: Konva.Easings.EaseInOut
});
tween.play();

// Short form (recommended)
shape.to({
  duration: 1,
  x: 200,
  rotation: 360,
  easing: Konva.Easings.EaseInOut
});
```

**Use when:** Animating between defined start/end states

### 2. Animation (Continuous/Complex)

```javascript
const anim = new Konva.Animation((frame) => {
  // frame.time, frame.timeDiff, frame.frameRate
  shape.x(100 + Math.sin(frame.time * 0.001) * 50);
}, layer);

anim.start();
// Later: anim.stop();
```

**Use when:** Continuous animations, physics, particle effects

### 3. React + Konva Animations

```javascript
// ✅ GOOD: Konva animation (bypasses React)
const ref = useRef();

useEffect(() => {
  const node = ref.current;
  const anim = new Konva.Animation((frame) => {
    node.rotation(node.rotation() + 1);
  }, node.getLayer());

  anim.start();
  return () => anim.stop();  // Always cleanup!
}, []);

return <Circle ref={ref} x={100} y={100} radius={50} />;

// ❌ BAD: React state updates every frame
const [rotation, setRotation] = useState(0);

useEffect(() => {
  function animate() {
    setRotation(r => r + 1);  // Re-renders React!
    requestAnimationFrame(animate);
  }
  animate();
}, []);

return <Circle rotation={rotation} x={100} y={100} radius={50} />;
```

---

## Transformations Cheat Sheet

### Position vs Offset

```javascript
// position (x, y) = where shape appears on canvas
circle.x(100);
circle.y(150);

// offset = origin point for rotation/scale
rect.offsetX(rect.width() / 2);   // Rotate around center
rect.offsetY(rect.height() / 2);

// ⚠️ Changing offset moves the shape visually!
// Must compensate position:
rect.x(rect.x() + rect.width() / 2);
rect.y(rect.y() + rect.height() / 2);
```

### Default Origins by Shape

```javascript
// Circle, Ellipse, Star: origin = CENTER
circle.x(100);  // Center at (100, 100)

// Rect, Text, Image: origin = TOP-LEFT
rect.x(100);    // Top-left at (100, 100)

// To rotate rect around center:
rect.offsetX(rect.width() / 2);
rect.offsetY(rect.height() / 2);
```

### Complete Transformation Example

```javascript
const shape = new Konva.Rect({
  // Where it appears
  x: 200,
  y: 150,

  // Size
  width: 100,
  height: 60,

  // Origin (rotation/scale point)
  offsetX: 50,   // width / 2 → rotate around center
  offsetY: 30,   // height / 2

  // Transformations
  rotation: 30,   // degrees (not radians!)
  scaleX: 1.5,
  scaleY: 1.2,

  // Style
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2
});
```

---

## Common Shapes

### Circle
```javascript
const circle = new Konva.Circle({
  x: 100,           // Center X
  y: 100,           // Center Y
  radius: 50,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2
});
```

### Rectangle
```javascript
const rect = new Konva.Rect({
  x: 50,            // Top-left X
  y: 50,            // Top-left Y
  width: 100,
  height: 60,
  fill: 'blue',
  cornerRadius: 10  // Rounded corners
});
```

### Line
```javascript
const line = new Konva.Line({
  points: [0, 0, 100, 50, 200, 0],  // [x1,y1, x2,y2, x3,y3, ...]
  stroke: 'black',
  strokeWidth: 2,
  lineCap: 'round',    // butt, round, square
  lineJoin: 'round',   // miter, round, bevel
  dash: [10, 5],       // 10px dash, 5px gap
  dashOffset: 0        // For animation
});
```

### Text
```javascript
const text = new Konva.Text({
  x: 50,
  y: 50,
  text: 'Hello World',
  fontSize: 24,
  fontFamily: 'Arial',
  fill: 'black',
  align: 'center',           // left, center, right
  verticalAlign: 'middle',   // top, middle, bottom
  width: 200,                // wrap width
  wrap: 'word'               // none, char, word
});
```

### Arrow
```javascript
const arrow = new Konva.Arrow({
  points: [0, 0, 100, 100],
  pointerLength: 10,
  pointerWidth: 10,
  fill: 'black',
  stroke: 'black',
  strokeWidth: 2
});
```

---

## Line Drawing Animation

```javascript
const line = new Konva.Line({
  points: [0, 0, 100, 0, 100, 100, 200, 100],
  stroke: 'black',
  strokeWidth: 3
});

// Get line length
const length = line.getLength();

// Hide line initially
line.dash([length]);
line.dashOffset(length);

// Animate to "draw" the line
line.to({
  dashOffset: 0,
  duration: 2,
  easing: Konva.Easings.EaseInOut
});
```

---

## React-Konva Essentials

### Basic Structure

```javascript
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';

function App() {
  return (
    <Stage width={800} height={600}>
      <Layer>
        <Circle x={100} y={100} radius={50} fill="red" />
        <Rect x={200} y={50} width={100} height={100} fill="blue" />
      </Layer>
    </Stage>
  );
}
```

### Using Refs for Direct Access

```javascript
const circleRef = useRef();

const handleClick = () => {
  const node = circleRef.current;
  node.to({ x: 200, duration: 1 });
};

return (
  <Circle
    ref={circleRef}
    x={100}
    y={100}
    radius={50}
    fill="red"
    onClick={handleClick}
  />
);
```

### Performance: React.memo

```javascript
const Shape = React.memo(({ x, y, color }) => {
  return <Circle x={x} y={y} radius={10} fill={color} />;
}, (prevProps, nextProps) => {
  // Only re-render if props changed
  return (
    prevProps.x === nextProps.x &&
    prevProps.y === nextProps.y &&
    prevProps.color === nextProps.color
  );
});
```

### Separate Static/Dynamic Layers

```javascript
<Stage width={800} height={600}>
  {/* Static layer (never redraws) */}
  <Layer listening={false}>
    <Rect width={800} height={600} fill="#f0f0f0" />
    <Text text="Static Title" fontSize={24} />
  </Layer>

  {/* Dynamic layer (interactive) */}
  <Layer>
    {shapes.map(shape => (
      <Circle key={shape.id} {...shape} draggable />
    ))}
  </Layer>
</Stage>
```

---

## Performance Optimization

### When Canvas Redraws (Konva v8+)

Automatic redraws on:
- Shape property changes
- Node added/removed
- Drag operations
- Tween/Animation updates

Konva auto-batches multiple changes into one redraw.

### Shape Caching

```javascript
const star = new Konva.Star({
  numPoints: 20,
  innerRadius: 20,
  outerRadius: 50,
  fill: 'yellow'
});

// Cache complex shape
star.cache();

// Now transformations are fast (just moves cached image)
star.rotation(45);
```

**When to cache:**
- Complex shapes (many points, curves)
- Shapes with filters/shadows
- Shapes that animate position/rotation but not appearance

**Don't cache:**
- Simple shapes (Circle, Rect)
- Frequently changing appearance
- Changing text

### Disable Unnecessary Features

```javascript
const shape = new Konva.Circle({
  x: 100,
  y: 100,
  radius: 50,
  fill: 'red',
  listening: false,              // No events
  perfectDrawEnabled: false,     // Faster with fill + stroke + opacity
  shadowForStrokeEnabled: false, // Don't draw shadow twice
  hitStrokeWidth: 0              // No stroke on hit canvas
});
```

### Animate Groups, Not Individual Shapes

```javascript
// ❌ BAD: Animating 1000 shapes
shapes.forEach(shape => {
  shape.to({ rotation: 360, duration: 2 });
});

// ✅ GOOD: Animate the parent group
const group = new Konva.Group();
shapes.forEach(shape => group.add(shape));
group.to({ rotation: 360, duration: 2 });
```

### Use batchDraw for High-Frequency Events

```javascript
// For mousemove, resize, etc.
window.addEventListener('mousemove', (e) => {
  shape.x(e.clientX);
  shape.y(e.clientY);
  layer.batchDraw();  // Limits to ~60fps
});
```

---

## Common Pitfalls

### 1. Forgetting to Clean Up Animations

```javascript
// ❌ BAD
useEffect(() => {
  const anim = new Konva.Animation(...);
  anim.start();
}, []);

// ✅ GOOD
useEffect(() => {
  const anim = new Konva.Animation(...);
  anim.start();
  return () => anim.stop();  // Cleanup!
}, []);
```

### 2. Creating Objects in Animation Loop

```javascript
// ❌ BAD
const anim = new Konva.Animation((frame) => {
  const pos = { x: 100, y: 200 };  // New object every frame!
  shape.position(pos);
}, layer);

// ✅ GOOD
const anim = new Konva.Animation((frame) => {
  shape.x(100);
  shape.y(200);
}, layer);
```

### 3. Font Loading

```javascript
// ❌ BAD: Font might not be loaded
const text = new Konva.Text({
  fontFamily: 'CustomFont',
  text: 'Hello'
});
layer.add(text);

// ✅ GOOD: Wait for font
const font = new FontFaceObserver('CustomFont');
font.load().then(() => {
  const text = new Konva.Text({
    fontFamily: 'CustomFont',
    text: 'Hello'
  });
  layer.add(text);
  layer.draw();
});
```

### 4. Not Compensating for Offset Changes

```javascript
// ❌ BAD: Shape moves when you change offset
rect.offsetX(rect.width() / 2);
rect.offsetY(rect.height() / 2);

// ✅ GOOD: Adjust position too
rect.offsetX(rect.width() / 2);
rect.offsetY(rect.height() / 2);
rect.x(rect.x() + rect.width() / 2);   // Compensate
rect.y(rect.y() + rect.height() / 2);
```

---

## Debugging

### Check FPS

```javascript
const anim = new Konva.Animation((frame) => {
  console.log('FPS:', frame.frameRate);
}, layer);
```

### Measure Draw Time

```javascript
const start = performance.now();
layer.draw();
const elapsed = performance.now() - start;
console.log('Draw time:', elapsed, 'ms');
```

**Target:** < 16.67ms per frame for 60 FPS

---

## Resources

- [Konva Documentation](https://konvajs.org/docs/)
- [react-konva GitHub](https://github.com/konvajs/react-konva)
- [Performance Tips](https://konvajs.org/docs/performance/All_Performance_Tips.html)
