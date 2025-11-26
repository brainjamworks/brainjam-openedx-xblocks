/**
 * ARCHITECTURAL: Bootstrap loader for TimelinePresentation studio view
 *
 * DO NOT CHANGE THIS FILE (except during find-replace for function name)
 *
 * This file should NEVER change after initial setup because:
 * 1. It's cached by browsers
 * 2. It dynamically loads versioned bundles (cache busting)
 * 3. It includes critical architectural patterns:
 *    - jQuery object unwrapping (XBlock passes jQuery, React needs raw DOM)
 *    - Error handling and user feedback
 *    - Dynamic import for code splitting
 *
 * ONLY CHANGE: The function name during find-replace
 * TimelinePresentationStudioView → YourXBlockStudioView
 */
function TimelinePresentationStudioView(runtime, element, data) {
  (async () => {
    try {
      // ARCHITECTURAL: Dynamic import of Vite bundle
      // The versioned URL (data.url) enables cache busting
      const { renderBlock } = await import(data.url);

      // ARCHITECTURAL: jQuery unwrapping pattern
      // XBlock framework passes jQuery-wrapped elements: $(element)
      // React requires raw DOM elements
      // This pattern handles both cases safely
      const domElement = element.get ? element.get(0) : element;

      // ARCHITECTURAL: Call the render function exported by Vite bundle
      // Pass runtime (for API calls), DOM element, and data from Python
      renderBlock(runtime, domElement, data);
    } catch (error) {
      // ARCHITECTURAL: Error handling with user feedback
      // If bundle fails to load or React crashes, show friendly error
      console.error('Failed to load TimelinePresentation studio view:', error);

      const domElement = element.get ? element.get(0) : element;
      if (domElement) {
        domElement.innerHTML = `
          <div class="alert alert-danger" role="alert">
            <strong>Error:</strong> Failed to load editor. Please refresh the page.
            If the problem persists, contact support.
          </div>
        `;
      }
    }
  })();
}
