const express = require('express');
const userRoute = require('./routes/user');

const app = express()
const PORT = 3000;


app.use(express.json());

app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Servidor Rodando na porta: ${PORT}`));