/**
 * SettingsSidebar Component
 *
 * Settings sidebar for image-hotspot editor.
 * Uses exact MFE layout pattern with consistent spacing and advanced settings toggle.
 */

import React from 'react';
import { ScoringCard } from './ScoringCard';
import { HotspotBehaviorCard } from './HotspotBehaviorCard';

interface SettingsSidebarProps {
  weight: number;
  maxAttempts: number;
  unlimited: boolean;
  feedbackMode: string;
  gradingMode: string;
  onWeightChange: (value: number) => void;
  onMaxAttemptsChange: (value: number) => void;
  onUnlimitedChange: (value: boolean) => void;
  onFeedbackModeChange: (value: string) => void;
  onGradingModeChange: (value: string) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  weight,
  maxAttempts,
  unlimited,
  feedbackMode,
  gradingMode,
  onWeightChange,
  onMaxAttemptsChange,
  onUnlimitedChange,
  onFeedbackModeChange,
  onGradingModeChange,
}) => {
  return (
    <div className="settingsWidget ml-4">
      {/* Scoring Card - collapsible */}
      <div className="my-3">
        <ScoringCard
          weight={weight}
          maxAttempts={maxAttempts}
          unlimited={unlimited}
          onWeightChange={onWeightChange}
          onMaxAttemptsChange={onMaxAttemptsChange}
          onUnlimitedChange={onUnlimitedChange}
        />
      </div>

      {/* Behavior Card - collapsible */}
      <div className="mt-3">
        <HotspotBehaviorCard
          gradingMode={gradingMode}
          feedbackMode={feedbackMode}
          onGradingModeChange={onGradingModeChange}
          onFeedbackModeChange={onFeedbackModeChange}
        />
      </div>
    </div>
  );
};
