const bodyParser = require('body-parser')
const express = require('express');

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const langs = ['HTML', 'CSS', 'JS', 'REACT'];

app.get('/langs', (req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send(`Liguagem ${name} adicionada!`)
});

app.listen(3000, () => {

});