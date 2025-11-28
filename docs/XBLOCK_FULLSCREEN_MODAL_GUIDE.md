# XBlock Studio Editor - Fullscreen Modal Design Guide

**Last Updated**: 2025-11-28
**Audience**: XBlock developers and AI agents working on studio editor views
**Platform**: Liverpool Dental Theme (OpenEdX Tutor deployment)

---

## Overview

The XBlock studio editor modal has been redesigned to provide a **near-fullscreen editing experience** (98vh × 98vw). This guide helps you design studio editor views that take full advantage of the available space.

---

## What Changed

### Before: Restrictive Modal
- **Small fixed dimensions** (~800px × 600px typical)
- Limited workspace for complex editors
- Required cramped layouts
- Poor UX for visual/interactive content

### After: Fullscreen Modal ✅
- **98vh height** (98% of viewport height)
- **98vw width** (98% of viewport width)
- Equal 1vh gaps on all sides
- Responsive to viewport size
- Professional, spacious editing environment

---

## Available Space

### Modal Structure

```
┌─────────────────────────────────────────────────┐
│ Modal Header (Fixed ~64px)                     │ ← XBlock title, close button
├─────────────────────────────────────────────────┤
│                                                 │
│ Modal Content (Flexible, Scrollable)           │ ← YOUR EDITOR GOES HERE
│                                                 │
│ - Expands to fill available vertical space     │
│ - Automatically scrolls when content exceeds   │
│ - Typically 500-800px height depending on      │
│   viewport                                      │
│                                                 │
├─────────────────────────────────────────────────┤
│ Modal Actions (Fixed ~59px)                    │ ← Save/Cancel buttons
└─────────────────────────────────────────────────┘
```

### Typical Dimensions (1920×1080 display)

```
Total Modal:     1882px × 1058px  (98vw × 98vh)
├─ Header:       1882px × 64px    (fixed)
├─ Content:      1882px × 935px   (flexible, scrollable)
└─ Actions:      1882px × 59px    (fixed)
```

### Viewport Responsiveness

| Viewport      | Modal Width | Modal Height | Content Area Height |
|---------------|-------------|--------------|---------------------|
| 1920×1080     | 1882px      | 1058px       | ~935px              |
| 1440×900      | 1411px      | 882px        | ~759px              |
| 1366×768      | 1339px      | 753px        | ~630px              |

---

## Design Philosophy

### Core Principle: **Use the Space Wisely**

You now have room for:
- ✅ Side-by-side layouts (editor + preview)
- ✅ Rich visual editors (canvas, timeline, diagrams)
- ✅ Complex forms with multiple sections
- ✅ Live previews alongside configuration
- ✅ Tabbed interfaces with substantial content
- ✅ Data tables and lists
- ✅ Multi-step workflows

### What to Avoid

- ❌ Cramped, narrow layouts from the old modal era
- ❌ Excessive scrolling when content could fit side-by-side
- ❌ Tiny preview windows when you have space for full-size
- ❌ Accordion/collapse patterns that hide content unnecessarily
- ❌ Breaking layouts that assume the old small modal size

---

## Layout Patterns

### Pattern 1: Two-Column Layout (Editor + Preview)

**Best for**: Visual XBlocks with real-time preview

```
┌──────────────────────────────────────────────────────────┐
│ [Modal Header]                                           │
├──────────────────────────┬───────────────────────────────┤
│                          │                               │
│  Configuration Panel     │   Live Preview                │
│  ┌────────────────────┐  │   ┌─────────────────────────┐ │
│  │ Settings Form      │  │   │                         │ │
│  │ - Field 1          │  │   │   [Visual Preview]      │ │
│  │ - Field 2          │  │   │                         │ │
│  │ - Field 3          │  │   │   Updates in real-time  │ │
│  │ ...                │  │   │   as you edit           │ │
│  │                    │  │   │                         │ │
│  │ [Advanced Options] │  │   │                         │ │
│  └────────────────────┘  │   └─────────────────────────┘ │
│                          │                               │
├──────────────────────────┴───────────────────────────────┤
│ [Save] [Cancel]                                          │
└──────────────────────────────────────────────────────────┘

Recommended split: 40% config / 60% preview (or 50/50)
```

