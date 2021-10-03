const express = require("express");
const bodyParse = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParse.json());

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});
