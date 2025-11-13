/**
 * Step 4: Review
 *
 * Summary of all configuration with links to edit each section.
 * Final step before saving changes to the backend.
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import Badge from '@openedx/paragon/dist/Badge';
import type { Hotspot } from '../../common/types';

interface Step4Props {
  displayName: string;
  questionText: string;
  gradingMode: string;
  maxAttempts: number;
  showFeedbackMode: string;
  weight: number;
  imageUrl: string;
  hotspots: Hotspot[];
  onNavigateToStep: (step: string) => void;
}

export const Step4Review: React.FC<Step4Props> = ({
  displayName,
  questionText,
  gradingMode,
  maxAttempts,
  showFeedbackMode,
  weight,
  imageUrl,
  hotspots,
  onNavigateToStep
}) => {
  /**
   * Truncate text for preview
   */
  const truncate = (text: string, maxLength: number = 150): string => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  /**
   * Strip HTML tags from text
   */
  const stripHtml = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  /**
   * Format grading mode for display
   */
  const formatGradingMode = (mode: string): string => {
    const modes: { [key: string]: string } = {
      'partial_credit': 'Partial Credit',
      'all_or_nothing': 'All or Nothing',
      'first_correct': 'First Correct'
    };
    return modes[mode] || mode;
  };

  /**
   * Format feedback mode for display
   */
  const formatFeedbackMode = (mode: string): string => {
    const modes: { [key: string]: string } = {
      'on_submit': 'On Submit',
      'immediate': 'Immediate'
    };
    return modes[mode] || mode;
  };

  const correctHotspots = hotspots.filter(h => h.correct);
  const incorrectHotspots = hotspots.filter(h => !h.correct);

  return (
    <div className="wizard-step-content">
      {/* Basic Settings Summary */}
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="h6 mb-0">Basic Settings</h4>
            <Button
              variant="link"
              size="sm"
              onClick={() => onNavigateToStep('step1')}
              style={{ fontSize: '0.875rem' }}
            >
              Edit
            </Button>
          </div>
        </Card.Header>
        <Card.Section>
          <div className="mb-3">
            <strong className="d-block text-muted small">Display Name</strong>
            <span>{displayName}</span>
          </div>

          <div className="mb-3">
            <strong className="d-block text-muted small">Question Text</strong>
            <span>{truncate(stripHtml(questionText))}</span>
          </div>

          <div className="row">
            <div className="col-md-4">
              <strong className="d-block text-muted small">Grading Mode</strong>
              <span>{formatGradingMode(gradingMode)}</span>
            </div>
            <div className="col-md-4">
              <strong className="d-block text-muted small">Max Attempts</strong>
              <span>{maxAttempts === 0 ? 'Unlimited' : maxAttempts}</span>
            </div>
            <div className="col-md-4">
              <strong className="d-block text-muted small">Feedback Mode</strong>
              <span>{formatFeedbackMode(showFeedbackMode)}</span>
            </div>
          </div>
        </Card.Section>
      </Card>

      {/* Image Summary */}
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="h6 mb-0">Image</h4>
            <Button
              variant="link"
              size="sm"
              onClick={() => onNavigateToStep('step2')}
              style={{ fontSize: '0.875rem' }}
            >
              Edit
            </Button>
          </div>
        </Card.Header>
        <Card.Section>
          {imageUrl ? (
            <div className="d-flex align-items-start gap-3">
              <img
                src={imageUrl}
                alt="Hotspot image"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  border: '1px solid #dee2e6'
                }}
              />
              <div className="flex-grow-1">
                <strong className="d-block text-muted small mb-1">Image URL</strong>
                <span style={{ fontSize: '0.875rem', wordBreak: 'break-all' }}>{imageUrl}</span>
              </div>
            </div>
          ) : (
            <span className="text-danger">No image selected</span>
          )}
        </Card.Section>
      </Card>

      {/* Hotspots Summary */}
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="h6 mb-0">
              Hotspots ({hotspots.length})
            </h4>
            <Button
              variant="link"
              size="sm"
              onClick={() => onNavigateToStep('step3')}
              style={{ fontSize: '0.875rem' }}
            >
              Edit
            </Button>
          </div>
        </Card.Header>
        <Card.Section>
          {hotspots.length === 0 ? (
            <span className="text-danger">No hotspots defined</span>
          ) : (
            <>
              <div className="mb-3">
                <Badge variant="success" className="mr-2">
                  {correctHotspots.length} Correct
                </Badge>
                <Badge variant="danger">
                  {incorrectHotspots.length} Incorrect
                </Badge>
              </div>

              <div className="mb-3">
                <strong className="d-block text-muted small mb-2">Hotspot List</strong>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {hotspots.map((hotspot, index) => (
                    <div
                      key={hotspot.id}
                      className="d-flex align-items-center justify-content-between mb-2 pb-2"
                      style={{ borderBottom: index < hotspots.length - 1 ? '1px solid #e9ecef' : 'none' }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                          {index + 1}. {hotspot.label || '(Unlabeled)'}
                        </span>
                        <Badge
                          variant={hotspot.correct ? 'success' : 'danger'}
                          style={{ fontSize: '0.7rem' }}
                        >
                          {hotspot.correct ? 'Correct' : 'Incorrect'}
                        </Badge>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#999' }}>
                        ({hotspot.coordinates[0].toFixed(1)}%, {hotspot.coordinates[1].toFixed(1)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Points calculation info */}
              <div className="p-2 bg-light rounded">
                <strong className="small d-block mb-1">Points Distribution</strong>
                <p className="small mb-0 text-muted">
                  Problem Weight: <strong>{weight} points</strong><br />
                  {correctHotspots.length > 0 ? (
                    <>
                      Each correct hotspot worth: <strong>{(weight / correctHotspots.length).toFixed(2)} points</strong>
                    </>
                  ) : (
                    <span className="text-danger">No correct hotspots defined</span>
                  )}
                </p>
              </div>
            </>
          )}
        </Card.Section>
      </Card>

      {/* Validation warnings */}
      {(!imageUrl || hotspots.length === 0 || correctHotspots.length === 0) && (
        <Card className="border-danger">
          <Card.Section>
            <strong className="text-danger d-block mb-2">⚠️ Configuration Issues</strong>
            <ul className="mb-0 text-danger" style={{ fontSize: '0.875rem' }}>
              {!imageUrl && <li>No image selected</li>}
              {hotspots.length === 0 && <li>No hotspots defined</li>}
              {hotspots.length > 0 && correctHotspots.length === 0 && <li>No correct hotspots defined</li>}
            </ul>
          </Card.Section>
        </Card>
      )}
    </div>
  );
};
