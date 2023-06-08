module.exports = function (sequelize, DataTypes) {
  const SaleDetail = sequelize.define('SaleDetail', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    saleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sale',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    productName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    basePrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2)
    },
    taxPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2)
    },
    unitOfMeasurement: {
      allowNull: false,
      type: DataTypes.STRING
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'sale_details',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'saleDetail_saleId_fk',
        using: 'BTREE',
        fields: [
          { name: 'saleId' }
        ]
      },
      {
        name: 'saleDetail_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' }
        ]
      }
    ]
  })

  SaleDetail.associate = function (models) {
    SaleDetail.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' })
    SaleDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
  }

  return SaleDetail
}
