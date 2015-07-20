'use strict';

module.exports = function (gulp) {
  var env = require('../utilities').env;
  var runSequence = require('run-sequence').use(gulp);

  gulp.task('default', function () {
  if (env.isDev()) {
    runSequence(
      ['scripts'],
      ['watch'],
      ['serve']
    );
  } else if (env.isProd() || env.isStaging()) {
    runSequence(
      ['scripts']
    );
  } else if (env.isTest()) {
    runSequence(
      ['scripts'],
      ['watch']
    );
  }
});
};
