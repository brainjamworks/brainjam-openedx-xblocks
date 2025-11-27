# React Spring Quick Reference
## Cheat Sheet for Common Animation Patterns

---

## Visibility Toggle Pattern (Most Common)

### The RIGHT Way

```javascript
import { useSpring, animated } from 'react-spring'

function Component({ isVisible }) {
  const animation = useSpring({
    from: { opacity: 0 },          // Always start here
    to: {
      opacity: isVisible ? 1 : 0,  // Reactive - updates when isVisible changes
      transform: isVisible
        ? 'translateY(0px)'
        : 'translateY(-20px)'
    }
  })

  return (
    <animated.div style={animation}>
      Content animates in/out!
    </animated.div>
  )
}
```

### Why This Works
- `from` sets initial state (prevents instant appearance)
- `to` uses ternary operator - reacts to state changes
- `animated.div` receives SpringValues and updates DOM directly
- Animation reverses naturally when `isVisible` toggles

---

## Common Mistakes

### Mistake 1: Not Using `animated` Component
```javascript
// WRONG - won't animate
<div style={springs}>Content</div>

// RIGHT
<animated.div style={springs}>Content</animated.div>
```

### Mistake 2: Missing `from` Prop
```javascript
// WRONG - if isVisible is true initially, starts at opacity: 1 (no animation)
const springs = useSpring({ opacity: isVisible ? 1 : 0 })

// RIGHT - always starts from opacity: 0
const springs = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 }
})
```

### Mistake 3: Using Imperative API for Simple State
```javascript
// WRONG - unnecessary complexity
const [springs, api] = useSpring(() => ({ opacity: 0 }))
useEffect(() => {
  api.start({ opacity: isVisible ? 1 : 0 })
}, [isVisible])

// RIGHT - declarative is simpler
const springs = useSpring({
  opacity: isVisible ? 1 : 0
})
```

### Mistake 4: Custom Component Doesn't Forward Style
```javascript
// WRONG - style prop not passed to native element
const CustomDiv = ({ children }) => <div>{children}</div>
const Animated = animated(CustomDiv)  // Won't work!

// RIGHT - style forwarded
const CustomDiv = ({ children, style }) => <div style={style}>{children}</div>
const Animated = animated(CustomDiv)  // Works!
```

---

## Animation Won't Replay? Here's the Fix

If animation plays once but not on subsequent visibility changes:

### Solution 1: Track Visibility Count (Recommended)

```javascript
function Component({ isVisible }) {
  const [showCount, setShowCount] = useState(0)

  useEffect(() => {
    if (isVisible) setShowCount(c => c + 1)
  }, [isVisible])

  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: isVisible ? 1 : 0 },
    reset: showCount > 1 && isVisible  // Reset on 2nd+ shows
  })

  return <animated.div style={animation}>Content</animated.div>
}
```

### Solution 2: Use Component Key

```javascript
function Parent({ isVisible }) {
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (isVisible) setKey(k => k + 1)
  }, [isVisible])

  return <Component key={key} />  // Forces remount
}
```

### Solution 3: Imperative API

```javascript
function Component({ isVisible }) {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0 }
  }))

  useEffect(() => {
    api.start({
      opacity: isVisible ? 1 : 0,
      from: isVisible ? { opacity: 0 } : undefined  // Reset on show
    })
  }, [isVisible, api])

  return <animated.div style={springs}>Content</animated.div>
}
```

---

## Imperative vs Declarative

### Use Declarative (Direct Object) When:
- Animation depends on component state/props
- Simple show/hide toggles
- Want automatic updates on state changes

```javascript
const springs = useSpring({
  opacity: isVisible ? 1 : 0
})
```

### Use Imperative (Factory Function) When:
- Triggering animations from events (onClick, onHover)
- Need manual control (start, stop, pause)
- Want to prevent component re-renders
- Complex animation sequences

