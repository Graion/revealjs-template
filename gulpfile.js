var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/build'));
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['*.html', 'css/build/**/*.css', 'js/**/*.js'], {cwd: '.'}, reload);
  gulp.watch(['css/sass/**/*.scss'], {cwd: '.'}, ['sass']);
});
