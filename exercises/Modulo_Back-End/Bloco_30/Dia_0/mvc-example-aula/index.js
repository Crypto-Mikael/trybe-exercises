const express = require('express');

const authorController = require('./controller/authorController');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './view');

app.get('/authors', authorController.listAuthors);
app.get('/authors/new', authorController.newAuthor);
app.get('/authors/:id', authorController.showAuthor);
app.post('/authors', authorController.createAuthor);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));