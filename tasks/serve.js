'use strict';

module.exports = function(gulp, config) {

var browserSync = require('browser-sync');

gulp.task('serve', function () {
  browserSync(config.browserSync);
});

};