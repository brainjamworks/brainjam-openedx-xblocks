/**
 * Image Hotspot Student View Component
 *
 * Displays an interactive image where students click on hotspots to answer questions.
 * Features:
 * - Clickable image with coordinate tracking
 * - Visual feedback for clicks
 * - Attempt tracking
 * - Score display
 * - Feedback display
 */

import React, { useState, useRef, useCallback } from 'react';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudentViewProps, SubmissionResult, HotspotClick, Hotspot, BatchSubmissionResult } from '../common/types';

/**
 * Student View Component
 */
export const StudentView: React.FC<StudentViewProps> = ({
  runtime,
  displayName,
  questionText,
  imageUrl,
  hotspots: _hotspots,
  studentClicks: initialClicks,
  currentScore,
  maxScore,
  attemptsRemaining: initialAttemptsRemaining,
  feedbackMode,
  gradingMode: _gradingMode,
  lastSubmissionResult: initialResult,
  isGraded
}) => {
  // =======================================================================
  // STATE MANAGEMENT
  // =======================================================================

  const [studentClicks, setStudentClicks] = useState<HotspotClick[]>(initialClicks);
  const [stagedClicks, setStagedClicks] = useState<HotspotClick[]>([]); // For on_submit mode
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | undefined>(initialResult);
  const [batchResult, setBatchResult] = useState<BatchSubmissionResult | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false); // Track if batch submitted
  const [attemptsRemaining, setAttemptsRemaining] = useState(initialAttemptsRemaining);
  const [localScore, setLocalScore] = useState(currentScore);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState<Hotspot[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const imageRef = useRef<HTMLImageElement>(null);

  // =======================================================================
  // HANDLERS - Image Click
  // =======================================================================

  const handleImageClick = useCallback(async (e: React.MouseEvent<HTMLImageElement>) => {
    // Check attempt limit
    if (attemptsRemaining !== null && attemptsRemaining <= 0) {
      setError('Maximum attempts exceeded');
      return;
    }

    // Don't allow clicks after submission in on_submit mode
    if (feedbackMode === 'on_submit' && hasSubmitted) {
      return;
    }

    if (!imageRef.current) return;

    // Get click coordinates relative to image
    const rect = imageRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Convert to percentage (0-100)
    const percentX = (clickX / rect.width) * 100;
    const percentY = (clickY / rect.height) * 100;

    const newClick: HotspotClick = {
      x: percentX,
      y: percentY,
      hotspot_id: null,
      correct: false,
      timestamp: new Date().toISOString()
    };

    // =================================================================
    // IMMEDIATE MODE: Submit each click immediately
    // =================================================================
    if (feedbackMode === 'immediate') {
      setSubmitting(true);
      setError(null);

      try {
        const result = await xblockPost<SubmissionResult>(runtime, 'submit_answer', {
          x: percentX,
          y: percentY
        });

        if (result.success) {
          setSubmissionResult(result);
          setAttemptsRemaining(result.attemptsRemaining);
          setLocalScore(result.score);

          // Add click to history with result
          const clickWithResult: HotspotClick = {
            ...newClick,
            hotspot_id: result.clickedHotspot,
            correct: result.correct,
            points: result.points
          };
          setStudentClicks([...studentClicks, clickWithResult]);
        } else {
          setError(result.error || 'Submission failed');
        }
      } catch (err) {
        console.error('Submission error:', err);
        setError('An error occurred. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
    // =================================================================
    // ON_SUBMIT MODE: Stage clicks for later submission
    // =================================================================
    else {
      // Just add to staged clicks
      setStagedClicks([...stagedClicks, newClick]);
    }
  }, [feedbackMode, hasSubmitted, attemptsRemaining, stagedClicks, studentClicks, runtime]);

  // =======================================================================
  // HANDLERS - Batch Submission (on_submit mode)
  // =======================================================================

  const handleSubmit = useCallback(async () => {
    if (stagedClicks.length === 0) {
      setError('No clicks to submit');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const result = await xblockPost<BatchSubmissionResult>(runtime, 'submit_all_clicks', {
        clicks: stagedClicks.map(c => ({ x: c.x, y: c.y }))
      });

      if (result.success) {
        setBatchResult(result);
        setLocalScore(result.score);
        setHasSubmitted(true);
        setAttemptsRemaining(result.attemptsRemaining);

        // Move staged clicks to student clicks
        setStudentClicks([...studentClicks, ...stagedClicks]);
        setStagedClicks([]);
      } else {
        setError(result.error || 'Failed to submit');
      }
    } catch (err) {
      console.error('Batch submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [runtime, stagedClicks, studentClicks]);

  // =======================================================================
  // HANDLERS - Reset
  // =======================================================================

  const handleReset = useCallback(async () => {
    try {
      await xblockPost(runtime, 'reset_problem', {});

      // Reset all state
      setStudentClicks([]);
      setStagedClicks([]);
      setHasSubmitted(false);
      setBatchResult(null);
      setSubmissionResult(undefined);
      setShowAnswer(false);
      setCorrectAnswers(null);
      setError(null);
      setLocalScore(0);
    } catch (err) {
      console.error('Reset error:', err);
      setError('Failed to reset problem');
    }
  }, [runtime]);

  // =======================================================================
  // HANDLERS - Show Answer
  // =======================================================================

  const handleShowAnswer = useCallback(async () => {
    // Toggle off if already showing
    if (showAnswer) {
      setShowAnswer(false);
      setCorrectAnswers(null);
      return;
    }

    // Fetch correct answers from backend
    try {
      const result = await xblockPost<{ success: boolean; correctHotspots: Hotspot[] }>(
        runtime,
        'get_correct_answers',
        {}
      );

      if (result.success) {
        setCorrectAnswers(result.correctHotspots);
        setShowAnswer(true);
      } else {
        setError('Failed to load correct answers');
      }
    } catch (err) {
      console.error('Error fetching correct answers:', err);
      setError('Failed to load correct answers');
    }
  }, [runtime, showAnswer]);

  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  const canClick = !submitting &&
                   (attemptsRemaining === null || attemptsRemaining > 0) &&
                   !(feedbackMode === 'on_submit' && hasSubmitted);

  // Combine student clicks and staged clicks for display
  const allClicks = feedbackMode === 'on_submit' && !hasSubmitted
    ? [...studentClicks, ...stagedClicks]
    : studentClicks;

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="image-hotspot-student-view">
      {/* Problem Header with Title and Score */}
      <div className="problem-header">
        <h3 className="problem-title">{displayName}</h3>
        <div className="problem-points">
          {maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)}/{maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)} point{maxScore !== 1 ? 's' : ''} ({isGraded ? 'graded' : 'ungraded'})
        </div>
      </div>

      {/* Question Text */}
      <div className="problem-question" dangerouslySetInnerHTML={{ __html: questionText }} />

      {/* Interactive Image Section */}
      <div>
        {imageUrl ? (
          <div className="hotspot-image-container">
            <img
              ref={imageRef}
              src={imageUrl}
              alt="Hotspot question image"
              onClick={handleImageClick}
              className={`hotspot-image ${canClick ? 'clickable' : ''} ${submitting ? 'processing' : ''}`}
            />

            {/* Visual markers for all clicks (includes staged clicks in on_submit mode) */}
            {allClicks.map((click, index) => (
              <div
                key={index}
                className={`click-marker ${click.correct ? 'correct' : 'incorrect'}`}
                style={{ left: `${click.x}%`, top: `${click.y}%` }}
                title={click.correct ? 'Correct click' : 'Incorrect click'}
              />
            ))}

            {/* Show Answer: Display correct hotspots (SVG overlay for accurate circles) */}
            {showAnswer && correctAnswers && imageRef.current && (
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none'
                }}
                viewBox={`0 0 ${imageRef.current.naturalWidth} ${imageRef.current.naturalHeight}`}
                preserveAspectRatio="xMidYMid meet"
              >
                {correctAnswers.map((hotspot, index) => {
                  if (hotspot.shape === 'circle' && hotspot.coordinates.length >= 3) {
                    const [cx, cy, r] = hotspot.coordinates;
                    // Convert percentages to natural pixel coordinates
                    const pixelCx = (cx / 100) * imageRef.current!.naturalWidth;
                    const pixelCy = (cy / 100) * imageRef.current!.naturalHeight;
                    const pixelR = (r / 100) * imageRef.current!.naturalWidth;

                    return (
                      <circle
                        key={`answer-${index}`}
                        cx={pixelCx}
                        cy={pixelCy}
                        r={pixelR}
                        fill="rgba(0, 166, 137, 0.12)"
                        stroke="#00a689"
                        strokeWidth={3}
                      >
                        <title>{hotspot.label}</title>
                      </circle>
                    );
                  }
                  return null;
                })}
              </svg>
            )}

            {submitting && <div className="processing-overlay">Processing...</div>}
          </div>
        ) : (
          <Alert variant="warning">
            No image configured for this problem. Please contact your instructor.
          </Alert>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <Alert variant="danger" className="mb-3">
          {error}
        </Alert>
      )}

      {/* Action bar - OpenEdX problem block pattern (only in "on_submit" mode) */}
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
              disabled={submitting || stagedClicks.length === 0 || hasSubmitted}
              aria-label="Submit answer"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>

            {/* Submission feedback (notifications) - shown after submission */}
            {hasSubmitted && batchResult && (
              <div className="submission-feedback">
                {/* Correctness Notification */}
                <div className={`notification notification-${batchResult.allCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="notification-icon">
                    {batchResult.allCorrect ? '✓' : '✗'}
                  </div>
                  <div className="notification-content">
                    <p>
                      {batchResult.allCorrect ? 'Correct' : 'Incorrect'}
                      ({batchResult.score.toFixed(2)}/{batchResult.maxScore.toFixed(2)} point{batchResult.maxScore !== 1 ? 's' : ''})
                    </p>
                  </div>
                </div>

                {/* Explanation Notification */}
                {batchResult.explanation && (
                  <div className="notification notification-explanation">
                    <div className="notification-icon">📋</div>
                    <div className="notification-content">
                      <div dangerouslySetInnerHTML={{ __html: batchResult.explanation }} />
                    </div>
                  </div>
                )}

                {/* Answer visibility notification */}
                {showAnswer && (
                  <div className="notification notification-answer">
                    <div className="notification-icon">ℹ</div>
                    <div className="notification-content">
                      <p>Correct answer regions are highlighted on the image</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Immediate mode feedback - notification system */}
      {feedbackMode === 'immediate' && submissionResult && submissionResult.success && (
        <div className="action">
          {/* Problem action buttons (Reset, Show Answer) - shown after first click */}
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

          {/* Immediate feedback notifications */}
          <div className="submission-feedback">
            {/* Correctness Notification */}
            <div className={`notification notification-${submissionResult.correct ? 'correct' : 'incorrect'}`}>
              <div className="notification-icon">
                {submissionResult.correct ? '✓' : '✗'}
              </div>
              <div className="notification-content">
                <p>
                  {submissionResult.correct ? 'Correct' : 'Incorrect'}
                  ({submissionResult.score.toFixed(2)}/{submissionResult.maxScore.toFixed(2)} point{submissionResult.maxScore !== 1 ? 's' : ''})
                </p>
              </div>
            </div>

            {/* Explanation Notification */}
            {submissionResult.feedback && (
              <div className="notification notification-explanation">
                <div className="notification-icon">📋</div>
                <div className="notification-content">
                  <div dangerouslySetInnerHTML={{ __html: submissionResult.feedback }} />
                </div>
              </div>
            )}

            {/* Answer visibility notification */}
            {showAnswer && (
              <div className="notification notification-answer">
                <div className="notification-icon">ℹ</div>
                <div className="notification-content">
                  <p>Correct answer regions are highlighted on the image</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
