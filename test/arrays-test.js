const obj = require('../src/arrays.js');
const test = require('../lib/testing.js');
const testSelectEvenNumbers = function() {
  test.assertListsEqual([2, 4, 6], obj.selectEvenNumbers([1,2,3,4,5,6,7]), "Select even numbers");
}

testSelectEvenNumbers();
