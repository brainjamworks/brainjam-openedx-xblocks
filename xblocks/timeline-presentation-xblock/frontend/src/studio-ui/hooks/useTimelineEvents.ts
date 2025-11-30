/**
 * useTimelineEvents - React Hook for Timeline Event Service
 *
 * Provides React components access to the timeline event service
 * with automatic re-rendering on changes.
 *
 * Uses React 18's useSyncExternalStore for proper external store integration.
 *
 * Usage:
 *   const { events, getById, create, update, delete: deleteEvent } = useTimelineEvents();
 *
 * Benefits:
 * - Automatic re-renders when service data changes
 * - Guaranteed React rendering consistency
 * - Clean API for components
 * - No prop drilling needed
 */

import { useSyncExternalStore } from 'react';
import { timelineEventService } from '../services/TimelineEventService';
import { TimelineEvent } from '../../common/types';

export interface UseTimelineEventsReturn {
  /** All timeline events (from service) */
  events: TimelineEvent[];

  /** Get event by ID */
  getById: (id: string) => TimelineEvent | undefined;

  /** Create new event */
  create: (event: TimelineEvent) => void;

  /** Update event (partial) */
  update: (id: string, updates: Partial<TimelineEvent>) => void;

  /** Delete event */
  delete: (id: string) => void;

  /** Replace all events */
  replaceAll: (events: TimelineEvent[]) => void;

  /** Initialize service with events */
  initialize: (events: TimelineEvent[]) => void;

  /** Get count */
  count: () => number;
}

/**
 * Hook to access timeline events service
 * Component will re-render when events change
 *
 * Uses useSyncExternalStore to ensure proper reactivity with external store.
 * This is the React 18 standard pattern for external stores.
 */
export function useTimelineEvents(): UseTimelineEventsReturn {
  // Use React 18's useSyncExternalStore for guaranteed reactivity
  const events = useSyncExternalStore(
    // subscribe: called by React to set up subscription
    (callback) => {
  // console.log('[Hook] useSyncExternalStore subscribing to service');
      const unsubscribe = timelineEventService.subscribe(() => {
  // console.log('[Hook] Service notified hook - triggering re-render');
        callback();
      });
      return unsubscribe;
    },
    // getSnapshot: returns current state (called on every render check)
    () => {
      const snapshot = timelineEventService.getAll();
  // console.log('[Hook] getSnapshot called - returning', snapshot.length, 'events');
      return snapshot;
    },
    // getServerSnapshot: for SSR (optional, return empty array)
    () => []
  );

  // console.log('[Hook] useTimelineEvents rendering with', events.length, 'events');

  return {
    events,
    getById: (id) => timelineEventService.getById(id),
    create: (event) => timelineEventService.create(event),
    update: (id, updates) => timelineEventService.update(id, updates),
    delete: (id) => timelineEventService.delete(id),
    replaceAll: (events) => timelineEventService.replaceAll(events),
    initialize: (events) => timelineEventService.initialize(events),
    count: () => timelineEventService.count(),
  };
}
