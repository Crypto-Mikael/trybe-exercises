const Product = (Sequelize, DataTypes) => {
  const Product = Sequelize.define("Product", {
    name: DataTypes.STRING,
  });

  return Product;
};

module.exports = Product;