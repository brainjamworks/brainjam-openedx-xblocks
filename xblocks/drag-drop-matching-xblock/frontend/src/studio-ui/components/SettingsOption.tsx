/**
 * SettingsOption Component (Copied from MFE Problem Editor)
 *
 * Reusable collapsible card wrapper for settings panels.
 * Provides consistent expand/collapse behavior and styling.
 *
 * Source: frontend-app-authoring/SettingsWidget/SettingsOption.jsx
 * Pattern: Paragon Card with Collapsible.Advanced + arrow icons
 * Styling: ALL from Paragon utility classes - NO custom CSS
 */

import React from 'react';
import Collapsible from '@openedx/paragon/dist/Collapsible';
import Icon from '@openedx/paragon/dist/Icon';
import Card from '@openedx/paragon/dist/Card';
import { KeyboardArrowUp, KeyboardArrowDown } from '@openedx/paragon/icons';
import { showFullCard } from '../hooks/settingsHooks';
import CardSection from './CardSection';

interface SettingsOptionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  summary: string;
  extraSections?: Array<{ children: React.ReactNode }>;
  hasExpandableTextArea?: boolean;
  none?: boolean;
}

const SettingsOption: React.FC<SettingsOptionProps> = ({
  title,
  className = '',
  extraSections = [],
  children,
  summary,
  hasExpandableTextArea = false,
  none,
}) => {
  const { isCardCollapsibleOpen, toggleCardCollapse } = showFullCard(hasExpandableTextArea);

  return (
    <Card className={`${className} settingsOption border border-light-700 shadow-none`}>
      <Card.Section className="settingsCardTitleSection" key={`settingsOption-${title}-header`}>
        <Collapsible.Advanced
          open={isCardCollapsibleOpen}
          onToggle={toggleCardCollapse}
        >
          <Collapsible.Trigger className="collapsible-trigger d-flex">
            <span className="flex-grow-1 text-primary-500 x-small">{title}</span>
            <Collapsible.Visible whenClosed>
              <Icon src={KeyboardArrowDown} />
            </Collapsible.Visible>
            <Collapsible.Visible whenOpen>
              <Icon src={KeyboardArrowUp} />
            </Collapsible.Visible>
          </Collapsible.Trigger>
        </Collapsible.Advanced>
      </Card.Section>
      <CardSection
        none={none}
        isCardCollapsibleOpen={isCardCollapsibleOpen}
        summary={summary}
        key={`settingsOption-${title}-children`}
      >
        {children}
      </CardSection>
      {extraSections.map((section, index) => (
        <React.Fragment key={`settingsOption-${title}-${index}`}>
          {isCardCollapsibleOpen && <hr />}
          <CardSection
            isCardCollapsibleOpen={isCardCollapsibleOpen}
            summary=""
          >
            {section.children}
          </CardSection>
        </React.Fragment>
      ))}
    </Card>
  );
};

export default SettingsOption;
