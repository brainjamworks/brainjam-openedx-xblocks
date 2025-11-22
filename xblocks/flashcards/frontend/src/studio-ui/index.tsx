/**
 * ARCHITECTURAL: Entry point for Flashcards studio view
 *
 * PATTERN: Some Paragon components (Form, Alert) require IntlProvider
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudioView } from './StudioView';
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
 * Data structure received from Python's studio_view()
 */
interface StudioData {
  fields: {
    display_name: string;
    cards: FlashCard[];
  };
  baseAssetUrl?: string | null;
  courseId?: string | null;
}

/**
 * ARCHITECTURAL: Main render function called by bootstrap loader
 *
 * DON'T CHANGE: This export name and signature
 * IMPLEMENTATION: Update component import and props
 *
 * This is what gets imported dynamically by static/studio.js
 *
 * @param runtime - XBlock runtime object (needed for save operations)
 * @param element - DOM element to render into
 * @param data - Data from Python's studio_view()
 */
export const renderBlock = (runtime: any, element: Element | null, data: StudioData) => {
  // ARCHITECTURAL: Set runtime.element for API calls
  // This is required for xblockPost and other helpers that use runtime.handlerUrl(runtime.element, handler)
  runtime.element = element;

  // ARCHITECTURAL: React 18 render with createRoot
  // Note: Some Paragon components (Form, Alert) require IntlProvider
  const root = createRoot(element!);
  root.render(
    <React.StrictMode>
<IntlProvider locale="en">
          <StudioView
            runtime={runtime}
            fields={data.fields}
            baseAssetUrl={data.baseAssetUrl}
            courseId={data.courseId}
          />
        </IntlProvider>    </React.StrictMode>
  );
};
