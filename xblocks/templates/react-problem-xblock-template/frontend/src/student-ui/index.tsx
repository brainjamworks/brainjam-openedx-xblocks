/**
 * ARCHITECTURAL: Entry point for {XBlockName} student view
 *
 * PATTERN: IntlProvider added for consistency and future Paragon components
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudentView } from './StudentView';
import './styles/minimal-paragon.scss';

/**
 * IMPLEMENTATION: Define the data structure your XBlock receives
 *
 * This should match the data dictionary you pass from Python's student_view()
 */
interface StudentData {
  // IMPLEMENTATION: Add your XBlock's fields here
  displayName: string;
  // Add more fields as needed:
  // content?: string;
  // settings?: {...};
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
 */
export const renderBlock = (element: Element | null, data: StudentData) => {
  // ARCHITECTURAL: React render with IntlProvider
  // Note: Card component works without IntlProvider, but added for consistency
  ReactDOM.render(
    (
      <React.StrictMode>
        <IntlProvider locale="en">
          <StudentView
            displayName={data.displayName}
            {/* Add more props as needed */}
          />
        </IntlProvider>
      </React.StrictMode>
    ),
    element,
  );
};
