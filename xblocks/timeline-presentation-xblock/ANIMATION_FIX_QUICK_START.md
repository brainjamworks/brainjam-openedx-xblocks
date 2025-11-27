# Animation Fix Quick Start Guide
## Get Your Animations Working in 15 Minutes

**TL;DR:** Your animations are broken because React Spring doesn't know where to start from. Add explicit `from` and `to` properties to your `useSpring` call.

---

## The Problem (In Plain English)

Your code says: "When visible, be at opacity 1. When hidden, be at opacity 0."

React Spring hears: "Okay, I'll set opacity to 1... done!"

**There's no animation because you never told React Spring to animate FROM one state TO another.**

---

## The Fix (Copy-Paste Ready)

**File to edit:** `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/frontend/src/student-ui/components/TimelineKonvaElement.tsx`

**Find this code (around line 178):**
```typescript
const springProps = useSpring({
  ...currentProps,
  config: { duration: animationDuration },
});
```

**Replace with this:**
```typescript
// Define what "hidden" looks like for each animation type
const getHiddenState = () => {
  switch (event.animation) {
    case 'fade':
      return { opacity: 0 };

    case 'scale':
      return { opacity: 0, scaleX: 0.01, scaleY: 0.01 };

    case 'slide': {
      const direction = event.animationDirection || 'right';
      const offset = 50;
      const pos = percentToPixels(event.position.x, event.position.y);

      let xOffset = 0;
      let yOffset = 0;

      switch (direction) {
        case 'right': xOffset = -offset; break;
        case 'left': xOffset = offset; break;
        case 'down': yOffset = -offset; break;
        case 'up': yOffset = offset; break;
      }

      return { opacity: 0, x: pos.x + xOffset, y: pos.y + yOffset };
    }

    case 'wipe': {
      if (event.elementType === 'line' || event.elementType === 'arrow') {
        if (!event.lineCoordinates) return { opacity: 0 };

        const { x1, y1, x2, y2 } = event.lineCoordinates;
        const dx = (x2 - x1) / 100 * stageDimensions.width;
        const dy = (y2 - y1) / 100 * stageDimensions.height;
        const lineLength = Math.sqrt(dx * dx + dy * dy);

        return { opacity: 1, dashOffset: lineLength, dash: [lineLength, 0] };
      }

      const direction = event.animationDirection || 'right';
      switch (direction) {
        case 'right':
        case 'left':
          return { opacity: 1, scaleX: 0.01, scaleY: 1 };
        case 'up':
        case 'down':
          return { opacity: 1, scaleX: 1, scaleY: 0.01 };
        default:
          return { opacity: 0 };
      }
    }

    case 'show':
    default:
      return { opacity: 0 };
  }
};

// Define what "visible" looks like
const getVisibleState = () => {
  const pos = percentToPixels(event.position.x, event.position.y);

  switch (event.animation) {
    case 'fade':
      return { opacity: 1 };

    case 'scale':
      return { opacity: 1, scaleX: 1, scaleY: 1 };

    case 'slide':
      return { opacity: 1, x: pos.x, y: pos.y };

    case 'wipe':
      if (event.elementType === 'line' || event.elementType === 'arrow') {
        return { opacity: 1, dashOffset: 0 };
      }
      return { opacity: 1, scaleX: 1, scaleY: 1 };

    case 'show':
    default:
      return { opacity: 1 };
  }
};

// NOW React Spring knows: start from hidden, animate to visible (or back to hidden)
const springProps = useSpring({
  from: getHiddenState(),
  to: isVisible ? getVisibleState() : getHiddenState(),
  reset: !isVisible && event.animation !== 'show',
  config: { duration: animationDuration },
});
```

---

## Delete Old Code

**Find and DELETE these functions (they're now replaced):**
- `getAnimationProps()` (around line 64-162)

**Remove this line:**
```typescript
const currentProps = getAnimationProps(); // DELETE THIS
```

---

## Test It

1. **Save the file**
2. **Rebuild:** `npm run build` (if needed)
3. **Reload the page**
4. **Click Play**
5. **Watch elements animate in smoothly** (not pop in instantly)

---

## What Should Happen

### Before Fix:
- Elements appear instantly at final position ❌
- No smooth animation ❌
- Replay doesn't work ❌

### After Fix:
- Elements fade/scale/slide in smoothly ✅
- Animations take ~500ms (configurable) ✅
- Replay works correctly ✅

---

## Debug Checklist

If animations still don't work:

### Step 1: Check Console
Open browser console and look for:
- `[Timeline Sync]` messages showing visibility changes
- Any React Spring warnings
- Any Konva errors

### Step 2: Add Temporary Logging
Add this right after the `useSpring` call:

```typescript
// Temporary debug logging
console.log(`Element ${event.id}:`, {
  isVisible,
  from: getHiddenState(),
  to: isVisible ? getVisibleState() : getHiddenState(),
});
```

**What to look for:**
- `isVisible` should be `false` initially, then `true` when audio passes timestamp
- `from` should be different from `to` (e.g., opacity 0 vs 1)
- You should see this log on every visibility change

### Step 3: Verify Animation Types
Make sure your timeline events have valid animation types:
- `fade` - opacity only
- `scale` - size change
- `slide` - position change
- `wipe` - directional reveal
- `show` - instant (no animation)

---

## Common Mistakes (Don't Do These)

### ❌ DON'T: Spread conditional props
```typescript
const props = isVisible ? { opacity: 1 } : { opacity: 0 };
const springProps = useSpring({ ...props });
```

### ✅ DO: Use explicit from/to
```typescript
const springProps = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 },
});
```

---

### ❌ DON'T: Calculate state inside useSpring
```typescript
const springProps = useSpring({
  opacity: calculateOpacity(), // Function call inside!
});
```

### ✅ DO: Calculate state before useSpring
```typescript
const targetOpacity = isVisible ? 1 : 0;
const springProps = useSpring({
  from: { opacity: 0 },
  to: { opacity: targetOpacity },
});
```

---

### ❌ DON'T: Forget the `from` property
```typescript
const springProps = useSpring({
  opacity: isVisible ? 1 : 0,
});
```

### ✅ DO: Always include `from` and `to`
```typescript
const springProps = useSpring({
  from: { opacity: 0 },
  to: { opacity: isVisible ? 1 : 0 },
});
```

---

## Why This Works

**Before:** React Spring sees `opacity: 1` and thinks "I'm already at 1, nothing to do"

**After:** React Spring sees:
- `from: { opacity: 0 }` - "Start here"
- `to: { opacity: 1 }` - "End here"
- **Animation happens!** 🎉

---

## Performance Note

This fix might cause slightly more re-renders during animation (60fps), but:
- Konva is designed for this (canvas-based, very fast)
- React Spring uses RequestAnimationFrame (optimized)
- Your elements are small and simple (not complex DOM trees)
- **Result:** Should be smooth and performant

If you notice lag, we can optimize later with `useMemo` and `useCallback`.

---

## Need Help?

If animations still don't work after this fix:

1. **Check the full debug report:** `REACT_SPRING_ANIMATION_DEBUG_REPORT.md`
2. **Look at the console logs** for errors/warnings
3. **Verify your timeline event data** has valid timestamps and animation types
4. **Test with a single element first** to isolate the issue

---

## Time Estimate

- **Reading this guide:** 5 minutes
- **Making the change:** 10 minutes
- **Testing:** 5 minutes
- **Total:** 20 minutes

---

**Last Updated:** 2025-11-27
