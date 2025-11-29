/**
 * EditorLayout Component (Updated to use exact MFE EditProblemView pattern)
 *
 * Two-column layout for image-hotspot editor.
 * Uses EXACT MFE className values and structure.
 *
 * Pattern: frontend-app-authoring/EditProblemView/index.jsx (lines 112-127)
 * Layout: Flexbox row with flex-grow main content + fixed 320px sidebar
 * Styling: ALL from Paragon utilities + studio-editor.scss
 */

import React from 'react';

interface EditorLayoutProps {
  mainContent: React.ReactNode;
  sidebar: React.ReactNode;
}

export const EditorLayout: React.FC<EditorLayoutProps> = ({
  mainContent,
  sidebar,
}) => {
  return (
    <div className="editProblemView d-flex flex-row flex-nowrap justify-content-end">
      {/* Main content area - grows to fill available space */}
      <span className="flex-grow-1 mb-5">
        {mainContent}
      </span>

      {/* Settings sidebar - fixed 320px width (defined in CSS) */}
      <span className="editProblemView-settingsColumn">
        {sidebar}
      </span>
    </div>
  );
};
