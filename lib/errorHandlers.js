const chalk = require('chalk');

const exitProcess = (message) => {
  // Provide list of supported commands
  // Adv. Edit distance
  console.log(`
    ${(chalk.yellow('cdminer:', message))}
    ${(chalk.yellow(`See 'cdminer --help'`))}
  `);
  process.exit();
}
// For development
const throwError = (message) => {
  throw new Error(message);
}

module.exports = {
  exitProcess,
  throwError,
};
