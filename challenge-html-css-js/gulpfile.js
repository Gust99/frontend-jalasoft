const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

function cleanify(cb) {
    gulp.src('./dist-gulp',{"allowEmpty": true})
        .pipe(clean({force: true}));

    cb();
}

function build(cb) {
    gulp.src('./!(gulpfile|Gruntfile).js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist-gulp/js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist-gulp/min-js'));
    
    cb();
}

function lessglify(cb) {
    gulp.src('./style.less')
        .pipe(less())
        .pipe(gulp.dest('./dist-gulp/css'));
    
    cb();
}

exports.default = gulp.series(cleanify,gulp.parallel(build,lessglify));