/**
 * WaveformTimeline Component
 *
 * Professional waveform visualization with interactive timeline event markers
 * Uses WaveSurfer.js for audio waveform rendering and regions for event markers
 */

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin, { Region } from 'wavesurfer.js/dist/plugins/regions.js';
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

  // Map to track region ID to event ID mapping
  const regionEventMapRef = useRef<Map<string, string>>(new Map());

  // Track if component is mounted to prevent error logging after unmount
  const isMountedRef = useRef<boolean>(true);

  // =======================================================================
  // INITIALIZATION - Create WaveSurfer instance
  // =======================================================================

  useEffect(() => {
    if (!waveformRef.current || !audioUrl) {
      return;
    }

    // Reset mounted flag when effect runs
    isMountedRef.current = true;

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
      wavesurfer.on('ready', () => {
        console.log('[WaveformTimeline] Waveform ready');
        setIsReady(true);
        setIsLoading(false);
      });

      wavesurfer.on('error', (err) => {
        // Only log errors if component is still mounted (prevents AbortError spam on unmount)
        if (isMountedRef.current) {
          console.error('[WaveformTimeline] Error loading audio:', err);
          setError('Failed to load audio waveform');
          setIsLoading(false);
        }
      });

      // Click on waveform to add event
      wavesurfer.on('click', (relativeX) => {
        if (onAddEvent) {
          const timestamp = relativeX * wavesurfer.getDuration();
          console.log('[WaveformTimeline] Clicked at', timestamp, 'seconds');
          onAddEvent(timestamp);
        }
      });

      // Load audio
      wavesurfer.load(audioUrl);

      // Cleanup
      return () => {
        // Mark as unmounted BEFORE destroying to prevent error handler from logging
        isMountedRef.current = false;

        try {
          wavesurfer?.destroy();
        } catch (err) {
          // Ignore cleanup errors (e.g., AbortError if component unmounts during load)
          console.debug('[WaveformTimeline] Cleanup error (safe to ignore):', err);
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
  // REGIONS - Sync timeline events to waveform regions
  // =======================================================================

  useEffect(() => {
    if (!isReady || !regionsPluginRef.current) {
      return;
    }

    const regionsPlugin = regionsPluginRef.current;

    // Clear existing regions
    regionsPlugin.clearRegions();
    regionEventMapRef.current.clear();

    // Add region for each event
    events.forEach((event) => {
      const color = getEventColor(event.elementType);

      // Create region marker (small duration for visibility)
      const region = regionsPlugin.addRegion({
        start: event.timestamp,
        end: event.timestamp + 0.5, // 500ms duration for visibility
        color: color + '40',         // 25% opacity for region fill
        drag: true,
        resize: false,
        content: event.name || `#${event.id.slice(-4)}`,
      });

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

    console.log(`[WaveformTimeline] Created ${events.length} regions`);
  }, [events, isReady, onEventClick, onEventUpdate]);

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="waveform-timeline">
      <div className="waveform-timeline-header">
        <h6 className="mb-2">Audio Waveform Timeline</h6>
        <p className="text-muted small mb-3">
          {isLoading && 'Loading waveform...'}
          {isReady && 'Click on waveform to add event • Drag markers to adjust timing'}
          {error && error}
        </p>
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
          backgroundColor: '#F8F9FA',
        }}
      />

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
