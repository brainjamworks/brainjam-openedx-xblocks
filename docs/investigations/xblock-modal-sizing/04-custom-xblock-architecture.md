# Custom XBlock Architecture - React Studio Editors

**Investigation Date:** 2025-11-28
**Directory:** `/Users/brainjam/brainjam-openedx-xblocks`

## Overview

This document details the architecture of the custom XBlocks in this repository, focusing on how React-based studio editors integrate with OpenEdX's Python XBlock framework.

## 1. XBlock Portfolio

### Discovered XBlocks

1. **accordion** - Collapsible sections with rich content
2. **audio-player-xblock** - Audio playback with controls
3. **content-blocks** - Generic content containers
4. **drag-drop-matching-xblock** - Interactive matching problems
5. **flashcards** - Flip-card learning tool
6. **image-annotation-xblock** - Label placement on images (gradable)
7. **image-commentary-xblock** - Marker-based image commentary
8. **image-hotspot-xblock** - Clickable regions on images (gradable)
9. **sort-into-bins-xblock** - Categorization problems
10. **tabs** - Tabbed content interface
11. **timeline-presentation-xblock** - Audio-synchronized animations

## 2. Studio Editor Architecture

### React Component Structure

Every XBlock follows a **consistent architectural pattern**:

```
xblocks/{xblock-name}/
├── {xblock_name}/              # Python package
│   ├── __init__.py
│   ├── {xblock}.py            # Main XBlock class
│   ├── static/
│   │   └── studio.js          # Bootstrap loader (never changes)
│   └── public/                # Build output
│       ├── studio-ui.js       # Vite-built React bundle
│       ├── studio-ui.css      # Vite-built CSS
│       ├── student-ui.js      # Student view bundle
│       └── student-ui.css
└── frontend/
    ├── package.json
    ├── vite.config.ts
    └── src/
        ├── common/            # Shared code
        │   ├── types.ts       # TypeScript interfaces
        │   └── api.ts         # API helpers
        ├── studio-ui/         # Studio editor
        │   ├── index.tsx      # Entry point with renderBlock()
        │   ├── StudioView.tsx # Main component
        │   ├── components/    # Sub-components
        │   └── styles/
        │       └── minimal-paragon.scss
        └── student-ui/        # Student view
            └── index.tsx
```

### Entry Point Pattern

**File:** `frontend/src/studio-ui/index.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import StudioView from './StudioView';

export function renderBlock(
  runtime: XBlockRuntime,
  element: HTMLElement,
  data: StudioViewData
) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <IntlProvider locale="en">
      <StudioView runtime={runtime} fields={data.fields} />
    </IntlProvider>
  );
}
```

### Bootstrap Loader Pattern

**File:** `{xblock_name}/static/studio.js`

**Critical property:** This file should NEVER change after initial setup (browser caching)

```javascript
function ImageHotspotStudioView(runtime, element, data) {
  const errorContainer = document.createElement('div');
  errorContainer.className = 'xblock-studio-error';

  import(data.url)
    .then(module => {
      const { renderBlock } = module;
      const domElement = element.get ? element.get(0) : element;
      renderBlock(runtime, domElement, data);
    })
    .catch(error => {
      console.error('Failed to load studio editor:', error);
      errorContainer.innerHTML = `
        <div style="padding: 20px; background: #fee; border: 1px solid #c33;">
          <h3>Failed to load studio editor</h3>
          <p>Please refresh the page or contact support.</p>
        </div>
      `;
      const domElement = element.get ? element.get(0) : element;
      domElement.appendChild(errorContainer);
    });
}
```

**Why this pattern?**
- Minimal bootstrap file (cached by browser)
- Actual React bundle can change without cache issues
- Graceful error handling
- Unwraps jQuery elements (OpenEdX passes jQuery, React needs DOM)

## 3. Python ↔ React Data Flow

### Initialization (Python → React)

#### Step 1: Python `studio_view()` Method

