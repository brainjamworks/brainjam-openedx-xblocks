/**
 * Timeline Element Component
 *
 * Generic component for rendering animated elements (text, shapes, lines, arrows)
 * on the diagram canvas. Supports various animation types with CSS transitions.
 */

import React from 'react';
import { TimelineElementProps } from '../common/types';
import { getAnimationClasses } from './AnimationEngine';

/**
 * TimelineElement - Renders a single animated element on the timeline
 *
 * This component handles all element types (text, shape, line, arrow) and
 * applies the appropriate animation based on the event configuration.
 */
export const TimelineElement: React.FC<TimelineElementProps> = ({
  event,
  isActive,
}) => {
  // Don't render if not active
  if (!isActive) return null;

  const classes = getAnimationClasses(event, isActive);

  // Base styles - position using percentage-based coordinates
  const baseStyles: React.CSSProperties = {
    position: 'absolute',
    left: `${event.position.x}%`,
    top: `${event.position.y}%`,
    color: event.color || '#333F48',
    animationDuration: `${event.animationDuration}ms`,
    transitionDuration: `${event.animationDuration}ms`,
  };

  // Render based on element type
  switch (event.elementType) {
    case 'text':
      return renderTextElement(event, classes, baseStyles);

    case 'shape':
      return renderShapeElement(event, classes, baseStyles);

    case 'line':
      return renderLineElement(event, classes, baseStyles);

    case 'arrow':
      return renderArrowElement(event, classes, baseStyles);

    default:
  // console.warn(`Unknown element type: ${event.elementType}`);
      return null;
  }
};

/**
 * Render text element
 */
function renderTextElement(
  event: TimelineElementProps['event'],
  classes: string,
  baseStyles: React.CSSProperties
): JSX.Element {
  const styles: React.CSSProperties = {
    ...baseStyles,
    fontSize: event.dimensions?.height ? `${event.dimensions.height}px` : '16px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    transform: 'translate(-50%, -50%)', // Center on coordinates
  };

  return (
    <div
      className={`${classes} timeline-element-text`}
      style={styles}
      data-event-id={event.id}
    >
      {event.content || ''}
    </div>
  );
}

/**
 * Render shape element
 */
function renderShapeElement(
  event: TimelineElementProps['event'],
  classes: string,
  baseStyles: React.CSSProperties
): JSX.Element {
  const width = event.dimensions?.width || 40;
  const height = event.dimensions?.height || 40;

  const styles: React.CSSProperties = {
    ...baseStyles,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: event.color || '#00A689',
    transform: 'translate(-50%, -50%)', // Center on coordinates
  };

  // Add shape-specific styles
  switch (event.shapeType) {
    case 'circle':
      styles.borderRadius = '50%';
      break;

    case 'rectangle':
      styles.borderRadius = '4px';
      break;

    case 'triangle':
      // Use CSS borders to create triangle
      styles.width = '0';
      styles.height = '0';
      styles.backgroundColor = 'transparent';
      styles.borderLeft = `${width / 2}px solid transparent`;
      styles.borderRight = `${width / 2}px solid transparent`;
      styles.borderBottom = `${height}px solid ${event.color || '#00A689'}`;
      break;

    default:
      styles.borderRadius = '4px';
  }

  return (
    <div
      className={`${classes} timeline-element-shape timeline-element-shape-${event.shapeType || 'rectangle'}`}
      style={styles}
      data-event-id={event.id}
    />
  );
}

/**
 * Render line element
 */
function renderLineElement(
  event: TimelineElementProps['event'],
  classes: string,
  baseStyles: React.CSSProperties
): JSX.Element {
  const width = event.dimensions?.width || 100;
  const height = event.dimensions?.height || 2;

  const styles: React.CSSProperties = {
    ...baseStyles,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: event.color || '#212b58',
    transform: 'translate(-50%, -50%)', // Center on coordinates
  };

  return (
    <div
      className={`${classes} timeline-element-line`}
      style={styles}
      data-event-id={event.id}
    />
  );
}

/**
 * Render arrow element
 */
function renderArrowElement(
  event: TimelineElementProps['event'],
  classes: string,
  baseStyles: React.CSSProperties
): JSX.Element {
  const width = event.dimensions?.width || 100;
  const thickness = event.dimensions?.height || 2;
  const arrowSize = 8;
  const color = event.color || '#212b58';

  // Determine arrow direction from animation direction
  const direction = event.animationDirection || 'right';

  const containerStyles: React.CSSProperties = {
    ...baseStyles,
    width: `${width}px`,
    height: `${thickness + arrowSize}px`,
    transform: 'translate(-50%, -50%)',
  };

  // Line styles
  const lineStyles: React.CSSProperties = {
    position: 'absolute',
    width: `${width - arrowSize}px`,
    height: `${thickness}px`,
    backgroundColor: color,
    top: `${arrowSize / 2}px`,
  };

  // Arrow head styles (using CSS borders)
  const arrowStyles: React.CSSProperties = {
    position: 'absolute',
    width: '0',
    height: '0',
    borderStyle: 'solid',
  };

  // Adjust based on direction
  switch (direction) {
    case 'right':
      lineStyles.left = '0';
      arrowStyles.right = '0';
      arrowStyles.top = '0';
      arrowStyles.borderWidth = `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`;
      arrowStyles.borderColor = `transparent transparent transparent ${color}`;
      break;

    case 'left':
      lineStyles.right = '0';
      arrowStyles.left = '0';
      arrowStyles.top = '0';
      arrowStyles.borderWidth = `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`;
      arrowStyles.borderColor = `transparent ${color} transparent transparent`;
      break;

    case 'down':
      lineStyles.left = `${(width - thickness) / 2}px`;
      lineStyles.width = `${thickness}px`;
      lineStyles.height = `${width - arrowSize}px`;
      arrowStyles.left = `${(width - arrowSize * 2) / 2}px`;
      arrowStyles.bottom = '0';
      arrowStyles.borderWidth = `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`;
      arrowStyles.borderColor = `${color} transparent transparent transparent`;
      break;

    case 'up':
      lineStyles.left = `${(width - thickness) / 2}px`;
      lineStyles.width = `${thickness}px`;
      lineStyles.height = `${width - arrowSize}px`;
      lineStyles.bottom = '0';
      arrowStyles.left = `${(width - arrowSize * 2) / 2}px`;
      arrowStyles.top = '0';
      arrowStyles.borderWidth = `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`;
      arrowStyles.borderColor = `transparent transparent ${color} transparent`;
      break;
  }

  return (
    <div
      className={`${classes} timeline-element-arrow timeline-element-arrow-${direction}`}
      style={containerStyles}
      data-event-id={event.id}
    >
      <div className="timeline-arrow-line" style={lineStyles} />
      <div className="timeline-arrow-head" style={arrowStyles} />
    </div>
  );
}
