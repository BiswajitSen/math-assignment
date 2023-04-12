const test = require('../lib/testing.js');
const pattern = require('../src/shapes/square.js');

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", pattern.square(4), 'should give square of given length');
}

testSquare();
