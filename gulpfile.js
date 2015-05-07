var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    bower       = require('gulp-bower'),
    notify      = require('gulp-notify'),
    reload      = browserSync.reload;

var src = {
    scss: 'scss/*.scss',
    css:  'source/*.css',
    ejs: 'layout/*.ejs'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.ejs).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('source/lib'))
});

gulp.task('default', ['serve']);
