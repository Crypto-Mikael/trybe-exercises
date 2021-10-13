const express = require('express');
const port = 3000;
const app = express()

app.use(express.json());


const users = [
  { username: 'Miguel da Costa Campos', email: 'hamander@gmail.com', password: 123 }
];

const userInfoAuth = (req, res, next) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const regexPassword = /^[a-zA-Z][0-9]{7}$/;
  const { username, email, password } = req.body;
  if (!username || username === '') return res.status(400).json({ "message": "invalid username" });
  if (!email || email === regexEmail) return res.status(400).json({ "message": "invalid email" });
  if (!password || password === regexPassword) return res.status(400).json({ "message": "invalid password" });

  next();
}


app.post('/user/register', userInfoAuth, (req, res) => {
  const { username, email, password } = req.body;
  users.push({ username, email, password});
  return res.status(200).json({ "message": 'nova pessoa adicionada' });
})

app.get('/users', (_req, res) => {
  return res.status(200).json(users);
});

app.listen(3000, () => {
  console.log(`App rodando na port ${port}`)
})