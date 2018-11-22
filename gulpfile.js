const gulp = require("gulp"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      lost = require("lost"),
      precss = require("precss"),
      presetEnv = require("postcss-preset-env"),
      postcssImport = require("postcss-import"),
      watch = require('gulp-watch'),
      mixins = require('postcss-mixins');
      
var browserSync = require('browser-sync').create();

gulp.task("css", function() {
  const processors = [
    mixins,
    precss, 
    presetEnv, 
    lost, 
    autoprefixer({browsers:['last 2 version']}),
    postcssImport,
    
  ]
  return gulp
    .src("./src/css/styles.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./build/css"))
});

gulp.task("php", function() {
  return gulp
    .src("./src/*.php")
    .pipe(gulp.dest("./build"))
});
gulp.task("js", function() {
  return gulp
    .src("./src/js/*.js")
    .pipe(gulp.dest("./build/js"));
});
gulp.task("assets", function() {
  return gulp
    .src("./src/assets/*")
    .pipe(gulp.dest("./build/assets"));
});

gulp.task('watchAll', function () {
  gulp.watch("./src/css/*", ["css"]);
  gulp.watch("./src/*", ["php"]);
  gulp.watch("./src/js/*", ["js"]);
  gulp.watch("./src/assets/*", ["assets"]);
});