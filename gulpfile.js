const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      lost = require('lost'),
      precss = require('precss'),
      presetEnv = require('postcss-preset-env'),
      postcssImport = require('postcss-import'),
      mixins = require('postcss-mixins'),
      simpleVars = require('postcss-simple-vars'),
      postcssNested = require('postcss-nested'),
      browserSync = require('browser-sync').create();

gulp.task('php', function() {
  return gulp
    .src('./src/*.php')
    .pipe(gulp.dest('./build'))
});

gulp.task('phpHelp', function() {
  return gulp
    .src(['./src/php/*.php', './src/php/section/*.php'])
    .pipe(gulp.dest('./build/php'))
});

gulp.task('css', function() {
  const processors = [
    precss,
    simpleVars({ silent: true }),
    postcssNested,
    mixins,
    presetEnv({stage: 0}), 
    lost, 
    autoprefixer({browsers:['last 2 version']}),
    postcssImport
  ]
  return gulp
    .src('./src/css/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function() {
  return gulp
    .src('./src/js/*.js')
    .pipe(gulp.dest('./build/js'));
});
gulp.task("assets", function() {
  return gulp
    .src('./src/assets/*')
    .pipe(gulp.dest('./build/assets'));
});

function buildAll(){
  gulp.start('php');
  gulp.start('phpHelp');
  gulp.start('css');
  gulp.start('js');
  gulp.start('assets');
}

gulp.task('buildAll', function () {
  buildAll();
});

gulp.task('watchAll', function () {
  gulp.watch('./src/css/*', ['css']);
  gulp.watch('./src/*', ['php']);
  gulp.watch('./src/js/*', ['js']);
  gulp.watch('./src/assets/*', ['assets']);
  gulp.watch('./src/php/*', ['phpHelp']);
  gulp.watch('./src/php/section/*', ['phpHelp']);

});