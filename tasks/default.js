'use strict';

module.exports = function (gulp) {
  var env = require('../utilities').env;
  var runSequence = require('run-sequence').use(gulp);

  gulp.task('default', function () {
  if (env.isDev()) {
    runSequence(
      ['clean'],
      ['assets', 'config', 'lint', 'styles', 'templates'],
      ['browserify:app', 'browserify:vendors'],
      ['index'],
      ['watch'],
      ['serve']
    );
  } else if (env.isProd() || env.isStaging()) {
    runSequence(
      ['clean'],
      ['assets', 'config', 'lint', 'styles', 'templates'],
      ['browserify:app', 'browserify:vendors'],
      ['index']
    );
  }
});
};
