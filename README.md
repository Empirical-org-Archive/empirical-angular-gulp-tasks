Empirical Angular Gulp Tasks
----------------------------

The purpose of this repository is to have a central
location for all of the gulp tasks and development
dependencies in one place for Empirical Angular Apps.

##Tasks

The different gulp tasks are found in `/tasks`

##Installation Configuration

In your application you will need to add `empirical-angular-gulp-tasks`
and `gulp` as dependencies.

```bash
#Save as a development dependency
npm install empirical-angular-gulp-tasks gulp -D
```

or

```bash
#Save as a production dependency
npm install empirical-angular-gulp-tasks gulp --save
```

Also install `gulp` as a global module.

```bash
npm install gulp -g
```

Once you have the module installed, add or edit a
file named `gulpconfig.js`.

In that file, use the following as a guide:

```js
var utilities = require('empirical-angular-gulp-tasks/utilities');

module.exports = {
  src: './src',
  assets: 'assets',
  assets_images: 'images',
  scripts: 'scripts',
  scripts_app: 'app',
  scripts_app_entry: 'app.module.js',
  scripts_app_vendors: 'vendors.js',
  scripts_config: utilities.config.getFile() || (utilities.env.getEnv() + '.config.json'),
  scripts_index: 'index.jade',
  scripts_app_output: 'app.js',
  scripts_app_output_partial: 'app*',
  scripts_vendors_output: 'vendors.js',
  scripts_vendors_output_partial: 'vendors*',
  styles: 'styles',
  styles_main: 'main.scss',
  styles_output: 'app',
  build: './build',
  dist: './dist',
  tmp: './.tmp',
  tmp_config_module: 'quill-grammar.config',
  tmp_config_output: 'config',
  tmp_templates_module: 'quill-grammar.templates',
  tmp_templates_output: 'templates.js',
};
```

Then add or edit `gulpfile.js`

```js
'use strict';

var config = require('./gulpconfig');
var gulp = require('gulp');

require('empirical-angular-gulp-tasks').defineTasks(gulp, config);
```

##Commands

Setting up these gulp tasks will give you:

* `gulp` or `gulp --env=development` which will run your app on PORT 3000
   and watch for file changes.
* `gulp --env=production` will create a production build with in the `./dist` folder
    by default.


##Environments

Our gulp tasks module provides the idea of building
the application in different environments.

We support two environments fully:

* `development`
* `production`

And `staging` partially

###Environment Specific Variables

We use [gulp-ng-constant](https://www.npmjs.com/package/gulp-ng-constant) to inject
environment specific variables into your application. Because we use [browserify](http://browserify.org/)
you can require the specific path the generated contants module from your application
code.

Here is an example from [Quill Grammar](https://github.com/empirical-org/Quill-Grammar)

In `https://github.com/empirical-org/Quill-Grammar/tree/master/src/scripts/development.config.json`
we define a few variables:
```json
{
  "environment": "development",
  "firebaseUrl": "https://quillgrammarstaging.firebaseio.com/",
  "empiricalBaseURL": "https://staging.quill.org/api/v1/",
  "portholeProxy": "https://staging.quill.org/porthole_proxy"
}
```

Then we require the generated module from our custom gulp process:

In `quill-grammar/src/scrips/app/core/core.module.js`:

```js
angular
  .module('quill-grammar.core', [
    'ui.router',
    'LocalStorageModule',
    'autofocus',
    'duScroll',
    'angulartics',
    'angulartics.mixpanel',
    require('../../../../.tmp/config').name,
    require('../../../../.tmp/templates').name,
    require('../../directives/index.js').name,
  ])
  .config(function ($analyticsProvider) {
    $analyticsProvider.virtualPageviews(false);
  });
```
