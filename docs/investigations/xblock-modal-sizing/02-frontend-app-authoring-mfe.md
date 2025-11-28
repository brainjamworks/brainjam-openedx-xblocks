# frontend-app-authoring MFE - Detailed Investigation

**Investigation Date:** 2025-11-28
**Directory:** `/Users/brainjam/frontend-app-authoring`

## Overview

The frontend-app-authoring MFE is OpenEdX's modern React-based course authoring interface. This document analyzes how it handles XBlock editing and whether custom XBlocks can integrate with it.

## 1. XBlock Editing Architecture

### Dual-Mode System

The MFE implements **two different editing modes**:

#### A. React-Based Editors (V2 Content Editors)
**Location:** `/Users/brainjam/frontend-app-authoring/src/editors/`

**Supported XBlock Types Only:**
- `html` - Text/HTML editor with TinyMCE
- `video` - Video configuration editor
- `problem` - Problem editor
- `video_upload` - Video upload interface
- `game` - Custom game editor

**File:** `src/editors/supportedEditors.ts`
```typescript
const supportedEditors = {
  [blockTypes.html]: TextEditor,
  [blockTypes.video]: VideoEditor,
  [blockTypes.problem]: ProblemEditor,
  [blockTypes.video_upload]: VideoUploadEditor,
  [blockTypes.game]: GameEditor,
}
```

#### B. Advanced Editor (Iframe Fallback)
**Location:** `src/editors/AdvancedEditor.tsx`

**For ALL OTHER XBlocks** including custom XBlocks:
- Renders XBlock's `studio_view` in an iframe
- Uses `/xblocks/v2/{usageKey}/embed/studio_view/` endpoint
- **This is how your custom XBlocks work in the MFE!**

### Routing Structure

**Route Pattern:** `/course/:courseId/editor/:blockType/:blockId?`

**Flow:**
```
CourseAuthoringRoutes.jsx
  ↓
EditorContainer.tsx
  ↓
EditorPage.tsx
  ↓
Editor.tsx
  ↓
Check if blockType in supportedEditors
  ├─ YES → Load React-based editor (TextEditor, VideoEditor, etc.)
  └─ NO  → Load AdvancedEditor (iframe with studio_view)
```

## 2. Integration for Custom XBlocks

### Entry Points for Editing

Custom XBlocks are edited through **two mechanisms**:

#### Mechanism 1: Direct Edit Button (Iframe Modal)
**Location:** Unit container iframe
**File:** `src/course-unit/xblock-container-iframe/index.tsx`

**Message Types:**
- `editXBlock` - Opens legacy edit modal
- `newXBlockEditor` - Opens MFE editor route

**Flow:**
```javascript
// Message from iframe
{
  type: 'editXBlock',
  usageId: 'block-v1:...',
  blockType: 'image-hotspot'
}

// Handler response
window.location.href = `/course/${courseId}/editor/image-hotspot/${blockId}`;
```

#### Mechanism 2: Component Picker / Add Component
**Location:** `src/course-unit/add-component/AddComponent.jsx`

**For creating new components:**
```javascript
handleCreateNewCourseXBlock({
  type: moduleName,
  category: moduleName,
  parentLocator: blockId
})
```

### Backend Communication

**API Endpoints:**
File: `src/editors/data/services/cms/urls.ts`

```typescript
// Get XBlock data
GET {STUDIO_BASE_URL}/xblock/{blockId}

// Save XBlock
POST {STUDIO_BASE_URL}/xblock/{blockId}

// Create XBlock
POST {STUDIO_BASE_URL}/xblock/

// Studio view (v1)
GET {STUDIO_BASE_URL}/xblock/{blockId}/studio_view

// Studio view (v2)
GET {STUDIO_BASE_URL}/api/xblock/v2/xblocks/{blockId}/view/studio_view/
```

## 3. React-Based Editing Interface

### Modal System

**All editors use Paragon's ModalDialog:**
File: `src/editors/containers/EditorContainer/index.tsx`

