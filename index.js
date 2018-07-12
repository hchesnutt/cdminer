#! /usr/bin/env node

const chalk = require('chalk');

const { parseArgs, loadData } = require('./lib');
const { filterCompanies } = require('./queries');

const args = parseArgs(process.argv);
const { filePath, query, param } = args;

const companies = loadData(filePath);

const companyNames = filterCompanies(companies, query, param);

console.log(`
  Company Names:
  ${companyNames.toString()}
  Number of Companies: ${companyNames.length}
`);

process.exit();