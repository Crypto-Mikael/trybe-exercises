const express = require('express');
const app = express();
const PORT = 3000;
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', productRoutes);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT} 🔥!`));