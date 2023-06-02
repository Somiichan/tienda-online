module.exports = function(sequelize, DataTypes) {
    const SaleError = sequelize.define('SaleError', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      paymentMethodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PaymentMethod',
          key: 'id'
        },
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customer',
          key: 'id'
        },
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cart',
          key: 'id'
        },
      },
      errorCode: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      errorMessage: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'sale_errors',
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
        },
      ]
    });
  
    SaleError.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
    };
  
    return SaleError;
  };
  