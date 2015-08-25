var gulp = require('gulp');
var gutil = require('gulp-util');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');

var config = require('../config.js').scripts;

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
    var updateStart = Date.now();

    bundler.bundle()
      .on('error', function(err) {
        gutil.log(err.toString());
      })
      .pipe(source(config.dest.src))
      .pipe(gulp.dest(config.dest.path));

    gutil.log('Code updated in', gutil.colors.cyan((Date.now() - updateStart) + 'ms'));

  };

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('scripts:watch', function() {
  return scripts(true);
});
