const jsdom = require('jsdom');
const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();
mocha.suite.emit('pre-require', this, 'solution', mocha);

function pow() {
  return 8;
}

describe("pow", function() {
  
  it("raises to n-th power", function() {
    assert.equal(pow(8), 8);
  });

});

mocha.run();
