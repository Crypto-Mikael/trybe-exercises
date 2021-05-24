let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let lengthnum = numbers.length

for (index = 0; index < numbers.length; index += 1) {
  let actualnum = numbers[index]
  total = actualnum + total
}
  let AritmeticArray = total / lengthnum
  if (AritmeticArray > 20) {
    console.log('valor maior que 20')
} else if (AritmeticArray <= 20) {
    console.log('valor menor que 20')
}