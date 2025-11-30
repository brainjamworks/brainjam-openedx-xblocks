/**
 * CardSection Component (Copied from MFE Problem Editor)
 *
 * Handles collapsed/expanded content display for SettingsOption cards.
 * Shows summary text when collapsed, full children when expanded.
 *
 * Source: frontend-app-authoring/SettingsWidget/CardSection.jsx
 * Pattern: Two Collapsible.Advanced blocks - one for summary, one for content
 * Styling: ALL from Paragon utility classes - NO custom CSS
 */

import React from 'react';
import Collapsible from '@openedx/paragon/dist/Collapsible';
import Card from '@openedx/paragon/dist/Card';

interface CardSectionProps {
  children: React.ReactNode;
  none?: boolean;
  summary?: string;
  isCardCollapsibleOpen: boolean;
}

const CardSection: React.FC<CardSectionProps> = ({
  children,
  none = false,
  isCardCollapsibleOpen,
  summary,
}) => {
  const show = isCardCollapsibleOpen || summary;
  if (!show) {
    return null;
  }

  return (
    <Card.Section className="pt-0">
      {/* Summary view - shown when card is collapsed */}
      <Collapsible.Advanced open={!isCardCollapsibleOpen}>
        <Collapsible.Body className="collapsible-body">
          <span className={`small ${none ? 'text-gray-500' : 'text-primary-500'}`}>
            {summary}
          </span>
        </Collapsible.Body>
      </Collapsible.Advanced>

      {/* Full content view - shown when card is expanded */}
      <Collapsible.Advanced open={isCardCollapsibleOpen}>
        <Collapsible.Body className="collapsible-body text-primary-500 x-small">
          {children}
        </Collapsible.Body>
      </Collapsible.Advanced>
    </Card.Section>
  );
};

export default CardSection;
