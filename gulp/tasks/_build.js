var gulp = require('gulp');

var config = require('../config.js');

gulp.task('build', function() {
  gulp.start('scripts:build');
  gulp.start('sass:build');
});
