# XBlock Studio Editor Modal Sizing Investigation

**Date:** 2025-11-28
**Investigated By:** Claude Code
**Status:** Complete

## Executive Summary

Investigation into how custom XBlock studio editors are rendered in OpenEdX CMS Studio modals and how to control modal sizing to provide more space for complex React-based editors.

### Problem Statement

Custom XBlocks with React-based studio editors are rendered in OpenEdX Studio modals with restrictive sizing:
- Width: 95% viewport (acceptable)
- Content height: **435px fixed** (too restrictive)
- Min-width: 550px

This makes editing complex XBlocks (timeline-presentation, image-annotation, image-hotspot) difficult due to insufficient vertical space.

### Investigation Scope

1. **Custom XBlock Architecture** - How React studio editors integrate with OpenEdX
2. **edx-platform Modal System** - How the legacy modal system works and controls sizing
3. **frontend-app-authoring MFE** - How the new MFE handles XBlock editing
4. **Liverpool Theme** - Current theme customizations and where to add modal sizing

### Key Findings

#### 1. Modal Rendering Flow

```
User clicks "Edit" button
  ↓
container.js:editXBlock() handler
  ↓
EditXBlockModal class instantiated
  ↓
AJAX request to /xblock/{usage_key}/studio_view
  ↓
XBlock's studio_view() method returns Fragment
  ↓
React bootstrap loader executes
  ↓
React app renders inside modal-content div
  ↓
Modal displayed with modal-lg + modal-editor classes
```

#### 2. Current Modal Sizing

**Defined in:** `/edx-platform/cms/static/sass/elements/_modal-window.scss:385-390`

```scss
.modal-lg.modal-editor .modal-content {
    height: 435px;  // ← The constraint
    overflow-y: auto;
}
```

#### 3. Modal CSS Class Pattern

Every XBlock modal gets:
- `.modal-window` - Base modal
- `.modal-lg` - Large size variant
- `.modal-editor` - Editor-specific styling
- `.modal-type-{category}` - XBlock category (e.g., `modal-type-image-hotspot`)

This allows per-XBlock-type CSS targeting!

#### 4. Liverpool Theme Integration Point

**File:** `/tutor-liverpool-dental-legacy/.../cms/static/sass/course-unit-mfe-iframe-bundle.scss`
- 1,751 lines of modal/editor styling
- **No modal sizing rules currently defined**
- Perfect place to add modal size overrides
- Design tokens available: `$liverpool-content-max-width-admin` (1400px)

## Recommended Solutions

### ⭐ Solution 1: Theme-Based Sizing (RECOMMENDED)

**Pros:**
- Applies to all custom XBlocks consistently
- Centralized in Liverpool theme
- Uses design token system
- Easy to maintain

**Implementation:**
Add to `course-unit-mfe-iframe-bundle.scss`:

```scss
[class*="view-"] .wrapper .modal-window.modal-editor {
  max-width: $liverpool-content-max-width-admin !important; // 1400px
  width: 90vw !important;

  .modal-content {
    height: auto !important;
    min-height: 600px !important;
    max-height: 85vh !important;
    overflow-y: auto !important;
  }
}
```

**Deployment:**
```bash
cd ~/tutor-liverpool-dental-legacy
tutor images build mfe
tutor local restart cms
```

### Solution 2: Per-XBlock CSS Override

Add to each XBlock's `frontend/src/studio-ui/styles/minimal-paragon.scss`.

**Pros:** XBlock-specific control
**Cons:** Duplicated code, less maintainable

### Solution 3: Migrate to frontend-app-authoring MFE

Custom XBlocks already compatible with new MFE via `AdvancedEditor` iframe fallback.

**Pros:**
- Larger default modals (XL size)
- Modern React architecture
- Better responsive design

**Cons:**
- Requires MFE configuration
- Course-wide change

## Related Documentation

- [edx-platform Modal System Details](./01-edx-platform-modal-system.md)
- [frontend-app-authoring MFE Analysis](./02-frontend-app-authoring-mfe.md)
- [Liverpool Theme Integration](./03-liverpool-theme-integration.md)
- [Custom XBlock Architecture](./04-custom-xblock-architecture.md)

## Action Items

- [ ] Decide on solution approach (recommend Solution 1)
- [ ] Edit Liverpool theme SCSS file
- [ ] Rebuild MFE image
- [ ] Test with timeline-presentation XBlock
- [ ] Test with image-annotation XBlock
- [ ] Test with image-hotspot XBlock
- [ ] Document final implementation

## References

- OpenEdX Documentation: https://edx.readthedocs.io/
- Tutor Documentation: https://docs.tutor.edly.io/
- Paragon Design System: https://paragon-openedx.netlify.app/
