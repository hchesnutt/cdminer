const findByYearValidator = (year) => {
  const isNumber = !Number.isNaN(+year);
  const isValid = (year.length === 4
                  && isNumber);

  if (!isValid) {
    throw Error('Param must be a year.');
  }
  return true;
};

const validParam = {
  locate: (state) => {
    if (state.length !== 2 || typeof state !== 'string') {
      throw Error('Param must be a state acronym.');
    }
    return true;
  },
  find_before: findByYearValidator,
  find_after: findByYearValidator,
  find_companies_between_size: (param) => {
    const options = ['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+'];
    const isValid = options.includes(param);
    if (!isValid) {
      throw Error(`Param must be one of the following options:
        ${options.join('\n')}
      `);
    }
    return true;
  },
  find_type: (category) => {
    const options = ['N/A',
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
      'Transportation'];

    const isValid = options.includes(category);
    if (!isValid) {
      throw Error(`Param must be one of the following options:
        ${options.join(', ')}
      `);
    }
    return true;
  },  
};

module.exports = {
  validParam,
  findByYearValidator,
};
