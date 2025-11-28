# Liverpool Dental Legacy Theme - Modal Styling Investigation

**Investigation Date:** 2025-11-28
**Directory:** `/Users/brainjam/tutor-liverpool-dental-legacy`

## Overview

The Liverpool Dental Legacy theme is a Tutor plugin that provides custom branding and styling for the OpenEdX LMS and CMS/Studio interfaces. This document analyzes the theme's structure and identifies where to add modal sizing customizations.

## 1. Theme Structure & Application

### Theme Type
**Tutor Plugin** - Integrates with Tutor's build system

### Location
`/Users/brainjam/tutor-liverpool-dental-legacy`

### Application Method

#### Plugin Registration
**File:** `tutorliverpooldentallegacy/plugin.py`

**How it works:**
1. Plugin hooks into Tutor's build process
2. SCSS files compiled during Docker image build
3. Theme registered in OpenEdX database via initialization tasks
4. Applied to both LMS and CMS/Studio

**Configuration:**
```python
# ENV_PATCHES to set default theme
tutor_hooks.Filters.ENV_PATCHES.add_item(
    ("openedx-lms-common-settings",
     'DEFAULT_SITE_THEME = "liverpool-dental-legacy"')
)
```

### Directory Structure

```
tutor-liverpool-dental-legacy/
├── tutorliverpooldentallegacy/
│   ├── plugin.py                    # Main plugin config
│   ├── templates/
│   │   └── liverpool-dental-legacy/
│   │       ├── lms/                 # LMS-specific styles
│   │       ├── cms/                 # CMS/Studio styles ← IMPORTANT
│   │       └── shared/              # Shared design tokens
│   └── tasks/
│       └── init.sh                  # Database initialization
```

## 2. CMS/Studio Theme Files

### Primary CMS Styling Files

#### 1. Main CMS Stylesheet
**File:** `templates/liverpool-dental-legacy/cms/static/sass/cms-main.scss`

**Content (10 lines):**
```scss
// Minimal entry point
@import 'partials/cms/theme/variables';
@import 'partials/cms/theme/extras';
```

#### 2. CMS Theme Variables
**File:** `templates/liverpool-dental-legacy/cms/static/sass/partials/cms/theme/_variables.scss`

**Key Settings:**
```scss
// Import custom font
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

// Primary color
$liverpool-primary-color: #212b58;  // Liverpool Blue
```

#### 3. CMS Extras (Main Theming)
**File:** `templates/liverpool-dental-legacy/cms/static/sass/partials/cms/theme/_extras.scss`

**Purpose:**
- Imports all Liverpool design tokens
- Provides structure for CMS-specific overrides
- Currently minimal (just imports)

```scss
// Import shared design system
@import '../../../../shared/liverpool-core-tokens';
@import '../../../../shared/liverpool-component-tokens';
@import '../../../../shared/liverpool-layout-tokens';

// CMS-specific overrides would go here
```

## 3. Modal & XBlock Editor Styling

### ⭐ Most Important File

**File:** `templates/liverpool-dental-legacy/cms/static/sass/course-unit-mfe-iframe-bundle.scss`

**Size:** 1,751 lines
**Purpose:** Comprehensive override for ALL XBlock modal editor styling

### What This File Contains

#### Modal-Related Selectors

```scss
// Modal window context
[class*="view-"] .wrapper .modal-window.modal-editor { ... }

// Modal wrapper
[class*="view-"] .wrapper.wrapper-modal-window .modal-window { ... }

// Modal actions (buttons)
[class*="view-"] .wrapper.wrapper-modal-window .modal-window .modal-actions { ... }

// XBlock actions in modals
[class*="view-"] .wrapper .modal-window.modal-editor .xblock-actions { ... }
```

#### Current Styling Coverage

The file includes extensive styling for:
- ✅ Buttons (primary/cancel/action buttons)
- ✅ Form fields (inputs, textareas, selects)
- ✅ Labels (font size, weight, color)
- ✅ Validation messages
- ✅ Checkboxes and radio buttons
- ✅ Problem block displays
- ✅ XBlock cards
- ✅ Typography (using Poppins font)
- ✅ Colors (Liverpool branding)

### What's Missing

❌ **NO modal sizing rules currently defined!**

The theme styles everything *inside* the modal but doesn't control the modal *dimensions*.

## 4. Configuration Files

### Theme Plugin Configuration

