var gulp = require('gulp');

var browserSync = require('browser-sync');

var config = require('../config.js').shared;

gulp.task('develop', function() {
  browserSync.init({
    server: config.PROJECT_ROOT,
    tunnel: true,
    open: false
  });

  gulp.start('scripts:develop');
});
