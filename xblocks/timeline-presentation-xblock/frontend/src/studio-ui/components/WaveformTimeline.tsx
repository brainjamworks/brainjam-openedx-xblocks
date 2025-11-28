/**
 * WaveformTimeline Component
 *
 * Professional waveform visualization with interactive timeline event markers
 * Uses WaveSurfer.js for audio waveform rendering and regions for event markers
 */

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin, { Region } from 'wavesurfer.js/dist/plugins/regions.js';
import { InfoOutline, PlayCircle, Pause } from '@openedx/paragon/icons';
import Icon from '@openedx/paragon/dist/Icon';
import Button from '@openedx/paragon/dist/Button';
import type { TimelineEvent } from '../../common/types';

interface WaveformTimelineProps {
  audioUrl: string;
  events: TimelineEvent[];
  audioDuration: number;
  onEventClick?: (event: TimelineEvent) => void;
  onEventUpdate?: (eventId: string, newTimestamp: number) => void;
  onAddEvent?: (timestamp: number) => void;
}

/**
 * Get color for event type using Liverpool design tokens
 */
const getEventColor = (elementType?: string): string => {
  // No element type = not yet configured in Design tab, use neutral color
  if (!elementType) {
    return '#8d9695';  // liverpool-neutral-500 (lighter gray for "not set" state)
  }

  switch (elementType) {
    case 'text':
      return '#212b58';  // liverpool-blue
    case 'shape':
      return '#00A689';  // liverpool-teal
    case 'line':
      return '#009CDD';  // liverpool-sky-blue
    case 'arrow':
      return '#EF426F';  // liverpool-pink
    default:
      return '#6c757d';  // liverpool-neutral-600
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

export const WaveformTimeline: React.FC<WaveformTimelineProps> = ({
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

  // Map to track region ID to event ID mapping
  const regionEventMapRef = useRef<Map<string, string>>(new Map());

  // Track if component is mounted to prevent error logging after unmount
  const isMountedRef = useRef<boolean>(true);

  // Track if initial regions have been created (to prevent duplicates)
  const initialRegionsCreatedRef = useRef<boolean>(false);

  // Track previous events array to detect actual changes
  const prevEventsRef = useRef<TimelineEvent[]>([]);

  // =======================================================================
  // REGION CREATION - Extract to function for use in ready handler and effect
  // =======================================================================

  const createRegions = React.useCallback((eventsToAdd: TimelineEvent[]) => {
    if (!regionsPluginRef.current) {
      console.warn('[WaveformTimeline] Cannot create regions - plugin not initialized');
      return;
    }

    const regionsPlugin = regionsPluginRef.current;

    // Clear existing regions
    regionsPlugin.clearRegions();
    regionEventMapRef.current.clear();

    console.log(`[WaveformTimeline] Creating ${eventsToAdd.length} regions`);

    // Add region for each event
    eventsToAdd.forEach((event) => {
      const color = getEventColor(event.elementType);

      console.log('[WaveformTimeline] Adding region:', event.id, 'at', event.timing.startTime, 'seconds');

      // Create region marker (small duration for visibility)
      const region = regionsPlugin.addRegion({
        start: event.timing.startTime,
        end: event.timing.startTime + 0.5, // 500ms duration for visibility
        color: color + '40',         // 25% opacity for region fill
        drag: true,
        resize: false,
        content: event.name || `#${event.id.slice(-4)}`,
      });

      console.log('[WaveformTimeline] Region created:', region.id, 'actual start:', region.start, 'actual end:', region.end);

      // Store mapping
      regionEventMapRef.current.set(region.id, event.id);

      // Handle region interactions
      region.on('click', () => {
        console.log('[WaveformTimeline] Region clicked:', event.id);
        if (onEventClick) {
          onEventClick(event);
        }
      });

      region.on('update-end', () => {
        console.log('[WaveformTimeline] Region dragged to:', region.start);
        if (onEventUpdate) {
          onEventUpdate(event.id, region.start);
        }
      });
    });

    console.log(`[WaveformTimeline] Successfully created ${eventsToAdd.length} regions`);
  }, [onEventClick, onEventUpdate]);

  // =======================================================================
  // INITIALIZATION - Create WaveSurfer instance
  // =======================================================================

  useEffect(() => {
    if (!waveformRef.current || !audioUrl) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create regions plugin
      const regionsPlugin = RegionsPlugin.create();
      regionsPluginRef.current = regionsPlugin;

      // Create WaveSurfer instance
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#9BA4C5',        // liverpool-blue-300
        progressColor: '#212b58',     // liverpool-blue
        cursorColor: '#EF426F',       // liverpool-pink
        barWidth: 2,
        barGap: 1,
        barRadius: 2,
        height: 100,
        normalize: true,
        plugins: [regionsPlugin],
      });

      wavesurferRef.current = wavesurfer;

      // Event Handlers
      // Define error handler so we can remove it later in cleanup
      const handleError = (err: Error) => {
        console.error('[WaveformTimeline] Error loading audio:', err);
        setError('Failed to load audio waveform');
        setIsLoading(false);
      };

      wavesurfer.on('ready', () => {
        const duration = wavesurfer.getDuration();
        console.log('[WaveformTimeline] Waveform ready, duration:', duration, 'seconds');
        setLoadedDuration(duration);
        setIsReady(true);
        setIsLoading(false);

        // Create initial regions HERE - WaveSurfer is definitely ready at this point
        console.log('[WaveformTimeline] Creating initial regions in ready handler');
        createRegions(events);
        initialRegionsCreatedRef.current = true; // Mark initial regions as created
        prevEventsRef.current = events; // Store events to detect future changes
      });

      wavesurfer.on('error', handleError);

      // Playback event listeners
      wavesurfer.on('play', () => {
        console.log('[WaveformTimeline] Playback started');
        setIsPlaying(true);
      });

      wavesurfer.on('pause', () => {
        console.log('[WaveformTimeline] Playback paused');
        setIsPlaying(false);
      });

      wavesurfer.on('timeupdate', (currentTime) => {
        setCurrentTime(currentTime);
      });

      // Click on waveform to add event
      wavesurfer.on('click', (relativeX) => {
        if (onAddEvent) {
          const timestamp = relativeX * wavesurfer.getDuration();
          console.log('[WaveformTimeline] Clicked at', timestamp, 'seconds');
          onAddEvent(timestamp);
        }
      });

      // Load audio with proper error handling
      wavesurfer.load(audioUrl).catch((err) => {
        // Ignore AbortError when component unmounts during load
        if (err.name === 'AbortError') {
          console.debug('[WaveformTimeline] Audio load aborted (component unmounted)');
          return;
        }
        // Other errors still handled by 'error' event listener
      });

      // Cleanup
      return () => {
        if (wavesurfer) {
          // Remove error listener BEFORE destroying to prevent AbortError event from firing
          wavesurfer.un('error', handleError);
          wavesurfer.destroy();
        }
        wavesurferRef.current = null;
        regionsPluginRef.current = null;
        regionEventMapRef.current.clear();
      };
    } catch (err) {
      console.error('[WaveformTimeline] Initialization error:', err);
      setError('Failed to initialize waveform');
      setIsLoading(false);
    }
  }, [audioUrl, onAddEvent]);

  // =======================================================================
  // REGIONS - Sync timeline events to waveform regions when events change
  // =======================================================================

  useEffect(() => {
    // Only update regions if WaveSurfer is ready and duration is loaded
    if (!isReady || !loadedDuration) {
      return;
    }

    // Skip if we haven't created initial regions yet (still in ready handler)
    if (!initialRegionsCreatedRef.current) {
      return;
    }

    // Check if events actually changed (not just isReady/loadedDuration state changes)
    const eventsChanged = events.length !== prevEventsRef.current.length ||
                         events.some((event, index) => event.id !== prevEventsRef.current[index]?.id);

    if (!eventsChanged) {
      console.log('[WaveformTimeline] Effect triggered but events unchanged, skipping region update');
      return;
    }

    // Update regions when events actually change
    console.log('[WaveformTimeline] Events changed, updating regions via effect');
    createRegions(events);
    prevEventsRef.current = events; // Store new events state
  }, [events, isReady, loadedDuration, createRegions]);

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="waveform-timeline">
      <div className="waveform-timeline-header">
        <h6 className="mb-2">Audio Waveform Timeline</h6>
        {isLoading && (
          <p className="text-muted small mb-3">Loading waveform...</p>
        )}
        {isReady && (
          <div
            className="mb-3 p-2 d-flex align-items-start"
            style={{
              backgroundColor: '#E8EAEF',
              borderRadius: '6px',
              borderLeft: '4px solid #212b58',
            }}
          >
            <Icon src={InfoOutline} style={{ marginRight: '8px', marginTop: '2px', color: '#212b58' }} />
            <div className="small">
              <strong>Create Events:</strong> Click anywhere on the waveform below to add a new event.
              <br />
              <strong>Adjust Timing:</strong> Drag existing markers left or right to change when they appear.
            </div>
          </div>
        )}
        {error && (
          <p className="text-danger small mb-3">{error}</p>
        )}
      </div>

      {/* Waveform container */}
      <div
        ref={waveformRef}
        className="waveform-container"
        style={{
          minHeight: '100px',
          border: '1px solid #DBDBD3',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      />

      {/* Playback Controls */}
      {isReady && (
        <div className="waveform-controls mt-3 d-flex justify-content-center align-items-center gap-2">
          <Button
            variant={isPlaying ? 'outline-primary' : 'primary'}
            iconBefore={isPlaying ? Pause : PlayCircle}
            onClick={() => wavesurferRef.current?.playPause()}
            size="sm"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => wavesurferRef.current?.stop()}
            size="sm"
          >
            Stop
          </Button>
          <span className="ms-3 small text-muted">
            {formatTime(currentTime)} / {formatTime(loadedDuration)}
          </span>
        </div>
      )}

      {/* Legend */}
      {isReady && (
        <div className="waveform-legend d-flex justify-content-center mt-3 flex-wrap">
          {['text', 'shape', 'line', 'arrow'].map((type) => (
            <div key={type} className="d-flex align-items-center mr-3 mb-2">
              <div
                style={{
                  width: '24px',
                  height: '12px',
                  backgroundColor: getEventColor(type),
                  borderRadius: '2px',
                  marginRight: '0.5rem',
                }}
              />
              <span className="text-capitalize small">{type}</span>
            </div>
          ))}
        </div>
      )}

      {/* Event count */}
      {isReady && (
        <div className="text-center mt-2 small text-muted">
          {events.length} event{events.length !== 1 ? 's' : ''} • Duration: {formatTime(audioDuration)}
        </div>
      )}
    </div>
  );
};
