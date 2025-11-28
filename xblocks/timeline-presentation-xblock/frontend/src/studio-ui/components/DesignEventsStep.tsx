/**
 * DesignEventsStep Component
 *
 * Beautiful 3-column layout for timeline event editing
 * Left: Event list | Center: Waveform + Canvas | Right: Properties
 */

import React from 'react';
import type { TimelineEvent } from '../../common/types';
import { EventListView } from './EventListView';
import { WaveformTimeline } from './WaveformTimeline';
import { VisualEditor } from './VisualEditor';
import { DrawingToolbar } from './DrawingToolbar';
import { EventPropertiesPanel } from './EventPropertiesPanel';

interface DesignEventsStepProps {
  // Event list props
  events: TimelineEvent[];
  onAddEvent: () => void;
  onEditEvent: (event: TimelineEvent) => void;
  onDeleteEvent: (eventId: string) => void;
  onDuplicateEvent: (event: TimelineEvent) => void;

  // Waveform props
  audioUrl: string;
  audioDuration: number;
  onWaveformEventClick?: (event: TimelineEvent) => void;
  onWaveformEventUpdate?: (eventId: string, newTimestamp: number) => void;
  onWaveformAddEvent?: (timestamp: number) => void;

  // Visual editor props
  backgroundImageUrl: string;
  drawingMode: any;
  currentColor: string;
  currentThickness: number;
  editingEventId: string | null;
  onModeChange: (mode: any) => void;
  onColorChange: (color: string) => void;
  onThicknessChange: (thickness: number) => void;
  onEventCreate: (event: any) => void;
  onEventUpdate: (eventId: string, updates: any) => void;
  onEventSelect: (eventId: string | null) => void;
  onEventDelete: (eventId: string) => void;
  onCanvasDimensionsChange: (dimensions: {width: number; height: number}) => void;

  // Properties panel props
  onPropertyChange: (updates: Partial<TimelineEvent>) => void;
  onSave: () => void;
  onCancel: () => void;
}

export const DesignEventsStep: React.FC<DesignEventsStepProps> = ({
  events,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
  onDuplicateEvent,
  audioUrl,
  audioDuration,
  onWaveformEventClick,
  onWaveformEventUpdate,
  onWaveformAddEvent,
  backgroundImageUrl,
  drawingMode,
  currentColor,
  currentThickness,
  editingEventId,
  onModeChange,
  onColorChange,
  onThicknessChange,
  onEventCreate,
  onEventUpdate,
  onEventSelect,
  onEventDelete,
  onCanvasDimensionsChange,
  onPropertyChange,
  onSave,
  onCancel,
}) => {
  const selectedEvent = events.find(e => e.id === editingEventId) || null;
  return (
    <div className="studio-editor-fullscreen">
      {/* Left Column: Event List */}
      <div className="studio-column-left">
        <div className="studio-card">
          <div className="studio-card-header">
            <h4 className="studio-card-title">Timeline Events</h4>
            <span className="badge badge-secondary">{events.length}</span>
          </div>
          <EventListView
            events={events}
            onAddEvent={onAddEvent}
            onEditEvent={onEditEvent}
            onDeleteEvent={onDeleteEvent}
            onDuplicateEvent={onDuplicateEvent}
          />
        </div>
      </div>

      {/* Center Column: Waveform + Canvas */}
      <div className="studio-column-center">
        {/* Waveform Panel (Top 30%) */}
        <div className="waveform-panel">
          <WaveformTimeline
            audioUrl={audioUrl}
            events={events}
            audioDuration={audioDuration}
            onEventClick={onWaveformEventClick}
            onEventUpdate={onWaveformEventUpdate}
            onAddEvent={onWaveformAddEvent}
          />
        </div>

        {/* Canvas Panel (Bottom 70%) */}
        <div className="canvas-panel">
          <DrawingToolbar
            currentMode={drawingMode}
            onModeChange={onModeChange}
            color={currentColor}
            onColorChange={onColorChange}
            thickness={currentThickness}
            onThicknessChange={onThicknessChange}
          />
          <VisualEditor
            backgroundImageUrl={backgroundImageUrl}
            events={events}
            selectedEventId={selectedEvent?.id || null}
            editingEventId={editingEventId}
            drawingMode={drawingMode}
            currentColor={currentColor}
            currentThickness={currentThickness}
            onEventCreate={onEventCreate}
            onEventUpdate={onEventUpdate}
            onEventSelect={onEventSelect}
            onEventDelete={onEventDelete}
            onCanvasDimensionsChange={onCanvasDimensionsChange}
          />
        </div>
      </div>

      {/* Right Column: Properties Panel */}
      <div className="studio-column-right">
        <div className="properties-panel">
          {editingEventId && selectedEvent ? (
            <EventPropertiesPanel
              event={selectedEvent}
              audioDuration={audioDuration}
              onChange={onPropertyChange}
              onSave={onSave}
              onCancel={onCancel}
            />
          ) : (
            <div className="text-center text-muted py-5">
              <p>Select an event to edit its properties</p>
              <p className="small">Click an event in the list or on the canvas</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