### Pattern 2: Full-Width Visual Editor

**Best for**: Canvas-based editors, timeline editors, diagram builders

```
┌──────────────────────────────────────────────────────────┐
│ [Modal Header]                                           │
├──────────────────────────────────────────────────────────┤
│ [Toolbar: Drawing tools, controls, zoom]                 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                                                          │
│           LARGE CANVAS / EDITING AREA                    │
│                                                          │
│           - Use most of the 1882px width                 │
│           - Use most of the 935px height                 │
│                                                          │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ [Properties Panel: Selected element properties]         │
├──────────────────────────────────────────────────────────┤
│ [Save] [Cancel]                                          │
└──────────────────────────────────────────────────────────┘

Use flexbox to make canvas fill available space
```

### Pattern 3: Tabbed Interface with Rich Content

**Best for**: Multi-section configuration, complex settings

```
┌──────────────────────────────────────────────────────────┐
│ [Modal Header]                                           │
├──────────────────────────────────────────────────────────┤
│ [Content] [Styling] [Advanced] [Preview]                │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   Large form with plenty of breathing room:              │
│                                                          │
│   ┌────────────────────────────────────────────────┐    │
│   │ Field Label                                    │    │
│   │ [                                              ]│    │
│   └────────────────────────────────────────────────┘    │
│                                                          │
│   ┌────────────────────────────────────────────────┐    │
│   │ Another Field                                  │    │
│   │ [                                              ]│    │
│   └────────────────────────────────────────────────┘    │
│                                                          │
│   No need to cram fields tightly!                       │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ [Save] [Cancel]                                          │
└──────────────────────────────────────────────────────────┘

Each tab can have substantial content without scrolling
```

### Pattern 4: Three-Column Layout (Advanced)

**Best for**: Complex data management, multi-view editors

```
┌──────────────────────────────────────────────────────────┐
│ [Modal Header]                                           │
├─────────────┬──────────────────────┬─────────────────────┤
│             │                      │                     │
│  Sidebar    │   Main Editor        │   Properties        │
│  ┌────────┐ │   ┌────────────────┐ │   ┌──────────────┐  │
│  │ List   │ │   │                │ │   │ Details      │  │
│  │ Item 1 │ │   │  Canvas/Form   │ │   │              │  │
│  │ Item 2 │ │   │                │ │   │ Field 1: __  │  │
│  │ Item 3 │ │   │                │ │   │ Field 2: __  │  │
│  │ ...    │ │   │                │ │   │ Field 3: __  │  │
│  └────────┘ │   └────────────────┘ │   └──────────────┘  │
│             │                      │                     │
├─────────────┴──────────────────────┴─────────────────────┤
│ [Save] [Cancel]                                          │
└──────────────────────────────────────────────────────────┘

Split: 20% sidebar / 50% editor / 30% properties
```

---

## Technical Implementation Guidelines

### CSS Best Practices

**DO use flexbox to fill available space**:
```css
.your-editor-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
}

.your-main-area {
  flex: 1 1 auto;
  min-height: 0;  /* Critical for scrolling! */
  overflow-y: auto;
}
```

**DON'T set fixed heights**:
```css
/* ❌ BAD - Assumes old small modal */
.editor-container {
  height: 400px;  /* Too small for new modal! */
}

/* ✅ GOOD - Responsive to available space */
.editor-container {
  flex: 1 1 auto;
  min-height: 400px;  /* Minimum, but can grow */
}
```

### React Component Structure

```jsx
// Recommended structure for studio view
function StudioView() {
  return (
    <div className="studio-editor-root">
      {/* Toolbar/Header (if needed) */}
      <div className="editor-toolbar">
        {/* Tools, tabs, controls */}
      </div>

      {/* Main content area - fills available space */}
      <div className="editor-content">
        <div className="editor-left">
          {/* Configuration, forms, lists */}
        </div>
        <div className="editor-right">
          {/* Preview, canvas, output */}
        </div>
      </div>

      {/* Optional footer/status bar */}
      <div className="editor-footer">
        {/* Status, hints, secondary actions */}
      </div>
    </div>
  );
}
```

