const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
const drinksRe = drinks.sort((a,b) => {
  return a.name.localeCompare(b.name)
});


app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) 
  && r.price < parseInt(maxPrice)) && r.price > parseInt(minPrice);
  res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', function (req, res) {
 const { id } = req.params;
 const recipe = recipes.find((r) => r.id === parseInt(id));
 if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

 res.status(200).send(recipe);
});


const handleHelloWorldRequest = (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));

  if(!drink) return res.status(404).json({ message: 'Recipe not found!' });
  res.status(200).json(drink);
}

app.get('/drinks/:id', handleHelloWorldRequest);

app.listen(port, () => {
  console.log(`Aplicacçao ouvindo na porta ${port}`)
});

