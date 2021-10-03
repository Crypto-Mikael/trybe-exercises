const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");


const getSimpsons = () => {
  return fs.readFileSync('./simpsons.json', 'utf-8')
}

const setSimpsons = (newSimpsons) => {
  return fs.writeFileSync('./simpson.json', JSON.stringify(newSimpsons));
}


app.get('/simpsons', (req, res) => {
  const simpsons = getSimpsons()
  res.status(200).send(simpsons);
});

app.get("/simpsons/:id", (req, res) => {
  const { id } = req.params;
  const simpsons = getSimpsons()
  const arrayOfsimpsons = JSON.parse(simpsons)
  const filteredSimpsons = arrayOfsimpsons.find((r) => parseInt(r.id) === parseInt(id));
  res.status(200).send(filteredSimpsons);
});

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});