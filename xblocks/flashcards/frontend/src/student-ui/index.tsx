/**
 * ARCHITECTURAL: Entry point for Flashcards student view
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
 * Single flashcard structure
 */
interface FlashCard {
  front_title: string;
  front_subtitle: string;
  back_text: string;
}

/**
 * Data structure received from Python's student_view()
 */
interface StudentData {
  displayName: string;
  title?: string;
  cards: FlashCard[];
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
  // ARCHITECTURAL: React 18 render with createRoot
  // Note: Card component works without IntlProvider, but added for consistency
  const root = createRoot(element!);
  root.render(
    <React.StrictMode>
<IntlProvider locale="en">
          <StudentView
            displayName={data.displayName}
            title={data.title}
            cards={data.cards}
          />
        </IntlProvider>    </React.StrictMode>
  );
};
