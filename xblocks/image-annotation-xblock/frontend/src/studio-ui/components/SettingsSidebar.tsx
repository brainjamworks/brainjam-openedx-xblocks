/**
 * SettingsSidebar Component
 *
 * Settings sidebar with collapsible cards for problem configuration.
 * Fixed width (320px) sidebar on the right side.
 *
 * Pattern: frontend-app-authoring/SettingsWidget/SettingsSidebar.jsx
 */

import React, { useState } from 'react';
import { ScoringCard } from './ScoringCard';
import { BehaviorCard } from './BehaviorCard';

interface SettingsSidebarProps {
  // Scoring
  weight: number;
  maxAttempts: number;
  onWeightChange: (value: number) => void;
  onMaxAttemptsChange: (value: number) => void;

  // Behavior
  showFeedbackMode: string;
  gradingMode: string;
  snapEnabled: boolean;
  showCorrectOnSubmit: boolean;
  onShowFeedbackModeChange: (value: string) => void;
  onGradingModeChange: (value: string) => void;
  onSnapEnabledChange: (value: boolean) => void;
  onShowCorrectOnSubmitChange: (value: boolean) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  weight,
  maxAttempts,
  onWeightChange,
  onMaxAttemptsChange,
  showFeedbackMode,
  gradingMode,
  snapEnabled,
  showCorrectOnSubmit,
  onShowFeedbackModeChange,
  onGradingModeChange,
  onSnapEnabledChange,
  onShowCorrectOnSubmitChange,
}) => {
  // Track unlimited attempts state locally
  const [unlimited, setUnlimited] = useState(maxAttempts === 0);

  const handleUnlimitedChange = (value: boolean) => {
    setUnlimited(value);
    if (value) {
      onMaxAttemptsChange(0); // 0 = unlimited
    } else {
      onMaxAttemptsChange(1); // Default to 1 when turning off unlimited
    }
  };

  const handleMaxAttemptsChange = (value: number) => {
    onMaxAttemptsChange(value);
    setUnlimited(value === 0);
  };

  return (
    <div className="settingsWidget ml-4">
      {/* Scoring Card */}
      <div className="my-3">
        <ScoringCard
          weight={weight}
          maxAttempts={maxAttempts}
          unlimited={unlimited}
          onWeightChange={onWeightChange}
          onMaxAttemptsChange={handleMaxAttemptsChange}
          onUnlimitedChange={handleUnlimitedChange}
        />
      </div>

      {/* Behavior Card */}
      <div className="mt-3">
        <BehaviorCard
          showFeedbackMode={showFeedbackMode}
          gradingMode={gradingMode}
          snapEnabled={snapEnabled}
          showCorrectOnSubmit={showCorrectOnSubmit}
          onShowFeedbackModeChange={onShowFeedbackModeChange}
          onGradingModeChange={onGradingModeChange}
          onSnapEnabledChange={onSnapEnabledChange}
          onShowCorrectOnSubmitChange={onShowCorrectOnSubmitChange}
        />
      </div>
    </div>
  );
};
