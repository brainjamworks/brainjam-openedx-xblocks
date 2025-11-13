# Liverpool Dental CPD - Shared Design System

**Version:** 2.0.0
**Last Updated:** 2025-11-04
**Based on:** `/docs/design-language/LIVERPOOL_DESIGN_LANGUAGE.md`

## Overview

This directory contains the **unified Liverpool design token system** used across ALL XBlock views:
- **Student-UI** (learner-facing components)
- **Studio-UI** (authoring/editing components)

The design system consists of three main files:
1. **`liverpool-shared-tokens.scss`** - Design tokens (colors, typography, spacing, shadows, etc.)
2. **`liverpool-shared-components.scss`** - Reusable component classes (buttons, cards, forms)
3. **`liverpool-shared-utilities.scss`** - Utility classes (spacing, colors, layout helpers)

---

## Migration from v1.0 (Student-UI Only)

**What Changed:**
- Renamed `liverpool-student-tokens.scss` → `liverpool-shared-tokens.scss`
- Added **8 new studio-specific token sections** (modals, steppers, drag-and-drop, etc.)
- Moved from `/shared/student-ui/styles/` → `/shared/styles/`
- Updated all documentation to reflect shared usage

**Breaking Changes:**
- Import paths have changed (see usage examples below)
- All student-ui XBlock files must update imports

---

## Quick Start

### For Student-UI Components

```scss
// At the top of your student-ui SCSS file
@import '../../../../../../shared/styles/liverpool-shared-tokens';

// Optional: Import components or utilities
@import '../../../../../../shared/styles/liverpool-shared-components';
@import '../../../../../../shared/styles/liverpool-shared-utilities';

// Your XBlock-specific styles
.my-xblock-student-view {
  font-family: $liverpool-font-primary;
  color: $liverpool-text-primary;
  background: $liverpool-card-bg;
  border-radius: $liverpool-card-border-radius;
  padding: $liverpool-space-6;
  box-shadow: $liverpool-card-shadow;
}
```

### For Studio-UI Components

```scss
// At the top of your studio-ui SCSS file
@import '../../../../../shared/styles/liverpool-shared-tokens';

// Optional: Import components or utilities
@import '../../../../../shared/styles/liverpool-shared-components';
@import '../../../../../shared/styles/liverpool-shared-utilities';

// Your XBlock-specific studio styles
.my-xblock-studio-view {
  // Standard tokens work in studio too
  font-family: $liverpool-font-primary;
  color: $liverpool-text-primary;

  // Studio-specific modal typography (10px base context)
  h3 {
    font-size: $liverpool-modal-h3-size; // 2.2rem = 22px
  }

  // Studio-specific sticky actions
  .sticky-actions {
    box-shadow: $liverpool-sticky-action-shadow;
    padding: $liverpool-sticky-action-padding-v $liverpool-sticky-action-padding-h;
  }
}
```

---

## Token Categories

### 1. Typography Tokens
- Font families, weights, sizes, line heights
- **Works in both student-ui and studio-ui**

```scss
$liverpool-font-primary: 'Poppins', sans-serif;
$liverpool-font-weight-semibold: 600;
$liverpool-font-size-base: 1rem;
$liverpool-line-height-relaxed: 1.5;
```

### 2. Color Tokens
- Liverpool brand colors (blue, teal, pink, yellow, sky blue)
- Color scales (100-900 for blue, teal, pink)
- Neutral scale (white through black)
- Semantic colors (success, error, warning, info)
- Functional tokens (text, background, border, link)

```scss
$liverpool-blue: #212b58;
$liverpool-teal: #00A689;
$liverpool-pink: #EF426F;
$liverpool-neutral-200: #DBDBD3;
$liverpool-text-primary: #000000;
```

### 3. Spacing Tokens
- 4px base unit scale (space-1 through space-12)
- Consistent spacing across all components

```scss
$liverpool-space-4: 1rem;    // 16px
$liverpool-space-5: 1.5rem;  // 24px
$liverpool-space-6: 2rem;    // 32px
```

