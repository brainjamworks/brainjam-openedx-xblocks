# Timeline Presentation XBlock - Studio Editor

This directory contains the React-based Studio editor interface for the Timeline Presentation XBlock.

## Overview

The Studio editor provides course authors with an intuitive interface to create synchronized timeline presentations that combine:
- A diagram image
- Audio narration
- Animated elements that appear at specific timestamps

## Architecture

### Component Hierarchy

```
StudioView (main container)
├── Tabs (4 tabs)
│   ├── Basic Information Tab
│   │   └── Form fields (display_name, title, description)
│   │
│   ├── Assets Tab
│   │   ├── AssetUploader (image)
│   │   └── AssetUploader (audio)
│   │
│   ├── Timeline Events Tab
│   │   ├── TimelineTrack (visual timeline)
│   │   └── TimelineEventEditor (event list)
│   │       └── Modal with ElementEditor
│   │
│   └── Preview Tab
│       └── PreviewPanel (live preview)
│
└── Save/Cancel buttons
```

## Components

### StudioView.tsx
Main container component that manages:
- Form state for all fields
- Asset upload handling (via OpenEdX contentstore API)
- Save/Cancel operations with XBlock handlers
- Tab navigation
- Validation and error handling

### AssetUploader.tsx
Reusable component for uploading images and audio files:
- Drag-and-drop support
- File type validation
- File size validation (10MB for images, 50MB for audio)
- Preview of current asset
- Delete/replace functionality
- Loading states

### TimelineEventEditor.tsx
Manages the list of timeline events:
- Add/edit/delete events
- Duplicate events
- Sort by timestamp
- Modal-based editing with ElementEditor
- Event summary cards

### ElementEditor.tsx
Conditional form for configuring element properties:
- Element type selector (text/shape/line/arrow)
- Conditional fields based on type:
  - **Text**: content, fontSize, color
  - **Shape**: shapeType, width, height, color
  - **Line/Arrow**: coordinates, thickness, color
- Position controls
- Animation settings (type, direction, duration)

### TimelineTrack.tsx
Visual timeline representation:
- Horizontal timeline with time ruler
- Event blocks positioned by timestamp
- Color-coded by element type
- Clickable events (optional)
- Legend showing element types

### PreviewPanel.tsx
Live preview of the student experience:
- Diagram with overlaid elements
- Audio playback controls
- Real-time animation as audio plays
- Shows active elements at current timestamp

## Data Flow

### Initial Load
```
Python studio_view()
  → Returns StudioViewFields
    → StudioView component receives fields prop
      → Initializes state from fields
```

### Save Operation
```
User clicks Save
  → StudioView.handleSave()
    → Validates form data
    → Calls xblockPost(runtime, 'save_data', data)
      → Python save_data handler
        → Saves to XBlock fields
          → Returns success/error
            → StudioView shows message
              → Notifies Studio (closes modal)
```

### Asset Upload
```
User drops/selects file
  → AssetUploader validates file
    → Uploads to /assets/{course_id}/
      → OpenEdX contentstore API
        → Returns asset URL
          → Updates component state
            → For audio: loads metadata (duration)
```

## API Integration

### XBlock Handlers

The Studio view calls these Python handlers:

1. **save_data** - Saves all configuration
   ```python
   @XBlock.json_handler
   def save_data(self, data, suffix=''):
       self.display_name = data['display_name']
       self.title = data['title']
       # ... etc
       return {'success': True}
   ```

2. **Asset Upload** - Uses OpenEdX contentstore
   - Direct POST to `/assets/{course_id}/`
   - Returns asset metadata with URL
   - No XBlock handler needed (platform API)

### Data Structure

Fields sent to `save_data`:
```typescript
{
  display_name: string,
  title: string,
  description: string,
  image_url: string,
  audio_url: string,
  timeline_events: TimelineEvent[]
}
```

