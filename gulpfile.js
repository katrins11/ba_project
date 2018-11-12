const gulp = require("gulp"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      responsiveType = require("postcss-responsive-type"),
      lost = require("lost"),
      precss = require("precss"),
      cssnext = require("postcss-responsive-type"),
      postcssImport = require("postcss-import"),
      watch = require('gulp-watch');

gulp.task("css", function() {
  const processors = [
    precss, 
    cssnext, 
    lost, 
    autoprefixer({browsers:['last 2 version']}), 
    responsiveType,
    postcssImport
  ]
  return gulp
    .src("./src/CSS/styles.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./build/css"))
});

gulp.task("php", function() {
  return gulp
    .src("./src/PHP/*.php")
    .pipe(gulp.dest("./build"));
});
gulp.task("js", function() {
  return gulp
    .src("./src/JS/script.js")
    .pipe(gulp.dest("./build/js"));
});

gulp.task('watchAll', function () {
  gulp.watch("./src/CSS/*", ["css"]);
  gulp.watch("./src/PHP/*", ["php"]);
  gulp.watch("./src/JS/*", ["js"]);
});