```css
/* Corresponding CSS */
.studio-editor-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
}

.editor-toolbar {
  flex-shrink: 0;
  margin-bottom: 16px;
}

.editor-content {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  gap: 24px;
  overflow: hidden;
}

.editor-left,
.editor-right {
  flex: 1;
  overflow-y: auto;
}
```

---

## Hiding Modal Chrome (Header & Buttons)

### Overview

By default, OpenEdX modals include:
- **Modal Header**: Title + close button (X)
- **Modal Actions**: Save and Cancel buttons at bottom

For custom React-based editors, you may want to hide these and provide your own UI controls.

### Recommended Approach: CSS Targeting

OpenEdX automatically adds a CSS class to modals based on your XBlock's `category` attribute:

```python
# In your XBlock class
class MyXBlock(XBlock):
    category = "timeline_presentation"  # Creates .modal-type-timeline-presentation
```

Use this class to hide modal elements with CSS:

```scss
// Hide modal header (title + close button)
.modal-type-timeline-presentation .modal-header {
  display: none !important;
}

// Hide modal action buttons (Save/Cancel)
.modal-type-timeline-presentation .modal-actions {
  display: none !important;
}
```

### Where to Add This CSS

**Option 1: In your XBlock's SCSS file**

```scss
// frontend/src/studio-ui/styles/studio.scss

.modal-type-{your-category} {
  // Hide OpenEdX modal chrome
  .modal-header {
    display: none !important;
  }

  .modal-actions {
    display: none !important;
  }

  // Optional: Make content fill available space
  .modal-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
```

**Option 2: In `studio_view()` Python method**

```python
def studio_view(self, context=None):
    frag = Fragment()

    # ... add your HTML/JS ...

    # Add CSS to hide modal chrome
    frag.add_css("""
        .modal-type-timeline-presentation .modal-header,
        .modal-type-timeline-presentation .modal-actions {
            display: none !important;
        }
    """)

    return frag
```

### Granular Control

Hide specific elements instead of entire sections:

```scss
.modal-type-{your-category} {
  // Hide only the close button, keep title
  .modal-header .close,
  .modal-header .btn-close {
    display: none !important;
  }

  // Hide only Cancel button, keep Save
  .action-cancel {
    display: none !important;
  }

  // Hide only Save button, keep Cancel
  .action-save {
    display: none !important;
  }
}
```

### Real Example: Accordion XBlock

**File**: `xblocks/accordion/frontend/src/studio-ui/styles/minimal-paragon.scss`

```scss
// Hide Studio's modal action buttons (Save/Close) for accordion
// We provide our own buttons with clearer labels
.modal-type-accordion .modal-actions {
  display: none !important;
}

// Hide the action-cancel close button
.modal-type-accordion .action-cancel {
  display: none !important;
}

// Hide any close buttons in header as well
.modal-type-accordion .modal-header .close,
.modal-type-accordion .modal-header .btn-close {
  display: none !important;
}

// Make the xblock wrappers fill modal height
.modal-type-accordion .modal-content {
  display: flex;
  flex-direction: column;
  min-height: 502px;
}
```

### Providing Your Own Controls

When you hide the default buttons, provide your own:

```jsx
function StudioView() {
  const handleSave = async () => {
    // Save logic
    await runtime.notify('save', { state: 'start' });
    // ... your save code ...
    await runtime.notify('save', { state: 'end' });
  };

  const handleCancel = () => {
    runtime.notify('cancel', {});
  };

  return (
    <div className="custom-editor">
      {/* Your editor UI */}

      {/* Custom action buttons */}
      <div className="custom-actions">
        <Button variant="tertiary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}
```

### Available Selectors

All modal elements you can target:

