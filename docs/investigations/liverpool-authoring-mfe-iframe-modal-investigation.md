# Liverpool Authoring MFE Iframe Modal Investigation

**Date:** 2025-11-28
**Investigation:** MFE iframe modal sizing and gap issues
**Status:** Analysis complete, implementation pending

---

## Executive Summary

The XBlock editor modal has two layers of containment:
1. **MFE Layer**: React-based modal from frontend-app-authoring that renders an iframe
2. **Legacy Layer**: Inside the iframe, legacy OpenEdX modal with our custom CSS

**Current Issue**: The MFE iframe fills the entire viewport (no gaps), even though our legacy modal CSS creates proper 98vh sizing with 1vh gaps inside the iframe. This creates a visual experience where content appears to touch the edges.

**Root Cause**: MFE's iframe styling (`<iframe class="modal-iframe">`) renders at full viewport dimensions without margins.

**Solution Required**: Add CSS overrides in Liverpool theme's MFE bundle to style the iframe container with appropriate margins.

---

## Investigation Methodology

### Tools Used
- Chrome DevTools MCP integration
- JavaScript inspection via `evaluate_script`
- Multi-page analysis (MFE parent + iframe content)

### Pages Analyzed
1. **Page 0 (MFE)**: `http://apps.local.openedx.io:2001/authoring/course/...`
   - Frontend-app-authoring React application
   - Contains `<iframe class="modal-iframe">` wrapper

2. **Page 1 (Legacy Editor)**: `http://studio.local.openedx.io:8001/xblock/.../action/edit`
   - Legacy OpenEdX edit modal
   - Contains `.modal-window.modal-editor` with our custom CSS

---

## Current State Analysis

### Layer 1: MFE Iframe Container

**Location**: Page 0 (frontend-app-authoring MFE)

**Measured Dimensions**:
```
Viewport: 1800px × 842px
Iframe:   1800px × 842.5px
Position: top=0, left=0, bottom=842.5 (extends 0.5px beyond viewport!)
Bottom gap: -0.5px (NEGATIVE)
```

**CSS Applied**:
```css
.modal-iframe {
  width: 1800px;      /* 100vw */
  height: 842.5px;    /* 100vh */
  max-width: none;
  max-height: none;
  border: 0px;
  display: block;
}
```

**Structure**:
```html
<div class="col-xl-9 col-lg-8 ...">  <!-- Bootstrap grid column -->
  <iframe class="modal-iframe" role="dialog" src="..."></iframe>
</div>
```

**Issue**:
- Iframe fills 100% of viewport with NO margins
- Positioned at 0,0 (top-left corner)
- Bottom edge extends beyond viewport
- No visual gaps on any side

### Layer 2: Legacy Modal Inside Iframe

**Location**: Page 1 (inside iframe, legacy OpenEdX)

**Measured Dimensions** (viewport: 1440px × 674px):
```
Modal Window: 1411.2px × 660.516px (98vw × 98vh)
Position: top=6.74px (1vh), left=14.5px
Margins: 6.74px top/bottom (1vh each)
Bottom gap: 6.744px (1vh) ✓
```

**CSS Applied** (from `course-unit-mfe-iframe-bundle.css`):
```scss
[class*="view-"] .wrapper .modal-window.modal-editor {
  width: 98vw !important;
  height: 98vh !important;
  max-width: none !important;
  max-height: none !important;
  margin: 1vh auto !important;

  display: flex !important;
  flex-direction: column !important;

  box-shadow: $liverpool-shadow-xl !important;
  border-radius: $liverpool-radius-lg !important;
}
```

**Modal Structure Breakdown**:
```
Total Modal Height: 660.516px (98vh)
├─ Modal Header:    64px (flex: 0 0 auto)
├─ Modal Content:   498.516px (flex: 1 1 auto, scrollable)
│  ├─ offsetHeight: 499px
│  └─ scrollHeight: 807px ← Content scrolls! ✓
└─ Modal Actions:   59px (flex: 0 0 auto)
```

**Status**: ✅ **Working correctly**
- 98vh sizing applied
- Equal 1vh gaps top/bottom
- Flexbox layout functioning
- Content area scrollable
- Liverpool design tokens applied

---

## Root Cause Analysis

### The Two-Layer Modal Problem

