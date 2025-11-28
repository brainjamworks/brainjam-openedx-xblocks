/**
 * PreviewPanel Component
 *
 * Mini preview of what students will see
 */

import React, { useState, useRef, useEffect } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import { PlayCircle, PauseCircle, RestartAlt } from '@openedx/paragon/icons';
import type { TimelineEvent } from '../../common/types';

interface PreviewPanelProps {
  imageUrl: string;
  audioUrl: string;
  events: TimelineEvent[];
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  imageUrl,
  audioUrl,
  events,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeEvents, setActiveEvents] = useState<TimelineEvent[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Update active events based on current time
    const active = events.filter(event => event.timing.startTime <= currentTime);
    setActiveEvents(active);
  }, [currentTime, events]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const renderElement = (event: TimelineEvent) => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      transition: `all ${event.animationDuration}ms ease-in-out`,
    };

    // Apply animation
    let animationStyle: React.CSSProperties = {};
    switch (event.animation) {
      case 'fade':
        animationStyle = { opacity: 1 };
        break;
      case 'scale':
        animationStyle = { transform: 'scale(1)' };
        break;
      default:
        animationStyle = { opacity: 1 };
    }

    if (event.elementType === 'text') {
      return (
        <div
          key={event.id}
          style={{
            ...baseStyle,
            ...animationStyle,
            left: `${event.position.x}%`,
            top: `${event.position.y}%`,
            transform: 'translate(-50%, -50%)',
            color: event.color || '#000',
            fontSize: `${event.fontSize || 16}px`,
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          {event.content}
        </div>
      );
    }

    if (event.elementType === 'shape') {
      const shapeStyle: React.CSSProperties = {
        ...baseStyle,
        ...animationStyle,
        left: `${event.position.x}%`,
        top: `${event.position.y}%`,
        transform: 'translate(-50%, -50%)',
        width: `${event.dimensions?.width || 50}px`,
        height: `${event.dimensions?.height || 50}px`,
        backgroundColor: event.color || '#000',
      };

      if (event.shapeType === 'circle') {
        shapeStyle.borderRadius = '50%';
      } else if (event.shapeType === 'triangle') {
        // Triangle using CSS borders
        shapeStyle.width = '0';
        shapeStyle.height = '0';
        shapeStyle.backgroundColor = 'transparent';
        shapeStyle.borderLeft = `${(event.dimensions?.width || 50) / 2}px solid transparent`;
        shapeStyle.borderRight = `${(event.dimensions?.width || 50) / 2}px solid transparent`;
        shapeStyle.borderBottom = `${event.dimensions?.height || 50}px solid ${event.color || '#000'}`;
      }

      return <div key={event.id} style={shapeStyle} />;
    }

    if (event.elementType === 'line' || event.elementType === 'arrow') {
      const coords = event.lineCoordinates || { x1: 0, y1: 0, x2: 100, y2: 100 };
      const x1 = coords.x1;
      const y1 = coords.y1;
      const x2 = coords.x2;
      const y2 = coords.y2;

      // Calculate line angle and length
      const dx = x2 - x1;
      const dy = y2 - y1;
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      const length = Math.sqrt(dx * dx + dy * dy);

      return (
        <div
          key={event.id}
          style={{
            ...baseStyle,
            ...animationStyle,
            left: `${x1}%`,
            top: `${y1}%`,
            width: `${length}%`,
            height: `${event.thickness || 2}px`,
            backgroundColor: event.color || '#000',
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
          }}
        />
      );
    }

    return null;
  };

  return (
    <Card className="preview-panel">
      <Card.Header>
        <h6 className="mb-0">Preview</h6>
      </Card.Header>
      <Card.Body>
        {!imageUrl || !audioUrl ? (
          <div className="text-center py-5 text-muted">
            <p>Upload an image and audio file to preview</p>
          </div>
        ) : (
          <>
            {/* Preview Canvas */}
            <div
              className="preview-canvas"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                border: '2px solid #dee2e6',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <img
                src={imageUrl}
                alt="Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              {/* Rendered elements */}
              {activeEvents.map(renderElement)}
            </div>

            {/* Audio controls */}
            <div className="mt-3 text-center">
              <audio
                ref={audioRef}
                src={audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                style={{ display: 'none' }}
              />

              <div className="d-flex justify-content-center align-items-center mb-2">
                <Button
                  variant="primary"
                  iconBefore={isPlaying ? PauseCircle : PlayCircle}
                  onClick={handlePlayPause}
                  className="mr-2"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button
                  variant="outline-secondary"
                  iconBefore={RestartAlt}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>

              {/* Progress bar */}
              {audioRef.current && (
                <div className="progress" style={{ height: '8px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${(currentTime / (audioRef.current.duration || 1)) * 100}%`,
                    }}
                  />
                </div>
              )}

              <small className="text-muted mt-2 d-block">
                {currentTime.toFixed(1)}s
                {audioRef.current?.duration && ` / ${audioRef.current.duration.toFixed(1)}s`}
              </small>
            </div>

            {/* Active events info */}
            {activeEvents.length > 0 && (
              <div className="mt-3">
                <small className="text-muted">
                  Active elements: {activeEvents.length}
                </small>
              </div>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};
