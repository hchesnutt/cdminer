const fs = require('fs');

const { exitProcess } = require('./errorHandlers.js');

const loadData = (filePath, errorHandler = exitProcess) => {
  try {
    const companies = require(filePath);
    return companies;
  } catch(e) {
    errorHandler(e);
  }
}

module.exports = loadData;
