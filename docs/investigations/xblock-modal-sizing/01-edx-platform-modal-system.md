# edx-platform Modal System - Detailed Investigation

**Investigation Date:** 2025-11-28
**Directory:** `/Users/brainjam/edx-platform`

## Overview

This document details how the OpenEdX CMS Studio modal system works for XBlock editing, including JavaScript handlers, modal components, sizing controls, and backend endpoints.

## 1. Edit Button Click Handler

### Location
`/Users/brainjam/edx-platform/cms/static/js/views/pages/container.js`

### Event Binding
**Line 27:** `'click .edit-button': 'editXBlock'`

### Handler Method
**Lines 472-564:** `editXBlock: function(event, options)`

The handler performs three checks in order:

1. **New Editor Redirect** - For HTML, video, problem XBlocks with MFE editors
2. **Iframe Embed Messaging** - For Course Authoring MFE integration
3. **Legacy Modal** - Opens `EditXBlockModal` (our custom XBlocks use this)

### Alternative Handler
`/Users/brainjam/edx-platform/cms/static/js/views/module_edit.js`
- **Line 38:** `'click .edit-button': 'clickEditButton'`
- **Lines 96-103:** Creates `EditXBlockModal` and calls `modal.edit()`

## 2. Modal Component Architecture

### Primary Modal Class
`/Users/brainjam/edx-platform/cms/static/js/views/modals/edit_xblock.js`

### Class Hierarchy
```
EditXBlockModal (extends BaseModal)
  ├─ Uses: XBlockEditorView
  └─ Inherits from: BaseModal
```

### Key Configuration (Default Options)
```javascript
options: {
    modalName: 'edit-xblock',
    view: 'studio_view',
    viewSpecificClasses: 'modal-editor confirm',
    modalSize: 'lg',  // Large modal
    titleFormat: gettext('Editing: {title}'),
    addPrimaryActionButton: true
}
```

### Important Methods

#### `edit(xblockElement, rootXBlockInfo, options)` - Lines 39-54
Main entry point that initializes the modal with XBlock info.

#### `displayXBlock()` - Lines 62-71
Creates `XBlockEditorView` instance to render the XBlock's studio_view.

#### `onDisplayXBlock()` - Lines 104-141
Post-render configuration:
- Detects custom tabs (`hasCustomTabs()`)
- Detects custom buttons (`hasCustomButtons()`)
- Configures modal header and action buttons accordingly

## 3. Modal Sizing Control

### Base Modal Configuration
`/Users/brainjam/edx-platform/cms/static/js/views/modals/base_modal.js`

**Default Options (lines 32-47):**
```javascript
options: {
    modalSize: 'lg',        // Can be 'sm', 'med', or 'lg'
    modalName: 'basic',
    modalType: 'generic',
    viewSpecificClasses: '', // Additional CSS classes
}
```

### Modal Size CSS Classes
`/Users/brainjam/edx-platform/cms/static/sass/elements/_modal-window.scss`

#### Small Modal (modal-sm)
**Lines 316-323:**
```scss
.modal-window.modal-sm {
    width: 30%;
    min-width: 300px; // 15 * $baseline (20px)
}
```

#### Medium Modal (modal-med)
**Lines 327-334:**
```scss
.modal-window.modal-med {
    width: 40%;
    min-width: 360px; // 18 * $baseline
}
```

#### Large Modal (modal-lg)
**Lines 338-392:**
```scss
.modal-window.modal-lg {
    width: 95%;
    min-width: 550px; // 27.5 * $baseline

    // Special modal-editor variant (lines 347-391)
    &.modal-editor {
        .modal-content {
            height: 435px;  // ← THE CONSTRAINT
            overflow-y: auto;
        }

        // Editor mode buttons styling
        .editor-modes {
            // Tabs for Editor/Settings toggle
        }
    }
}
```

### Key Constraint

**Line 385-390:** Fixed height for editor modals
```scss
.modal-lg.modal-editor .modal-content {
    height: 435px;
    overflow-y: auto;
}
```