**File:** `tutorliverpooldentallegacy/plugin.py`

**Key Hooks:**
```python
# Add theme directory to COMPREHENSIVE_THEME_DIRS
tutor_hooks.Filters.ENV_PATCHES.add_item(
    ("openedx-lms-common-settings",
     'COMPREHENSIVE_THEME_DIRS.append("/openedx/themes")')
)

# Set as default theme
tutor_hooks.Filters.ENV_PATCHES.add_item(
    ("openedx-lms-common-settings",
     'DEFAULT_SITE_THEME = "liverpool-dental-legacy"')
)

# Enable comprehensive theming
tutor_hooks.Filters.ENV_PATCHES.add_item(
    ("openedx-lms-common-settings",
     'ENABLE_COMPREHENSIVE_THEMING = True')
)
```

### Build Process

**File:** `tasks/init.sh`

**What it does:**
1. Registers theme in database
2. Compiles SCSS to CSS
3. Collects static assets
4. Links theme to site domain

**No modal-specific configuration** found in build process.

## 5. Shared Design Token System

### Token Directory
`templates/liverpool-dental-legacy/shared/`

### Three Token Files

#### 1. Core Tokens (233 lines)
**File:** `shared/liverpool-core-tokens.scss`

**Defines:**
- **Typography:** Font families, sizes, weights, line heights
  ```scss
  $liverpool-font-family: 'Poppins', sans-serif;
  $liverpool-font-size-base: 1.6rem;
  $liverpool-font-weight-regular: 400;
  ```

- **Colors:** Primary palette, semantic colors, text colors
  ```scss
  $liverpool-color-primary: #212b58;
  $liverpool-color-navy: #1e2a4a;
  $liverpool-color-teal: #00a9a3;
  ```

- **Spacing:** 4px-based scale
  ```scss
  $liverpool-spacing-0: 0;
  $liverpool-spacing-1: 0.4rem;  // 4px
  $liverpool-spacing-2: 0.8rem;  // 8px
  // ... up to $liverpool-spacing-12: 4.8rem (48px)
  ```

- **Border Radius:**
  ```scss
  $liverpool-border-radius-xs: 0.2rem;
  $liverpool-border-radius-sm: 0.4rem;
  $liverpool-border-radius-md: 0.6rem;
  $liverpool-border-radius-base: 0.8rem;
  $liverpool-border-radius-lg: 1.2rem;
  $liverpool-border-radius-xl: 1.6rem;
  ```

- **Shadows:** xs/sm/base/md/lg/xl + contextual shadows
- **Gradients:** Primary, navy, teal
- **Transitions:** Durations and easing functions

#### 2. Component Tokens (404 lines)
**File:** `shared/liverpool-component-tokens.scss`

**Defines:**
- Button tokens (primary, secondary, outline, ghost)
- Card tokens (backgrounds, borders, shadows)
- Form field tokens (inputs, labels, validation states)
- Feedback message tokens (success, error, warning, info)
- Navigation tokens
- Dashboard tokens
- Video player tokens
- Forum tokens

**Examples:**
```scss
// Button tokens
$liverpool-button-primary-bg: $liverpool-color-primary;
$liverpool-button-primary-text: $liverpool-color-white;
$liverpool-button-primary-hover-bg: darken($liverpool-color-primary, 10%);

// Card tokens
$liverpool-card-bg: $liverpool-color-white;
$liverpool-card-border: $liverpool-color-gray-200;
$liverpool-card-shadow: $liverpool-shadow-sm;
```

#### 3. Layout Tokens (172 lines)
**File:** `shared/liverpool-layout-tokens.scss`

**Defines:**
- **Breakpoints:**
  ```scss
  $liverpool-breakpoint-xs: 0;
  $liverpool-breakpoint-sm: 576px;
  $liverpool-breakpoint-md: 768px;
  $liverpool-breakpoint-lg: 992px;
  $liverpool-breakpoint-xl: 1200px;
  $liverpool-breakpoint-xxl: 1400px;
  ```

- **Container Max Widths:**
  ```scss
  $liverpool-container-max-width-sm: 540px;
  $liverpool-container-max-width-md: 720px;
  $liverpool-container-max-width-lg: 960px;
  $liverpool-container-max-width-xl: 1140px;
  $liverpool-container-max-width-xxl: 1320px;
  ```

