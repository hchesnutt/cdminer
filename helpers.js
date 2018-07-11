const chalk = require('chalk');
const fs = require('fs');

const queries = require('./queries.js');

function handleError(message) {
  console.log(chalk.red(message));
  process.exit();
}

module.exports = {
  parseArgs: (argv) => {
    const args = argv.slice(2);
    if (args.length > 3 || args.length < 3) handleError(`Expected 3 arguments, received ${args.length}`)
    const [ path, query, param ] = args;
    return { path, query, param };
  },
  validateArgs: ({ path, query, param }) => {
    // path should resolve
    if (!fs.existsSync(path)) handleError(`${path} could not be resolved`);
    // query should be an allowable query
    if (!queries[query]) handleError(`${query} is not a known query`);
  }

}
