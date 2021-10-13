const connection = require('../connections/Mongodb');

const insertUser = async (firstName, lastName, email, password) => {
  return connection()
  .then((db) => db.collection('users')
  .insertOne({ firstName, lastName, email, password }))
  .then((result) => ({
    id: result.insertedId,
    firstName,
    lastName,
    email,
  }))
}

const getAllUsers = async () => {
  return connection().then((db) => db.collection('users').find().toArray());
}

const userIDChecker = async (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(404).json({ message: "Usuário não encontrado" })
}

const FieldsChecker = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body
}

const userPasswordChecker = async (req, res, next) => {
  const { password } = req.body;
  if(!password || password.length < 6) {
    return res.status(400).json({ 
      message: "O campo 'password' deve ter pelo menos 6 caracteres", 
    });
  }
  next();
}

module.exports = {
  insertUser,
  getAllUsers,
  userIDChecker,
  userPasswordChecker,
}