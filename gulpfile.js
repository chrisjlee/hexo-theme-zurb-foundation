var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    bower       = require('gulp-bower'),
    notify      = require('gulp-notify'),
    reload      = browserSync.reload,
    bs          = require("browser-sync").create(),
    Hexo = require('hexo'),
    hexo = new Hexo(process.cwd(), {});


var src = {
    scss: 'scss',
    css:  'source/css',
    ejs: 'layout'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    // init starts the server
    bs.init({
        baseDir: "../../public"
    });

    // hexo.call('generate', {}).then(function(){
    //   console.log('Generating Files');
    // });

    // Now call methods on bs instead of the
    // main browserSync module export
    bs.reload("*.html");
    bs.reload("*.css");
});

// Compile sass into CSS
gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(css))
        .pipe(reload({stream: true}));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('source/lib'))
});

gulp.task('default', ['serve']);
