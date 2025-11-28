# Timeline Presentation XBlock - Fullscreen Modal Implementation

**Date**: 2025-11-28
**Purpose**: Implement fullscreen modal styling at XBlock level before reverting global Liverpool theme defaults
**Status**: Ready for implementation

---

## Background

Currently, the **Liverpool theme** sets ALL XBlock modals to fullscreen (98vw × 98vh) globally via:

**File**: `/Users/brainjam/tutor-liverpool-dental-legacy/tutorliverpooldentallegacy/templates/liverpool-dental-legacy/cms/static/sass/course-unit-mfe-iframe-bundle.scss` (lines 1766-1830)

```scss
[class*="view-"] .wrapper .modal-window.modal-editor {
  width: 98vw !important;
  height: 98vh !important;
  margin: 1vh auto !important;
  // ... other styles
}
```

## Strategy Change

We're moving from **global fullscreen** (all XBlocks) to **per-XBlock opt-in** (only XBlocks that need it):

1. ✅ **Add fullscreen CSS to timeline-presentation XBlock** (this implementation)
2. ⏭️ **Revert Liverpool theme CSS** back to OpenEdX standard (smaller modal)
3. ⏭️ **Other XBlocks** can opt-in to fullscreen as needed

---

## Implementation for Timeline Presentation XBlock

### Step 1: Add CSS Override

**File to modify**: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/frontend/src/studio-ui/styles/studio-fullscreen.scss`

**CSS to add** (at the end of the file):

```scss
// ============================================================================
// Timeline Presentation - Fullscreen Modal Override
// ============================================================================
// Purpose: Maintain fullscreen modal (98vw × 98vh) for timeline editor
// Context: This overrides the Liverpool theme's modal sizing to ensure
//          timeline presentation always gets maximum editing space
// Date: 2025-11-28
// ============================================================================

