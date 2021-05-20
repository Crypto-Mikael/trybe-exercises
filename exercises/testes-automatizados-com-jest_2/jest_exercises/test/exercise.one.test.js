const { uppercase } = require('../code/exercise.one');

describe('Testing function existent', () => {
  it('Should have function uppercase in scope', () => {
    expect(typeof uppercase).toBe('function');
  })
});

describe('Testing uppercase function', () => {
  it('After execute uppercase the string have to be in uppercase',  (done) => {
    uppercase('uppercase', (str) => {
      expect(str).toBe('UPPERCASE');
      done();
    });
  });
})