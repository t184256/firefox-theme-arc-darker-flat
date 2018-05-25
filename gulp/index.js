const gulp = require('gulp');

module.exports = (tasks) => {
  tasks.forEach((name) => {
    const module = require('./tasks/' + name);

    for (let taskname in module.task) {
      const dependencies = module.dependencies[taskname] || [];
      gulp.task(taskname, dependencies, module.task[taskname]);
    }
  });

  return gulp;
};
