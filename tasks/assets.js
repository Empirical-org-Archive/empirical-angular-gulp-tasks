'use strict';

module.exports = function (gulp, config) {
  var filter = require('gulp-filter');
  var imagemin = require('gulp-imagemin');

  gulp.task('assets', function () {
  var imagesFilter = filter(config.imagesFilter);

  return gulp.src(config.src)
    .pipe(imagesFilter)
    .pipe(imagemin(config.imagemin))
    .pipe(imagesFilter.restore())
    .pipe(gulp.dest(config.dest));
});
};
