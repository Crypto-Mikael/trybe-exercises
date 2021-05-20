const { getRepos } = require('../code/exercise.three');

describe('Returns the projects todo-list and project-meme', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  it('Return the project todo-list?', async () => {
    const reposeOfUrl = await getRepos(url);
    expect(reposeOfUrl).toContain('sd-01-week4-5-project-todo-list');
  })
  it('Return the project meme-generator?', async () => {
    const reposeOfUrl = await getRepos(url);
    expect(reposeOfUrl).toContain('sd-01-week4-5-project-meme-generator');
  })
  it('Return the projects length: 30', async () => {
    const reposeOfUrl = await getRepos(url);
    expect(reposeOfUrl.length).toBe(30);
  })
});