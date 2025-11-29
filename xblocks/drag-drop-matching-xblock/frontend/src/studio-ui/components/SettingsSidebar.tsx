/**
 * SettingsSidebar Component (Updated to use MFE SettingsWidget pattern)
 *
 * Settings sidebar for drag-drop-matching editor.
 * Uses exact MFE layout pattern with consistent spacing and advanced settings toggle.
 *
 * Pattern: frontend-app-authoring/SettingsWidget/index.jsx
 */

import React from 'react';
import Card from '@openedx/paragon/dist/Card';
import Form from '@openedx/paragon/dist/Form';
import Collapsible from '@openedx/paragon/dist/Collapsible';
import Button from '@openedx/paragon/dist/Button';
import { ScoringCard } from './ScoringCard';
import { BehaviorCard } from './BehaviorCard';
import { showAdvancedSettingsCards } from '../hooks/settingsHooks';

interface SettingsSidebarProps {
  randomizeItems: boolean;
  weight: number;
  maxAttempts: number;
  unlimited: boolean;
  feedbackMode: string;
  onRandomizeChange: (value: boolean) => void;
  onWeightChange: (value: number) => void;
  onMaxAttemptsChange: (value: number) => void;
  onUnlimitedChange: (value: boolean) => void;
  onFeedbackModeChange: (value: string) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  randomizeItems,
  weight,
  maxAttempts,
  unlimited,
  feedbackMode,
  onRandomizeChange,
  onWeightChange,
  onMaxAttemptsChange,
  onUnlimitedChange,
  onFeedbackModeChange,
}) => {
  const { isAdvancedCardsVisible, showAdvancedCards } = showAdvancedSettingsCards();

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
          onRandomizeChange={onRandomizeChange}
          onFeedbackModeChange={onFeedbackModeChange}
        />
      </div>

      {/* Show Advanced Settings button */}
      <div>
        <Collapsible.Advanced open={!isAdvancedCardsVisible}>
          <Collapsible.Body className="collapsible-body small">
            <Button
              className="my-3 px-0 text-info-500"
              variant="link"
              size="inline"
              onClick={showAdvancedCards}
            >
              Show Advanced Settings
            </Button>
          </Collapsible.Body>
        </Collapsible.Advanced>
      </div>

      {/* Advanced Settings - initially hidden */}
      <Collapsible.Advanced open={isAdvancedCardsVisible}>
        <Collapsible.Body className="collapsible-body">
          {/* Future advanced settings cards will go here */}
        </Collapsible.Body>
      </Collapsible.Advanced>
    </div>
  );
};
