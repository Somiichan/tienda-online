module.exports = function(sequelize, DataTypes) {
  const CartDetail = sequelize.define('CartDetail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cart',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, ingresa el nombre del producto.'
        }
      }
    },
    basePrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, ingresa el precio base.'
        }
      }
    },
    taxPrice: {
      type: DataTypes.DECIMAL(6, 2)
    },
    unitOfMeasurement: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, ingresa la unidad de medida.'
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, ingresa la cantidad.'
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'CartDetail',
    tableName: 'cart_details',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },{
        name: "cart_details-productId-foreignKey",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productId" },
        ]
      },{
        name: "cart_details-cartId-foreignKey",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cartId" },
        ]
      },
    ]
  });

  CartDetail.associate = function(models) {
    CartDetail.belongsTo(models.Cart, { as: 'cart', foreignKey: 'cartId' });
    CartDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
  };

  return CartDetail;
};
