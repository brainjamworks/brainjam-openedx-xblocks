/**
 * Entry point for Image Hotspot studio view
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { StudioView } from './StudioView';
import type { StudioViewFields, XBlockRuntime } from '../common/types';
import './styles/minimal-paragon.scss';

/**
 * Studio data structure
 */
interface StudioData {
  fields: StudioViewFields;
}

/**
 * Main render function called by bootstrap loader
 */
export const renderBlock = (runtime: XBlockRuntime, element: Element | null, data: StudioData) => {
  // Set runtime.element for API calls
  runtime.element = element;

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