TimelineEvent structure:
```typescript
{
  id: string,
  timestamp: number,          // seconds
  elementType: 'text' | 'shape' | 'line' | 'arrow',
  animation: 'fade' | 'scale' | 'slide' | 'wipe' | 'show',
  animationDirection?: 'up' | 'down' | 'left' | 'right',
  animationDuration: number,  // milliseconds
  position: { x: number, y: number },  // percentages
  // Conditional fields based on elementType:
  content?: string,           // text
  fontSize?: number,          // text
  shapeType?: string,         // shape
  dimensions?: { width, height },  // shape
  lineCoordinates?: { x1, y1, x2, y2 },  // line/arrow
  thickness?: number,         // line/arrow
  color?: string              // all types
}
```

## Validation

Client-side validation in `StudioView.validateForm()`:
- ✅ Display name required
- ✅ Title required
- ✅ Image URL required
- ✅ Audio URL required
- ℹ️ Timeline events optional (can have empty presentation)

File upload validation in `AssetUploader`:
- ✅ File type matching accept prop
- ✅ File size limits (10MB image, 50MB audio)

## User Workflow

### Typical Authoring Flow

1. **Basic Info**
   - Enter display name and title
   - Add optional description

2. **Assets**
   - Upload diagram image (PNG/JPG)
   - Upload audio narration (MP3)
   - System captures audio duration

3. **Timeline Events**
   - View timeline track
   - Click "Add Event"
   - Configure element:
     - Set timestamp (when to appear)
     - Choose element type
     - Set position and appearance
     - Configure animation
   - Add more events as needed
   - Events shown on timeline track

4. **Preview**
   - Test the presentation
   - Play audio and watch animations
   - Verify timing and appearance

5. **Save**
   - Click Save button
   - Validation runs
   - Data saved to XBlock
   - Studio modal closes

## Styling

### SCSS Files

- `minimal-paragon.scss` - Paragon component imports
- `studio-ui.scss` - Custom styles for studio components

### Design Patterns

- Uses Paragon components for consistency
- Responsive breakpoints at 768px
- Custom scrollbars for better UX
- Drag-over states for file uploads
- Loading states for async operations

## Error Handling

### Upload Errors
- Network failures
- Invalid file types
- File size exceeded
- Server errors

### Save Errors
- Validation failures
- Network issues
- Server-side errors

All errors shown via Alert component with:
- Clear error message
- Dismissible UI
- Red/danger styling

## Testing Checklist

- [ ] Upload image (PNG, JPG)
- [ ] Upload audio (MP3)
- [ ] Create text element
- [ ] Create shape element (all types)
- [ ] Create line element
- [ ] Create arrow element
- [ ] Edit existing event
- [ ] Delete event
- [ ] Duplicate event
- [ ] Preview with audio playback
- [ ] Save with all fields
- [ ] Cancel without saving
- [ ] Validation errors shown
- [ ] Upload errors handled
- [ ] Large files rejected
- [ ] Invalid file types rejected

## Common Customizations

### Add New Element Type

1. Update `ElementType` in `types.ts`
2. Add case in `ElementEditor.tsx`
3. Update rendering in `PreviewPanel.tsx`
4. Add to legend in `TimelineTrack.tsx`

### Add New Animation Type

1. Update `AnimationType` in `types.ts`
2. Add option in `ElementEditor.tsx`
3. Implement in student view components

### Change File Upload Limits

Update in `AssetUploader.tsx`:
```typescript
const maxSize = assetType === 'image'
  ? 10 * 1024 * 1024   // 10MB
  : 50 * 1024 * 1024;  // 50MB
```

## Dependencies

- React 18
- TypeScript
- Paragon (OpenEdX component library)
- react-intl (for Paragon)

## Build Process

Built with Webpack (see `frontend/webpack.config.js`):
- Entry: `studio-ui/index.tsx`
- Output: `public/studio-ui.js`
- Includes all components and styles

## Notes

- Audio duration is captured client-side via HTML5 Audio API
- Asset uploads go directly to OpenEdX contentstore (not through XBlock)
- Preview panel reuses student view rendering logic
- Timeline track positions are calculated as percentages of audio duration
- All timestamps in seconds, durations in milliseconds (matches HTML5 Audio API)