| Selector | Description |
|----------|-------------|
| `.modal-header` | Entire header section (title + close) |
| `.modal-window-title` | Just the title text |
| `.modal-header .close` | Close button (older OpenEdX) |
| `.modal-header .btn-close` | Close button (newer OpenEdX) |
| `.modal-actions` | Entire action bar at bottom |
| `.action-save` | Save button only |
| `.action-cancel` | Cancel button only |
| `.modal-content` | Content area (your editor) |

### Important Notes

1. **!important is required** - OpenEdX modal CSS has high specificity
2. **Category name must match** - Ensure your XBlock's `category` attribute is correct
3. **Provide your own save/cancel** - If you hide default buttons, implement your own
4. **Runtime notifications** - Call `runtime.notify('save', ...)` and `runtime.notify('cancel', ...)` to properly close the modal

### Quick Reference: Common XBlock Categories

```scss
// Timeline Presentation
.modal-type-timeline-presentation .modal-header,
.modal-type-timeline-presentation .modal-actions {
  display: none !important;
}

// Image Annotation
.modal-type-image-annotation .modal-header,
.modal-type-image-annotation .modal-actions {
  display: none !important;
}

// Image Hotspot
.modal-type-image-hotspot .modal-header,
.modal-type-image-hotspot .modal-actions {
  display: none !important;
}

// Accordion
.modal-type-accordion .modal-header,
.modal-type-accordion .modal-actions {
  display: none !important;
}

// Tabs
.modal-type-tabs .modal-header,
.modal-type-tabs .modal-actions {
  display: none !important;
}
```

---

## Scrolling Behavior

### How Modal Scrolling Works

The **modal content area** is scrollable when your content exceeds available height:

```
Modal Content Area (935px typical height)
├─ If your content < 935px: No scrolling needed ✅
├─ If your content > 935px: Scrolls automatically ✅
└─ Header and Actions remain fixed (sticky)
```

### Internal Scrolling vs Modal Scrolling

**Option A: Let modal scroll** (simpler)
```jsx
<div className="editor">
  {/* Large form, modal will scroll automatically */}
  <FormSection1 />
  <FormSection2 />
  <FormSection3 />
  {/* Modal provides scrollbar */}
</div>
```

**Option B: Internal scrolling** (more control)
```jsx
<div className="editor" style={{ height: '100%', overflow: 'hidden' }}>
  <div style={{ height: '100%', overflowY: 'auto' }}>
    {/* Your content, you control scrolling */}
  </div>
</div>
```

---

## Design Examples by XBlock Type

### Image/Visual XBlocks
- **Use**: Two-column (40% config / 60% preview)
- **Example**: Image hotspot, image annotation
- **Key**: Live preview updates as you configure

### Timeline/Sequential XBlocks
- **Use**: Full-width visual editor
- **Example**: Timeline presentation, video timeline
- **Key**: Horizontal canvas using full 1882px width

### Rich Text/Content XBlocks
- **Use**: Tabbed interface
- **Example**: HTML editor, content library
- **Key**: Each tab has plenty of space for WYSIWYG

### Data/Table XBlocks
- **Use**: Full-width table with filters
- **Example**: Grade book, data table
- **Key**: Show more rows/columns without scrolling

### Assessment XBlocks
- **Use**: Two-column (50% question editor / 50% preview)
- **Example**: Quiz, problem builder
- **Key**: See what students see while editing

---

## Migration from Old Layouts

### Common Issues When Migrating

**Issue 1: Content too small for new modal**
```jsx
// ❌ OLD - Designed for small modal
<div style={{ width: '600px', margin: '0 auto' }}>
  {/* Wastes 1282px of horizontal space! */}
</div>

// ✅ NEW - Use available space
<div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
  {/* Centered but uses space efficiently */}
</div>
```

