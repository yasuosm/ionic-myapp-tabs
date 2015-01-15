var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var rjs = require('gulp-requirejs');
var merge = require('merge-stream');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass', 'requirejs'], function() {
  var css = gulp.src('./www/css/*')
    .pipe(gulp.dest('./platforms/android/assets/www/css/'))
    .pipe(gulp.dest('./platforms/ios/www/css/'));
  
  var img = gulp.src('./www/img/*')
    .pipe(gulp.dest('./platforms/android/assets/www/img/'))
    .pipe(gulp.dest('./platforms/ios/www/img/'));

  var js = gulp.src('./www/js/*')
    .pipe(gulp.dest('./platforms/android/assets/www/js/'))
    .pipe(gulp.dest('./platforms/ios/www/js/'));

  return merge(css, img, js);
});

gulp.task('sass', function(done) {
  gulp.src('./scss/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('requirejs', function() {
  rjs({
    name: 'rcfg',
    paths: {
      rcfg: 'config/requirejs.config'
    },
    baseUrl: './www/',
    mainConfigFile: './www/config/requirejs.config.js',
    out: 'app.js'
  })
    .pipe(gulp.dest('./www/js/')); // pipe it to the output DIR
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
