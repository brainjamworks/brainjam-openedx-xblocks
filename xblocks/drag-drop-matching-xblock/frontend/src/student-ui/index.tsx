/**
 * ARCHITECTURAL: Entry point for DragDropMatching student view
 *
 * PATTERN: IntlProvider added for Paragon components
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudentView } from './StudentView';
import type { StudentViewData, XBlockRuntime } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * Data structure received from Python student_view()
 */
interface StudentData extends StudentViewData {
  runtime: XBlockRuntime;
}

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
            questionText={data.questionText}
            terms={data.terms}
            descriptions={data.descriptions}
            studentMatches={data.studentMatches}
            currentScore={data.currentScore}
            maxScore={data.maxScore}
            attemptsRemaining={data.attemptsRemaining}
            feedbackMode={data.feedbackMode}
            lastSubmissionResult={data.lastSubmissionResult}
          />
        </IntlProvider>    </React.StrictMode>
  );
};
