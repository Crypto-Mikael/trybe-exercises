const authorModel = require('../model/authorModel');

const listAuthors = async (_req, res) => {
  try {
    const authors = await authorModel.findAllAuthors();
    return res.status(200).render('./author/author', { authors });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const newAuthor = (_req, res) => {
  return res.render('author/new', { message: null });
};

const createAuthor = async (req, res) => {
  try {
    const { firstName, middleName, lastName } = req.body;
    const isValidAuthor = authorModel.isValid(firstName, middleName, lastName);
    if (!isValidAuthor) {
      return res.status(404).render('author/new', { message: 'Dados invalidos' });
    }
    await authorModel.create(firstName, middleName, lastName);
    res.redirect('authors');
  } catch (err) {
    return res.status(500).json(err.message);
  };
};

const showAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await authorModel.findAuthorsById(id);
    if (!author) return res.status(404).render('404');
    return res.status(200).render('author/show', { author });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = {
  createAuthor,
  listAuthors,
  showAuthor,
  newAuthor,
};