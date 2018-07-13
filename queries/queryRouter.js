const queryRouter = {
  locate: (companies, state) => {
    return companies.filter(company => company.state === state);
  },
  find_before: (companies, year) => {
    return companies.filter(company => company.year_founded <= year);
  },
  find_after: (companies, year) => {
    return companies.filter(company => company.year_founded >= year);
  },
  find_companies_between_size: (companies, range) => {
    return companies.filter(company => company.full_time_employees === range);
  },
  find_type: (companies, category) => {
    return companies.filter(company => company.company_category === category);
  },
};

module.exports = queryRouter;
