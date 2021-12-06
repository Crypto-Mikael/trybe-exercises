const connection = require('../connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middleName,
  lastName: authorData.last_name,
});

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

  return { id, firstName, middleName, lastName, name: fullName };
}

const findAllAuthors = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors')
  return authors.map(serialize).map(getNewAuthor);
};

const findAuthorsById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT  first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id]);
  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];
  return getNewAuthor({ id, firstName, middleName, lastName });
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO mvc_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  findAuthorsById,
  findAllAuthors,
  create,
  isValid
};