const express = require('express');

const app = express()
const PORT = 3000;

app.use(express.json());

app.use('/user');

app.listen(PORT, () => console.log(`Servidor Rodando na porta: ${PORT}`));