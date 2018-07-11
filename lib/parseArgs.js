const path = require('path');

const handleError = require('./handleError');

const parseArgs = (argv) => {
  const args = argv.slice(2);
  if (args.length < 3 || args.length > 3) {
    handleError(`Expected 3 arguments, received ${args.length}`);
  }
  let [ filePath, query, param ] = args;
  filePath = path.resolve(process.cwd(), filePath);
  return { filePath, query, param };
};

module.exports = parseArgs;
