#! /usr/bin/env node

const chalk = require('chalk');

const { parseArgs, loadData } = require('./lib');
const { filterCompanies } = require('./queries');

// Collect and parse stdin
const args = parseArgs(process.argv);
const { filePath, query, param } = args;

// Load data from file
const companies = loadData(filePath);

// Execute query filtering operation
const companyNames = filterCompanies(companies, query, param);

// Print results to stdout
console.log(`
  Company Names:
  ${companyNames.toString()}
  Number of Companies: ${companyNames.length}
`);

process.exit();