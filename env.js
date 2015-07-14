'use strict';

var args = require('yargs').argv;

// Detect the environment
var allowedEnvs = ['development', 'staging', 'production', 'test'];
var env = (args.env || 'development').toLowerCase();

var gutil = require('gulp-util');

if (allowedEnvs.indexOf(env) === -1) {
  var envs = allowedEnvs;
  gutil.log('Invalid value', gutil.colors.red(args.env), 'for',  gutil.colors.magenta('--env'), 'option. Allowed values :', '[' + envs.map(function (env) {return gutil.colors.magenta(env); }).join(', ') + ']');
  process.exit();
}

module.exports = env;
