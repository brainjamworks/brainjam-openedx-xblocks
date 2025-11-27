# React Spring Konva Integration Guide

## Critical Finding: Your Implementation is ALMOST Correct

After deep research and code analysis, I found that your implementation in `TimelineKonvaElement.tsx` is actually **very close** to the correct pattern. The issue is subtle but important.

---

## How @react-spring/konva Works

### Architecture Overview

1. **@react-spring/konva** is a specialized React Spring target that bridges spring animations with Konva's canvas rendering
2. It provides `animated()` wrapper function that converts Konva components into spring-animated versions
3. Animation values are applied directly to Konva nodes via reconciler logic
4. Canvas updates are triggered automatically when spring values change

### The animated() Wrapper

```typescript
import { animated } from '@react-spring/konva';
import { Text, Circle, Rect, Line, Arrow } from 'react-konva';

// Create animated versions of Konva components
const AnimatedText = animated(Text);
const AnimatedCircle = animated(Circle);
const AnimatedRect = animated(Rect);
const AnimatedLine = animated(Line);
const AnimatedArrow = animated(Arrow);
```

**What this does:**
- Wraps Konva components to accept SpringValue props
- Enables smooth interpolation of numeric properties (x, y, opacity, scale, etc.)
- Automatically updates the canvas when values change
- Works with all animatable Konva properties

---

## The Two API Patterns

### Pattern 1: useSpring Hook (Modern - Recommended)

**Best for:** Functional components, modern React, better readability

```typescript
import { useSpring, animated } from '@react-spring/konva';
import { Rect } from 'react-konva';

const AnimatedRect = animated(Rect);

function MyComponent({ isVisible }) {
  // Define spring animation
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 100 : 50,
    config: { duration: 500 }
  });

  // Apply to animated component
  return (
    <AnimatedRect
      {...springProps}
      y={50}
      width={100}
      height={100}
      fill="hotpink"
    />
  );
}
```

### Pattern 2: Spring Component (Legacy)

**Best for:** Class components, render prop patterns

```typescript
import { Spring, animated } from '@react-spring/konva';
import { Rect } from 'react-konva';

const AnimatedRect = animated(Rect);

function MyComponent({ isVisible }) {
  return (
    <Spring
      native
      from={{ opacity: 0, x: 50 }}
      to={{ opacity: isVisible ? 1 : 0, x: isVisible ? 100 : 50 }}
      config={{ duration: 500 }}
    >
      {(props) => (
        <AnimatedRect
          {...props}
          y={50}
          width={100}
          height={100}
          fill="hotpink"
        />
      )}
    </Spring>
  );
}
```

**Important:** Always use `native` prop with Spring component for performance

---

## Critical Issue in Your Implementation

### Your Current Code (Lines 173-181)

```typescript
const springProps = useSpring({
  ...currentProps,  // ❌ This recalculates on every render
  config: { duration: animationDuration },
});
```

### The Problem

Your `getAnimationProps()` function is called **outside** of `useSpring`, which means:

1. `currentProps` is recalculated on every render
2. `useSpring` receives a new object reference every time
3. React Spring can't properly detect when `isVisible` actually changes
4. This causes two issues:
   - Animation may not trigger
   - Or animation restarts unnecessarily on unrelated re-renders

### The Fix

**Option A: Move logic inside useSpring (Recommended)**

```typescript
const springProps = useSpring({
  // Calculate animation props inline based on isVisible
  opacity: isVisible ? 1 : 0,
  x: (() => {
    if (event.animation === 'slide') {
      const pos = percentToPixels(event.position.x, event.position.y);
      const direction = event.animationDirection || 'right';
      const offset = 50;

      if (!isVisible) {
        if (direction === 'right') return pos.x - offset;
        if (direction === 'left') return pos.x + offset;
      }
      return pos.x;
    }
    return percentToPixels(event.position.x, event.position.y).x;
  })(),
  // ... other properties
  config: { duration: animationDuration },
});
```

**Option B: Memoize getAnimationProps with useMemo**

```typescript
// Memoize the animation props so they only change when isVisible changes
const currentProps = React.useMemo(
  () => getAnimationProps(),
  [isVisible, event.animation, event.animationDirection]
);

const springProps = useSpring({
  ...currentProps,
  config: { duration: animationDuration },
});
```

**Option C: Use `to` function pattern for dynamic values**

```typescript
const springProps = useSpring({
  to: getAnimationProps(),  // useSpring handles object comparison
  config: { duration: animationDuration },
});
```

---

## Visibility-Based Animation Pattern (Your Exact Use Case)

