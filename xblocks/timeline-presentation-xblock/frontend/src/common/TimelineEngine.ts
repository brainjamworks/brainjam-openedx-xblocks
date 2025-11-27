/**
 * Timeline Playback Engine
 *
 * Pure state calculator for timeline animations - no side effects, fully testable.
 * Calculates layer states (opacity, transform, visibility) for any given time.
 *
 * BACKWARD COMPATIBILITY:
 * - Supports both v1 (legacy) and v2 (new) event formats
 * - Events are automatically normalized using normalizeTimelineEvent()
 * - Zero breaking changes for existing content
 */

import {
  TimelineEvent,
  LayerState,
  TimelinePhase,
  AnimationType,
  AnimationDirection,
  normalizeTimelineEvent,
} from './types';

/**
 * Easing functions for smooth animations
 */
export class EasingFunctions {
  /**
   * Linear easing (no acceleration)
   */
  static linear(t: number): number {
    return t;
  }

  /**
   * Ease-in-out cubic (smooth acceleration and deceleration)
   */
  static easeInOutCubic(t: number): number {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /**
   * Ease-out cubic (deceleration)
   */
  static easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  /**
   * Ease-in cubic (acceleration)
   */
  static easeInCubic(t: number): number {
    return t * t * t;
  }
}

/**
 * Layer State Machine
 *
 * Determines which phase an element is in at given time and calculates
 * progress within that phase.
 */
export class LayerStateMachine {
  /**
   * Determine phase for element at current time
   *
   * Test Case 1: Element before start time
   * Input: event with startTime=10, currentTime=5
   * Expected: phase=HIDDEN
   *
   * Test Case 2: Element during entry animation
   * Input: event with startTime=10, entryDuration=500ms, currentTime=10.25
   * Expected: phase=ENTERING
   *
   * Test Case 3: Element fully visible
   * Input: event with startTime=10, duration=5, currentTime=12
   * Expected: phase=VISIBLE
   *
   * Test Case 4: Element during exit animation
   * Input: event with startTime=10, duration=5, exitDuration=300ms, currentTime=14.8
   * Expected: phase=EXITING
   *
   * Test Case 5: Element after end time
   * Input: event with startTime=10, duration=5, currentTime=20
   * Expected: phase=EXITED
   */
  static getPhase(event: TimelineEvent, currentTime: number): TimelinePhase {
    // Normalize event to ensure v2 format
    const normalized = normalizeTimelineEvent(event);

    const { startTime, endTime, duration } = normalized.timing;
    const entryDuration = normalized.entryAnimation.duration / 1000; // Convert ms to seconds
    const exitDuration = (normalized.exitAnimation?.duration || 0) / 1000;

    // Calculate effective end time
    // If endTime is specified, use it; otherwise calculate from duration
    const effectiveEndTime = endTime ?? (duration ? startTime + duration : Infinity);

    // Phase logic:
    // ┌────────┬─────────────────┬──────────┬──────────┬─────────┐
    // │ HIDDEN │ ENTERING        │ VISIBLE  │ EXITING  │ EXITED  │
    // └────────┴─────────────────┴──────────┴──────────┴─────────┘
    //          ^startTime                    ^exit start ^endTime

    if (currentTime < startTime) {
      return TimelinePhase.HIDDEN;
    }

    if (currentTime < startTime + entryDuration) {
      return TimelinePhase.ENTERING;
    }

    // Calculate when exit animation should start
    const exitStartTime = effectiveEndTime - exitDuration;

    if (currentTime < exitStartTime) {
      return TimelinePhase.VISIBLE;
    }

    if (currentTime < effectiveEndTime) {
      return TimelinePhase.EXITING;
    }

    return TimelinePhase.EXITED;
  }

