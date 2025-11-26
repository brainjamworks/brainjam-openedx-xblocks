/**
 * TimelineTrack Component
 *
 * Visual timeline showing events as blocks on a horizontal track
 */

import React from 'react';
import type { TimelineEvent } from '../../common/types';

interface TimelineTrackProps {
  events: TimelineEvent[];
  audioDuration: number;
  onEventClick?: (event: TimelineEvent) => void;
}

export const TimelineTrack: React.FC<TimelineTrackProps> = ({
  events,
  audioDuration,
  onEventClick,
}) => {
  const sortedEvents = [...events].sort((a, b) => a.timestamp - b.timestamp);

  const getEventPosition = (timestamp: number) => {
    if (audioDuration === 0) return 0;
    return (timestamp / audioDuration) * 100;
  };

  const getEventColor = (elementType: string) => {
    switch (elementType) {
      case 'text':
        return '#0075b4';
      case 'shape':
        return '#1e8a44';
      case 'line':
        return '#e67e22';
      case 'arrow':
        return '#9b59b6';
      default:
        return '#6c757d';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Generate time markers (every 10 seconds or adjust based on duration)
  const generateTimeMarkers = () => {
    const markers = [];
    const interval = audioDuration <= 60 ? 10 : 30;

    for (let i = 0; i <= audioDuration; i += interval) {
      markers.push(i);
    }

    if (markers[markers.length - 1] !== audioDuration) {
      markers.push(audioDuration);
    }

    return markers;
  };

  const timeMarkers = generateTimeMarkers();

  return (
    <div className="timeline-track">
      <h6 className="mb-3">Timeline Overview</h6>

      {audioDuration === 0 ? (
        <div className="text-center py-4 text-muted">
          <p>Upload an audio file to see the timeline</p>
        </div>
      ) : (
        <div className="timeline-container">
          {/* Time ruler */}
          <div className="timeline-ruler" style={{ position: 'relative', marginBottom: '0.5rem' }}>
            {timeMarkers.map((time, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${getEventPosition(time)}%`,
                  transform: 'translateX(-50%)',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                }}
              >
                {formatTime(time)}
              </div>
            ))}
          </div>

          {/* Timeline track */}
          <div
            className="timeline-bar"
            style={{
              position: 'relative',
              height: '60px',
              background: 'linear-gradient(to right, #e9ecef 0%, #dee2e6 100%)',
              borderRadius: '4px',
              marginTop: '1.5rem',
              border: '1px solid #ced4da',
            }}
          >
            {/* Time markers (tick marks) */}
            {timeMarkers.map((time, idx) => (
              <div
                key={`tick-${idx}`}
                style={{
                  position: 'absolute',
                  left: `${getEventPosition(time)}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  backgroundColor: '#adb5bd',
                  opacity: 0.5,
                }}
              />
            ))}

            {/* Event blocks */}
            {sortedEvents.map((event, idx) => {
              const position = getEventPosition(event.timestamp);
              const color = getEventColor(event.elementType);

              return (
                <div
                  key={event.id}
                  onClick={() => onEventClick?.(event)}
                  style={{
                    position: 'absolute',
                    left: `${position}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '12px',
                    height: '12px',
                    backgroundColor: color,
                    borderRadius: '50%',
                    border: '2px solid white',
                    cursor: onEventClick ? 'pointer' : 'default',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.2s',
                    zIndex: sortedEvents.length - idx,
                  }}
                  title={`${formatTime(event.timestamp)} - ${event.elementType}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  }}
                />
              );
            })}
          </div>

          {/* Legend */}
          <div className="timeline-legend d-flex justify-content-center mt-3 flex-wrap">
            {['text', 'shape', 'line', 'arrow'].map((type) => (
              <div key={type} className="d-flex align-items-center mr-3 mb-2">
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: getEventColor(type),
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    border: '2px solid white',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                  }}
                />
                <span className="text-capitalize small">{type}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
