/**
 * ARCHITECTURAL: Vite configuration for React XBlock
 *
 * DON'T CHANGE: Core structure and critical patterns
 * IMPLEMENTATION: Only change XBlock name during find-replace
 *
 * This configuration solves critical architectural issues:
 * 1. process.env.NODE_ENV definition (prevents "process is not defined" error)
 * 2. Library mode for XBlock integration
 * 3. ES module format for dynamic imports
 * 4. Separate student-ui and studio-ui bundles
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(() => {
  // ARCHITECTURAL: Determine which bundle to build
  // DON'T CHANGE: This pattern enables separate student/studio builds
  let lib = 'student-ui';
  let libName = 'ImageCommentaryBlock';

  if (process.env.COMPONENT === 'studio-ui') {
    lib = 'studio-ui';
    libName = 'ImageCommentaryEditor';
  }

  return {
    base: '',
    plugins: [react()],

    build: {
      // ARCHITECTURAL: Output to Python package's public directory
      // IMPLEMENTATION: Update path if you renamed image_commentary
      outDir: '../image_commentary/public',

      // ARCHITECTURAL: Build as library to preserve exports
      // DON'T CHANGE: This pattern is required for dynamic imports
      lib: {
        entry: resolve(__dirname, `src/${lib}/index.tsx`),
        name: libName,
        fileName: lib,
        formats: ['es'],  // ES modules for dynamic import
      },

      // ARCHITECTURAL: Source maps for debugging
      // IMPLEMENTATION: Consider disabling in production (sourcemap: false)
      sourcemap: true,

      rollupOptions: {
        output: {
          chunkFileNames: '[name].js',
          assetFileNames: `${lib}[extname]`,
        },
      },
    },

    // ARCHITECTURAL: CRITICAL - Define process.env for browser compatibility
    // DON'T CHANGE: Without this, bundles will reference undefined 'process'
    // This also enables tree-shaking of development code (smaller bundles)
    define: {'process.env.NODE_ENV': '"production"'},

    // ARCHITECTURAL: Resolve alias for SCSS imports
    // DON'T CHANGE: Enables ~@openedx/paragon imports in SCSS
    // This regex strips the ~ prefix, allowing Vite to resolve from node_modules
    resolve: {
      alias: [
        {
          // this is required for the SCSS modules
          find: /^~(.*)$/,
          replacement: '$1',
        },
      ],
    },
  };
});
