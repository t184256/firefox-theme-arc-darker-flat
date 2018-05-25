const gulp = require('gulp');
const sass = require('gulp-sass');
const chalk = require('chalk');

// get config
const config = require('../config.json');

module.exports.task = {};
module.exports.dependencies = {};

// export task css
module.exports.task.css = () => {
  return gulp.src(config.css.src)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', function (err){
      let errMsg = err.formatted.split("\n");
      console.log(chalk.red(errMsg[0] + errMsg[1]));
    }))
    .pipe(gulp.dest(config.css.dest));
};

// export task csswatch
module.exports.task['css:watch'] = () => {
  gulp.watch(config.css.watch, ['css'])
    .on('change', event => console.log(
      '[csswatch] File ' + event.path + ' was ' + event.type + '. Refreshing build ...'
    ));
};
