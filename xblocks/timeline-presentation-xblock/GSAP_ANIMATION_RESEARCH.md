# GSAP Animation Research Report

**Research Date:** November 26, 2025
**Purpose:** Investigate GSAP animation patterns, libraries, and presets for common animation effects

---

## Executive Summary

GSAP (GreenSock Animation Platform) is a powerful, professional-grade animation library but **does not include built-in animation presets** like "fade in up" or "slide from left." However, GSAP provides:

1. **Excellent performance primitives** (x, y, opacity, scale, rotation, etc.)
2. **Powerful utilities** (fromTo, stagger, ScrollTrigger.batch, quickTo)
3. **Community examples** (CodePen collections, Made With GSAP)
4. **Free premium plugins** (all previously paid plugins are now free)

**Recommendation:** Build a thin preset library on top of GSAP rather than using a third-party solution. The patterns are straightforward and well-documented.

---

## 1. What GSAP Provides Out-of-the-Box

### Core Animation Methods

GSAP provides three main animation methods:

```javascript
// Animate TO a state (most common)
gsap.to(element, { x: 100, opacity: 1, duration: 1 });

// Animate FROM a state (good for entrance animations)
gsap.from(element, { opacity: 0, y: 50, duration: 0.8 });

// Animate FROM one state TO another (explicit control)
gsap.fromTo(element,
  { opacity: 0, scale: 0, rotation: 720 },
  { opacity: 1, scale: 1, rotation: 0, duration: 1 }
);
```

### Transform Properties (CSSPlugin)

GSAP can animate any CSS property, with optimized shorthand for transforms:

**Translation:**
- `x`, `y` - Pixel-based translation (translateX/Y)
- `xPercent`, `yPercent` - Percentage-based translation (relative to element size)

**Rotation:**
- `rotation` - Z-axis rotation in degrees (supports radians if specified)
- `rotationX`, `rotationY`, `rotationZ` - 3D rotations

**Scale:**
- `scale` - Uniform scaling (both X and Y)
- `scaleX`, `scaleY`, `scaleZ` - Individual axis scaling

**Skew:**
- `skewX`, `skewY` - Horizontal and vertical skewing

**Transform Origin:**
- `transformOrigin` - Set origin point (e.g., "center", "top left", "50% 50%")
- `transformPerspective` - 3D perspective value
- `svgOrigin` - SVG-specific transform origin

**Other Common Properties:**
- `opacity` - Alpha transparency
- `visibility` - CSS visibility
- `width`, `height` - Dimensions (though `scale` is more performant)
- `backgroundColor`, `color` - Colors
- `clipPath` - For wipe/reveal effects

### Default Easing

**Default:** `power1.out` (subtle, gentle easing)

**Available Power Easings:**
- `power1.out` - Subtle (default)
- `power2.out` - Sweet spot for 90% of UI animations
- `power3.out` - Dramatic
- `power4.out` - Very dramatic

**Other Easing Families:**
- `back` - Overshoots/undershoots
- `elastic` - Bouncy, spring-like
- `bounce` - Bouncing effect
- `circ`, `expo`, `sine` - Mathematical curves

**Best Practice:** Use `.out` eases for 95% of UI interactions - they respond immediately and settle smoothly.

### Stagger Animations

GSAP has powerful built-in stagger support:

```javascript
// Simple stagger - delay between each element
gsap.from(".items", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.1  // 0.1s between each element
});

// Advanced stagger with options
gsap.from(".items", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: {
    each: 0.1,
    from: "center",  // or "start", "end", index number
    grid: [3, 5],    // for grid layouts
    ease: "power2.inOut"
  }
});
```

---

## 2. Official GSAP Plugins (Now All FREE)

As of 2024, **all GSAP plugins are 100% free** (previously Club GSAP exclusive), including:

### ScrollTrigger (Most Important for Reveal Animations)

Enables scroll-based animations with minimal code:

```javascript
gsap.from(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top 80%",  // when top of element hits 80% of viewport
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 100,
  duration: 1
});
```

**ScrollTrigger.batch()** - Perfect for entrance animations on multiple elements:

```javascript
ScrollTrigger.batch(".box", {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    overwrite: true
  }),
  onLeave: batch => gsap.set(batch, {
    opacity: 0,
    y: -100
  }),
  onEnterBack: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15
  }),
  onLeaveBack: batch => gsap.set(batch, {
    opacity: 0,
    y: 100
  })
});
```

### Other Premium Plugins (All Free Now)

