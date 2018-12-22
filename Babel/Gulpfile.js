const gulp = require("gulp");
const babel = require("gulp-babel");
const jshint = require("gulp-jshint");

gulp.task("moveHTML", function() {
	return gulp.src("src/*.html")
		.pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
	return gulp.src("src/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"))
		.pipe(babel())
		.pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
	gulp.watch("src/*.js", ["js"]);
});

gulp.task("lint", function() {
	return gulp.src("src/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});

gulp.task("default", ["moveHTML", "js", "watch"]);