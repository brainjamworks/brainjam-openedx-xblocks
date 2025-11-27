/**
 * Konva Animation Config Generator
 *
 * Generates pre-calculated Konva animation configurations from timeline events.
 * This moves all complex animation logic to studio view, making student view
 * a simple "dumb renderer" that just applies the config.
 *
 * Architecture:
 * - Studio: Generate config once when saving
 * - Student: Apply config directly to Konva
 */

import type {
  TimelineEvent,
  KonvaAnimationConfig,
  AnimationType,
  AnimationDirection,
  CanvasDimensions,
} from '../../common/types';

/**
 * Generate complete Konva animation config for a timeline event
 *
 * @param event - Timeline event with editor properties
 * @param canvasDimensions - Canvas dimensions for percentage → pixel conversion
 * @returns Complete Konva animation configuration
 */
export function generateKonvaConfig(
  event: TimelineEvent,
  canvasDimensions: CanvasDimensions
): KonvaAnimationConfig {
  return {
    konvaProps: generateKonvaProps(event, canvasDimensions),
    animation: generateAnimationStates(event, canvasDimensions),
  };
}

/**
 * Generate Konva rendering properties (final/visible state)
 */
function generateKonvaProps(
  event: TimelineEvent,
  dimensions: CanvasDimensions
): KonvaAnimationConfig['konvaProps'] {
  // Convert percentage position to pixels
  const x = (event.position.x / 100) * dimensions.width;
  const y = (event.position.y / 100) * dimensions.height;

  // Base properties (common to all elements)
  const baseProps = { x, y };

  // Add element-specific properties
  switch (event.elementType) {
    case 'text':
      return {
        ...baseProps,
        text: event.content || '',
        fontSize: event.fontSize || event.dimensions?.height || 16,
        fontFamily: 'Poppins, sans-serif',
        fill: event.color || '#333F48',
        offsetY: (event.fontSize || event.dimensions?.height || 16) / 2,
      };

    case 'shape':
      if (event.shapeType === 'circle') {
        const diameter = event.dimensions?.width || 50;
        const radius = ((diameter / 100) * dimensions.width) / 2;
        return {
          ...baseProps,
          radius,
          fill: event.color || '#00A689',
          offsetX: radius,
          offsetY: radius,
        };
      } else {
        // Rectangle
        const width = ((event.dimensions?.width || 100) / 100) * dimensions.width;
        const height = ((event.dimensions?.height || 50) / 100) * dimensions.height;
        return {
          ...baseProps,
          width,
          height,
          fill: event.color || '#00A689',
          offsetX: width / 2,
          offsetY: height / 2,
          cornerRadius: 4,
        };
      }

    case 'line':
    case 'arrow': {
      if (!event.lineCoordinates) {
        console.warn('Line/Arrow missing coordinates:', event.id);
        return baseProps;
      }

      const x1 = (event.lineCoordinates.x1 / 100) * dimensions.width;
      const y1 = (event.lineCoordinates.y1 / 100) * dimensions.height;
      const x2 = (event.lineCoordinates.x2 / 100) * dimensions.width;
      const y2 = (event.lineCoordinates.y2 / 100) * dimensions.height;

      const props: KonvaAnimationConfig['konvaProps'] = {
        x: 0, // Lines use points, not x/y
        y: 0,
        points: [x1, y1, x2, y2],
        stroke: event.color || '#212b58',
        strokeWidth: event.thickness || 2,
      };

      // Add arrow-specific properties
      if (event.elementType === 'arrow') {
        props.fill = event.color || '#212b58';
        props.pointerLength = 10;
        props.pointerWidth = 10;
        props.pointerAtEnding = true; // Ensure dash works on arrows
      }

      // Add dash for wipe animation (constant throughout animation)
      if (event.animation === 'wipe') {
        const length = calculateLineLength(event.lineCoordinates, dimensions);
        props.dash = [length]; // Single element array per Konva docs
      }

      return props;
    }

    default:
      return baseProps;
  }
}

/**
 * Generate animation states (initial and target)
 */
function generateAnimationStates(
  event: TimelineEvent,
  dimensions: CanvasDimensions
): KonvaAnimationConfig['animation'] {
  const animationType = event.animation || 'fade';
  // Show animation should be instant (50ms), all others use user setting or default
  const duration = animationType === 'show' ? 50 : (event.animationDuration || 500);
  const direction = event.animationDirection;

  // Base states
  const initialState = generateInitialState(event, animationType, direction, dimensions);
  const targetState = generateTargetState(event, animationType, direction, dimensions);

  // Choose easing based on animation type
  const easing = getEasing(animationType);

  return {
    type: animationType,
    duration,
    easing,
    initialState,
    targetState,
  };
}

/**
 * Generate initial (hidden) state
 */
