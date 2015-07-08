'use strict';

module.exports = function (gulp) {
  var karma = require('karma');

  function runTests (singleRun, done) {
    karma.server.start({
      configFile: process.cwd() + '/karma.conf.js', // TODO: Maybe a better way to handle this?
      singleRun: singleRun,
      autoWatch: !singleRun
    }, done);
  }

  gulp.task('test', function(done) {
    runTests(true, done);
  });

  gulp.task('test:auto', function(done) {
    runTests(false, done);
  });
};

