const fs = require('fs');

const { white } = require('chalk');

const { exitProcess } = require('./errorHandlers.js');
const handleHelp = require('./handleHelp.js');
const getClosestQuery = require('./getClosestQuery.js');
const queries = require('../queries/queries.js');

const validateArgs = ({ filePath, query, param }, errorHandler = exitProcess) => {
  const pathExists = fs.existsSync(filePath);
  const isValid = !!queries.handlers[query];
  
  if (!pathExists) {
    errorHandler(`${filePath} could not be resolved`);
  }
  if (!isValid) {
    errorHandler(`
      ${query} is not a known query.
      Did you mean ${chalk.white.italic(getClosestQuery(query))}
    `);
  }
};

module.exports = validateArgs;
