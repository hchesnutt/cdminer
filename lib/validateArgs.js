const fs = require('fs');

const handleError = require('./handleError.js');
const queries = require('../queries/queries.js');

const validateArgs = ({ filePath, query, param }) => {
  const pathExists = fs.existsSync(filePath);
  const isValid = !!queries.handlers[query];

  if (!pathExists) {
    handleError(`${filePath} could not be resolved`);
  }
  if (!isValid) {
    handleError(`${query} is not a known query`);
  }
};

module.exports = validateArgs;