/**
 * SettingsSidebar Component
 *
 * Settings sidebar for sort-into-bins editor.
 * Uses exact MFE layout pattern with consistent spacing and advanced settings toggle.
 */

import React from 'react';
import { ScoringCard } from './ScoringCard';
import { BehaviorCard } from './BehaviorCard';
import { showAdvancedSettingsCards } from '../hooks/settingsHooks';

interface SettingsSidebarProps {
  weight: number;
  maxAttempts: number;
  unlimited: boolean;
  randomizeItems: boolean;
  feedbackMode: string;
  showCorrectAnswers: string;
  onWeightChange: (value: number) => void;
  onMaxAttemptsChange: (value: number) => void;
  onUnlimitedChange: (value: boolean) => void;
  onRandomizeChange: (value: boolean) => void;
  onFeedbackModeChange: (value: string) => void;
  onShowCorrectAnswersChange: (value: string) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  weight,
  maxAttempts,
  unlimited,
  randomizeItems,
  feedbackMode,
  showCorrectAnswers,
  onWeightChange,
  onMaxAttemptsChange,
  onUnlimitedChange,
  onRandomizeChange,
  onFeedbackModeChange,
  onShowCorrectAnswersChange,
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
        <BehaviorCard
          randomizeItems={randomizeItems}
          feedbackMode={feedbackMode}
          showCorrectAnswers={showCorrectAnswers}
          onRandomizeChange={onRandomizeChange}
          onFeedbackModeChange={onFeedbackModeChange}
          onShowCorrectAnswersChange={onShowCorrectAnswersChange}
        />
      </div>
    </div>
  );
};
