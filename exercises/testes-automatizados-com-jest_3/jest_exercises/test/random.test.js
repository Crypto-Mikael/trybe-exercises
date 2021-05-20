const { randomNumber } = require('../code/random');

jest.mock('../code/random');

describe('A função randomNumber retornar um numero aleatorio?', () => {
  it('A função randomNumber retorna o numero 53?', () => {
    randomNumber.mockReturnValue(53);
    expect(randomNumber()).toBe(53);
  });
  it('A função randomNumber retorna o numero 64?', () => {
    randomNumber.mockReturnValue(64);
    expect(randomNumber()).toBe(64);
  });
  it('A função randomNumber retorna o numero 82?', () => {
    randomNumber.mockReturnValue(82);
    expect(randomNumber()).toBe(82);
  });
  it('A função randomNumber retorna o numero 31?', () => {
    randomNumber.mockReturnValue(31);
    expect(randomNumber()).toBe(31);
  });
});