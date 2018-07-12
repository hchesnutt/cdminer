const path = require('path');

const { exitProcess } = require('../lib');

const parseArgs = (argv, errorHandler = exitProcess) => {
  const args = argv.slice(2);
  if (args.length < 3 || args.length > 3) {
    errorHandler(`Expected 3 arguments, received ${args.length}`);
  }
  let [ filePath, query, param ] = args;
  filePath = path.resolve(process.cwd(), filePath);
  return { filePath, query, param };
};

module.exports = parseArgs;
