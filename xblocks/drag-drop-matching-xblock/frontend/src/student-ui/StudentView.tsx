/**
 * Drag and Drop Matching Student View Component
 *
 * Displays an interactive drag-and-drop matching exercise where students
 * match terms (left column) with descriptions (right column).
 *
 * Features:
 * - Drag terms to descriptions
 * - Immediate feedback on each match
 * - Visual connectors showing matched pairs
 * - Score tracking
 */

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost } from '../common/api';
import type { StudentViewProps, SubmissionResult, BatchSubmissionResult, StudentMatch } from '../common/types';
import { DraggableTerm } from './components/DraggableTerm';
import { DroppableDescription } from './components/DroppableDescription';
import { Connector } from './components/Connector';

/**
 * Student View Component
 */
export const StudentView: React.FC<StudentViewProps> = ({
  runtime,
  displayName,
  questionText,
  terms,
  descriptions,
  studentMatches: initialMatches,
  currentScore,
  maxScore,
  attemptsRemaining,
  feedbackMode,
  lastSubmissionResult,
  isGraded
}) => {
  // =======================================================================
  // STATE MANAGEMENT
  // =======================================================================

  const [matches, setMatches] = useState<Record<string, StudentMatch>>(initialMatches);
  const [localScore, setLocalScore] = useState(currentScore);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false); // Track if batch has been submitted
  const [submissionResult, setSubmissionResult] = useState<BatchSubmissionResult | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState<Record<string, string> | null>(null);

  // Refs to track element positions
  const containerRef = useRef<HTMLDivElement>(null);

  // =======================================================================
  // HANDLERS - Drag and Drop
  // =======================================================================

  const handleDrop = useCallback(async (termId: string, descriptionId: string) => {
    // In "on_submit" mode, only update local state without server submission
    if (feedbackMode === 'on_submit') {
      setMatches(prev => ({
        ...prev,
        [termId]: {
          correct: false, // Won't know until submission
          descriptionId: descriptionId
        }
      }));
      return;
    }

    // In "immediate" mode, submit to server and get instant feedback
    setSubmitting(true);
    setError(null);

    try {
      const result = await xblockPost<SubmissionResult>(runtime, 'submit_match', {
        pairId: termId,
        descriptionId: descriptionId
      });

      if (result.success) {
        // Update local state with match result
        setMatches(prev => ({
          ...prev,
          [termId]: {
            correct: result.correct,
            descriptionId: descriptionId
          }
        }));

        setLocalScore(result.score);
      } else {
        setError(result.error || 'Failed to submit match');
      }
    } catch (err) {
      console.error('Match submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [runtime, feedbackMode]);

  // =======================================================================
  // HANDLERS - Batch Submission (for "on_submit" mode)
  // =======================================================================

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
    setError(null);

    try {
      // Format matches for submission
      const matchesForSubmission = Object.entries(matches).reduce((acc, [termId, match]) => {
        acc[termId] = { descriptionId: match.descriptionId };
        return acc;
      }, {} as Record<string, { descriptionId: string }>);

      const result = await xblockPost<BatchSubmissionResult>(runtime, 'submit_all_matches', {
        matches: matchesForSubmission
      });

      if (result.success) {
        // Update matches with correctness results
        setMatches(result.results as Record<string, StudentMatch>);
        setLocalScore(result.score);
        setHasSubmitted(true);
        setSubmissionResult(result);
      } else {
        setError(result.error || 'Failed to submit matches');
      }
    } catch (err) {
      console.error('Batch submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [runtime, matches]);

  const handleReset = useCallback(() => {
    setMatches({});
    setHasSubmitted(false);
    setSubmissionResult(null);
    setShowAnswer(false);
    setCorrectAnswers(null);
    setError(null);
  }, []);

  const handleShowAnswer = useCallback(async () => {
    // If already showing, hide answers
    if (showAnswer) {
      setShowAnswer(false);
      setCorrectAnswers(null);
      return;
    }

    // Otherwise fetch and show answers
    try {
      const result = await xblockPost<{ success: boolean; correctMatches: Record<string, string> }>(
        runtime,
        'get_correct_answers',
        {}
      );

      if (result.success) {
        setCorrectAnswers(result.correctMatches);
        setShowAnswer(true);
      }
    } catch (err) {
      console.error('Error fetching correct answers:', err);
      setError('Failed to load correct answers');
    }
  }, [runtime, showAnswer]);

  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  const totalPairs = terms.length;
  const correctMatches = Object.values(matches).filter(m => m.correct).length;
  const percentage = totalPairs > 0 ? (correctMatches / totalPairs) * 100 : 0;
  const allCorrect = correctMatches === totalPairs && totalPairs > 0;

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drag-drop-matching-student-view" ref={containerRef}>
        {/* Problem Header */}
        <div className="problem-header">
          <h3 className="problem-title">{displayName}</h3>
          <div className="problem-points">
            {maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)}/{maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)} point{maxScore !== 1 ? 's' : ''} ({isGraded ? 'graded' : 'ungraded'})
          </div>
        </div>

        {/* Question Text */}
        <div className="problem-question" dangerouslySetInnerHTML={{ __html: questionText }} />

        {/* Error Display - shows errors OR attempts exhausted */}
        {(error || attemptsRemaining === 0) && (
          <Alert variant="danger" className="mb-3">
            {error || (attemptsRemaining === 0 ? 'Maximum attempts exceeded' : null)}
          </Alert>
        )}

        {/* Score Display - only show in immediate mode (notifications show score in on_submit mode) */}
        {feedbackMode === 'immediate' && (
          <div className={`score-display ${allCorrect ? 'score-correct' : 'score-incorrect'}`}>
            <strong>Current Score:</strong> {localScore.toFixed(2)} / {maxScore.toFixed(2)}
            ({percentage.toFixed(0)}% - {correctMatches} of {totalPairs} correct)
          </div>
        )}

        {/* Matching Area */}
        <div className="matching-container">
          {/* Left Column - Terms (Draggable) */}
          <div className="terms-column">
            <h4 className="column-header">Terms</h4>
            <div className="items-list">
              {terms.map(term => {
                const showCorrectness = feedbackMode === 'immediate' || hasSubmitted;
                return (
                  <DraggableTerm
                    key={term.id}
                    id={term.id}
                    term={term.term}
                    isMatched={!!matches[term.id]}
                    isCorrect={showCorrectness ? matches[term.id]?.correct : undefined}
                    disabled={submitting || (feedbackMode === 'on_submit' && hasSubmitted)}
                  />
                );
              })}
            </div>
          </div>

          {/* Center - Connectors (SVG lines) */}
          <div className="connectors-column">
            <svg className="connectors-svg" width="100%" height="100%">
              {/* Student's matches */}
              {Object.entries(matches).map(([termId, match]) => {
                const showCorrectness = feedbackMode === 'immediate' || hasSubmitted;
                return (
                  <Connector
                    key={termId}
                    termId={termId}
                    descriptionId={match.descriptionId}
                    isCorrect={showCorrectness ? match.correct : undefined}
                    containerRef={containerRef}
                  />
                );
              })}

              {/* Correct answers overlay (when Show Answer is clicked) */}
              {showAnswer && correctAnswers && Object.entries(correctAnswers).map(([termId, descriptionId]) => {
                // Only show if student hasn't matched this correctly
                const studentMatch = matches[termId];
                if (studentMatch && studentMatch.correct && studentMatch.descriptionId === descriptionId) {
                  return null; // Don't draw duplicate connector
                }

                return (
                  <Connector
                    key={`answer-${termId}`}
                    termId={termId}
                    descriptionId={descriptionId}
                    isCorrect={true}
                    isAnswerOverlay={true}
                    containerRef={containerRef}
                  />
                );
              })}
            </svg>
          </div>

          {/* Right Column - Descriptions (Drop Zones) */}
          <div className="descriptions-column">
            <h4 className="column-header">Descriptions</h4>
            <div className="items-list">
              {descriptions.map((desc, index) => {
                // Find if this description has a term matched to it
                const matchedTermId = Object.entries(matches).find(
                  ([_, match]) => match.descriptionId === desc.id
                )?.[0];

                const matchedTerm = matchedTermId
                  ? terms.find(t => t.id === matchedTermId)
                  : undefined;

                const showCorrectness = feedbackMode === 'immediate' || hasSubmitted;

                return (
                  <DroppableDescription
                    key={desc.id}
                    id={desc.id}
                    description={desc.description}
                    matchedTerm={matchedTerm?.term}
                    isCorrect={showCorrectness && matchedTermId ? matches[matchedTermId]?.correct : undefined}
                    onDrop={handleDrop}
                    disabled={submitting || (feedbackMode === 'on_submit' && hasSubmitted)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Action bar - OpenEdX problem block pattern (only in "on_submit" mode) */}
        {feedbackMode === 'on_submit' && (
          <div className="action">
            {/* Problem action buttons (Reset, Show Answer) - only after submission */}
            {hasSubmitted && (
              <div className="problem-action-buttons-wrapper">
                {/* Reset button - only visible after submission */}
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

                {/* Show Answer button - only after submission */}
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
              </div>
            )}

            {/* Submit attempt container */}
            <div className="submit-attempt-container">
              <button
                type="button"
                className="submit btn-brand"
                onClick={handleSubmit}
                disabled={submitting || Object.keys(matches).length === 0 || hasSubmitted || attemptsRemaining === 0}
                aria-label="Submit answer"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>

              {/* Submission feedback (notifications) - shown after submission */}
              {hasSubmitted && submissionResult && (
                <div className="submission-feedback">
                  {/* Correctness Notification */}
                  <div className={`notification notification-${submissionResult.allCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="notification-icon">
                      {submissionResult.allCorrect ? '✓' : '✗'}
                    </div>
                    <div className="notification-content">
                      <p>
                        {submissionResult.allCorrect ? 'Correct' : 'Incorrect'}
                        ({submissionResult.score.toFixed(2)}/{submissionResult.maxScore.toFixed(2)} point{submissionResult.maxScore !== 1 ? 's' : ''})
                      </p>
                    </div>
                  </div>

                  {/* Explanation Notification */}
                  {submissionResult.explanation && (
                    <div className="notification notification-explanation">
                      <div className="notification-icon">📋</div>
                      <div className="notification-content">
                        <div dangerouslySetInnerHTML={{ __html: submissionResult.explanation }} />
                      </div>
                    </div>
                  )}

                  {/* Answer visibility notification */}
                  {showAnswer && (
                    <div className="notification notification-answer">
                      <div className="notification-icon">ℹ</div>
                      <div className="notification-content">
                        <p>Correct answers are displayed with green connectors</p>
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
