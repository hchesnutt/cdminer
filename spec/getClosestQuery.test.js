const { expect } = require('chai');

const getClosestQuery = require('../lib/getClosestQuery');

describe('getClosestQuery', function() {
  it.only('Should correctly return the closest query to the input', function() {
    const inputs = ['lcate', 'find_aftr', 'fnd_befor', 'find_companiesbetween_sze', 'find_tpe'];
    const queries = ['locate', 'find_after', 'find_before', 'find_companies_between_size', 'find_type'];

    for (let i in inputs) {
      expect(getClosestQuery(inputs[i])).to.equal(queries[i]);
    }
  });
})