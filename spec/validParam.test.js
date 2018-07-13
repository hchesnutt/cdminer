const { expect } = require('chai');

const { validParam, findByYearValidator } = require('../lib/validParam.js');

describe('validParam', function() {
  describe('locate', function() {
    it('Should throw error when input length is not 2', function() {
      const inputs = ['C', '', 'CAA'];

      for (const input of inputs) {
        expect(validParam['locate'].bind(null, input)).to.throw();
      }
    });

    it('Should be case agnostic', function() {
      expect(validParam['locate'].bind(null, 'ca')).to.not.throw();
    });
  });
  describe('findByYearValidator', function() {
    it('Should throw exception if input cannot be made a number', function() {
      expect(findByYearValidator('2000')).to.be.true;
      expect(findByYearValidator.bind(null, '20d0')).to.throw();
    });
    it('Should throw exception if input length is not 4', function() {
      const result = findByYearValidator.bind(null, '02018');
      expect(result).to.throw();
      // expect(findByYearValidator.bind(null, '201')).to.throw();
    });
  });
  describe('find_companies_between_size', function() {
    it('Should throw exception if input is not a valid range', function() {
      const find_companies_between_size = validParam['find_companies_between_size'];
      expect(find_companies_between_size('1-10')).to.be.true;
      expect(find_companies_between_size.bind(null, 'not a range')).to.throw();
    });
  });
  describe('find_type', function() {
    it('Should throw exception if input is not a valid category', function() {
      const find_type = validParam['find_type'];
      expect(find_type('Media')).to.be.true;
      expect(find_type.bind(null, 'not a category')).to.throw();
    });
  });
});
