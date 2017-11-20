/* TODO */
const Project = require('../_classes/project.js');

exports.command = 'add <code> <name> <src>';
exports.desc = 'Add new project from src';
exports.builder = {
  code: {},
  name: {},
  src: {
    default: "."
  }
};
exports.handler = function (argv) {
  if(argv.code && argv.name && argv.src) {
    let newProject = new Project(argv.code, argv.name, argv.src);
    console.log(newProject.toString());
  } else {
    console.log('all parameters are required');
  }
};
