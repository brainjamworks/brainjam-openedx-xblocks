# Konva Architecture & Canvas Rendering: Comprehensive Guide

## Table of Contents
1. [Core Architecture](#core-architecture)
2. [Canvas vs DOM Rendering](#canvas-vs-dom-rendering)
3. [Animation Approaches](#animation-approaches)
4. [Transformations & Positioning](#transformations--positioning)
5. [Shape Rendering](#shape-rendering)
6. [React Integration](#react-integration)
7. [Performance Best Practices](#performance-best-practices)

---

## Core Architecture

### Stage/Layer/Shape Hierarchy

Konva organizes content using a virtual node structure similar to DOM trees:

```
Stage (top-level canvas container)
├── Layer (separate canvas element)
│   ├── Group (organizational container)
│   │   ├── Shape (Circle, Rect, Text, etc.)
│   │   └── Shape
│   └── Shape
└── Layer
    └── Shape
```

**Key Concepts:**

- **Stage**: The top-level container that holds all layers
- **Layer**: Each layer is a separate `<canvas>` element with its own rendering context
- **Group**: Organizational container for shapes (not a separate canvas)
- **Shape**: Individual drawable elements (Circle, Rect, Line, Text, etc.)

### Dual-Canvas Architecture

Each Konva layer employs **two canvas elements**:

1. **Scene Renderer**: The visible canvas that displays graphics to users
2. **Hit Graph Renderer**: An invisible canvas used for high-performance event detection

This architecture enables efficient mouse/touch interaction without complex computational checks. When you click on the canvas, Konva queries the invisible hit canvas to determine which shape was clicked.

**Why This Matters:**
- Event detection is O(1) instead of O(n) where n = number of shapes
- No need to iterate through shapes or perform geometric collision detection
- Dramatically improves performance with many interactive elements

---

## Canvas vs DOM Rendering

Understanding the fundamental difference between canvas and DOM is critical for effective Konva usage.

### Retained Mode (DOM) vs Immediate Mode (Canvas)

| Aspect | DOM (Retained Mode) | Canvas (Immediate Mode) |
|--------|-------------------|------------------------|
| **State Management** | Browser maintains element state | You must track all state manually |
| **Rendering** | Browser automatically redraws when properties change | You must explicitly redraw everything |
| **Memory** | Each element is a complex object consuming significant memory | Pixels in memory; minimal per-element overhead |
| **Performance** | Degrades with many elements (100s-1000s) | Maintains performance with thousands of elements |
| **Interactivity** | Built-in event handling, CSS, accessibility | Manual hit detection and event management |
| **Redraws** | Browser optimizes; only changed elements update | Entire canvas (or layer) redraws on changes |

### Why Canvas Requires Different Animation Approaches

**DOM Animations:**
```javascript
// DOM: Just update properties; browser handles the rest
element.style.left = newX + 'px';
element.style.top = newY + 'px';
// Browser automatically redraws only this element
```

**Canvas Animations:**
```javascript
// Canvas: Must manually redraw everything
context.clearRect(0, 0, width, height);  // Clear canvas
drawAllShapes();  // Redraw ALL shapes
// Even unchanged shapes must be redrawn
```

**The Core Problem:**

Canvas is **stateless**. When you draw a circle at position (100, 100), the canvas doesn't remember "there's a circle at 100, 100." It just has pixels at those coordinates. To move the circle:

1. Clear the canvas (or region)
2. Redraw all shapes in their new positions
3. This happens 60 times per second for smooth animation

**Konva's Solution:**

Konva creates a virtual node tree (like a DOM) that maintains state, then efficiently translates that state to canvas drawing operations. This gives you DOM-like convenience with canvas performance.

### Performance Characteristics

**When Canvas Excels:**
- Many animated elements (100+)
- Particle systems, data visualizations
- Games with fast-moving objects
- Pixel manipulation effects

**When DOM Excels:**
- Few elements (< 50)
- Text-heavy content requiring accessibility
- Standard UI components
- Need for CSS styling and browser layout

**Memory Trade-off:**
- DOM: Each element = ~1KB+ (complex objects with properties, methods, event listeners)
- Canvas: Entire canvas = width × height × 4 bytes (RGBA pixels)
- Example: 1000 DOM elements ≈ 1MB, Canvas with 1000 shapes ≈ depends on canvas size, not shape count

---

## Animation Approaches

Konva provides three primary animation methods, each suited for different use cases.

### 1. Konva.Tween (Property Transitions)

**Use When:**
- Animating between defined start and end states
- Simple property transitions (position, rotation, scale, opacity)
- You want easing functions (ease-in, ease-out, etc.)

**How It Works:**
```javascript
const tween = new Konva.Tween({
  node: circle,           // Target shape
  duration: 1,            // Duration in seconds
  x: 200,                 // End position
  y: 150,
  rotation: 360,          // End rotation (degrees)
  opacity: 0.5,           // End opacity
  easing: Konva.Easings.EaseInOut,
  onFinish: () => {
    console.log('Animation complete');
  }
});

tween.play();
```

**Simplified Version (node.to()):**
```javascript
// Equivalent to above, more concise
circle.to({
  duration: 1,
  x: 200,
  y: 150,
  rotation: 360,
  opacity: 0.5,
  easing: Konva.Easings.EaseInOut,
  onFinish: () => {
    console.log('Animation complete');
  }
});
```

**Available Easing Functions:**
- `Konva.Easings.Linear`
- `Konva.Easings.EaseIn`
- `Konva.Easings.EaseOut`
- `Konva.Easings.EaseInOut`
- Plus many more (BackEaseIn, ElasticEaseOut, BounceEaseOut, etc.)

**Best Practices:**
- Use `node.to()` for simple animations
- Chain tweens with `onFinish` callbacks for sequences
- Store tween references to pause/reverse later
- Clean up tweens in component unmount (React)

### 2. Konva.Animation (Custom Frame-by-Frame)

**Use When:**
- Continuous animations without predefined end states
- Complex calculations that depend on time
- Physics simulations, particle effects
- Animations that need frame-by-frame control

**How It Works:**
```javascript
const anim = new Konva.Animation((frame) => {
  // frame.time - elapsed time since animation start (ms)
  // frame.timeDiff - time since last frame (ms)
  // frame.lastTime - time of last frame (ms)
  // frame.frameRate - current frame rate

  // Update shape properties based on time
  circle.x(100 + Math.sin(frame.time * 0.001) * 50);
  circle.y(100 + Math.cos(frame.time * 0.001) * 50);

  // Return false to skip redraw for this frame (optimization)
  // return false;
}, layer);  // Specify which layer to redraw

anim.start();

// Later, when done:
anim.stop();
```

**Key Differences from Tween:**
- Runs continuously until stopped (no duration)
- You control the math/physics
- Provides timing information each frame
- Can animate multiple shapes with one Animation instance

**Best Practices:**
- Always call `anim.stop()` when no longer needed (especially in React useEffect cleanup)
- Use `frame.timeDiff` for frame-rate-independent animations
- Return `false` from callback to skip unnecessary redraws
- Consider setting specific layers to redraw (don't redraw all layers if unchanged)

### 3. requestAnimationFrame (Not Recommended)

**Why Konva Wraps It:**

You *could* use raw `requestAnimationFrame`:

```javascript
// Don't do this with Konva
function animate() {
  circle.x(circle.x() + 1);
  layer.draw();  // Manual redraw
  requestAnimationFrame(animate);
}
animate();
```

**Problems:**
- Manual layer redraw management
- No automatic batching (performance issues)
- Doesn't integrate with Konva's rendering optimizations
- Have to manage animation lifecycle yourself

**Konva's Advantage:**

Konva.Animation uses `requestAnimationFrame` internally but adds:
- Automatic layer redraw batching
- Frame timing utilities
- Lifecycle management (start/stop)
- Integration with Konva's performance optimizations

**When to Use Raw RAF:**
Only when you need animations that don't involve Konva shapes (e.g., updating external state that occasionally updates Konva, but not every frame).

### Animation Comparison Summary

| Feature | Tween | Animation | requestAnimationFrame |
|---------|-------|-----------|----------------------|
| **Use Case** | Property transitions | Continuous/complex animations | Not recommended with Konva |
| **Easing** | Built-in | Manual | Manual |
| **End State** | Defined | Continuous | Continuous |
| **Lifecycle** | Auto (duration-based) | Manual (start/stop) | Manual |
| **Complexity** | Simple | Complex | Complex |
| **Integration** | Excellent | Excellent | Poor |

---

## Transformations & Positioning

Understanding Konva's coordinate system and transformations is essential for precise control.

### Position (x, y)

The `x` and `y` properties define **where a node appears on the canvas**:

```javascript
circle.x(100);  // 100px from left edge of canvas
circle.y(150);  // 150px from top edge of canvas
```

**Important Shape-Specific Behavior:**

Different shapes have different default **origins** (reference points):

- **Circle, Ellipse, Star**: Origin is the **center** of the shape
  - `x: 100, y: 100` places the center at (100, 100)

- **Rect, Text, Image**: Origin is the **top-left corner**
  - `x: 100, y: 100` places the top-left corner at (100, 100)

### Offset (offsetX, offsetY)

The `offset` properties **change the origin point** of the shape—the point from which:
1. Drawing starts
2. Rotation occurs
3. Scaling originates

```javascript
// Rectangle: default origin = top-left
const rect = new Konva.Rect({
  x: 100,
  y: 100,
  width: 50,
  height: 50,
  fill: 'red',
  rotation: 45  // Rotates around top-left corner
});

// To rotate around center instead:
rect.offsetX(25);  // width / 2
rect.offsetY(25);  // height / 2
// Now rotation occurs around the center!
```

**Critical Caveat:**

When you change the offset, **the shape appears to move** on the canvas because you've changed where drawing begins. To compensate:

```javascript
// Set offset to center (for rotation)
rect.offsetX(rect.width() / 2);
rect.offsetY(rect.height() / 2);

// Adjust position to compensate
rect.x(rect.x() + rect.width() / 2);
rect.y(rect.y() + rect.height() / 2);

// Now the rectangle appears in the same place,
// but rotates around its center
```

**Visual Explanation:**

```
Without offset:              With offset (center):
┌─────────┐                      ┌─────────┐
│(x,y)    │                      │         │
│    ●────┤ rotation             │    ●(x,y)
│         │ pivot at             │  rotation
│         │ top-left             │  pivot at
└─────────┘                      └center──┘
```

### Rotation

Rotation is specified in **degrees** (not radians):

```javascript
shape.rotation(45);   // 45 degrees clockwise
shape.rotation(-90);  // 90 degrees counter-clockwise
```

**Rotation occurs around the origin point** (affected by offset).

**Animating Rotation:**

```javascript
// Using Tween
shape.to({
  rotation: 360,
  duration: 2,
  easing: Konva.Easings.EaseInOut
});

// Using Animation (continuous spin)
const anim = new Konva.Animation((frame) => {
  shape.rotation(shape.rotation() + 1);  // 1 degree per frame
}, layer);
anim.start();
```

### Scale (scaleX, scaleY)

Scale multiplies the shape's dimensions:

```javascript
shape.scaleX(2);    // Double width
shape.scaleY(0.5);  // Half height
```

**Scaling also occurs from the origin point:**

```javascript
// Without offset: scales from top-left
rect.scaleX(2);  // Grows to the right and down

// With center offset: scales from center
rect.offsetX(rect.width() / 2);
rect.offsetY(rect.height() / 2);
rect.scaleX(2);  // Grows equally in all directions
```

**Performance Note:**

Scale affects rendering performance less than you might think, but:
- Text scaling is slower than pre-calculating font size
- Image scaling can be slow (consider using multiple image resolutions)

### Coordinate System Summary

```javascript
// Complete transformation example
const shape = new Konva.Rect({
  // Position (where it appears)
  x: 200,
  y: 150,

  // Size
  width: 100,
  height: 60,

  // Origin (where rotation/scale occur)
  offsetX: 50,   // width / 2
  offsetY: 30,   // height / 2

  // Transformations (applied from origin)
  rotation: 30,     // degrees
  scaleX: 1.5,
  scaleY: 1.2,

  // Visual properties
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 2
});
```

**Transformation Order:**

Konva applies transformations in this order:
1. Apply offset (change origin)
2. Apply scale
3. Apply rotation
4. Apply position (translate)

---

## Shape Rendering

### How Konva Renders to Canvas

Konva wraps the native 2D canvas context with `Konva.Context`, providing the same API plus Konva-specific enhancements.

**Under the Hood:**

When you create a shape:
1. Konva calculates what needs to be drawn (sceneFunc)
2. Converts shape properties to canvas drawing commands
3. Applies transformations automatically
4. Renders to both scene canvas (visible) and hit canvas (event detection)

**Custom Shapes:**

You can create custom shapes by defining a `sceneFunc`:

```javascript
const customShape = new Konva.Shape({
  x: 100,
  y: 100,
  sceneFunc: (context, shape) => {
    // context = Konva.Context (wraps canvas 2D context)
    // shape = this shape instance

    // Don't handle position/transformations yourself!
    // Konva handles that automatically

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(100, 0);
    context.lineTo(50, 100);
    context.closePath();

    // This applies all stroke/fill/shadow properties automatically
    context.fillStrokeShape(shape);
  },
  fill: 'green',
  stroke: 'black',
  strokeWidth: 2
});
```

**Optional hitFunc:**

For complex shapes or performance, define a custom hit detection region:

```javascript
const customShape = new Konva.Shape({
  sceneFunc: (ctx, shape) => {
    // Complex drawing...
  },
  hitFunc: (ctx, shape) => {
    // Simplified hit region (e.g., bounding box)
    ctx.beginPath();
    ctx.rect(0, 0, shape.width(), shape.height());
    ctx.closePath();
    ctx.fillStrokeShape(shape);
  }
});
```

### Text Rendering

Text is a performance-sensitive shape type:

```javascript
const text = new Konva.Text({
  x: 50,
  y: 50,
  text: 'Hello World',
  fontSize: 24,
  fontFamily: 'Arial',
  fill: 'black',

  // Alignment
  align: 'center',      // horizontal: left, center, right
  verticalAlign: 'middle',  // vertical: top, middle, bottom

  // Wrapping
  width: 200,           // wrap width
  wrap: 'word',         // none, char, word

  // Styling
  fontStyle: 'bold italic',  // normal, bold, italic, bold italic
  textDecoration: 'underline',  // none, underline, line-through

  // Advanced
  letterSpacing: 2,
  lineHeight: 1.5,
  padding: 10
});
```

**Font Loading Critical Issue:**

Canvas doesn't auto-update when fonts load (unlike DOM):

```javascript
// Wrong: Font might not be loaded yet
const text = new Konva.Text({
  fontFamily: 'CustomFont',
  text: 'Hello'
});
layer.add(text);
layer.draw();  // May render with fallback font

// Right: Wait for font to load
const font = new FontFaceObserver('CustomFont');
font.load().then(() => {
  const text = new Konva.Text({
    fontFamily: 'CustomFont',
    text: 'Hello'
  });
  layer.add(text);
  layer.draw();  // Renders with correct font
});
```

**Performance Tips:**
- Caching text is often beneficial (especially with filters/shadows)
- Avoid frequently changing text content (expensive operation)
- For dynamic text, consider updating only when necessary (not every frame)

### Common Shapes

#### Circle
```javascript
const circle = new Konva.Circle({
  x: 100,      // Center X
  y: 100,      // Center Y
  radius: 50,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2
});
```

#### Rectangle
```javascript
const rect = new Konva.Rect({
  x: 50,       // Top-left X
  y: 50,       // Top-left Y
  width: 100,
  height: 60,
  fill: 'blue',
  cornerRadius: 10  // Rounded corners
});
```

#### Line
```javascript
const line = new Konva.Line({
  points: [0, 0, 100, 50, 200, 0],  // [x1, y1, x2, y2, x3, y3, ...]
  stroke: 'black',
  strokeWidth: 2,
  lineCap: 'round',   // butt, round, square
  lineJoin: 'round',  // miter, round, bevel

  // Dashed line
  dash: [10, 5],      // 10px dash, 5px gap
  dashOffset: 0       // Offset for animation
});
```

#### Arrow
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

### Line Animation with dashOffset

A powerful technique for "drawing" line animations:

```javascript
const line = new Konva.Line({
  points: [0, 0, 100, 0, 100, 100, 200, 100],
  stroke: 'black',
  strokeWidth: 3
});

// Get line length
const length = line.getLength();

// Set initial dash to hide line
line.dash([length]);
line.dashOffset(length);

// Animate dashOffset from length to 0 to "draw" the line
line.to({
  dashOffset: 0,
  duration: 2,
  easing: Konva.Easings.EaseInOut
});
```

**How It Works:**
- `dash: [length]` creates a dash pattern where the dash is the entire line length
- `dashOffset: length` offsets the pattern so the visible dash is pushed off-screen
- Animating `dashOffset` to 0 slides the visible dash into view, creating a drawing effect

---

## React Integration

### How react-konva Works

react-konva provides declarative React components that wrap Konva classes:

```javascript
import { Stage, Layer, Circle, Rect, Text } from 'react-konva';

function App() {
  const [x, setX] = useState(50);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle x={x} y={100} radius={50} fill="red" />
        <Rect x={200} y={50} width={100} height={100} fill="blue" />
        <Text x={50} y={200} text="Hello Konva" fontSize={24} />
      </Layer>
    </Stage>
  );
}
```

**Mapping:**
- React props → Konva properties
- React events → Konva events (`onClick`, `onDragEnd`, etc.)
- React lifecycle → Canvas updates

### Component Lifecycle & Canvas Updates

**When Canvas Redraws Occur:**

1. **Props Change:**
   ```javascript
   // x changes from 50 to 100
   <Circle x={x} y={100} radius={50} fill="red" />
   // react-konva detects prop change → updates Konva node → layer.draw()
   ```

2. **Interactive Events:**
   ```javascript
   <Circle
     draggable
     onDragMove={(e) => {
       // Konva updates position → canvas redraws automatically
     }}
   />
   ```

3. **Manual Updates via Refs:**
   ```javascript
   const circleRef = useRef();

   useEffect(() => {
     const node = circleRef.current;
     node.to({ x: 200, duration: 1 });
   }, []);

   return <Circle ref={circleRef} x={50} y={100} radius={50} />;
   ```

### Non-Strict vs Strict Mode

**Non-Strict Mode (Default):**
- Only props that changed in render are updated
- Manual property changes (via refs, drag, etc.) persist
- Better performance for interactive applications

```javascript
// Non-strict: Manual changes persist
const circleRef = useRef();

const handleClick = () => {
  circleRef.current.to({ rotation: 360, duration: 1 });
  // Rotation change persists even if React re-renders
};

return (
  <Circle
    ref={circleRef}
    x={props.x}  // Only x gets reset on re-render
    y={100}
    radius={50}
  />
);
```

**Strict Mode:**
- All props reset to render values on every update
- Ensures canvas matches React state exactly
- Slightly slower, but more predictable

```javascript
import { Stage } from 'react-konva';

<Stage width={500} height={500} strictMode={true}>
  {/* All props will reset to render values */}
</Stage>
```

### Performance Considerations

#### 1. React.memo for Many Elements

Prevent unnecessary re-renders:

```javascript
const Shape = React.memo(({ x, y, color }) => {
  return <Circle x={x} y={y} radius={10} fill={color} />;
}, (prevProps, nextProps) => {
  // Only re-render if props actually changed
  return (
    prevProps.x === nextProps.x &&
    prevProps.y === nextProps.y &&
    prevProps.color === nextProps.color
  );
});

function App() {
  const [shapes] = useState(generateShapes(1000));

  return (
    <Stage width={800} height={600}>
      <Layer>
        {shapes.map(shape => (
          <Shape key={shape.id} {...shape} />
        ))}
      </Layer>
    </Stage>
  );
}
```

#### 2. State Management

For complex apps, use efficient state management:

```javascript
// Zustand example (recommended for performance)
import create from 'zustand';

const useStore = create((set) => ({
  shapes: [],
  updateShape: (id, updates) => set((state) => ({
    shapes: state.shapes.map(s =>
      s.id === id ? { ...s, ...updates } : s
    )
  }))
}));

// Component subscribes to only what it needs
function Shape({ id }) {
  const shape = useStore(state =>
    state.shapes.find(s => s.id === id)
  );

  return <Circle {...shape} />;
}
```

#### 3. Animations in React

**Option A: Use Konva animations via refs (Recommended)**

```javascript
function AnimatedCircle() {
  const circleRef = useRef();

  useEffect(() => {
    const node = circleRef.current;

    // Konva animation (bypasses React rendering)
    const anim = new Konva.Animation((frame) => {
      node.x(100 + Math.sin(frame.time * 0.001) * 50);
    }, node.getLayer());

    anim.start();

    return () => anim.stop();  // Cleanup
  }, []);

  return <Circle ref={circleRef} y={100} radius={50} fill="red" />;
}
```

**Option B: Use React state (Less performant for high-frequency updates)**

```javascript
function AnimatedCircle() {
  const [x, setX] = useState(50);

  useEffect(() => {
    let startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      setX(100 + Math.sin(elapsed * 0.001) * 50);
      requestAnimationFrame(animate);
    }

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // React re-renders on every frame (slower)
  return <Circle x={x} y={100} radius={50} fill="red" />;
}
```

**Best Practice:** Use Konva animations (via refs) for high-frequency updates, React state for infrequent updates or when you need React to be aware of changes.

#### 4. Layer Optimization

Separate static and dynamic content into different layers:

```javascript
<Stage width={800} height={600}>
  {/* Static background layer */}
  <Layer listening={false}>
    <Rect width={800} height={600} fill="#f0f0f0" />
    <Text text="Static Title" fontSize={24} />
  </Layer>

  {/* Dynamic interactive layer */}
  <Layer>
    {shapes.map(shape => (
      <Circle key={shape.id} {...shape} draggable />
    ))}
  </Layer>
</Stage>
```

Benefits:
- `listening={false}` disables event handling (faster)
- Static layer never redraws
- Only dynamic layer redraws on interactions

### Common Pitfalls

**Pitfall 1: Updating state on every frame**
```javascript
// BAD: Re-renders React on every frame
const [rotation, setRotation] = useState(0);

useEffect(() => {
  function animate() {
    setRotation(r => r + 1);  // React re-render every frame!
    requestAnimationFrame(animate);
  }
  animate();
}, []);

// GOOD: Update Konva directly
const ref = useRef();

useEffect(() => {
  const anim = new Konva.Animation((frame) => {
    ref.current.rotation(ref.current.rotation() + 1);
  }, ref.current.getLayer());

  anim.start();
  return () => anim.stop();
}, []);
```

**Pitfall 2: Not cleaning up animations**
```javascript
// BAD: Animation continues after unmount
useEffect(() => {
  const anim = new Konva.Animation(...);
  anim.start();
  // No cleanup!
}, []);

// GOOD: Always stop animations on unmount
useEffect(() => {
  const anim = new Konva.Animation(...);
  anim.start();
  return () => anim.stop();  // Cleanup
}, []);
```

**Pitfall 3: Creating objects in render**
```javascript
// BAD: Creates new objects every render
{shapes.map(shape => (
  <Circle
    {...shape}
    shadowOffset={{ x: 5, y: 5 }}  // New object every render!
  />
))}

// GOOD: Create stable references
const shadowOffset = useMemo(() => ({ x: 5, y: 5 }), []);

{shapes.map(shape => (
  <Circle {...shape} shadowOffset={shadowOffset} />
))}
```

---

## Performance Best Practices

### Canvas Redraw Triggers

Understanding when Konva redraws is critical for optimization:

**Automatic Redraws (Konva v8+):**
- Shape property changes
- Node added/removed from layer
- Drag operations
- Tween/Animation updates

**Konva v8+ Auto-Batching:**

Konva automatically batches multiple changes into a single redraw:

```javascript
// Only one redraw for all three changes
circle.x(100);
circle.y(200);
circle.fill('red');
// layer.draw() called automatically once
```

**Manual Control:**

```javascript
// Disable auto-draw for bulk updates
layer.listening(false);

for (let i = 0; i < 1000; i++) {
  layer.add(new Konva.Circle({...}));
}

layer.listening(true);
layer.draw();  // Single redraw
```

### Optimization Checklist

#### 1. Layer Management

```javascript
// ✅ Separate static and dynamic content
<Layer listening={false}>  {/* Static background */}
  <Rect width={800} height={600} fill="#f0f0f0" />
</Layer>

<Layer>  {/* Dynamic interactive content */}
  {shapes.map(shape => <Circle key={shape.id} {...shape} />)}
</Layer>
```

**Benefits:**
- Static layer never redraws
- Event listeners only on interactive layer
- Each layer is a separate canvas (GPU acceleration)

#### 2. Shape Caching

Cache complex shapes to avoid redrawing:

```javascript
const star = new Konva.Star({
  numPoints: 20,
  innerRadius: 20,
  outerRadius: 50,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 2
});

// Cache the star (converts to image)
star.cache();

// Now rotations/translations are fast image operations
star.rotation(45);  // Just moves the cached image
```

**When to Cache:**
- Complex shapes (many points, curves)
- Shapes with filters/shadows
- Shapes that animate position/rotation but not appearance

**When NOT to Cache:**
- Simple shapes (Circle, Rect) without filters
- Shapes that frequently change appearance (color, size, etc.)
- Text that changes frequently

**Memory Trade-off:**

Caching creates an internal canvas for each cached shape:
- Memory usage: width × height × 4 bytes per cached shape
- Only cache what provides performance benefit

#### 3. Disable Features You Don't Need

```javascript
const shape = new Konva.Circle({
  x: 100,
  y: 100,
  radius: 50,
  fill: 'red',

  // Performance flags
  listening: false,              // Disable event listening
  perfectDrawEnabled: false,     // Faster draw when has fill + stroke + opacity
  shadowForStrokeEnabled: false, // Don't draw shadow twice
  hitStrokeWidth: 0              // Don't draw stroke on hit canvas
});
```

#### 4. Limit Animated Shapes

```javascript
// ❌ Animating 1000 shapes
shapes.forEach(shape => {
  shape.to({ rotation: 360, duration: 2 });
});

// ✅ Animate a group or parent
const group = new Konva.Group();
shapes.forEach(shape => group.add(shape));

group.to({ rotation: 360, duration: 2 });
// Only the group rotates (single transform)
```

#### 5. Use transformsEnabled Wisely

```javascript
// For shapes that only move (no rotation/scale)
shape.transformsEnabled('position');

// Skips rotation/scale calculations
```

#### 6. Optimize Animation Callbacks

```javascript
// ❌ BAD: Creating objects in animation loop
const anim = new Konva.Animation((frame) => {
  const angle = frame.time * 0.001;  // OK
  const offset = { x: 5, y: 5 };     // ❌ New object every frame!
  shape.position(offset);
}, layer);

// ✅ GOOD: Reuse values
const anim = new Konva.Animation((frame) => {
  const angle = frame.time * 0.001;
  shape.x(100 + Math.sin(angle) * 50);
  shape.y(100 + Math.cos(angle) * 50);
}, layer);
```

#### 7. Use batchDraw for High-Frequency Updates

```javascript
// For mousemove, resize, or other rapid events
window.addEventListener('mousemove', (e) => {
  shape.x(e.clientX);
  shape.y(e.clientY);
  layer.batchDraw();  // Limits redraws to ~60fps
});
```

### Performance Monitoring

```javascript
// Check FPS
const anim = new Konva.Animation((frame) => {
  console.log('FPS:', frame.frameRate);
  // ... your animation
}, layer);

// Profile redraw time
const start = performance.now();
layer.draw();
const elapsed = performance.now() - start;
console.log('Draw time:', elapsed, 'ms');
```

**Target Metrics:**
- 60 FPS (16.67ms per frame) for smooth animation
- Draw time < 10ms for complex scenes
- Drop to 30 FPS (33ms per frame) if necessary for very complex scenes

---

## Summary: Key Takeaways

### Canvas vs DOM

- **Canvas is stateless, immediate-mode rendering** → You must manually redraw
- **DOM is stateful, retained-mode rendering** → Browser handles redraws
- **Konva bridges the gap** with a virtual node tree that manages state

### Animations

- **Use Tween** for simple property transitions with easing
- **Use Animation** for complex, continuous animations
- **Avoid raw requestAnimationFrame** with Konva
- **In React, use Konva animations via refs** for high-frequency updates

### Transformations

- **position (x, y)** = where shape appears on canvas
- **offset (offsetX, offsetY)** = origin point for rotation/scale
- **Different shapes have different default origins**
- **Changing offset requires adjusting position** to maintain visual position

### React Integration

- **react-konva syncs React props with Konva nodes**
- **Use refs for direct Konva access** (animations, manual updates)
- **React.memo prevents unnecessary re-renders** for many shapes
- **Separate static/dynamic content into different layers**
- **Clean up animations in useEffect return**

### Performance

- **Each layer is a separate canvas** → separate static and dynamic content
- **Cache complex shapes** but not simple shapes
- **Disable features you don't need** (listening, perfectDraw, etc.)
- **Animate groups instead of individual shapes** when possible
- **Use batchDraw for high-frequency updates**
- **Konva v8+ auto-batches redraws** → manual batching less critical

---

## Further Reading

- [Konva Official Documentation](https://konvajs.org/docs/)
- [react-konva GitHub](https://github.com/konvajs/react-konva)
- [Konva Performance Tips](https://konvajs.org/docs/performance/All_Performance_Tips.html)
- [Canvas API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

**Last Updated:** 2025-11-27
