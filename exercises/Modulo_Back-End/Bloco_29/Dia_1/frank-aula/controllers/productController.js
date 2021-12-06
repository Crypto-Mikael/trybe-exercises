const productServices = require('../services/productServices');

const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await productServices.createProduct(name);
    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json({ message: "Deu erro ao registrar o produto." });
  };
}

const getAllProducts = async (_req, res) => {
  try{
    const allProducts = await productServices.getAllProducts();
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).json({ message: "Deu erro ao procurar os produtos."})
  };
};

module.exports = {
  getAllProducts,
  createProduct,
};