const authorModel = require('../models/authorModel');

const listAuthors = async (_req, res) => {
  try {
    const authors = await authorModel.getAll();
    return res.status(200).render('authors/index', { authors });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  return res.status(200).render('authors/show', { author });
};

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
}