const gulp = require("gulp")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const responsiveType = require("postcss-responsive-type")
const lost = require("lost");
const precss = require("precss");
const cssnext = require("postcss-responsive-type");
const postcssImport = require("postcss-import");

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
    .pipe(gulp.dest("./build"))
});

gulp.task("watch", function() {
  gulp.watch("./src/CSS/*", ["css"])
})