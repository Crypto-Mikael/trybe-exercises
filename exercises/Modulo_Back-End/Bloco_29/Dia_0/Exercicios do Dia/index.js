const express = require('express');

const app = express();

const PORT = 3000;

const plantsRoutes = require('./routes/plantsRoutes');

app.use(express.json());

app.use('/', plantsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