**Issue 2: Unnecessary scrolling**
```jsx
// ❌ OLD - Cramped, requires scrolling
<div>
  <Section1 />  {/* Each section stacked */}
  <Section2 />  {/* Creates long scrolling */}
  <Section3 />
</div>

// ✅ NEW - Side by side
<div style={{ display: 'flex', gap: '24px' }}>
  <div style={{ flex: 1 }}>
    <Section1 />
    <Section2 />
  </div>
  <div style={{ flex: 1 }}>
    <Section3 />
  </div>
</div>
```

**Issue 3: Tiny previews**
```jsx
// ❌ OLD - Preview too small
<Preview style={{ width: '300px', height: '200px' }} />

// ✅ NEW - Full-size preview
<Preview style={{ width: '100%', minHeight: '600px' }} />
```

---

## Testing Your Layout

### Checklist

- [ ] Test at 1920×1080 (most common)
- [ ] Test at 1440×900 (laptop)
- [ ] Test at 1366×768 (minimum supported)
- [ ] Content fills available space (no large empty areas)
- [ ] Scrolling works smoothly when content exceeds height
- [ ] No horizontal scrollbars (respect modal width)
- [ ] Text is readable (not stretched too wide)
- [ ] Interactive elements have appropriate spacing
- [ ] Preview panes show meaningful content size

### Quick Test Code

Add this to your studio view for testing:

```jsx
{process.env.NODE_ENV === 'development' && (
  <div style={{
    position: 'fixed',
    top: 10,
    right: 10,
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '8px',
    fontSize: '12px',
    zIndex: 9999
  }}>
    Available: {window.innerWidth}px × {window.innerHeight}px
  </div>
)}
```

---

## Modal Specification Reference

### Confirmed Measurements

**From Liverpool Dental Legacy Theme**:
```scss
// File: course-unit-mfe-iframe-bundle.scss (lines 1766-1830)

.modal-window.modal-editor {
  width: 98vw !important;
  height: 98vh !important;
  max-width: none !important;
  max-height: none !important;
  margin: 1vh auto !important;

  display: flex !important;
  flex-direction: column !important;

  box-shadow: 0 24px 48px 0 rgba(0, 0, 0, 0.22) !important;
  border-radius: 20px !important;
}

.modal-content {
  flex: 1 1 auto !important;
  min-height: 0 !important;
  height: auto !important;
  overflow-y: auto !important;
  padding: 16px !important;
  background-color: #ffffff !important;
}
```

### Actual DOM Structure

```html
<body class="view-container">
  <div class="wrapper wrapper-modal-window wrapper-modal-window-edit-xblock">
    <div class="edit-xblock-modal">
      <div class="modal-window modal-editor">

        <div class="modal-header">
          <!-- XBlock title, close button -->
        </div>

        <div class="modal-content">
          <div class="xblock-editor">
            <div class="xblock xblock-studio_view">
              <!-- YOUR REACT APP RENDERS HERE -->
            </div>
          </div>
        </div>

        <div class="modal-actions">
          <!-- Save, Cancel buttons -->
        </div>

      </div>
    </div>
  </div>
</body>
```

---

## Design Tokens / Theme Variables

### Liverpool Design System (use these for consistency)

```css
/* Spacing */
--liverpool-space-1: 4px;
--liverpool-space-2: 8px;
--liverpool-space-3: 12px;
--liverpool-space-4: 16px;
--liverpool-space-6: 24px;
--liverpool-space-8: 32px;

/* Colors */
--liverpool-blue: #0077B6;
--liverpool-neutral-white: #ffffff;
--liverpool-neutral-50: #F8F9FA;
--liverpool-neutral-100: #F1F3F5;
--liverpool-neutral-200: #E9ECEF;
--liverpool-neutral-900: #212529;

/* Shadows */
--liverpool-shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
--liverpool-shadow-md: 0 4px 8px rgba(0,0,0,0.12);
--liverpool-shadow-lg: 0 8px 16px rgba(0,0,0,0.15);
--liverpool-shadow-xl: 0 24px 48px rgba(0,0,0,0.22);

/* Border Radius */
--liverpool-radius-sm: 4px;
--liverpool-radius-md: 8px;
--liverpool-radius-lg: 20px;

/* Typography */
--liverpool-font-size-sm: 14px;
--liverpool-font-size-base: 16px;
--liverpool-font-size-lg: 18px;
--liverpool-font-size-xl: 20px;
```