  /**
   * Calculate progress within current phase (0-1)
   *
   * Test Case 1: Halfway through entry animation
   * Input: event with startTime=10, entryDuration=500ms, currentTime=10.25, phase=ENTERING
   * Expected: progress=0.5
   *
   * Test Case 2: Fully visible (no progress needed)
   * Input: phase=VISIBLE
   * Expected: progress=1.0
   *
   * Test Case 3: 30% through exit animation
   * Input: event with exitDuration=300ms, exitStartTime=14.7, currentTime=14.79, phase=EXITING
   * Expected: progress=0.3
   */
  static getProgress(
    event: TimelineEvent,
    currentTime: number,
    phase: TimelinePhase
  ): number {
    // Normalize event to ensure v2 format
    const normalized = normalizeTimelineEvent(event);

    const { startTime, endTime, duration } = normalized.timing;
    const entryDuration = normalized.entryAnimation.duration / 1000;
    const exitDuration = (normalized.exitAnimation?.duration || 0) / 1000;
    const effectiveEndTime = endTime ?? (duration ? startTime + duration : Infinity);

    switch (phase) {
      case TimelinePhase.HIDDEN:
        return 0;

      case TimelinePhase.ENTERING: {
        const timeInPhase = currentTime - startTime;
        const progress = Math.min(Math.max(timeInPhase / entryDuration, 0), 1);
        return progress;
      }

      case TimelinePhase.VISIBLE:
        return 1;

      case TimelinePhase.EXITING: {
        const exitStartTime = effectiveEndTime - exitDuration;
        const timeInPhase = currentTime - exitStartTime;
        const progress = Math.min(Math.max(timeInPhase / exitDuration, 0), 1);
        return progress;
      }

      case TimelinePhase.EXITED:
        return 1;

      default:
        return 0;
    }
  }
}

/**
 * Animation Calculator
 *
 * Calculates opacity and transform values based on animation type and phase
 */
export class AnimationCalculator {
  /**
   * Calculate opacity based on animation type and phase
   *
   * Test Case 1: Fade animation entering at 50%
   * Input: type='fade', phase=ENTERING, progress=0.5
   * Expected: opacity=0.5
   *
   * Test Case 2: Scale animation fully visible
   * Input: type='scale', phase=VISIBLE
   * Expected: opacity=1
   *
   * Test Case 3: Show animation (instant) entering
   * Input: type='show', phase=ENTERING, progress=0.5
   * Expected: opacity=1
   *
   * Test Case 4: Wipe animation (no fade)
   * Input: type='wipe', phase=ENTERING
   * Expected: opacity=1
   */
  static calculateOpacity(
    animationType: AnimationType,
    phase: TimelinePhase,
    progress: number,
    isEntry: boolean
  ): number {
    // Handle instant 'show' animation
    if (animationType === 'show') {
      return phase === TimelinePhase.HIDDEN || phase === TimelinePhase.EXITED ? 0 : 1;
    }

    // 'wipe' animations don't fade
    if (animationType === 'wipe') {
      return phase === TimelinePhase.HIDDEN || phase === TimelinePhase.EXITED ? 0 : 1;
    }

    // All other animations use fade during entry/exit
    switch (phase) {
      case TimelinePhase.HIDDEN:
        return 0;

      case TimelinePhase.ENTERING:
        // Apply easing for smoother animation
        return EasingFunctions.easeOutCubic(progress);

      case TimelinePhase.VISIBLE:
        return 1;

      case TimelinePhase.EXITING:
        // Apply easing for smoother animation
        return 1 - EasingFunctions.easeInCubic(progress);

      case TimelinePhase.EXITED:
        return 0;

      default:
        return 0;
    }
  }

