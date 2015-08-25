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
var gulpif = require('gulp-if');

// [CONFIG]
var config = require('../config.js').scripts;

// watch is being used to determine if the task is running
// in watch mode, or if's running only to compile the assets
function scripts(watch) {
  var bundler, rebundle;

  bundler = browserify(config.src, {
    basedir: __dirname,
    debug: !(gutil.env.type === 'production'),
    cache: {},
    packageCache: {},
    fullPaths: watch
  });

  if(watch) {
    bundler = watchify(bundler);
  }

  bundler.transform(babelify);


  rebundle = function() {
    bundler.bundle()
      .on('error', function(err) {
        gutil.log(err.toString());
      })
      .pipe(source(config.dest.src))
      .pipe(gulpif(!watch, buffer()))
      .pipe(gulpif(!watch, uglify()))
      .pipe(gulp.dest(config.dest.path))
      .pipe(browserSync.reload({stream: true}));
  };

  bundler
    .on('update', rebundle)
    .on('log', gutil.log);

  rebundle();
}

gulp.task('scripts:develop', scripts.bind(null, true));
gulp.task('scripts:build', scripts.bind(null, false));
