/**
 * ARCHITECTURAL: Entry point for Tabs student view
 *
 * PATTERN: IntlProvider added for consistency and future Paragon components
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudentView } from './StudentView';
import { XBlockRuntime } from '../common/api';
import './styles/minimal-paragon.scss';

/**
 * Single tab structure
 */
interface Tab {
  label: string;
  content: string;
}

/**
 * Data structure received from Python's student_view()
 */
interface StudentData {
  displayName: string;
  title?: string;
  tabs: Tab[];
  currentTabIndex: number;
}

/**
 * ARCHITECTURAL: Main render function called by bootstrap loader
 *
 * DON'T CHANGE: This export name and signature
 * IMPLEMENTATION: Update component import and props
 *
 * This is what gets imported dynamically by static/student.js
 *
 * @param element - DOM element to render into
 * @param data - Data from Python's student_view()
 * @param runtime - XBlock runtime for API calls
 */
export const renderBlock = (element: Element | null, data: StudentData, runtime: XBlockRuntime) => {
  // ARCHITECTURAL: React 18 render with createRoot
  const root = createRoot(element!);
  root.render(
    <React.StrictMode>
<IntlProvider locale="en">
          <StudentView
            displayName={data.displayName}
            title={data.title}
            tabs={data.tabs}
            currentTabIndex={data.currentTabIndex}
            runtime={runtime}
          />
        </IntlProvider>    </React.StrictMode>
  );
};
