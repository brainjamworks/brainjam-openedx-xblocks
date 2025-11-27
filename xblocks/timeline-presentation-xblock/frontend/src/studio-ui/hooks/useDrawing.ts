/**
 * Drawing state management hook
 *
 * Manages the state for the visual editor's drawing mode,
 * including tool selection and current drawing path.
 */

import { useState, useCallback } from 'react';
import type { DrawingMode } from '../../common/types';

/**
 * Represents a point in the current drawing path
 */
export interface PathPoint {
  x: number;
  y: number;
}

/**
 * Hook for managing drawing/editing state
 *
 * @returns Object containing drawing state and setters
 *
 * @example
 * const {
 *   drawingMode,
 *   setDrawingMode,
 *   isDrawing,
 *   setIsDrawing,
 *   currentPath,
 *   setCurrentPath,
 *   startDrawing,
 *   addPoint,
 *   endDrawing,
 *   clearPath
 * } = useDrawing();
 */
export function useDrawing() {
  // Current tool/mode selected
  const [drawingMode, setDrawingMode] = useState<DrawingMode>('select');

  // Whether user is currently drawing
  const [isDrawing, setIsDrawing] = useState(false);

  // Current path being drawn (for lines, arrows, shapes)
  const [currentPath, setCurrentPath] = useState<PathPoint[]>([]);

  /**
   * Start a new drawing action
   * @param point - Starting point
   */
  const startDrawing = useCallback((point: PathPoint) => {
    setIsDrawing(true);
    setCurrentPath([point, point]);  // Initialize with 2 identical points atomically
  }, []);

  /**
   * Add a point to the current path
   * @param point - Point to add
   */
  const addPoint = useCallback((point: PathPoint) => {
    setCurrentPath((prev) => [...prev, point]);
  }, []);

  /**
   * Update the last point in the path (useful for dragging)
   * @param point - Updated point
   */
  const updateLastPoint = useCallback((point: PathPoint) => {
    setCurrentPath((prev) => {
      if (prev.length === 0) return [point];
      return [...prev.slice(0, -1), point];
    });
  }, []);

  /**
   * End the current drawing action
   * @returns The completed path
   */
  const endDrawing = useCallback(() => {
    setIsDrawing(false);
    const completedPath = currentPath;
    return completedPath;
  }, [currentPath]);

  /**
   * Clear the current path
   */
  const clearPath = useCallback(() => {
    setCurrentPath([]);
    setIsDrawing(false);
  }, []);

  /**
   * Reset to select mode
   */
  const resetToSelectMode = useCallback(() => {
    setDrawingMode('select');
    setIsDrawing(false);
    setCurrentPath([]);
  }, []);

  return {
    // State
    drawingMode,
    isDrawing,
    currentPath,

    // Simple setters
    setDrawingMode,
    setIsDrawing,
    setCurrentPath,

    // Helper functions
    startDrawing,
    addPoint,
    updateLastPoint,
    endDrawing,
    clearPath,
    resetToSelectMode,
  };
}