---

## Common Patterns Quick Reference

### Responsive Two-Column Split

```jsx
<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  height: '100%'
}}>
  <div style={{ overflowY: 'auto' }}>
    {/* Left column */}
  </div>
  <div style={{ overflowY: 'auto' }}>
    {/* Right column */}
  </div>
</div>
```

### Full-Height Canvas

```jsx
<div style={{
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}}>
  <Toolbar style={{ flexShrink: 0 }} />
  <Canvas style={{ flex: 1, minHeight: 0 }} />
  <StatusBar style={{ flexShrink: 0 }} />
</div>
```

### Centered Content with Max Width

```jsx
<div style={{
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '32px',
  height: '100%',
  overflowY: 'auto'
}}>
  {/* Content */}
</div>
```

---

## Questions?

For implementation details, see:
- **Investigation Doc**: `docs/investigations/xblock-modal-sizing/00-SUMMARY.md`
- **MFE Investigation**: `docs/investigations/liverpool-authoring-mfe-iframe-modal-investigation.md`
- **Theme Source**: `/Users/brainjam/tutor-liverpool-dental-legacy/tutorliverpooldentallegacy/templates/liverpool-dental-legacy/cms/static/sass/course-unit-mfe-iframe-bundle.scss`

---

## Customizing Modal Size Per-XBlock

### Overview

By default, the Liverpool theme sets all XBlock modals to **98vw × 98vh** (near-fullscreen). However, **individual XBlocks can override this** to use custom dimensions.

### Why Customize Modal Size?

Different XBlocks have different space requirements:
- **Timeline/Canvas editors**: Need maximum space (98vh)
- **Simple forms**: Work fine with standard size (60-70vh)
- **Preview-heavy editors**: Want large but not fullscreen (85-90vh)

### How It Works: CSS Specificity

The Liverpool theme uses this selector (specificity `0-4-0`):
```scss
[class*="view-"] .wrapper .modal-window.modal-editor {
  width: 98vw !important;
  height: 98vh !important;
}
```

To override it, your XBlock needs **higher specificity** by including `.modal-type-{category}`:

```scss
// Specificity: 0-5-0 (wins!)
[class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor {
  width: 90vw !important;
  height: 90vh !important;
  margin: 5vh auto !important;
}
```

### Implementation Steps

**Step 1: Add CSS to your XBlock**

In your XBlock's SCSS file (e.g., `frontend/src/studio-ui/styles/studio.scss`):

```scss
// Custom modal size for this XBlock
[class*="view-"] .wrapper .modal-type-{your-category}.modal-window.modal-editor {
  width: 85vw !important;
  height: 85vh !important;
  margin: 7.5vh auto !important;

  // Optional: max-width constraint
  max-width: 1400px !important;
}
```

**Step 2: Rebuild your XBlock**

```bash
cd xblocks/your-xblock/frontend
npm run build
```

**Step 3: Restart OpenEdX**

```bash
tutor dev restart cms
```

### Size Presets

#### Extra Large (98vh) - Maximum Space
```scss
[class*="view-"] .wrapper .modal-type-{category}.modal-window.modal-editor {
  width: 98vw !important;
  height: 98vh !important;
  margin: 1vh auto !important;
}
```
**Use for**: Canvas editors, timeline builders, complex visual tools

#### Large (90vh) - Spacious with Breathing Room
```scss
[class*="view-"] .wrapper .modal-type-{category}.modal-window.modal-editor {
  width: 90vw !important;
  height: 90vh !important;
  margin: 5vh auto !important;
}
```
**Use for**: Rich content editors, multi-section forms

#### Medium (80vh) - Balanced
```scss
[class*="view-"] .wrapper .modal-type-{category}.modal-window.modal-editor {
  width: 80vw !important;
  height: 80vh !important;
  margin: 10vh auto !important;
  max-width: 1200px !important;
}
```
**Use for**: Standard forms with preview, moderate complexity

