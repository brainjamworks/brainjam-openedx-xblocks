/**
 * ARCHITECTURAL: Entry point for ImageAnnotation student view
 *
 * PATTERN: IntlProvider added for Paragon components
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudentView } from './StudentView';
import type { StudentData } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * ARCHITECTURAL: Main render function called by bootstrap loader
 *
 * This is what gets imported dynamically by static/student.js
 *
 * @param element - DOM element to render into
 * @param data - Data from Python's student_view()
 */
export const renderBlock = (element: Element | null, data: StudentData) => {
  const root = createRoot(element!);
  root.render(
    <React.StrictMode>
      <IntlProvider locale="en">
        <StudentView
          runtime={data.runtime}
          url={data.url}
          displayName={data.displayName}
          questionText={data.questionText}
          backgroundImageUrl={data.backgroundImageUrl}
          backgroundImageWidth={data.backgroundImageWidth}
          backgroundImageHeight={data.backgroundImageHeight}
          labels={data.labels}
          dropZones={data.dropZones}
          studentPlacements={data.studentPlacements}
          currentScore={data.currentScore}
          maxScore={data.maxScore}
          attemptsRemaining={data.attemptsRemaining}
          feedbackMode={data.feedbackMode}
          isGraded={data.isGraded}
          snapEnabled={data.snapEnabled}
          snapRadius={data.snapRadius}
          showCorrectOnSubmit={data.showCorrectOnSubmit}
          hasSubmitted={data.hasSubmitted}
          lastSubmissionResult={data.lastSubmissionResult}
        />
      </IntlProvider>
    </React.StrictMode>
  );
};