  /**
   * Calculate CSS transform string based on animation type
   *
   * Test Case 1: Scale animation entering at 50%
   * Input: type='scale', phase=ENTERING, progress=0.5
   * Expected: transform='scale(0.5)'
   *
   * Test Case 2: Slide left entering at 25%
   * Input: type='slide', direction='left', phase=ENTERING, progress=0.25
   * Expected: transform='translate(-75%, 0)'
   *
   * Test Case 3: Fully visible (no transform)
   * Input: phase=VISIBLE
   * Expected: transform='none'
   *
   * Test Case 4: Wipe down entering at 75%
   * Input: type='wipe', direction='down', phase=ENTERING, progress=0.75
   * Expected: transform='scaleY(0.75)' with transform-origin top
   */
  static calculateTransform(
    animationType: AnimationType,
    direction: AnimationDirection | undefined,
    phase: TimelinePhase,
    progress: number,
    isEntry: boolean
  ): string {
    // No transform when fully visible or for fade-only animations
    if (phase === TimelinePhase.VISIBLE) {
      return 'none';
    }

    // Hidden and exited states
    if (phase === TimelinePhase.HIDDEN || phase === TimelinePhase.EXITED) {
      return this.getInitialTransform(animationType, direction);
    }

    // Apply easing to progress
    const easedProgress = isEntry
      ? EasingFunctions.easeOutCubic(progress)
      : EasingFunctions.easeInCubic(progress);

    switch (animationType) {
      case 'scale':
        return this.calculateScaleTransform(phase, easedProgress);

      case 'slide':
        return this.calculateSlideTransform(direction, phase, easedProgress);

      case 'wipe':
        return this.calculateWipeTransform(direction, phase, easedProgress);

      case 'show':
      case 'fade':
      default:
        return 'none';
    }
  }

  /**
   * Get initial transform for hidden state
   */
  private static getInitialTransform(
    animationType: AnimationType,
    direction?: AnimationDirection
  ): string {
    switch (animationType) {
      case 'scale':
        return 'scale(0)';

      case 'slide':
        switch (direction) {
          case 'left':
            return 'translate(-100%, 0)';
          case 'right':
            return 'translate(100%, 0)';
          case 'up':
            return 'translate(0, -100%)';
          case 'down':
            return 'translate(0, 100%)';
          default:
            return 'translate(-100%, 0)';
        }

      case 'wipe':
        switch (direction) {
          case 'left':
          case 'right':
            return 'scaleX(0)';
          case 'up':
          case 'down':
            return 'scaleY(0)';
          default:
            return 'scaleX(0)';
        }

      default:
        return 'none';
    }
  }

  /**
   * Calculate scale transform
   */
  private static calculateScaleTransform(
    phase: TimelinePhase,
    progress: number
  ): string {
    if (phase === TimelinePhase.ENTERING) {
      return `scale(${progress})`;
    } else if (phase === TimelinePhase.EXITING) {
      return `scale(${1 - progress})`;
    }
    return 'scale(1)';
  }

  /**
   * Calculate slide transform
   */
  private static calculateSlideTransform(
    direction: AnimationDirection | undefined,
    phase: TimelinePhase,
    progress: number
  ): string {
    const effectiveProgress = phase === TimelinePhase.ENTERING ? progress : 1 - progress;
    const offset = (1 - effectiveProgress) * 100;

    switch (direction) {
      case 'left':
        return `translate(-${offset}%, 0)`;
      case 'right':
        return `translate(${offset}%, 0)`;
      case 'up':
        return `translate(0, -${offset}%)`;
      case 'down':
        return `translate(0, ${offset}%)`;
      default:
        return `translate(-${offset}%, 0)`;
    }
  }

  /**
   * Calculate wipe transform (scale-based reveal)
   */
  private static calculateWipeTransform(
    direction: AnimationDirection | undefined,
    phase: TimelinePhase,
    progress: number
  ): string {
    const scale = phase === TimelinePhase.ENTERING ? progress : 1 - progress;

    switch (direction) {
      case 'left':
      case 'right':
        return `scaleX(${scale})`;
      case 'up':
      case 'down':
        return `scaleY(${scale})`;
      default:
        return `scaleX(${scale})`;
    }
  }