This is what restricts vertical space for custom XBlock editors.

## 4. SCSS/CSS File Structure

### Primary Modal Styles
`/Users/brainjam/edx-platform/cms/static/sass/elements/_modal-window.scss`

**Key Sections:**
- **Lines 11-311:** Base modal window styles
- **Lines 338-392:** Large modal (modal-lg) styles
- **Lines 347-391:** Modal editor specific (modal-lg.modal-editor)
- **Lines 470-578:** Video modal overrides (modal-lg.modal-type-video)

### Modal Template
`/Users/brainjam/edx-platform/cms/templates/js/basic-modal.underscore`

**Structure:**
```html
<div class="modal-window modal-{size} modal-type-{type} {viewSpecificClasses}">
    <div class="modal-header">
        <h2 class="modal-title">{title}</h2>
        <button class="action-close">×</button>
    </div>
    <div class="modal-content">
        <!-- XBlock studio_view renders here -->
    </div>
    <div class="modal-actions">
        <button class="action-cancel">Cancel</button>
        <button class="action-save">Save</button>
    </div>
</div>
```

## 5. Custom vs Default XBlock Rendering

### XBlock Editor View
`/Users/brainjam/edx-platform/cms/static/js/views/xblock_editor.js`

### Custom Detection Methods (Lines 54-60)

```javascript
hasCustomTabs: function() {
    return this.$('.editor-with-tabs').length > 0;
},

hasCustomButtons: function() {
    return this.$('.editor-with-buttons').length > 0;
}
```

### Rendering Behavior (EditXBlockModal lines 113-139)

#### 1. Custom Tabs XBlock (e.g., Video)
- Hides default modal header
- XBlock provides own header with tabs
- Example: Video XBlock with Basic/Advanced/Transcripts tabs

#### 2. Standard XBlock with Editor + Settings
- Shows title editor button in header
- Adds "Editor" and "Settings" mode buttons
- Toggles between data editor and metadata editor

#### 3. Custom Buttons XBlock
- XBlock provides own action buttons
- Default modal action bar hidden
- Full control over save/cancel flow

### Our Custom XBlocks
Currently use **default modal behavior** (no custom tabs/buttons), so they get:
- Standard modal header with title
- Standard save/cancel buttons
- 435px height constraint

## 6. Configuration Options for Modal Dimensions

### JavaScript Options Override

**Example from container.js (lines 722-729):**
```javascript
editVisibilitySettings: function(event) {
    this.editXBlock(event, {
        view: 'visibility_view',
        titleFormat: gettext('Editing access for: {title}'),
        viewSpecificClasses: '',  // Override 'modal-editor confirm'
        modalSize: 'med'          // Override default 'lg'
    });
}
```

### XBlock Category-Based Styling

**Line 42 in edit_xblock.js:**
```javascript
this.options.modalType = this.xblockInfo.get('category')
```

This adds CSS class: `modal-type-{category}` to the modal window.

**Examples:**
- `modal-type-video`
- `modal-type-html`
- `modal-type-problem`
- `modal-type-image-hotspot` ← Our custom XBlock

### Per-XBlock CSS Customization

XBlocks can target their modal with CSS:
```scss
// In XBlock's studio-ui.css or theme
.modal-type-image-hotspot {
    max-width: 1400px !important;
    width: 90vw !important;

    .modal-content {
        height: auto !important;
        min-height: 700px !important;
    }
}
```

## 7. Backend Endpoint for studio_view

### Primary Handler
`/Users/brainjam/edx-platform/cms/djangoapps/contentstore/views/block.py`

**URL Pattern:** `/xblock/{usage_key_string}/{view_name}`

**Main Function:** `xblock_view_handler(request, usage_key_string, view_name)` (Lines 148-306)

### Request Flow

