const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(8, (number) => {
  if (number % 4 === 0) {
    console.log(number, 'is even');
  }
});