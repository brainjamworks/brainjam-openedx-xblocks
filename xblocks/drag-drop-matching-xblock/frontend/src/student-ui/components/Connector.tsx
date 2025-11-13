/**
 * Connector Component
 *
 * Draws an SVG curved line connecting a term on the left to its matched description on the right.
 * Uses actual DOM element positions to ensure lines connect to the correct items even when randomized.
 * Uses a puzzle-piece style curve with color-coded feedback (green for correct, red for incorrect).
 */

import React, { useEffect, useState, useRef } from 'react';

interface ConnectorProps {
  termId: string;
  descriptionId: string;
  isCorrect?: boolean;
  isAnswerOverlay?: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const Connector: React.FC<ConnectorProps> = ({
  termId,
  descriptionId,
  isCorrect,
  isAnswerOverlay = false,
  containerRef
}) => {
  const [coordinates, setCoordinates] = useState<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  } | null>(null);

  const updateCoordinates = () => {
    if (!containerRef.current) return;

    // Find the term and description elements by their data-id attributes
    const termElement = containerRef.current.querySelector(`[data-id="${termId}"][data-type="term"]`);
    const descElement = containerRef.current.querySelector(`[data-id="${descriptionId}"][data-type="description"]`);
    const svgElement = containerRef.current.querySelector('.connectors-svg');

    if (!termElement || !descElement || !svgElement) return;

    // Get bounding rectangles
    const termRect = termElement.getBoundingClientRect();
    const descRect = descElement.getBoundingClientRect();
    const svgRect = svgElement.getBoundingClientRect();

    // Calculate positions relative to SVG container
    // Add small padding to extend lines slightly beyond box edges for better visual connection
    const padding = 5;

    // Start at right edge of term + padding, middle height
    const startX = termRect.right - svgRect.left + padding;
    const startY = termRect.top - svgRect.top + termRect.height / 2;

    // End at left edge of description - padding, middle height
    const endX = descRect.left - svgRect.left - padding;
    const endY = descRect.top - svgRect.top + descRect.height / 2;

    setCoordinates({ startX, startY, endX, endY });
  };

  // Update coordinates on mount and when IDs change
  useEffect(() => {
    updateCoordinates();

    // Update on window resize
    window.addEventListener('resize', updateCoordinates);
    return () => window.removeEventListener('resize', updateCoordinates);
  }, [termId, descriptionId, containerRef]);

  // If coordinates aren't calculated yet, don't render
  if (!coordinates) return null;

  const { startX, startY, endX, endY } = coordinates;

  // Create a smooth curved path (Bezier curve)
  const controlPoint1X = startX + (endX - startX) * 0.3;
  const controlPoint1Y = startY;
  const controlPoint2X = startX + (endX - startX) * 0.7;
  const controlPoint2Y = endY;

  const path = `M ${startX} ${startY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${endX} ${endY}`;

  // Color based on correctness
  const color = isCorrect ? '#178253' : '#c32d3a';

  // Styling for answer overlays (dashed lines)
  const strokeDasharray = isAnswerOverlay ? '5,5' : 'none';
  const strokeWidth = isAnswerOverlay ? 2 : 3;
  const opacity = isAnswerOverlay ? 0.6 : 0.8;

  return (
    <g className="connector-line">
      {/* Main curved line */}
      <path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        fill="none"
        strokeLinecap="round"
        opacity={opacity}
      />

      {/* Start dot (puzzle piece nub on left) */}
      <circle
        cx={startX}
        cy={startY}
        r="5"
        fill={color}
        opacity={opacity}
      />

      {/* End dot (puzzle piece nub on right) */}
      <circle
        cx={endX}
        cy={endY}
        r="5"
        fill={color}
        opacity={opacity}
      />
    </g>
  );
};
