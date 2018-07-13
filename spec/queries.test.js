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
    it.only('Should return an array of companies with filter applied', function() {
      expect(find_before(companies, '1-10')).to.be.an('array');
      expect(find_before(companies, '1-10').length).to.equal(1);

      expect(find_before(companies, '1-10')[0].full_time_employees).to.equal('1-10');
    });
    it.only('Should be inclusive', function() {
      expect(find_before(companies, '51-200').length).to.equal(2);
    });
  });
  
  describe('find_after', function() {
    it.only('Should return an array of companies with filter applied', function() {
      expect(find_after(companies, '51-200')).to.be.an('array');
      expect(find_after(companies, '51-200').length).to.equal(1);
      expect(find_after(companies, '51-200')[0].full_time_employees).to.equal('51-200');
    });
    it.only('Should be inclusive', function() {
      expect(find_after(companies, '1-10').length).to.equal(2);
    });
  });
  
  describe('find_companies_between_size', function() {
    it('Shoudl return an array of companies at the input size', function() {

    });
  });
});