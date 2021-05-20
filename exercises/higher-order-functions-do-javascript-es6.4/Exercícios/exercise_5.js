const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
function containsA() {
  const stringLettersAppart = names.join('').toLowerCase().split('')
  return stringLettersAppart.reduce((acumulator,actualResult) => actualResult === 'a' ? acumulator += 1 : acumulator += 0 ,0)
}
assert.deepStrictEqual(containsA(), 20);