**Default Configuration:**
- Modal size: `xl` (extra large) ← Much larger than legacy 435px!
- Responsive: Full-screen on mobile
- Sticky header/footer
- Dirty state tracking

### Editor Container Pattern

```tsx
<EditorModalWrapper onClose={confirmCancelIfDirty}>
  <ModalDialog.Header>
    <ModalDialog.Title>
      <TitleHeader />
    </ModalDialog.Title>
    <ModalDialog.CloseButton />
  </ModalDialog.Header>

  <ModalDialog.Body>
    {/* Editor-specific content */}
    <TextEditor /> or <VideoEditor /> or <AdvancedEditor />
  </ModalDialog.Body>

  <ModalDialog.Footer>
    <ActionRow>
      <CancelButton onClick={confirmCancelIfDirty} />
      <SaveButton onClick={handleSave} />
    </ActionRow>
  </ModalDialog.Footer>
</EditorModalWrapper>
```

### Data Flow for React Editors

```
1. Load block data
   fetchBlockById({ blockId, studioEndpointUrl })
   ↓
2. Parse and normalize for editor
   (Editor-specific parsing)
   ↓
3. User edits in React interface
   (State managed in React)
   ↓
4. On save: Convert to XBlock format
   normalizeContent({ blockId, blockType, content })
   ↓
5. POST to backend
   saveBlock({ blockId, blockType, content, title })
   ↓
6. Return to unit/course view
```

### Data Flow for Advanced Editor (Custom XBlocks)

```
1. Load studio_view in iframe
   <iframe src="/xblocks/v2/{usageKey}/embed/studio_view/" />
   ↓
2. XBlock's React app renders inside iframe
   (Your existing bootstrap → React flow)
   ↓
3. User edits with your custom React interface
   ↓
4. XBlock handles save via runtime.notify('save')
   ↓
5. Iframe sends message to parent
   window.parent.postMessage({ type: 'plugin.resize' })
   ↓
6. MFE refreshes XBlock view
```

## 4. Modal/Editor Sizing Configuration

### Modal Sizes Available

From Paragon's ModalDialog component:
- `sm` - Small
- `md` - Medium
- `lg` - Large
- `xl` - Extra Large (used for all XBlock editors)
- `fullscreen` - Full screen

**XBlock editors use:** `size="xl"`

### Iframe Height Management

**File:** `src/generic/hooks/useIframeBehavior.tsx`

**Dynamic Height Adjustment:**
```typescript
// Listen for resize messages from iframe
useEffect(() => {
  const handleMessage = (event) => {
    if (event.data.type === 'plugin.resize') {
      const newHeight = event.data.payload.height + 10;
      setIframeHeight(`${newHeight}px`);
    }
  };

  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}, []);
```

**Your XBlock should send:**
```javascript
// In your React studio view
window.parent.postMessage({
  type: 'plugin.resize',
  payload: { height: document.body.scrollHeight }
}, '*');
```

### Constants

**File:** `src/constants.js`
```javascript
export const IFRAME_FEATURE_POLICY =
  'microphone *; camera *; midi *; geolocation *; ' +
  'encrypted-media *; clipboard-write *';
```

## 5. Backend Communication

### Authentication & Configuration

**Base URLs:**
```javascript
const studioBaseUrl = getConfig().STUDIO_BASE_URL;  // http://localhost:18010
const lmsBaseUrl = getConfig().LMS_BASE_URL;        // http://localhost:18000
```

**Authentication:**
All API calls use `@edx/frontend-platform/auth` for token handling.

### Key API Methods

**File:** `src/editors/data/services/cms/api.ts`

