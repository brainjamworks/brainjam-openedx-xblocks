import React, { useState } from 'react';
import Card from '@openedx/paragon/dist/Card';
import Collapsible from '@openedx/paragon/dist/Collapsible';

interface SettingsCardProps {
  title: string;
  summary?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Collapsible settings card component
 *
 * Matches the Paragon problem editor pattern for settings organization
 */
export const SettingsCard: React.FC<SettingsCardProps> = ({
  title,
  summary,
  children,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className={`mb-3 ${className}`}>
      <Collapsible.Advanced open={isOpen} onToggle={setIsOpen}>
        <Collapsible.Trigger className="d-flex justify-content-between align-items-center p-3 border-0">
          <span className="h6 mb-0 text-primary-700">{title}</span>
          {summary && (
            <span className="small text-gray-500">{summary}</span>
          )}
        </Collapsible.Trigger>
        <Collapsible.Body>
          <Card.Section className="pt-0">
            {children}
          </Card.Section>
        </Collapsible.Body>
      </Collapsible.Advanced>
    </Card>
  );
};
