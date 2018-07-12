const chalk = require('chalk');

const helpText = () => {
  return `
${chalk.yellow('NAME')}
    cdminer - the company data miner

${chalk.yellow('SIGNATURE')}
    cdminer ${chalk.cyan('<path>')} ${chalk.cyan('<query>')} ${chalk.cyan('<param>')}

${chalk.yellow('DESCRIPTION')}
    cdminer is a pretty quick and light data explorer for json files 
    that can be loaded into memory.

${chalk.yellow('ARGUMENTS')}
  ${chalk.cyan('<path>')}
    Relative path to json file.
  
  ${chalk.cyan('<query>')}
    Can be one of the following:
      ${chalk.white.italic('locate')}
        Finds the list of companies by Location (state only). 
        
        Example:
          > cdminer locate CA
        
      ${chalk.white.italic('find_before')}
        Finds the list of companies before a specific year. This is an inclusive 
        operation. Must be an integer.
        
        ${chalk.cyan('<param>')} options: 
        Must be an integer.
        
        Example: 
          > cdminer find_before 1999
        
      ${chalk.white.italic('find_after')}
        Finds the list of companies after a specific year. This is an inclusive 
        operation.
        
        ${chalk.cyan('<param>')} options: 
        Must be an integer.
        
        Example: 
          > cdminer find_after 2000
        
      ${chalk.white.italic('find_companies_between_size')}
        Finds the list of companies based on the number of full time employees. 
        Does not include companies with N/A or NA as value for full_time_employees.
        
        ${chalk.cyan('<param>')} options:
        Possible values ['1-10', '11-50', '51-200', '201-500', '501-1,000', 
        '1,001-5,000', '5,001-10,000', '10,001+'].
        
        Example:
          > cdminer find_companies_between_size 1,001-5,000
      
      ${chalk.white.italic('find_type')}
        Finds all companies by Company Category. 
        
        ${chalk.cyan('<param>')} options:
          Possible values [’N/A’,
            'Aerospace and Defense',
            'Business & Legal Services',
            'Data/Technology',
            'Education',
            'Energy',
            'Environment & Weather',
            'Finance & Investment',
            'Food & Agriculture',
            'Geospatial/Mapping',
            'Governance',
            'Healthcare',
            'Housing/Real Estate',
            'Insurance',
            'Lifestyle & Consumer',
            'Media',
            'Research & Consulting',
            'Scientific Research',
            'Transportation']

        Example:
          > cdminer   find_type Data/Technology'

  <param>
    See <query> for param options.`
};

module.exports = {
  helpText,
};
