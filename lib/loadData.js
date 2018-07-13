const fs = require('fs');
const { resolve } = require('path');

const { exitProcess } = require('./errorHandlers.js');

const loadData = (filePath) => {
  try {
    filePath = resolve(process.cwd(), filePath);
    return require(filePath);
  } catch(e) {
    throw Error(e);
  }
}

module.exports = loadData;
