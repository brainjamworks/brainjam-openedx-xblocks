# Liverpool Dental CPD - Shared Student UI Library

**Version:** 1.0.0
**Created:** 2025-11-04
**Purpose:** Shared design system for all XBlock student views (learner-facing UI)

---

## Overview

This shared library provides consistent Liverpool-branded styling for all XBlock student views. It includes design tokens, reusable component classes, and utility classes based on the [Liverpool Design Language](/docs/design-language/LIVERPOOL_DESIGN_LANGUAGE.md).

### Why Use This Library?

- **Consistency** - All XBlocks use the same Liverpool colors, fonts, spacing, and components
- **Maintainability** - Update the design system once, all XBlocks benefit
- **Efficiency** - Pre-built components and utilities accelerate development
- **Quality** - WCAG AA compliant colors and accessible patterns built-in

---

## File Structure

```
/brainjam-openedx-xblocks/shared/student-ui/styles/
├── liverpool-student-tokens.scss       # Design tokens (colors, spacing, typography)
├── liverpool-student-components.scss   # Reusable component classes
├── liverpool-student-utilities.scss    # Utility classes for rapid styling
└── README.md                          # This file
```

---

## Installation

### 1. Import in Your XBlock Student UI SCSS

```scss
// Import tokens first (required)
@import '../../../../../shared/student-ui/styles/liverpool-student-tokens';

// Import components (optional, if using component classes)
@import '../../../../../shared/student-ui/styles/liverpool-student-components';

// Import utilities (optional, if using utility classes)
@import '../../../../../shared/student-ui/styles/liverpool-student-utilities';

// Your XBlock-specific styles below
.my-xblock-student-view {
  // Use tokens, components, or utilities here
}
```

### 2. Path Explanation

The path `../../../../../shared/student-ui/styles/` navigates from:
```
/packages/xblocks/[category]/[xblock-name]/frontend/src/student-ui/styles/
```
Up to:
```
/shared/student-ui/styles/
```

---

## Usage Guide

### Design Tokens

Design tokens are SCSS variables you use directly in your styles.

#### Typography Tokens

```scss
// Font families
$liverpool-font-primary   // 'Poppins', system fonts
$liverpool-font-mono      // Monospace fonts

// Font weights
$liverpool-font-weight-light      // 300
$liverpool-font-weight-regular    // 400
$liverpool-font-weight-medium     // 500
$liverpool-font-weight-semibold   // 600
$liverpool-font-weight-bold       // 700

// Font sizes
$liverpool-font-size-xs     // 12px
$liverpool-font-size-sm     // 14px
$liverpool-font-size-base   // 16px (default)
$liverpool-font-size-md     // 18px
$liverpool-font-size-lg     // 20px
$liverpool-font-size-xl     // 24px
```

**Example:**
```scss
.my-heading {
  font-family: $liverpool-font-primary;
  font-size: $liverpool-font-size-xl;
  font-weight: $liverpool-font-weight-semibold;
}
```

#### Color Tokens

```scss
// Primary brand colors
$liverpool-blue           // #212b58 (Primary)
$liverpool-blue-dark      // #15376D (Hover)
$liverpool-teal           // #00A689 (Secondary)
$liverpool-pink           // #EF426F (Error)
$liverpool-yellow         // #FFD100 (Warning)
$liverpool-sky-blue       // #009CDD (Info)

// Semantic colors
$liverpool-color-success  // Teal
$liverpool-color-error    // Pink
$liverpool-color-warning  // Yellow
$liverpool-color-info     // Sky Blue

// Functional tokens
$liverpool-text-primary   // Black (#000000)
$liverpool-text-secondary // Charcoal (#333F48)
$liverpool-text-muted     // Grey (#8d9695)
$liverpool-bg-page        // White
$liverpool-border-default // Stone (#DBDBD3)
```

**Example:**
```scss
.my-button {
  background-color: $liverpool-blue;
  color: $liverpool-text-inverse;
  border: 2px solid $liverpool-border-default;
}
```

#### Spacing Tokens

```scss
$liverpool-space-0    // 0px
$liverpool-space-1    // 4px
$liverpool-space-2    // 8px
$liverpool-space-3    // 12px
$liverpool-space-4    // 16px (base unit)
$liverpool-space-5    // 24px
$liverpool-space-6    // 32px
$liverpool-space-7    // 40px
$liverpool-space-8    // 48px
```

**Example:**
```scss
.my-card {
  padding: $liverpool-space-6;
  margin-bottom: $liverpool-space-4;
  gap: $liverpool-space-3;
}
```