```python
class ImageHotspotXBlock(XBlock):
    # XBlock fields
    display_name = String(default="Image Hotspot")
    question_text = String(default="")
    hotspots = List(default=[])
    image_url = String(default="")

    def studio_view(self, context=None):
        frag = Fragment()

        # 1. Add bootstrap loader (cached)
        bootstrap_js = self.resource_string("static/studio.js")
        frag.add_javascript(bootstrap_js)

        # 2. Load Paragon CSS from CDN (runtime)
        frag.add_css_url(
            'https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css'
        )
        frag.add_css_url(
            'https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css'
        )

        # 3. Add XBlock custom styles (built by Vite)
        frag.add_css_url(
            self.runtime.local_resource_url(self, 'public/studio-ui.css')
        )

        # 4. Initialize React app with data
        frag.initialize_js('ImageHotspotStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                'display_name': self.display_name,
                'question_text': self.question_text,
                'hotspots': self.hotspots,
                'image_url': self.image_url,
                'course_id': str(self.runtime.course_id),
            }
        })

        return frag
```

#### Step 2: Bootstrap Receives Data

```javascript
// OpenEdX calls this function with the data from initialize_js
function ImageHotspotStudioView(runtime, element, data) {
    // data.url = '/asset/..../public/studio-ui.js'
    // data.fields = { display_name: "...", ... }

    import(data.url).then(module => {
        const { renderBlock } = module;
        renderBlock(runtime, element, data);
    });
}
```

#### Step 3: React Component Receives Props

```typescript
interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: {
    display_name: string;
    question_text: string;
    hotspots: Hotspot[];
    image_url: string;
    course_id: string;
  };
}

export default function StudioView({ runtime, fields }: StudioViewProps) {
  const [displayName, setDisplayName] = useState(fields.display_name);
  const [questionText, setQuestionText] = useState(fields.question_text);
  const [hotspots, setHotspots] = useState(fields.hotspots);
  const [imageUrl, setImageUrl] = useState(fields.image_url);

  // ... editor logic
}
```

### Saving Data (React → Python)

#### Step 1: React Calls Handler via API Helper

**File:** `frontend/src/common/api.ts`

```typescript
export async function xblockPost<T>(
  runtime: XBlockRuntime,
  handler: string,
  data: any = {}
): Promise<XBlockResponse<T>> {
  const url = runtime.handlerUrl(runtime.element, handler);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCSRFToken(), // Critical for security
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

function getCSRFToken(): string {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken='));
  return cookie ? cookie.split('=')[1] : '';
}
```

**Usage in StudioView:**

```typescript
import { xblockPost } from '../common/api';

const handleSave = async () => {
  try {
    const result = await xblockPost(runtime, 'save_data', {
      display_name: displayName,
      question_text: questionText,
      hotspots: hotspots,
      image_url: imageUrl,
    });

    if (result.success) {
      runtime.notify('save', { state: 'end' });
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (error) {
    console.error('Save failed:', error);
    alert('Failed to save. Please try again.');
  }
};
```

#### Step 2: Python Handler Receives and Validates

```python
@XBlock.json_handler
def save_data(self, data, suffix=''):
    """Save studio editor data"""
    # Validate
    if not data.get('display_name', '').strip():
        return {
            'success': False,
            'error': 'Display name is required'
        }

    # Save to XBlock fields
    self.display_name = data.get('display_name')
    self.question_text = data.get('question_text')
    self.hotspots = data.get('hotspots', [])
    self.image_url = data.get('image_url')

    # Validate hotspots structure
    for hotspot in self.hotspots:
        if not all(k in hotspot for k in ['x', 'y', 'width', 'height']):
            return {
                'success': False,
                'error': 'Invalid hotspot data'
            }

    return {'success': True}
```

### Asset Upload Pattern

For uploading images to OpenEdX contentstore:

```typescript
export async function uploadAsset(
  file: File,
  courseId: string
): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`/assets/${courseId}/`, {
    method: 'POST',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
    body: formData,
  });

  const result = await response.json();
  return result.asset.url; // Return asset URL for XBlock field
}
```

**No custom Python handler needed** - uses OpenEdX contentstore API directly.

## 4. Studio Editor Implementation Patterns

### Pattern A: Simple Content Editor

**Used by:** Accordion, Tabs, Flashcards, Content Blocks

**Characteristics:**
- Single view with form fields
- TinyMCE integration for rich text
- Drag-and-drop reordering of items
- Sticky save/cancel buttons

