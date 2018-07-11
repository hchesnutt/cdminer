const chalk = require('chalk');

const handleError = (message) => {
  console.log(chalk.red(message));
  // Provide list of supported commands
  // Adv. Edit distance
  process.exit();
}

module.exports = handleError;