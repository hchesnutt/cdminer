const { yellow } = require('chalk');
const { textSync } = require('figlet');

const helpText = require('../docs/helpText.js');

const handleHelp = () => {
  console.log(`
    ${yellow(textSync('cdminer', { font: 'Doom' }))}
    ${helpText()}
  `);
  process.exit();
}

module.exports = handleHelp;