#### Other Tokens

```scss
// Border radius
$liverpool-radius-base    // 16px (cards)
$liverpool-radius-pill    // 50px (buttons)
$liverpool-radius-sm      // 8px (inputs)

// Shadows
$liverpool-shadow-base    // Standard card shadow
$liverpool-shadow-md      // Hover shadow
$liverpool-shadow-primary // Button shadow

// Transitions
$liverpool-transition-base  // Standard 300ms transition
$liverpool-duration-base    // 300ms
$liverpool-easing-in-out    // cubic-bezier(0.4, 0, 0.2, 1)
```

---

### Component Classes

Pre-built component classes you add to HTML elements.

#### Buttons

```html
<!-- Primary button (Liverpool Blue, pill-shaped, scale animation) -->
<button class="liverpool-btn-primary">Submit Answer</button>

<!-- Secondary button (Teal) -->
<button class="liverpool-btn-secondary">Save Progress</button>

<!-- Outline button -->
<button class="liverpool-btn-outline">Reset</button>

<!-- Link button -->
<button class="liverpool-btn-link">Learn More</button>

<!-- Danger link button -->
<button class="liverpool-btn-link-danger">Delete</button>

<!-- Size variants -->
<button class="liverpool-btn-primary liverpool-btn-sm">Small</button>
<button class="liverpool-btn-primary liverpool-btn-lg">Large</button>
```

#### Cards

```html
<!-- Standard card -->
<div class="liverpool-card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

<!-- Interactive card (hover lift effect) -->
<div class="liverpool-card-interactive">
  <h3>Clickable Card</h3>
</div>

<!-- Card with accent border -->
<div class="liverpool-card-accent">
  <h3>Premium Content</h3>
</div>

<!-- Card with sections -->
<div class="liverpool-card">
  <div class="liverpool-card-header">
    <h3>Header</h3>
  </div>
  <div class="liverpool-card-body">
    <p>Main content</p>
  </div>
  <div class="liverpool-card-footer">
    <button class="liverpool-btn-primary">Action</button>
  </div>
</div>
```

#### Feedback Messages

```html
<!-- Success message -->
<div class="liverpool-feedback-success">
  <i class="fa fa-check-circle"></i>
  <span>Answer submitted successfully!</span>
</div>

<!-- Error message -->
<div class="liverpool-feedback-error">
  <i class="fa fa-exclamation-circle"></i>
  <span>Please correct the errors below.</span>
</div>

<!-- Warning message -->
<div class="liverpool-feedback-warning">
  <i class="fa fa-exclamation-triangle"></i>
  <span>Your progress is not saved.</span>
</div>

<!-- Info message -->
<div class="liverpool-feedback-info">
  <i class="fa fa-info-circle"></i>
  <span>This question has 3 attempts remaining.</span>
</div>
```

#### Form Controls

```html
<!-- Text input -->
<div class="liverpool-form-group">
  <label class="liverpool-label">Your Answer</label>
  <input type="text" class="liverpool-input" placeholder="Type here...">
  <span class="liverpool-helper-text">Enter your response in 50 words or less.</span>
</div>

<!-- Textarea -->
<textarea class="liverpool-textarea" placeholder="Enter detailed answer..."></textarea>

<!-- Select dropdown -->
<select class="liverpool-select">
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Form with error -->
<div class="liverpool-form-group">
  <label class="liverpool-label">Email</label>
  <input type="email" class="liverpool-input" value="invalid-email">
  <span class="liverpool-error-text">Please enter a valid email address.</span>
</div>
```

#### Badges

```html
<span class="liverpool-badge-primary">New</span>
<span class="liverpool-badge-secondary">CPD Hours: 2</span>
<span class="liverpool-badge-success">Complete</span>
<span class="liverpool-badge-error">Failed</span>
<span class="liverpool-badge-warning">Expiring Soon</span>
<span class="liverpool-badge-info">Info</span>
```

---

### Utility Classes

Quick styling classes for common patterns.

#### Spacing

```html
<!-- Margins -->
<div class="liverpool-mt-4">Margin top 16px</div>
<div class="liverpool-mb-5">Margin bottom 24px</div>
<div class="liverpool-ml-auto">Margin left auto (right-align)</div>

<!-- Padding -->
<div class="liverpool-p-6">Padding 32px all sides</div>
<div class="liverpool-pt-3 liverpool-pb-3">Padding top/bottom 12px</div>

<!-- Gap (for flexbox/grid) -->
<div class="liverpool-d-flex liverpool-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### Colors

```html
<!-- Text colors -->
<p class="liverpool-text-primary">Primary text (black)</p>
<p class="liverpool-text-secondary">Secondary text (charcoal)</p>
<p class="liverpool-text-muted">Muted text (grey)</p>
<p class="liverpool-text-blue">Liverpool Blue text</p>
<p class="liverpool-text-error">Error text (pink)</p>

