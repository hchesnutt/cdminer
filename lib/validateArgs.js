const fs = require('fs');

const { exitProcess, printHelp } = require('../lib');
const queries = require('../queries/queries.js');

const validateArgs = ({ filePath, query, param }, errorHandler = exitProcess) => {
  const pathExists = fs.existsSync(filePath);
  const isValid = !!queries.handlers[query];

  if (filePath === '--help') {
    printHelp();
  }
  if (!pathExists) {
    errorHandler(`${filePath} could not be resolved`);
  }
  if (!isValid) {
    errorHandler(`${query} is not a known query`);
  }
};

module.exports = validateArgs;