```javascript
const [springs, api] = useSpring(() => ({ opacity: 0 }))

const handleClick = () => {
  api.start({ opacity: 1 })  // No component re-render!
}
```

---

## Mount/Unmount Animations

Use `useTransition` when element should be added/removed from DOM:

```javascript
import { useTransition, animated } from 'react-spring'

function Component({ show }) {
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' }
  })

  return transitions((style, item) =>
    item && <animated.div style={style}>Content</animated.div>
  )
}
```

**When to use**:
- Element should be removed from DOM when hidden
- Animating lists (items added/removed)
- Modals, tooltips, popovers

**When NOT to use**:
- Element should stay in DOM (just hidden)
- Frequent toggles (mount/unmount is expensive)
- Need to preserve state when hidden

---

## Config Presets

```javascript
import { useSpring, config } from 'react-spring'

// Use presets
useSpring({
  opacity: 1,
  config: config.gentle  // or config.slow, config.wobbly, etc.
})

// Or customize
useSpring({
  opacity: 1,
  config: {
    tension: 280,  // Higher = faster
    friction: 60   // Higher = less bouncy
  }
})
```

**Quick Config Guide**:
- `default`: General purpose (tension 170, friction 26)
- `gentle`: Soft, subtle (tension 120, friction 14)
- `wobbly`: Bouncy (tension 180, friction 12)
- `stiff`: Snappy (tension 210, friction 20)
- `slow`: Gradual (tension 280, friction 60)
- `molasses`: Very slow (tension 280, friction 120)

**Prevent Bounce**: Add `clamp: true`
```javascript
config: { ...config.default, clamp: true }
```

---

## Useful Flags

### `immediate` - Skip Animation

```javascript
// Skip all animations
useSpring({ opacity: 1, immediate: true })

// Skip specific properties
useSpring({
  opacity: 1,
  x: 100,
  immediate: ['opacity']  // only opacity instant, x animates
})

// Conditional
useSpring({
  opacity: 1,
  immediate: isFirstRender  // no animation on mount
})
```

### `reset` - Restart from Beginning

```javascript
useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  reset: true  // Re-runs animation every render
})
```

**Warning**: `reset: true` triggers on EVERY render. Use conditionally:
```javascript
reset: shouldReplay  // Only reset when this is true
```

### `reverse` - Swap from/to

```javascript
useSpring({
  from: { x: 0 },
  to: { x: 100 },
  reverse: isReversed  // When true: animates 100 → 0
})
```

---

## Animation Events

```javascript
useSpring({
  opacity: 1,
  onStart: () => console.log('Animation started'),
  onChange: (result) => console.log('Value:', result.value),
  onRest: () => console.log('Animation completed')
})
```

**Useful for**:
- Triggering side effects after animation
- Chaining animations
- Analytics/tracking
- Cleanup actions

---

## Transform Animations

### Method 1: String Template

```javascript
const springs = useSpring({
  x: isVisible ? 0 : -100,
  opacity: isVisible ? 1 : 0
})

<animated.div
  style={{
    opacity: springs.opacity,
    transform: springs.x.to(x => `translateX(${x}px)`)
  }}
>
  Content
</animated.div>
```

### Method 2: Interpolation

```javascript
const springs = useSpring({
  xy: isVisible ? [0, 0] : [-100, 20]
})

<animated.div
  style={{
    transform: springs.xy.to(
      (x, y) => `translate(${x}px, ${y}px)`
    )
  }}
>
  Content
</animated.div>
```

---

## Performance Tips

### Use `native` Flag for Better Performance

```javascript
useSpring({
  opacity: 1,
  config: { tension: 170, friction: 26 },
  native: true  // Runs on native thread (when possible)
})
```

### Prevent Unnecessary Re-Renders

```javascript
// BAD - component re-renders during animation
function Component() {
  const springs = useSpring({ opacity: 1 })
  return <animated.div style={springs}>Content</animated.div>
}

// GOOD - imperative API prevents re-renders
function Component() {
  const [springs, api] = useSpring(() => ({ opacity: 0 }))

  const animate = () => api.start({ opacity: 1 })  // No re-render!

  return <animated.div style={springs}>Content</animated.div>
}
```