### 4. Border Radius Tokens
- From xs (4px) to pill (50px)
- Card radius: 16px
- Button radius: 50px (pill shape)

```scss
$liverpool-radius-base: 16px;      // Standard cards
$liverpool-radius-pill: 50px;      // Buttons
```

### 5. Shadow Tokens
- Standard shadows (xs through xl)
- Contextual shadows (primary, focus, navy)

```scss
$liverpool-shadow-base: 0 4px 8px rgba(0, 0, 0, 0.12);
$liverpool-shadow-primary: 0 4px 16px rgba(33, 43, 88, 0.4);
$liverpool-shadow-focus: 0 0 0 3px rgba(33, 43, 88, 0.2);
```

### 6. Transition Tokens
- Durations (fast 150ms, base 300ms)
- Easing functions
- Common transition patterns

```scss
$liverpool-duration-base: 300ms;
$liverpool-easing-out: ease-out;
$liverpool-transition-transform: transform 300ms ease-out;
```

### 7. Button Design Tokens
- Primary, secondary, outline, disabled states
- Pill-shaped with shadows and scale animations

```scss
$liverpool-btn-primary-bg: #212b58;
$liverpool-btn-primary-shadow: 0 4px 16px rgba(33, 43, 88, 0.4);
$liverpool-btn-border-radius: 50px;
```

### 8. Card Design Tokens
- Standard card styling with shadows and hover effects

```scss
$liverpool-card-bg: #FFFFFF;
$liverpool-card-border-radius: 16px;
$liverpool-card-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
```

### 9. Form Design Tokens
- Input fields, focus states, disabled states

```scss
$liverpool-input-border-focus: 1px solid rgba(33, 43, 88, 0.5);
$liverpool-input-shadow-focus: 0 0 0 0.2rem rgba(33, 43, 88, 0.25);
```

### 10. Feedback Message Tokens
- Success (teal), error (pink), warning (yellow), info (sky blue)

```scss
$liverpool-feedback-success-bg: #E6F7F4;
$liverpool-feedback-error-bg: #FDEEF3;
```

---

## Studio-UI Specific Tokens (NEW in v2.0)

### 11. Modal Typography Tokens
**Context:** OpenEdx Studio modals use `font-size: 10px` on the modal root. All rem values are relative to 10px.

```scss
$liverpool-modal-h3-size: 2.2rem;           // 22px
$liverpool-modal-h4-size: 1.8rem;           // 18px
$liverpool-modal-label-size: 1.8rem;        // 18px
$liverpool-modal-body-size: 1.4rem;         // 14px
$liverpool-modal-button-size: 1.8rem;       // 18px
```

**Example Usage:**
```scss
.studio-modal {
  font-size: 10px; // Set by Paragon

  h3 {
    font-size: $liverpool-modal-h3-size; // 2.2rem = 22px
  }

  .form-label {
    font-size: $liverpool-modal-label-size; // 1.8rem = 18px
  }
}
```

### 12. Sticky Action Bar Tokens
**Context:** Bottom-anchored save/cancel buttons in studio modals

```scss
$liverpool-sticky-action-shadow: 0 -4px 8px rgba(0, 0, 0, 0.12);
$liverpool-sticky-action-z-index: 100;
$liverpool-sticky-action-padding-v: 1.5rem;
$liverpool-sticky-action-padding-h: 3rem;
```

**Example Usage:**
```scss
.sticky-actions {
  position: sticky;
  bottom: 0;
  background: $liverpool-sticky-action-bg;
  box-shadow: $liverpool-sticky-action-shadow;
  z-index: $liverpool-sticky-action-z-index;
  padding: $liverpool-sticky-action-padding-v $liverpool-sticky-action-padding-h;
}
```

### 13. Wizard/Stepper Tokens
**Context:** Multi-step editors (Image Commentary, Image Hotspot)

```scss
$liverpool-stepper-bubble-size: 3.2rem;
$liverpool-stepper-active-bg: $liverpool-blue;
$liverpool-stepper-complete-bg: $liverpool-blue;
$liverpool-stepper-incomplete-bg: $liverpool-neutral-300;
```

