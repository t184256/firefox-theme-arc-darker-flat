const runSequence = require('run-sequence');
const gulp = require('./gulp')([
  'css',
  'clean'
]);

gulp.task('default', (callback) => {
  runSequence(
    'clean',
    'css',
    callback
  );
});

gulp.task('watch', ['css:watch']);
