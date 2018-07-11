#! /usr/bin/env node

const chalk = require('chalk');

const companies = require('./data.json');

const companyNames = companies.map(({ company_name }) => company_name);

console.log(`
  ${chalk.green('Company Names:')}
  ${companyNames.toString()}
  ${chalk.green('Number of Companies:')}
  ${companyNames.length}
`);