#### Standard (OpenEdX Default) - Don't Override
If you don't add any CSS, the Liverpool theme's default (98vh) applies. To use OpenEdX's original smaller modal, the theme would need to be reverted.

### Important: CSS Specificity Requirements

❌ **This WON'T work** (too low specificity: 0-3-0):
```scss
.modal-type-{category}.modal-window.modal-editor {
  width: 90vw !important;  // LOSES to theme's 0-4-0
}
```

✅ **This WILL work** (higher specificity: 0-5-0):
```scss
[class*="view-"] .wrapper .modal-type-{category}.modal-window.modal-editor {
  width: 90vw !important;  // WINS with 0-5-0
}
```

### Load Order

1. **Theme CSS loads** → Global 98vh for all modals
2. **XBlock CSS loads** → Overrides for specific category
3. **Result** → XBlock wins if specificity is higher

### Examples by XBlock Type

#### Timeline Presentation (Keep Fullscreen)
```scss
// No override needed - uses theme's 98vh default
// Or explicitly set:
[class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor {
  width: 98vw !important;
  height: 98vh !important;
  margin: 1vh auto !important;
}
```

#### Image Annotation (Slightly Smaller)
```scss
[class*="view-"] .wrapper .modal-type-image-annotation.modal-window.modal-editor {
  width: 90vw !important;
  height: 90vh !important;
  margin: 5vh auto !important;
  max-width: 1600px !important;
}
```

#### Simple Poll XBlock (Standard Size)
```scss
[class*="view-"] .wrapper .modal-type-poll.modal-window.modal-editor {
  width: 70vw !important;
  height: 70vh !important;
  margin: 15vh auto !important;
  max-width: 900px !important;
}
```

### Responsive Considerations

Add media queries for smaller screens:

```scss
[class*="view-"] .wrapper .modal-type-{category}.modal-window.modal-editor {
  width: 90vw !important;
  height: 90vh !important;
  margin: 5vh auto !important;

  // Tablet
  @media (max-width: 1024px) {
    width: 95vw !important;
    height: 95vh !important;
    margin: 2.5vh auto !important;
  }

  // Mobile
  @media (max-width: 768px) {
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    border-radius: 0 !important;
  }
}
```

### Testing Your Custom Size

1. Open your XBlock in Studio editor
2. Use browser DevTools to inspect:
   ```javascript
   const modal = document.querySelector('.modal-window.modal-editor');
   const computed = window.getComputedStyle(modal);
   console.log({
     width: computed.width,
     height: computed.height,
     margin: computed.margin
   });
   ```
3. Verify your custom dimensions are applied

### Troubleshooting

**Problem**: My CSS isn't working

**Solutions**:
1. Check specificity - must be `0-5-0` or higher
2. Verify category name matches XBlock's `category` attribute
3. Ensure `!important` is present
4. Check CSS file is loaded (view source, search for your CSS)
5. Clear browser cache and rebuild XBlock

**Problem**: Modal flashes before resizing

**Solution**: This is normal - CSS loads after modal renders. Not noticeable in practice.

---

## TL;DR for AI Agents

**Key Facts**:
1. Modal is now **98vw × 98vh** (near-fullscreen)
2. Content area is **~1882px wide × ~935px tall** (typical)
3. **Use flexbox** to fill available space
4. **Think expansively**: side-by-side layouts, large previews, spacious forms
5. **Don't assume** old small modal constraints
6. **Test responsively** across viewport sizes

**Quick Start**:
```jsx
// Your studio view root component
<div style={{
  display: 'flex',
  height: '100%',
  gap: '24px',
  padding: '16px'
}}>
  <div style={{ flex: 1, overflowY: 'auto' }}>
    {/* Config/Editor */}
  </div>
  <div style={{ flex: 1, overflowY: 'auto' }}>
    {/* Preview/Output */}
  </div>
</div>
```

**That's it! You now have a professional, spacious editing experience.**
