const fs = require('fs');

const chalk = require('chalk');

const getClosestQuery = require('./getClosestQuery.js');
const { validParam } = require('./validParam.js');

// Validates path, query, and param
const validateArgs = ({ filePath, query, param }) => {
  const pathExists = fs.existsSync(filePath);
  const paramValidator = validParam[query];
  const isValidQuery = !!paramValidator;

  if (!isValidQuery) {
    throw Error(`
      ${query} is not a known query.
      Did you mean ${chalk.white.italic(getClosestQuery(query))}?
    `);
  }
  if (!pathExists) {
    throw Error(`${filePath} could not be resolved`);
  }
  paramValidator(param);
  return true
};

module.exports = validateArgs;
