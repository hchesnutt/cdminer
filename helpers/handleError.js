const chalk = require('chalk');

const handleError = (message) => {
  console.log(chalk.red(message));
  process.exit();
}

module.exports = {
  handleError,
}