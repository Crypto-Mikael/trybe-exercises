const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(bodyParser.json());

const getSimpsons = () => {
  const json = fs.readFileSync('./simpsons.json', 'utf-8');
  return JSON.parse(json)
}

const setSimpsons = (newSimpsons) => {
  return fs.writeFileSync('./simpsons.json', JSON.stringify(newSimpsons));
}

app.get('/simpsons', (_req, res) => {
  const simpsons = getSimpsons();
  res.status(200).send(simpsons);
});


app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;
  const simpsons = getSimpsons()
  const alreadyExists = simpsons.map((item) => item.id).includes(id);
  if(alreadyExists) {
    return res.status(409).json({ message: 'id already exists'});
  }
  simpsons.push({ id, name });
  setSimpsons(simpsons)
  return res.status(204).end();
})

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});