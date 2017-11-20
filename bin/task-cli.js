#!/usr/bin/env node

/**
 * @description
 * task-cli
 * version: 0.0.1
 * Task CLI - tool for all of Your scripts in one place
 */

'use strict';

const commander = require('yargs');

commander
  .commandDir('../src/commands')
  .demandCommand()
  .help()
  .argv;
