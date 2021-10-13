const connection = require('./connectionMongodb');

const getAll = async () => {
  return connection().then((db) => db.collection('authors').find().toArray());
}

const insertAuthor = async (first_name, middle_name, last_name) => {
  connection()
    .then((db) => db.collection('authors').insertOne({ first_name, middle_name, last_name }))
    .then((result) => { id: result.insertId, first_name, middle_name, last_name });
}

module.exports = {
  getAll,
  insertAuthor,
}