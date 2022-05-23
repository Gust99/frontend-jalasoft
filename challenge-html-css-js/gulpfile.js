const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglifycss = require('gulp-uglifycss');
const inject = require('gulp-inject');
//.pipe(gulp.src('./!(gulpfile|Gruntfile|guard).js',{"allowEmpty": true}))
function build(cb) {
    gulp.src('./dist-gulp/*',{allowEmpty: true})
        .pipe(clean({force: true}));

    gulp.src(['./PokemonCardComponent.js','./utils.js','./script.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist-gulp/js'));

    gulp.src('./*.less')
        .pipe(concat('all.less'))
        .pipe(less())
        .pipe(uglifycss())
        .pipe(gulp.dest('./dist-gulp/css'));
    
    const sources = gulp.src(['./dist-gulp/js/all.js', './dist-gulp/css/all.css'], {read: false,allowEmpty: true});

    gulp.src('./index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('.'));

    cb();
}

function buildcss(cb) {
    const sources = gulp.src(['./dist-gulp/css/all.css'], {read: false});

    gulp.src('./dist-gulp/css',{"allowEmpty": true})
        .pipe(clean({force: true}))
        .pipe(gulp.src('./*.less',{"allowEmpty": true}))
        .pipe(concat('all.less'))
        .pipe(less())
        .pipe(uglifycss())
        .pipe(gulp.dest('./dist-gulp/css'))
    
    gulp.src('./index.html')
        .pipe(inject(sources, {relative: false}))
        .pipe(gulp.dest('./dist-gulp'))
    cb();
}

// function injectDependencies(cb) {
//     const target = gulp.src('./index.html');
//     const sources = gulp.src(['./dist-gulp/js/all.js', './dist-gulp/css/all.css'], {read: false});
   
//     target.pipe(inject(sources, {relative: true}))
//         .pipe(gulp.dest('./dist-gulp'));

//     cb();
// }

exports.default = gulp.series(build);