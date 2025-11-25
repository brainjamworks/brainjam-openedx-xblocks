/**
 * Entry point for Sort Into Bins studio view
 *
 * PATTERN: Paragon components require IntlProvider
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudioView } from './StudioView';
import type { StudioViewFields } from '../common/types';
import './styles/minimal-paragon.scss';

interface StudioData {
  fields: StudioViewFields;
}

/**
 * Main render function called by bootstrap loader
 *
 * @param runtime - XBlock runtime object
 * @param element - DOM element to render into
 * @param data - Data from Python's studio_view()
 */
export const renderBlock = (runtime: any, element: Element | null, data: StudioData) => {
  if (!element) {
    console.error('No element provided to renderBlock');
    return;
  }

  // Set runtime.element for API calls
  runtime.element = element;

  const root = createRoot(element);
  root.render(
    <React.StrictMode>
      <IntlProvider locale="en">
        <StudioView
          runtime={runtime}
          fields={data.fields}
        />
      </IntlProvider>
    </React.StrictMode>
  );
};
