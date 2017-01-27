

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    gulp.src('./css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade:false}))
        .pipe(gulp.dest('./css/'))
});

gulp.task('sass:watch', function(){
    gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);