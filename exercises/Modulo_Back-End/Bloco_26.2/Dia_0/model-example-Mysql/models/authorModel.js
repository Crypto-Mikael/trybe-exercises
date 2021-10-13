const connection = require('./connectionMysql');

const getNewAuthor = ({id, firstName, middleName, lastName }) => {
  const fullName = [ firstName, middleName, lastName].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return result.map(serialize).map(getNewAuthor);
}

const insertAuthor = async (first_name, middle_name, last_name) => {
  const [result] = await connection.execute('INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)', [first_name, middle_name, last_name]);
  return result;
}

module.exports = {
  getAll,
  insertAuthor,
}