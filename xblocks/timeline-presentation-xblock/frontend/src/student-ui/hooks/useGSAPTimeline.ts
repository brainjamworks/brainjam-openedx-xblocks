/**
 * Timeline Sync Hook for Timeline Presentation
 *
 * Simple visibility management based on audio playback time.
 * React Spring (in TimelineKonvaElement) handles the actual animations.
 *
 * Architecture:
 * - This hook calculates WHEN elements should appear (timing only)
 * - TimelineKonvaElement handles HOW they animate (React Spring + Konva)
 * - No GSAP DOM manipulation (Konva renders to canvas, not DOM)
 */

import { useEffect, useState } from 'react';
import { TimelineEvent } from '../../common/types';

interface UseGSAPTimelineOptions {
  events: TimelineEvent[];
  audioCurrentTime: number;
  audioDuration: number;
  isPlaying: boolean;
}

interface UseGSAPTimelineReturn {
  visibleEventIds: Set<string>;
}

/**
 * Hook to manage timeline event visibility based on audio playback time
 *
 * Simple approach:
 * - Element becomes visible when audio reaches its timestamp
 * - React Spring in TimelineKonvaElement handles the animation
 * - No DOM manipulation (Konva is canvas-based)
 *
 * @param events - Timeline events to track
 * @param audioCurrentTime - Current audio playback time in seconds
 * @param audioDuration - Total audio duration in seconds
 * @param isPlaying - Whether audio is currently playing (unused but kept for API consistency)
 * @returns Set of visible event IDs
 */
export function useGSAPTimeline({
  events,
  audioCurrentTime,
  audioDuration,
  isPlaying,
}: UseGSAPTimelineOptions): UseGSAPTimelineReturn {
  const [visibleEventIds, setVisibleEventIds] = useState<Set<string>>(new Set());

  /**
   * Calculate visibility based on audio current time
   */
  useEffect(() => {
    if (!events.length || !audioDuration) return;

    const newVisibleIds = new Set<string>();

    events.forEach(event => {
      const startTime = event.timing.startTime;

      // Element should be visible if audio has reached or passed its timestamp
      if (audioCurrentTime >= startTime) {
        newVisibleIds.add(event.id);
      }
    });

    setVisibleEventIds(newVisibleIds);

    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `[Timeline Sync] Time: ${audioCurrentTime.toFixed(2)}s | Visible: ${Array.from(newVisibleIds).join(', ')}`
      );
    }
  }, [audioCurrentTime, events, audioDuration]);

  return {
    visibleEventIds,
  };
}
