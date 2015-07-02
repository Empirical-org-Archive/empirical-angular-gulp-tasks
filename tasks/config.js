'use strict';

module.exports = function (gulp, config) {
  var rename = require('gulp-rename');
  var ngConstant = require('gulp-ng-constant');

  gulp.task('config', function () {
  return gulp.src(config.src)
    .pipe(rename(config.rename))
    .pipe(ngConstant(config.ngConstant))
    .pipe(gulp.dest(config.dest));
});
};