```typescript
// Fetch XBlock data
fetchBlockById({ blockId, studioEndpointUrl }) {
  return fetch(`${studioEndpointUrl}/xblock/${blockId}`)
    .then(response => response.json());
}

// Save XBlock
saveBlock({ blockId, blockType, content, learningContextId, title }) {
  const normalizedContent = normalizeContent(...);
  return fetch(`${studioEndpointUrl}/xblock/${blockId}`, {
    method: 'POST',
    body: JSON.stringify(normalizedContent)
  });
}

// Fetch studio view HTML
fetchStudioView({ blockId, studioEndpointUrl }) {
  return fetch(`${studioEndpointUrl}/xblock/${blockId}/studio_view`)
    .then(response => response.json());
}

// Normalize content for API
normalizeContent({ blockId, blockType, content, title }) {
  // Format varies by blockType
  // Custom XBlocks handle their own normalization
}
```

### Message Passing (Iframe Communication)

**File:** `src/course-unit/constants.js`

**Key Message Types:**
```javascript
// From parent to iframe
'newXBlockEditor'      // Open editor for XBlock
'editXBlock'          // Open legacy modal
'refreshXBlock'       // Reload after save
'deleteXBlock'        // Delete XBlock
'duplicateXBlock'     // Duplicate XBlock
'manageXBlockAccess'  // Edit visibility

// From iframe to parent
'plugin.resize'       // Update iframe height
'modal.close'         // Close modal
'xblock.save'         // XBlock saved
```

## 6. Application Architecture & Entry Points

### Main Application Flow

#### 1. Entry Point
**File:** `src/index.jsx`
- Initializes React Router
- Sets up Redux store
- Configures React Query client
- Wraps with auth and i18n providers

#### 2. Course Routes
**File:** `src/CourseAuthoringRoutes.jsx`
**Route:** `/course/:courseId/*`

**Sub-routes:**
- `/editor/:blockType/:blockId?` - XBlock editors
- `/container/:blockId` - Container/unit view
- `/course-outline` - Course structure
- `/videos` - Video management
- `/settings` - Course settings

#### 3. Unit View
**File:** `src/course-unit/CourseUnit.jsx`
- Displays unit with XBlocks in iframe
- Iframe URL: `{STUDIO_BASE_URL}/container_embed/{blockId}`
- Handles postMessage communication

**Iframe Container:**
**File:** `src/course-unit/xblock-container-iframe/index.tsx`
```tsx
<iframe
  id={`unit-iframe-${blockId}`}
  src={`${studioBaseUrl}/container_embed/${blockId}`}
  title="Unit Content"
  style={{ height: iframeHeight }}
  allow={IFRAME_FEATURE_POLICY}
/>
```

#### 4. Editor System
**File:** `src/editors/Editor.tsx`

**Logic:**
```typescript
const Editor = ({ blockType, blockId }) => {
  const EditorComponent = supportedEditors[blockType];

  if (EditorComponent) {
    // React-based editor
    return <EditorComponent blockId={blockId} />;
  } else {
    // Fallback to iframe
    return <AdvancedEditor blockId={blockId} />;
  }
};
```

### Redux Store Structure

**File:** `src/store.js`

**Slices:**
- `courseDetail` - Course metadata and settings
- `requests` - API request states
- `app` - Global app state
- `courseOutline` - Course structure data
- `courseUnit` - Unit-level data
- `videos` - Video gallery state

### Feature Toggles (Waffle Flags)

**File:** `src/data/selectors.js`

**Key Flags:**
```javascript
getWaffleFlags(state) {
  return state.courseDetail?.waffleFlags;
}

// Important flags:
'new_core_editors.use_new_text_editor'
'new_core_editors.use_new_video_editor'
'new_core_editors.use_new_problem_editor'
'useVideoGalleryFlow'
'useReactMarkdownEditor'
```

## 7. Can Custom XBlocks Use This Interface?

### YES - Already Supported! ✅

Custom XBlocks **automatically work** through the AdvancedEditor fallback mechanism.

### What Works Today

#### 1. Automatic Fallback
- Any XBlock type not in `supportedEditors` uses AdvancedEditor
- AdvancedEditor loads your `studio_view` in an iframe
- **No changes required** to your XBlock code

