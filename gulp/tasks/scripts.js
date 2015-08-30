// [CORE]
var gulp = require('gulp');
var gutil = require('gulp-util');

// [PLUGINS]
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var watchify = require('watchify');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var gulpif = require('gulp-if');

// [CONFIG]
var config = require('../config.js').scripts;

// isDev is being used to determine if the task is running
// in isDev mode, or if's running only to compile the assets
function scriptsTask(isDev) {
  var bundler = browserify(config.src, {
    basedir: __dirname,
    debug: isDev,
    cache: {},
    packageCache: {},
    fullPaths: isDev
  });

  if(isDev) bundler = watchify(bundler);

  bundler
    .transform(babelify)
    .on('update', reBundle.bind(null, bundler, isDev))
    .on('log', gutil.log);

  reBundle(bundler, isDev);
}

function reBundle(bundler, isDev) {
  bundler.bundle()
    .on('error', function(err) {
      gutil.log(err.toString());
    })
    .pipe(source(config.dest.src))
    // test gutil.noop() to remove gulpif
    .pipe(buffer())
    .pipe(gulpif(!isDev, uglify()))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(gulp.dest(config.dest.path))
    .pipe(gulpif(isDev, browserSync.reload({stream: true})));
}

gulp.task('scripts:develop', scriptsTask.bind(null, true));
gulp.task('scripts:build', scriptsTask.bind(null, false));
