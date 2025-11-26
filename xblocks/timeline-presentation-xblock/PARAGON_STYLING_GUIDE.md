# Paragon Styling Guide for XBlock Development

This guide covers how to style React XBlocks using Paragon, OpenEdX's official design system.

**Paragon Version**: 22.5.1 (must match OpenEdX platform version)
**Official Docs**: https://paragon-openedx.netlify.app/

---

## Table of Contents

1. [Import Patterns](#import-patterns)
2. [CSS Utility Classes](#css-utility-classes)
3. [Component Styling](#component-styling)
4. [CSS Variables & Design Tokens](#css-variables--design-tokens)
5. [Custom Styling Best Practices](#custom-styling-best-practices)
6. [XBlock-Specific Considerations](#xblock-specific-considerations)
7. [Advanced Theming](#advanced-theming)
8. [Reference Documentation](#reference-documentation)

---

## Import Patterns

### TypeScript/JavaScript Imports

**Always use deep imports** from `/dist/` for optimal tree-shaking:

```typescript
// ✅ CORRECT - Deep imports
import Card from '@openedx/paragon/dist/Card';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';

// ✅ CORRECT - Icons from /icons/es5/
import ChevronLeft from '@openedx/paragon/icons/es5/ChevronLeft';
import Check from '@openedx/paragon/icons/es5/Check';

// ❌ WRONG - Barrel imports don't work
import { Card, Button } from '@openedx/paragon';
```

### SCSS Imports

**Always use `~` prefix** for node_modules resolution:

```scss
// ✅ CORRECT - Core Paragon styles (required)
@import '~@openedx/paragon/scss/core/core';

// ✅ CORRECT - Component styles from /src/
@import '~@openedx/paragon/src/Card/index.scss';
@import '~@openedx/paragon/src/Button/index.scss';
@import '~@openedx/paragon/src/Form/index.scss';

// ❌ WRONG - Without tilde
@import '@openedx/paragon/scss/core/core';

// ❌ WRONG - From /dist/ for SCSS
@import '~@openedx/paragon/dist/Button';
```

**Why the `~` prefix?**
The tilde tells Sass to resolve from `node_modules`. This requires Vite config (already configured in template):

```typescript
resolve: {
  alias: [
    {
      find: /^~(.*)$/,
      replacement: '$1',
    },
  ],
}
```

### Import Only What You Need

For optimal bundle sizes, import only the components you use:

```scss
// ✅ MINIMAL - Student view with just Card
@import '~@openedx/paragon/scss/core/core';
@import '~@openedx/paragon/src/Card/index.scss';

// ✅ TYPICAL - Studio view with Form components
@import '~@openedx/paragon/scss/core/core';
@import '~@openedx/paragon/src/Button/index.scss';
@import '~@openedx/paragon/src/Form/index.scss';
@import '~@openedx/paragon/src/Alert/index.scss';

// ❌ AVOID - Full bundle (500KB+)
@import '~@openedx/paragon/dist/paragon.css';
```

---

## CSS Utility Classes

Paragon includes Bootstrap 4.6 utility classes plus OpenEdX-specific extensions.

**Full Reference**: https://paragon-openedx.netlify.app/foundations/css-utilities/

### Spacing Utilities

```html
<!-- Margin: .m{direction}-{level} -->
<div class="m-3">All sides margin</div>
<div class="mt-3 mb-4">Top + bottom margin</div>
<div class="mx-auto">Horizontal auto margin (centering)</div>

<!-- Padding: .p{direction}-{level} -->
<div class="p-3">All sides padding</div>
<div class="px-4 py-2">Horizontal + vertical padding</div>

<!-- Negative margins -->
<div class="mt-n2">Negative top margin</div>
```

**Levels**: 0, 1, 2, 3, 4, 5 (map to spacing scale)
**Directions**: t (top), r (right), b (bottom), l (left), x (horizontal), y (vertical)

### Layout & Flexbox Utilities

```html
<!-- Display -->
<div class="d-flex">Flexbox container</div>
<div class="d-none">Hidden</div>
<div class="d-block">Block display</div>

<!-- Flex direction -->
<div class="d-flex flex-column">Vertical flex</div>
<div class="d-flex flex-row">Horizontal flex</div>

<!-- Flex alignment -->
<div class="d-flex justify-content-center">Centered</div>
<div class="d-flex justify-content-between">Space between</div>
<div class="d-flex align-items-center">Vertically centered</div>
<div class="d-flex align-items-end">Bottom aligned</div>

<!-- Flex wrapping -->
<div class="d-flex flex-wrap">Allow wrapping</div>
```

### Responsive Utilities

Breakpoints: `sm` (≥576px), `md` (≥768px), `lg` (≥992px), `xl` (≥1200px)

```html
<!-- Show/hide at different breakpoints -->
<div class="d-none d-md-block">Hidden on mobile, visible on tablet+</div>
<div class="d-block d-md-none">Visible on mobile, hidden on tablet+</div>

<!-- Responsive spacing -->
<div class="p-2 p-md-3 p-lg-4">Responsive padding</div>

<!-- Responsive flex direction -->
<div class="d-flex flex-column flex-md-row">
  Stacked on mobile, horizontal on tablet+
</div>
```

### Color Utilities

```html
<!-- Text colors -->
<p class="text-primary-500">Primary text</p>
<p class="text-gray-500">Gray text</p>
<p class="text-success-500">Success text</p>
<p class="text-danger-500">Error text</p>

<!-- Background colors -->
<div class="bg-light">Light background</div>
<div class="bg-primary">Primary background</div>
```

**Color levels**: 100 (lightest) to 900 (darkest)

### Typography Utilities

```html
<!-- Font sizes -->
<p class="font-size-sm">Small text</p>
<p class="font-size-md">Medium text</p>
<p class="font-size-lg">Large text</p>

<!-- Font weight -->
<p class="font-weight-light">Light (300)</p>
<p class="font-weight-normal">Normal (400)</p>
<p class="font-weight-bold">Bold (700)</p>

<!-- Text alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>
```

---

## Component Styling

### Button Component

**Documentation**: https://paragon-openedx.netlify.app/components/button/

```typescript
import Button from '@openedx/paragon/dist/Button';
import ChevronLeft from '@openedx/paragon/icons/es5/ChevronLeft';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="brand">Brand (OpenEdX)</Button>
<Button variant="tertiary">Tertiary (OpenEdX)</Button>

// Outline variants
<Button variant="outline-primary">Outline Primary</Button>
<Button variant="outline-brand">Outline Brand</Button>

// Inverse variants (for dark backgrounds)
<Button variant="inverse-primary">Inverse Primary</Button>
<Button variant="inverse-outline-primary">Inverse Outline</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>

// With icons
<Button iconBefore={ChevronLeft}>Previous</Button>
<Button iconAfter={ChevronRight}>Next</Button>

// Block button (full width)
<Button block>Full Width</Button>
```

**Important**: Pass icon component references directly to `iconBefore`/`iconAfter`, not rendered elements:

```typescript
// ✅ CORRECT
<Button iconBefore={ChevronLeft}>Previous</Button>

// ❌ WRONG - Creates object, causes React error
<Button iconBefore={<Icon src={ChevronLeft} />}>Previous</Button>
```

### Card Component

**Documentation**: https://paragon-openedx.netlify.app/components/card/

```typescript
import Card from '@openedx/paragon/dist/Card';

<Card>
  <Card.Header title="Card Title" />
  <Card.Section>
    <p>Card content goes here</p>
  </Card.Section>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// Variants
<Card variant="light">Light card</Card>
<Card variant="dark">Dark card</Card>
<Card variant="muted">Muted card</Card>

// Clickable card (adds hover styles)
<Card isClickable onClick={handleClick}>
  Clickable content
</Card>
```

### Form Components

**Documentation**: https://paragon-openedx.netlify.app/components/form/

```typescript
import Form from '@openedx/paragon/dist/Form';

<Form>
  <Form.Group>
    <Form.Label>Display Name</Form.Label>
    <Form.Control
      type="text"
      value={displayName}
      onChange={(e) => setDisplayName(e.target.value)}
      placeholder="Enter name"
    />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </Form.Group>

  <Form.Group>
    <Form.Label>Description</Form.Label>
    <Form.Control
      as="textarea"
      rows={4}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </Form.Group>

  <Form.Group>
    <Form.Check
      type="checkbox"
      label="Enable this feature"
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
    />
  </Form.Group>
</Form>

// Validation states
<Form.Control isValid />
<Form.Control isInvalid />

// Sizes
<Form.Control size="sm" />
<Form.Control size="lg" />
```

### Alert Component

**Documentation**: https://paragon-openedx.netlify.app/components/alert/

```typescript
import Alert from '@openedx/paragon/dist/Alert';

<Alert variant="success">Changes saved successfully!</Alert>
<Alert variant="danger">An error occurred.</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="info">Information message</Alert>

// Dismissible
<Alert
  variant="success"
  dismissible
  onClose={() => setMessage(null)}
>
  Dismissible alert
</Alert>

// With actions
<Alert
  variant="info"
  actions={[
    <Button variant="primary">Confirm</Button>,
    <Button variant="tertiary">Cancel</Button>
  ]}
>
  Alert with action buttons
</Alert>
```

### Icon Component

**Documentation**: https://paragon-openedx.netlify.app/foundations/icons/

```typescript
import Icon from '@openedx/paragon/dist/Icon';
import Check from '@openedx/paragon/icons/es5/Check';
import Close from '@openedx/paragon/icons/es5/Close';

<Icon src={Check} />
<Icon src={Close} />

// With custom size/color
<Icon
  src={Check}
  style={{ width: '2rem', height: '2rem', color: 'green' }}
/>
```

**Available icons**: https://paragon-openedx.netlify.app/foundations/icons/

---

## CSS Variables & Design Tokens

Paragon uses CSS variables (design tokens) for theming and customization.

### Using CSS Variables

```scss
.custom-component {
  // Color tokens
  color: var(--pgn-color-text-primary);
  background: var(--pgn-color-bg-base);
  border-color: var(--pgn-color-border-base);

  // Spacing tokens
  padding: var(--pgn-spacing-3);
  margin: var(--pgn-spacing-2);

  // Typography tokens
  font-family: var(--pgn-font-family-base);
  font-size: var(--pgn-font-size-base);
  line-height: var(--pgn-line-height-base);

  // Elevation (shadows)
  box-shadow: var(--pgn-elevation-level-2);
}
```

### Common Design Tokens

**Colors:**
- `--pgn-color-text-primary` - Primary text color
- `--pgn-color-bg-base` - Base background color
- `--pgn-color-brand-500` - Brand color
- `--pgn-color-primary-500` - Primary color
- `--pgn-color-success-500` - Success color
- `--pgn-color-danger-500` - Danger color

**Spacing:**
- `--pgn-spacing-1` through `--pgn-spacing-5` - Spacing scale

**Typography:**
- `--pgn-font-family-base` - Base font family
- `--pgn-font-size-base` - Base font size
- `--pgn-line-height-base` - Base line height

**Reference**: https://openedx.atlassian.net/wiki/spaces/BPL/pages/4551737345/Paragon+Design+Tokens+Cheat+Sheet

---

## Custom Styling Best Practices

### When to Use Utility Classes

✅ **Use utilities for:**
- Simple, one-off spacing adjustments
- Layout and flexbox patterns
- Responsive design
- Text alignment and colors
- Quick prototyping

```html
<!-- ✅ GOOD - Simple spacing/layout -->
<div class="d-flex justify-content-between align-items-center mb-3">
  <h2 class="mb-0">Title</h2>
  <Button>Action</Button>
</div>
```

### When to Use Custom CSS

✅ **Use custom CSS for:**
- Complex component styling
- Multi-property interactions
- Reusable patterns
- Hover/focus states affecting children
- XBlock-specific branding

```scss
// ✅ GOOD - Complex custom styling
.flashcards-student-view {
  .card-container {
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--pgn-elevation-level-3);

      .card-actions {
        opacity: 1;
      }
    }
  }

  .card-actions {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
}
```

### Anti-Patterns to Avoid

❌ **Don't:**
- Chain too many utility classes (use custom CSS instead)
- Import full `paragon.css` (use minimal imports)
- Use global styles without namespacing
- Override Paragon component internals (use props/variants)

```html
<!-- ❌ BAD - Too many utilities -->
<div class="d-flex flex-column justify-content-center align-items-start p-3 mb-4 mt-2 mx-auto bg-light rounded">
  <!-- Use a custom class instead! -->
</div>

<!-- ✅ GOOD - Custom class with utilities for layout only -->
<div class="flashcard-container d-flex flex-column">
  <!-- ... -->
</div>
```

---

## XBlock-Specific Considerations

### 1. Always Namespace Your Styles

**Critical**: XBlocks share the page with edx-platform. Namespace prevents conflicts.

```scss
// ✅ CORRECT - Namespaced
.flashcards-student-view {
  .card {
    padding: 1rem;
  }

  .button-group {
    display: flex;
    gap: 0.5rem;
  }
}

// ❌ WRONG - Global styles conflict with platform
.card {
  padding: 1rem;  // Might break edx-platform!
}
```

### 2. Use Minimal Imports

Only import Paragon components you actually use:

```scss
// ✅ GOOD - Student view (minimal)
@import '~@openedx/paragon/scss/core/core';
@import '~@openedx/paragon/src/Card/index.scss';

.flashcards-student-view {
  // Your styles
}

// ✅ GOOD - Studio view (more components)
@import '~@openedx/paragon/scss/core/core';
@import '~@openedx/paragon/src/Button/index.scss';
@import '~@openedx/paragon/src/Form/index.scss';
@import '~@openedx/paragon/src/Alert/index.scss';

.flashcards-studio-view {
  // Your styles
}
```

### 3. Respect Theme Colors

Use Paragon's color tokens instead of hardcoded values:

```scss
// ✅ GOOD - Uses theme colors
.custom-element {
  color: var(--pgn-color-text-primary);
  background: var(--pgn-color-bg-base);
}

// ❌ AVOID - Hardcoded colors
.custom-element {
  color: #333;
  background: #fff;
}
```

### 4. Test in OpenEdX Context

Always test your XBlock inside OpenEdX (not just in isolation):

```bash
# Build and deploy
npm run build
./deploy-dev.sh

# Test in actual course unit
# Check for style conflicts with platform
```

---

## Advanced Theming

### The @edx/brand Package

OpenEdX supports custom branding via the `@edx/brand` NPM package aliasing.

**Documentation**: https://github.com/openedx/brand-openedx

#### Installing a Custom Brand

In your application's `package.json`:

```json
{
  "dependencies": {
    "@edx/brand": "npm:@my-org/my-brand-package"
  }
}
```

Or using Paragon CLI:

```bash
paragon install-theme @my-org/my-brand-package
```

#### Brand Package Structure

```
@my-org/my-brand-package/
├── paragon/
│   ├── fonts.scss          # Custom font definitions
│   ├── _variables.scss     # SCSS variable overrides
│   └── _overrides.scss     # Component-specific overrides
├── logo.png
├── logo.svg
└── favicon.ico
```

### Overriding Component Variants

You can override default button variants in components like Alert:

**Example**: Change Alert's primary button to brand variant

In `/tokens/src/themes/light/components/Alert.json`:

```json
{
  "color": {
    "$type": "color",
    "alert": {
      "actions": {
        "overrides": {
          "button": {
            "variants": {
              "primary": "brand"
            }
          }
        }
      }
    }
  }
}
```

This causes Alert components to use the `brand` variant instead of `primary` automatically.

When defining button variant overrides, the Paragon build-tokens CLI will output an `/overrides/component-button-variants.css` file to include in your brand package.

### Design Token Overrides

**Modern approach** (Paragon 23+): Override design tokens via JSON

```json
{
  "color": {
    "brand": {
      "500": {
        "$type": "color",
        "value": "#FF6B00"
      }
    }
  },
  "spacing": {
    "base": {
      "$type": "dimension",
      "value": "0.5rem"
    }
  }
}
```

Tokens get deep-merged with core Paragon tokens and compiled to CSS variables.

**Legacy approach** (Paragon 22.x): Override SCSS variables

```scss
// _variables.scss in brand package
$brand-primary: #FF6B00;
$spacing-unit: 0.5rem;
```

### Runtime Theming

CSS variables enable theme switching without rebuilding:

```typescript
// Switch to dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Switch to light theme
document.documentElement.setAttribute('data-theme', 'light');
```

This requires your brand package to provide both light and dark CSS variable sets.

**Note**: XBlocks inherit the platform's theme automatically. No action needed.

---

## Reference Documentation

### Official Paragon Resources

- **Main Documentation**: https://paragon-openedx.netlify.app/
- **GitHub Repository**: https://github.com/openedx/paragon
- **NPM Package**: https://www.npmjs.com/package/@openedx/paragon
- **Icons Library**: https://paragon-openedx.netlify.app/foundations/icons/

### Design System Documentation

- **Design Tokens Cheat Sheet**: https://openedx.atlassian.net/wiki/spaces/BPL/pages/4551737345
- **CSS Utilities**: https://paragon-openedx.netlify.app/foundations/css-utilities/
- **Typography**: https://paragon-openedx.netlify.app/foundations/typography/
- **Colors**: https://paragon-openedx.netlify.app/foundations/colors/

### Theming & Branding

- **Brand OpenEdX Package**: https://github.com/openedx/brand-openedx
- **OEP-48 Brand Customization**: https://open-edx-proposals.readthedocs.io/en/latest/architectural-decisions/oep-0048-brand-customization.html
- **Tutor Theming Guide**: https://docs.tutor.edly.io/tutorials/theming.html

### Component Documentation

Browse all components at: https://paragon-openedx.netlify.app/components/

**Commonly used in XBlocks:**
- [Button](https://paragon-openedx.netlify.app/components/button/)
- [Card](https://paragon-openedx.netlify.app/components/card/)
- [Form](https://paragon-openedx.netlify.app/components/form/)
- [Alert](https://paragon-openedx.netlify.app/components/alert/)
- [Modal](https://paragon-openedx.netlify.app/components/modal/)
- [Icon](https://paragon-openedx.netlify.app/foundations/icons/)

---

## Quick Reference Card

### Import Checklist

- [ ] TypeScript: `import Component from '@openedx/paragon/dist/Component'`
- [ ] Icons: `import IconName from '@openedx/paragon/icons/es5/IconName'`
- [ ] SCSS: `@import '~@openedx/paragon/scss/core/core'`
- [ ] Components: `@import '~@openedx/paragon/src/Component/index.scss'`

### Styling Checklist

- [ ] Namespace all custom styles (e.g., `.timeline-presentation-xblock-student-view {}`)
- [ ] Import only needed components
- [ ] Use utility classes for simple spacing/layout
- [ ] Use custom CSS for complex patterns
- [ ] Use CSS variables for colors (e.g., `var(--pgn-color-brand-500)`)
- [ ] Test in actual OpenEdX course (not just in isolation)

### Common Utilities

```scss
// Spacing
.m-3 .p-2 .mt-4 .mb-3 .mx-auto

// Layout
.d-flex .flex-column .justify-content-center .align-items-center

// Display
.d-none .d-block .d-md-flex

// Text
.text-center .font-weight-bold .text-primary-500
```

---

**Template Version**: 1.0.0
**Paragon Version**: 22.5.1
**Last Updated**: October 18, 2025
