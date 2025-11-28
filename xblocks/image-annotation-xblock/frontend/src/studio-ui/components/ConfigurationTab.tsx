/**
 * ConfigurationTab - Basic XBlock Configuration
 *
 * Provides form fields for configuring XBlock settings including:
 * - Display name and weight
 * - Grading mode and max attempts
 * - Feedback and snap settings
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';

export interface ConfigurationTabProps {
  displayName: string;
  weight: number;
  maxAttempts: number;
  gradingMode: string;
  showFeedbackMode: string;
  snapEnabled: boolean;
  showCorrectOnSubmit: boolean;
  onDisplayNameChange: (value: string) => void;
  onWeightChange: (value: number) => void;
  onMaxAttemptsChange: (value: number) => void;
  onGradingModeChange: (value: string) => void;
  onShowFeedbackModeChange: (value: string) => void;
  onSnapEnabledChange: (value: boolean) => void;
  onShowCorrectOnSubmitChange: (value: boolean) => void;
}

export const ConfigurationTab: React.FC<ConfigurationTabProps> = ({
  displayName,
  weight,
  maxAttempts,
  gradingMode,
  showFeedbackMode,
  snapEnabled,
  showCorrectOnSubmit,
  onDisplayNameChange,
  onWeightChange,
  onMaxAttemptsChange,
  onGradingModeChange,
  onShowFeedbackModeChange,
  onSnapEnabledChange,
  onShowCorrectOnSubmitChange,
}) => {
  return (
    <div className="configuration-tab">
      {/* Basic Settings */}
      <h3>Basic Settings</h3>

      <Form.Group className="mb-3">
        <Form.Label>Display Name</Form.Label>
        <Form.Control
          type="text"
          value={displayName}
          onChange={(e) => onDisplayNameChange(e.target.value)}
          placeholder="Enter display name"
        />
        <Form.Text>The name students see in the courseware</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="0.1"
          value={weight}
          onChange={(e) => onWeightChange(parseFloat(e.target.value) || 0)}
        />
        <Form.Text>Maximum points possible for this problem</Form.Text>
      </Form.Group>

      {/* Grading Settings */}
      <h3 className="mt-4">Grading Settings</h3>

      <Form.Group className="mb-3">
        <Form.Label>Grading Mode</Form.Label>
        <Form.Control
          as="select"
          value={gradingMode}
          onChange={(e) => onGradingModeChange(e.target.value)}
        >
          <option value="partial">Partial Credit - Award points for each correct placement</option>
          <option value="all_or_nothing">All or Nothing - Award full points only if all correct</option>
        </Form.Control>
        <Form.Text>How to calculate the score</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Maximum Attempts</Form.Label>
        <Form.Control
          type="number"
          min="0"
          value={maxAttempts}
          onChange={(e) => onMaxAttemptsChange(parseInt(e.target.value) || 0)}
        />
        <Form.Text>Number of attempts allowed (0 = unlimited)</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Feedback Mode</Form.Label>
        <Form.Control
          as="select"
          value={showFeedbackMode}
          onChange={(e) => onShowFeedbackModeChange(e.target.value)}
        >
          <option value="on_submit">On Submit - Show feedback after submission</option>
          <option value="immediate">Immediate - Show feedback as labels are placed</option>
        </Form.Control>
        <Form.Text>When to show feedback to students</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="show-correct-on-submit"
          label="Show correct answers after submission"
          checked={showCorrectOnSubmit}
          onChange={(e) => onShowCorrectOnSubmitChange(e.target.checked)}
        />
        <Form.Text>Display the correct placement after student submits</Form.Text>
      </Form.Group>

      {/* Snap Settings */}
      <h3 className="mt-4">Snap Settings</h3>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="snap-enabled"
          label="Enable snap to zone"
          checked={snapEnabled}
          onChange={(e) => onSnapEnabledChange(e.target.checked)}
        />
        <Form.Text>
          Automatically snap labels to nearby drop zones.
          Snap distance is determined by each zone's radius (configured in Drop Zones tab).
        </Form.Text>
      </Form.Group>
    </div>
  );
};
