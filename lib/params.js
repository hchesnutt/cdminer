const { exitProcess } = require('../lib');

const valid = {
  locate: (param, errorHandler = exitProcess) => {
    if (param.length !== 2 || typeof param !== 'string') {
      errorHandler('Param must be a state acronym.');
    }
    return true;
  },
  find_before: (param, errorHandler = exitProcess) => {
    const isNumber = Number(param);
    const isValid = (param.length !== 4 
                    || isNumber === NaN);
    if (!isValid) {
      errorHandler('Param must be a year.');
    }
    return true;
  },
  find_after: (param, errorHandler = exitProcess) => {
    const isNumber = Number(param);
    const isValid = (param.length !== 4
      || isNumber === NaN);
    if (!isValid) {
      errorHandler('Param must be a year.');
    }
    return true;
  },
  find_companies_between_size: (param, errorHandler = exitProcess) => {
    const options = new Set(['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+']);
    const isValid = options.has(param);
    if (!isValid) {
      errorHandler(`Param must be one of the following options:
        ${options.values().map(tuple => tuple[0]).toString()}
      `);
    }
    return true;
  },
  find_type: (param, errorHandler = exitProcess) => {
    const options = new Set(['N/A',
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
      'Transportation']);

    const isValid = options.has(param);
    if (!isValid) {
      errorHandler(`Param must be one of the following options:
        ${options.values().map(tuple => tuple[0]).toString()}
      `);
    }
    return true;
  },  
};

module.exports = valid;