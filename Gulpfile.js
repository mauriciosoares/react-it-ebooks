var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');
var production = process.env.NODE_ENV === 'production';

function scripts(watch) {
  var bundler, rebundle;

  bundler = browserify('./app/index.js', {
    basedir: __dirname,
    debug: !production,
    cache: {},
    packageCache: {},
    fullPaths: watch
  });

  if(watch) {
    console.log('watchify');
    bundler = watchify(bundler);
  }

  bundler.transform(babelify);


  rebundle = function() {
    console.log('rebundle');
    var stream = bundler.bundle();
    stream.on('error', function() {
      console.log('ERROR');
    });
    stream = stream.pipe(source('bundle.js'));
    return stream.pipe(gulp.dest('./build/js'));
  };

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('scripts', function() {
  return scripts(false);
});

gulp.task('watch', function() {
  return scripts(true);
});
