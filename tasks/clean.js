'use strict';

module.exports = function (gulp, config) {
  var del = require('del');

  gulp.task('clean', function (cb) {
  del(config.src, cb);
});
};
