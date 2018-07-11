const handleError = require('./handleError');

const parseArgs = (argv) => {
  const args = argv.slice(2);
  if (args.length < 3 || args.length > 3) {
    handleError(`Expected 3 arguments, received ${args.length}`);
  }
  const [path, query, param] = args;
  return { path, query, param };
};

module.exports = {
  parseArgs,
};