function generateInitialState(
  event: TimelineEvent,
  animationType: AnimationType,
  direction: AnimationDirection | undefined,
  dimensions: CanvasDimensions
): KonvaAnimationConfig['animation']['initialState'] {
  const pos = {
    x: (event.position.x / 100) * dimensions.width,
    y: (event.position.y / 100) * dimensions.height,
  };

  switch (animationType) {
    case 'fade':
      return { opacity: 0 };

    case 'scale':
      return {
        opacity: 0,
        scaleX: 0.01,
        scaleY: 0.01,
      };

    case 'slide': {
      const offset = calculateSlideOffset(direction, dimensions);
      return {
        opacity: 0,
        x: pos.x + offset.x,
        y: pos.y + offset.y,
      };
    }

    case 'wipe': {
      // For lines: use dash offset (standard approach)
      if (event.elementType === 'line') {
        const lineLength = calculateLineLength(event.lineCoordinates!, dimensions);
        return {
          opacity: 1, // Wipe doesn't fade
          dashOffset: lineLength,
        };
      }

      // For arrows: use dash offset (same as lines - arrows inherit dash from Konva.Shape)
      if (event.elementType === 'arrow') {
        const arrowLength = calculateLineLength(event.lineCoordinates!, dimensions);
        return {
          opacity: 1,
          dashOffset: arrowLength,
          pointerLength: 0, // Hide arrowhead length
          pointerWidth: 0,  // Hide arrowhead width - prevents artifact
        };
      }

      // For shapes: directional scale
      const dir = direction || 'right';
      if (dir === 'left' || dir === 'right') {
        return {
          opacity: 1,
          scaleX: 0.01,
          scaleY: 1,
        };
      } else {
        return {
          opacity: 1,
          scaleX: 1,
          scaleY: 0.01,
        };
      }
    }

    case 'show':
    default:
      return { opacity: 0 };
  }
}

/**
 * Generate target (visible) state
 */
function generateTargetState(
  event: TimelineEvent,
  animationType: AnimationType,
  direction: AnimationDirection | undefined,
  dimensions: CanvasDimensions
): KonvaAnimationConfig['animation']['targetState'] {
  const pos = {
    x: (event.position.x / 100) * dimensions.width,
    y: (event.position.y / 100) * dimensions.height,
  };

  switch (animationType) {
    case 'fade':
      return { opacity: 1 };

    case 'scale':
      return {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
      };

    case 'slide':
      return {
        opacity: 1,
        x: pos.x,
        y: pos.y,
      };

    case 'wipe': {
      // For lines: reveal by animating dash offset
      if (event.elementType === 'line') {
        return {
          opacity: 1,
          dashOffset: 0,
        };
      }

      // For arrows: reveal by animating dash offset (same as lines)
      if (event.elementType === 'arrow') {
        return {
          opacity: 1,
          dashOffset: 0,
        };
      }

      // For shapes: scale to full size
      return {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
      };
    }

    case 'show':
    default:
      return { opacity: 1 };
  }
}

/**
 * Calculate slide offset based on direction
 * Uses 10% of canvas dimension (responsive)
 */
function calculateSlideOffset(
  direction: AnimationDirection | undefined,
  dimensions: CanvasDimensions
): { x: number; y: number } {
  // Use 10% of dimension, capped at 100px for very large canvases
  const horizontalOffset = Math.min(dimensions.width * 0.10, 100);
  const verticalOffset = Math.min(dimensions.height * 0.10, 100);

  switch (direction) {
    case 'up':
      return { x: 0, y: -verticalOffset };   // Start ABOVE target (negative Y)
    case 'down':
      return { x: 0, y: verticalOffset };    // Start BELOW target (positive Y)
    case 'left':
      return { x: -horizontalOffset, y: 0 }; // Start LEFT of target (negative X)
    case 'right':
      return { x: horizontalOffset, y: 0 };  // Start RIGHT of target (positive X)
    default:
      return { x: horizontalOffset, y: 0 };  // Default to right
  }
}

/**
 * Calculate line length (for wipe animations)
 */
function calculateLineLength(
  coords: { x1: number; y1: number; x2: number; y2: number },
  dimensions: CanvasDimensions
): number {
  const dx = ((coords.x2 - coords.x1) / 100) * dimensions.width;
  const dy = ((coords.y2 - coords.y1) / 100) * dimensions.height;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Get easing function name for animation type
 */
function getEasing(animationType: AnimationType): KonvaAnimationConfig['animation']['easing'] {
  switch (animationType) {
    case 'scale':
      return 'BackEaseOut'; // Nice bounce effect for scale
    case 'wipe':
      return 'Linear'; // Constant speed for wipe
    case 'slide':
    case 'fade':
    default:
      return 'EaseOut'; // Smooth deceleration
  }
}
