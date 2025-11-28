/**
 * EventSidebar Component
 *
 * Left column of the three-column editor layout.
 * Displays scrollable list of timeline events as beautiful cards.
 *
 * Features:
 * - Pill button to add new events
 * - Scrollable event list with custom scrollbar
 * - Empty state with centered message
 * - Liverpool design tokens throughout
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Icon from '@openedx/paragon/dist/Icon';
import { Add } from '@openedx/paragon/icons';
import type { TimelineEvent } from '../../common/types';
import { EventCard } from './EventCard';
import '../styles/event-sidebar.scss';

interface EventSidebarProps {
  events: TimelineEvent[];
  selectedEventId: string | null;
  onSelectEvent: (eventId: string) => void;
  onAddEvent: () => void;
  onEditEvent: (eventId: string) => void;
  onDeleteEvent: (eventId: string) => void;
}

/**
 * EventSidebar Component
 */
export const EventSidebar: React.FC<EventSidebarProps> = ({
  events,
  selectedEventId,
  onSelectEvent,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
}) => {
  const hasEvents = events.length > 0;

  return (
    <div className="event-sidebar">
      {/* Header with Add Event button */}
      <div className="event-sidebar-header">
        <h5 className="event-sidebar-title">Timeline Events</h5>
        <Button
          variant="primary"
          size="sm"
          onClick={onAddEvent}
          className="event-sidebar-add-btn"
          iconBefore={Add}
        >
          Add Event
        </Button>
      </div>

      {/* Scrollable event list */}
      <div className="event-sidebar-body">
        {hasEvents ? (
          <div className="event-sidebar-list">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                selected={event.id === selectedEventId}
                onSelect={() => onSelectEvent(event.id)}
                onEdit={() => onEditEvent(event.id)}
                onDelete={() => onDeleteEvent(event.id)}
              />
            ))}
          </div>
        ) : (
          <div className="event-sidebar-empty">
            <Icon src={Add} className="event-sidebar-empty-icon" />
            <p className="event-sidebar-empty-text">No events yet</p>
            <p className="event-sidebar-empty-subtext">
              Click "Add Event" to create your first timeline event
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
