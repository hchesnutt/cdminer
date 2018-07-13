const { handlers } = require('../queries');
const { exitProcess } = require('../lib');
const queryRouter = require('./queryRouter.js');

// filter takes in an array of companies, query, and param, returns object with new array filter applied
const filterCompanies = (array, query, param) => {
  const queryFilter = queryRouter[query]

  const filteredArray = queryFilter(array, param);
  
  return filteredArray.map(company => company.company_name);
};

module.exports = filterCompanies;
