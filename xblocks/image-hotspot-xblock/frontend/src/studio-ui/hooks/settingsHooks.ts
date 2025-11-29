/**
 * Settings Hooks (Extracted from MFE Problem Editor)
 *
 * State management hooks for collapsible settings cards.
 *
 * Source: frontend-app-authoring/SettingsWidget/hooks.js
 * Pattern: React useState hooks for collapse state management
 */

import { useState } from 'react';

/**
 * Hook for managing advanced settings visibility
 *
 * Returns state and function to show advanced settings cards.
 * Once shown, advanced cards stay visible for the session.
 */
export const showAdvancedSettingsCards = () => {
  const [isAdvancedCardsVisible, setIsAdvancedCardsVisible] = useState(false);
  return {
    isAdvancedCardsVisible,
    showAdvancedCards: () => setIsAdvancedCardsVisible(true),
  };
};

/**
 * Hook for managing individual card collapse state
 *
 * @param hasExpandableTextArea - If true, card starts expanded and stays open
 * @returns collapse state and toggle function
 */
export const showFullCard = (hasExpandableTextArea?: boolean) => {
  const [isCardCollapsibleOpen, setIsCardCollapsibleOpen] = useState(
    hasExpandableTextArea || false
  );

  return {
    isCardCollapsibleOpen,
    toggleCardCollapse: () => {
      if (hasExpandableTextArea) {
        // Cards with text areas stay expanded
        setIsCardCollapsibleOpen(true);
      } else {
        // Normal toggle behavior
        setIsCardCollapsibleOpen(!isCardCollapsibleOpen);
      }
    },
  };
};
