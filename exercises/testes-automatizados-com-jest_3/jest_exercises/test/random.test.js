const { randomNumber } = require('../code/random');

jest.mock('../code/random');

describe('A função randomNumber retornar um numero aleatorio?', () => {
  it('The function randomNumber returns number 53?', () => {
    randomNumber.mockReturnValue(53);
    expect(randomNumber()).toBe(53);
  });
  it('The function randomNumber returns number 64?', () => {
    randomNumber.mockReturnValue(64);
    expect(randomNumber()).toBe(64);
  });
  it('The function randomNumber returns number 82?', () => {
    randomNumber.mockReturnValue(82);
    expect(randomNumber()).toBe(82);
  });
  it('The function randomNumber returns number 31?', () => {
    randomNumber.mockReturnValue(31);
    expect(randomNumber()).toBe(31);
  });
});