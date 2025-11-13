/**
 * ARCHITECTURAL: Entry point for ImageCommentary studio view
 *
 * PATTERN: Advanced Paragon components (Stepper, Modal, Dropzone) require IntlProvider
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudioView } from './StudioView';
import type { StudioViewFields } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * IMPLEMENTATION: Define the data structure your XBlock receives
 *
 * This should match the data dictionary you pass from Python's studio_view()
 */
interface StudioData {
  fields: StudioViewFields;
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

  // ARCHITECTURAL: React render
  // Note: Advanced Paragon components (Stepper, Modal, Dropzone) require IntlProvider
  const root = createRoot(element!);
  root.render(
    <React.StrictMode>
<IntlProvider locale="en">
          <StudioView
            runtime={runtime}
            fields={data.fields}
          />
        </IntlProvider>    </React.StrictMode>
  );
};
