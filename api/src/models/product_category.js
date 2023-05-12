module.exports = function(sequelize, DataTypes) {
    const ProductCategory = sequelize.define('ProductCategory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    }, {
      sequelize,
      tableName: 'product_categories',
      timestamps: true,
      paranoid: true
    });
  
    return ProductCategory;
};