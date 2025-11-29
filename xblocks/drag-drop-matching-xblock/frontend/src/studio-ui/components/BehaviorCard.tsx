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
      </Form.Group>
    </SettingsOption>
  );
};
