/**
 * BehaviorCard Component (Refactored to use MFE SettingsOption pattern)
 *
 * Settings card for problem behavior configuration.
 * Uses SettingsOption wrapper for consistent collapse behavior.
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import SettingsOption from './SettingsOption';

interface BehaviorCardProps {
  randomizeItems: boolean;
  feedbackMode: string;
  showCorrectAnswers: string;
  onRandomizeChange: (value: boolean) => void;
  onFeedbackModeChange: (value: string) => void;
  onShowCorrectAnswersChange: (value: string) => void;
}

export const BehaviorCard: React.FC<BehaviorCardProps> = ({
  randomizeItems,
  feedbackMode,
  showCorrectAnswers,
  onRandomizeChange,
  onFeedbackModeChange,
  onShowCorrectAnswersChange,
}) => {
  // Summary text when collapsed
  const feedbackLabel = feedbackMode === 'immediate' ? 'Immediate Feedback' : 'On Submit';
  const answersLabel = showCorrectAnswers === 'never' ? 'Never' : showCorrectAnswers === 'after_attempts' ? 'After Attempts' : 'Always';
  const summary = `${randomizeItems ? 'Randomized' : 'Sequential'} · ${feedbackLabel} · Show: ${answersLabel}`;

  return (
    <SettingsOption
      title="Behavior"
      summary={summary}
      className="behaviorCard"
    >
      <Form.Group className="mb-3">
        <Form.Checkbox
          checked={randomizeItems}
          onChange={(e) => onRandomizeChange(e.target.checked)}
        >
          Randomize item order
        </Form.Checkbox>
        <Form.Control.Feedback>
          Shuffle terms and descriptions for each student
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="select"
          value={feedbackMode}
          onChange={(e) => onFeedbackModeChange(e.target.value)}
          floatingLabel="Feedback Mode"
        >
          <option value="immediate">Immediate Feedback</option>
          <option value="on_submit">On Submit</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="select"
          value={showCorrectAnswers}
          onChange={(e) => onShowCorrectAnswersChange(e.target.value)}
          floatingLabel="Show Correct Answers"
        >
          <option value="never">Never</option>
          <option value="after_attempts">After Max Attempts</option>
          <option value="always">Always</option>
        </Form.Control>
      </Form.Group>
    </SettingsOption>
  );
};
