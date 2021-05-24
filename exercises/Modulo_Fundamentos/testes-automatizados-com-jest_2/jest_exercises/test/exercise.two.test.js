const { findUserById, getUserName } = require('../code/exercise.two');

describe('Testing getUserName function', () => {
  it('Result of getUserName is existing', async () => {
    await expect(getUserName(4)).resolves.toBe('Mark');
  });
  it('Result of getUseName is not existing', async () => {
    await expect(getUserName(-1)).rejects.toEqual({ error: `User with ${-1} not found.`});
  });
});