```python
def xblock_view_handler(request, usage_key_string, view_name):
    # 1. Permission check (lines 151-162)
    has_studio_read_access(user, usage_key.context_key)

    # 2. Get XBlock from modulestore (lines 167-168)
    xblock = get_xblock(usage_key, request.user)

    # 3. Add runtime wrappers (lines 177-184)
    xblock = wrap_xblock_aside_if_needed(...)

    # 4. Render studio_view (lines 196-211)
    fragment = xblock.render(view_name, context)

    # 5. Return JSON (lines 292-301)
    return JsonResponse({
        'html': fragment.content,
        'resources': fragment.resources
    })
```

### Service Function
`/Users/brainjam/edx-platform/cms/djangoapps/contentstore/xblock_storage_handlers/view_handlers.py`

### XBlock Wrapper
`/Users/brainjam/edx-platform/openedx/core/lib/xblock_utils/__init__.py`

**wrap_xblock Function (lines 65-150):**

Adds CSS classes to XBlock wrapper:
- **Line 124-126:** Adds `xmodule_edit` for STUDIO_VIEW
- **Line 128:** Adds `xmodule_{ClassName}`
- **Lines 105-112:** Standard xblock classes

### Full Request Lifecycle

```
1. User clicks "Edit" button
   ↓
2. JavaScript: container.js editXBlock()
   → new EditXBlockModal()
   ↓
3. Modal: edit_xblock.js edit()
   → displayXBlock()
   ↓
4. Editor: xblock_editor.js render()
   → AJAX GET /xblock/{usage_key}/studio_view
   ↓
5. Backend: block.py xblock_view_handler()
   → loads XBlock
   → calls xblock.render('studio_view')
   → wraps in xblock_utils.wrap_xblock()
   → returns JSON: {html, resources}
   ↓
6. Frontend: xblock.js handleXBlockFragment()
   → loads CSS/JS resources
   → inserts HTML into .modal-content
   ↓
7. Modal: edit_xblock.js onDisplayXBlock()
   → configures buttons/header
   → shows modal with 435px height
   ↓
8. Bootstrap: static/studio.js executes
   → dynamic import of studio-ui.js
   → renderBlock(runtime, element, data)
   ↓
9. React: React.createRoot().render(<StudioView />)
   ↓
10. User edits content (constrained by 435px)
```

## 8. How to Override Modal Size

### Method 1: Theme CSS Override (Recommended)
```scss
// In Liverpool theme or XBlock CSS
.modal-type-{your-category} {
    max-width: 1400px !important;
    width: 90vw !important;

    .modal-content {
        height: auto !important;
        min-height: 600px !important;
        max-height: 85vh !important;
    }
}
```

### Method 2: XBlock Fragment CSS
```python
# In XBlock's studio_view()
fragment.add_css("""
    .modal-type-image-hotspot .modal-content {
        height: auto !important;
        min-height: 700px !important;
    }
""")
```

**Note:** Fragment CSS loads after modal creation, so may cause flash of small modal.

### Method 3: Modify Core (Not Recommended)
Edit `/edx-platform/cms/static/sass/elements/_modal-window.scss` directly.

**Cons:**
- Core modification
- Lost on upgrades
- Affects all modals

## Key Takeaways

1. **Modal size is controlled by CSS** in `_modal-window.scss`
2. **Per-XBlock targeting** is possible via `.modal-type-{category}` class
3. **435px height constraint** is the main restriction
4. **Best override location** is in Liverpool theme SCSS
5. **JavaScript options** don't directly support height override
6. **Backend has no control** over modal sizing (pure frontend)

## Related Files

- `cms/static/js/views/modals/edit_xblock.js` - Modal controller
- `cms/static/js/views/modals/base_modal.js` - Base modal class
- `cms/static/js/views/xblock_editor.js` - Editor view
- `cms/static/js/views/pages/container.js` - Edit handler
- `cms/static/sass/elements/_modal-window.scss` - All modal styles
- `cms/templates/js/basic-modal.underscore` - Modal template
- `cms/djangoapps/contentstore/views/block.py` - Backend handler
