const { expect } = require('chai');

const { locate,
  find_before,
  find_after,
  find_companies_between_size,
  find_type,   
} = require('./../queries/queryRouter');

const companies = require('./testData/valid.json');

describe('Query functions', function() {

  describe('locate', function() {
    it('Should return an array of filtered states', function() {
      expect(locate(companies, 'DC')).to.be.an('array');
      expect(locate(companies, 'DC').length).to.equal(1);
      expect(locate(companies, 'DC')[0].state).to.equal('DC');
    });
  });

  describe('find_before', function() {
    it('Should return an array of companies less than or equal to input year', function() {
      expect(find_before(companies, 2013)).to.be.an('array');
      expect(find_before(companies, 2013).length).to.equal(1);

      expect(find_before(companies, 2013)[0].year_founded).to.equal(2010);
    });
    it('Should be inclusive', function() {
      expect(find_before(companies, 2014).length).to.equal(2);
    });
  });
  
  describe('find_after', function() {
    it('Should return an array of companies greater than or equal to input year', function() {
      expect(find_after(companies, 2011)).to.be.an('array');
      expect(find_after(companies, 2011).length).to.equal(1);
      expect(find_after(companies, 2011)[0].year_founded).to.equal(2014);
    });
    it('Should be inclusive', function() {
      expect(find_after(companies, 2010).length).to.equal(2);
    });
  });
  
  describe('find_companies_between_size', function() {
    it('Should return an array of companies at the input size', function() {
      expect(find_companies_between_size(companies, '51-200')).to.be.an('array');
      expect(find_companies_between_size(companies, '51-200').length).to.equal(1);
      expect(find_companies_between_size(companies, '51-200')[0].full_time_employees).to.equal('51-200');
    });
  });

  describe('find_type', function() {
    it('Should return an array of companies at the input size', function() {
      expect(find_type(companies, 'Data/Technology')).to.be.an('array');
      expect(find_type(companies, 'Data/Technology').length).to.equal(1);
      expect(find_type(companies, 'Data/Technology')[0].company_category).to.equal('Data/Technology');
    });
    it('Should not include companies with "NA" or "N/A" company_category', function() {
      companies.push({ company_category: 'NA' }, { company_category: 'N/A' });
      expect(find_type(companies, 'Data/Technology').length).to.equal(1);
    });
  });
});