### The Standard Pattern

```typescript
import { useSpring, animated } from '@react-spring/konva';
import { Text } from 'react-konva';

const AnimatedText = animated(Text);

interface AnimatedElementProps {
  isVisible: boolean;
  text: string;
  x: number;
  y: number;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  isVisible,
  text,
  x,
  y
}) => {
  // Spring animation based on visibility
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 500 }
  });

  return (
    <AnimatedText
      {...springProps}
      text={text}
      x={x}
      y={y}
      fontSize={16}
      fill="#333"
    />
  );
};
```

### Multiple Animation Types

```typescript
const getAnimationConfig = (animationType: string, isVisible: boolean) => {
  switch (animationType) {
    case 'fade':
      return { opacity: isVisible ? 1 : 0 };

    case 'scale':
      return {
        opacity: isVisible ? 1 : 0,
        scaleX: isVisible ? 1 : 0.01,
        scaleY: isVisible ? 1 : 0.01,
      };

    case 'slide-right':
      return {
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -50,  // Offset position, not absolute
      };

    default:
      return { opacity: isVisible ? 1 : 0 };
  }
};

// Usage
const springProps = useSpring({
  ...getAnimationConfig(event.animation, isVisible),
  config: { duration: 500 }
});
```

---

## Reset/Replay Functionality

### Method 1: Change Component Key (Simplest)

```typescript
function DiagramCanvas({ visibleEventIds, resetTrigger }) {
  return (
    <Layer>
      {events.map(event => (
        <TimelineKonvaElement
          key={`${event.id}-${resetTrigger}`}  // ✅ Forces remount on replay
          event={event}
          isVisible={visibleEventIds.has(event.id)}
        />
      ))}
    </Layer>
  );
}
```

### Method 2: Reset Props (Your Current Approach - Good!)

```typescript
// In TimelinePlayer.tsx
const handleReplay = () => {
  audio.currentTime = 0;
  setCurrentTime(0);  // ✅ This clears visibleEventIds via useGSAPTimeline
  audio.play();
};
```

This works because:
1. Setting `currentTime = 0` triggers `useGSAPTimeline` to recalculate
2. `visibleEventIds` becomes empty Set
3. All elements receive `isVisible: false`
4. Springs animate to hidden state
5. Then timeline starts again, animating to visible state

### Method 3: Use `reset` prop (Nuclear option)

```typescript
const [resetKey, setResetKey] = useState(0);

const springProps = useSpring({
  opacity: isVisible ? 1 : 0,
  reset: resetKey > 0,  // Forces animation to reset
  config: { duration: 500 }
});

// On replay
const handleReplay = () => {
  setResetKey(prev => prev + 1);
};
```

**Warning:** `reset` causes animation to replay on **every** state change, not just when you want it.

---

## Common Issues and Solutions

### Issue 1: Animation Doesn't Trigger

**Symptoms:** Element appears instantly in final position without animating

**Causes:**
1. Props object reference changes on every render
2. `immediate: true` accidentally set
3. Config duration is 0

**Solutions:**
```typescript
// ❌ Bad: New object every render
const props = { opacity: isVisible ? 1 : 0 };
const spring = useSpring(props);

// ✅ Good: Inline object
const spring = useSpring({
  opacity: isVisible ? 1 : 0,
});

// ✅ Good: Memoized object
const props = useMemo(() => ({
  opacity: isVisible ? 1 : 0,
}), [isVisible]);
const spring = useSpring(props);
```

### Issue 2: Elements Flicker or Jump

**Cause:** Initial render shows final state before animation

**Solution:** Set initial `from` state
```typescript
const springProps = useSpring({
  from: { opacity: 0, x: -50 },  // ✅ Explicit initial state
  to: {
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
  },
  config: { duration: 500 }
});
```

### Issue 3: Animations Don't Reset on Replay

**Cause:** Spring maintains state across visibility toggles

**Solution:** Either change component key or ensure visibility goes false → true
```typescript
// Your current approach is correct!
const handleReplay = () => {
  audio.currentTime = 0;     // ✅ Triggers GSAP timeline reset
  setCurrentTime(0);          // ✅ Clears visibleEventIds
  audio.play();               // ✅ Starts timeline from beginning
};
```

### Issue 4: Poor Performance with Many Elements

**Symptoms:** Choppy animations, low FPS

**Solutions:**
1. Always use `native` prop with Spring component (not needed for useSpring)
2. Limit number of animated properties
3. Use `immediate` for instant changes when appropriate
4. Consider batch updates

