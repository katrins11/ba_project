const gulp = require("gulp"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      lost = require("lost"),
      precss = require("precss"),
      presetEnv = require("postcss-preset-env"),
      postcssImport = require("postcss-import"),
      watch = require('gulp-watch');

gulp.task("css", function() {
  const processors = [
    precss, 
    presetEnv, 
    lost, 
    autoprefixer({browsers:['last 2 version']}),
    postcssImport
  ]
  return gulp
    .src("./src/css/styles.css")
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