#### 2. Integration Requirements
Your XBlock should:
```python
# Standard studio_view implementation
def studio_view(self, context=None):
    fragment = Fragment()
    fragment.add_content(self.render_template('studio.html'))
    fragment.add_javascript_url(...)
    fragment.add_css_url(...)
    return fragment
```

```javascript
// Send height updates from your React app
window.parent.postMessage({
  type: 'plugin.resize',
  payload: { height: document.body.scrollHeight }
}, '*');

// Listen for save events (optional)
window.addEventListener('message', (event) => {
  if (event.data.type === 'xblock-event' &&
      event.data.eventName === 'save') {
    // Handle external save trigger
  }
});
```

### Benefits Over Legacy Modal

✅ **Larger modal size** - `xl` instead of legacy `lg` with 435px height
✅ **Better responsive design** - Full-screen on mobile
✅ **Modern UI** - Paragon design system
✅ **Dirty state tracking** - Warns before closing with unsaved changes
✅ **Toast notifications** - Better error/success messages

### What Doesn't Work (Yet)

❌ **No plugin system** for custom React editors
❌ **Can't add to supportedEditors** without modifying MFE
❌ **Can't customize modal size per XBlock**
❌ **No direct access to MFE state/Redux**

### To Add Full React Editor Support

Would require modifying the MFE:

1. **Add block type** to `src/editors/data/constants/app.ts`
2. **Create React component** in `src/editors/containers/YourEditor/`
3. **Register in** `src/editors/supportedEditors.ts`
4. **Implement data normalization** in `src/editors/data/services/cms/api.ts`

**Example:**
```typescript
// src/editors/supportedEditors.ts
import ImageHotspotEditor from './containers/ImageHotspotEditor';

const supportedEditors = {
  [blockTypes.html]: TextEditor,
  [blockTypes.video]: VideoEditor,
  [blockTypes.problem]: ProblemEditor,
  [blockTypes.imageHotspot]: ImageHotspotEditor,  // Add custom
}
```

## 8. Comparison: Legacy Modal vs MFE

| Feature | Legacy Modal | MFE AdvancedEditor |
|---------|-------------|-------------------|
| **Size** | 95% width, 435px height | XL modal, dynamic height |
| **Responsive** | Fixed sizing | Full-screen on mobile |
| **UI Framework** | jQuery + Bootstrap | React + Paragon |
| **Height Adjustment** | Fixed | Dynamic via postMessage |
| **Code Changes** | None required | None required |
| **User Experience** | Basic | Modern, polished |
| **Dirty State** | Basic | Advanced with warnings |
| **Notifications** | Alert dialogs | Toast messages |

## Key Takeaways

1. **Custom XBlocks work automatically** via AdvancedEditor iframe fallback
2. **No code changes needed** - existing `studio_view` implementation works
3. **Better UX than legacy modal** - larger size, better responsive design
4. **Communication via postMessage** - standard iframe messaging pattern
5. **Optional height reporting** - send `plugin.resize` messages for dynamic sizing
6. **MFE can be enabled** without breaking custom XBlocks

## Recommendation

Consider migrating to the MFE for better UX, but the legacy modal sizing issue can be fixed with theme CSS as a quicker solution.

## Related Files

**Core Editor Files:**
- `src/editors/Editor.tsx` - Editor router
- `src/editors/AdvancedEditor.tsx` - Iframe fallback for custom XBlocks
- `src/editors/containers/EditorContainer/index.tsx` - Modal wrapper
- `src/editors/supportedEditors.ts` - Registry of React editors

**API & Communication:**
- `src/editors/data/services/cms/api.ts` - Backend API methods
- `src/generic/hooks/useIframeBehavior.tsx` - Iframe height management
- `src/course-unit/constants.js` - Message type constants

**Routing & Structure:**
- `src/index.jsx` - App entry point
- `src/CourseAuthoringRoutes.jsx` - Main routes
- `src/course-unit/CourseUnit.jsx` - Unit view with XBlocks
