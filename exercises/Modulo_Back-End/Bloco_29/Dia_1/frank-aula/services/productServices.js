const { Product } = require('../models');

const createProduct = (name) => Product.create({ name });

const getAllProducts = () => Product.findAll();
module.exports = {
  getAllProducts,
  createProduct,
};