<!-- Background colors -->
<div class="liverpool-bg-blue-light">Light blue background</div>
<div class="liverpool-bg-subtle">Subtle grey background</div>
<div class="liverpool-bg-success">Success background (teal)</div>
```

#### Flexbox

```html
<!-- Horizontal flex layout -->
<div class="liverpool-d-flex liverpool-justify-between liverpool-align-center liverpool-gap-4">
  <span>Left content</span>
  <button class="liverpool-btn-primary">Right button</button>
</div>

<!-- Vertical flex layout -->
<div class="liverpool-d-flex liverpool-flex-column liverpool-gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Typography

```html
<!-- Font sizes -->
<p class="liverpool-text-xs">Extra small text (12px)</p>
<p class="liverpool-text-sm">Small text (14px)</p>
<p class="liverpool-text-base">Base text (16px)</p>
<p class="liverpool-text-lg">Large text (20px)</p>

<!-- Font weights -->
<p class="liverpool-font-semibold">Semibold text</p>
<p class="liverpool-font-bold">Bold text</p>

<!-- Text alignment -->
<p class="liverpool-text-center">Centered text</p>
<p class="liverpool-text-right">Right-aligned text</p>
```

#### Borders

```html
<!-- Border utilities -->
<div class="liverpool-border liverpool-rounded">Bordered with 16px radius</div>
<div class="liverpool-border-t liverpool-border-blue">Top border only (blue)</div>
<div class="liverpool-rounded-pill">Pill-shaped (50px radius)</div>
```

---

## Complete Example

Here's a complete student view component using the library:

```html
<div class="my-xblock-student-view">
  <!-- Header -->
  <div class="liverpool-d-flex liverpool-justify-between liverpool-align-center liverpool-mb-5">
    <h2 class="liverpool-h2 liverpool-mb-0">Multiple Choice Question</h2>
    <span class="liverpool-badge-info">2 CPD Hours</span>
  </div>

  <!-- Question card -->
  <div class="liverpool-card liverpool-mb-5">
    <p class="liverpool-text-body-lg liverpool-mb-4">
      What is the primary cause of dental caries?
    </p>

    <!-- Options -->
    <div class="liverpool-d-flex liverpool-flex-column liverpool-gap-3">
      <label class="liverpool-d-flex liverpool-align-center liverpool-gap-3 liverpool-cursor-pointer">
        <input type="radio" name="answer" value="a">
        <span>Bacterial plaque accumulation</span>
      </label>
      <label class="liverpool-d-flex liverpool-align-center liverpool-gap-3 liverpool-cursor-pointer">
        <input type="radio" name="answer" value="b">
        <span>Excessive fluoride exposure</span>
      </label>
      <label class="liverpool-d-flex liverpool-align-center liverpool-gap-3 liverpool-cursor-pointer">
        <input type="radio" name="answer" value="c">
        <span>Vitamin D deficiency</span>
      </label>
    </div>

    <!-- Actions -->
    <div class="liverpool-d-flex liverpool-gap-3 liverpool-mt-5">
      <button class="liverpool-btn-primary">Submit Answer</button>
      <button class="liverpool-btn-outline">Show Answer</button>
    </div>
  </div>

  <!-- Feedback (shown after submission) -->
  <div class="liverpool-feedback-success">
    <i class="fa fa-check-circle"></i>
    <span><strong>Correct!</strong> Bacterial plaque accumulation is the primary cause of dental caries.</span>
  </div>
</div>
```

With corresponding SCSS:

```scss
@import '../../../../../shared/student-ui/styles/liverpool-student-tokens';
@import '../../../../../shared/student-ui/styles/liverpool-student-components';
@import '../../../../../shared/student-ui/styles/liverpool-student-utilities';

.my-xblock-student-view {
  font-family: $liverpool-font-primary;
  padding: $liverpool-space-6;
  max-width: 800px;
  margin: 0 auto;

  // Custom XBlock-specific styles
  input[type="radio"] {
    width: 20px;
    height: 20px;
    accent-color: $liverpool-blue;
    cursor: pointer;
  }

  label:hover {
    background-color: $liverpool-blue-100;
    padding: $liverpool-space-3;
    margin: calc(-1 * #{$liverpool-space-3});
    border-radius: $liverpool-radius-sm;
  }
}
```

