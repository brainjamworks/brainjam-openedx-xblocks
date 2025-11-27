# React Spring: Visibility Animation Patterns
## Complete Guide for Show/Hide/Replay Scenarios

---

## The Problem

You have a component that needs to:
1. Animate IN when `isVisible` becomes `true`
2. Animate OUT when `isVisible` becomes `false`
3. Replay the animation each time it becomes visible again
4. Not appear instantly in final position

This is trickier than it seems because React Spring animations **don't automatically restart** when props change - they only animate **from current position to target position**.

---

## Understanding the Issue

### Why Animations Don't Replay

```javascript
// THIS WON'T WORK AS EXPECTED
function Component({ isVisible }) {
  const springs = useSpring({
    opacity: isVisible ? 1 : 0
  })

  return <animated.div style={springs}>Content</animated.div>
}

// Timeline:
// 1. isVisible = true  → opacity animates 0 → 1 ✓
// 2. isVisible = false → opacity animates 1 → 0 ✓
// 3. isVisible = true  → opacity animates 0 → 1 (but already at 0, so instant) ✗
```

**The problem**: After step 2, opacity is already at 0. When `isVisible` becomes true again, React Spring sees:
- Current value: 0
- Target value: 1
- No need to start fresh - just continue from 0

This causes the appearance of "no animation" because it happens so fast.

---

## Solution 1: The `from` Prop Pattern (Simplest)

### Implementation

```javascript
import { useSpring, animated } from 'react-spring'

function Component({ isVisible }) {
  const animation = useSpring({
    from: { opacity: 0, y: -20 },  // ALWAYS start here
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -20
    }
  })

  return (
    <animated.div
      style={{
        opacity: animation.opacity,
        transform: animation.y.to(y => `translateY(${y}px)`)
      }}
    >
      Content
    </animated.div>
  )
}
```

### Why This Works (Usually)

The `from` prop tells React Spring "this is the initial state." On first render, it starts from these values. However, this **still doesn't guarantee replay** on subsequent visibility changes.

### When to Use

