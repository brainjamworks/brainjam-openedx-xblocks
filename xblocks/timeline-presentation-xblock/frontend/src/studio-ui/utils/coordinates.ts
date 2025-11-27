/**
 * Coordinate conversion utilities for the visual editor
 *
 * These utilities help convert between pixel coordinates (used by the canvas)
 * and percentage coordinates (0-100, stored in the XBlock data).
 */

/**
 * Convert pixel coordinates to percentage coordinates (0-100)
 *
 * @param x - X coordinate in pixels
 * @param y - Y coordinate in pixels
 * @param stageWidth - Width of the stage/canvas in pixels
 * @param stageHeight - Height of the stage/canvas in pixels
 * @returns Object with x and y as percentages (0-100)
 */
export function pixelsToPercent(
  x: number,
  y: number,
  stageWidth: number,
  stageHeight: number
): { x: number; y: number } {
  // Prevent division by zero
  if (stageWidth === 0 || stageHeight === 0) {
    return { x: 0, y: 0 };
  }

  return {
    x: (x / stageWidth) * 100,
    y: (y / stageHeight) * 100,
  };
}

/**
 * Convert percentage coordinates (0-100) to pixel coordinates
 *
 * @param x - X coordinate as percentage (0-100)
 * @param y - Y coordinate as percentage (0-100)
 * @param stageWidth - Width of the stage/canvas in pixels
 * @param stageHeight - Height of the stage/canvas in pixels
 * @returns Object with x and y in pixels
 */
export function percentToPixels(
  x: number,
  y: number,
  stageWidth: number,
  stageHeight: number
): { x: number; y: number } {
  return {
    x: (x / 100) * stageWidth,
    y: (y / 100) * stageHeight,
  };
}

/**
 * Snap coordinates to a grid
 *
 * Useful for aligning elements to a grid when the user holds Shift
 * or when precision alignment is needed.
 *
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param gridSize - Size of the grid in the same units as x/y (default: 10)
 * @returns Object with snapped x and y coordinates
 */
export function snapToGrid(
  x: number,
  y: number,
  gridSize: number = 10
): { x: number; y: number } {
  return {
    x: Math.round(x / gridSize) * gridSize,
    y: Math.round(y / gridSize) * gridSize,
  };
}

/**
 * Clamp a coordinate value within bounds
 *
 * @param value - The value to clamp
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns Clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Clamp coordinates within stage bounds
 *
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param stageWidth - Width of the stage
 * @param stageHeight - Height of the stage
 * @returns Object with clamped x and y coordinates
 */
export function clampToStage(
  x: number,
  y: number,
  stageWidth: number,
  stageHeight: number
): { x: number; y: number } {
  return {
    x: clamp(x, 0, stageWidth),
    y: clamp(y, 0, stageHeight),
  };
}
