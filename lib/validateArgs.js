const fs = require('fs');

const { exitProcess } = require('../lib');
const queries = require('../queries/queries.js');

const validateArgs = ({ filePath, query, param }, errorHandler = handleError) => {
  const pathExists = fs.existsSync(filePath);
  const isValid = !!queries.handlers[query];

  if (!pathExists) {
    errorHandler(`${filePath} could not be resolved`);
  }
  if (!isValid) {
    errorHandler(`${query} is not a known query`);
  }
};

module.exports = validateArgs;