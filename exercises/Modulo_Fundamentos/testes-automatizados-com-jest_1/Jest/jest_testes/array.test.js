const myRemove = require('../jest_code/array');

test('Verifique se a chamada retorna o array esperado: [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4],3)).toEqual([1, 2, 4]);
});

test('Não retorna o array esperado.', () => {
  expect(myRemove([1, 2, 3, 4],3)).not.toBe([1, 2, 3, 4]);
});

test('O array passado não sofreu alterações.', () => {
  let array = [1, 2, 3, 4];
  expect(myRemove(array)).toEqual(array)
});

test('Verifique se a chamada retorna o array esperado: [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4],5)).toEqual([1, 2, 3, 4])
})