/**
 * ScoringCard Component (Refactored to use MFE SettingsOption pattern)
 *
 * Settings card for problem scoring configuration.
 * Uses SettingsOption wrapper for consistent collapse behavior.
 *
 * Pattern: frontend-app-authoring/SettingsWidget/settingsComponents/ScoringCard.jsx
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import SettingsOption from './SettingsOption';

interface ScoringCardProps {
  weight: number;
  maxAttempts: number;
  unlimited: boolean;
  onWeightChange: (value: number) => void;
  onMaxAttemptsChange: (value: number) => void;
  onUnlimitedChange: (value: boolean) => void;
}

export const ScoringCard: React.FC<ScoringCardProps> = ({
  weight,
  maxAttempts,
  unlimited,
  onWeightChange,
  onMaxAttemptsChange,
  onUnlimitedChange,
}) => {
  // Summary text when collapsed
  const summary = `${weight} point${weight === 1 ? '' : 's'} · ${
    unlimited ? 'Unlimited attempts' : `${maxAttempts} attempt${maxAttempts === 1 ? '' : 's'}`
  }`;

  return (
    <SettingsOption
      title="Scoring"
      summary={summary}
      className="scoringCard"
    >
      <div className="mb-4">
        Specify point weight and the number of answer attempts
      </div>

      {/* Weight */}
      <Form.Group>
        <Form.Control
          type="number"
          min={0}
          step={0.1}
          value={weight}
          onChange={(e) => onWeightChange(Number(e.target.value))}
          floatingLabel="Points"
        />
        <Form.Control.Feedback>
          If a value is not set, the problem is worth one point
        </Form.Control.Feedback>
      </Form.Group>

      {/* Attempts */}
      <Form.Group>
        <Form.Control
          type="number"
          min={0}
          value={unlimited ? '' : maxAttempts}
          onChange={(e) => onMaxAttemptsChange(Number(e.target.value))}
          floatingLabel="Attempts"
          disabled={unlimited}
        />
        <Form.Control.Feedback>
          If a default value is not set in advanced settings, unlimited attempts are allowed
        </Form.Control.Feedback>

        <Form.Checkbox
          className="mt-3 decoration-control-label"
          checked={unlimited}
          onChange={(e) => onUnlimitedChange(e.target.checked)}
        >
          <div className="x-small">
            Unlimited attempts
          </div>
        </Form.Checkbox>
      </Form.Group>
    </SettingsOption>
  );
};
