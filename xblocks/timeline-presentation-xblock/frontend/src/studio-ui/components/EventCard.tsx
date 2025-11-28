/**
 * EventCard Component
 *
 * Beautiful card representation of a timeline event with Liverpool design tokens.
 * Replaces the old table row view with a more visual, interactive card.
 *
 * Features:
 * - Hover lift effect
 * - Selected state with blue accent border
 * - Event type badge
 * - Inline edit/delete actions
 * - Timestamp display
 * - Animation info
 */

import React from 'react';
import Icon from '@openedx/paragon/dist/Icon';
import IconButton from '@openedx/paragon/dist/IconButton';
import {
  Edit,
  Delete,
  TextFields,
  Circle,
  Remove,
  ArrowForward,
  HelpOutline,
  Crop169,
} from '@openedx/paragon/icons';
import type { TimelineEvent } from '../../common/types';
import '../styles/event-card.scss';

interface EventCardProps {
  event: TimelineEvent;
  selected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * Format seconds to MM:SS display
 */
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Get appropriate icon for element type
 */
const getTypeIcon = (type?: string) => {
  switch (type) {
    case 'text':
      return TextFields;
    case 'shape':
      return Circle;
    case 'line':
      return Remove;
    case 'arrow':
      return ArrowForward;
    case 'rectangle':
      return Crop169;
    default:
      return HelpOutline;
  }
};

/**
 * Get direction arrow for animations
 */
const getDirectionArrow = (direction?: string): string => {
  switch (direction) {
    case 'up':
      return '↑';
    case 'down':
      return '↓';
    case 'left':
      return '←';
    case 'right':
      return '→';
    default:
      return '';
  }
};

/**
 * EventCard Component
 */
export const EventCard: React.FC<EventCardProps> = ({
  event,
  selected,
  onSelect,
  onEdit,
  onDelete,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      className={`event-card ${selected ? 'selected' : ''}`}
      onClick={onSelect}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`Event: ${event.name || 'Unnamed'}, Time: ${formatTime(event.timing?.startTime ?? 0)}`}
    >
      {/* Header: Name + Actions */}
      <div className="event-card-header">
        <h6>{event.name || 'Unnamed Event'}</h6>
        <div className="event-card-actions" onClick={(e) => e.stopPropagation()}>
          <IconButton
            src={Edit}
            iconAs={Icon}
            alt="Edit event"
            onClick={onEdit}
            size="sm"
            variant="tertiary"
            className="icon-btn"
          />
          <IconButton
            src={Delete}
            iconAs={Icon}
            alt="Delete event"
            onClick={onDelete}
            size="sm"
            variant="tertiary"
            className="icon-btn icon-btn-danger"
          />
        </div>
      </div>

      {/* Row 1: Timestamp + Type Badge */}
      <div className="event-card-row">
        <span className="event-timestamp">
          🕐 {formatTime(event.timing?.startTime ?? 0)}
        </span>
        <span className="event-type-badge">
          <Icon src={getTypeIcon(event.elementType)} />
          {event.elementType || 'Not set'}
        </span>
      </div>

      {/* Row 2: Animation + Duration */}
      {(event.entryAnimation?.type || event.animation) && (
        <div className="event-card-row">
          <span className="event-animation">
            {event.entryAnimation?.type || event.animation || 'None'}
            {(event.entryAnimation?.direction || event.animationDirection) &&
              ` ${getDirectionArrow(event.entryAnimation?.direction || event.animationDirection)}`}
          </span>
          <span className="event-duration">
            {event.entryAnimation?.duration || event.animationDuration || 500}ms
          </span>
        </div>
      )}
    </div>
  );
};
