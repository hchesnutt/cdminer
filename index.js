#! /usr/bin/env node

const chalk = require('chalk');

const { parseArgs, loadData, exitProcess } = require('./lib');
const { filterCompanies } = require('./queries');

let args, companies;

try {
  // Collect and parse stdin
  args = parseArgs(process.argv);
} catch(e) {
  // If invalid print error and end process;
  exitProcess(e);
}
const { filePath, query, param } = args;

try {
  // Load data from file
  companies = loadData(filePath);
} catch(e) {

}

// Execute query filtering operation
const companyNames = filterCompanies(companies, query, param);

// Print results to stdout
console.log(`
${chalk.yellow('Company Names:')}
  ${companyNames.join(', ')}
${chalk.yellow('Number of Companies:')} ${companyNames.length}
`);

process.exit();


