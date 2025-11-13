/**
 * ARCHITECTURAL: Entry point for ImageCommentary student view
 *
 * PATTERN: IntlProvider added for consistency and future Paragon components
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { StudentView } from './StudentView';
import type { Marker } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * IMPLEMENTATION: Define the data structure your XBlock receives
 *
 * This should match the data dictionary you pass from Python's student_view()
 */
interface StudentData {
  displayName: string;
  imageUrl: string;
  markers: Marker[];
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
  // ARCHITECTURAL: React render
  // Note: Paragon components work without IntlProvider
  const root = createRoot(element!);
  root.render(
    <React.StrictMode>
<StudentView
          displayName={data.displayName}
          imageUrl={data.imageUrl}
          markers={data.markers}
        />    </React.StrictMode>
  );
};