```
┌─────────────────────────────────────────────────┐
│ MFE Viewport (1800×842)                        │
│ ┌─────────────────────────────────────────────┐ │  ← No gap
│ │ <iframe class="modal-iframe"> (1800×842.5) │ │
│ │                                             │ │
│ │  ┌───────────────────────────────────────┐ │ │
│ │  │ Iframe viewport (1440×674)            │ │ │
│ │  │  ┌─────────────────────────────┐      │ │ │  ← 1vh gap
│ │  │  │ .modal-window (98vh)        │      │ │ │
│ │  │  │                             │      │ │ │
│ │  │  │  [Header: 64px]             │      │ │ │
│ │  │  │  [Content: 499px, scrolls]  │      │ │ │
│ │  │  │  [Actions: 59px]            │      │ │ │
│ │  │  │                             │      │ │ │
│ │  │  └─────────────────────────────┘      │ │ │  ← 1vh gap
│ │  └───────────────────────────────────────┘ │ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │  ← No gap (extends beyond!)
└─────────────────────────────────────────────────┘
```

**Key Insight**:
- Our CSS creates proper gaps **inside** the iframe viewport
- But users see the **outer** iframe layer, which has no gaps
- The MFE controls iframe rendering, not legacy CSS

### Why Current Approach Doesn't Work

1. **Scope limitation**: `course-unit-mfe-iframe-bundle.scss` is loaded **inside the iframe**, not in the MFE parent page
2. **CSS isolation**: Cannot style parent iframe element from within iframe (cross-document boundary)
3. **MFE control**: frontend-app-authoring MFE controls iframe wrapper styling

---

## Proposed Solutions

### Option 1: Override MFE Iframe Styling ✅ RECOMMENDED

**Approach**: Add CSS in Liverpool theme's MFE bundle to style the iframe container

**Target Element**: `.modal-iframe` on MFE page

**CSS to Add**:
```scss
// In Liverpool MFE theme bundle
// Target: ~/tutor-liverpool-dental/tutorliverpooldentallegacy/templates/liverpool-dental-legacy/mfe/...

.modal-iframe {
  // Add margins to create visual gaps
  width: 98vw !important;
  height: 98vh !important;
  margin: 1vh auto !important;

  // Ensure it's centered
  display: block !important;

  // Optional: Add shadow/border to iframe itself
  box-shadow: $liverpool-shadow-xl !important;
  border-radius: $liverpool-radius-lg !important;
}

// Alternative: Target the parent container
.course-unit-container .modal-iframe {
  max-width: 98vw !important;
  max-height: 98vh !important;
  margin: 1vh auto !important;
}
```

**Files to Modify**:
```
~/tutor-liverpool-dental/tutorliverpooldentallegacy/templates/liverpool-dental-legacy/mfe/
├── authoring/
│   └── static/
│       └── sass/
│           └── custom.scss  ← Add iframe overrides here
```

**Pros**:
- ✅ Creates visual gaps at MFE level
- ✅ Maintains large modal size
- ✅ Consistent with design tokens
- ✅ User sees gaps on all sides

**Cons**:
- ⚠️ Requires identifying correct MFE bundle location
- ⚠️ May need to rebuild MFE assets

### Option 2: Reduce Legacy Modal to 96vh

**Approach**: Keep MFE iframe at 100vh, make legacy modal smaller

**CSS Change** (in `course-unit-mfe-iframe-bundle.scss`):
```scss
[class*="view-"] .wrapper .modal-window.modal-editor {
  width: 96vw !important;   // Was 98vw
  height: 96vh !important;  // Was 98vh
  margin: 2vh auto !important;  // Was 1vh
}
```

**Visual Result**:
- MFE iframe: Still 100vh (no gaps at MFE level)
- Legacy modal: 96vh with 2vh gaps (inside iframe)
- Net effect: Small gaps visible inside iframe, but iframe edges still touch viewport

**Pros**:
- ✅ No MFE changes needed
- ✅ Quick to implement

**Cons**:
- ❌ Smaller modal (96vh vs 98vh)
- ❌ Gaps only visible inside iframe, not at MFE level
- ❌ Doesn't solve root cause

### Option 3: JavaScript Modal Positioning Override

**Approach**: Use JavaScript to reposition iframe after MFE renders it

**Implementation**:
```javascript
// In Liverpool MFE custom.js
document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(() => {
    const iframe = document.querySelector('.modal-iframe');
    if (iframe) {
      iframe.style.width = '98vw';
      iframe.style.height = '98vh';
      iframe.style.margin = '1vh auto';
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
```

**Pros**:
- ✅ Works even if CSS is overridden
- ✅ Can add dynamic calculations

**Cons**:
- ❌ More complex
- ❌ Potential flash of unstyled content
- ❌ Requires JavaScript bundle setup

---

## Implementation Plan

