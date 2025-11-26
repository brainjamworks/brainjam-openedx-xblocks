/**
 * Timeline Player Component
 *
 * Orchestrates audio playback, diagram display, and timeline animation sync.
 * Main interactive component for the student experience.
 */

import React, { useRef, useState, useEffect } from 'react';
import Button from '@openedx/paragon/dist/Button';
import ProgressBar from '@openedx/paragon/dist/ProgressBar';
import { PlayCircle, PauseCircle, Refresh } from '@openedx/paragon/icons';
import { TimelinePlayerProps } from '../common/types';
import { useTimelineSync } from './AnimationEngine';
import { DiagramCanvas } from './DiagramCanvas';

/**
 * TimelinePlayer - Audio-synced diagram animation player
 *
 * Features:
 * - HTML5 audio player with custom controls
 * - Progress bar with current time / duration
 * - Play/Pause/Replay functionality
 * - Synchronized timeline animations
 * - Responsive layout
 */
export const TimelinePlayer: React.FC<TimelinePlayerProps> = ({
  audioUrl,
  imageUrl,
  timelineEvents,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [audioError, setAudioError] = useState(false);

  // Use animation engine to sync timeline events
  const activeElements = useTimelineSync(
    audioRef,
    timelineEvents,
    (event) => {
      // Optional: Log event triggers for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('Timeline event triggered:', event.id, 'at', event.timestamp);
      }
    }
  );

  /**
   * Handle play/pause toggle
   */
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  /**
   * Handle replay - restart from beginning
   */
  const handleReplay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  };

  /**
   * Handle audio time updates
   */
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(audio.currentTime);
  };

  /**
   * Handle audio metadata loaded (duration available)
   */
  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setDuration(audio.duration);
    setIsLoading(false);
  };

  /**
   * Handle audio load error
   */
  const handleAudioError = () => {
    setAudioError(true);
    setIsLoading(false);
    console.error('Failed to load audio:', audioUrl);
  };

  /**
   * Sync play/pause state with audio element
   */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  /**
   * Format time in MM:SS format
   */
  const formatTime = (seconds: number): string => {
    if (!isFinite(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  /**
   * Calculate progress percentage
   */
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="timeline-player">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleAudioError}
        preload="metadata"
      />

      {/* Diagram canvas with animated elements */}
      <DiagramCanvas
        imageUrl={imageUrl}
        activeElements={activeElements}
      />

      {/* Audio controls */}
      <div className="timeline-player-controls">
        {/* Error state */}
        {audioError && (
          <div className="timeline-player-error">
            <p className="timeline-player-error-text">
              Failed to load audio. Please check the audio URL.
            </p>
          </div>
        )}

        {/* Loading state */}
        {isLoading && !audioError && (
          <div className="timeline-player-loading">
            <div className="timeline-player-loading-spinner" />
            <span>Loading audio...</span>
          </div>
        )}

        {/* Controls (visible when audio is loaded) */}
        {!isLoading && !audioError && (
          <>
            {/* Progress bar */}
            <div className="timeline-player-progress">
              <ProgressBar
                now={progressPercent}
                variant="primary"
                className="timeline-player-progress-bar"
                aria-label="Audio playback progress"
              />
              <div className="timeline-player-time">
                <span className="timeline-player-time-current">
                  {formatTime(currentTime)}
                </span>
                <span className="timeline-player-time-separator">/</span>
                <span className="timeline-player-time-duration">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Control buttons */}
            <div className="timeline-player-buttons">
              {/* Play/Pause button */}
              <Button
                variant="primary"
                size="lg"
                onClick={handlePlayPause}
                className="timeline-player-button timeline-player-button-play-pause"
                iconBefore={isPlaying ? PauseCircle : PlayCircle}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </Button>

              {/* Replay button */}
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleReplay}
                className="timeline-player-button timeline-player-button-replay"
                iconBefore={Refresh}
              >
                Replay
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Debug panel (development only) */}
      {process.env.NODE_ENV === 'development' && !isLoading && (
        <div className="timeline-player-debug">
          <details>
            <summary>Debug Info</summary>
            <div className="timeline-player-debug-content">
              <p>Playing: {isPlaying ? 'Yes' : 'No'}</p>
              <p>Current Time: {currentTime.toFixed(2)}s</p>
              <p>Duration: {duration.toFixed(2)}s</p>
              <p>Active Elements: {activeElements.length}</p>
              <p>Total Events: {timelineEvents.length}</p>
            </div>
          </details>
        </div>
      )}
    </div>
  );
};
