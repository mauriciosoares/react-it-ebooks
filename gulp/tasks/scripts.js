var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');

var config = require('../config.js').scripts;
var env = require('../config.js').env;

function scripts(watch) {
  var bundler, rebundle;

  bundler = browserify(config.src, {
    basedir: __dirname,
    debug: !(env === 'production'),
    cache: {},
    packageCache: {},
    fullPaths: watch
  });

  if(watch) {
    bundler = watchify(bundler);
  }

  bundler.transform(babelify);


  rebundle = function() {
    console.log('rebundle');
    var stream = bundler.bundle();
    stream.on('error', function(err) {
      console.log('error');
    });
    stream = stream.pipe(source(config.dest.src));
    return stream.pipe(gulp.dest(config.dest.path));
  };

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('scripts:watch', function() {
  return scripts(true);
});