### Memoize Large Lists

```javascript
const AnimatedItem = React.memo(({ item, style }) => (
  <animated.div style={style}>{item}</animated.div>
))
```

---

## Debugging Checklist

### Animation doesn't run at all:
- [ ] Using `animated.div` (not plain `div`)?
- [ ] Custom component forwards `style` prop?
- [ ] SpringValues actually changing?
- [ ] Not wrapped with `forwardRef`?

### Animation runs once but not again:
- [ ] Add `reset` flag conditionally
- [ ] Use imperative API with manual triggers
- [ ] Change component `key` to force remount

### Animation appears instantly:
- [ ] Set explicit `from` values
- [ ] Check `immediate` flag not set
- [ ] Ensure initial state ≠ target state

### Animation too bouncy/fast/slow:
- [ ] Adjust `config.tension` (speed)
- [ ] Adjust `config.friction` (bounciness)
- [ ] Use `clamp: true` to prevent overshoot

### Animation looks janky:
- [ ] Reduce `config.precision` to 0.0001
- [ ] Use `native: true` flag
- [ ] Check for expensive renders during animation

---

## Copy-Paste Templates

### Fade In/Out Toggle
```javascript
const fade = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 }
})
return <animated.div style={fade}>Content</animated.div>
```

### Slide In/Out Toggle
```javascript
const slide = useSpring({
  from: { x: -100, opacity: 0 },
  to: {
    x: isVisible ? 0 : -100,
    opacity: isVisible ? 1 : 0
  }
})
return (
  <animated.div style={{
    ...slide,
    transform: slide.x.to(x => `translateX(${x}px)`)
  }}>
    Content
  </animated.div>
)
```

### Scale In/Out Toggle
```javascript
const scale = useSpring({
  from: { scale: 0, opacity: 0 },
  to: {
    scale: isVisible ? 1 : 0,
    opacity: isVisible ? 1 : 0
  }
})
return (
  <animated.div style={{
    ...scale,
    transform: scale.scale.to(s => `scale(${s})`)
  }}>
    Content
  </animated.div>
)
```

### Button Click Animation
```javascript
const [springs, api] = useSpring(() => ({ scale: 1 }))

const handleClick = () => {
  api.start({ scale: 1.1 })
  setTimeout(() => api.start({ scale: 1 }), 200)
}

return (
  <animated.button
    onClick={handleClick}
    style={{
      transform: springs.scale.to(s => `scale(${s})`)
    }}
  >
    Click Me
  </animated.button>
)
```

### Modal with Backdrop
```javascript
const transitions = useTransition(isOpen, {
  from: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 },
  leave: { opacity: 0, scale: 0.8 }
})

return transitions((style, item) =>
  item && (
    <>
      <animated.div
        style={{ opacity: style.opacity }}
        className="backdrop"
        onClick={close}
      />
      <animated.div
        style={{
          opacity: style.opacity,
          transform: style.scale.to(s => `scale(${s})`)
        }}
        className="modal"
      >
        Modal content
      </animated.div>
    </>
  )
)
```

---

## Decision Tree

**Does element mount/unmount?**
- Yes → Use `useTransition`
- No → Use `useSpring`

**Triggered by state change or user event?**
- State → Use declarative syntax
- Event → Use imperative API

**Animation plays once but not again?**
- Add conditional `reset` flag
- Or use imperative API
- Or change component `key`

**Custom component not animating?**
- Forward `style` prop to native element
- Remove `forwardRef` wrapper
- Ensure using `animated(Component)`

---

## Resources

- **Full Guide**: See REACT_SPRING_COMPREHENSIVE_GUIDE.md
- **Official Docs**: https://react-spring.dev/
- **Visualizer**: https://react-spring-visualizer.com/
- **Examples**: https://react-spring.dev/examples
