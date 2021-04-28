const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
let expected = sum(4, 5);
console.log(expected);

assert.strictEqual(expected, 9);

expected = sum(0, 0);
console.log(expected);

assert.strictEqual(expected, 0);


