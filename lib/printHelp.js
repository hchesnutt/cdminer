const { yellow } = require('chalk');
const { textSync } = require('figlet');

const { helpText } = require('../docs/helpText.js');

const printHelp = () => {
  console.log(`
    ${yellow(textSync('cdminer', { font: 'doom' }))}
    ${helpText()}
  `);
  process.exit();
}

module.exports = printHelp;
