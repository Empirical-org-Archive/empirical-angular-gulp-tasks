var args = require('yargs').argv;

// Detect the environment
var allowedEnvs = ['development', 'staging', 'production'];
var env = (args.env || 'development').toLowerCase();

if (allowedEnvs.indexOf(env) === -1) {
  gutil.log('Invalid value', gutil.colors.red(args.env), 'for',  gutil.colors.magenta('--env'), 'option. Allowed values :', '['+envs.map(function(env){return gutil.colors.magenta(env);}).join(', ')+']');
  process.exit();
}

module.exports = env;