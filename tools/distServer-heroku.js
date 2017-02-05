// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import {chalkProcessing} from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  open: false,
  port: 8080,
  ui: false,
  server: {
    baseDir: 'build/tools/dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});
