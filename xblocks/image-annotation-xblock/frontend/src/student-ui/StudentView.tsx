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
  PlacementValidation
} from '../common/types';
import {
  AssessmentCanvas,
  FeedbackPanel
} from './components';

/**
 * Student View Component
 */
export const StudentView: React.FC<StudentData> = ({
  runtime,
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
  const [localScore, setLocalScore] = useState(currentScore);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(initialHasSubmitted);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(lastSubmissionResult || null);
  const [showAnswer, setShowAnswer] = useState(false);

  // =======================================================================
  // HANDLERS - Label Placement
  // =======================================================================

  const handleLabelDrop = useCallback((labelId: string, x: number, y: number, zoneId?: string) => {
    // Update placement in local state
    setPlacements(prev => ({
      ...prev,
      [labelId]: {
        labelId,
        x,
        y,
        inZone: zoneId,  // Track which zone label is in (undefined if not in any zone)
        correct: undefined
      }
    }));
  }, []);

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

      console.log('=== SUBMITTING PLACEMENTS ===', JSON.stringify(placementsForSubmission, null, 2));

      const result = await xblockPost<ValidationResult>(runtime, 'submit_all_placements', {
        placements: placementsForSubmission
      });

      if (result.success) {
        // DEBUG: Log the complete response
        console.log('=== SUBMIT RESPONSE ===', JSON.stringify(result, null, 2));
        console.log('=== SCORE VALUES ===', {
          score: result.score,
          maxScore: result.maxScore,
          scoreType: typeof result.score,
          maxScoreType: typeof result.maxScore
        });

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

        // DEBUG: Log what we're setting in state
        console.log('=== SET VALIDATION RESULT ===', result);
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
    setShowAnswer(prev => !prev);
  }, []);

  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  const totalLabels = labels.length;
  const placedLabels = Object.keys(placements).length;
  const isComplete = placedLabels === totalLabels;
  const canSubmit = isComplete && !hasSubmitted && attemptsRemaining !== 0;

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="image-annotation-student-view">
        {/* Problem Header */}
        <div className="problem-header">
          <h3 className="problem-title">Image Annotation</h3>
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
          disabled={submitting || hasSubmitted}
          showZones={true} // TEMPORARY: Debug mode - showing zones for position verification
        />

        {/* Feedback Panel - Show validation results after submission */}
        {hasSubmitted && validationResult && (
          <FeedbackPanel
            validationResult={validationResult}
            showAnswer={showAnswer}
            labels={labels}
            dropZones={dropZones}
          />
        )}

        {/* Action Buttons */}
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

            {/* Placement progress indicator */}
            {!hasSubmitted && (
              <div className="placement-progress">
                {placedLabels} of {totalLabels} labels placed
              </div>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

// Default export for compatibility
export default StudentView;
