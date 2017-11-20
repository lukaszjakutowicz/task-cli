/**
 * @name echo
 * @description
 * ECHO command
 *
 * @example
 * task echo
 * task echo param1
 * task echo param1 param2
 */
const chalk = require('chalk');

exports.command = 'echo <param> [params..]';
exports.desc    = 'Simple ECHO command test';
exports.builder = {};
exports.handler = function (argv) {
  let params = [].concat(argv.param).concat(argv.params).join(', ');

  console.log( chalk.green('[OK]') + '\tECHO' + '\t%s', params);
};