### Phase 1: Add CSS Overrides to MFE Theme ✅ LOCATION CONFIRMED

**File**: `/Users/brainjam/liverpool-dental-theme/liverpool-authoring-complete.css`

**Purpose**: This file overrides MFE CSS for the authoring application (frontend-app-authoring)

**CSS to Add** (append to end of liverpool-authoring-complete.css):
```css
/* ============================================================================
   XBlock Editor Modal - MFE Iframe Sizing
   ============================================================================
   Purpose: Override MFE's iframe rendering to create visual gaps around modal
   Related: Works in conjunction with legacy modal CSS in course-unit-mfe-iframe-bundle.scss
   Date: 2025-11-28
   ============================================================================ */

/* Target the iframe that loads XBlock editors in MFE */
.modal-iframe {
  /* Near-fullscreen with small margins for visual breathing room */
  width: 98vw !important;
  height: 98vh !important;
  max-width: none !important;
  max-height: none !important;

  /* Center with equal gaps on all sides */
  margin: 1vh auto !important;

  /* Ensure proper rendering */
  display: block !important;

  /* Liverpool design system styling */
  box-shadow: 0 24px 48px 0 rgba(0, 0, 0, 0.22) !important;  /* liverpool-shadow-xl */
  border-radius: 20px !important;  /* liverpool-radius-lg */
}

/* Optional: Target specific parent container if needed */
.course-unit-container .modal-iframe,
.unit-container .modal-iframe {
  width: 98vw !important;
  height: 98vh !important;
}

/* Optional: Adjust for very small viewports */
@media (max-width: 768px) {
  .modal-iframe {
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    border-radius: 0 !important;
  }
}
```

### Phase 2: Build and Deploy

**Note**: Build process depends on how liverpool-dental-theme is integrated with your Tutor deployment.

**If CSS changes are automatically picked up**:
- Changes may apply immediately if theme has hot-reload/watch mode
- Simply refresh the browser after saving CSS file

**If rebuild is required**:
```bash
# Your deployment-specific build/restart commands
# (User knows their specific build process for liverpool-dental-theme)
```

**Common Tutor commands** (if applicable):
```bash
tutor config save
tutor images build mfe
tutor dev restart mfe
```

### Phase 3: Verification

**Steps**:
1. Open XBlock editor modal in MFE
2. Inspect with Chrome DevTools:
   ```javascript
   const iframe = document.querySelector('.modal-iframe');
   const style = window.getComputedStyle(iframe);
   console.log({
     width: style.width,
     height: style.height,
     margin: style.margin
   });
   ```
3. Verify visual gaps on all sides
4. Test on different viewport sizes
5. Confirm content still scrolls inside modal

**Expected Results**:
```
MFE iframe:
- Width: ~1764px (98vw of 1800px)
- Height: ~825px (98vh of 842px)
- Margin: ~8.42px (1vh)
- Visual gaps: Equal on all sides ✓
```

### Phase 5: Documentation

**Update Files**:
- Add comments in CSS explaining the two-layer approach
- Document in `docs/investigations/README.md`
- Note in Liverpool theme changelog

---

## Technical Reference

### Current File Locations

**Legacy Modal CSS** (working):
```
/Users/brainjam/tutor-liverpool-dental/tutorliverpooldentallegacy/templates/
  liverpool-dental-legacy/cms/static/sass/course-unit-mfe-iframe-bundle.scss

Lines 1766-1830: Modal sizing and flexbox layout
Scope: Loaded inside iframe (legacy OpenEdX context)
Status: ✅ Working correctly
```

**MFE Assets** ✅ CONFIRMED:
```
/Users/brainjam/liverpool-dental-theme/liverpool-authoring-complete.css

Purpose: Overrides for frontend-app-authoring MFE
Scope: Loaded in MFE parent page (React context)
Status: ✅ Located and ready for CSS additions
```

### CSS Selector Strategy

**Legacy Modal** (inside iframe):
```scss
// Targets legacy OpenEdX modal structure
[class*="view-"] .wrapper .modal-window.modal-editor {
  // High specificity to override base styles
}
```

**MFE Iframe** (parent page):
```scss
// Targets iframe element directly
.modal-iframe {
  // Simple selector, MFE has less CSS conflicts
}

// Or more specific if needed
.course-unit-container .modal-iframe {
  // Scoped to course unit page
}
```

### Design Token Reference