**Example Structure:**
```tsx
<Container>
  <Form>
    <Form.Group>
      <Form.Label>Display Name</Form.Label>
      <Form.Control value={displayName} onChange={...} />
    </Form.Group>

    <SortableList items={items} onReorder={...}>
      {item => (
        <Card>
          <TinyMCEEditor value={item.content} onChange={...} />
        </Card>
      )}
    </SortableList>
  </Form>

  <ActionRow sticky>
    <Button variant="tertiary" onClick={handleCancel}>Cancel</Button>
    <Button onClick={handleSave}>Save</Button>
  </ActionRow>
</Container>
```

### Pattern B: Visual Canvas Editor

**Used by:** Image Hotspot, Image Commentary, Image Annotation

**Characteristics:**
- Canvas-based interaction using Konva.js
- Percentage-based positioning (0-100% for responsive scaling)
- Image upload with contentstore integration
- Wizard or tabbed configuration flow

**Example Structure:**
```tsx
<Tabs>
  <Tab title="Image">
    <ImageUploader onUpload={handleImageUpload} />
  </Tab>

  <Tab title="Hotspots">
    <KonvaStage
      width={stageWidth}
      height={stageHeight}
      onMouseDown={handleCanvasClick}
    >
      <Layer>
        <Image image={loadedImage} />
        {hotspots.map(hotspot => (
          <Rect
            x={hotspot.x * stageWidth / 100}
            y={hotspot.y * stageHeight / 100}
            width={hotspot.width * stageWidth / 100}
            height={hotspot.height * stageHeight / 100}
            draggable
            onDragEnd={handleHotspotMove}
          />
        ))}
      </Layer>
    </KonvaStage>
  </Tab>

  <Tab title="Settings">
    <Form>
      {/* Configuration options */}
    </Form>
  </Tab>
</Tabs>

<ActionRow sticky>
  <Button onClick={handleSave}>Save</Button>
</ActionRow>
```

**Coordinate Storage:**
```typescript
// Store as percentages for responsive scaling
const hotspot = {
  x: (absoluteX / stageWidth) * 100,    // 0-100%
  y: (absoluteY / stageHeight) * 100,   // 0-100%
  width: (rectWidth / stageWidth) * 100,
  height: (rectHeight / stageHeight) * 100,
};
```

### Pattern C: Timeline/Animation Editor

**Used by:** Timeline Presentation

**Characteristics:**
- Complex multi-tab interface
- Waveform visualization
- Visual editor with zoom controls
- Event-based timeline management
- GSAP animation integration

**Example Structure:**
```tsx
<Tabs>
  <Tab title="Timeline">
    <WaveformTimeline
      audioUrl={audioUrl}
      events={events}
      onEventAdd={handleEventAdd}
      onEventMove={handleEventMove}
    />
  </Tab>

  <Tab title="Visual Editor">
    <VisualEditor
      elements={elements}
      zoom={zoom}
      onZoomChange={setZoom}
    >
      <KonvaStage width={editorWidth} height={editorHeight}>
        <Layer>
          {elements.map(el => (
            <ElementRenderer element={el} zoom={zoom} />
          ))}
        </Layer>
      </KonvaStage>
    </VisualEditor>
  </Tab>

  <Tab title="Events">
    <EventList
      events={events}
      onEventSelect={setSelectedEvent}
    />
  </Tab>

  <Tab title="Preview">
    <AnimationPreview
      elements={elements}
      events={events}
      audioUrl={audioUrl}
    />
  </Tab>
</Tabs>
```

## 5. Common Features Across All XBlocks

### OpenEdX Runtime Integration

All XBlocks use the runtime API:

```typescript
// Notify save started
runtime.notify('save', { state: 'start' });

// Save via handler
await xblockPost(runtime, 'save_data', {...});

// Notify save completed (closes modal)
runtime.notify('save', { state: 'end' });

// Cancel editing (closes modal without save)
runtime.notify('cancel', {});

// Generate handler URLs
const url = runtime.handlerUrl(runtime.element, 'my_handler');
```

### Validation

**Client-side:**
```typescript
const validate = () => {
  const errors: string[] = [];

  if (!displayName.trim()) {
    errors.push('Display name is required');
  }

  if (hotspots.length === 0) {
    errors.push('At least one hotspot is required');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
    return false;
  }

  return true;
};
```

