/**
 * Timeline Presentation - Student View Entry Point
 *
 * ARCHITECTURAL: Entry point for student view
 * This file bootstraps the React app and connects it to the XBlock runtime.
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudentView } from './StudentView';
import { XBlockRuntime } from '../common/api';
import { StudentData } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * Main render function called by bootstrap loader
 *
 * This is what gets imported dynamically by static/student.js
 *
 * @param element - DOM element to render into
 * @param data - Data from Python's student_view()
 * @param runtime - XBlock runtime for API calls
 */
export const renderBlock = (
  element: Element | null,
  data: StudentData,
  runtime: XBlockRuntime
) => {
  if (!element) {
    console.error('Timeline Presentation: No element provided for rendering');
    return;
  }

  // React 18 render with createRoot
  const root = createRoot(element);

  root.render(
    <React.StrictMode>
      <IntlProvider locale="en">
        <StudentView
          displayName={data.displayName}
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
          audioUrl={data.audioUrl}
          timelineEvents={data.timelineEvents}
          runtime={runtime}
        />
      </IntlProvider>
    </React.StrictMode>
  );
};
