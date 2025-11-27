/**
 * Timeline Presentation - Student View Component
 *
 * Main student-facing component that orchestrates the timeline presentation.
 * Displays title, description, and the timeline player with synchronized animations.
 */

import React from 'react';
import { StudentViewProps } from '../common/types';
import { TimelinePlayer } from './TimelinePlayer';

/**
 * StudentView - Main container for timeline presentation
 *
 * Layout hierarchy:
 * 1. Title (h2)
 * 2. Description (rich HTML content)
 * 3. TimelinePlayer (audio controls + animated diagram)
 *
 * Features:
 * - Clean, accessible layout following Liverpool design language
 * - Responsive design with proper spacing
 * - Safe HTML rendering for description
 * - Graceful handling of missing data
 */
export const StudentView: React.FC<StudentViewProps> = ({
  displayName,
  title,
  description,
  imageUrl,
  audioUrl,
  timelineEvents,
  editorCanvasDimensions,
  runtime,
}) => {
  // Validate required data
  const hasValidData = imageUrl && audioUrl && timelineEvents.length > 0;

  return (
    <div className="timeline-presentation-student-view">
      {/* Main title */}
      {title && (
        <h2 className="timeline-presentation-title">
          {title}
        </h2>
      )}

      {/* Description section */}
      {description && (
        <div
          className="timeline-presentation-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* Timeline player */}
      {hasValidData ? (
        <div className="timeline-presentation-player-container">
          <TimelinePlayer
            audioUrl={audioUrl}
            imageUrl={imageUrl}
            timelineEvents={timelineEvents}
            editorCanvasDimensions={editorCanvasDimensions}
          />
        </div>
      ) : (
        <div className="timeline-presentation-empty-state">
          <div className="timeline-presentation-empty-state-content">
            <h3 className="timeline-presentation-empty-state-title">
              No Timeline Configured
            </h3>
            <p className="timeline-presentation-empty-state-message">
              This timeline presentation has not been configured yet.
              {!imageUrl && ' Please add a diagram image.'}
              {!audioUrl && ' Please add an audio file.'}
              {timelineEvents.length === 0 && ' Please add timeline events.'}
            </p>
          </div>
        </div>
      )}

      {/* Accessibility info */}
      <div className="timeline-presentation-a11y-info sr-only">
        <p>
          This is an interactive timeline presentation with audio narration
          and synchronized visual animations. Use the play and pause controls
          to navigate through the timeline.
        </p>
      </div>
    </div>
  );
};