1. **SplitText** - Break text into characters, words, or lines for letter-by-letter animations
2. **MorphSVG** - Morph one SVG shape into another smoothly
3. **DrawSVG** - Progressively reveal/hide SVG strokes (drawing effect)
4. **MotionPath** - Animate elements along custom paths
5. **Draggable & Inertia** - Drag, spin, toss, and flick-scroll interactions
6. **FLIP** - Seamlessly transition between DOM states
7. **ScrollSmoother** - Smooth scrolling companion to ScrollTrigger

---

## 3. Community Libraries & Helpers

### NPM Packages

**@gsap/react** (Official React Helper)
- `npm install @gsap/react`
- Provides `useGSAP()` hook (drop-in replacement for useLayoutEffect)
- Auto-cleanup: All animations created in the hook are reverted when component unmounts

```javascript
import { useGSAP } from '@gsap/react';

function MyComponent() {
  useGSAP(() => {
    gsap.from('.element', { opacity: 0, y: 50 });
  });

  return <div className="element">Content</div>;
}
```

**@lynksen/react-gsap-utils**
- Collection of zero-config utilities for React
- Includes `AnimateOnMount` and `AnimateOnScroll` components
- Last published: 9 months ago (actively maintained)

**gsap-tools**
- Debugging tool for React
- Makes managing Tweens and Timelines easier
- Version 1.0.12 (last published 6 years ago - may be outdated)

### Community Resources

