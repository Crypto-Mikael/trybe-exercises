let fruits = [3, 4, 10, 1, 12];
let som = 0

for (let index = 0; index < fruits.length; index += 1) {
    som = fruits[index] + som
    if (som > 15) {
        console.log(som)
    } else {
        console.log('Valor menor que 16!')
    }
}