**Liverpool Variables Used**:
```scss
$liverpool-shadow-xl: 0 24px 48px 0 rgba(0, 0, 0, 0.22);
$liverpool-radius-lg: 20px;
$liverpool-space-4: 16px;
$liverpool-space-6: 24px;
$liverpool-neutral-200: /* border color */
$liverpool-neutral-white: #ffffff;
$liverpool-blue: /* primary color */
```

---

## Testing Checklist

### Visual Tests
- [ ] Modal has visible gaps on all sides (top, bottom, left, right)
- [ ] Gaps are equal size (1vh each)
- [ ] Modal appears centered in viewport
- [ ] Shadow and border radius applied
- [ ] No content clipping

### Functional Tests
- [ ] Modal content scrolls when exceeds height
- [ ] XBlock editor loads correctly
- [ ] Save/Cancel actions work
- [ ] No JavaScript errors in console
- [ ] Works across different XBlock types (timeline, image-annotation, hotspot)

### Responsive Tests
- [ ] Desktop (1920×1080)
- [ ] Laptop (1440×900)
- [ ] Tablet (768×1024)
- [ ] Mobile (375×667) - should go fullscreen

### Browser Tests
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari

---

## Rollback Plan

If MFE styling causes issues:

1. **Remove CSS**:
   ```scss
   // Comment out or remove .modal-iframe rules
   ```

2. **Rebuild**:
   ```bash
   tutor config save
   tutor images build openedx-dev
   tutor dev restart cms
   ```

3. **Fallback**: Use Option 2 (reduce legacy modal to 96vh)

---

## Related Documentation

- [XBlock Modal Sizing Investigation](./xblock-modal-sizing/00-SUMMARY.md)
- [Frontend App Authoring MFE](./xblock-modal-sizing/02-frontend-app-authoring-mfe.md)
- [Liverpool Theme Integration](./xblock-modal-sizing/03-liverpool-theme-integration.md)

---

## Next Steps

1. ~~**Identify MFE asset location** in Liverpool theme~~ ✅ **DONE**
   - File: `/Users/brainjam/liverpool-dental-theme/liverpool-authoring-complete.css`
2. **Add CSS overrides** for `.modal-iframe` (see Phase 1 above for exact CSS to add)
3. **Build and deploy** changes (see Phase 2 build commands)
4. **Test** visual appearance and functionality (see Testing Checklist)
5. **Document** final implementation

---

## Appendix: Investigation Data

### Raw Measurements (MFE Page)

```json
{
  "viewport": { "width": 1800, "height": 842 },
  "iframe": {
    "computed": {
      "width": "1800px",
      "height": "842.5px"
    },
    "boundingRect": {
      "top": 0,
      "left": 0,
      "bottom": 842.5,
      "width": 1800,
      "height": 842.5
    }
  },
  "bottomGap": -0.5
}
```

### Raw Measurements (Inside Iframe)

```json
{
  "viewport": { "width": 1440, "height": 674 },
  "modalWindow": {
    "computed": {
      "width": "1411.2px",
      "height": "660.516px",
      "margin": "6.74px 0px",
      "display": "flex",
      "flexDirection": "column"
    },
    "offsetHeight": 661,
    "scrollHeight": 661
  },
  "modalContent": {
    "computed": {
      "height": "498.516px",
      "flex": "1 1 auto",
      "overflowY": "auto"
    },
    "offsetHeight": 499,
    "scrollHeight": 807
  }
}
```

### Element Structure

```html
<!-- MFE Page (Page 0) -->
<div id="root">
  <div class="course-unit-container mb-4 mt-5">
    <section class="course-unit px-4 container-mw-xl container-fluid">
      <div class="row">
        <div class="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-9">
          <iframe
            class="modal-iframe"
            role="dialog"
            src="http://studio.local.openedx.io:8001/xblock/.../action/edit">

            <!-- Inside Iframe (Page 1) -->
            <body class="view-container">
              <div class="wrapper wrapper-modal-window wrapper-modal-window-edit-xblock">
                <div class="edit-xblock-modal">
                  <div class="modal-window modal-editor confirm modal-lg">
                    <div class="modal-header">...</div>
                    <div class="modal-content">...</div>
                    <div class="modal-actions">...</div>
                  </div>
                </div>
              </div>
            </body>

          </iframe>
        </div>
      </div>
    </section>
  </div>
</div>
```

---

**Investigation completed**: 2025-11-28
**Ready for implementation**: Yes
**MFE CSS File**: `/Users/brainjam/liverpool-dental-theme/liverpool-authoring-complete.css`
**Blocker**: ~~Need to locate MFE asset bundle location in Liverpool theme~~ ✅ **RESOLVED**
