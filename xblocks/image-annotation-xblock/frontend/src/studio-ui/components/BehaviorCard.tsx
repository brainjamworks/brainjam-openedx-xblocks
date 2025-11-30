/**
 * BehaviorCard Component - Annotation Behavior Settings
 *
 * Settings card for image annotation-specific behavior configuration.
 * Uses SettingsOption wrapper for consistent collapse behavior.
 *
 * Pattern: frontend-app-authoring/SettingsWidget/settingsComponents
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import SettingsOption from './SettingsOption';

interface BehaviorCardProps {
  showFeedbackMode: string;
  gradingMode: string;
  snapEnabled: boolean;
  showCorrectOnSubmit: boolean;
  onShowFeedbackModeChange: (value: string) => void;
  onGradingModeChange: (value: string) => void;
  onSnapEnabledChange: (value: boolean) => void;
  onShowCorrectOnSubmitChange: (value: boolean) => void;
}

export const BehaviorCard: React.FC<BehaviorCardProps> = ({
  showFeedbackMode,
  gradingMode,
  snapEnabled,
  showCorrectOnSubmit,
  onShowFeedbackModeChange,
  onGradingModeChange,
  onSnapEnabledChange,
  onShowCorrectOnSubmitChange,
}) => {
  // Summary text when collapsed
  const feedbackText = showFeedbackMode === 'immediate' ? 'Immediate feedback' : 'Feedback on submit';
  const gradingText = gradingMode === 'exact' ? 'Exact grading' : 'Partial credit';
  const summary = `${feedbackText} · ${gradingText}`;

  return (
    <SettingsOption
      title="Annotation Behavior"
      summary={summary}
      className="behaviorCard"
    >
      <div className="mb-4">
        Configure how students interact with the annotation exercise
      </div>

      {/* Feedback Mode */}
      <Form.Group>
        <Form.Label>Feedback Mode</Form.Label>
        <Form.Control
          as="select"
          value={showFeedbackMode}
          onChange={(e) => onShowFeedbackModeChange(e.target.value)}
        >
          <option value="on_submit">On Submit - Show feedback after submission</option>
          <option value="immediate">Immediate - Show feedback as labels are placed</option>
        </Form.Control>
        <Form.Control.Feedback>
          Choose when students receive feedback on their label placements
        </Form.Control.Feedback>
      </Form.Group>

      {/* Grading Mode */}
      <Form.Group>
        <Form.Label>Grading Mode</Form.Label>
        <Form.Control
          as="select"
          value={gradingMode}
          onChange={(e) => onGradingModeChange(e.target.value)}
        >
          <option value="exact">Exact - All labels must be correct</option>
          <option value="partial">Partial Credit - Points for each correct label</option>
        </Form.Control>
        <Form.Control.Feedback>
          Exact mode requires all labels correct for full credit. Partial awards points per label.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Snap to Zone */}
      <Form.Group>
        <Form.Checkbox
          className="mt-3 decoration-control-label"
          checked={snapEnabled}
          onChange={(e) => onSnapEnabledChange(e.target.checked)}
        >
          <div className="x-small">
            Enable snap-to-zone behavior
          </div>
        </Form.Checkbox>
        <Form.Control.Feedback>
          When enabled, labels automatically snap to the center of drop zones when dragged nearby
        </Form.Control.Feedback>
      </Form.Group>

      {/* Show Correct Answer */}
      <Form.Group>
        <Form.Checkbox
          className="mt-3 decoration-control-label"
          checked={showCorrectOnSubmit}
          onChange={(e) => onShowCorrectOnSubmitChange(e.target.checked)}
        >
          <div className="x-small">
            Show "Show Answer" button after submission
          </div>
        </Form.Checkbox>
        <Form.Control.Feedback>
          Allows students to view correct label placements after submitting their answers
        </Form.Control.Feedback>
      </Form.Group>
    </SettingsOption>
  );
};
