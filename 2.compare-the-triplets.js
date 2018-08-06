/*

Compare the triplets.

Problem:
https://www.hackerrank.com/challenges/compare-the-triplets

*/

const jsdom = require('jsdom');
const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();
mocha.suite.emit('pre-require', this, 'solution', mocha);

/**
 * Function to compare triplets.
 * @param a {array} An array of integers.
 * @param b {array} An array of integers.
 * @return {array} An array of 2 integers.
*/
function compareTriplets(a, b) {

  let scoreA = 0;
  let scoreB = 0;

  // Get values for first triplet.
  let a0 = parseInt(a[0]);
  let a1 = parseInt(a[1]);
  let a2 = parseInt(a[2]);

  // get values for second triplet.
  let b0 = parseInt(b[0]);
  let b1 = parseInt(b[1]);
  let b2 = parseInt(b[2]);

  // Do the comparisons
  // Comparison operators convert operands to numbers by default.
  if(a0 > b0) {
    scoreA++;
  }

  if(a0 < b0) {
    scoreB++;
  }

  if(a1 > b1) {
    scoreA++;
  }

  if(a1 < b1) {
    scoreB++;
  }

  if(a2 > b2) {
    scoreA++;
  }

  if(a2 < b2) {
    scoreB++;
  }

 // Nothing needed for equality as no points given.

 return [scoreA, scoreB];

}

describe("Compare the triplets", function() {

  it("Compare the triplets for [1, 2, 3] and [3, 2, 1]", function() {
    assert.deepEqual(compareTriplets([1, 2, 3], [3, 2, 1]), [1, 1]);
  });

  it("Compare the triplets for [5, 6, 7] and [3, 6, 10]", function() {
    assert.deepEqual(compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1]);
  });

  it("Compare the triplets for [17, 28, 30] and [99, 16, 8]", function() {
    assert.deepEqual(compareTriplets([17, 28, 30], [99, 16, 8]), [2, 1]);
  });

});

mocha.run();
