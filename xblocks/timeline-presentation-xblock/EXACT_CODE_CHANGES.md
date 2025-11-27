# Exact Code Changes for TimelineKonvaElement.tsx

## Change 1: Add useMemo import

**Location:** Line 15

```typescript
// Before
import React from 'react';

// After
import React, { useMemo } from 'react';
```

## Change 2: Memoize animation props

**Location:** Lines 173-181

```typescript
// Before
const animationDuration = event.animationDuration || 500;

// Calculate animation props based on current visibility
const currentProps = getAnimationProps();

const springProps = useSpring({
  ...currentProps,
  config: { duration: animationDuration },
});

// After
const animationDuration = event.animationDuration || 500;

// Memoize animation props to prevent recalculation on every render
const currentProps = useMemo(
  () => getAnimationProps(),
  [
    isVisible,
    event.animation,
    event.animationDirection,
    event.position.x,
    event.position.y,
    event.lineCoordinates,
    event.dimensions?.width,
    event.dimensions?.height,
    stageDimensions.width,
    stageDimensions.height,
  ]
);

const springProps = useSpring({
  ...currentProps,
  config: { duration: animationDuration },
});
```

## Change 3: Fix slide animation x/y override

**Location:** Line 209 (renderText function)

```typescript
// Before
return (
  <AnimatedText
    {...springProps}
    x={pos.x}
    y={pos.y}
    text={event.content || ''}
    fontSize={event.fontSize || event.dimensions?.height || 16}
    fill={event.color || '#333F48'}
    fontFamily="Poppins, sans-serif"
    fontStyle="normal"
    offsetX={0}
    offsetY={(event.fontSize || event.dimensions?.height || 16) / 2}
    listening={false}
  />
);

// After
return (
  <AnimatedText
    {...springProps}
    // Only set x/y if they're not being animated (slide animation animates these)
    {...(event.animation !== 'slide' && { x: pos.x, y: pos.y })}
    text={event.content || ''}
    fontSize={event.fontSize || event.dimensions?.height || 16}
    fill={event.color || '#333F48'}
    fontFamily="Poppins, sans-serif"
    fontStyle="normal"
    offsetX={0}
    offsetY={(event.fontSize || event.dimensions?.height || 16) / 2}
    listening={false}
  />
);
```

## Change 4: Fix circle and rectangle positioning for slide

**Location:** Lines 252-261 (renderCircle function)

```typescript
// Before
return (
  <AnimatedCircle
    {...springProps}
    x={pos.x}
    y={pos.y}
    radius={radiusPixels}
    fill={event.color || '#00A689'}
    listening={false}
  />
);

// After
return (
  <AnimatedCircle
    {...springProps}
    {...(event.animation !== 'slide' && { x: pos.x, y: pos.y })}
    radius={radiusPixels}
    fill={event.color || '#00A689'}
    listening={false}
  />
);
```

**Location:** Lines 271-285 (renderRectangle function)

```typescript
// Before
return (
  <AnimatedRect
    {...springProps}
    x={pos.x}
    y={pos.y}
    width={width}
    height={height}
    offsetX={width / 2}
    offsetY={height / 2}
    fill={event.color || '#00A689'}
    cornerRadius={4}
    listening={false}
  />
);

// After
return (
  <AnimatedRect
    {...springProps}
    {...(event.animation !== 'slide' && { x: pos.x, y: pos.y })}
    width={width}
    height={height}
    offsetX={width / 2}
    offsetY={height / 2}
    fill={event.color || '#00A689'}
    cornerRadius={4}
    listening={false}
  />
);
```

## Optional Enhancement: Add explicit `from` state

**Location:** Lines 173-181 (inside useSpring)

```typescript
// Current
const springProps = useSpring({
  ...currentProps,
  config: { duration: animationDuration },
});

// Enhanced (prevents initial flicker)
const springProps = useSpring({
  from: { opacity: 0 },  // Explicit initial state
  to: currentProps,
  config: { duration: animationDuration },
});
```

## Testing the Fix

After making these changes:

1. **Test fade animation**: Element should smoothly fade in/out
2. **Test scale animation**: Element should smoothly scale up/down
3. **Test slide animation**: Element should slide from offset position
4. **Test wipe animation**: Element should reveal with directional wipe
5. **Test replay**: All animations should reset and replay cleanly

## Expected Behavior

- **On visibility change**: Smooth animation from hidden to visible state
- **On replay**: All elements reset to hidden, then animate in sequence
- **No flicker**: Elements don't jump or appear instantly
- **Smooth timing**: Animations respect duration settings

## Debug Tips

If animations still don't work:

1. **Check console**: Look for Konva warnings about scale values
2. **Check dependencies**: Ensure `isVisible` is changing correctly
3. **Check springProps**: Log `springProps` to verify values
4. **Check performance**: Open React DevTools Profiler

```typescript
// Add temporary debug logging
console.log('TimelineKonvaElement render:', {
  id: event.id,
  isVisible,
  animation: event.animation,
  springProps
});
```

## Why This Works

1. **useMemo prevents recalculation**: Animation props only change when dependencies change
2. **Proper prop spreading**: Spring-animated properties (x/y) aren't overridden
3. **React Spring can detect changes**: Stable object references enable proper diffing
4. **Animations trigger correctly**: When `isVisible` changes, spring smoothly transitions

Done! Your animations should now work perfectly.
