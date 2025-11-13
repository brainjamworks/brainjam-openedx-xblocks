/**
 * Entry point for Image Hotspot student view
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudentView } from './StudentView';
import type { StudentViewData, XBlockRuntime } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * Main render function called by bootstrap loader
 */
export const renderBlock = (element: Element | null, data: StudentViewData & { runtime: XBlockRuntime }) => {
  const root = createRoot(element!);
  root.render(
    <React.StrictMode>
<IntlProvider locale="en">
          <StudentView
            runtime={data.runtime}
            questionText={data.questionText}
            imageUrl={data.imageUrl}
            hotspots={data.hotspots}
            studentClicks={data.studentClicks}
            currentScore={data.currentScore}
            maxScore={data.maxScore}
            attemptsRemaining={data.attemptsRemaining}
            feedbackMode={data.feedbackMode}
            gradingMode={data.gradingMode}
            lastSubmissionResult={data.lastSubmissionResult}
          />
        </IntlProvider>    </React.StrictMode>
  );
};
