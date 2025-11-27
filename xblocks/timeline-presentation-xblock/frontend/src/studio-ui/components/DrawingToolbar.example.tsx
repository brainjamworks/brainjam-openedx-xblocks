/**
 * DrawingToolbar Usage Example
 *
 * This example shows how to integrate the DrawingToolbar into your visual editor component.
 * Agent 5 will replace this with actual drawing logic implementation.
 */

import React, { useState } from 'react';
import { DrawingToolbar } from './DrawingToolbar';
import type { DrawingMode } from '../../common/types';

export const DrawingToolbarExample: React.FC = () => {
  // State management for toolbar
  const [drawingMode, setDrawingMode] = useState<DrawingMode>('select');
  const [drawingColor, setDrawingColor] = useState<string>('#212b58'); // Liverpool blue
  const [lineThickness, setLineThickness] = useState<number>(2);

  return (
    <div className="visual-editor-example">
      {/* Toolbar */}
      <DrawingToolbar
        currentMode={drawingMode}
        onModeChange={setDrawingMode}
        color={drawingColor}
        onColorChange={setDrawingColor}
        thickness={lineThickness}
        onThicknessChange={setLineThickness}
      />

      {/* Canvas Area (to be implemented by Agent 5) */}
      <div className="drawing-canvas-placeholder" style={{
        border: '2px dashed #ccc',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h5>Drawing Canvas Area</h5>
          <p>Current Mode: <strong>{drawingMode}</strong></p>
          <p>Color: <strong>{drawingColor}</strong></p>
          <p>Thickness: <strong>{lineThickness}px</strong></p>
          <p className="text-muted mt-3">
            Agent 5 will implement the drawing logic here
          </p>
        </div>
      </div>
    </div>
  );
};
