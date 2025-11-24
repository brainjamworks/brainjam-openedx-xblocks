/**
 * ARCHITECTURAL: Entry point for AudioPlayer studio view
 *
 * PATTERN: Some Paragon components (Form, Alert) require IntlProvider
 * DON'T CHANGE: The minimal structure with IntlProvider wrapper
 * IMPLEMENTATION: Update imports when you rename/add components
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { StudioView } from './StudioView';
import './styles/minimal-paragon.scss';

/**
 * Data structure received from Python's studio_view()
 */
interface StudioData {
  fields: {
    display_name: string;
    title: string;
    description: string;
    audio_url: string;
    show_controls: boolean;
    autoplay: boolean;
    show_download: boolean;
  };
}

/**
 * Main render function called by bootstrap loader
 *
 * @param runtime - XBlock runtime object (needed for save operations)
 * @param element - DOM element to render into
 * @param data - Data from Python's studio_view()
 */
export const renderBlock = (runtime: any, element: Element | null, data: StudioData) => {
  // Set runtime.element for API calls
  runtime.element = element;

  ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale="en">
        <StudioView runtime={runtime} fields={data.fields} />
      </IntlProvider>
    </React.StrictMode>,
    element
  );
};
