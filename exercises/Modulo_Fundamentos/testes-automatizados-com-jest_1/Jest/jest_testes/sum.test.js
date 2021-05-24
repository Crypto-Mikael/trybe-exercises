const sum = require('../jest_code/sum')

test('Sums two value', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('Sums two value equal 0', () => {
  expect(sum(0, 0)).toEqual(0);
});


test('Parameters must be numbers', () => {
  expect(() => {
    sum(4,'5');
  }).toThrow(/Parameters must be numbers/)
});