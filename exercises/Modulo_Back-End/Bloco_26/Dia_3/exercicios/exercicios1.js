const express = require('express');
const app = express();
const port = 3000;
const message = 'pong';


app.get('/ping', (_req, res) => {
  res.status(200).send(message);
});

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});