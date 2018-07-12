const { expect } = require('chai');

const { validateArgs } = require('../lib');

describe('validateArgs', function () {
  let wasCalled = false;
  const validArgs = { filePath: './data.json',
                      query: 'find_type',
                      param: 'Media'};
  
  it('Error handler should only be called if path does not exist', function () {
    const invalidArgs = { filePath: './otherFile.json',
                          query: 'find_type',
                          param: 'Media'};
    
    validateArgs(validArgs, () => wasCalled = true);
    expect(wasCalled).to.be.false;
    wasCalled = false;
    validateArgs(invalidArgs, () => wasCalled = true);
    expect(wasCalled).to.be.true;
  });
  
  it('Error handler should only be called if query is not valid', function () {
    const invalidArgs = { filePath: './data.json',
                          query: 'find',
                          param: 'Media'};
    wasCalled = false;
    validateArgs(validArgs, () => wasCalled = true);
    expect(wasCalled).to.be.false;
    wasCalled = false;
    validateArgs(invalidArgs, () => wasCalled = true);
    expect(wasCalled).to.be.true;
  });
});
