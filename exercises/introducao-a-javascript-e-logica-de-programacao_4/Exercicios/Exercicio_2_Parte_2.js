let numbers = [2, 3, 6, 7, 10, 1]

function highestNumberArray () {
    let higherNumber = 0;
    for (let index = 0; index < numbers.length; index += 1) {

        if (numbers[index] > higherNumber) {
            higherNumber = numbers[index]
        };
    }
    return higherNumber;
}

console.log(highestNumberArray());