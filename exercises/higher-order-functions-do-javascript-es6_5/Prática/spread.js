// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Uva', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Perâ', 'Kiwi', 'Abacaxi'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional]

console.log(fruitSalad(specialFruit, additionalItens));