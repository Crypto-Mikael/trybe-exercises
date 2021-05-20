const { getRepos } = require('../code/exercise.three');

describe('Returns the projects todo-list and project-meme', () => {
  it('Get the repository names', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
  