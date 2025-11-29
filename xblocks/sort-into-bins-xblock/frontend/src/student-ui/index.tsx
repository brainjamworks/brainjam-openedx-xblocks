/**
 * Entry point for Sort Into Bins student view
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { StudentView } from './StudentView';
import type { StudentViewData } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * Main render function called by bootstrap loader
 *
 * @param element - DOM element to render into
 * @param data - Data from Python's student_view() including runtime
 */
export const renderBlock = (element: Element | null, data: StudentViewData & { runtime: any }) => {
  if (!element) {
    console.error('No element provided to renderBlock');
    return;
  }

  const root = createRoot(element);
  root.render(
    <React.StrictMode>
      <StudentView
        runtime={data.runtime}
        displayName={data.displayName}
        instructions={data.instructions}
        bins={data.bins}
        items={data.items}
        studentPlacements={data.studentPlacements}
        currentScore={data.currentScore}
        maxScore={data.maxScore}
        attemptsRemaining={data.attemptsRemaining}
        gradingMode={data.gradingMode}
        showCorrectAnswers={data.showCorrectAnswers}
        feedbackMode={data.feedbackMode}
        lastSubmissionResult={data.lastSubmissionResult}
        isGraded={data.isGraded}
      />
    </React.StrictMode>
  );
};
