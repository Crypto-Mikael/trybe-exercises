const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((primeiroElemento,segundoElemento) => primeiroElemento - segundoElemento);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);