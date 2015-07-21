'use strict';

module.exports = function (gulp) {
  var runSequence = require('run-sequence').use(gulp);

  gulp.task('scripts', function (done) {
    runSequence(
      ['clean'],
      ['assets', 'config', 'lint', 'styles', 'templates'],
      ['browserify:vendors'],
      ['browserify:app'],
      ['index'],
      done
    );
  });
};
