'use strict';

function defineTasks(gulp, config) {
  var allConfig = require('./config')(config);

  // var stuff = requireDir(path.join('./tasks'), {recurse: true});
  require('./tasks/assets')(gulp, allConfig.assets);
  require('./tasks/browserify-app')(gulp, allConfig.browserify.app);
  require('./tasks/browserify-vendors')(gulp, allConfig.browserify.vendors);
  require('./tasks/clean')(gulp, allConfig.clean);
  require('./tasks/config')(gulp, allConfig.config);
  require('./tasks/index')(gulp, allConfig.index);
  require('./tasks/lint')(gulp, allConfig.lint);
  require('./tasks/serve')(gulp, allConfig.serve);
  require('./tasks/styles')(gulp, allConfig.styles);
  require('./tasks/templates')(gulp, allConfig.templates);
  require('./tasks/watch')(gulp, allConfig.watch);
  require('./tasks/default')(gulp);

}

module.exports = {
  defineTasks: defineTasks
};

