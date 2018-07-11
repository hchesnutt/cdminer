const chalk = require('chalk');

function handleError(message) {
  console.log(chalk.red(message));
  process.exit();
}

module.exports = {
  parseArgs: (argv) => {
    const args = argv.slice(2);
    if (args.length > 3 || args.length < 3) handleError(`Expected 3 arguments, received ${args.length}`)
    const [ path, query, params ] = args;
  }
}