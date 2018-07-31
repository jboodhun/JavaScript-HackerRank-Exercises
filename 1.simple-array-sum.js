/*
Problem:
https://www.hackerrank.com/challenges/simple-array-sum/problem

Solution:
*/

const jsdom = require('jsdom');
const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();
mocha.suite.emit('pre-require', this, 'solution', mocha);

/**
 * Function to calculate the sum an array elements.
 * @param input {array} An array of integers.
 * @return {integer}
*/
function arraySum(input) {

  let sum = 0,
      count = input.length;

  for(let i = 0; i < count; i++) {
    sum += input[i];
  }

  // A more elegant solution.
  // let total = input.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
}

describe("Array Sum Calculation", function() {

  it("Find the Array Sum of [1, 2, 3]", function() {
    assert.equal(arraySum([1, 2, 3]), 6);
  });

  it("Find the Array Sum of [1, 2, 3, 4, 10, 11]", function() {
    assert.equal(arraySum([1, 2, 3, 4, 10, 11]), 31);
  });

});

mocha.run();
