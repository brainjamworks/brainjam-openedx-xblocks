/**
 * HotspotBehaviorCard Component (Adapted from BehaviorCard)
 *
 * Settings card for hotspot problem behavior configuration.
 * Uses SettingsOption wrapper for consistent collapse behavior.
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import SettingsOption from './SettingsOption';

interface HotspotBehaviorCardProps {
  gradingMode: string;
  feedbackMode: string;
  onGradingModeChange: (value: string) => void;
  onFeedbackModeChange: (value: string) => void;
}

export const HotspotBehaviorCard: React.FC<HotspotBehaviorCardProps> = ({
  gradingMode,
  feedbackMode,
  onGradingModeChange,
  onFeedbackModeChange,
}) => {
  // Summary text when collapsed
  const gradingLabel = gradingMode === 'partial_credit'
    ? 'Partial Credit'
    : gradingMode === 'all_or_nothing'
    ? 'All or Nothing'
    : 'First Correct';
  const feedbackLabel = feedbackMode === 'immediate' ? 'Immediate Feedback' : 'On Submit';
  const summary = `${gradingLabel} · ${feedbackLabel}`;

  return (
    <SettingsOption
      title="Behavior"
      summary={summary}
      className="behaviorCard"
    >
      <div className="mb-4">
        Specify when and how feedback is shown to students
      </div>

      <Form.Group className="mb-3">
        <Form.Control
          as="select"
          value={gradingMode}
          onChange={(e) => onGradingModeChange(e.target.value)}
          floatingLabel="Grading Mode"
        >
          <option value="partial_credit">Partial Credit</option>
          <option value="all_or_nothing">All or Nothing</option>
          <option value="first_correct">First Correct</option>
        </Form.Control>
        <Form.Control.Feedback>
          How to score clicks: proportional, all correct required, or first correct wins
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
        <Form.Control.Feedback>
          When to show correctness feedback to students
        </Form.Control.Feedback>
      </Form.Group>
    </SettingsOption>
  );
};
