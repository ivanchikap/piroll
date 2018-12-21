'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var spritesmith = require('gulp.spritesmith');
sass.compiler = require('node-sass');


gulp.task('styles', function () {
    return gulp.src('src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function() {
    gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('build/css/'));
})

gulp.task('views', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({stream: true}));
})

gulp.task('img', function() {
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('build/img/'));
})

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/sprite/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        padding: 3
    }));
    return spriteData.pipe(gulp.dest('build/sprite'));
})

gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.reload({stream: true}));
})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './build'
        }
    });
});

gulp.task('build', ['styles', 'css', 'views', 'img', 'sprite', 'scripts']);

gulp.task('watch', ['build'], function() {
    gulp.watch('src/css/**/*.scss', ['styles']);
    gulp.watch('src/*.html', ['views']);
    gulp.watch('src/img/*.*', ['img']);
    gulp.watch('src/js/*.js', ['scripts']);

    gulp.start('browser-sync');
});