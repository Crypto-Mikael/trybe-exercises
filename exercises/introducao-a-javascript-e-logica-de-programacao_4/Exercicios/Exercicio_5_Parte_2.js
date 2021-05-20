let numbers = [2, 3, 2, 5, 8, 2, 3];

function RepeatNumber () {
    let repeater = numbers[0];
    for (let index = 0; index < numbers.length; index += 1) {

        if (numbers[index] === repeater) {
            repeater = numbers[index]
        };
    }
    return repeater;
};

console.log(RepeatNumber())