- **Content Max Widths:** ← IMPORTANT FOR MODALS
  ```scss
  $liverpool-content-max-width-admin: 1400px !default;
  $liverpool-content-max-width-dashboard: 1320px !default;
  $liverpool-content-max-width-course: 1140px !default;
  ```

- **Z-Index Layers:** ← IMPORTANT FOR MODALS
  ```scss
  $liverpool-z-index-dropdown: 1000 !default;
  $liverpool-z-index-sticky: 1020 !default;
  $liverpool-z-index-fixed: 1030 !default;
  $liverpool-z-index-modal-backdrop: 1040 !default;
  $liverpool-z-index-modal: 1050 !default;
  $liverpool-z-index-popover: 1060 !default;
  $liverpool-z-index-tooltip: 1070 !default;
  ```

- **Sidebar Widths:**
  ```scss
  $liverpool-sidebar-width-collapsed: 64px;
  $liverpool-sidebar-width-expanded: 280px;
  ```

- **Header/Footer Heights:**
  ```scss
  $liverpool-header-height: 64px;
  $liverpool-footer-height: 80px;
  ```

## 6. Modal-Relevant Tokens Available

### Already Defined (Ready to Use!)

From `liverpool-layout-tokens.scss`:

```scss
// For modal z-index
$liverpool-z-index-modal-backdrop: 1040 !default;
$liverpool-z-index-modal: 1050 !default;

// For modal max-width
$liverpool-content-max-width-admin: 1400px !default;
$liverpool-content-max-width-dashboard: 1320px !default;
$liverpool-content-max-width-course: 1140px !default;

// For spacing
$liverpool-spacing-8: 3.2rem;  // 32px - good for padding
$liverpool-spacing-10: 4rem;   // 40px
```

From `liverpool-component-tokens.scss`:

```scss
// Card shadows (could apply to modals)
$liverpool-card-shadow: $liverpool-shadow-sm;
$liverpool-card-shadow-hover: $liverpool-shadow-md;

// Border radius
$liverpool-card-border-radius: $liverpool-border-radius-lg;
```

**These exist but are NOT currently applied to modals!**

## 7. How to Add Modal Size Control

### Recommended Location

**File to edit:** `templates/liverpool-dental-legacy/cms/static/sass/course-unit-mfe-iframe-bundle.scss`

**Add at end (after line 1751):**

```scss
// ================================================================
// CUSTOM XBLOCK MODAL EDITOR SIZE CONTROL
// ================================================================
// Purpose: Override default OpenEdX modal sizing (95% width, 435px height)
// to provide more space for complex custom XBlock studio editors
// ================================================================

// Increase modal width and remove height restrictions
[class*="view-"] .wrapper .modal-window.modal-editor {
  // Use Liverpool admin content width token
  max-width: $liverpool-content-max-width-admin !important; // 1400px
  width: 90vw !important;

  // Remove fixed 435px height constraint
  .modal-content {
    height: auto !important;
    min-height: 600px !important;
    max-height: 85vh !important;
    overflow-y: auto !important;
  }

  // Ensure modal body can expand
  .modal-body {
    height: auto !important;
    min-height: 500px !important;
  }

  // Apply Liverpool card shadow for consistency
  box-shadow: $liverpool-shadow-lg !important;
}

// Optional: Specific sizing per XBlock type
// Target via .modal-type-{xblock-category} class

// Timeline presentation needs more vertical space
.modal-type-timeline-presentation {
  .modal-content {
    min-height: 700px !important;
  }
}

// Image hotspot and annotation also benefit from more space
.modal-type-image-hotspot,
.modal-type-image-annotation,
.modal-type-image-commentary {
  .modal-content {
    min-height: 650px !important;
  }
}

// Responsive adjustments
@media (max-width: $liverpool-breakpoint-lg) {
  [class*="view-"] .wrapper .modal-window.modal-editor {
    width: 95vw !important;

    .modal-content {
      max-height: 80vh !important;
    }
  }
}

@media (max-width: $liverpool-breakpoint-md) {
  [class*="view-"] .wrapper .modal-window.modal-editor {
    width: 98vw !important;

    .modal-content {
      min-height: 400px !important;
      max-height: 75vh !important;
    }
  }
}
```

### Alternative: Add to CMS Extras

**File to edit:** `templates/liverpool-dental-legacy/cms/static/sass/partials/cms/theme/_extras.scss`

