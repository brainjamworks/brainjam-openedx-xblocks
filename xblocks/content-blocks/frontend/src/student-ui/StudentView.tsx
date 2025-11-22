/**
 * Content Blocks Student View Component
 *
 * Simple vertical display of content sections - no collapsible functionality.
 * Sections are always visible, displayed one after another.
 */

import React from 'react';
import { XBlockRuntime } from '../common/api';

/**
 * Single section structure
 */
interface Section {
  title: string;
  content: string;
}

/**
 * Props for the student-facing content blocks component
 */
interface StudentViewProps {
  displayName: string;
  title?: string;
  sections: Section[];
  runtime: XBlockRuntime;
}

/**
 * StudentView - Simple vertical content display
 */
export const StudentView: React.FC<StudentViewProps> = ({
  displayName,
  title,
  sections,
  runtime
}) => {
  return (
    <div className="content-blocks-student-view">
      {title && <h3 className="content-blocks-main-title">{title}</h3>}
      <div className="content-blocks-wrapper">
        {sections.map((section, index) => (
          <div key={index} className="content-block">
            {section.title && (
              <h4 className="content-block-title">
                {section.title}
              </h4>
            )}
            <div
              className="content-block-content"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