- Simple fade in/out where replay isn't critical
- First render animation is the priority
- Animation timing is very short (so instant appearance isn't noticeable)

---

## Solution 2: Conditional Reset (Recommended)

### Implementation

```javascript
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function Component({ isVisible }) {
  const [visibilityCount, setVisibilityCount] = useState(0)

  // Track how many times component has become visible
  useEffect(() => {
    if (isVisible) {
      setVisibilityCount(count => count + 1)
    }
  }, [isVisible])

  const animation = useSpring({
    from: { opacity: 0, y: -20 },
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -20
    },
    // Reset to `from` values when becoming visible (after first time)
    reset: visibilityCount > 1 && isVisible,
    config: { tension: 280, friction: 60 }
  })

  return (
    <animated.div
      style={{
        opacity: animation.opacity,
        transform: animation.y.to(y => `translateY(${y}px)`)
      }}
    >
      Content replays correctly!
    </animated.div>
  )
}
```

### Why This Works

- `visibilityCount` tracks how many times component becomes visible
- `reset: visibilityCount > 1 && isVisible` means:
  - First show: no reset (uses `from` naturally)
  - Hide: no reset (animates to hidden state)
  - Second show: **reset to `from` values**, then animate to visible
  - Subsequent shows: same behavior

### When to Use

- Need reliable replay behavior
- Component should stay in DOM when hidden
- Want to preserve component state between shows
- Default recommendation for most use cases

---

## Solution 3: Imperative API (Most Control)

### Implementation

```javascript
import { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function Component({ isVisible }) {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, y: -20 }
  }))

  useEffect(() => {
    if (isVisible) {
      // Explicitly reset and animate in
      api.start({
        from: { opacity: 0, y: -20 },
        to: { opacity: 1, y: 0 }
      })
    } else {
      // Animate out (no reset needed)
      api.start({
        to: { opacity: 0, y: -20 }
      })
    }
  }, [isVisible, api])

  return (
    <animated.div
      style={{
        opacity: springs.opacity,
        transform: springs.y.to(y => `translateY(${y}px)`)
      }}
    >
      Full control over animation!
    </animated.div>
  )
}
```

### Why This Works

- `api.start()` gives explicit control over animation targets
- Setting `from` in the start call forces reset to those values
- Separate logic for show vs hide animations
- No component re-render on animation updates

### When to Use

- Need different animations for show vs hide
- Want to sequence multiple animations
- Need to coordinate with other effects
- Performance is critical (prevents re-renders)

---

## Solution 4: Component Key Pattern (Nuclear Option)

### Implementation

```javascript
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

// Child component with animation
function AnimatedChild() {
  const animation = useSpring({
    from: { opacity: 0, y: -20 },
    to: { opacity: 1, y: 0 }
  })

  return (
    <animated.div
      style={{
        opacity: animation.opacity,
        transform: animation.y.to(y => `translateY(${y}px)`)
      }}
    >
      Remounts on each show!
    </animated.div>
  )
}

// Parent component managing visibility
function Parent({ isVisible }) {
  const [mountKey, setMountKey] = useState(0)

  useEffect(() => {
    if (isVisible) {
      // Force remount by changing key
      setMountKey(key => key + 1)
    }
  }, [isVisible])

  if (!isVisible) return null

  return <AnimatedChild key={mountKey} />
}
```

### Why This Works

- Changing `key` forces React to unmount and remount component
- Each mount runs the animation from scratch
- Guaranteed fresh animation every time

### When to Use

- Last resort when other solutions fail
- Component should reset all state on show
- Simple component without expensive setup
- Okay with unmount/remount cost

### Downsides

- Loses all component state
- Re-runs all effects
- More expensive than other solutions
- Can cause flicker if not careful

---

## Solution 5: useTransition for Mount/Unmount

### Implementation

```javascript
import { useTransition, animated } from 'react-spring'

function Component({ isVisible }) {
  const transitions = useTransition(isVisible, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 280, friction: 60 }
  })

  return transitions((style, item) =>
    item ? (
      <animated.div style={style}>
        Mounts and unmounts with animation!
      </animated.div>
    ) : null
  )
}
```

### Why This Works

- `useTransition` is designed for mount/unmount animations
- `enter` animation runs on every mount
- `leave` animation runs before unmount
- Component fully removed from DOM when hidden

### When to Use

- Element should be removed from DOM when hidden
- Don't need to preserve component state
- Animating lists or dynamic content
- Modals, tooltips, popovers

### Downsides

- Component state is lost when hidden
- Mount/unmount is more expensive than show/hide
- Can't access hidden element in DOM

---

## Comparison Matrix

| Solution | Replay Reliability | Keeps State | Performance | Complexity |
|----------|-------------------|-------------|-------------|------------|
| `from` prop only | ⚠️ Low | ✅ Yes | ✅ Best | 🟢 Lowest |
| Conditional reset | ✅ High | ✅ Yes | ✅ Best | 🟡 Low |
| Imperative API | ✅ High | ✅ Yes | ✅ Best | 🟡 Medium |
| Component key | ✅ Guaranteed | ❌ No | ⚠️ Good | 🟢 Low |
| useTransition | ✅ Guaranteed | ❌ No | ⚠️ Good | 🟡 Medium |

---

## Advanced: Combining Patterns

### Example: Staggered Multi-Element Animation

```javascript
import { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'

function StaggeredContent({ isVisible }) {
  const [showCount, setShowCount] = useState(0)

  useEffect(() => {
    if (isVisible) setShowCount(c => c + 1)
  }, [isVisible])

  const header = useSpring({
    from: { opacity: 0, y: -20 },
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -20
    },
    reset: showCount > 1 && isVisible,
    delay: isVisible ? 0 : 0,
    config: config.gentle
  })

  const body = useSpring({
    from: { opacity: 0, y: -20 },
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -20
    },
    reset: showCount > 1 && isVisible,
    delay: isVisible ? 100 : 0,  // Stagger: 100ms after header
    config: config.gentle
  })

  const footer = useSpring({
    from: { opacity: 0, y: -20 },
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -20
    },
    reset: showCount > 1 && isVisible,
    delay: isVisible ? 200 : 0,  // Stagger: 200ms after header
    config: config.gentle
  })

  return (
    <div>
      <animated.div style={{
        opacity: header.opacity,
        transform: header.y.to(y => `translateY(${y}px)`)
      }}>
        Header
      </animated.div>

      <animated.div style={{
        opacity: body.opacity,
        transform: body.y.to(y => `translateY(${y}px)`)
      }}>
        Body content
      </animated.div>

      <animated.div style={{
        opacity: footer.opacity,
        transform: footer.y.to(y => `translateY(${y}px)`)
      }}>
        Footer
      </animated.div>
    </div>
  )
}
```

---

## Advanced: Sequential Animations

### Example: Animate In, Pause, Animate Out

```javascript
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function AutoPlayContent({ isVisible, duration = 3000 }) {
  const [phase, setPhase] = useState('hidden') // hidden | entering | visible | leaving

  useEffect(() => {
    if (isVisible && phase === 'hidden') {
      setPhase('entering')
    } else if (!isVisible && phase === 'visible') {
      setPhase('leaving')
    }
  }, [isVisible, phase])

  const animation = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: async (next) => {
      if (phase === 'entering') {
        await next({ opacity: 1, scale: 1 })
        setPhase('visible')
      } else if (phase === 'leaving') {
        await next({ opacity: 0, scale: 0.8 })
        setPhase('hidden')
      }
    },
    config: { tension: 280, friction: 60 }
  })

  // Auto-hide after duration
  useEffect(() => {
    if (phase === 'visible') {
      const timer = setTimeout(() => {
        setPhase('leaving')
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [phase, duration])

  return (
    <animated.div
      style={{
        opacity: animation.opacity,
        transform: animation.scale.to(s => `scale(${s})`)
      }}
    >
      Auto-hides after {duration}ms
    </animated.div>
  )
}
```

---

## Advanced: Animation with Callbacks

### Example: Notify Parent When Animation Completes

```javascript
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

function Component({ isVisible, onAnimationComplete }) {
  const [hasShown, setHasShown] = useState(false)

  const animation = useSpring({
    from: { opacity: 0, y: -20 },
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : -20
    },
    reset: hasShown && isVisible,
    onRest: (result) => {
      // Called when animation completes
      if (isVisible && result.value.opacity === 1) {
        setHasShown(true)
        onAnimationComplete?.()
      }
    }
  })

  return (
    <animated.div
      style={{
        opacity: animation.opacity,
        transform: animation.y.to(y => `translateY(${y}px)`)
      }}
    >
      Notifies parent when visible
    </animated.div>
  )
}

// Usage
function Parent() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Component
      isVisible={isVisible}
      onAnimationComplete={() => {
        console.log('Animation finished!')
        // Could trigger next animation, analytics, etc.
      }}
    />
  )
}
```

---

## Debugging Visibility Animations

### Checklist

1. **Animation doesn't play at all**:
   - [ ] Using `animated.div` not plain `div`?
   - [ ] Values actually changing in `to` prop?
   - [ ] No `immediate: true` flag?
   - [ ] Custom component forwards `style`?

2. **Animation plays once but not on replay**:
   - [ ] Added `reset` flag?
   - [ ] Using conditional reset (not `reset: true`)?
   - [ ] Tried imperative API approach?
   - [ ] Considered component key pattern?

3. **Animation appears instantly**:
   - [ ] Set explicit `from` values?
   - [ ] Initial state different from target?
   - [ ] Check if `immediate` is set?

4. **Animation replays on every render**:
   - [ ] Is `reset: true` without condition?
   - [ ] Should use conditional reset instead?
   - [ ] Consider imperative API to avoid re-renders?

5. **Animation too fast/slow/bouncy**:
   - [ ] Adjust `config.tension` (speed)
   - [ ] Adjust `config.friction` (damping)
   - [ ] Try config presets (gentle, slow, etc.)
   - [ ] Add `clamp: true` to prevent overshoot

---

## Best Practices

### DO:
- Use conditional reset for reliable replay
- Set explicit `from` values for predictable initial state
- Use `useTransition` for mount/unmount scenarios
- Test rapid visibility toggles (show/hide/show/hide fast)
- Provide animation callbacks for sequencing

### DON'T:
- Use `reset: true` without condition (animates every render)
- Forget to use `animated.div` (won't animate)
- Assume animation will restart automatically (it won't)
- Overuse component key pattern (loses state)
- Mix mount/unmount with show/hide patterns

---

## Quick Decision Guide

**Q: Should element stay in DOM when hidden?**
- Yes → Use `useSpring` with conditional reset
- No → Use `useTransition`

**Q: Need to preserve state when hidden?**
- Yes → Use `useSpring`, avoid component key
- No → Component key or `useTransition` is fine

**Q: Animation triggered by state or event?**
- State → Use declarative with conditional reset
- Event → Use imperative API

**Q: Need different animations for show vs hide?**
- Yes → Use imperative API
- No → Declarative is simpler

**Q: Animation still not working?**
- Last resort → Component key pattern

---

## Copy-Paste Template (Recommended Pattern)

```javascript
import { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'

function VisibilityAnimation({ isVisible, children }) {
  const [showCount, setShowCount] = useState(0)

  useEffect(() => {
    if (isVisible) setShowCount(c => c + 1)
  }, [isVisible])

  const animation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-20px)'
    },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translateY(0px)'
        : 'translateY(-20px)'
    },
    reset: showCount > 1 && isVisible,
    config: config.gentle
  })

  return (
    <animated.div style={animation}>
      {children}
    </animated.div>
  )
}

// Usage
<VisibilityAnimation isVisible={show}>
  Content that animates in and out!
</VisibilityAnimation>
```

---

## Resources

- **Full Documentation**: REACT_SPRING_COMPREHENSIVE_GUIDE.md
- **Quick Reference**: REACT_SPRING_QUICK_REFERENCE.md
- **Official Docs**: https://react-spring.dev/
