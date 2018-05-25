const gulp = require('gulp');
const del = require('del');
const gutil = require('gulp-util');

const config = require('../config.json');

module.exports.task = {};
module.exports.dependencies = {};

// export task css
module.exports.task.clean = () => {
  return del(config.clean.local).then(paths => {
    gutil.log('Deleted files and folders:');
    paths.forEach(path => gutil.log(path));
  });
};
