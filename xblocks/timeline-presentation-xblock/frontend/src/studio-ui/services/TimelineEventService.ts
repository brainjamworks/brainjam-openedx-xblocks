/**
 * TimelineEventService - Single Source of Truth for Timeline Events
 *
 * Simple service pattern for managing timeline events with:
 * - CRUD operations (Create, Read, Update, Delete)
 * - Subscriber pattern for React integration
 * - Centralized validation and business logic
 *
 * Benefits:
 * - No state synchronization issues
 * - Consistent API across all editors
 * - Easy to test and maintain
 * - Can add undo/redo, validation, logging later
 */

import { TimelineEvent } from '../../common/types';

type Listener = () => void;

export class TimelineEventService {
  private events: TimelineEvent[] = [];
  private listeners: Set<Listener> = new Set();

  /**
   * Initialize service with events (e.g., loaded from backend)
   */
  initialize(events: TimelineEvent[]): void {
    this.events = events;
    this.notify();
  }

  /**
   * Get all events
   */
  getAll(): TimelineEvent[] {
    return this.events;
  }

  /**
   * Get event by ID
   */
  getById(id: string): TimelineEvent | undefined {
    return this.events.find(e => e.id === id);
  }

  /**
   * Create new event
   */
  create(event: TimelineEvent): void {
    this.events = [...this.events, event];
    this.notify();
  }

  /**
   * Update event by ID
   * Only updates properties provided in `updates` (partial update)
   */
  update(id: string, updates: Partial<TimelineEvent>): void {
    console.log('[Service] UPDATE called:', { id, updates });
    const before = this.events.find(e => e.id === id);
    this.events = this.events.map(e =>
      e.id === id ? { ...e, ...updates } : e
    );
    const after = this.events.find(e => e.id === id);
    console.log('[Service] Event updated:', { before, after });
    this.notify();
  }

  /**
   * Delete event by ID
   */
  delete(id: string): void {
    this.events = this.events.filter(e => e.id !== id);
    this.notify();
  }

  /**
   * Replace entire events array
   * Useful for batch operations or reset
   */
  replaceAll(events: TimelineEvent[]): void {
    this.events = events;
    this.notify();
  }

  /**
   * Subscribe to changes
   * Returns unsubscribe function
   */
  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Notify all subscribers of change
   */
  private notify(): void {
    console.log('[Service] NOTIFY called - notifying', this.listeners.size, 'listeners');
    this.listeners.forEach(listener => listener());
    console.log('[Service] All listeners notified');
  }

  /**
   * Clear all events (useful for testing/reset)
   */
  clear(): void {
    this.events = [];
    this.notify();
  }

  /**
   * Get count of events
   */
  count(): number {
    return this.events.length;
  }
}

// Singleton instance for application-wide use
export const timelineEventService = new TimelineEventService();
