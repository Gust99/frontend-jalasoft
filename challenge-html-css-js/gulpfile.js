const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

function cleanify(cb) {
    gulp.src('./!(gulpfile|Gruntfile).js')
        .pipe(clean({force: true}))
        .pipe(gulp.dest('./js'));

    cb();
}

function concatify(cb) {
    gulp.src('./js/*.js',{"allowEmpty": true})
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist-gulp/all-js'));
    
    cb();
}

function uglifyScripts(cb) {
    gulp.src('./dist-gulp/all-js/all.js',{"allowEmpty": true})
        .pipe(uglify())
        .pipe(gulp.dest('./dist-gulp/final'));
    
    cb();
}

function lessglify(cb) {
    gulp.src('./style.less')
        .pipe(less())
        .pipe(gulp.dest('./dist-gulp/css'));
    
    cb();
}

function defaultTask(cb) {
    // cleanify(cb);
    // concatify(cb);
    // uglifyScripts(cb);
    // lessglify(cb);
    // cb();
}

exports.default = gulp.series(cleanify,concatify,uglifyScripts,lessglify);