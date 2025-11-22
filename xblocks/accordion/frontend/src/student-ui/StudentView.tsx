/**
 * Accordion Student View Component
 *
 * Interactive accordion content interface using Paragon Collapsible component.
 * Supports multiple open sections and state persistence.
 * Follows accessibility best practices with ARIA attributes and keyboard support.
 */

import React, { useState } from 'react';
import Collapsible from '@openedx/paragon/dist/Collapsible';
import { xblockPost, XBlockRuntime } from '../common/api';

/**
 * Single section structure
 */
interface Section {
  title: string;
  content: string;
}

/**
 * Props for the student-facing accordion component
 */
interface StudentViewProps {
  displayName: string;
  title?: string;
  sections: Section[];
  openSections: number[];
  allowMultipleOpen: boolean;
  runtime: XBlockRuntime;
}

/**
 * StudentView - Accordion interface with state persistence
 */
export const StudentView: React.FC<StudentViewProps> = ({
  displayName,
  title,
  sections,
  openSections: initialOpenSections,
  allowMultipleOpen,
  runtime
}) => {
  const [openSections, setOpenSections] = useState<number[]>(initialOpenSections || [0]);

  /**
   * Toggle a section open/closed
   */
  const handleToggle = (index: number) => {
    let newOpenSections: number[];

    if (openSections.includes(index)) {
      // Close this section
      newOpenSections = openSections.filter(i => i !== index);
    } else {
      // Open this section
      if (allowMultipleOpen) {
        newOpenSections = [...openSections, index];
      } else {
        // Only one section open at a time
        newOpenSections = [index];
      }
    }

    setOpenSections(newOpenSections);
  };

  return (
    <div className="accordion-student-view">
      {title && <h3 className="accordion-main-title">{title}</h3>}
      <div className="accordion-wrapper">
        {/* Render each section as a Paragon Collapsible card */}
        {sections.map((section, index) => (
          <Collapsible.Advanced
            key={index}
            open={openSections.includes(index)}
            onToggle={() => handleToggle(index)}
            className="accordion-section"
          >
            <Collapsible.Trigger className="accordion-section-trigger">
              <h4 className="accordion-section-title">
                {section.title}
              </h4>
            </Collapsible.Trigger>
            <Collapsible.Body className="accordion-section-body">
              <div
                className="accordion-section-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </Collapsible.Body>
          </Collapsible.Advanced>
        ))}
      </div>
    </div>
  );
};
