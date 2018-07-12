const { exitProcess } = require('./errorHandlers.js');

module.exports = {
  exitProcess,
  handleHelp: require('./handleHelp.js'),
  loadData: require('./loadData.js'),
  validateArgs: require('./validateArgs.js'),
  parseArgs: require('./parseArgs.js'),
};
