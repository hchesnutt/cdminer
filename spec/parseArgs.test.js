const { expect } = require('chai');

const { parseArgs } = require('../lib');

describe('parseArgs', function() {
  it('Should return object with filePath, query, and param with valid input', function() {
    const argv = ['node', 'index.js', './data.json', 'find_type', 'Media'];
    const result = parseArgs(argv);
    expect(result.filePath).to.equal(argv[2]);
    expect(result.query).to.equal(argv[3]);
    expect(result.param).to.equal(argv[4]);
  });
  
  it('Should throw exception when passed too many or to few arguments', function() {
    const argv = ['node', 'index.js', './data.json', 'find_type'];
    expect(parseArgs.bind(null, argv)).to.throw();
    argv.push('right amount', 'one too many!');
    expect(parseArgs.bind(null, argv)).to.throw();
  });
});
