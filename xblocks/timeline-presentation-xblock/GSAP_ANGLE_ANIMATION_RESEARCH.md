# GSAP Arrow Animation Research: Arbitrary Angle Reveals

## Executive Summary

**Best Approach:** For Konva Arrow components, use **stroke-dashoffset animation** (technique #3 below). This is the most compatible, performant, and widely-used solution for canvas-based arrow reveals along arbitrary angles.

**Quick Answer:** The angle doesn't matter for the animation technique - stroke-dashoffset reveals work along any path direction automatically.

## Research Findings

### 1. GSAP DrawSVGPlugin ❌ (Not Suitable for Konva)

**Status:** Now FREE (2024) - Previously premium, now completely free including commercial use

**What it does:**
- Progressively reveals/hides SVG stroke elements (path, line, polyline, polygon, rect, ellipse)
- Works by animating `stroke-dashoffset` and `stroke-dasharray` CSS properties
- Example: `drawSVG: "0% 100%"` reveals from start to end

**Why not use it:**
- **Only works with SVG elements** - not compatible with Konva Canvas shapes
- Konva uses HTML5 Canvas, not SVG
- Would require converting Konva arrows to SVG arrows (architectural change)

**Verdict:** Wrong tool for Konva-based project

---

### 2. GSAP Clip-Path Animation ⚠️ (Complex for Arrows)

**Concept:** Animate a polygon clip-path mask to reveal elements directionally

**Example for arbitrary angle:**
```javascript
// For a 26.57° arrow (100,100) to (200,150)
gsap.to(element, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 1
});
```

**Challenges:**
- Requires calculating polygon points for arbitrary angles
- For 26.57° reveal: need to calculate rotated rectangle coordinates
- Complex math: `x = cos(26.57°) * distance`, `y = sin(26.57°) * distance`
- Must maintain same number of polygon points for smooth animation
- Arrowhead reveal timing is difficult to control separately

**Verdict:** Overcomplicated for simple arrow reveals

---

### 3. Stroke-DashOffset Technique ✅ (RECOMMENDED)

**The Standard Solution:** Used by professional tools and widely adopted

**How It Works:**
1. Get the path length (arrow line length)
2. Set `dash` array to `[pathLength, pathLength]`
3. Set initial `dashOffset` to `pathLength` (arrow hidden)
4. Animate `dashOffset` to `0` (arrow reveals from start to end)

**Why angle doesn't matter:**
The browser/canvas automatically draws the dash along the path direction - you don't need to calculate or specify the angle. A 26.57° arrow and a 90° arrow use identical code.

**Konva Implementation:**

```javascript
// For arrow with points: [100, 100, 200, 150]
// Angle: Math.atan2(150-100, 200-100) = 26.57°
// But we DON'T need to calculate or use the angle!

const arrow = new Konva.Arrow({
  points: [100, 100, 200, 150],
  stroke: 'black',
  strokeWidth: 2,
  pointerLength: 10,
  pointerWidth: 10
});

// Calculate path length
const dx = 200 - 100; // 100
const dy = 150 - 100; // 50
const pathLength = Math.sqrt(dx * dx + dy * dy); // ~111.8

// Set up for reveal animation
arrow.dash([pathLength, pathLength]);
arrow.dashOffset(pathLength); // Start hidden

// Animate reveal with GSAP
gsap.to(arrow, {
  dashOffset: 0,
  duration: 1,
  ease: "power2.out"
});

layer.add(arrow);
layer.draw();
```

**Complete Working Example:**

```javascript
// Arrow from (100, 100) to (200, 150) - 26.57° angle
const arrow = new Konva.Arrow({
  x: 0,
  y: 0,
  points: [100, 100, 200, 150],
  stroke: '#333',
  strokeWidth: 3,
  pointerLength: 15,
  pointerWidth: 15,
  fill: '#333'
});

// Calculate length (Pythagorean theorem)
const x1 = 100, y1 = 100;
const x2 = 200, y2 = 150;
const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Setup dash offset animation
arrow.dash([length, length]);
arrow.dashOffset(length);

// Add to layer
layer.add(arrow);
layer.batchDraw();

// Animate reveal
gsap.to(arrow, {
  dashOffset: 0,
  duration: 1.5,
  ease: "power1.inOut",
  onUpdate: () => {
    layer.batchDraw(); // Redraw canvas on each frame
  }
});
```

**Key Insight:** The dash offset technique automatically follows the path geometry. Whether your arrow is horizontal (0°), vertical (90°), or diagonal (26.57°, 47°, etc.), the same animation code works perfectly.

---

### 4. Transform-Based XY Animation ⚠️ (Not Recommended)

**Concept:** Animate `x` and `y` simultaneously based on calculated angle

```javascript
// Calculate distance and angle
const dx = x2 - x1;
const dy = y2 - y1;
const distance = Math.sqrt(dx * dx + dy * dy);
const angle = Math.atan2(dy, dx);

// Animate position along vector
gsap.to(element, {
  x: `+=${distance * Math.cos(angle)}`,
  y: `+=${distance * Math.sin(angle)}`,
  duration: 1
});
```

**Why avoid:**
- This animates the POSITION of the entire element, not a reveal
- Doesn't create a "drawing" effect - the whole arrow moves
- Not what you want for "wiping in" an arrow

**Verdict:** Wrong animation type

---

### 5. GSAP MotionPathPlugin ❌ (Wrong Use Case)

**What it does:**
- Animates objects ALONG a path (like a car driving on a road)
- Includes `autoRotate` to orient objects in path direction
- Great for moving elements, not revealing static elements

**Example:**
```javascript
gsap.to(element, {
  motionPath: {
    path: "M0,0 L100,50",
    autoRotate: true
  },
  duration: 2
});
```

**Why not suitable:**
- Moves an object along a path, doesn't reveal a path
- You want to reveal the arrow itself, not move something along it

**Verdict:** Different use case entirely

---

## Professional Implementation Comparison

### Adobe After Effects
Uses stroke animation (equivalent to stroke-dashoffset technique)

### Articulate Storyline
Uses progressive reveal masks or stroke animations

### Industry Standard
**Stroke-dashoffset technique is universal** across tools:
- Jake Archibald's pioneering tutorial (2013)
- CSS-Tricks canonical guide
- Used by Coggle, interactive diagram tools
- Recommended by GSAP community forums

---

## Lines vs Shapes: Different Techniques?

**Lines/Arrows (Stroked Paths):**
✅ Use stroke-dashoffset technique
- Works for: Konva.Arrow, Konva.Line, SVG paths with stroke
- Reveals along the stroke direction automatically

**Filled Shapes (Rectangles, Circles):**
❌ Cannot use stroke-dashoffset (no stroke to reveal)
✅ Use clip-path or scale/opacity animations instead

**Your Use Case (Arrows):**
Arrows have strokes → Use stroke-dashoffset ✅

---

## Code Example: 47-Degree Arrow

```javascript
import Konva from 'konva';
import { gsap } from 'gsap';

// Arrow with 47° angle
// Math: tan(47°) ≈ 1.072, so if dx=100, dy≈107
const x1 = 100, y1 = 100;
const x2 = 200, y2 = 207; // Creates ~47° angle

const arrow = new Konva.Arrow({
  points: [x1, y1, x2, y2],
  stroke: '#2563eb',
  strokeWidth: 4,
  pointerLength: 20,
  pointerWidth: 20,
  fill: '#2563eb'
});

// Calculate length for any angle (same formula)
const pathLength = Math.sqrt(
  Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
);

// Setup reveal animation (identical for any angle)
arrow.dash([pathLength, pathLength]);
arrow.dashOffset(pathLength);

layer.add(arrow);
layer.batchDraw();

// Reveal animation (same code for 0°, 47°, 90°, or any angle)
gsap.to(arrow, {
  dashOffset: 0,
  duration: 1.2,
  ease: "power2.out",
  onUpdate: () => layer.batchDraw()
});
```

**The angle makes ZERO difference to the animation code.** The browser automatically reveals along the path direction.

---

## Recommendation for Implementation

### Implement This Pattern:

```javascript
class ArrowRevealAnimator {
  static calculateLength(x1, y1, x2, y2) {
    return Math.sqrt(
      Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    );
  }

  static setupReveal(arrow, x1, y1, x2, y2) {
    const length = this.calculateLength(x1, y1, x2, y2);
    arrow.dash([length, length]);
    arrow.dashOffset(length);
    return length;
  }

  static animate(arrow, layer, duration = 1, ease = "power2.out") {
    return gsap.to(arrow, {
      dashOffset: 0,
      duration: duration,
      ease: ease,
      onUpdate: () => layer.batchDraw()
    });
  }

  static reveal(arrow, layer, x1, y1, x2, y2, options = {}) {
    this.setupReveal(arrow, x1, y1, x2, y2);
    return this.animate(
      arrow,
      layer,
      options.duration || 1,
      options.ease || "power2.out"
    );
  }
}

// Usage for ANY angle:
ArrowRevealAnimator.reveal(arrow, layer, 100, 100, 200, 150);
```

### Why This Works Perfectly:

1. **Angle-agnostic** - Same code for all directions
2. **Canvas-compatible** - Works with Konva
3. **Performant** - Native canvas animation
4. **Industry-standard** - Proven technique
5. **GSAP-integrated** - Professional easing/timing
6. **Simple** - No complex math beyond Pythagorean theorem

---

## Key Takeaways

1. **DrawSVGPlugin** is now free but only works with SVG (not Konva canvas)
2. **Stroke-dashoffset** is the correct technique for canvas arrow reveals
3. **Angle calculation is unnecessary** - the technique follows path geometry automatically
4. **Same code works for all angles** - 0°, 26.57°, 47°, 90°, 180°, etc.
5. **GSAP enhances native technique** with professional easing and timing control

## Final Implementation Path

✅ Use Konva's `dash` and `dashOffset` properties
✅ Animate with GSAP for easing control
✅ Call `layer.batchDraw()` in `onUpdate` callback
✅ Calculate path length with Pythagorean theorem
✅ Ignore the angle - it doesn't matter for the animation

**No different techniques needed for different angles.**
