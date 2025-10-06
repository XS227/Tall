import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { constants } from 'karma';

export default function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {},
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: join(fileURLToPath(new URL('.', import.meta.url)), './coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }]
    },
    browsers: ['ChromeHeadless'],
    restartOnFileChange: true,
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: constants.INFO,
    autoWatch: true,
    singleRun: false
  });
}
