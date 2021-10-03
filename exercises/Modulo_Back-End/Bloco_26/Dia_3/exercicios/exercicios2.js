const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParse.json());

app.post('/hello', (req, res) => {
  const { nome } = req.body;
  res.status(201).json({message: `Hello, ${nome}`});
});

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});