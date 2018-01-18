//Part 1 ES6
//
//npm install --save-dev gulp-babel

var gulp = require("gulp");
var babel = require("gulp-babel");


var paths = {
    es:['ES6/var.js']
};

gulp.task("default", function () {
    return gulp.src("ES6/*.js")
        .pipe(babel())
        .pipe(gulp.dest("CompileES6"));
});

gulp.watch(paths.es, ['default']);