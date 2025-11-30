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
  onRandomizeChange: (value: boolean) => void;
  onFeedbackModeChange: (value: string) => void;
}

export const BehaviorCard: React.FC<BehaviorCardProps> = ({
  randomizeItems,
  feedbackMode,
  onRandomizeChange,
  onFeedbackModeChange,
}) => {
  // Summary text when collapsed
  const feedbackLabel = feedbackMode === 'immediate' ? 'Immediate Feedback' : 'On Submit';
  const summary = `${randomizeItems ? 'Randomized' : 'Sequential'} · ${feedbackLabel}`;

  return (
    <SettingsOption
      title="Behavior"
      summary={summary}
      className="behaviorCard"
    >
      <div className="mb-4">
        Specify when and how feedback is shown to students
      </div>

      <Form.Group>
        <Form.Control
          as="select"
          value={feedbackMode}
          onChange={(e) => onFeedbackModeChange(e.target.value)}
          floatingLabel="Feedback Mode"
        >
          <option value="immediate">Immediate Feedback</option>
          <option value="on_submit">On Submit</option>
        </Form.Control>
        <Form.Control.Feedback>
          When to show correctness feedback to students
        </Form.Control.Feedback>

        <Form.Checkbox
          className="mt-3 decoration-control-label"
          checked={randomizeItems}
          onChange={(e) => onRandomizeChange(e.target.checked)}
        >
          <div className="x-small">
            Randomize item order
          </div>
        </Form.Checkbox>
      </Form.Group>
    </SettingsOption>
  );
};
