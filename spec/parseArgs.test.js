const { expect } = require('chai');
const { resolve } = require('path');

const { parseArgs } = require('../lib');

describe('parseArgs', function() {
  it('Should return object with filePath, query, and param with valid input', function() {
    const args = ['node', 'index.js', './data.json', 'find_type', 'Media'];
    const result = parseArgs(args, );
    expect(result.filePath).to.equal(resolve(process.cwd(), args[2]));
    expect(result.query).to.equal(args[3]);
    expect(result.param).to.equal(args[4]);
  });
  
  it('Should end thow exception when passed too many or to few arguments', function() {
    const args = ['node', 'index.js', './data.json', 'find_type'];
    let didFail = false;
    parseArgs(args, (message) => {
      didFail = true;
    });
    expect(didFail).to.be.true;
    didFail = false;
    args.push('right amount', 'one too many!');
    parseArgs(args, (message) => {
      didFail = true;
    });
    expect(didFail).to.be.true;
  });
});
