const router = require('express').Router();
const MONGODB = '../models/middlewares/userMongo';
const SQL = '../models/middlewares/userSQL';
const { insertUser, getAllUsers, userPasswordChecker, userIDChecker } = require('../models/middlewares/userMongo');


router.post('/', userPasswordChecker, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const resolve = await insertUser(firstName, lastName, email, password)
    return res.status(200).json(resolve);
  } catch (err) {
    return res.status(500).json({ message: `Problema ao inserir item: ${err}`});
  }
});

router.get('/', async (_req, res) => {
  const users = await getAllUsers();
  return res.status(200).json(users)
});

router.get('/:id', userIDChecker, async (req, res) => {
  const { id } = req.params;
  const users = await getAllUsers();
  const result = users.find((user) => String(user._id) === id) 
  res.status(200).json(result);
})

module.exports = router;