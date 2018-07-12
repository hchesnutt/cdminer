const chalk = require('chalk');

const exitProcess = (message) => {
  // Provide list of supported commands
  // Adv. Edit distance
  console.log(chalk.red(message));
  process.exit();
}

const throwError = (message) => {
  throw new Error(message);
}

module.exports = {
  exitProcess,
  throwError,
};
