const { myFizzBuzz } = require('../jest_code/fizzbuzz');

test('Este numero é divisiveis por 3 e 5: ', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});

test('Este numero é divisiveis por 3: ', () => {
  expect(myFizzBuzz(3)).toEqual('fizz');
});

test('Este numero é divisiveis por 5: ', () => {
  expect(myFizzBuzz(5)).toEqual('buzz');
});

test('Este numero é não divisiveis por 3 nem 5: ', () => {
  expect(myFizzBuzz(4)).toEqual(4);
});