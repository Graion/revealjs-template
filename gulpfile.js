var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  sass = require('gulp-sass'),
  del = require('del'),
  ghPages = require('gh-pages'),
  path = require('path');

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

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('build', ['sass'], function () {
  gulp.src('index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('assets/**/*')
    .pipe(gulp.dest('dist/assets'));

  gulp.src('js/**/*.js')
    .pipe(gulp.dest('dist/js'));

  gulp.src('css/**/*.css')
    .pipe(gulp.dest('dist/css'));

  gulp.src('components/reveal.js/lib/**/*.{css,js,eot,ttf,woff}')
    .pipe(gulp.dest('dist/lib'));

  gulp.src('components/reveal.js/**/*.{css,js,eot,ttf,woff}')
    .pipe(gulp.dest('dist/components/reveal.js'));
});

gulp.task('gh-deploy', function () {
  ghPages.publish(path.join(__dirname, 'dist'), {
    message: 'Updated on ' + new Date().toString(),
    logger: function (message) {
      console.log('\t[gh-pages] ' + message);
    }
  });
});

