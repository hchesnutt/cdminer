const path = require('path');

const validateArgs = require('./validateArgs.js');
const handleHelp = require('./handleHelp.js');
const exitProcess = require('./errorHandlers.js');

const parseArgs = (argv) => {
  let args = argv.slice(2);
  if (args[0] === '--help') {
    handleHelp();
  }
  if (args.length < 3 || args.length > 3) {
    throw Error(`Expected 3 arguments, received ${args.length}`);
  }
  let [ filePath, query, param ] = args;
  args = { filePath, query, param };
  validateArgs(args);
  return args;
};

module.exports = parseArgs;
