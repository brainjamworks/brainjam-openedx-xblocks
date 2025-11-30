/**
 * Image Annotation Student View Component
 *
 * Displays an interactive image annotation exercise where students
 * drag labels onto specific locations on a background image.
 *
 * Features:
 * - Drag labels to image locations
 * - Snap-to-zone behavior for correct placement
 * - Visual feedback for correct/incorrect/neutral state
 * - Score tracking and validation
 */

import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost } from '../common/api';
import type {
  StudentData,
  LabelPlacements,
  ValidationResult,
  PlacementValidation,
  ImmediateFeedbackResult
} from '../common/types';
import {
  AssessmentCanvas
} from './components';

/**
 * Student View Component
 */
export const StudentView: React.FC<StudentData> = ({
  runtime,
  displayName,
  questionText,
  backgroundImageUrl,
  backgroundImageWidth,
  backgroundImageHeight,
  labels,
  dropZones,
  studentPlacements: initialPlacements,
  currentScore,
  maxScore,
  attemptsRemaining,
  feedbackMode,
  isGraded,
  snapEnabled,
  showCorrectOnSubmit,
  hasSubmitted: initialHasSubmitted,
  lastSubmissionResult
}) => {
  // =======================================================================
  // STATE MANAGEMENT
  // =======================================================================

  const [placements, setPlacements] = useState<LabelPlacements>(initialPlacements);
  const [studentPlacements, setStudentPlacements] = useState<LabelPlacements>({}); // Preserve student's placements when showing answer
  const [localScore, setLocalScore] = useState(currentScore);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(initialHasSubmitted);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(lastSubmissionResult || null);
  const [showAnswer, setShowAnswer] = useState(false);

  // =======================================================================
  // HANDLERS - Label Placement
  // =======================================================================

  const handleLabelDrop = useCallback(async (labelId: string, x: number, y: number, zoneId?: string) => {
    // Branch based on feedback mode
    if (feedbackMode === 'on_submit') {
      // On-submit mode: Just update local state without server validation
      setPlacements(prev => ({
        ...prev,
        [labelId]: {
          labelId,
          x,
          y,
          inZone: zoneId,
          correct: undefined  // No feedback until submission
        }
      }));
      return;
    }

    // Immediate mode: Submit to server for instant validation
    setSubmitting(true);
    try {
      const result = await xblockPost<ImmediateFeedbackResult>(
        runtime,
        'submit_placement',
        {
          labelId,
          position: { x, y },
          zoneId
        }
      );

      if (result.success) {
        // Update placement with correctness feedback
        setPlacements(prev => ({
          ...prev,
          [labelId]: {
            labelId,
            x,
            y,
            inZone: zoneId,
            correct: result.correct  // Server returns correctness
          }
        }));

        // Update live score
        setLocalScore(result.score);
      }
    } catch (error) {
      console.error('Error submitting label placement:', error);
      setError('Failed to validate placement. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [runtime, feedbackMode]);

  const handleLabelRemove = useCallback((labelId: string) => {
    // Remove label from zone (return to label bank)
    setPlacements(prev => {
      const newPlacements = { ...prev };
      delete newPlacements[labelId];
      return newPlacements;
    });
  }, []);

  // =======================================================================
  // HANDLERS - Submission
  // =======================================================================

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
    setError(null);

    try {
      // Transform placements to backend format
      // Backend expects: { position: {x, y}, zoneId }
      // Frontend has: { x, y, inZone }
      const placementsForSubmission = Object.entries(placements).reduce((acc, [labelId, placement]) => {
        acc[labelId] = {
          position: { x: placement.x, y: placement.y },
          zoneId: placement.inZone || null
        };
        return acc;
      }, {} as Record<string, any>);

      const result = await xblockPost<ValidationResult>(runtime, 'submit_all_placements', {
        placements: placementsForSubmission
      });

      if (result.success) {
        console.log('Submission completed - Score:', result.score, '/', result.maxScore);

        // Update placements with validation results
        const updatedPlacements: LabelPlacements = { ...placements };
        Object.entries(result.results).forEach(([labelId, validation]) => {
          if (updatedPlacements[labelId]) {
            updatedPlacements[labelId].correct = validation.correct;
            updatedPlacements[labelId].inZone = validation.zone_id || undefined;
          }
        });

        setPlacements(updatedPlacements);
        setLocalScore(result.score);
        setHasSubmitted(true);
        setValidationResult(result);
      } else {
        setError('Failed to submit placements');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [runtime, placements]);

  const handleReset = useCallback(() => {
    setPlacements({});
    setHasSubmitted(false);
    setValidationResult(null);
    setShowAnswer(false);
    setError(null);
  }, []);

  const handleShowAnswer = useCallback(() => {
    if (!showAnswer) {
      // Showing answer: Save student placements and create correct placements
      if (!validationResult) return;

      setStudentPlacements(placements); // Preserve student's attempt

      // Create placements for all labels at their correct zones
      const correctPlacements: LabelPlacements = {};
      labels.forEach(label => {
        const validation = validationResult.results[label.id];
        if (validation && validation.expected_zone) {
          // Find the correct zone
          const correctZone = dropZones.find(z => z.id === validation.expected_zone);
          if (correctZone) {
            // Adjust coordinates based on label type (same logic as snap-to-zone)
            let x = correctZone.x;
            let y = correctZone.y;

            const labelType = label.type || 'normal';
            if (labelType === 'dot' || labelType === 'cross') {
              // Dot/cross labels use translate(-25%, -25%) with marker at bottom-left
              // Need to adjust coordinates to center the marker at zone center
              const markerSize = labelType === 'dot' ? 15 : 12; // Unscaled pixels (dot 15px, cross 12px)
              x = correctZone.x + (label.width * 0.25) - (markerSize / 2);
              y = correctZone.y - (label.height * 0.75) + (markerSize / 2);
            }
            // Normal labels use translate(-50%, -50%) which centers correctly

            correctPlacements[label.id] = {
              labelId: label.id,
              x,
              y,
              inZone: correctZone.id,
              correct: true
            };
          }
        }
      });

      setPlacements(correctPlacements);
      setShowAnswer(true);
    } else {
      // Hiding answer: Restore student's placements
      setPlacements(studentPlacements);
      setShowAnswer(false);
    }
  }, [showAnswer, validationResult, placements, labels, dropZones, studentPlacements]);

  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  const totalLabels = labels.length;
  const placedLabels = Object.keys(placements).length;
  // Check if all zones are filled (not all labels placed - allows more labels than zones)
  const occupiedZones = new Set(Object.values(placements).map(p => p.inZone).filter(Boolean));
  const allZonesFilled = occupiedZones.size === dropZones.length;
  const canSubmit = allZonesFilled && !hasSubmitted && attemptsRemaining !== 0;

  // Score display metrics (for immediate mode)
  const correctLabels = Object.values(placements).filter(p => p.correct === true).length;
  const allCorrect = correctLabels === totalLabels && totalLabels > 0 && placedLabels === totalLabels;

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="image-annotation-student-view">
        {/* Problem Header */}
        <div className="problem-header">
          <h3 className="problem-title">{displayName}</h3>
          <div className="problem-points">
            {maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)}/{maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)} point{maxScore !== 1 ? 's' : ''} ({isGraded ? 'graded' : 'ungraded'})
          </div>
        </div>

        {/* Question Text */}
        <div className="problem-question" dangerouslySetInnerHTML={{ __html: questionText }} />

        {/* Error Display */}
        {(error || attemptsRemaining === 0) && (
          <Alert variant="danger" className="mb-3">
            {error || 'Maximum attempts exceeded'}
          </Alert>
        )}

        {/* Score Display - immediate mode only */}
        {feedbackMode === 'immediate' && (
          <div className={`score-display ${allCorrect ? 'score-correct' : 'score-incorrect'}`}>
            <strong>Current Score:</strong> {localScore.toFixed(2)} / {maxScore.toFixed(2)}
            {' '}({((localScore / maxScore) * 100).toFixed(0)}% - {correctLabels} of {totalLabels} correct)
          </div>
        )}

        {/* Score Display - show after submission in on_submit mode */}
        {hasSubmitted && (
          <div className="score-display">
            <strong>Score:</strong> {localScore.toFixed(2)} / {maxScore.toFixed(2)}
            ({((localScore / maxScore) * 100).toFixed(0)}%)
          </div>
        )}

        {/* Assessment Canvas - Image with draggable labels and drop zones */}
        <AssessmentCanvas
          backgroundImageUrl={backgroundImageUrl}
          backgroundImageWidth={backgroundImageWidth}
          backgroundImageHeight={backgroundImageHeight}
          labels={labels}
          dropZones={dropZones}
          placements={placements}
          snapEnabled={snapEnabled}
          onLabelDrop={handleLabelDrop}
          onLabelRemove={handleLabelRemove}
          disabled={submitting || (feedbackMode === 'on_submit' && hasSubmitted)}
          showingAnswer={showAnswer}
          showZones={true} // TEMPORARY: Debug mode - showing zones for position verification
        />

        {/* Action Buttons - only in on_submit mode */}
        {feedbackMode === 'on_submit' && (
          <div className="action">
            {/* Problem action buttons (Reset, Show Answer) - only after submission */}
            {hasSubmitted && (
              <div className="problem-action-buttons-wrapper">
                <span className="problem-action-button-wrapper">
                  <button
                    type="button"
                    className="reset problem-action-btn btn-link btn-small"
                    onClick={handleReset}
                    disabled={submitting}
                    aria-label="Reset problem"
                  >
                    Reset
                  </button>
                </span>

                {showCorrectOnSubmit && (
                  <span className="problem-action-button-wrapper">
                    <button
                      type="button"
                      className="show problem-action-btn btn-link btn-small"
                      onClick={handleShowAnswer}
                      disabled={submitting}
                      aria-label={showAnswer ? 'Hide correct answers' : 'Show correct answers'}
                    >
                      {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="submit-attempt-container">
              <button
                type="button"
                className="submit btn-brand"
                onClick={handleSubmit}
                disabled={submitting || !canSubmit}
                aria-label="Submit answer"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>

              {/* Submission feedback (notifications) - shown after submission */}
              {hasSubmitted && validationResult && (
                <div className="submission-feedback">
                  {/* Correctness Notification */}
                  <div className={`notification notification-${validationResult.allCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="notification-icon">
                      {validationResult.allCorrect ? '✓' : '✗'}
                    </div>
                    <div className="notification-content">
                      <p>
                        {validationResult.allCorrect ? 'Correct' : 'Incorrect'}
                        ({validationResult.score.toFixed(2)}/{validationResult.maxScore.toFixed(2)} point{validationResult.maxScore !== 1 ? 's' : ''})
                      </p>
                    </div>
                  </div>

                  {/* Explanation Notification */}
                  {validationResult.explanation && (
                    <div className="notification notification-explanation">
                      <div className="notification-icon">📋</div>
                      <div className="notification-content">
                        <div dangerouslySetInnerHTML={{ __html: validationResult.explanation }} />
                      </div>
                    </div>
                  )}

                  {/* Answer visibility notification */}
                  {showAnswer && (
                    <div className="notification notification-answer">
                      <div className="notification-icon">ℹ</div>
                      <div className="notification-content">
                        <p>Correct label positions are highlighted on the image above</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

// Default export for compatibility
export default StudentView;
