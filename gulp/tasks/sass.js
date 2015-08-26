// [CORE]
var gulp = require('gulp');

// [PLUGINS]
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// [CONFIG]
var config = require('../config.js').sass;

function sass(isDev) {
  gulp.src(config.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest));
}

gulp.task('sass:develop', sass.bind(null, false));
