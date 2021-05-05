const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
function containsA() {
  const stringLettersAppart = names.join('').toLowerCase().split('')
  const stringCountA = stringLettersAppart.reduce((acumulator,resultadoAtual) =>  {
    if(resultadoAtual === 'a') {
      acumulator += 1
    }
    return acumulator
  },0)
  return stringCountA
}
assert.deepStrictEqual(containsA(), 20);