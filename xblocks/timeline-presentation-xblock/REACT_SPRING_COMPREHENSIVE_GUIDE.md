# React Spring Comprehensive Guide
## Animation System for Visibility-Based Interactions

---

## Table of Contents
1. [Core Concepts](#core-concepts)
2. [How React Spring Works Under the Hood](#how-react-spring-works-under-the-hood)
3. [The useSpring Hook - Complete API](#the-usespring-hook---complete-api)
4. [Visibility-Based Animations](#visibility-based-animations)
5. [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)
6. [Animation State Management](#animation-state-management)
7. [Duration vs Spring Physics](#duration-vs-spring-physics)
8. [Practical Code Examples](#practical-code-examples)

---

## Core Concepts

### Spring Physics vs Duration-Based Animation

React Spring uses **physics-based animations** by default, not time-based easing curves:

- **Spring Physics (Recommended)**: Animations are controlled by physical properties (mass, tension, friction)
  - More natural, realistic motion
  - Interruptible - can change direction mid-animation
  - Responds smoothly to rapid state changes
  - Better performance

- **Duration-Based**: Optional fallback using `config: { duration: X }`
  - Linear interpolation over fixed time
  - Less natural feeling
  - Cannot be interrupted cleanly
  - Use only when precise timing is required

**Why Spring Physics?**
> "Nothing in the real world moves like that" - React Spring documentation on easing curves

### The Animation Lifecycle

React Spring animations go through these phases:

1. **Mounting**: Initial values set (from `from` prop or current state)
2. **Animating**: SpringValues interpolate toward target (`to` prop)
3. **Resting**: Animation completes when within precision threshold
4. **Updating**: New target triggers re-animation
5. **Unmounting**: Cleanup (if using useTransition)

### How React Spring Detects Changes

React Spring uses an **event-driven system** called "Fluids":

- Each animated property is a `SpringValue` (extends `FluidValue`)
- `FluidObserver`s detect when values change
- Controllers manage collections of SpringValues
- Changes trigger `_start()` on affected SpringValues
- **DOM updates happen outside React's render cycle** (performance!)

**Key Insight**: React Spring doesn't automatically detect prop changes like `useEffect`. You must either:
- Use reactive syntax: `to: { opacity: isVisible ? 1 : 0 }`
- Use the imperative API: `api.start({ opacity: 1 })`
- Use the `reset` prop to force re-animation

---

## How React Spring Works Under the Hood

### Controllers and Springs

When you call `useSpring()`, you create a `Controller` instance that:

1. Manages a collection of `SpringValue` objects (one per animated property)
2. Exposes methods: `set()`, `start()`, `stop()`, `pause()`
3. Propagates commands to all managed SpringValues
4. Attaches to React's lifecycle via the hook

### The Animated Component System

`animated.div` and other animated components are **Higher-Order Components** that:

1. Accept SpringValues through the `style` prop
2. Extract and wrap styles in target-specific classes (e.g., `AnimatedStyle`)
3. Attach refs to elements for direct DOM manipulation
4. **Update the DOM directly without triggering React renders**

This is why React Spring is so performant - it bypasses React's reconciliation for animation updates.

### Why Animations Might Not Trigger

Common reasons animations don't work:

1. **Not using animated components**: Must use `animated.div`, not plain `div`
2. **Component doesn't forward style prop**: Custom components must pass `style` to native element
3. **Using forwardRef**: Known issue - can prevent animated from updating properly
4. **No actual value change detected**: Controller doesn't see a difference in target values
5. **Missing reset flag**: Animation ran once and won't repeat without `reset: true`

---

## The useSpring Hook - Complete API

### Two Syntaxes

#### 1. Direct Object Syntax (Declarative)

```javascript
const springs = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 }
})
```

**Returns**: `SpringValues` object (animated props)

**Use When**:
- Animation depends on component state/props
- Simple, declarative animations
- Want animations to update automatically when dependencies change

#### 2. Factory Function Syntax (Imperative)

```javascript
const [springs, api] = useSpring(() => ({
  from: { opacity: 0 },
  to: { opacity: 1 }
}))
```

**Returns**: `[SpringValues, SpringRef]` tuple

**Use When**:
- Need manual control (e.g., onClick handlers)
- Want to prevent re-renders
- Complex animation sequences
- Need to start/stop/pause programmatically

### Complete Props Reference

| Prop | Type | Purpose | Default |
|------|------|---------|---------|
| `from` | object | Initial animation values | Current values |
| `to` | object/array/function | Target values | – |
| `loop` | boolean/object/function | Repeat animation | false |
| `delay` | number/function | Start delay (ms) | 0 |
| `immediate` | boolean/function/array | Skip animation | false |
| `reset` | boolean | Restart from `from` values | false |
| `reverse` | boolean | Swap `from` and `to` | false |
| `pause` | boolean | Pause active animation | false |
| `cancel` | boolean/string/array/function | Stop animation | false |
| `config` | object/function | Spring physics config | default preset |
| `events` | object | Animation callbacks | – |
| `ref` | SpringRef | Imperative control reference | – |

### Key Props Explained

#### `from` and `to`

```javascript
// Basic usage
useSpring({
  from: { opacity: 0, x: -100 },
  to: { opacity: 1, x: 0 }
})

// Shorthand (properties not recognized become part of `to`)
useSpring({
  from: { opacity: 0 },
  opacity: 1  // automatically becomes to: { opacity: 1 }
})

// Conditional targets (REACTIVE - responds to state changes)
useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 }
})
```

#### `immediate`

Skips animation, jumps directly to target value:

```javascript
// Skip all animations
useSpring({ opacity: 1, immediate: true })

// Skip specific properties
useSpring({
  opacity: 1,
  x: 100,
  immediate: ['opacity']  // only opacity jumps, x animates
})

// Conditional
useSpring({
  opacity: 1,
  immediate: !shouldAnimate
})
```

**Common Use Cases**:
- Prevent animation on initial mount
- Instant position updates while animating other properties
- Performance optimization for complex scenes

#### `reset`

Forces animation to restart from `from` values:

```javascript
useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  reset: true  // Re-runs animation on every render
})
```

**Warning**: `reset: true` triggers on ANY re-render, not just when specific props change. For more control, use imperative API.

#### `reverse`

Swaps `from` and `to`:

```javascript
const [isReversed, setIsReversed] = useState(false)

useSpring({
  from: { x: 0 },
  to: { x: 100 },
  reverse: isReversed  // when true: animates from 100 to 0
})
```

**Note**: `reverse` doesn't work well with `reset: true` (known issue).

#### `config`

Spring physics configuration:

```javascript
// Preset
useSpring({
  opacity: 1,
  config: { tension: 170, friction: 26 }
})

// Duration mode (not recommended)
useSpring({
  opacity: 1,
  config: { duration: 1000 }
})

// Per-property config
useSpring({
  opacity: 1,
  x: 100,
  config: (key) => key === 'opacity'
    ? { tension: 200 }
    : { tension: 100 }
})
```

**Presets**:
- `default`: tension 170, friction 26
- `gentle`: tension 120, friction 14
- `wobbly`: tension 180, friction 12
- `stiff`: tension 210, friction 20
- `slow`: tension 280, friction 60
- `molasses`: tension 280, friction 120

**Import presets**: `import { config } from 'react-spring'`

### Dependency Arrays - Do They Work?

**Short answer**: Not like `useEffect` dependencies.

The factory function syntax accepts a second argument that looks like a dependency array:

```javascript
const [springs, api] = useSpring(() => ({ opacity: 1 }), [])
```

However, this **doesn't cause re-animation** when dependencies change. It's mainly for internal optimization.

**For reactive animations**, use the direct object syntax with conditional values:

```javascript
// RIGHT - responds to isVisible changes
const springs = useSpring({
  opacity: isVisible ? 1 : 0
})

// WRONG - doesn't respond to isVisible changes
const [springs, api] = useSpring(() => ({
  opacity: isVisible ? 1 : 0
}), [isVisible])
```

---

## Visibility-Based Animations

### The Core Pattern

For elements that animate in/out based on a boolean flag:

```javascript
import { useSpring, animated } from 'react-spring'

function Component({ isVisible }) {
  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0px)' : 'translateY(-20px)'
    }
  })

  return (
    <animated.div style={fadeStyles}>
      Content appears!
    </animated.div>
  )
}
```

**Key Points**:
1. Element stays in DOM (doesn't mount/unmount)
2. Animation reverses naturally when `isVisible` toggles
3. No need for `reset` - reactive updates handle it
4. Use `animated.div`, not plain `div`

### Why Animations Might Appear Instantly

If your animation appears in final position without animating:

**Problem 1: Initial State Equals Target State**

```javascript
// WRONG - already at target on first render
const springs = useSpring({
  opacity: isVisible ? 1 : 0  // if isVisible is true initially, starts at 1
})

// RIGHT - always starts from 0
const springs = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 }
})
```

**Problem 2: Not Using animated Component**

```javascript
// WRONG - plain div can't animate
<div style={springs}>Content</div>

// RIGHT - animated.div receives SpringValues
<animated.div style={springs}>Content</animated.div>
```

**Problem 3: Immediate Flag Set**

```javascript
// WRONG - jumps instantly
const springs = useSpring({
  opacity: isVisible ? 1 : 0,
  immediate: true
})

// RIGHT - animates smoothly
const springs = useSpring({
  opacity: isVisible ? 1 : 0
})
```

### Handling Multiple Visibility Changes

If element shows → hides → shows again, and second show doesn't animate:

**Problem**: Animation already reached target, doesn't restart

**Solution 1: Use reset with condition**

```javascript
const [key, setKey] = useState(0)

const springs = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 },
  reset: key > 0  // only reset after first render
})

// When you want to replay animation
useEffect(() => {
  if (isVisible) setKey(k => k + 1)
}, [isVisible])
```

**Solution 2: Use imperative API**

```javascript
const [springs, api] = useSpring(() => ({
  from: { opacity: 0 },
  to: { opacity: 0 }
}))

useEffect(() => {
  api.start({ opacity: isVisible ? 1 : 0 })
}, [isVisible, api])
```

**Solution 3: Change component key (nuclear option)**

```javascript
<animated.div key={resetCounter} style={springs}>
  Content
</animated.div>

// Increment resetCounter to force full remount
```

### Mount vs Visibility Animations

**If element should mount/unmount** (removed from DOM), use `useTransition`:

```javascript
const transitions = useTransition(isVisible, {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
})

return transitions((style, item) =>
  item && <animated.div style={style}>Content</animated.div>
)
```

This properly handles element creation/destruction with animation.

---

## Common Pitfalls and Solutions

### Pitfall 1: Animation Only Works Once

**Symptom**: First show animates, subsequent shows appear instantly

**Cause**: Spring reached target and won't re-animate without trigger

**Solutions**:
```javascript
// Option A: Use reset
useSpring({ opacity: isVisible ? 1 : 0, reset: true })

// Option B: Use imperative API
const [springs, api] = useSpring(() => ({ opacity: 0 }))
useEffect(() => {
  api.start({ opacity: isVisible ? 1 : 0 })
}, [isVisible, api])

// Option C: Force via key change
<Component key={animationKey} />
```

### Pitfall 2: Custom Component Doesn't Animate

**Symptom**: Wrapping custom component with `animated()` doesn't work

**Cause**: Component doesn't forward `style` prop to native element

**Solution**:
```javascript
// WRONG - style not forwarded
const CustomDiv = ({ children }) => <div>{children}</div>
const AnimatedCustom = animated(CustomDiv)

// RIGHT - style forwarded
const CustomDiv = ({ children, style }) => (
  <div style={style}>{children}</div>
)
const AnimatedCustom = animated(CustomDiv)
```

### Pitfall 3: ForwardRef Breaks Animation

**Symptom**: Component wrapped in `forwardRef` doesn't update

**Cause**: Known React Spring issue with forwardRef

**Solution**: Avoid wrapping animated components with forwardRef, or check for updates in newer versions

### Pitfall 4: Animation Jumps at End

**Symptom**: Animation smooth until very end, then snaps to final value

**Cause**: Precision threshold too large

**Solution**:
```javascript
useSpring({
  opacity: 1,
  config: {
    tension: 170,
    friction: 26,
    precision: 0.0001  // default is 0.01
  }
})
```

### Pitfall 5: Unwanted Bounce/Overshoot

**Symptom**: Animation goes past target then settles back

**Cause**: Spring physics naturally overshoot

**Solution**:
```javascript
useSpring({
  opacity: 1,
  config: {
    tension: 170,
    friction: 26,
    clamp: true  // prevents overshooting
  }
})
```

### Pitfall 6: Animation Too Fast/Slow

**Symptom**: Animation feels too quick or sluggish

**Solution**: Adjust spring physics
```javascript
// Faster - higher tension
config: { tension: 300, friction: 26 }

// Slower - lower tension or higher friction
config: { tension: 100, friction: 40 }

// Use presets
import { config } from 'react-spring'
config: config.slow
```

---

## Animation State Management

### How React Spring Tracks State

Each `SpringValue` maintains:
- **Current value**: Where animation is right now
- **Target value**: Where it's animating toward
- **Velocity**: Current speed of change
- **Animation state**: idle, animating, paused

Controller coordinates these SpringValues and exposes unified API.

### Forcing Re-Animation

Sometimes you need to replay an animation from the beginning:

**Method 1: Imperative restart()**
```javascript
const [springs, api] = useSpring(() => ({
  from: { opacity: 0 },
  to: { opacity: 1 }
}))

// Restart animation
api.start({ reset: true })  // OR
api.start({ from: { opacity: 0 }, to: { opacity: 1 } })
```

**Method 2: reset prop**
```javascript
const [shouldReset, setShouldReset] = useState(false)

useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  reset: shouldReset
})

// Trigger reset
setShouldReset(true)
setTimeout(() => setShouldReset(false), 0)
```

**Method 3: Component key**
```javascript
const [key, setKey] = useState(0)

<animated.div key={key} style={springs}>
  Content
</animated.div>

// Force remount and re-animation
setKey(k => k + 1)
```

### Preventing Unnecessary Re-Renders

React Spring animations run outside React's render cycle, but hook calls can still cause re-renders:

**Bad**: Declarative syntax in component that re-renders often
```javascript
function Component() {
  const springs = useSpring({ opacity: 1 })  // runs every render
  return <animated.div style={springs}>Content</animated.div>
}
```

**Good**: Imperative API prevents re-renders during animation
```javascript
function Component() {
  const [springs, api] = useSpring(() => ({ opacity: 0 }))

  const handleClick = () => {
    api.start({ opacity: 1 })  // no component re-render
  }

  return <animated.div style={springs}>Content</animated.div>
}
```

---

## Duration vs Spring Physics

### When to Use Duration

Use `config: { duration: X }` when:
- Need precise timing (e.g., sync with audio/video)
- Building timeline-based animations
- Coordinating with external systems
- Team is more familiar with duration-based animations

### When to Use Spring Physics

Use spring physics (default) when:
- Want natural, realistic motion
- Need interruptible animations
- Animating in response to user input
- Building UI micro-interactions
- Performance is critical

### Performance Comparison

**Spring Physics**:
- Runs on native thread (when using `native: true`)
- Skips React reconciliation
- Can run at 60fps+ consistently
- Memory efficient

**Duration Mode**:
- Still efficient, but linear interpolation
- Slightly more predictable performance
- Easier to reason about for designers

### Configuration Examples

```javascript
// Physics (recommended)
config: {
  mass: 1,
  tension: 170,
  friction: 26
}

// Duration
config: {
  duration: 1000  // 1 second
}

// Duration with easing
config: {
  duration: 1000,
  easing: t => t * t  // quadratic
}
```

---

## Practical Code Examples

### Example 1: Simple Fade Toggle

```javascript
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function FadeToggle() {
  const [isVisible, setIsVisible] = useState(false)

  const fadeStyles = useSpring({
    opacity: isVisible ? 1 : 0
  })

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      <animated.div style={fadeStyles}>
        I fade in and out!
      </animated.div>
    </div>
  )
}
```

### Example 2: Slide and Fade with Replay

```javascript
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function SlideInWithReplay({ isVisible }) {
  const [key, setKey] = useState(0)

  const animation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)'
    },
    reset: key > 0  // reset on replay, not initial
  })

  const handleReplay = () => {
    setKey(k => k + 1)  // triggers reset
  }

  return (
    <div>
      <button onClick={handleReplay}>Replay</button>
      <animated.div style={animation}>
        Slides in from left!
      </animated.div>
    </div>
  )
}
```

### Example 3: Imperative Control

```javascript
import { useSpring, animated } from 'react-spring'

function ImperativeAnimation() {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, scale: 0.5 },
  }))

  const handleAnimate = () => {
    api.start({
      opacity: 1,
      scale: 1,
      config: { tension: 300, friction: 20 }
    })
  }

  const handleReset = () => {
    api.start({
      opacity: 0,
      scale: 0.5,
      immediate: false
    })
  }

  return (
    <div>
      <button onClick={handleAnimate}>Animate</button>
      <button onClick={handleReset}>Reset</button>
      <animated.div
        style={{
          ...springs,
          width: 100,
          height: 100,
          background: 'blue'
        }}
      />
    </div>
  )
}
```

### Example 4: Visibility with Mount/Unmount

```javascript
import { useState } from 'react'
import { useTransition, animated } from 'react-spring'

function MountAnimation() {
  const [show, setShow] = useState(false)

  const transitions = useTransition(show, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 300, friction: 25 }
  })

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
      {transitions((style, item) =>
        item && (
          <animated.div style={style}>
            I mount and unmount with animation!
          </animated.div>
        )
      )}
    </div>
  )
}
```

### Example 5: Complex Visibility State

```javascript
import { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'

function ComplexVisibility({ isVisible, onComplete }) {
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false)

  const animation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-20px) scale(0.95)'
    },
    to: async (next) => {
      if (isVisible) {
        // Animate in
        await next({
          opacity: 1,
          transform: 'translateY(0px) scale(1)'
        })
        setHasAnimatedIn(true)
      } else if (hasAnimatedIn) {
        // Animate out (only if previously animated in)
        await next({
          opacity: 0,
          transform: 'translateY(20px) scale(0.95)'
        })
      }
    },
    config: config.gentle,
    onRest: () => {
      if (isVisible && hasAnimatedIn) {
        onComplete?.()
      }
    }
  })

  return (
    <animated.div style={animation}>
      Complex animation with callbacks!
    </animated.div>
  )
}
```

### Example 6: Correct Replay Pattern for Visibility

```javascript
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function ProperReplayPattern({ isVisible }) {
  // Key pattern: track visibility changes
  const [visibilityCount, setVisibilityCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      setVisibilityCount(c => c + 1)
    }
  }, [isVisible])

  const animation = useSpring({
    from: { opacity: 0, y: -20 },
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -20
    },
    // Only reset when becoming visible (not on hide)
    reset: visibilityCount > 1 && isVisible,
    config: { tension: 280, friction: 60 }
  })

  return (
    <animated.div
      style={{
        ...animation,
        transform: animation.y.to(y => `translateY(${y}px)`)
      }}
    >
      Replays correctly on each show!
    </animated.div>
  )
}
```

---

## Best Practices Summary

### DO:
- Use `animated.div` and other animated components
- Use spring physics for UI animations
- Use imperative API for event-driven animations
- Use declarative syntax for state-driven animations
- Set `from` values explicitly for predictable initial state
- Use `useTransition` for mount/unmount animations
- Test animations with rapid state changes

### DON'T:
- Use plain DOM elements with SpringValues
- Wrap components with forwardRef unnecessarily
- Rely on `reset: true` for everything (causes re-animation on every render)
- Assume dependency arrays work like useEffect
- Use duration mode unless necessary
- Forget to forward style prop in custom components
- Assume animations will auto-restart on prop changes

### Performance Tips:
- Use `native: true` for transform and opacity animations
- Use imperative API to avoid component re-renders
- Memoize large lists with React.memo
- Use trail/chain for coordinated animations instead of individual springs
- Consider `immediate` flag for instant property updates
- Profile with React DevTools to identify animation bottlenecks

---

## Resources

- **Official Docs**: https://react-spring.dev/
- **Spring Visualizer**: https://react-spring-visualizer.com/
- **GitHub**: https://github.com/pmndrs/react-spring
- **Examples**: https://react-spring.dev/examples

---

## Quick Reference

```javascript
// VISIBILITY TOGGLE (CORRECT PATTERN)
const springs = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 }
})

// REPLAY ANIMATION
const [springs, api] = useSpring(() => ({ opacity: 0 }))
api.start({ opacity: 1, reset: true })

// MOUNT/UNMOUNT
const transitions = useTransition(show, {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
})

// IMPERATIVE CONTROL
const [springs, api] = useSpring(() => ({ x: 0 }))
api.start({ x: 100 })

// PREVENT ANIMATION
immediate: true  // or immediate: ['opacity']
```
