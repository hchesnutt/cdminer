const fs = require('fs');

const handleError = require('./handlError.js');
const queries = require('./queries.js');

const validateArgs = ({ path, query, param }) => {
  const pathExists = fs.existsSync(path);
  const isValid = !!queries.handlers[query];

  if (!pathExists) {
    handleError(`${path} could not be resolved`);
  }
  if (!isValid) {
    handleError(`${query} is not a known query`);
  }
};

module.exports = {
  validateArgs,
}