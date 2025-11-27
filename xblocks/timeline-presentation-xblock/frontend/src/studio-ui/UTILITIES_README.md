# Visual Editor Utilities and Hooks

This directory contains utilities and custom React hooks for the Timeline Presentation XBlock visual editor.

## Utilities

### Coordinate Utilities (`utils/coordinates.ts`)

Helper functions for converting between pixel and percentage coordinates.

```typescript
import { pixelsToPercent, percentToPixels, snapToGrid } from './utils';

// Convert pixel coordinates to percentage (for saving to XBlock data)
const percentCoords = pixelsToPercent(150, 200, stageWidth, stageHeight);
// Returns: { x: 18.75, y: 33.33 } (if stage is 800x600)

// Convert percentage to pixels (for rendering)
const pixelCoords = percentToPixels(50, 50, stageWidth, stageHeight);
// Returns: { x: 400, y: 300 } (if stage is 800x600)

// Snap to grid (for alignment)
const snapped = snapToGrid(123, 456, 10);
// Returns: { x: 120, y: 460 }
```

**Available functions:**
- `pixelsToPercent(x, y, stageWidth, stageHeight)` - Convert pixels to percentage
- `percentToPixels(x, y, stageWidth, stageHeight)` - Convert percentage to pixels
- `snapToGrid(x, y, gridSize = 10)` - Snap coordinates to grid
- `clamp(value, min, max)` - Clamp value within range
- `clampToStage(x, y, stageWidth, stageHeight)` - Clamp coordinates to stage bounds

## Hooks

### useHistory Hook (`hooks/useHistory.ts`)

Provides undo/redo functionality for any state type.

```typescript
import { useHistory } from './hooks';
import { TimelineEvent } from '../common/types';

function MyComponent() {
  const [events, setEvents, undo, redo, canUndo, canRedo] =
    useHistory<TimelineEvent[]>([]);

  const addEvent = (newEvent: TimelineEvent) => {
    setEvents([...events, newEvent]); // This adds to history
  };

  return (
    <div>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
      <button onClick={() => addEvent(newEvent)}>Add Event</button>
    </div>
  );
}
```

**Features:**
- Maximum 50 history states
- Supports both direct values and updater functions
- Automatically manages undo/redo stack
- Provides `canUndo` and `canRedo` flags for UI state

### useDrawing Hook (`hooks/useDrawing.ts`)

Manages drawing/editing mode state for the visual editor.

```typescript
import { useDrawing } from './hooks';

function VisualEditor() {
  const {
    drawingMode,
    setDrawingMode,
    isDrawing,
    startDrawing,
    updateLastPoint,
    endDrawing,
    currentPath,
    clearPath,
  } = useDrawing();

  const handleMouseDown = (e: MouseEvent) => {
    if (drawingMode !== 'select') {
      startDrawing({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDrawing) {
      updateLastPoint({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      const completedPath = endDrawing();
      // Process completed path...
    }
  };

  return (
    <div>
      <button onClick={() => setDrawingMode('select')}>Select</button>
      <button onClick={() => setDrawingMode('line')}>Line</button>
      <button onClick={() => setDrawingMode('arrow')}>Arrow</button>
      <button onClick={() => setDrawingMode('circle')}>Circle</button>
      <button onClick={() => setDrawingMode('rectangle')}>Rectangle</button>
      <button onClick={() => setDrawingMode('text')}>Text</button>

      <canvas
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
}
```

**Drawing modes:**
- `select` - Selection/move mode (default)
- `text` - Add text elements
- `line` - Draw lines
- `arrow` - Draw arrows
- `circle` - Draw circles
- `rectangle` - Draw rectangles

**State management:**
- `drawingMode` - Current tool selected
- `isDrawing` - Whether user is actively drawing
- `currentPath` - Array of points in the current drawing path

**Helper functions:**
- `startDrawing(point)` - Begin drawing at point
- `addPoint(point)` - Add point to path
- `updateLastPoint(point)` - Update last point (for dragging)
- `endDrawing()` - Complete drawing and return path
- `clearPath()` - Clear current path
- `resetToSelectMode()` - Reset to select mode and clear path

## Usage Example: Complete Visual Editor

```typescript
import { useHistory, useDrawing, DrawingMode } from './hooks';
import { pixelsToPercent, percentToPixels, snapToGrid } from './utils';
import { TimelineEvent } from '../common/types';

function VisualEditor() {
  // History management for undo/redo
  const [events, setEvents, undo, redo, canUndo, canRedo] =
    useHistory<TimelineEvent[]>([]);

  // Drawing state management
  const {
    drawingMode,
    setDrawingMode,
    isDrawing,
    startDrawing,
    updateLastPoint,
    endDrawing,
  } = useDrawing();

  const [stageSize, setStageSize] = useState({ width: 800, height: 600 });

  const handleAddElement = (pixelX: number, pixelY: number) => {
    // Convert to percentage for storage
    const { x, y } = pixelsToPercent(
      pixelX,
      pixelY,
      stageSize.width,
      stageSize.height
    );

    const newEvent: TimelineEvent = {
      id: `event-${Date.now()}`,
      timestamp: 0,
      elementType: drawingMode === 'text' ? 'text' : 'shape',
      animation: 'fade',
      animationDuration: 500,
      position: { x, y },
      // ... other properties
    };

    // Add to history
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="toolbar">
        <button onClick={undo} disabled={!canUndo}>↶ Undo</button>
        <button onClick={redo} disabled={!canRedo}>↷ Redo</button>

        <button onClick={() => setDrawingMode('select')}>Select</button>
        <button onClick={() => setDrawingMode('text')}>Text</button>
        <button onClick={() => setDrawingMode('line')}>Line</button>
        <button onClick={() => setDrawingMode('arrow')}>Arrow</button>
        <button onClick={() => setDrawingMode('circle')}>Circle</button>
        <button onClick={() => setDrawingMode('rectangle')}>Rectangle</button>
      </div>

      {/* Canvas */}
      <div className="canvas-container">
        {/* Render elements... */}
      </div>
    </div>
  );
}
```

## Testing

Run the unit tests:

```bash
npm test
```

The coordinate utilities include comprehensive tests in `utils/coordinates.test.ts`.
