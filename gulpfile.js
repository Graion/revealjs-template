var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['*.html', 'css/build/**/*.css', 'js/**/*.js'], {cwd: '.'}, reload);
});
