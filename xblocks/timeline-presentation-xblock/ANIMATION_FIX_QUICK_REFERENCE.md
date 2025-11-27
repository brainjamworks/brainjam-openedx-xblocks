# Animation Fix - Quick Reference

## The Problem

Your animations aren't working because `getAnimationProps()` recalculates on every render, creating new object references that confuse React Spring.

## The Solution

Add `useMemo` to memoize animation props:

```typescript
// ❌ Current code (lines 176-181)
const currentProps = getAnimationProps();
const springProps = useSpring({
  ...currentProps,
  config: { duration: animationDuration },
});

// ✅ Fixed code
const currentProps = React.useMemo(
  () => getAnimationProps(),
  [isVisible, event.animation, event.animationDirection]
);
const springProps = useSpring({
  ...currentProps,
  config: { duration: animationDuration },
});
```

## Secondary Issue: Slide Animation

When slide animation sets `x` and `y` in the spring props, don't override them in the JSX:

```typescript
// ❌ Current (line 209)
<AnimatedText
  {...springProps}  // Contains animated x/y
  x={pos.x}         // ❌ Overrides spring x!
  y={pos.y}
/>

// ✅ Fixed
<AnimatedText
  {...springProps}  // Contains animated x/y
  // Only set x/y if NOT in springProps
  {...(event.animation !== 'slide' && { x: pos.x, y: pos.y })}
/>
```

## Why This Works

1. `useMemo` only recalculates when dependencies change
2. React Spring can properly detect when `isVisible` changes
3. Animation triggers smoothly when visibility toggles
4. No more recalculation on unrelated renders

## Test It

1. Apply the useMemo fix
2. Run your timeline
3. Elements should now smoothly animate in/out based on audio timing
4. Replay should reset and restart animations cleanly

## Your Architecture is Actually Great

- **GSAP Timeline**: Handles 60fps audio sync (perfect for this)
- **React Spring**: Handles smooth animations (perfect for this)
- **Konva Canvas**: Handles precise rendering (perfect for this)

Just needed this one memoization fix!