**Server-side:**
```python
@XBlock.json_handler
def save_data(self, data, suffix=''):
    errors = []

    if not data.get('display_name', '').strip():
        errors.append('Display name is required')

    if not data.get('hotspots'):
        errors.append('At least one hotspot is required')

    if errors:
        return {'success': False, 'error': '; '.join(errors)}

    # Save...
    return {'success': True}
```

### Asset Management

**Image upload via contentstore:**
```typescript
const handleImageSelect = async (file: File) => {
  try {
    const assetUrl = await uploadAsset(file, fields.course_id);
    setImageUrl(assetUrl);
  } catch (error) {
    alert('Failed to upload image');
  }
};
```

**Asset picker for existing course assets:**
```typescript
const handleSelectExisting = () => {
  // Opens OpenEdX asset picker modal
  runtime.notify('asset_picker', {
    callback: (assetUrl: string) => {
      setImageUrl(assetUrl);
    }
  });
};
```

## 6. Build Configuration

### Vite Configuration

**File:** `frontend/vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const lib = process.env.COMPONENT || 'studio-ui';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, `../${xblock_name}/public`),
    lib: {
      entry: resolve(__dirname, `src/${lib}/index.tsx`),
      formats: ['es'], // ES modules for dynamic import
      fileName: () => `${lib}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // May or may not externalize
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
```

### Build Scripts

**File:** `frontend/package.json`

```json
{
  "scripts": {
    "build:student": "COMPONENT=student-ui npm run _build",
    "build:studio": "COMPONENT=studio-ui npm run _build",
    "build": "npm run build:student && npm run build:studio",
    "_build": "vite build",
    "dev": "vite"
  }
}
```

### Style Architecture

**Paragon CSS Loading:**
- Loaded from CDN at runtime (not bundled)
- Two files required:
  - `core.min.css` - Component styles
  - `light.min.css` - Theme tokens

**XBlock Custom Styles:**
**File:** `frontend/src/studio-ui/styles/minimal-paragon.scss`

```scss
// Import Liverpool design tokens
@import '../../../../../../liverpool-dental-theme/shared/liverpool-core-tokens';

// XBlock-specific styles only
.image-hotspot-studio {
  // Use Liverpool tokens
  padding: $liverpool-spacing-4;

  .canvas-container {
    border: 1px solid $liverpool-color-gray-300;
    border-radius: $liverpool-border-radius-base;
  }
}

// Minimal CSS footprint - only what's needed
```

## 7. TypeScript Interfaces

### Common Types

**File:** `frontend/src/common/types.ts`

```typescript
export interface XBlockRuntime {
  handlerUrl: (element: HTMLElement, handler: string) => string;
  notify: (event: string, data: any) => void;
  element: HTMLElement;
}

export interface XBlockResponse<T = any> {
  success: boolean;
  error?: string;
  data?: T;
}

export interface StudioViewData {
  url: string;
  fields: Record<string, any>;
}

// XBlock-specific
export interface Hotspot {
  id: string;
  x: number;        // Percentage (0-100)
  y: number;        // Percentage (0-100)
  width: number;    // Percentage (0-100)
  height: number;   // Percentage (0-100)
  correct: boolean;
  feedback: string;
}
```

## 8. Summary

### Architectural Strengths

1. ✅ **Consistent pattern** across all XBlocks
2. ✅ **Separation of concerns** - Python for data, React for UI
3. ✅ **Security first** - CSRF protection, validation
4. ✅ **Responsive design** - Percentage-based positioning
5. ✅ **OpenEdX integration** - Proper runtime API usage
6. ✅ **Build optimization** - Vite for bundling, code splitting

### Modal Constraint Impact

The **435px height constraint** from the OpenEdX modal affects:
- Timeline Presentation (needs vertical space for waveform + canvas)
- Image Annotation (needs space for canvas + feedback panel)
- Image Hotspot (wizard steps + canvas)

**Solution:** Add modal sizing CSS to Liverpool theme as documented in `03-liverpool-theme-integration.md`.

## Related Documentation

- [edx-platform Modal System](./01-edx-platform-modal-system.md)
- [Liverpool Theme Integration](./03-liverpool-theme-integration.md)
- [XBlock API Documentation](https://edx.readthedocs.io/projects/xblock/)