```typescript
// ✅ Good: Only animate what matters
const springProps = useSpring({
  opacity: isVisible ? 1 : 0,
  config: { duration: 500 }
});

// ❌ Bad: Animating too many properties
const springProps = useSpring({
  opacity: isVisible ? 1 : 0,
  x: pos.x,
  y: pos.y,
  scaleX: scale,
  scaleY: scale,
  rotation: angle,
  // ... too much!
});
```

---

## Animatable Properties in Konva

### Numeric Properties (Can Animate)

```typescript
// Position
x, y

// Size
width, height
radius

// Transform
scaleX, scaleY
rotation
skewX, skewY
offsetX, offsetY

// Opacity/Color
opacity
// Note: Color strings (fill, stroke) can animate with interpolation

// Stroke
strokeWidth
dashOffset

// Shadow
shadowBlur
shadowOffsetX, shadowOffsetY
shadowOpacity
```

### Non-Animatable Properties (Use Immediately)

```typescript
// Boolean flags
visible
listening
draggable

// Strings (except colors)
text
fontFamily
align

// Arrays (except points with interpolation)
dash (use dashOffset instead for animation)
```

---

## Your Implementation Analysis

### What You Got Right ✅

1. **Proper animated component creation**
   ```typescript
   const AnimatedText = animated(Text);
   const AnimatedCircle = animated(Circle);
   // etc.
   ```

2. **useSpring hook usage** (modern pattern)
   ```typescript
   const springProps = useSpring({
     ...currentProps,
     config: { duration: animationDuration },
   });
   ```

3. **Visibility-based toggling** (exactly your use case)
   ```typescript
   const isVisible = visibleEventIds.has(event.id);
   ```

4. **GSAP timeline control** (60fps sync)
   ```typescript
   const { visibleEventIds } = useGSAPTimeline({
     audioCurrentTime: currentTime,
     // ...
   });
   ```

5. **Replay functionality** (clean approach)
   ```typescript
   const handleReplay = () => {
     audio.currentTime = 0;
     setCurrentTime(0);  // Clears visibleEventIds
     audio.play();
   };
   ```

### What Needs Fixing ⚠️

1. **Props recalculation on every render**
   ```typescript
   // Current (lines 176-181)
   const currentProps = getAnimationProps();  // ❌ Recalculates every render

   const springProps = useSpring({
     ...currentProps,
     config: { duration: animationDuration },
   });

   // Fix: Memoize with useMemo
   const currentProps = React.useMemo(
     () => getAnimationProps(),
     [isVisible, event.animation, event.animationDirection]
   );
   ```

2. **Missing explicit `from` state for some animations**
   ```typescript
   // Add initial state to prevent flicker
   const springProps = useSpring({
     from: { opacity: 0 },  // ✅ Explicit initial state
     to: currentProps,
     config: { duration: animationDuration },
   });
   ```

3. **Slide animation positioning issue**
   ```typescript
   // Lines 105-110: You're setting absolute position
   case 'slide':
     const pos = percentToPixels(event.position.x, event.position.y);
     return {
       ...baseProps,
       x: pos.x + xOffset,  // ⚠️ This animates the x prop
       y: pos.y + yOffset,
     };

   // But then in renderText() (line 209), you also set x/y
   return (
     <AnimatedText
       {...springProps}  // Contains animated x/y
       x={pos.x}         // ❌ This overrides the spring x value!
       y={pos.y}
     />
   );

   // Fix: Don't pass position props when they're animated
   return (
     <AnimatedText
       {...springProps}  // ✅ Contains animated x/y from spring
       text={event.content || ''}
       fontSize={event.fontSize || 16}
       // Don't set x/y here - they come from springProps
     />
   );
   ```

---

## Recommended Implementation Pattern

### Simplified TimelineKonvaElement (Fixed Version)

