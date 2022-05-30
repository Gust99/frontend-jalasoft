const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglifycss = require('gulp-uglifycss');
const inject = require('gulp-inject');
const merge = require('merge-stream');

//.pipe(gulp.src('./!(gulpfile|Gruntfile|guard).js',{"allowEmpty": true}))
function build(cb) {
    const t1 = gulp.src('./dist-gulp',{allowEmpty: true})
        .pipe(clean({force: true}));

    const t2 = gulp.src(['./PokemonCardComponent.js','./utils.js','./script.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist-gulp/js'));

    const t3 = gulp.src('./*.less')
        .pipe(concat('all.less'))
        .pipe(less())
        .pipe(uglifycss())
        .pipe(gulp.dest('./dist-gulp/css'));
    
    const sources = gulp.src(['./dist-gulp/js/all.js', './dist-gulp/css/all.css'], {read: false,allowEmpty: true});

    const t4 = gulp.src('./index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./dist-gulp/'));

    return merge(gulp.series(t1,t2,t3,sources,t4));
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

exports.default = build;