// Override modal size to fullscreen for timeline presentation
// Specificity: 0-5-0 (higher than theme's 0-4-0, so this wins)
[class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor {
  // Fullscreen dimensions with small margins
  width: 98vw !important;
  height: 98vh !important;
  max-width: none !important;
  max-height: none !important;

  // Center with equal 1vh gaps on all sides
  margin: 1vh auto !important;

  // Liverpool design system styling
  box-shadow: 0 24px 48px 0 rgba(0, 0, 0, 0.22) !important;  // liverpool-shadow-xl
  border-radius: 20px !important;  // liverpool-radius-lg

  // Flexbox layout for proper content stretching
  display: flex !important;
  flex-direction: column !important;
}

// Inner wrapper also needs flexbox (critical for proper layout)
[class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor > div {
  display: flex !important;
  flex-direction: column !important;
  flex: 1 1 auto !important;
  min-height: 0 !important;
}

// Modal header - fixed at top
[class*="view-"] .wrapper .modal-type-timeline-presentation .modal-header {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
  border-bottom: 1px solid #E9ECEF !important;  // liverpool-neutral-200
  padding: 16px 24px !important;  // liverpool-space-4 liverpool-space-6
  background-color: #ffffff !important;  // liverpool-neutral-white

  .modal-window-title {
    font-size: 20px !important;  // liverpool-font-size-xl
    font-weight: 600 !important;  // liverpool-font-weight-semibold
    color: #0077B6 !important;  // liverpool-blue
  }
}

// Modal content - flexible scrolling container
[class*="view-"] .wrapper .modal-type-timeline-presentation .modal-content {
  // Fill available vertical space between header and actions
  flex: 1 1 auto !important;

  // CRITICAL: min-height 0 enables scrolling in flexbox
  min-height: 0 !important;

  // Override any fixed heights
  height: auto !important;

  // Scrolling behavior
  overflow-y: auto !important;
  overflow-x: hidden !important;
  scroll-behavior: smooth !important;

  // Padding
  padding: 16px !important;  // liverpool-space-4

  // Background
  background-color: #ffffff !important;  // liverpool-neutral-white
}

// Modal actions - fixed at bottom
[class*="view-"] .wrapper .modal-type-timeline-presentation .modal-actions {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
  border-top: 1px solid #E9ECEF !important;  // liverpool-neutral-200
  padding: 16px 24px !important;  // liverpool-space-4 liverpool-space-6
  background-color: #F8F9FA !important;  // liverpool-neutral-50
}

// Responsive: Tablet
@media (max-width: 1024px) {
  [class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor {
    width: 96vw !important;
    height: 96vh !important;
    margin: 2vh auto !important;
  }
}

// Responsive: Mobile (fullscreen with no margins)
@media (max-width: 768px) {
  [class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor {
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    border-radius: 0 !important;
  }
}
```

### Why This CSS Works

**CSS Specificity Battle**:
- Liverpool theme selector: `[class*="view-"] .wrapper .modal-window.modal-editor` = **0-4-0**
- Our selector: `[class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor` = **0-5-0**
- **Result**: Our CSS wins (higher specificity)

**Load Order**:
1. Liverpool theme CSS loads first (in page `<head>`)
2. Timeline presentation CSS loads second (via `fragment.add_css_url()`)
3. With equal `!important`, later + higher specificity = **we win**

### Step 2: Rebuild XBlock

```bash
cd /Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/frontend
npm run build
```

This compiles your SCSS and copies `studio-ui.css` to the `public/` directory.

### Step 3: Verify CSS is Loaded

Check that the compiled CSS includes your new rules:

```bash
grep -n "modal-type-timeline-presentation" \
  /Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/timeline_presentation/public/studio-ui.css
```

You should see your CSS rules in the output.

### Step 4: Restart OpenEdX

```bash
# If using Tutor
tutor dev restart cms

# Or just reload the page with cache clear
# Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows/Linux)
```

### Step 5: Test

1. Open Timeline Presentation XBlock in Studio editor
2. Open browser DevTools Console
3. Run this JavaScript:

```javascript
const modal = document.querySelector('.modal-window.modal-editor');
const computed = window.getComputedStyle(modal);
console.log({
  hasTimelineClass: modal.classList.contains('modal-type-timeline-presentation'),
  width: computed.width,
  height: computed.height,
  margin: computed.margin,
  display: computed.display,
  flexDirection: computed.flexDirection
});
```

**Expected output** (on 1920×1080 display):
```javascript
{
  hasTimelineClass: true,
  width: "1882px",      // 98vw of 1920px
  height: "1058px",     // 98vh of 1080px
  margin: "10.8px auto", // 1vh
  display: "flex",
  flexDirection: "column"
}
```

---

## What This Achieves

### Before Implementation
- ✅ Timeline presentation uses fullscreen modal (from Liverpool theme)
- ✅ ALL other XBlocks also use fullscreen modal (may not need it)
- ❌ Can't revert theme without affecting timeline presentation

### After Implementation
- ✅ Timeline presentation uses fullscreen modal (from XBlock CSS)
- ✅ Timeline presentation is **independent** of theme defaults
- ✅ **Ready** to revert Liverpool theme to OpenEdX standard
- ✅ Other XBlocks will use standard modal (unless they opt-in)

---

## Next Steps (After This Implementation)

### 1. Revert Liverpool Theme CSS

**File**: `/Users/brainjam/tutor-liverpool-dental-legacy/tutorliverpooldentallegacy/templates/liverpool-dental-legacy/cms/static/sass/course-unit-mfe-iframe-bundle.scss`

**Lines to remove/comment**: 1766-1830 (the fullscreen modal CSS)

This will restore OpenEdX's default modal behavior:
- Width: ~800px (fixed)
- Height: ~600px (or content-dependent)
- Centered with standard margins

### 2. Test Timeline Presentation Still Works

After reverting theme CSS:
- Timeline presentation should STILL be fullscreen (via XBlock CSS)
- Other XBlocks should be standard size (no fullscreen)

### 3. Opt-In Other XBlocks

As needed, add similar CSS to other XBlocks that benefit from fullscreen:
- Image Annotation XBlock
- Image Hotspot XBlock
- Any complex visual editors

---

## Current File Structure

```
xblocks/timeline-presentation-xblock/
├── frontend/
│   └── src/
│       └── studio-ui/
│           └── styles/
│               ├── studio-fullscreen.scss  ← ADD CSS HERE
│               ├── studio-layout.scss
│               └── index.scss (imports studio-fullscreen.scss)
├── timeline_presentation/
│   └── public/
│       └── studio-ui.css  ← Compiled output
└── IMPLEMENTATION_FULLSCREEN_MODAL.md  ← This file
```

### Import Chain

1. `index.scss` imports `studio-fullscreen.scss`
2. Webpack compiles to `studio-ui.css`
3. `timeline_presentation.py` loads via `fragment.add_css_url()`
4. CSS injected into page `<head>` when modal opens

---

## Verification Checklist

After implementation, verify:

- [ ] CSS added to `studio-fullscreen.scss`
- [ ] XBlock rebuilt (`npm run build`)
- [ ] Compiled CSS contains `.modal-type-timeline-presentation` rules
- [ ] OpenEdX restarted
- [ ] Modal opens at 98vw × 98vh
- [ ] Modal has flexbox layout (no broken scrolling)
- [ ] Content fills available space
- [ ] Modal scrolls when content exceeds height
- [ ] Responsive: works on tablet (96vh)
- [ ] Responsive: works on mobile (100vh, no margins)

---

## Rollback Plan

If something goes wrong:

### Option 1: Remove XBlock CSS
Comment out the new CSS in `studio-fullscreen.scss` and rebuild.

### Option 2: Increase Specificity
If CSS isn't applying, add more specificity:
```scss
body[class*="view-"] .wrapper .modal-type-timeline-presentation.modal-window.modal-editor {
  // Even higher specificity: 1-5-0
}
```

### Option 3: Revert and Debug
1. Revert changes to `studio-fullscreen.scss`
2. Keep Liverpool theme CSS (don't revert it yet)
3. Timeline presentation will still work (via theme CSS)
4. Debug why XBlock CSS didn't work

---

## Technical Notes

### Why Duplicate Liverpool Theme CSS?

We're copying the Liverpool theme's CSS into the XBlock for two reasons:

1. **Independence**: XBlock doesn't depend on theme behavior
2. **Portability**: If deployed to a different OpenEdX instance without Liverpool theme, still gets fullscreen
3. **Control**: XBlock explicitly declares its modal size requirements
4. **Migration**: Allows theme to revert to OpenEdX defaults without breaking timeline presentation

### Why Use !important?

OpenEdX's modal CSS uses `!important` extensively. To override it, we must also use `!important`. This is the OpenEdX convention, not a hack.

### Why Match Liverpool Theme Exactly?

For consistency. Users are already familiar with the current fullscreen behavior. We're maintaining UX while improving architecture (global → per-XBlock).

### Can We Change Dimensions Later?

Yes! Once XBlock CSS is in place, you can adjust:
- Width: `95vw` (slightly smaller)
- Height: `95vh` (more breathing room)
- Margins: `2.5vh` (larger gaps)

Just change the values in `studio-fullscreen.scss` and rebuild.

---

## Related Documentation

- **XBlock Fullscreen Modal Guide**: `/Users/brainjam/brainjam-openedx-xblocks/docs/XBLOCK_FULLSCREEN_MODAL_GUIDE.md`
- **Modal Sizing Investigation**: `/Users/brainjam/brainjam-openedx-xblocks/docs/investigations/xblock-modal-sizing/00-SUMMARY.md`
- **Liverpool Theme Source**: `/Users/brainjam/tutor-liverpool-dental-legacy/tutorliverpooldentallegacy/templates/liverpool-dental-legacy/cms/static/sass/course-unit-mfe-iframe-bundle.scss`

---

## Implementation Status

- [ ] CSS added to `studio-fullscreen.scss`
- [ ] XBlock rebuilt
- [ ] CSS verified in compiled output
- [ ] OpenEdX restarted
- [ ] Modal tested (98vw × 98vh)
- [ ] Flexbox layout verified
- [ ] Responsive behavior tested
- [ ] Ready to revert Liverpool theme CSS

---

**Once all checkboxes are complete, you're ready to revert the Liverpool theme CSS back to OpenEdX standard defaults.**
