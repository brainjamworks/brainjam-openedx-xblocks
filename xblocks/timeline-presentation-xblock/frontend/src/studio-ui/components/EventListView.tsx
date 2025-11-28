/**
 * Event List View Component
 *
 * Table view of all timeline events with sorting and actions
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import IconButton from '@openedx/paragon/dist/IconButton';
import { Add, Edit, Delete, ContentCopy } from '@openedx/paragon/icons';
import type { TimelineEvent } from '../../common/types';

interface EventListViewProps {
  events: TimelineEvent[];
  onAddEvent: () => void;
  onEditEvent: (event: TimelineEvent) => void;
  onDeleteEvent: (eventId: string) => void;
  onDuplicateEvent: (event: TimelineEvent) => void;
}

type SortField = 'timestamp' | 'elementType' | 'animation';
type SortDirection = 'asc' | 'desc';

export const EventListView: React.FC<EventListViewProps> = ({
  events,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
  onDuplicateEvent,
}) => {
  const [sortField, setSortField] = useState<SortField>('timestamp');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedEvents = [...events].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'timestamp':
        comparison = a.timestamp - b.timestamp;
        break;
      case 'elementType':
        comparison = a.elementType.localeCompare(b.elementType);
        break;
      case 'animation':
        comparison = a.animation.localeCompare(b.animation);
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '⇅';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  const handleDelete = (eventId: string, eventTime: number) => {
    if (confirm(`Delete event at ${formatTime(eventTime)}?`)) {
      onDeleteEvent(eventId);
    }
  };

  return (
    <div className="event-list-view">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Timeline Events ({events.length})</h5>
          <Button variant="primary" iconBefore={Add} onClick={onAddEvent} size="sm">
            Add Event
          </Button>
        </Card.Header>
        <Card.Body style={{ padding: 0 }}>
          {events.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted mb-3">No timeline events yet</p>
              <Button variant="outline-primary" iconBefore={Add} onClick={onAddEvent}>
                Add Your First Event
              </Button>
            </div>
          ) : (
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <table className="table table-hover mb-0">
                <thead style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                  <tr>
                    <th style={{ width: '50px' }}>#</th>
                    <th style={{ width: '150px' }}>Name</th>
                    <th
                      style={{ cursor: 'pointer', width: '100px' }}
                      onClick={() => handleSort('timestamp')}
                    >
                      Time {getSortIcon('timestamp')}
                    </th>
                    <th
                      style={{ cursor: 'pointer', width: '120px' }}
                      onClick={() => handleSort('elementType')}
                    >
                      Element {getSortIcon('elementType')}
                    </th>
                    <th
                      style={{ cursor: 'pointer', width: '120px' }}
                      onClick={() => handleSort('animation')}
                    >
                      Animation {getSortIcon('animation')}
                    </th>
                    <th>Content</th>
                    <th style={{ width: '100px' }}>Duration</th>
                    <th style={{ width: '150px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedEvents.map((event, index) => (
                    <tr
                      key={event.id}
                      style={{ cursor: 'pointer' }}
                      onClick={() => onEditEvent(event)}
                    >
                      <td>
                        <span className="badge badge-secondary">{index + 1}</span>
                      </td>
                      <td>
                        <strong>{event.name || 'Unnamed Event'}</strong>
                      </td>
                      <td>
                        <strong>{formatTime(event.timing.startTime)}</strong>
                      </td>
                      <td>
                        <span className="text-capitalize">
                          {event.elementType || <span className="text-muted">Not set</span>}
                        </span>
                      </td>
                      <td>
                        <span className="text-capitalize">
                          {event.animation || <span className="text-muted">Not set</span>}
                          {event.animationDirection && (
                            <span className="text-muted small ml-1">
                              ({event.animationDirection})
                            </span>
                          )}
                        </span>
                      </td>
                      <td>
                        {event.elementType === 'text' && event.content ? (
                          <span className="text-muted">
                            "{event.content.substring(0, 40)}
                            {event.content.length > 40 ? '...' : ''}"
                          </span>
                        ) : event.elementType === 'shape' ? (
                          <span className="text-muted">{event.shapeType || 'shape'}</span>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                      <td>
                        <span className="text-muted small">{event.animationDuration}ms</span>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <div className="d-flex justify-content-end gap-1">
                          <Button
                            iconBefore={Edit}
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditEvent(event);
                            }}
                            variant="primary"
                            size="sm"
                            className="px-2"
                          >
                            Edit
                          </Button>
                          <Button
                            iconBefore={ContentCopy}
                            onClick={(e) => {
                              e.stopPropagation();
                              onDuplicateEvent(event);
                            }}
                            variant="outline-secondary"
                            size="sm"
                            className="px-2"
                          >
                            Copy
                          </Button>
                          <Button
                            iconBefore={Delete}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(event.id, event.timing.startTime);
                            }}
                            variant="danger"
                            size="sm"
                            className="px-2"
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
