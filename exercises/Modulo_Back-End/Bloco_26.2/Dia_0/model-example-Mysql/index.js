const express = require('express');
const authorRoutes = require('./routes/authorsRoute');

const app = express();
const port = 3000;


app.use(express.json());

app.use('/authors', authorRoutes);

app.listen(port, () => console.log(`Example app listening on ${port}!`));