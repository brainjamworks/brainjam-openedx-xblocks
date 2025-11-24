/**
 * Audio Player - Student View Component
 *
 * Displays an HTML5 audio player with optional title, description, and download link.
 * Perfect for embedding ElevenLabs-generated audio narration alongside text content.
 */

import React from 'react';
import Icon from '@openedx/paragon/dist/Icon';
import { Download } from '@openedx/paragon/icons';
import './styles/minimal-paragon.scss';

interface StudentViewProps {
  displayName: string;
  title?: string;
  description?: string;
  audioUrl: string;
  showControls: boolean;
  autoplay: boolean;
  showDownload: boolean;
}

/**
 * StudentView Component
 *
 * Renders an accessible HTML5 audio player with Liverpool design styling.
 */
export const StudentView: React.FC<StudentViewProps> = ({
  displayName,
  title,
  description,
  audioUrl,
  showControls,
  autoplay,
  showDownload,
}) => {
  // Show error state if no audio URL provided
  if (!audioUrl) {
    return (
      <div className="audio-player-student-view">
        <div className="audio-player-error">
          <p>No audio file has been configured. Please configure this component in Studio.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="audio-player-student-view">
      {/* Optional title */}
      {title && <h6 className="audio-player-title">{title}</h6>}

      {/* Optional description/text content */}
      {description && (
        <div
          className="audio-player-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* Audio player container */}
      <div className="audio-player-container">
        <audio
          controls={showControls}
          autoPlay={autoplay}
          className="audio-player"
          aria-label={title || displayName}
        >
          <source src={audioUrl} type="audio/mpeg" />
          <p>
            Your browser does not support the audio element.
            {showDownload && (
              <>
                {' '}
                <a href={audioUrl} download>
                  Download the audio file
                </a>
                .
              </>
            )}
          </p>
        </audio>

        {/* Optional download link */}
        {showDownload && (
          <a
            href={audioUrl}
            download
            className="audio-player-download-link"
            aria-label="Download audio file"
          >
            <Icon src={Download} className="download-icon" />
            Download Audio
          </a>
        )}
      </div>
    </div>
  );
};
