const router = require('express').Router();
const { getAll, insertAuthor } = require('../models/authorModelMongo'); // Select Method

router.get('/', async (_req, res) => {
  const authors = await getAll();
  res.status(200).json(authors);
});

router.post('/', async (req, res) => {
  try {
    const { first_name, middle_name, last_name } = req.body;
    const data = await insertAuthor(first_name, middle_name, last_name);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: `Problema ao inserir o registro: ${err}` });
  }
});

module.exports = router;