import React from 'react';
import Alert from '@openedx/paragon/dist/Alert';
import type {
  SubmissionResult,
} from '../../common/types';

interface FeedbackDisplayProps {
  result: SubmissionResult;
  gradingMode: 'all_or_nothing' | 'partial_credit';
}

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({
  result,
  gradingMode,
}) => {
  const variant = result.correct ? 'success' : 'danger';

  return (
    <div className="feedback-display">
      {/* Overall result */}
      <Alert variant={variant} className="feedback-alert">
        <div className="feedback-header">
          <strong className="feedback-title">
            {result.correct ? '✓ Correct!' : '✗ Incorrect'}
          </strong>
          <div className="feedback-score">
            <strong>Score:</strong> {(result.score ?? 0).toFixed(2)} / {(result.maxScore ?? 0).toFixed(2)}
            {' '}({(result.percentage ?? 0).toFixed(0)}%)
          </div>
        </div>

        {/* Grading mode info */}
        {gradingMode === 'partial_credit' && !result.correct && (
          <div className="feedback-partial-credit">
            <p>
              You got {result.correctCount} out of {result.totalItems} items correct.
            </p>
          </div>
        )}

        {/* Explanation */}
        {result.explanation && (
          <div className="feedback-explanation">
            <div dangerouslySetInnerHTML={{ __html: result.explanation }} />
          </div>
        )}
      </Alert>
    </div>
  );
};
