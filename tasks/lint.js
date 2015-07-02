'use strict';

module.exports = function (gulp, config) {
  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');

  gulp.task('lint', function () {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
};
