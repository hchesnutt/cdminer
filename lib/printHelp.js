const chalk = require('chalk');

const printHelp = () => {
  console.log(chalk.yellow('Help docs here'));
  process.exit();
}

module.exports = {
  printHelp,
};
