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
    scss: './scss/',
    css:  './source/css',
    ejs: 'layout'
},
watchFiles = [
    './scss/*.scss',
    '*/*.ejs'
];

// Static Server + watching scss/html files
gulp.task('serve', ['sass:watch'], function() {

    // init starts the server
    bs.init(watchFiles, {
        server: {
            baseDir: "../../public"
        },
        logLevel: "debug"
    });

    hexo.init();

    hexo.call('generate', {}, function(){
    }).then(function(){
        reload({stream: true});
    });

});

// Compile sass into CSS
gulp.task('sass', function() {
    // gulp.src(src.scss + "/*/*.scss")
    gulp.src(src.scss + "{,*}/*.scss")
        .pipe(sass({}))
        // .pipe(gulp.dest(src.css))
        .pipe(gulp.dest('../../source/css/'))
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
