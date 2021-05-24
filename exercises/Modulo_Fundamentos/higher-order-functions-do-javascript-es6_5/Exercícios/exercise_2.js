const assert = require('assert');

const sum = (...num) => {
  return num.reduce((acumulador, currentValue) => {
    return acumulador + currentValue;
  }, 0);
}


assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);