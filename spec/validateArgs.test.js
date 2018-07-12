const { expect } = require('chai');

const { parseArgs, validateArgs } = require('../lib');

describe('validateArgs', function () {
  let wasCalled = false;
  const validArgs = parseArgs(['node', 'index.js', './data.json', 'find_type', 'Media']);
  
  it('Error handler should only be called if path does not exist', function () {
    const invalidArgs = parseArgs(['node', 'index.js', './otherFile.json', 'find_type', 'Media']);
    
    validateArgs(validArgs, () => wasCalled = true);
    expect(wasCalled).to.be.false;
    wasCalled = false;
    validateArgs(invalidArgs, () => wasCalled = true);
    expect(wasCalled).to.be.true;
  });
  
  it('Error handler should only be called if query is not valid', function () {
    const invalidArgs = parseArgs(['node', 'index.js', './data.json', 'find', 'Media']);
    wasCalled = false;
    validateArgs(validArgs, () => wasCalled = true);
    expect(wasCalled).to.be.false;
    wasCalled = false;
    validateArgs(invalidArgs, () => wasCalled = true);
    expect(wasCalled).to.be.true;
  });
});
