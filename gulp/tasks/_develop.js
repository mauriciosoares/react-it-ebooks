var gulp = require('gulp');

var browserSync = require('browser-sync');

var config = require('../config.js');

gulp.task('develop', function() {
  browserSync.init({
    server: config.PROJECT_ROOT,
    // tunnel: true,
    open: false
  });

  gulp.start('scripts:develop');
  gulp.watch(config.sass.watch, ['sass:develop']);
});
