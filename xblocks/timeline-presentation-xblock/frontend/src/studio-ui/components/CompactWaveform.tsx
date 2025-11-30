/**
 * CompactWaveform Component
 *
 * Compact waveform timeline for center column of fullscreen editor.
 * Maximizes space by removing unnecessary chrome.
 *
 * Features:
 * - Interactive audio waveform with WaveSurfer.js
 * - Event markers with drag support
 * - Inline playback controls with pill buttons
 * - Liverpool design tokens throughout
 * - No titles or instructions - just the essentials
 */

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin, { Region } from 'wavesurfer.js/dist/plugins/regions.js';
import { PlayCircle, Pause, Stop } from '@openedx/paragon/icons';
import Icon from '@openedx/paragon/dist/Icon';
import Button from '@openedx/paragon/dist/Button';
import type { TimelineEvent } from '../../common/types';
import '../styles/compact-waveform.scss';

interface CompactWaveformProps {
  audioUrl: string;
  events: TimelineEvent[];
  audioDuration: number;
  onEventClick?: (event: TimelineEvent) => void;
  onEventUpdate?: (eventId: string, newTimestamp: number) => void;
  onAddEvent?: (timestamp: number) => void;
}

/**
 * Get Liverpool color for event type
 */
const getEventColor = (elementType?: string): string => {
  if (!elementType) return '#8d9695'; // liverpool-neutral-500

  switch (elementType) {
    case 'text':
      return '#212b58'; // liverpool-blue
    case 'shape':
      return '#00A689'; // liverpool-teal
    case 'line':
      return '#009CDD'; // liverpool-sky-blue
    case 'arrow':
      return '#EF426F'; // liverpool-pink
    default:
      return '#6c757d'; // liverpool-neutral-600
  }
};

/**
 * Format seconds to MM:SS
 */
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const CompactWaveform: React.FC<CompactWaveformProps> = ({
  audioUrl,
  events,
  audioDuration,
  onEventClick,
  onEventUpdate,
  onAddEvent,
}) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const regionsPluginRef = useRef<RegionsPlugin | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadedDuration, setLoadedDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const regionEventMapRef = useRef<Map<string, string>>(new Map());
  const initialRegionsCreatedRef = useRef<boolean>(false);
  const prevEventsRef = useRef<TimelineEvent[]>([]);

  // =======================================================================
  // REGION CREATION
  // =======================================================================

  const createRegions = React.useCallback((eventsToAdd: TimelineEvent[]) => {
    if (!regionsPluginRef.current) return;

    const regionsPlugin = regionsPluginRef.current;
    regionsPlugin.clearRegions();
    regionEventMapRef.current.clear();

    eventsToAdd.forEach((event) => {
      const color = getEventColor(event.elementType);
      const region = regionsPlugin.addRegion({
        start: event.timing.startTime,
        end: event.timing.startTime + 0.5,
        color: color + '40',
        drag: true,
        resize: false,
        content: event.name || `#${event.id.slice(-4)}`,
      });

      regionEventMapRef.current.set(region.id, event.id);

      region.on('click', () => {
        if (onEventClick) onEventClick(event);
      });

      region.on('update-end', () => {
        if (onEventUpdate) onEventUpdate(event.id, region.start);
      });
    });
  }, [onEventClick, onEventUpdate]);

  // =======================================================================
  // INITIALIZATION
  // =======================================================================

  useEffect(() => {
    if (!waveformRef.current || !audioUrl) return;

    setIsLoading(true);
    setError(null);

    try {
      const regionsPlugin = RegionsPlugin.create();
      regionsPluginRef.current = regionsPlugin;

      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#9BA4C5',      // liverpool-blue-300
        progressColor: '#212b58',   // liverpool-blue
        cursorColor: '#EF426F',     // liverpool-pink
        barWidth: 2,
        barGap: 1,
        barRadius: 2,
        height: 80,
        normalize: true,
        plugins: [regionsPlugin],
      });

      wavesurferRef.current = wavesurfer;

      const handleError = (err: Error) => {
  // console.error('[CompactWaveform] Error loading audio:', err);
        setError('Failed to load audio');
        setIsLoading(false);
      };

      wavesurfer.on('ready', () => {
        const duration = wavesurfer.getDuration();
        setLoadedDuration(duration);
        setIsReady(true);
        setIsLoading(false);
        createRegions(events);
        initialRegionsCreatedRef.current = true;
        prevEventsRef.current = events;
      });

      wavesurfer.on('error', handleError);
      wavesurfer.on('play', () => setIsPlaying(true));
      wavesurfer.on('pause', () => setIsPlaying(false));
      wavesurfer.on('timeupdate', (currentTime) => setCurrentTime(currentTime));

      wavesurfer.on('click', (relativeX) => {
        if (onAddEvent) {
          const timestamp = relativeX * wavesurfer.getDuration();
          onAddEvent(timestamp);
        }
      });

      wavesurfer.load(audioUrl).catch((err) => {
        if (err.name === 'AbortError') return;
      });

      return () => {
        if (wavesurfer) {
          wavesurfer.un('error', handleError);
          wavesurfer.destroy();
        }
        wavesurferRef.current = null;
        regionsPluginRef.current = null;
        regionEventMapRef.current.clear();
      };
    } catch (err) {
  // console.error('[CompactWaveform] Initialization error:', err);
      setError('Failed to initialize');
      setIsLoading(false);
    }
  }, [audioUrl, onAddEvent]);

  // =======================================================================
  // REGIONS - Sync events to regions
  // =======================================================================

  useEffect(() => {
    if (!isReady || !loadedDuration || !initialRegionsCreatedRef.current) return;

    const eventsChanged = events.length !== prevEventsRef.current.length ||
                         events.some((event, index) => event.id !== prevEventsRef.current[index]?.id);

    if (!eventsChanged) return;

    createRegions(events);
    prevEventsRef.current = events;
  }, [events, isReady, loadedDuration, createRegions]);

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="compact-waveform">
      {/* Waveform container */}
      <div
        ref={waveformRef}
        className="compact-waveform-container"
      />

      {/* Loading state */}
      {isLoading && (
        <div className="compact-waveform-loading">
          <div className="compact-waveform-spinner" />
          <span>Loading waveform...</span>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="compact-waveform-error">
          {error}
        </div>
      )}

      {/* Playback controls */}
      {isReady && (
        <div className="compact-waveform-controls">
          <div className="compact-waveform-buttons">
            <Button
              variant="primary"
              size="sm"
              onClick={() => wavesurferRef.current?.playPause()}
              className="compact-waveform-btn compact-waveform-btn-play"
              iconBefore={isPlaying ? Pause : PlayCircle}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button
              variant="tertiary"
              size="sm"
              onClick={() => wavesurferRef.current?.stop()}
              className="compact-waveform-btn"
              iconBefore={Stop}
            >
              Stop
            </Button>
          </div>
          <div className="compact-waveform-time">
            <span className="compact-waveform-time-current">{formatTime(currentTime)}</span>
            <span className="compact-waveform-time-separator">/</span>
            <span className="compact-waveform-time-duration">{formatTime(loadedDuration)}</span>
          </div>
        </div>
      )}
    </div>
  );
};
