const express = require('express');

const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');

const app = express();
app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/api/categories', categoriesRoutes);

module.exports = app;