**Example Usage:**
```scss
.stepper-step {
  .step-bubble {
    width: $liverpool-stepper-bubble-size;
    height: $liverpool-stepper-bubble-size;
    background: $liverpool-stepper-incomplete-bg;

    &.active {
      background: $liverpool-stepper-active-bg;
    }
  }
}
```

### 14. Drag-and-Drop State Tokens
**Context:** Reorderable lists (cards, pairs, tabs)

```scss
$liverpool-drag-opacity: 0.5;
$liverpool-drag-over-border: 2px solid $liverpool-blue;
$liverpool-drag-handle-color: $liverpool-neutral-400;
$liverpool-drag-cursor-grab: grab;
```

**Example Usage:**
```scss
.draggable-item {
  cursor: $liverpool-drag-cursor-grab;

  &.dragging {
    opacity: $liverpool-drag-opacity;
  }

  .drag-handle {
    color: $liverpool-drag-handle-color;
  }
}

.drop-zone {
  &.drag-over {
    border: $liverpool-drag-over-border;
  }
}
```

### 15. Studio List Item Tokens
**Context:** Card-style list items in studio editors

```scss
$liverpool-list-item-padding-v: 1.5rem;
$liverpool-list-item-gap: 1.2rem;
$liverpool-list-item-border: 1px solid $liverpool-neutral-200;
$liverpool-list-item-label-size: 1.4rem;
```

### 16. Asset Picker Tokens
**Context:** Grid-based image/file selection UI

```scss
$liverpool-asset-grid-columns: repeat(auto-fill, minmax(150px, 1fr));
$liverpool-asset-item-border-selected: 2px solid $liverpool-blue;
$liverpool-asset-item-border-hover: $liverpool-blue;
```

### 17. Marker/Hotspot Canvas Tokens
**Context:** Visual editor overlays for image-based interactions

```scss
$liverpool-marker-size: 32px;
$liverpool-marker-info: $liverpool-blue;
$liverpool-canvas-border: 2px solid $liverpool-neutral-200;
$liverpool-canvas-cursor: crosshair;
```

---

## Component Classes

### Buttons

```scss
.liverpool-btn-primary {
  // Liverpool blue pill button with scale animation
  background: $liverpool-btn-primary-bg;
  border-radius: $liverpool-btn-border-radius;
  box-shadow: $liverpool-btn-primary-shadow;

  &:hover {
    transform: scale(1.05);
  }
}

.liverpool-btn-secondary {
  // Teal pill button
}

.liverpool-btn-outline {
  // Liverpool blue outline button
}

.liverpool-btn-link {
  // Text button with underline on hover
}
```

### Cards

```scss
.liverpool-card {
  // Standard card with 16px radius and shadow
}

.liverpool-card-interactive {
  // Clickable card with hover effect
}
```

### Feedback Messages

```scss
.liverpool-feedback-success {
  // Teal success message
}

.liverpool-feedback-error {
  // Pink error message
}

.liverpool-feedback-warning {
  // Yellow warning message
}

.liverpool-feedback-info {
  // Sky blue info message
}
```

### Forms

```scss
.liverpool-input {
  // Text input with Liverpool blue focus
}

.liverpool-textarea {
  // Textarea (extends .liverpool-input)
}

.liverpool-select {
  // Select dropdown
}

.liverpool-label {
  // Form label
}
```

---

## Utility Classes

### Spacing

```scss
.liverpool-mt-4   // margin-top: 1rem
.liverpool-mb-5   // margin-bottom: 1.5rem
.liverpool-p-6    // padding: 2rem
.liverpool-gap-3  // gap: 0.75rem
```

### Colors

```scss
.liverpool-text-primary    // color: #000000
.liverpool-text-secondary  // color: #333F48
.liverpool-text-muted      // color: #8d9695
.liverpool-bg-subtle       // background: #F8F9FA
```

### Flexbox

```scss
.liverpool-d-flex
.liverpool-flex-column
.liverpool-align-center
.liverpool-justify-between
```

---

## Best Practices

