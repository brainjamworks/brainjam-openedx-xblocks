/**
 * Feedback Panel Component
 *
 * Displays validation results after submission, showing per-label correctness,
 * overall score, and optionally correct answers.
 *
 * Features:
 * - Per-label validation feedback
 * - Overall score display
 * - Correct answer visualization
 * - Detailed placement information (distance from target, etc.)
 */

import React from 'react';
import Alert from '@openedx/paragon/dist/Alert';
import type {
  ValidationResult,
  LabelDefinition,
  DropZone
} from '../../common/types';

interface FeedbackPanelProps {
  validationResult: ValidationResult;
  showAnswer: boolean;
  labels: LabelDefinition[];
  dropZones: DropZone[];
}

/**
 * Feedback Panel Component
 */
export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  validationResult,
  showAnswer,
  labels,
  dropZones
}) => {
  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  // DEBUG: Log what FeedbackPanel receives
  console.log('=== FEEDBACK PANEL - VALIDATION RESULT ===', JSON.stringify(validationResult, null, 2));
  console.log('=== FEEDBACK PANEL - VALIDATION RESULT TYPE ===', typeof validationResult, validationResult);

  // Add null-safety with defaults for old cached data
  const {
    score = 0,
    maxScore = 1,  // Default to 1 to avoid division by zero
    percentage = 0,
    results = {},
    feedbackMessage = ''
  } = validationResult || {};

  // DEBUG: Log destructured values
  console.log('=== FEEDBACK PANEL - DESTRUCTURED ===', {
    score,
    maxScore,
    percentage,
    results: results ? 'present' : 'missing',
    feedbackMessage: feedbackMessage ? 'present' : 'missing',
    scoreType: typeof score,
    maxScoreType: typeof maxScore
  });

  // Count correct and incorrect placements
  const totalPlacements = Object.keys(results).length;
  const correctCount = Object.values(results).filter(p => p.correct).length;
  const incorrectCount = totalPlacements - correctCount;

  // Determine overall correctness
  const allCorrect = correctCount === totalPlacements && totalPlacements > 0;
  const variant = allCorrect ? 'success' : 'danger';

  // =======================================================================
  // HELPER FUNCTIONS
  // =======================================================================

  const getLabelById = (labelId: string): LabelDefinition | undefined => {
    return labels.find(l => l.id === labelId);
  };

  const getZoneById = (zoneId: string): DropZone | undefined => {
    return dropZones.find(z => z.id === zoneId);
  };

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="feedback-panel">
      {/* Overall Score Notification */}
      <Alert variant={variant} className="mb-3">
        <div className="d-flex align-items-start">
          <div className="notification-icon me-3">
            <strong style={{ fontSize: '1.5em' }}>
              {allCorrect ? '✓' : '✗'}
            </strong>
          </div>
          <div className="notification-content flex-grow-1">
            <h4 className="alert-heading">
              {allCorrect ? 'Correct!' : 'Incorrect'}
            </h4>
            <p className="mb-1">
              <strong>Score:</strong> {score.toFixed(2)} / {maxScore.toFixed(2)} points
              ({percentage.toFixed(0)}%)
            </p>
            <p className="mb-0">
              {correctCount} of {totalPlacements} labels placed correctly
            </p>
            {feedbackMessage && (
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: feedbackMessage }}
              />
            )}
          </div>
        </div>
      </Alert>

      {/* Per-Label Feedback - Show when not all correct or when showing answers */}
      {(!allCorrect || showAnswer) && (
        <div className="label-feedback-list">
          <h5 className="feedback-heading">Label Placement Details</h5>
          <div className="list-group">
            {Object.entries(results).map(([labelId, placement]) => {
              const label = getLabelById(labelId);
              const expectedZone = getZoneById(placement.expected_zone);
              const actualZone = placement.zone_id
                ? getZoneById(placement.zone_id)
                : undefined;

              if (!label) return null;

              const itemVariant = placement.correct ? 'success' : 'danger';
              const icon = placement.correct ? '✓' : '✗';

              return (
                <div
                  key={labelId}
                  className={`list-group-item list-group-item-${itemVariant}`}
                >
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <strong style={{ fontSize: '1.2em' }}>{icon}</strong>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">
                        <strong>Label {label.label}</strong>
                      </h6>

                      {/* Expected placement */}
                      <div className="mb-1">
                        <small className="text-muted">Expected: </small>
                        <small>
                          {expectedZone?.description || `Zone ${placement.expected_zone}`}
                        </small>
                      </div>

                      {/* Actual placement */}
                      {!placement.correct && (
                        <div className="mb-1">
                          <small className="text-muted">Placed: </small>
                          <small>
                            {actualZone
                              ? (actualZone.description || `Zone ${actualZone.id}`)
                              : 'Outside any target zone'}
                          </small>
                        </div>
                      )}

                      {/* Distance information */}
                      {placement.distance !== undefined && !placement.correct && (
                        <div>
                          <small className="text-muted">
                            Distance from target: {placement.distance.toFixed(1)} pixels
                          </small>
                        </div>
                      )}

                      {/* Custom message */}
                      {placement.message && (
                        <div className="mt-1">
                          <small className="text-muted">{placement.message}</small>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Show Answer Hint */}
      {showAnswer && (
        <Alert variant="info" className="mt-3">
          <div className="d-flex align-items-start">
            <div className="notification-icon me-3">
              <strong style={{ fontSize: '1.5em' }}>ℹ</strong>
            </div>
            <div className="notification-content">
              <p className="mb-0">
                Correct label positions are highlighted on the image above.
                Labels that are correctly placed are shown in green.
              </p>
            </div>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default FeedbackPanel;
