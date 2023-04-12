const test = require('../lib/testing.js');
const math = require('../src/math.js');
const testArithematicOperations = function() {
  test.assertEquality(2, math.add(1, 1), "1 + 1 should be 2");
  test.assertEquality(3, math.subtract(4, 1), "4 - 1 should be 3");
  test.assertEquality(6, math.multiply(3, 2), "3 * 2 should be 6");
}

testArithematicOperations();
