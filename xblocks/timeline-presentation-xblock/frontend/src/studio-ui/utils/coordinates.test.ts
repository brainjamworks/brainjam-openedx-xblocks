/**
 * Unit tests for coordinate utilities
 *
 * Run with: npm test
 */

import { pixelsToPercent, percentToPixels, snapToGrid, clamp, clampToStage } from './coordinates';

describe('Coordinate Utilities', () => {
  describe('pixelsToPercent', () => {
    it('should convert pixels to percentage', () => {
      const result = pixelsToPercent(50, 100, 200, 400);
      expect(result).toEqual({ x: 25, y: 25 });
    });

    it('should handle zero dimensions', () => {
      const result = pixelsToPercent(50, 100, 0, 0);
      expect(result).toEqual({ x: 0, y: 0 });
    });

    it('should handle 100% correctly', () => {
      const result = pixelsToPercent(800, 600, 800, 600);
      expect(result).toEqual({ x: 100, y: 100 });
    });
  });

  describe('percentToPixels', () => {
    it('should convert percentage to pixels', () => {
      const result = percentToPixels(25, 50, 800, 600);
      expect(result).toEqual({ x: 200, y: 300 });
    });

    it('should handle 0%', () => {
      const result = percentToPixels(0, 0, 800, 600);
      expect(result).toEqual({ x: 0, y: 0 });
    });

    it('should handle 100%', () => {
      const result = percentToPixels(100, 100, 800, 600);
      expect(result).toEqual({ x: 800, y: 600 });
    });
  });

  describe('snapToGrid', () => {
    it('should snap to default 10px grid', () => {
      const result = snapToGrid(23, 47);
      expect(result).toEqual({ x: 20, y: 50 });
    });

    it('should snap to custom grid size', () => {
      const result = snapToGrid(23, 47, 5);
      expect(result).toEqual({ x: 25, y: 45 });
    });

    it('should handle values on grid', () => {
      const result = snapToGrid(20, 40, 10);
      expect(result).toEqual({ x: 20, y: 40 });
    });
  });

  describe('clamp', () => {
    it('should clamp value above max', () => {
      expect(clamp(150, 0, 100)).toBe(100);
    });

    it('should clamp value below min', () => {
      expect(clamp(-10, 0, 100)).toBe(0);
    });

    it('should not clamp value within range', () => {
      expect(clamp(50, 0, 100)).toBe(50);
    });
  });

  describe('clampToStage', () => {
    it('should clamp coordinates within stage bounds', () => {
      const result = clampToStage(1000, -50, 800, 600);
      expect(result).toEqual({ x: 800, y: 0 });
    });

    it('should not clamp coordinates already within bounds', () => {
      const result = clampToStage(400, 300, 800, 600);
      expect(result).toEqual({ x: 400, y: 300 });
    });
  });
});
