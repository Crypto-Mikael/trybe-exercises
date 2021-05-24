const { myRemoveWithoutCopy } = require('../jest_code/RmArray');

test('Verifique se a chamada retorna o array: [1, 2, 4]', () => {
  let array = [1, 2, 4];
  expect(myRemoveWithoutCopy([1, 2, 3, 4],3)).toEqual(array); 
});

test('Verifique se a chamada NÃO retorna o array: [1, 2, 3, 4]', () => {
  let array = [1, 2, 3, 4];
  expect(myRemoveWithoutCopy([1, 2, 3, 4],3)).not.toBe(array); 
});