  /**
   * Get transform origin for wipe animations
   * This should be applied as a separate CSS property
   */
  static getTransformOrigin(
    animationType: AnimationType,
    direction?: AnimationDirection
  ): string {
    if (animationType !== 'wipe') {
      return 'center';
    }

    switch (direction) {
      case 'left':
        return 'left center';
      case 'right':
        return 'right center';
      case 'up':
        return 'center top';
      case 'down':
        return 'center bottom';
      default:
        return 'left center';
    }
  }
}

/**
 * Timeline Playback Manager
 *
 * Main engine class - pure state calculator with no side effects
 */
export class TimelinePlaybackManager {
  private events: TimelineEvent[];

  constructor(events: TimelineEvent[]) {
    this.events = events;
  }

  /**
   * Calculate layer states for given time
   * PURE FUNCTION - deterministic output, same inputs always produce same outputs
   *
   * Test Case 1: Multiple elements at different phases
   * Input:
   *   events = [
   *     { id: '1', timing: { startTime: 10, duration: 5 }, entryAnimation: { duration: 500 } },
   *     { id: '2', timing: { startTime: 12, duration: 3 }, entryAnimation: { duration: 300 } }
   *   ]
   *   currentTime = 10.25
   * Expected:
   *   [
   *     { id: '1', phase: ENTERING, progress: 0.5, opacity: ~0.5, visible: true },
   *     { id: '2', phase: HIDDEN, progress: 0, opacity: 0, visible: false }
   *   ]
   */
  calculateLayerStates(currentTime: number): LayerState[] {
    return this.events.map(event => this.calculateLayerState(event, currentTime));
  }

  /**
   * Calculate state for a single layer at given time
   */
  private calculateLayerState(
    event: TimelineEvent,
    currentTime: number
  ): LayerState {
    // Normalize event to ensure v2 format
    const normalized = normalizeTimelineEvent(event);

    // Calculate phase
    const phase = LayerStateMachine.getPhase(event, currentTime);

    // Calculate progress within phase (0-1)
    const progress = LayerStateMachine.getProgress(event, currentTime, phase);

    // Determine if this is entry or exit phase
    const isEntry = phase === TimelinePhase.ENTERING;

    // Get animation configuration for current phase
    const animationConfig = isEntry ? normalized.entryAnimation : normalized.exitAnimation;
    const animationType = animationConfig?.type || 'fade';
    const direction = animationConfig?.direction;

    // Calculate visual properties based on phase
    const opacity = AnimationCalculator.calculateOpacity(
      animationType,
      phase,
      progress,
      isEntry
    );

    const transform = AnimationCalculator.calculateTransform(
      animationType,
      direction,
      phase,
      progress,
      isEntry
    );

    // Determine visibility
    const visible = phase !== TimelinePhase.HIDDEN && phase !== TimelinePhase.EXITED;

    return {
      id: event.id,
      phase,
      progress,
      opacity,
      transform,
      visible,
    };
  }

  /**
   * Get all events that should be visible at current time
   * (convenience method for filtering visible layers)
   */
  getVisibleEvents(currentTime: number): LayerState[] {
    return this.calculateLayerStates(currentTime).filter(state => state.visible);
  }

  /**
   * Get timeline duration (latest end time of all events)
   */
  getTotalDuration(): number {
    if (this.events.length === 0) return 0;

    return Math.max(
      ...this.events.map(event => {
        const normalized = normalizeTimelineEvent(event);
        const { startTime, endTime, duration } = normalized.timing;
        return endTime ?? (duration ? startTime + duration : startTime);
      })
    );
  }

  /**
   * Check if any animations are active at current time
   */
  hasActiveAnimations(currentTime: number): boolean {
    return this.calculateLayerStates(currentTime).some(
      state => state.phase === TimelinePhase.ENTERING || state.phase === TimelinePhase.EXITING
    );
  }
}
