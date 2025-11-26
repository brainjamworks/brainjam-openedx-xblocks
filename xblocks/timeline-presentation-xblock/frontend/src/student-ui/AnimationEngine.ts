/**
 * Animation Engine for Timeline Presentation
 *
 * Provides a React hook to sync timeline events with audio playback
 * and manage animation states.
 */

import { useEffect, useState, useCallback, RefObject } from 'react';
import { TimelineEvent, ActiveEventState } from '../common/types';

/**
 * Hook to synchronize timeline events with audio playback
 *
 * @param audioRef - Reference to the audio element
 * @param timelineEvents - Array of timeline events sorted by timestamp
 * @param onEventTrigger - Optional callback when an event is triggered
 * @returns Array of currently active timeline events
 *
 * Example:
 *   const audioRef = useRef<HTMLAudioElement>(null);
 *   const activeEvents = useTimelineSync(audioRef, timelineEvents);
 */
export function useTimelineSync(
  audioRef: RefObject<HTMLAudioElement>,
  timelineEvents: TimelineEvent[],
  onEventTrigger?: (event: TimelineEvent) => void
): TimelineEvent[] {
  // Track which events are currently active
  const [activeEventStates, setActiveEventStates] = useState<ActiveEventState[]>([]);

  // Track the last processed time to avoid duplicate triggers
  const [lastProcessedTime, setLastProcessedTime] = useState<number>(0);

  /**
   * Process audio time updates and trigger appropriate events
   */
  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentTime = audio.currentTime;

    // If seeking backwards, reset all active events
    if (currentTime < lastProcessedTime - 0.5) {
      setActiveEventStates([]);
      setLastProcessedTime(currentTime);
      return;
    }

    // Find events that should be triggered at current time
    const eventsToTrigger = timelineEvents.filter(event => {
      const isInTimeRange = event.timestamp >= lastProcessedTime &&
                           event.timestamp <= currentTime;
      const notAlreadyActive = !activeEventStates.find(
        state => state.eventId === event.id
      );
      return isInTimeRange && notAlreadyActive;
    });

    // Trigger new events
    if (eventsToTrigger.length > 0) {
      const newActiveStates: ActiveEventState[] = eventsToTrigger.map(event => {
        // Call optional trigger callback
        if (onEventTrigger) {
          onEventTrigger(event);
        }

        return {
          eventId: event.id,
          startTime: currentTime,
          isAnimating: true,
        };
      });

      setActiveEventStates(prev => [...prev, ...newActiveStates]);
    }

    setLastProcessedTime(currentTime);
  }, [audioRef, timelineEvents, activeEventStates, lastProcessedTime, onEventTrigger]);

  /**
   * Handle animation completion
   * Keep elements visible after animation completes
   */
  const handleAnimationEnd = useCallback((eventId: string) => {
    setActiveEventStates(prev =>
      prev.map(state =>
        state.eventId === eventId
          ? { ...state, isAnimating: false }
          : state
      )
    );
  }, []);

  /**
   * Reset all animations when audio ends
   */
  const handleAudioEnded = useCallback(() => {
    // Keep elements visible but mark as not animating
    setActiveEventStates(prev =>
      prev.map(state => ({ ...state, isAnimating: false }))
    );
  }, []);

  /**
   * Reset everything when audio is replayed
   */
  const handleAudioPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // If playing from beginning, reset everything
    if (audio.currentTime < 1) {
      setActiveEventStates([]);
      setLastProcessedTime(0);
    }
  }, [audioRef]);

  /**
   * Attach event listeners to audio element
   */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleAudioEnded);
    audio.addEventListener('play', handleAudioPlay);
    audio.addEventListener('seeked', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleAudioEnded);
      audio.removeEventListener('play', handleAudioPlay);
      audio.removeEventListener('seeked', handleTimeUpdate);
    };
  }, [audioRef, handleTimeUpdate, handleAudioEnded, handleAudioPlay]);

  /**
   * Return active timeline events
   */
  const activeEvents = activeEventStates.map(state => {
    const event = timelineEvents.find(e => e.id === state.eventId);
    return event;
  }).filter((event): event is TimelineEvent => event !== undefined);

  return activeEvents;
}

/**
 * Get CSS classes for animation type and direction
 *
 * @param event - Timeline event with animation config
 * @param isAnimating - Whether animation is currently running
 * @returns CSS class string for animation
 */
export function getAnimationClasses(
  event: TimelineEvent,
  isAnimating: boolean
): string {
  const classes: string[] = ['timeline-element'];

  if (!isAnimating) {
    classes.push('timeline-element--visible');
    return classes.join(' ');
  }

  // Add animation type class
  classes.push(`timeline-animation-${event.animation}`);

  // Add direction class for directional animations
  if (event.animationDirection &&
      (event.animation === 'slide' || event.animation === 'wipe')) {
    classes.push(`timeline-animation-${event.animation}-${event.animationDirection}`);
  }

  // Add custom class if provided
  if (event.className) {
    classes.push(event.className);
  }

  return classes.join(' ');
}

/**
 * Calculate animation delay based on event timing
 * Useful for coordinating multiple simultaneous events
 *
 * @param event - Timeline event
 * @param currentTime - Current audio playback time
 * @returns Delay in milliseconds
 */
export function calculateAnimationDelay(
  event: TimelineEvent,
  currentTime: number
): number {
  const timeSinceTrigger = (currentTime - event.timestamp) * 1000;
  const delay = Math.max(0, -timeSinceTrigger);
  return delay;
}
