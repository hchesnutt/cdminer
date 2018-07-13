const { expect } = require('chai');

const { validateArgs } = require('../lib');

describe('validateArgs', function () {
  it('Should not throw exception for valid arguments', function() {
    const validArgs = { filePath: './data.json',
                        query: 'find_type',
                        param: 'Media'};
                        
    expect(validateArgs.bind(null, validArgs)).to.not.throw();
    expect(validateArgs(validArgs)).to.be.true;
  });
  it('Should throw exception if path does not exist', function () {
    const invalidArgs = { filePath: './otherFile.json',
                          query: 'find_type',
                          param: 'Media'};
    
    expect(validateArgs.bind(null, invalidArgs)).to.throw();
  });
  
  it('Should throw exception if query is not valid', function () {
    const invalidArgs = { filePath: './data.json',
                          query: 'find',
                          param: 'Media'};

    expect(validateArgs.bind(null, invalidArgs)).to.throw();
  });
});
