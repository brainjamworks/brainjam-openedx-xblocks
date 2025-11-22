# Responsive Design Documentation - Flashcards XBlock

## Overview

The Flashcards XBlock implements comprehensive responsive design to ensure optimal user experience across all devices, from large desktop monitors to mobile phones. The design follows a mobile-first approach with specific adaptations for different screen sizes.

## Breakpoint Strategy

### Desktop (>768px) - Default Styles
**Target Devices:** Laptops, Desktop monitors

**Card Display:**
- Full-width card display (max-width: 700px)
- Card height: 400px
- Optimal text sizing for readability
- Hover effects on navigation buttons

**Typography:**
- Title: 2rem (32px)
- Subtitle: 1.25rem (20px)
- Back text: 1.125rem (18px)

**Navigation:**
- Button size: 44x44px (touch-friendly minimum)
- Icon size: 1.5rem
- Gap between elements: 2rem

### Tablet (481-768px)
**Target Devices:** iPads, Android tablets, Surface

**Card Display:**
- Responsive card sizing (max-width: 600px)
- Card height: 350px
- Adjusted spacing for touch interaction
- Reduced padding

**Typography:**
- Title: 1.75rem (28px)
- Subtitle: 1.125rem (18px)
- Back text: 1rem (16px)

**Navigation:**
- Button size: 48x48px (larger touch targets)
- Icon size: 1.75rem
- Gap between elements: 1.5rem

**Layout Adaptations:**
- Reduced horizontal padding: 1.5rem sides
- Adjusted card section padding: 2rem vertical, 1.5rem horizontal

### Mobile (<481px)
**Target Devices:** iPhones, Android phones

**Card Display:**
- Full-width card (100% of viewport)
- Card height: 320px (compact for mobile)
- Smaller border radius: 8px
- Overflow prevention

**Typography:**
- Title: 1.5rem (24px) with word-break
- Subtitle: 1rem (16px) with word-break
- Back text: 0.9375rem (15px) with overflow handling

**Navigation:**
- Button size: 48x48px (extra-large touch targets)
- Icon size: 2rem (larger for easier tapping)
- Gap between elements: 1rem
- Counter font: 0.9375rem

**Layout Adaptations:**
- Minimal horizontal padding: 0.5rem sides
- Compact card section padding: 1.5rem vertical, 1rem horizontal
- Word-break and hyphenation for long text
- Responsive images: max-width 100%
- Scrollable tables

## Touch Support Implementation

### 1. Touch/Tap to Flip Cards
```typescript
// onClick handler automatically works for touch events
onClick={handleFlip}
```

**Features:**
- Single tap flips the card
- No delay or lag
- Smooth 600ms flip animation
- Hardware-accelerated transforms

### 2. Prevent Double-Tap Zoom
```css
touch-action: manipulation;
-webkit-tap-highlight-color: transparent;
user-select: none;
```

**Applied to:**
- Card container (prevents zoom when flipping)
- Navigation buttons (prevents zoom when navigating)
- Studio action buttons (prevents zoom when editing)

**Benefits:**
- Eliminates accidental zoom on double-tap
- Removes blue highlight on tap (iOS/Android)
- Prevents text selection during interaction

### 3. Touch-Friendly Button Sizing

**Desktop:** 44x44px minimum (WCAG AA standard)
**Tablet:** 48x48px (larger for touch)
**Mobile:** 48x48px (maximum touch target)

All buttons meet Apple's and Google's recommended minimum touch target size.

### 4. Swipe Gestures (via Arrow Buttons)
While native swipe gestures aren't implemented, the large arrow buttons provide:
- Easy thumb-reach navigation
- Clear visual affordance
- Reliable interaction on all devices

## Responsive Features by View

### Student View (Learning Experience)

#### Desktop
- Full 3D flip animation
- Hover effects on buttons
- Keyboard navigation (Enter, Space, Arrow keys)
- Optimal reading distance

#### Tablet
- Same 3D flip animation
- Touch-optimized buttons
- Reduced card size for comfortable viewing
- Adjusted text sizes

#### Mobile
- Compact card size (320px)
- Larger touch targets
- Word-break for long text
- Responsive images in HTML content
- Prevents text overflow

### Studio View (Editor)

#### Desktop
- Full editing interface
- Drag-and-drop card reordering
- Sticky action buttons at bottom
- Multiple cards visible

#### Tablet
- Touch-friendly buttons (44px minimum)
- Adjusted padding (2rem sides)
- Sticky buttons with reduced padding
- Readable form labels

