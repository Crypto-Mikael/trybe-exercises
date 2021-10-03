const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParse.json());

app.post('/hello', (req, res) => {
  const { nome, age } = req.body;
  if (Number(age) > 17) {
    return res.status(201).json({ message: `Hello, ${nome}` });
  } else {
    return res.status(401).json({ message: "Unauthoried" });
  }
});

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});