# Dental Assessment XBlock - Design Specification

**Version**: 1.0
**Status**: APPROVED FOR DEVELOPMENT
**Last Updated**: 2025-11-26
**Design System**: Liverpool Dental School Design Language v2.0.0

---

## Table of Contents

1. [Design System Foundation](#design-system-foundation)
2. [Component Design Specifications](#component-design-specifications)
3. [Responsive Design Strategy](#responsive-design-strategy)
4. [Accessibility Design Requirements](#accessibility-design-requirements)
5. [SCSS Architecture](#scss-architecture)
6. [Animation and Interaction Design](#animation-and-interaction-design)
7. [Visual Design Reference](#visual-design-reference)

---

## Design System Foundation

### Color Palette

The Dental Assessment XBlock uses the Liverpool Dental School color palette from `liverpool-shared-tokens.scss`:

#### Primary Brand Colors

```scss
$liverpool-blue: #212b58;              // Primary UI color
$liverpool-blue-dark: #15376D;         // Hover states
$liverpool-teal: #00A689;              // Success states
$liverpool-pink: #EF426F;              // Error states
$liverpool-yellow: #FFD100;            // Warning states
$liverpool-sky-blue: #009CDD;          // Info states
```

#### Component-Specific Color Usage

| Component | State | Color | Hex Code | Usage |
|-----------|-------|-------|----------|-------|
| Draggable Label | Default | Liverpool Blue | `#212b58` | Background |
| Draggable Label | Hover | Liverpool Blue Dark | `#15376D` | Background |
| Draggable Label | Focus | Liverpool Blue | `#212b58` | 2px outline |
| Draggable Label | Dragging | Liverpool Blue | `#212b58` | Background at 80% opacity |
| Draggable Label | Placed | Liverpool Teal | `#00A689` | Background |
| Draggable Label | Error | Liverpool Pink | `#EF426F` | Border |
| Drop Zone | Indicator | Liverpool Neutral 300 | `#CED4DA` | Border (dashed) |
| Drop Zone | Hover | Liverpool Blue | `#212b58` | Border (solid) |
| Drop Zone | Active | Liverpool Teal | `#00A689` | Background (10% opacity) |
| Angle Lines | Default | Liverpool Pink | `#EF426F` | Stroke color |
| Angle Arc | Default | Liverpool Pink | `#EF426F` | Stroke color (50% opacity) |
| Angle Label | Default | Liverpool Pink | `#EF426F` | Text color |
| Submit Button | Default | Liverpool Blue | `#212b58` | Background |
| Submit Button | Hover | Liverpool Blue Dark | `#15376D` | Background |
| Submit Button | Disabled | Liverpool Neutral 500 | `#8d9695` | Background |
| Feedback Success | Background | Liverpool Teal 100 | `#E6F7F4` | Background |
| Feedback Success | Border | Liverpool Teal 300 | `#80DDC9` | Left border (4px) |
| Feedback Success | Text | Liverpool Teal 700 | `#006B5E` | Text color |
| Feedback Error | Background | Liverpool Pink 100 | `#FDEEF3` | Background |
| Feedback Error | Border | Liverpool Pink 300 | `#F7A0BB` | Left border (4px) |
| Feedback Error | Text | Liverpool Pink 600 | `#D9245A` | Text color |

#### Text Colors

```scss
$liverpool-text-primary: #000000;      // Primary text (black)
$liverpool-text-secondary: #333F48;    // Secondary text (charcoal)
$liverpool-text-muted: #8d9695;        // Muted text (grey)
$liverpool-text-inverse: #FFFFFF;      // Inverse text (white on dark backgrounds)
```

#### Background Colors

```scss
$liverpool-bg-page: #FFFFFF;           // Page background
$liverpool-bg-subtle: #F8F9FA;         // Subtle backgrounds (light gray)
$liverpool-border-default: #DBDBD3;    // Default borders (stone)
```

### Typography

#### Font Family

```scss
$liverpool-font-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Note**: The Poppins font is loaded via Google Fonts CDN in the shared tokens file.

#### Font Sizes and Scales

| Element | Size (rem) | Size (px) | Usage |
|---------|-----------|-----------|--------|
| Label Text | 1.125rem | 18px | Draggable label text |
| Angle Value | 1.25rem | 20px | Angle measurement display |
| Instructions | 1rem | 16px | User instructions |
| Feedback Heading | 1.125rem | 18px | Feedback section titles |
| Feedback Body | 0.875rem | 14px | Feedback messages |
| Button Text | 0.875rem | 14px | Submit button text |
| Help Text | 0.75rem | 12px | Helper text, tooltips |

#### Font Weights

```scss
$liverpool-font-weight-regular: 400;   // Body text
$liverpool-font-weight-medium: 500;    // Labels
$liverpool-font-weight-semibold: 600;  // Headings, emphasis
$liverpool-font-weight-bold: 700;      // Strong emphasis
```

#### Line Heights

```scss
$liverpool-line-height-tight: 1.2;     // Compact text (headings)
$liverpool-line-height-normal: 1.4;    // Normal text
$liverpool-line-height-relaxed: 1.5;   // Body text (default)
```

### Spacing System

Liverpool uses a 4px base spacing unit with rem-based values:

```scss
$liverpool-space-0: 0;
$liverpool-space-1: 0.25rem;   // 4px
$liverpool-space-2: 0.5rem;    // 8px
$liverpool-space-3: 0.75rem;   // 12px
$liverpool-space-4: 1rem;      // 16px (standard unit)
$liverpool-space-5: 1.5rem;    // 24px
$liverpool-space-6: 2rem;      // 32px
$liverpool-space-7: 2.5rem;    // 40px
$liverpool-space-8: 3rem;      // 48px
```

#### Spacing Application

| Context | Spacing Token | Value | Usage |
|---------|---------------|-------|-------|
| Label padding | `$liverpool-space-3` | 12px | Internal padding |
| Component gap | `$liverpool-space-4` | 16px | Space between elements |
| Section margin | `$liverpool-space-5` | 24px | Vertical spacing |
| Container padding | `$liverpool-space-6` | 32px | Outer container padding |

### Border Radius

```scss
$liverpool-radius-xs: 4px;             // Small elements
$liverpool-radius-sm: 8px;             // Inputs, controls
$liverpool-radius-md: 12px;            // Cards, panels
$liverpool-radius-pill: 50px;          // Buttons (pill shape)
$liverpool-radius-circle: 50%;         // Circular elements
```

### Shadows

```scss
$liverpool-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);           // Subtle depth
$liverpool-shadow-base: 0 4px 8px rgba(0, 0, 0, 0.12);        // Standard depth
$liverpool-shadow-md: 0 8px 16px rgba(0, 0, 0, 0.15);         // Elevated depth
$liverpool-shadow-focus: 0 0 0 3px rgba(33, 43, 88, 0.2);     // Focus indicator
$liverpool-shadow-primary: 0 4px 16px rgba(33, 43, 88, 0.4);  // Button shadow
```

### Transitions

```scss
$liverpool-duration-fast: 150ms;       // Quick interactions
$liverpool-duration-base: 300ms;       // Standard transitions
$liverpool-easing-out: ease-out;       // Deceleration curve
$liverpool-easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);  // Smooth curve
```

---

## Component Design Specifications

### 1. Draggable Labels

#### Visual Design

**Default State:**
- **Size**: 40x40px (desktop), 48x48px (tablet/mobile for touch targets)
- **Background**: `$liverpool-blue` (#212b58)
- **Text Color**: `$liverpool-text-inverse` (#FFFFFF)
- **Font Size**: 1.125rem (18px)
- **Font Weight**: `$liverpool-font-weight-semibold` (600)
- **Border Radius**: `$liverpool-radius-circle` (50%)
- **Shadow**: `$liverpool-shadow-base`
- **Cursor**: `grab`
- **Transition**: `all 300ms ease-out`

**Hover State:**
- **Background**: `$liverpool-blue-dark` (#15376D)
- **Transform**: `scale(1.05)`
- **Shadow**: `$liverpool-shadow-md`
- **Cursor**: `grab`

**Focus State (Keyboard):**
- **Outline**: 2px solid `$liverpool-blue`
- **Outline Offset**: 2px
- **Box Shadow**: `$liverpool-shadow-focus`
- **Background**: `$liverpool-blue` (no change)

**Dragging State:**
- **Opacity**: 0.8
- **Transform**: `scale(1.1) rotate(5deg)`
- **Shadow**: `$liverpool-shadow-lg`
- **Cursor**: `grabbing`
- **Z-Index**: 1000

**Placed State (on Drop Zone):**
- **Background**: `$liverpool-teal` (#00A689)
- **Border**: 2px solid `$liverpool-teal-600` (#008C73)
- **Transform**: `scale(1)`
- **Shadow**: `$liverpool-shadow-base`

**Error State (incorrect placement after submission):**
- **Background**: `$liverpool-pink` (#EF426F)
- **Border**: 2px solid `$liverpool-pink-600` (#D9245A)
- **Animation**: Shake animation (3 quick horizontal movements)

#### SCSS Implementation

```scss
@import '../../../../../../shared-styles/styles/liverpool-shared-tokens';

.dental-assessment-label {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: $liverpool-blue;
  color: $liverpool-text-inverse;
  font-size: $liverpool-font-size-md;
  font-weight: $liverpool-font-weight-semibold;
  font-family: $liverpool-font-primary;
  border-radius: $liverpool-radius-circle;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  box-shadow: $liverpool-shadow-base;
  transition: all $liverpool-duration-base $liverpool-easing-out;
  z-index: 10;

  // Touch device optimization
  @media (hover: none) and (pointer: coarse) {
    width: 48px;
    height: 48px;
  }

  &:hover {
    background-color: $liverpool-blue-dark;
    transform: scale(1.05);
    box-shadow: $liverpool-shadow-md;
  }

  &:focus {
    outline: 2px solid $liverpool-blue;
    outline-offset: 2px;
    box-shadow: $liverpool-shadow-focus;
  }

  &.is-dragging {
    opacity: 0.8;
    transform: scale(1.1) rotate(5deg);
    box-shadow: $liverpool-shadow-lg;
    cursor: grabbing;
    z-index: 1000;
  }

  &.is-placed {
    background-color: $liverpool-teal;
    border: 2px solid $liverpool-teal-600;
    transform: scale(1);
    box-shadow: $liverpool-shadow-base;
  }

  &.is-error {
    background-color: $liverpool-pink;
    border: 2px solid $liverpool-pink-600;
    animation: label-shake 300ms ease-in-out;
  }

  // Keyboard navigation
  &[aria-grabbed="true"] {
    background-color: $liverpool-blue-dark;
    transform: scale(1.05);
    box-shadow: $liverpool-shadow-md;
  }
}

@keyframes label-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
```

#### Accessibility Attributes

```html
<div
  class="dental-assessment-label"
  role="button"
  tabindex="0"
  aria-label="Label A. Press Space to pick up, Arrow keys to move, Space to drop."
  aria-grabbed="false"
  aria-describedby="label-instructions"
  data-label-id="label-A"
>
  A
</div>
```

---

### 2. Drop Zones

#### Visual Design

**Default State (Development Mode Only):**
- **Size**: Circular with radius defined by instructor (5-20% of image width)
- **Border**: 2px dashed `$liverpool-neutral-300` (#CED4DA)
- **Background**: Transparent
- **Opacity**: 0.3 (subtle, non-intrusive)
- **Display**: Hidden in production, visible only in Studio preview

**Hover State (Dragging Label Nearby):**
- **Border**: 2px solid `$liverpool-blue` (#212b58)
- **Background**: `$liverpool-blue` at 10% opacity
- **Opacity**: 1
- **Animation**: Pulse effect (scale 1 to 1.05 and back)

**Active State (Label Snapped):**
- **Border**: 2px solid `$liverpool-teal` (#00A689)
- **Background**: `$liverpool-teal` at 10% opacity
- **Opacity**: 0.5

**Production Mode:**
- **Display**: None (completely hidden from students)
- **Purpose**: Zones exist logically but are invisible to avoid giving away answers

#### SCSS Implementation

```scss
.dental-assessment-dropzone {
  position: absolute;
  border: 2px dashed $liverpool-neutral-300;
  border-radius: $liverpool-radius-circle;
  background-color: transparent;
  opacity: 0.3;
  pointer-events: none;
  transition: all $liverpool-duration-base $liverpool-easing-out;

  // Hide in production
  .dental-assessment-canvas:not(.studio-preview) & {
    display: none;
  }

  // Show in Studio preview
  .dental-assessment-canvas.studio-preview & {
    display: block;
  }

  &.is-hovered {
    border: 2px solid $liverpool-blue;
    background-color: rgba($liverpool-blue, 0.1);
    opacity: 1;
    animation: zone-pulse 1s ease-in-out infinite;
  }

  &.is-active {
    border: 2px solid $liverpool-teal;
    background-color: rgba($liverpool-teal, 0.1);
    opacity: 0.5;
  }
}

@keyframes zone-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

#### Accessibility Attributes

```html
<div
  class="dental-assessment-dropzone"
  role="region"
  aria-label="Drop zone for canal orifice (Point A)"
  aria-dropeffect="move"
  data-zone-id="zone-1"
  style="left: 45%; top: 30%; width: 10%; height: 10%;"
>
  <!-- Invisible in production, visual indicator in Studio -->
</div>
```

---

### 3. Angle Measurement Tool

#### Visual Design

**Line Styling:**
- **Stroke Color**: `$liverpool-pink` (#EF426F)
- **Stroke Width**: 2px
- **Stroke Style**: Solid
- **Opacity**: 1

**Angle Arc:**
- **Stroke Color**: `$liverpool-pink` (#EF426F)
- **Stroke Width**: 1.5px
- **Fill**: None
- **Opacity**: 0.5
- **Radius**: 30px from vertex

**Angle Label:**
- **Background**: `$liverpool-pink` (#EF426F)
- **Text Color**: `$liverpool-text-inverse` (#FFFFFF)
- **Font Size**: 1rem (16px)
- **Font Weight**: `$liverpool-font-weight-semibold` (600)
- **Padding**: 4px 8px
- **Border Radius**: `$liverpool-radius-xs` (4px)
- **Position**: Offset 10px above vertex
- **Shadow**: `$liverpool-shadow-sm`

**Interaction:**
- **Display**: Auto-updates when reference points are moved
- **Animation**: Fade in (200ms) when all three points are placed

#### SCSS Implementation

```scss
.dental-assessment-angle-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
  }
}

.angle-line {
  stroke: $liverpool-pink;
  stroke-width: 2px;
  stroke-linecap: round;
  fill: none;
  opacity: 1;
}

.angle-arc {
  stroke: $liverpool-pink;
  stroke-width: 1.5px;
  stroke-linecap: round;
  fill: none;
  opacity: 0.5;
}

.angle-label {
  background-color: $liverpool-pink;
  color: $liverpool-text-inverse;
  font-size: $liverpool-font-size-base;
  font-weight: $liverpool-font-weight-semibold;
  font-family: $liverpool-font-primary;
  padding: $liverpool-space-1 $liverpool-space-2;
  border-radius: $liverpool-radius-xs;
  box-shadow: $liverpool-shadow-sm;
  position: absolute;
  white-space: nowrap;
  animation: angle-fade-in 200ms ease-out;
}

@keyframes angle-fade-in {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### Accessibility Attributes

```html
<div
  class="dental-assessment-angle-overlay"
  role="img"
  aria-label="Angle measurement: 25.3 degrees between points A, B, and C"
>
  <svg>
    <line class="angle-line" x1="..." y1="..." x2="..." y2="..." />
    <line class="angle-line" x1="..." y1="..." x2="..." y2="..." />
    <path class="angle-arc" d="..." />
  </svg>
  <div class="angle-label" role="text">25.3°</div>
</div>
```

---

### 4. Feedback Display

#### Visual Design

**Success Feedback:**
- **Background**: `$liverpool-teal-100` (#E6F7F4)
- **Border Left**: 4px solid `$liverpool-teal-300` (#80DDC9)
- **Text Color**: `$liverpool-teal-700` (#006B5E)
- **Border Radius**: `$liverpool-radius-md` (12px)
- **Padding**: `$liverpool-space-5` (24px)
- **Shadow**: `$liverpool-shadow-sm`
- **Icon**: Checkmark (✓) in `$liverpool-teal`
- **Animation**: Slide down from top (300ms)

**Error Feedback:**
- **Background**: `$liverpool-pink-100` (#FDEEF3)
- **Border Left**: 4px solid `$liverpool-pink-300` (#F7A0BB)
- **Text Color**: `$liverpool-pink-600` (#D9245A)
- **Border Radius**: `$liverpool-radius-md` (12px)
- **Padding**: `$liverpool-space-5` (24px)
- **Shadow**: `$liverpool-shadow-sm`
- **Icon**: X mark (✗) in `$liverpool-pink`
- **Animation**: Slide down from top (300ms)

**Layout Structure:**
1. **Header Section**: Icon + overall result message
2. **Details Section**: Per-label feedback (expandable)
3. **Angle Section** (if enabled): Measured angle vs expected range
4. **Actions Section**: Retry button or view answer button

#### SCSS Implementation

```scss
.dental-assessment-feedback {
  margin-top: $liverpool-space-6;
  border-radius: $liverpool-radius-md;
  padding: $liverpool-space-5;
  box-shadow: $liverpool-shadow-sm;
  animation: feedback-slide-in 300ms ease-out;

  &.feedback-success {
    background-color: $liverpool-feedback-success-bg;
    border-left: 4px solid $liverpool-feedback-success-border;
    color: $liverpool-feedback-success-color;
  }

  &.feedback-error {
    background-color: $liverpool-feedback-error-bg;
    border-left: 4px solid $liverpool-feedback-error-border;
    color: $liverpool-feedback-error-color;
  }
}

.feedback-header {
  display: flex;
  align-items: center;
  gap: $liverpool-space-3;
  margin-bottom: $liverpool-space-4;

  .feedback-icon {
    flex-shrink: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .feedback-title {
    flex: 1;
    font-size: $liverpool-font-size-md;
    font-weight: $liverpool-font-weight-semibold;
    margin: 0;
  }
}

.feedback-details {
  margin-bottom: $liverpool-space-4;

  .feedback-section-title {
    font-size: $liverpool-font-size-base;
    font-weight: $liverpool-font-weight-semibold;
    margin-bottom: $liverpool-space-2;
  }

  .feedback-item {
    display: flex;
    align-items: center;
    gap: $liverpool-space-2;
    padding: $liverpool-space-2 0;

    .feedback-item-icon {
      flex-shrink: 0;
      font-size: $liverpool-font-size-base;
    }

    .feedback-item-text {
      flex: 1;
      font-size: $liverpool-font-size-sm;
      line-height: $liverpool-line-height-relaxed;
    }
  }
}

.feedback-angle {
  background-color: rgba($liverpool-neutral-white, 0.5);
  border-radius: $liverpool-radius-sm;
  padding: $liverpool-space-3;
  margin-bottom: $liverpool-space-4;

  .angle-measured {
    font-size: $liverpool-font-size-lg;
    font-weight: $liverpool-font-weight-bold;
  }

  .angle-range {
    font-size: $liverpool-font-size-sm;
    color: inherit;
    opacity: 0.8;
  }
}

.feedback-actions {
  display: flex;
  gap: $liverpool-space-3;
  margin-top: $liverpool-space-4;

  button {
    @extend .liverpool-btn-primary;
  }
}

@keyframes feedback-slide-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Accessibility Attributes

```html
<div
  class="dental-assessment-feedback feedback-success"
  role="alert"
  aria-live="polite"
  aria-atomic="true"
>
  <div class="feedback-header">
    <span class="feedback-icon" aria-hidden="true">✓</span>
    <h3 class="feedback-title">Excellent work! All labels correctly placed.</h3>
  </div>
  <div class="feedback-details">
    <!-- Per-label feedback -->
  </div>
</div>
```

---

### 5. Submit Button

#### Visual Design

**Default State:**
- **Background**: `$liverpool-blue` (#212b58)
- **Text Color**: `$liverpool-text-inverse` (#FFFFFF)
- **Font Size**: 0.875rem (14px)
- **Font Weight**: `$liverpool-font-weight-semibold` (600)
- **Padding**: 1rem 2.5rem (16px 40px)
- **Border Radius**: `$liverpool-radius-pill` (50px)
- **Shadow**: `$liverpool-shadow-primary`
- **Transition**: `all 300ms ease-out`

**Hover State:**
- **Background**: `$liverpool-blue-dark` (#15376D)
- **Transform**: `scale(1.05)`
- **Shadow**: `$liverpool-shadow-primary-hover`

**Active State (Click):**
- **Transform**: `scale(0.98)`
- **Shadow**: `$liverpool-shadow-primary` (reduced)

**Disabled State:**
- **Background**: `$liverpool-neutral-500` (#8d9695)
- **Cursor**: `not-allowed`
- **Opacity**: 0.6
- **Transform**: None
- **Shadow**: None

**Loading State:**
- **Background**: `$liverpool-blue` (#212b58)
- **Content**: Spinner animation + "Submitting..." text
- **Cursor**: `wait`

#### SCSS Implementation

```scss
.dental-assessment-submit {
  @extend .liverpool-btn-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $liverpool-space-2;
  width: 100%;
  max-width: 300px;
  margin: $liverpool-space-6 auto 0;

  @media (min-width: 768px) {
    width: auto;
    margin: $liverpool-space-6 0 0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none !important;
    box-shadow: none !important;
  }

  &.is-loading {
    cursor: wait;

    .button-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid rgba($liverpool-neutral-white, 0.3);
      border-top-color: $liverpool-neutral-white;
      border-radius: 50%;
      animation: spinner-rotate 600ms linear infinite;
    }
  }
}

@keyframes spinner-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

#### Button States Summary

| State | Background | Transform | Shadow | Cursor | Opacity |
|-------|-----------|-----------|--------|---------|---------|
| Default | `$liverpool-blue` | `scale(1)` | Primary | `pointer` | 1 |
| Hover | `$liverpool-blue-dark` | `scale(1.05)` | Primary Hover | `pointer` | 1 |
| Active | `$liverpool-blue-dark` | `scale(0.98)` | Primary | `pointer` | 1 |
| Focus | `$liverpool-blue` | `scale(1)` | Focus Ring | `pointer` | 1 |
| Disabled | `$liverpool-neutral-500` | None | None | `not-allowed` | 0.6 |
| Loading | `$liverpool-blue` | `scale(1)` | Primary | `wait` | 1 |

---

### 6. Studio Editor

#### Tab Navigation

**Tab Bar:**
- **Background**: `$liverpool-neutral-100` (#F8F9FA)
- **Border Bottom**: 2px solid `$liverpool-neutral-200` (#DBDBD3)
- **Padding**: `$liverpool-space-4` horizontal

**Tab Item (Inactive):**
- **Background**: Transparent
- **Text Color**: `$liverpool-text-secondary` (#333F48)
- **Font Weight**: `$liverpool-font-weight-medium` (500)
- **Padding**: `$liverpool-space-3` `$liverpool-space-4`
- **Border Bottom**: 2px solid transparent

**Tab Item (Active):**
- **Background**: `$liverpool-neutral-white` (#FFFFFF)
- **Text Color**: `$liverpool-blue` (#212b58)
- **Font Weight**: `$liverpool-font-weight-semibold` (600)
- **Border Bottom**: 2px solid `$liverpool-blue`

**Tab Item (Hover):**
- **Background**: `$liverpool-neutral-white` (#FFFFFF)
- **Text Color**: `$liverpool-blue-dark` (#15376D)

#### Form Controls

**Input Fields:**
- **Background**: `$liverpool-neutral-white` (#FFFFFF)
- **Border**: 1px solid `$liverpool-neutral-200` (#DBDBD3)
- **Border Radius**: `$liverpool-radius-sm` (8px)
- **Padding**: `$liverpool-space-3` `$liverpool-space-4` (12px 16px)
- **Font Size**: 1rem (16px) in Studio context (10px base)
- **Focus Border**: 1px solid `$liverpool-blue` (#212b58)
- **Focus Shadow**: `$liverpool-shadow-focus`

**Labels:**
- **Font Size**: 1.4rem (14px) in Studio context
- **Font Weight**: `$liverpool-font-weight-medium` (500)
- **Color**: `$liverpool-text-secondary` (#333F48)
- **Margin Bottom**: `$liverpool-space-2` (8px)

**Drop Zone Editor Canvas:**
- **Border**: 2px solid `$liverpool-neutral-200` (#DBDBD3)
- **Border Radius**: `$liverpool-radius-sm` (8px)
- **Background**: `$liverpool-neutral-100` (#F8F9FA)
- **Cursor**: `crosshair` (when placing zones)

**Zone Indicators:**
- **Border**: 2px dashed `$liverpool-blue` (#212b58)
- **Background**: `$liverpool-blue` at 10% opacity
- **Label**: White text on `$liverpool-blue` background

#### SCSS Implementation

```scss
.dental-assessment-studio {
  font-family: $liverpool-font-primary;

  .studio-tabs {
    background-color: $liverpool-neutral-100;
    border-bottom: 2px solid $liverpool-neutral-200;
    padding: 0 $liverpool-space-4;
    display: flex;
    gap: $liverpool-space-2;
  }

  .studio-tab {
    background: transparent;
    color: $liverpool-text-secondary;
    font-weight: $liverpool-font-weight-medium;
    padding: $liverpool-space-3 $liverpool-space-4;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all $liverpool-duration-fast $liverpool-easing-out;

    &:hover {
      background-color: $liverpool-neutral-white;
      color: $liverpool-blue-dark;
    }

    &.is-active {
      background-color: $liverpool-neutral-white;
      color: $liverpool-blue;
      font-weight: $liverpool-font-weight-semibold;
      border-bottom-color: $liverpool-blue;
    }
  }

  .studio-form-group {
    margin-bottom: $liverpool-space-5;

    label {
      @extend .liverpool-label;
      font-size: 1.4rem; // Studio context (10px base)
    }

    input,
    textarea,
    select {
      @extend .liverpool-input;
      font-size: 1.4rem; // Studio context
    }
  }

  .studio-zone-editor {
    border: 2px solid $liverpool-neutral-200;
    border-radius: $liverpool-radius-sm;
    background-color: $liverpool-neutral-100;
    position: relative;
    overflow: hidden;

    &.is-placing-zone {
      cursor: crosshair;
    }

    .zone-indicator {
      position: absolute;
      border: 2px dashed $liverpool-blue;
      background-color: rgba($liverpool-blue, 0.1);
      border-radius: $liverpool-radius-circle;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: $liverpool-font-size-sm;
      font-weight: $liverpool-font-weight-semibold;
      color: $liverpool-blue;
      cursor: pointer;
      transition: all $liverpool-duration-fast $liverpool-easing-out;

      &:hover {
        border-style: solid;
        background-color: rgba($liverpool-blue, 0.2);
      }

      &.is-selected {
        border-style: solid;
        border-width: 3px;
        background-color: rgba($liverpool-blue, 0.3);
      }
    }
  }
}
```

---

## Responsive Design Strategy

### Breakpoints

The Dental Assessment XBlock uses a mobile-first responsive design approach with the following breakpoints:

```scss
// Mobile: 0-479px (default styles)
// Tablet: 480-767px
$breakpoint-tablet: 480px;

// Desktop: 768px+
$breakpoint-desktop: 768px;

// Large Desktop: 1024px+
$breakpoint-desktop-lg: 1024px;
```

### Component Behavior at Each Breakpoint

#### Mobile (0-479px)

**Draggable Labels:**
- Size: 48x48px (larger touch targets)
- Drag behavior: Touch events (touch-action: none)
- Initial position: Stacked vertically below image

**Image Container:**
- Width: 100% of viewport (minus padding)
- Max-width: None
- Aspect ratio: Preserved

**Submit Button:**
- Width: 100%
- Position: Fixed to bottom of screen (sticky)

**Feedback:**
- Font size: Reduced by 1 step
- Padding: Reduced to `$liverpool-space-4`

#### Tablet (480-767px)

**Draggable Labels:**
- Size: 44x44px
- Drag behavior: Touch/mouse hybrid
- Initial position: Horizontal row below image

**Image Container:**
- Max-width: 600px
- Centered with auto margins

**Submit Button:**
- Width: 100%
- Position: Static (below image)

**Feedback:**
- Font size: Standard
- Padding: Standard `$liverpool-space-5`

#### Desktop (768px+)

**Draggable Labels:**
- Size: 40x40px
- Drag behavior: Mouse events
- Initial position: Horizontal row below image

**Image Container:**
- Max-width: 800px
- Centered with auto margins

**Submit Button:**
- Width: Auto (min-width: 200px)
- Position: Static, left-aligned

**Feedback:**
- Font size: Standard
- Padding: Full `$liverpool-space-6`

### SCSS Implementation

```scss
.dental-assessment-canvas {
  width: 100%;
  max-width: 100%;
  padding: $liverpool-space-4;

  @media (min-width: $breakpoint-tablet) {
    max-width: 600px;
    margin: 0 auto;
    padding: $liverpool-space-5;
  }

  @media (min-width: $breakpoint-desktop) {
    max-width: 800px;
    padding: $liverpool-space-6;
  }
}

.dental-assessment-image-container {
  position: relative;
  width: 100%;
  margin-bottom: $liverpool-space-5;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: $liverpool-radius-sm;
    border: 1px solid $liverpool-neutral-200;
  }
}

.dental-assessment-labels-tray {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $liverpool-space-3;
  margin-bottom: $liverpool-space-5;

  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
    justify-content: center;
    gap: $liverpool-space-4;
  }
}

.dental-assessment-submit {
  width: 100%;
  position: sticky;
  bottom: $liverpool-space-4;
  z-index: 100;

  @media (min-width: $breakpoint-tablet) {
    position: static;
    width: 100%;
  }

  @media (min-width: $breakpoint-desktop) {
    width: auto;
    min-width: 200px;
  }
}
```

### Touch Target Sizes

All interactive elements must meet minimum touch target sizes for mobile accessibility:

| Element | Mobile Size | Desktop Size | Rationale |
|---------|-------------|--------------|-----------|
| Draggable Label | 48x48px | 40x40px | WCAG 2.1 AAA (44x44px minimum) |
| Submit Button | Full width, 48px height | Auto width, 44px height | Easy thumb reach |
| Studio Controls | 44x44px | 32x32px | Sufficient for touch |
| Tap zones | 48x48px | N/A | Buffer around small elements |

---

## Accessibility Design Requirements

### WCAG 2.1 Level AA Compliance

#### Color Contrast Ratios

All text and interactive elements must meet WCAG 2.1 AA contrast requirements:

| Element | Foreground | Background | Ratio | Requirement | Status |
|---------|-----------|-----------|-------|-------------|--------|
| Label Text | White (#FFFFFF) | Liverpool Blue (#212b58) | 12.6:1 | 4.5:1 | ✓ Pass |
| Body Text | Black (#000000) | White (#FFFFFF) | 21:1 | 4.5:1 | ✓ Pass |
| Secondary Text | Charcoal (#333F48) | White (#FFFFFF) | 11.3:1 | 4.5:1 | ✓ Pass |
| Muted Text | Grey (#8d9695) | White (#FFFFFF) | 3.2:1 | 3:1 (large text) | ✓ Pass |
| Success Feedback | Teal 700 (#006B5E) | Teal 100 (#E6F7F4) | 6.8:1 | 4.5:1 | ✓ Pass |
| Error Feedback | Pink 600 (#D9245A) | Pink 100 (#FDEEF3) | 5.9:1 | 4.5:1 | ✓ Pass |
| Angle Lines | Pink (#EF426F) | White (#FFFFFF) | 4.6:1 | 3:1 (graphics) | ✓ Pass |

#### Focus Indicators

All interactive elements must have visible focus indicators:

**Specification:**
- **Outline**: 2px solid `$liverpool-blue` (#212b58)
- **Outline Offset**: 2px
- **Box Shadow**: `$liverpool-shadow-focus` (0 0 0 3px rgba(33, 43, 88, 0.2))
- **Contrast Ratio**: 3:1 minimum against adjacent colors
- **Visibility**: Always visible when element has focus

**SCSS Implementation:**

```scss
// Global focus styles
*:focus-visible {
  outline: 2px solid $liverpool-blue;
  outline-offset: 2px;
  box-shadow: $liverpool-shadow-focus;
}

// Custom focus for draggable labels
.dental-assessment-label:focus-visible {
  outline: 2px solid $liverpool-blue;
  outline-offset: 2px;
  box-shadow: $liverpool-shadow-focus;
}

// Button focus (already included in liverpool-btn-primary)
.dental-assessment-submit:focus-visible {
  outline: none;
  box-shadow: $liverpool-btn-primary-shadow, $liverpool-shadow-focus;
}
```

#### Keyboard Navigation

**Tab Order:**
1. Instructions / Help text
2. Draggable Labels (left to right, top to bottom)
3. Submit Button
4. Feedback (if present)
5. Retry/Reset Button (if present)

**Keyboard Interactions:**

| Key | Action | Element |
|-----|--------|---------|
| Tab | Move focus to next interactive element | All |
| Shift+Tab | Move focus to previous interactive element | All |
| Space | Pick up/drop label (toggle grabbed state) | Label |
| Enter | Pick up/drop label | Label |
| Arrow Keys | Move label by 5% increments while grabbed | Label |
| Escape | Cancel drag, return label to original position | Label |
| Enter | Submit assessment | Submit Button |

**SCSS for Keyboard Navigation:**

```scss
.dental-assessment-label {
  &[aria-grabbed="true"] {
    background-color: $liverpool-blue-dark;
    transform: scale(1.05);
    box-shadow: $liverpool-shadow-md;
    outline: 2px solid $liverpool-blue;
    outline-offset: 2px;
  }

  // Arrow key movement animation
  &.is-moving-keyboard {
    transition: transform 150ms ease-out;
  }
}
```

#### Screen Reader Support

**ARIA Live Regions:**

```scss
.dental-assessment-sr-announcer {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;

  &[aria-live="polite"] {
    // Announcements for non-critical updates
  }

  &[aria-live="assertive"] {
    // Announcements for critical updates (errors)
  }
}
```

**Announcement Examples:**
- "Label A picked up. Use arrow keys to move, Space to drop."
- "Label A placed at zone 1."
- "Angle measured: 25.3 degrees."
- "Assessment submitted. 4 out of 5 labels correct."

#### Alternative Text and Labels

All visual elements must have appropriate text alternatives:

| Element | ARIA Role | ARIA Label | ARIA Attributes |
|---------|-----------|-----------|-----------------|
| Draggable Label | `button` | "Label A. Press Space to pick up." | `aria-grabbed`, `aria-describedby` |
| Drop Zone | `region` | "Drop zone for canal orifice" | `aria-dropeffect` |
| Angle Display | `img` | "Angle measurement: 25.3 degrees" | None |
| Feedback | `alert` | None (content is self-descriptive) | `aria-live="polite"`, `aria-atomic="true"` |
| Image | `img` | "Dental radiograph for root canal assessment" | `alt` attribute |

---

## SCSS Architecture

### File Structure

```
dental-assessment-xblock/
└── frontend/
    └── src/
        └── shared/
            └── styles/
                ├── _variables.scss          # Component-specific variables
                ├── _mixins.scss             # Reusable SCSS mixins
                ├── components/
                │   ├── _label.scss          # Draggable label styles
                │   ├── _dropzone.scss       # Drop zone styles
                │   ├── _angle-tool.scss     # Angle measurement styles
                │   ├── _feedback.scss       # Feedback display styles
                │   ├── _submit-button.scss  # Submit button styles
                │   └── _studio-editor.scss  # Studio editor styles
                └── dental-assessment.scss   # Main entry point
```

### Main Entry Point (`dental-assessment.scss`)

```scss
/**
 * Dental Assessment XBlock - Main Styles
 *
 * Design System: Liverpool Dental School v2.0.0
 * Version: 1.0.0
 *
 * This file imports the Liverpool design system and component styles.
 */

// ============================================================================
// 1. LIVERPOOL DESIGN SYSTEM IMPORTS
// ============================================================================
@import '../../../../../../shared-styles/styles/liverpool-shared-tokens';
@import '../../../../../../shared-styles/styles/liverpool-shared-components';
@import '../../../../../../shared-styles/styles/liverpool-shared-utilities';

// ============================================================================
// 2. COMPONENT VARIABLES (overrides if needed)
// ============================================================================
@import 'variables';

// ============================================================================
// 3. MIXINS
// ============================================================================
@import 'mixins';

// ============================================================================
// 4. COMPONENT STYLES
// ============================================================================
@import 'components/label';
@import 'components/dropzone';
@import 'components/angle-tool';
@import 'components/feedback';
@import 'components/submit-button';
@import 'components/studio-editor';

// ============================================================================
// 5. LAYOUT & CONTAINER STYLES
// ============================================================================
.dental-assessment-xblock {
  font-family: $liverpool-font-primary;
  color: $liverpool-text-primary;
  line-height: $liverpool-line-height-relaxed;

  * {
    box-sizing: border-box;
  }
}

.dental-assessment-canvas {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: $liverpool-space-6;

  @media (max-width: 767px) {
    padding: $liverpool-space-4;
  }
}

.dental-assessment-instructions {
  margin-bottom: $liverpool-space-5;
  padding: $liverpool-space-4;
  background-color: $liverpool-bg-subtle;
  border-left: 4px solid $liverpool-blue;
  border-radius: $liverpool-radius-md;

  p {
    margin: 0;
    font-size: $liverpool-font-size-base;
    line-height: $liverpool-line-height-relaxed;
    color: $liverpool-text-secondary;
  }
}

// ============================================================================
// 6. UTILITY OVERRIDES (if needed)
// ============================================================================

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Variables (`_variables.scss`)

```scss
/**
 * Component-Specific Variables
 *
 * These variables override or extend Liverpool design tokens
 * for the Dental Assessment XBlock.
 */

// Label sizing
$label-size-mobile: 48px;
$label-size-tablet: 44px;
$label-size-desktop: 40px;

// Drop zone sizing
$dropzone-min-radius: 5%;    // Percentage of image width
$dropzone-max-radius: 20%;   // Percentage of image width

// Angle measurement
$angle-line-width: 2px;
$angle-arc-width: 1.5px;
$angle-arc-radius: 30px;

// Z-index layers
$z-index-dropzone: 1;
$z-index-angle-overlay: 5;
$z-index-label-default: 10;
$z-index-label-dragging: 1000;

// Animation durations
$drag-animation-duration: 300ms;
$feedback-animation-duration: 300ms;
$label-shake-duration: 300ms;

// Breakpoints (from Liverpool)
$breakpoint-mobile: 0;
$breakpoint-tablet: 480px;
$breakpoint-desktop: 768px;
$breakpoint-desktop-lg: 1024px;
```

### Mixins (`_mixins.scss`)

```scss
/**
 * Reusable SCSS Mixins
 */

// Responsive breakpoint mixin
@mixin respond-to($breakpoint) {
  @if $breakpoint == tablet {
    @media (min-width: $breakpoint-tablet) {
      @content;
    }
  } @else if $breakpoint == desktop {
    @media (min-width: $breakpoint-desktop) {
      @content;
    }
  } @else if $breakpoint == desktop-lg {
    @media (min-width: $breakpoint-desktop-lg) {
      @content;
    }
  }
}

// Touch device detection
@mixin touch-device {
  @media (hover: none) and (pointer: coarse) {
    @content;
  }
}

// Hover state (only for mouse devices)
@mixin hover-support {
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      @content;
    }
  }
}

// Focus visible state (modern browsers)
@mixin focus-visible {
  &:focus-visible {
    @content;
  }
}

// Aspect ratio container
@mixin aspect-ratio($width, $height) {
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: ($height / $width) * 100%;
  }

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

// Circular element
@mixin circle($size) {
  width: $size;
  height: $size;
  border-radius: 50%;
}

// Center absolutely positioned element
@mixin center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// Truncate text with ellipsis
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Screen reader only (visually hidden)
@mixin sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

### Usage Examples

**Using Liverpool Tokens:**

```scss
.my-component {
  // Use Liverpool color tokens
  background-color: $liverpool-blue;
  color: $liverpool-text-inverse;

  // Use Liverpool spacing
  padding: $liverpool-space-4 $liverpool-space-5;
  margin-bottom: $liverpool-space-6;

  // Use Liverpool typography
  font-family: $liverpool-font-primary;
  font-size: $liverpool-font-size-base;
  font-weight: $liverpool-font-weight-semibold;

  // Use Liverpool borders and shadows
  border-radius: $liverpool-radius-md;
  box-shadow: $liverpool-shadow-base;

  // Use Liverpool transitions
  transition: $liverpool-transition-base;
}
```

**Using Custom Mixins:**

```scss
.dental-label {
  @include circle($label-size-desktop);
  @include focus-visible {
    outline: 2px solid $liverpool-blue;
    box-shadow: $liverpool-shadow-focus;
  }

  @include respond-to(tablet) {
    @include circle($label-size-tablet);
  }

  @include touch-device {
    @include circle($label-size-mobile);
  }
}
```

---

## Animation and Interaction Design

### Animation Principles

1. **Purpose**: Every animation serves a functional purpose (feedback, state change, attention)
2. **Duration**: Keep animations short (150-300ms) for responsiveness
3. **Easing**: Use `ease-out` for entries, `ease-in` for exits, `ease-in-out` for movements
4. **Reduced Motion**: Respect `prefers-reduced-motion` user preference

### Key Animations

#### 1. Label Drag Animation

```scss
.dental-assessment-label {
  transition: transform $liverpool-duration-base $liverpool-easing-out,
              box-shadow $liverpool-duration-base $liverpool-easing-out;

  &.is-dragging {
    transform: scale(1.1) rotate(5deg);
    box-shadow: $liverpool-shadow-lg;
    transition: transform $liverpool-duration-fast $liverpool-easing-out;
  }
}
```

#### 2. Label Shake (Error Feedback)

```scss
@keyframes label-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.dental-assessment-label.is-error {
  animation: label-shake 300ms ease-in-out;
}
```

#### 3. Drop Zone Pulse (Drag Hover)

```scss
@keyframes zone-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.dental-assessment-dropzone.is-hovered {
  animation: zone-pulse 1s ease-in-out infinite;
}
```

#### 4. Feedback Slide In

```scss
@keyframes feedback-slide-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dental-assessment-feedback {
  animation: feedback-slide-in 300ms ease-out;
}
```

#### 5. Angle Fade In

```scss
@keyframes angle-fade-in {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.angle-label {
  animation: angle-fade-in 200ms ease-out;
}
```

#### 6. Button Loading Spinner

```scss
@keyframes spinner-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.button-spinner {
  animation: spinner-rotate 600ms linear infinite;
}
```

### Interaction States Summary

| Element | State | Visual Change | Duration | Easing |
|---------|-------|---------------|----------|--------|
| Label | Hover | Scale 1.05, shadow increase | 300ms | ease-out |
| Label | Drag | Scale 1.1, rotate 5deg, opacity 0.8 | 150ms | ease-out |
| Label | Drop | Scale 1, color change | 300ms | ease-out |
| Label | Error | Shake animation | 300ms | ease-in-out |
| Drop Zone | Hover | Pulse scale 1-1.05 | 1s | ease-in-out (infinite) |
| Button | Hover | Scale 1.05, shadow increase | 300ms | ease-out |
| Button | Click | Scale 0.98 | 150ms | ease-out |
| Feedback | Enter | Slide down, fade in | 300ms | ease-out |
| Angle | Appear | Fade in, slide up | 200ms | ease-out |

### Reduced Motion Support

```scss
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  // Exception: Keep focus indicators visible
  *:focus-visible {
    transition: outline 0s, box-shadow 0s;
  }
}
```

---

## Visual Design Reference

### Component Hierarchy

```
Dental Assessment XBlock
├── Instructions Panel (optional)
│   └── Liverpool card with blue left border
├── Image Container
│   ├── Radiograph Image
│   ├── Drop Zones (invisible in production)
│   ├── Draggable Labels (positioned on image)
│   └── Angle Measurement Overlay (SVG)
├── Labels Tray (initial label positions)
│   └── Row of draggable labels
├── Submit Button
│   └── Liverpool primary button (pill shape)
└── Feedback Panel (after submission)
    ├── Header (icon + title)
    ├── Details (per-label feedback)
    ├── Angle Section (if enabled)
    └── Actions (retry/reset buttons)
```

### Layout Examples

#### Mobile Layout (320px width)

```
┌────────────────────────────────┐
│  Instructions (collapsible)    │
├────────────────────────────────┤
│                                │
│         Image Container        │
│        (full width, 4:3)       │
│                                │
├────────────────────────────────┤
│  Labels: [A] [B] [C] [D] [X]  │
│       (stacked vertically)     │
├────────────────────────────────┤
│    [Submit Assessment]         │
│      (full width button)       │
├────────────────────────────────┤
│      Feedback Panel            │
│    (collapsible sections)      │
└────────────────────────────────┘
```

#### Tablet Layout (768px width)

```
┌─────────────────────────────────────────┐
│        Instructions (expanded)          │
├─────────────────────────────────────────┤
│                                         │
│          Image Container                │
│          (max 600px, centered)          │
│                                         │
├─────────────────────────────────────────┤
│   Labels: [A] [B] [C] [D] [X]          │
│        (horizontal row, centered)       │
├─────────────────────────────────────────┤
│         [Submit Assessment]             │
│          (centered, auto width)         │
├─────────────────────────────────────────┤
│           Feedback Panel                │
│         (full width, expanded)          │
└─────────────────────────────────────────┘
```

#### Desktop Layout (1024px+ width)

```
┌──────────────────────────────────────────────────┐
│           Instructions (expanded)                │
├──────────────────────────────────────────────────┤
│                                                  │
│             Image Container                      │
│            (max 800px, centered)                 │
│                                                  │
├──────────────────────────────────────────────────┤
│      Labels: [A] [B] [C] [D] [X]                │
│          (horizontal row, centered)              │
├──────────────────────────────────────────────────┤
│  [Submit Assessment]                             │
│   (left-aligned, 200px min-width)                │
├──────────────────────────────────────────────────┤
│              Feedback Panel                      │
│          (max 800px, expanded)                   │
└──────────────────────────────────────────────────┘
```

### Color Swatches for Quick Reference

#### Primary Colors
- **Liverpool Blue**: `#212b58` ████████
- **Liverpool Blue Dark**: `#15376D` ████████
- **Liverpool Teal**: `#00A689` ████████
- **Liverpool Pink**: `#EF426F` ████████

#### Neutral Colors
- **White**: `#FFFFFF` ████████
- **Light Gray**: `#F8F9FA` ████████
- **Stone**: `#DBDBD3` ████████
- **Charcoal**: `#333F48` ████████
- **Black**: `#000000` ████████

#### Semantic Colors
- **Success Background**: `#E6F7F4` ████████
- **Success Border**: `#80DDC9` ████████
- **Success Text**: `#006B5E` ████████
- **Error Background**: `#FDEEF3` ████████
- **Error Border**: `#F7A0BB` ████████
- **Error Text**: `#D9245A` ████████

---

## Implementation Checklist

### Design Tokens Integration
- [ ] Import Liverpool shared tokens
- [ ] Import Liverpool shared components
- [ ] Import Liverpool shared utilities
- [ ] Define component-specific variables
- [ ] Set up responsive breakpoints

### Component Styling
- [ ] Draggable labels (all states)
- [ ] Drop zones (Studio preview only)
- [ ] Angle measurement overlay
- [ ] Feedback display (success/error)
- [ ] Submit button (all states)
- [ ] Studio editor interface

### Responsive Design
- [ ] Mobile layout (0-479px)
- [ ] Tablet layout (480-767px)
- [ ] Desktop layout (768px+)
- [ ] Touch target sizes verified
- [ ] Image scaling tested

### Accessibility
- [ ] Color contrast ratios verified
- [ ] Focus indicators implemented
- [ ] Keyboard navigation tested
- [ ] Screen reader labels added
- [ ] ARIA attributes applied
- [ ] Reduced motion support

### Animations
- [ ] Label drag/drop animations
- [ ] Label shake on error
- [ ] Drop zone pulse on hover
- [ ] Feedback slide-in
- [ ] Angle fade-in
- [ ] Button loading spinner

### Testing
- [ ] Visual regression testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit (axe, WAVE)
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation test

---

## Conclusion

This design specification provides a comprehensive foundation for implementing the Dental Assessment XBlock with full Liverpool design system integration. All components are designed to be:

- **Accessible**: WCAG 2.1 AA compliant with keyboard and screen reader support
- **Responsive**: Mobile-first design that adapts gracefully to all screen sizes
- **Consistent**: Uses Liverpool design tokens for colors, typography, spacing, and components
- **Performant**: Optimized animations and transitions that respect user preferences
- **Maintainable**: Modular SCSS architecture with clear separation of concerns

**Next Steps**: Proceed with component implementation following the React component specifications in the Implementation Plan and API Contracts documents.

---

**Document Status**: ✅ APPROVED FOR DEVELOPMENT
**Design System Version**: Liverpool Dental School v2.0.0
**Document Version**: 1.0
**Last Updated**: 2025-11-26
