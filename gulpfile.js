var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');

gulp.task('default', ['controlpanel']);

gulp.task('controlpanel', function () {
    return gulp.src('src/sa-controlpanel.es6')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src'));
});