### 1. Always Use Tokens
❌ **DON'T:**
```scss
.my-button {
  background: #212b58;
  border-radius: 50px;
  box-shadow: 0 4px 16px rgba(33, 43, 88, 0.4);
}
```

✅ **DO:**
```scss
.my-button {
  background: $liverpool-btn-primary-bg;
  border-radius: $liverpool-btn-border-radius;
  box-shadow: $liverpool-btn-primary-shadow;
}
```

### 2. Use Studio-Specific Tokens in Studio-UI
❌ **DON'T:**
```scss
// In studio-ui file
h3 {
  font-size: 2rem; // Wrong - doesn't account for 10px modal base
}
```

✅ **DO:**
```scss
// In studio-ui file
h3 {
  font-size: $liverpool-modal-h3-size; // 2.2rem = 22px in 10px context
}
```

### 3. Import Order Matters
```scss
// 1. Tokens first (required)
@import '../../../../../../shared/styles/liverpool-shared-tokens';

// 2. Components (optional)
@import '../../../../../../shared/styles/liverpool-shared-components';

// 3. Utilities (optional)
@import '../../../../../../shared/styles/liverpool-shared-utilities';

// 4. Your XBlock-specific styles
```

### 4. Use Semantic Tokens
```scss
// Use semantic color tokens instead of scale tokens when possible
.success-message {
  color: $liverpool-color-success;  // Better than $liverpool-teal
}

.error-message {
  color: $liverpool-color-error;    // Better than $liverpool-pink
}
```

### 5. Respect the 4px Spacing Scale
```scss
// Use spacing tokens instead of arbitrary values
.my-card {
  margin-bottom: $liverpool-space-5;  // 24px
  padding: $liverpool-space-6;        // 32px

  // Not: margin-bottom: 25px; padding: 30px;
}
```

---

## Migration Guide

### Updating Student-UI Files

**Old import path:**
```scss
@import '../../../../../shared/student-ui/styles/liverpool-student-tokens';
```

**New import path:**
```scss
@import '../../../../../../shared/styles/liverpool-shared-tokens';
```

**Files to update:**
- `/packages/xblocks/standard/accordion/frontend/src/student-ui/styles/minimal-paragon.scss`
- `/packages/xblocks/standard/flashcards/frontend/src/student-ui/styles/minimal-paragon.scss`
- `/packages/xblocks/standard/tabs/frontend/src/student-ui/styles/minimal-paragon.scss`
- `/packages/xblocks/standard/image-commentary-xblock/frontend/src/student-ui/styles/minimal-paragon.scss`
- `/packages/xblocks/problem/drag-drop-matching-xblock/frontend/src/student-ui/styles/minimal-paragon.scss`
- `/packages/xblocks/problem/image-hotspot-xblock/frontend/src/student-ui/styles/minimal-paragon.scss`

### Updating Studio-UI Files

**Add this import at the top:**
```scss
@import '../../../../../shared/styles/liverpool-shared-tokens';
```

**Replace hardcoded values:**
```scss
// Before
background-color: #212b58 !important;
border-radius: 2rem !important;
box-shadow: 0 4px 16px rgba(33, 43, 88, 0.4) !important;

// After
background-color: $liverpool-btn-primary-bg !important;
border-radius: $liverpool-btn-border-radius !important;
box-shadow: $liverpool-btn-primary-shadow !important;
```

---

## File Structure

```
/shared/styles/
├── README.md                           (This file)
├── liverpool-shared-tokens.scss        (Design tokens - 470 lines)
├── liverpool-shared-components.scss    (Component classes - 552 lines)
└── liverpool-shared-utilities.scss     (Utility classes - 269 lines)
```

**Total Lines of Reusable Code:** 1,291 lines
**Token Count:** 200+ design tokens

---

## Support and Documentation

- **Design Language:** `/docs/design-language/LIVERPOOL_DESIGN_LANGUAGE.md`
- **Component Examples:** See individual XBlock implementations
- **Questions:** Contact the Liverpool Dental CPD development team

---

**Version History:**
- **v2.0.0** (2025-11-04): Added studio-ui tokens, renamed to shared system
- **v1.0.0** (2025-11-04): Initial student-ui token system
