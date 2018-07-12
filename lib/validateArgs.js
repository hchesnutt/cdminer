const fs = require('fs');

const chalk = require('chalk');

const { exitProcess } = require('./errorHandlers.js');

const handleHelp = require('./handleHelp.js');

const getClosestQuery = require('./getClosestQuery.js');
const validParam = require('./validParam.js');
const queries = require('../queries/queries.js');

// Validates path, query, and param
const validateArgs = ({ filePath, query, param }, errorHandler = exitProcess) => {
  const pathExists = fs.existsSync(filePath);

  const isValidQuery = !!queries.handlers[query];
  const isValidParam = validParam[query](param);

  if (!isValidParam) console.log('UNCAUGHT ERROR IN isValidParam', isValidParam);

  if (!pathExists) {
    errorHandler(`${filePath} could not be resolved`);
  }
  if (!isValidQuery) {
    errorHandler(`
      ${query} is not a known query.
      Did you mean ${chalk.white.italic(getClosestQuery(query))}
    `);
  }
};

module.exports = validateArgs;
