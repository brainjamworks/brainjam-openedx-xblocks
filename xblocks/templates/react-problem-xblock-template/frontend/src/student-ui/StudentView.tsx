/**
 * IMPLEMENTATION: Student View Component for Problem XBlocks
 *
 * This component displays a gradable problem with:
 * - Question display
 * - Answer input
 * - Submit button with attempt tracking
 * - Feedback display (configurable: immediate or on-submit)
 * - Score display
 *
 * Customize this component for your specific problem type.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import Card from '@openedx/paragon/dist/Card';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { SubmissionResult } from '../common/types';

/**
 * IMPLEMENTATION: Props interface
 * Matches data passed from Python student_view()
 */
interface StudentViewProps {
  runtime: XBlockRuntime;
  questionText: string;
  studentAnswer: string;
  currentScore: number;
  maxScore: number;
  attemptsRemaining: number | null;
  feedbackMode: 'immediate' | 'on_submit';
  lastSubmissionResult?: SubmissionResult;
}

/**
 * IMPLEMENTATION: Student-facing problem component
 *
 * Features:
 * - Text input for answer
 * - Attempt tracking
 * - Configurable feedback (immediate or on-submit)
 * - Score display
 * - Feedback messages
 */
export const StudentView: React.FC<StudentViewProps> = ({
  runtime,
  questionText,
  studentAnswer: initialAnswer,
  currentScore,
  maxScore,
  attemptsRemaining: initialAttemptsRemaining,
  feedbackMode,
  lastSubmissionResult: initialResult
}) => {
  // =======================================================================
  // STATE MANAGEMENT
  // =======================================================================

  const [answer, setAnswer] = useState(initialAnswer || '');
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | undefined>(initialResult);
  const [attemptsRemaining, setAttemptsRemaining] = useState(initialAttemptsRemaining);

  // =======================================================================
  // HANDLERS
  // =======================================================================

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Validation
    if (!answer.trim()) {
      setSubmissionResult({
        success: false,
        correct: false,
        score: 0,
        maxScore,
        percentage: 0,
        feedback: 'Please enter an answer',
        attemptsRemaining,
        error: 'Please enter an answer'
      });
      return;
    }

    // Check attempt limit (client-side check)
    if (attemptsRemaining !== null && attemptsRemaining <= 0) {
      setSubmissionResult({
        success: false,
        correct: false,
        score: currentScore,
        maxScore,
        percentage: (currentScore / maxScore) * 100,
        feedback: 'Maximum attempts exceeded',
        attemptsRemaining: 0,
        error: 'Maximum attempts exceeded'
      });
      return;
    }

    setSubmitting(true);

    try {
      // Submit answer to backend
      const result = await xblockPost<SubmissionResult>(runtime, 'submit_answer', {
        answer: answer.trim()
      });

      if (result.success) {
        setSubmissionResult(result);
        setAttemptsRemaining(result.attemptsRemaining);
      } else {
        // Handle error from server
        setSubmissionResult({
          success: false,
          correct: false,
          score: currentScore,
          maxScore,
          percentage: (currentScore / maxScore) * 100,
          feedback: result.error || 'Submission failed',
          attemptsRemaining,
          error: result.error
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionResult({
        success: false,
        correct: false,
        score: currentScore,
        maxScore,
        percentage: (currentScore / maxScore) * 100,
        feedback: 'An error occurred. Please try again.',
        attemptsRemaining,
        error: 'Network or server error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  const canSubmit = !submitting && (attemptsRemaining === null || attemptsRemaining > 0);
  const showScore = submissionResult && submissionResult.success;
  const attemptText = attemptsRemaining === null
    ? 'Unlimited attempts'
    : `${attemptsRemaining} attempt${attemptsRemaining === 1 ? '' : 's'} remaining`;

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="{xblock-name}-student-view problem-student-view">
      {/* Question Card */}
      <Card className="problem-question-card mb-3">
        <Card.Header title="Question" />
        <Card.Section>
          <div
            className="problem-question-text"
            dangerouslySetInnerHTML={{ __html: questionText }}
          />
        </Card.Section>
      </Card>

      {/* Answer Form */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Answer</Form.Label>
          <Form.Control
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
            disabled={submitting || (attemptsRemaining !== null && attemptsRemaining <= 0)}
            autoFocus
          />
          <Form.Text className="text-muted">
            {attemptText}
          </Form.Text>
        </Form.Group>

        {/* MULTI-PART EXAMPLE: Multiple input fields
        {questions.map((question, index) => (
          <Form.Group key={question.id} className="mb-3">
            <Form.Label>{question.text}</Form.Label>
            <Form.Control
              type="text"
              value={answers[question.id] || ''}
              onChange={(e) => setAnswers({
                ...answers,
                [question.id]: e.target.value
              })}
              placeholder="Enter your answer"
            />
          </Form.Group>
        ))}
        */}

        {/* Submit Button */}
        <Button
          variant="primary"
          type="submit"
          disabled={!canSubmit}
          className="submit-button"
        >
          {submitting ? 'Submitting...' : 'Submit Answer'}
        </Button>
      </Form>

      {/* Feedback Display */}
      {submissionResult && (feedbackMode === 'on_submit' || submissionResult.success) && (
        <div className="problem-feedback mt-4">
          {/* Score Display */}
          {showScore && (
            <Alert
              variant={submissionResult.correct ? 'success' : 'danger'}
              className="mb-3"
            >
              <strong>
                {submissionResult.correct ? '✓ Correct!' : '✗ Incorrect'}
              </strong>
              <div className="mt-2">
                <strong>Score:</strong> {submissionResult.score.toFixed(2)} / {submissionResult.maxScore.toFixed(2)}
                {' '}({submissionResult.percentage.toFixed(0)}%)
              </div>
            </Alert>
          )}

          {/* Error Display */}
          {!submissionResult.success && submissionResult.error && (
            <Alert variant="danger" className="mb-3">
              <strong>Error:</strong> {submissionResult.error}
            </Alert>
          )}

          {/* Feedback Message */}
          {submissionResult.feedback && (
            <Card className="feedback-card">
              <Card.Header title="Feedback" />
              <Card.Section>
                <p className="mb-0">{submissionResult.feedback}</p>
                {submissionResult.explanation && (
                  <div className="mt-3">
                    <strong>Explanation:</strong>
                    <p className="mt-1">{submissionResult.explanation}</p>
                  </div>
                )}
              </Card.Section>
            </Card>
          )}
        </div>
      )}

      {/* Current Score Summary (always visible) */}
      {currentScore > 0 && (
        <div className="current-score-summary mt-3 p-3 bg-light rounded">
          <strong>Current Score:</strong> {currentScore.toFixed(2)} / {maxScore.toFixed(2)}
        </div>
      )}
    </div>
  );
};