#### Mobile (Limited Support)
**Note:** Studio is primarily designed for desktop, but basic mobile support includes:
- Stack layout for card list
- Touch-friendly buttons (48px)
- Reduced font sizes
- Single-column layout for card actions
- Simplified spacing

## Overflow Prevention

### Text Overflow Handling
```css
overflow-wrap: break-word;
word-break: break-word;
hyphens: auto;
```

**Prevents:**
- Long words breaking layout
- Horizontal scrolling
- Text extending beyond card boundaries

### HTML Content in Back Text
```css
.flashcard-back-text {
  img {
    max-width: 100% !important;
    height: auto !important;
  }

  table {
    max-width: 100%;
    overflow-x: auto;
    display: block;
  }
}
```

**Handles:**
- Images from TinyMCE editor
- Tables with multiple columns
- Embedded content
- Lists and formatted text

## Performance Optimizations

### Hardware Acceleration
```css
transform-style: preserve-3d;
will-change: transform;
backface-visibility: hidden;
```

**Benefits:**
- Smooth 60fps animations on mobile
- GPU-accelerated transforms
- No jank during flip
- Efficient rendering

### Touch Action Optimization
```css
touch-action: manipulation;
```

**Benefits:**
- Eliminates 300ms click delay on mobile
- Instant response to taps
- Better perceived performance

## Accessibility on Mobile

### Screen Reader Support
- ARIA labels on interactive elements
- Proper heading hierarchy
- Semantic HTML structure

### Keyboard Navigation (Bluetooth Keyboards)
- Enter/Space: Flip card
- Arrow Left/Right: Navigate cards
- Tab: Focus navigation
- All functionality accessible via keyboard

### Focus Indicators
```css
&:focus {
  outline: 2px solid #000;
  outline-offset: 4px;
}
```

Visible focus indicators work on all devices, including when using external keyboards with tablets.

## Testing Checklist

### Desktop (>768px)
- [ ] Card displays at 700px max-width
- [ ] Hover effects work on buttons
- [ ] Text is readable at arm's length
- [ ] Flip animation is smooth
- [ ] Navigation buttons are visible

### Tablet (481-768px)
- [ ] Card scales to 600px max-width
- [ ] Touch targets are 48x48px minimum
- [ ] Text doesn't overflow
- [ ] Buttons are easy to tap with thumb
- [ ] Flip animation works smoothly

### Mobile (<481px)
- [ ] Card is 320px height (fits most screens)
- [ ] No horizontal scrolling
- [ ] Text breaks appropriately
- [ ] Images scale to fit
- [ ] Navigation buttons are 48x48px
- [ ] No double-tap zoom occurs
- [ ] Flip is instant on tap

### Touch Interactions (All Devices)
- [ ] Single tap flips card
- [ ] No 300ms delay
- [ ] No blue highlight on tap
- [ ] Can't accidentally select text
- [ ] Buttons respond immediately
- [ ] No double-tap zoom

## Browser Support

### Desktop Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Browsers
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+
- Firefox Mobile 88+

### Known Issues
**None currently**

## Future Enhancements

Potential responsive improvements:

1. **Native Swipe Gestures**
   - Implement touch swipe to navigate cards
   - Swipe left/right for previous/next
   - Requires touch event handling

2. **Adaptive Font Sizes**
   - Use viewport units for truly responsive typography
   - `clamp()` for fluid font sizing
   - Better scaling across more breakpoints

3. **Progressive Web App (PWA) Support**
   - Add service worker for offline access
   - Install prompt for mobile home screen
   - Native app-like experience

4. **Landscape Orientation Handling**
   - Optimize layout for landscape tablets
   - Adjust card proportions
   - Better use of horizontal space

## Responsive Design Best Practices Used

### 1. Mobile-First Approach
- Base styles work on mobile
- Media queries add complexity for larger screens
- Progressive enhancement

### 2. Relative Units
- `rem` for typography (scales with root font)
- `%` for widths (responsive to container)
- `vw/vh` avoided (can cause issues in modals)

### 3. Flexible Layouts
- Flexbox for responsive alignment
- Min/max-width constraints
- Fluid spacing with rem

### 4. Touch-First Design
- Touch targets meet accessibility standards
- No reliance on hover
- Instant feedback on interaction

### 5. Content Priority
- Critical content fits in viewport
- No essential information requires scrolling
- Clear visual hierarchy

## Version History

### v0.1.0 - 2025-10-19
- Initial responsive implementation
- Three breakpoints: Desktop, Tablet, Mobile
- Touch-action optimization
- Overflow prevention
- Touch-friendly button sizing (44-48px)
- Hardware-accelerated animations
- Comprehensive text overflow handling
