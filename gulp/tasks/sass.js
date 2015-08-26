// [CORE]
var gulp = require('gulp');

// [PLUGINS]
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');

// [CONFIG]
var config = require('../config.js').sass;

function sassTask(isDev) {
  gulp.src(config.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest))
    .pipe(gulpif(isDev, browserSync.stream()));
}

gulp.task('sass:develop', sassTask.bind(null, true));
gulp.task('sass:build', sassTask.bind(null, false));


