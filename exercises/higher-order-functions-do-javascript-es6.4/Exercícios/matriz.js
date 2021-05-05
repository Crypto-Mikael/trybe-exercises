
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const reducedArray = arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual));
  return reducedArray;
}
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);