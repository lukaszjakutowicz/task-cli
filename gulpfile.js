const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const linter = require('gulp-eslint');
const watch = require('gulp-watch');

const path = require('path');
const fs = require('fs');

const babelrc = JSON.parse(fs.readFileSync(path.join('./', '.babelrc'), 'utf8'));

const build = () => {
  gulp.src('./src/**/*.js')
    .pipe(plumber())
    .pipe(babel(babelrc))
    .pipe(gulp.dest('lib'));
};

/* TASK: LINT */
gulp.task('lint', () => {
    gulp.src('./src/**/*.js')
      .pipe(linter({
        configFile: './eslint.json'
      }))
      .pipe(linter.format())
      .pipe(linter.failOnError());
});

/* TASK: BUILD */
gulp.task('build', ['lint'], () => {
  build();
});

/* TASK: WATCH */
gulp.task('watch', ['lint'], () => {
  watch('./src/**/*.js', ['lint', 'build']);
});
