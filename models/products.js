'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.associate = (models) => {
        products.belongTo(models.stores,{foreignKey:'storeId',as:'stores'})
      }
      // define association here
    }
  }
  products.init({
    storeId: DataTypes.UUID,
    productName: DataTypes.STRING,
    produtQty: DataTypes.INTEGER,
    productAmount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};