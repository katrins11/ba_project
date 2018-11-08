const gulp = require("gulp")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const responsiveType = require("postcss-responsive-type")

gulp.task("css", function() {
  const processors = [autoprefixer, responsiveType]
  return gulp
    .src("./src/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("./build"))
});

gulp.task("watch", function() {
  gulp.watch("./src/*", ["css"])
})