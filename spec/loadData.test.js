const { expect } = require('chai');
const { resolve } = require('path');

const { loadData } = require('../lib');

describe('loadData', function() {
  it('Returns parsed json with valid input', function () {
    let wasThrown = false;
    const validPath = resolve(__dirname, './testData/valid.json')
    // console.log(validPath);
    
    const result = loadData(validPath, () => wasThrown = true);
    expect(result[0].state).to.equal('DC');
    expect(result).to.be.an('array');
    expect(wasThrown).to.be.false;
  });
  it('Should throw error with invalid JSON input', function () {
    const invalidPath = resolve(__dirname, './testData/invalid.json')
    let wasThrown = false;

    const result = loadData(invalidPath, () => wasThrown = true);
    expect(wasThrown).to.be.true;
    expect(result).to.be.undefined;
  });
})