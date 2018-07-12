const { expect } = require('chai');

const validParam = require('../lib/validParam.js');

describe('validParam', function() {
  describe('locate', function() {
    it('Should throw error when input length is not 2', function() {
      const inputs = ['C', '', 'CAA'];

      for (let input of inputs) {
        expect(validParam['locate'].bind(null, input)).to.throw();
      }
    });

    it('Should be case agnostic', function() {
      expect(validParam['locate'].bind(null, 'ca')).to.not.throw();
    })
  });
  describe('find_before', function() {
    it('Should ', function() {

    })
  });
  describe('find_after', function() {
    it('', function() {

    })
  });
  describe('find_companies_between_size', function() {
    it('', function() {

    })
  });
  describe('find_type', function() {
    it('', function() {

    })
  });
});