```typescript
export const TimelineKonvaElement: React.FC<TimelineKonvaElementProps> = ({
  event,
  isVisible,
  stageDimensions,
}) => {
  const percentToPixels = (x: number, y: number) => ({
    x: (x / 100) * stageDimensions.width,
    y: (y / 100) * stageDimensions.height,
  });

  const pos = percentToPixels(event.position.x, event.position.y);

  // Memoize animation configuration
  const animationConfig = React.useMemo(() => {
    switch (event.animation) {
      case 'fade':
        return {
          from: { opacity: 0 },
          to: { opacity: isVisible ? 1 : 0 },
        };

      case 'scale':
        return {
          from: { opacity: 0, scaleX: 0.01, scaleY: 0.01 },
          to: {
            opacity: isVisible ? 1 : 0,
            scaleX: isVisible ? 1 : 0.01,
            scaleY: isVisible ? 1 : 0.01,
          },
        };

      case 'slide': {
        const direction = event.animationDirection || 'right';
        const offset = 50;
        let xOffset = 0;
        let yOffset = 0;

        if (!isVisible) {
          if (direction === 'right') xOffset = -offset;
          if (direction === 'left') xOffset = offset;
          if (direction === 'down') yOffset = -offset;
          if (direction === 'up') yOffset = offset;
        }

        return {
          from: { opacity: 0, x: pos.x - offset, y: pos.y },
          to: {
            opacity: isVisible ? 1 : 0,
            x: pos.x + xOffset,
            y: pos.y + yOffset,
          },
        };
      }

      default:
        return {
          from: { opacity: 0 },
          to: { opacity: isVisible ? 1 : 0 },
        };
    }
  }, [isVisible, event.animation, event.animationDirection, pos.x, pos.y]);

  // Spring animation
  const springProps = useSpring({
    ...animationConfig.to,
    config: { duration: event.animationDuration || 500 },
  });

  // Render based on type
  switch (event.elementType) {
    case 'text':
      return (
        <AnimatedText
          {...springProps}
          text={event.content || ''}
          fontSize={event.fontSize || 16}
          fill={event.color || '#333F48'}
          // Don't set x/y if they're animated
          {...(event.animation !== 'slide' && { x: pos.x, y: pos.y })}
        />
      );

    case 'shape':
      if (event.shapeType === 'circle') {
        return (
          <AnimatedCircle
            {...springProps}
            x={pos.x}
            y={pos.y}
            radius={((event.dimensions?.width || 50) / 100) * stageDimensions.width / 2}
            fill={event.color || '#00A689'}
          />
        );
      }
      // ... other shapes

    // ... other types
  }
};
```

---

## Working Example: Complete Component

```typescript
import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { useSpring, animated } from '@react-spring/konva';

const AnimatedText = animated(Text);

interface AnimatedLabelProps {
  isVisible: boolean;
  text: string;
  x: number;
  y: number;
  animationType: 'fade' | 'scale' | 'slide';
}

const AnimatedLabel: React.FC<AnimatedLabelProps> = ({
  isVisible,
  text,
  x,
  y,
  animationType
}) => {
  // Memoize config to prevent unnecessary recalculations
  const animationConfig = React.useMemo(() => {
    switch (animationType) {
      case 'fade':
        return { opacity: isVisible ? 1 : 0 };

      case 'scale':
        return {
          opacity: isVisible ? 1 : 0,
          scaleX: isVisible ? 1 : 0.01,
          scaleY: isVisible ? 1 : 0.01,
        };

      case 'slide':
        return {
          opacity: isVisible ? 1 : 0,
          x: isVisible ? x : x - 50,
        };

      default:
        return { opacity: isVisible ? 1 : 0 };
    }
  }, [isVisible, animationType, x]);

  const springProps = useSpring({
    ...animationConfig,
    config: { duration: 500 },
  });

  return (
    <AnimatedText
      {...springProps}
      {...(animationType !== 'slide' && { x })}  // Only set x if not animated
      y={y}
      text={text}
      fontSize={20}
      fill="#333"
    />
  );
};

// Usage
export const TimelineDemo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Toggle
      </button>
      <Stage width={800} height={600}>
        <Layer>
          <AnimatedLabel
            isVisible={visible}
            text="Hello World"
            x={400}
            y={300}
            animationType="scale"
          />
        </Layer>
      </Stage>
    </div>
  );
};
```

---

## Key Takeaways

1. **Your implementation is 95% correct** - just needs memoization fix
2. **useSpring is the recommended API** for functional components
3. **Memoize animation configs** that depend on props to prevent recalculation
4. **Don't override animated properties** in JSX (watch for x/y conflicts)
5. **Your replay strategy is sound** - resetting currentTime + GSAP timeline works
6. **GSAP + React Spring is a valid pattern** - GSAP controls timing, Spring handles animations

---

## Next Steps for Your Implementation

1. **Add useMemo to getAnimationProps()** - prevents recalculation
2. **Fix slide animation** - don't override x/y when they're animated
3. **Add explicit `from` states** - prevents initial flicker
4. **Test replay functionality** - should work with current approach
5. **Performance test with many elements** - your GSAP approach should handle this well

Your architecture (GSAP for timeline sync + React Spring for animations) is actually quite sophisticated and should work beautifully once the memoization issue is fixed!