---

## Best Practices

### 1. Token Usage

✅ **DO:**
```scss
.my-element {
  color: $liverpool-text-primary;
  padding: $liverpool-space-4;
  border-radius: $liverpool-radius-base;
}
```

❌ **DON'T:**
```scss
.my-element {
  color: #000000;          // Use $liverpool-text-primary
  padding: 16px;           // Use $liverpool-space-4
  border-radius: 16px;     // Use $liverpool-radius-base
}
```

### 2. Component Classes

✅ **DO:** Use component classes for common patterns
```html
<button class="liverpool-btn-primary">Submit</button>
<div class="liverpool-card">...</div>
```

❌ **DON'T:** Recreate component styles manually
```html
<button style="background: #212b58; border-radius: 50px; padding: 16px 40px;">Submit</button>
```

### 3. Utility Classes

✅ **DO:** Use utilities for one-off adjustments
```html
<div class="liverpool-card liverpool-mt-5 liverpool-mb-3">...</div>
```

❌ **DON'T:** Overuse utilities for complex layouts (create custom components instead)

### 4. Accessibility

- Always use semantic HTML (`<button>`, `<label>`, headings, etc.)
- Ensure interactive elements have visible focus states (built-in to components)
- Use semantic colors consistently (success = teal, error = pink, etc.)
- Test with keyboard navigation and screen readers

### 5. Consistency

- Use Liverpool colors exclusively (don't introduce custom colors)
- Use spacing tokens in 4px increments
- Use Poppins font family everywhere
- Follow Liverpool button styles (pill-shaped, scale animations)

---

## Token Reference

### Quick Color Reference

| Use Case | Token | Hex |
|----------|-------|-----|
| Primary button | `$liverpool-blue` | #212b58 |
| Button hover | `$liverpool-blue-dark` | #15376D |
| Secondary button | `$liverpool-teal` | #00A689 |
| Success | `$liverpool-color-success` | #00A689 |
| Error | `$liverpool-color-error` | #EF426F |
| Warning | `$liverpool-color-warning` | #FFD100 |
| Body text | `$liverpool-text-primary` | #000000 |
| Secondary text | `$liverpool-text-secondary` | #333F48 |
| Borders | `$liverpool-border-default` | #DBDBD3 |

### Quick Spacing Reference

| Token | Value | Common Use |
|-------|-------|------------|
| `$liverpool-space-2` | 8px | Small gaps |
| `$liverpool-space-3` | 12px | Compact padding |
| `$liverpool-space-4` | 16px | Standard gap (base unit) |
| `$liverpool-space-5` | 24px | Comfortable spacing |
| `$liverpool-space-6` | 32px | Card padding |
| `$liverpool-space-7` | 40px | Button horizontal padding |

---

## Migration Guide

### Migrating Existing XBlocks

If you have an existing XBlock with custom styles:

1. **Import the library:**
   ```scss
   @import '../../../../../shared/student-ui/styles/liverpool-student-tokens';
   @import '../../../../../shared/student-ui/styles/liverpool-student-components';
   @import '../../../../../shared/student-ui/styles/liverpool-student-utilities';
   ```

2. **Replace custom colors with tokens:**
   - Find: `#212b58` → Replace: `$liverpool-blue`
   - Find: `#00A689` → Replace: `$liverpool-teal`
   - Find: `#EF426F` → Replace: `$liverpool-pink`

3. **Replace custom spacing with tokens:**
   - Find: `16px` → Replace: `$liverpool-space-4`
   - Find: `24px` → Replace: `$liverpool-space-5`
   - Find: `32px` → Replace: `$liverpool-space-6`

4. **Use button components:**
   ```html
   <!-- Before -->
   <button class="custom-primary-btn">Submit</button>

   <!-- After -->
   <button class="liverpool-btn-primary">Submit</button>
   ```

5. **Test thoroughly** - Ensure styling matches Liverpool design language

---

## Support & Documentation

- **Design Language:** `/docs/design-language/LIVERPOOL_DESIGN_LANGUAGE.md`
- **Authoring MFE Reference:** `/test-theme/liverpool-authoring.css`
- **Token Source:** All tokens derived from official Liverpool brand guidelines

---

## Version History

### 1.0.0 (2025-11-04)
- Initial release
- Design tokens (typography, colors, spacing, shadows, transitions)
- Component classes (buttons, cards, feedback, forms, badges, typography)
- Utility classes (spacing, colors, flexbox, borders, typography)
- Complete documentation with examples

---

**END OF DOCUMENTATION**
