/**
 * ARCHITECTURAL: Entry point for AudioPlayer student view
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
 * Data structure received from Python's student_view()
 */
interface StudentData {
  displayName: string;
  title?: string;
  description?: string;
  audioUrl: string;
  showControls: boolean;
  autoplay: boolean;
  showDownload: boolean;
}

/**
 * Main render function called by bootstrap loader
 *
 * @param element - DOM element to render into
 * @param data - Data from Python's student_view()
 */
export const renderBlock = (element: Element | null, data: StudentData) => {
  if (!element) {
    console.error('No element provided to renderBlock');
    return;
  }

  const root = createRoot(element);
  root.render(
    <React.StrictMode>
      <IntlProvider locale="en">
        <StudentView
          displayName={data.displayName}
          title={data.title}
          description={data.description}
          audioUrl={data.audioUrl}
          showControls={data.showControls}
          autoplay={data.autoplay}
          showDownload={data.showDownload}
        />
      </IntlProvider>
    </React.StrictMode>
  );
};