Add the same modal sizing rules here if you want to keep all CMS overrides in one conceptual location.

**Pros:**
- Cleaner separation of concerns
- Easier to find CMS-specific overrides

**Cons:**
- `course-unit-mfe-iframe-bundle.scss` already has 1,751 lines of modal styling
- Keeping all modal rules together may be more maintainable

## 8. Deployment Process

### After Editing SCSS Files

```bash
# Navigate to theme directory
cd ~/tutor-liverpool-dental-legacy

# Rebuild MFE image (includes CMS assets)
tutor images build mfe

# Restart CMS to apply changes
tutor local restart cms

# Optional: Force static asset collection
tutor local run cms ./manage.py cms collectstatic --noinput

# Optional: Clear browser cache or hard refresh (Cmd+Shift+R)
```

### Verify Changes

1. Open Studio/CMS
2. Navigate to a course unit
3. Click "Edit" on a custom XBlock (e.g., timeline-presentation)
4. Verify modal is larger:
   - Width should be ~90% of viewport (max 1400px)
   - Height should be auto-sizing (min 600px)
   - Should have Liverpool shadow styling

## 9. Summary

### Key Findings

1. **Theme is comprehensive** - 1,751 lines of existing modal/editor styling
2. **No modal sizing currently applied** - modals use OpenEdX defaults
3. **Design tokens ready** - width/z-index/spacing tokens available
4. **Single file controls everything** - `course-unit-mfe-iframe-bundle.scss`
5. **Token system is robust** - consistent design language

### Recommended Changes

| Aspect | Current | Recommended |
|--------|---------|-------------|
| **Width** | 95% | 90vw (max 1400px via `$liverpool-content-max-width-admin`) |
| **Height** | 435px fixed | Auto (min 600px, max 85vh) |
| **Shadow** | Default | `$liverpool-shadow-lg` for consistency |
| **Responsive** | Fixed | Media queries for tablet/mobile |

### Benefits of Theme-Based Approach

✅ **Consistent across all XBlocks** - One change affects all custom editors
✅ **Uses design tokens** - Maintains Liverpool design system
✅ **Centralized** - Easy to find and update
✅ **Responsive** - Can add media queries
✅ **Maintainable** - Lives in version control with theme

### Next Steps

1. Edit `course-unit-mfe-iframe-bundle.scss` with modal sizing rules
2. Rebuild MFE image
3. Restart CMS
4. Test with timeline-presentation, image-hotspot, image-annotation
5. Adjust min-height values if needed
6. Document final values in theme README

## Related Files

**Theme Structure:**
- `tutorliverpooldentallegacy/plugin.py` - Plugin configuration
- `tasks/init.sh` - Initialization tasks

**CMS Styling:**
- `cms/static/sass/cms-main.scss` - Entry point
- `cms/static/sass/partials/cms/theme/_variables.scss` - CMS variables
- `cms/static/sass/partials/cms/theme/_extras.scss` - CMS overrides
- `cms/static/sass/course-unit-mfe-iframe-bundle.scss` - **Modal styling** ⭐

**Design Tokens:**
- `shared/liverpool-core-tokens.scss` - Core design system
- `shared/liverpool-component-tokens.scss` - Component styling
- `shared/liverpool-layout-tokens.scss` - Layout and spacing

## Appendix: Available Liverpool Tokens for Modals

```scss
// Width constraints
$liverpool-content-max-width-admin: 1400px;
$liverpool-content-max-width-dashboard: 1320px;
$liverpool-content-max-width-course: 1140px;

// Z-index
$liverpool-z-index-modal-backdrop: 1040;
$liverpool-z-index-modal: 1050;

// Spacing
$liverpool-spacing-6: 2.4rem;   // 24px
$liverpool-spacing-8: 3.2rem;   // 32px
$liverpool-spacing-10: 4rem;    // 40px

// Shadows
$liverpool-shadow-sm
$liverpool-shadow-base
$liverpool-shadow-md
$liverpool-shadow-lg
$liverpool-shadow-xl

// Border radius
$liverpool-border-radius-base: 0.8rem;
$liverpool-border-radius-lg: 1.2rem;

// Breakpoints
$liverpool-breakpoint-sm: 576px;
$liverpool-breakpoint-md: 768px;
$liverpool-breakpoint-lg: 992px;
$liverpool-breakpoint-xl: 1200px;
```