**Made With GSAP** (https://madewithgsap.com/)
- 50 unique effects with step-by-step tutorials
- Downloadable code for each effect
- Covers scroll animations, mouse interactions, drag movements

**CodePen Collections:**
- Official GSAP Collections (https://codepen.io/GreenSock/collections/)
- GSAP SVG Animations by Chris Gannon
- GSAP Scroll Collection (ScrollTrigger examples)
- 205+ community examples on FreeFrontend

**Tutorials:**
- Builder.io: "Build a buttery scroll reveal" (Oct 2025)
- Codrops: Text reveal animations, carousel techniques
- Webflow + GSAP guides for scroll-triggered reveals

---

## 4. Implementation Examples

### Fade Animation

```javascript
// Fade in (entrance)
gsap.from(element, {
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

// Fade out (exit)
gsap.to(element, {
  opacity: 0,
  duration: 0.6,
  ease: "power2.in"
});
```

### Scale Animation (from center)

```javascript
// Scale in from center (default transformOrigin is center)
gsap.from(element, {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)"  // overshoot for playful effect
});

// Scale from specific corner
gsap.from(element, {
  scale: 0,
  opacity: 0,
  transformOrigin: "top left",
  duration: 0.8,
  ease: "power2.out"
});
```

### Slide Animations

**Best Practice:** Use `xPercent`/`yPercent` for percentage-based movement, or viewport units for responsive slides.

```javascript
// Slide from left
gsap.from(element, {
  x: -100,  // pixels
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

// Slide from right (viewport-based)
gsap.from(element, {
  x: "100vw",  // viewport width
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Slide from top (percentage of element's height)
gsap.from(element, {
  yPercent: -100,  // 100% of element's height
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

// Slide from bottom
gsap.from(element, {
  y: 100,  // pixels
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});
```

**Why `xPercent`/`yPercent`?**
- Percentage-based on element's own dimensions (responsive)
- Stacks with `x`/`y` for combined positioning
- Example: `{ xPercent: -50, yPercent: -50, x: 100, y: 300 }` centers element at offset

**Avoid:** Using `x: "50%"` - confusing if you later add `xPercent` (they stack)

### Wipe/Reveal Animations (clip-path)

```javascript
// Horizontal wipe (left to right)
gsap.fromTo(element,
  {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"  // fully clipped
  },
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",  // fully revealed
    duration: 1,
    ease: "power2.inOut"
  }
);

// Vertical wipe (top to bottom)
gsap.fromTo(element,
  {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
  },
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1,
    ease: "power2.inOut"
  }
);

// Circular reveal (center outward)
gsap.fromTo(element,
  {
    clipPath: "circle(0% at 50% 50%)"
  },
  {
    clipPath: "circle(100% at 50% 50%)",
    duration: 1.2,
    ease: "power2.out"
  }
);
```

**Tool:** Use [Clippy](https://bennettfeely.com/clippy/) to generate clip-path values.

### Combined Animations (Timeline)

```javascript
const tl = gsap.timeline();

tl.from(".logo", {
  duration: 1,
  opacity: 0,
  scale: 0.3
})
.from(".title", {
  duration: 0.8,
  y: 50,
  opacity: 0
}, "-=0.4")  // start 0.4s before previous animation ends
.from(".items", {
  duration: 0.6,
  y: 30,
  opacity: 0,
  stagger: 0.1
});
```

---

## 5. Performance Optimizations

### quickTo() for High-Frequency Updates

If you're calling `gsap.to()` repeatedly (e.g., mousemove events), use `quickTo()` for better performance:

```javascript
// Instead of this (performance hit):
element.addEventListener('mousemove', (e) => {
  gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
});

// Use this (optimized):
const xTo = gsap.quickTo(follower, "x", { duration: 0.3, ease: "power2.out" });
const yTo = gsap.quickTo(follower, "y", { duration: 0.3, ease: "power2.out" });

element.addEventListener('mousemove', (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});
```

**Benefits:**
- Skips plugin parsing and other overhead
- Directly pipes values to the tween
- Ideal for cursor tracking, drag interactions

### General Performance Tips

1. **Use transform properties** (`x`, `y`, `scale`, `rotation`) instead of `width`, `height`, `top`, `left`
   - Transforms trigger GPU acceleration
   - Better performance for animations

2. **Avoid CSS transitions** on GSAP-animated elements
   - Terrible for performance when mixed
   - GSAP takes full control

3. **Create tweens beforehand** when possible
   - Minimal impact, but good practice
   - Reusable timelines for repeated animations

4. **Use `gsap.set()`** for immediate state changes (zero-duration)
   ```javascript
   gsap.set(".box", { y: 100, opacity: 0 });  // instant
   ```

---

## 6. Alternative Libraries Comparison

### Anime.js vs GSAP

| Feature | GSAP | Anime.js |
|---------|------|----------|
| **Ease of Use** | Steeper learning curve | Simpler, more concise API |
| **Performance** | Superior for complex animations | Good for simple animations |
| **File Size** | 23 KB (core) gzipped | Lightweight |
| **Presets** | None (community examples) | Limited built-in presets |
| **Timeline** | Unparalleled control | Basic sequencing |
| **Plugins** | Extensive (all free now) | Limited |
| **Framework Support** | Framework-agnostic | Framework-agnostic |
| **Best For** | Complex, production-grade animations | Quick prototypes, simple effects |

**Verdict:** Anime.js is easier for beginners but GSAP is the professional choice.

### Framer Motion vs GSAP

| Feature | GSAP | Framer Motion |
|---------|------|---------------|
| **Framework** | Any (or none) | React only |
| **Approach** | Imperative | Declarative (React-friendly) |
| **File Size** | 23 KB core | 32 KB (all features) |
| **Presets** | None (build your own) | Ready-made sequences |
| **Variants** | Manual | Built-in system |
| **Gestures** | Draggable plugin | Built-in |
| **Timeline** | Exceptional | Basic |
| **Scroll Animations** | ScrollTrigger (best in class) | Requires integration |
| **Best For** | Complex sequences, any framework | React UI transitions |

**Verdict:** Use Framer Motion for React-first projects with simple transitions. Use GSAP for complex, scroll-driven, or multi-framework projects.

### Theatre.js vs GSAP

| Feature | GSAP | Theatre.js |
|---------|------|------------|
| **Primary Use** | Code-based animations | Visual timeline editor |
| **Collaboration** | Developer-focused | Designer + Developer workflow |
| **Timeline Editor** | Code only | Visual GUI |
| **3D Support** | Via plugins | Built-in (Three.js integration) |
| **Complexity** | High performance for complex | Expressive, detailed animations |
| **Integration** | Can work together | Can work together |

**Verdict:** Theatre.js excels at visual editing workflows (similar to After Effects). GSAP excels at code-based complex animations. They can complement each other.

---

## 7. Recommendation: Build Your Own Preset Library

### Why Build Your Own?

1. **No third-party library provides comprehensive GSAP presets**
2. **GSAP patterns are straightforward** (simple wrapper functions)
3. **Custom presets ensure consistency** across your project
4. **Small bundle size** (only what you need)
5. **Full control** over easing, duration, and behavior

### Proposed Structure

```javascript
// animations.js - Your preset library

import gsap from 'gsap';

/**
 * Preset animation configurations
 */
const PRESETS = {
  fade: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },

  slideUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 }
  },

  slideDown: {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 }
  },

  slideLeft: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 }
  },

  slideRight: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 }
  },

  scale: {
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 }
  },

  wipeLeft: {
    from: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
    to: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
  },

  wipeRight: {
    from: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
    to: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
  },

  wipeUp: {
    from: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
    to: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
  },

  wipeDown: {
    from: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    to: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
  }
};

/**
 * Default animation options
 */
const DEFAULTS = {
  duration: 0.8,
  ease: 'power2.out'
};

/**
 * Animate an element with a preset
 * @param {Element|string} target - DOM element or selector
 * @param {string} preset - Preset name (fade, slideUp, scale, etc.)
 * @param {object} options - Override default options
 */
export function animate(target, preset, options = {}) {
  const config = PRESETS[preset];

  if (!config) {
    console.warn(`Unknown preset: ${preset}`);
    return null;
  }

  const opts = { ...DEFAULTS, ...options };

  return gsap.fromTo(
    target,
    config.from,
    { ...config.to, ...opts }
  );
}

/**
 * Animate multiple elements with stagger
 * @param {Element[]|string} targets - DOM elements or selector
 * @param {string} preset - Preset name
 * @param {object} options - Override default options (can include stagger)
 */
export function animateStagger(targets, preset, options = {}) {
  const config = PRESETS[preset];

  if (!config) {
    console.warn(`Unknown preset: ${preset}`);
    return null;
  }

  const opts = {
    ...DEFAULTS,
    stagger: 0.1,  // default stagger
    ...options
  };

  return gsap.fromTo(
    targets,
    config.from,
    { ...config.to, ...opts }
  );
}

/**
 * Create a scroll-triggered animation
 * @param {Element|string} target - DOM element or selector
 * @param {string} preset - Preset name
 * @param {object} options - Override options (can include ScrollTrigger config)
 */
export function animateOnScroll(target, preset, options = {}) {
  const config = PRESETS[preset];

  if (!config) {
    console.warn(`Unknown preset: ${preset}`);
    return null;
  }

  const {
    scrollTrigger = {},
    ...animOptions
  } = options;

  const opts = {
    ...DEFAULTS,
    ...animOptions,
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...scrollTrigger
    }
  };

  return gsap.fromTo(
    target,
    config.from,
    { ...config.to, ...opts }
  );
}

/**
 * Batch scroll animations for multiple elements
 * @param {string} selector - CSS selector for elements to animate
 * @param {string} preset - Preset name
 * @param {object} options - Override options
 */
export function animateBatch(selector, preset, options = {}) {
  const config = PRESETS[preset];

  if (!config) {
    console.warn(`Unknown preset: ${preset}`);
    return null;
  }

  const opts = {
    ...DEFAULTS,
    stagger: 0.15,
    ...options
  };

  // Set initial state
  gsap.set(selector, config.from);

  return ScrollTrigger.batch(selector, {
    onEnter: batch => gsap.to(batch, {
      ...config.to,
      ...opts,
      overwrite: true
    }),
    onLeaveBack: batch => gsap.set(batch, {
      ...config.from,
      overwrite: true
    })
  });
}
```

### Usage Examples

```javascript
import { animate, animateStagger, animateOnScroll, animateBatch } from './animations';

// Simple entrance
animate('.hero', 'fade', { duration: 1.2 });

// Slide with custom easing
animate('.card', 'slideUp', { ease: 'back.out(1.7)' });

// Stagger multiple elements
animateStagger('.list-item', 'slideUp', { stagger: 0.1 });

// Scroll-triggered
animateOnScroll('.section', 'wipeUp', {
  scrollTrigger: {
    start: 'top 70%'
  }
});

// Batch scroll animations
animateBatch('.box', 'scale', { stagger: 0.2 });
```

### Benefits of This Approach

1. **Simple API** - One function call per animation type
2. **Consistent** - All animations use same defaults unless overridden
3. **Flexible** - Easy to override duration, easing, stagger, etc.
4. **Extensible** - Add new presets as needed
5. **Type-safe** - Can add TypeScript definitions
6. **Small** - ~2-3 KB for the wrapper (GSAP itself is 23 KB)

---

## 8. Additional Resources

### Official Documentation
- GSAP Docs: https://gsap.com/docs/v3/
- CSSPlugin (transform properties): https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Easing visualizer: https://gsap.com/docs/v3/Eases/

### Learning Resources
- Getting Started Guide: https://gsap.com/resources/get-started/
- Common Mistakes: https://gsap.com/resources/mistakes/
- GSAP Cheat Sheet: https://gsap.com/community/cheatsheet/

### Community Examples
- Official CodePen Collections: https://codepen.io/GreenSock/collections/
- Made With GSAP: https://madewithgsap.com/
- FreeFrontend Examples: https://freefrontend.com/gsap-js/

### Tools
- Clippy (clip-path generator): https://bennettfeely.com/clippy/
- Greensock Properties Cheat Sheet: https://gist.github.com/lunelson/7d83ca0c8bdfab170dd3

---

## Conclusion

**GSAP does not provide built-in animation presets**, but:
1. The patterns are simple and well-documented
2. All premium plugins are now free (huge value)
3. Performance is industry-leading
4. Community resources are excellent

**Recommended approach:**
- Build a thin preset wrapper (see Section 7)
- Use GSAP's primitives directly for custom animations
- Leverage ScrollTrigger.batch() for scroll-driven reveals
- Use `.fromTo()` for explicit control over start/end states

This gives you the **best of both worlds**: preset convenience for common patterns, and GSAP's full power for complex sequences.
