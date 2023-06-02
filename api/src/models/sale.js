module.exports = function(sequelize, DataTypes) {
    const Sale = sequelize.define(
      'Sale',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        cartId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Cart',
            key: 'id'
          },
        },
        customerId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Customer',
            key: 'id'
          },
        },
        paymentMethodId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'PaymentMethod',
            key: 'id'
          },
        },
        reference: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "reference".'
            }
          }
        },
        totalPrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "totalPrice".'
            }
          }
        },
        totalBasePrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "totalBasePrice".'
            }
          }
        },
        totalTaxPrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "totalTaxPrice".'
            }
          }
        },
        issueDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "issueDate".'
            }
          }
        },
        issueTime: {
          type: DataTypes.TIME,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "issueTime".'
            }
          }
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
      },
      {
        sequelize,
        tableName: 'sales',
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
      }
    );
  
    Sale.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
    };
  
    return Sale;
  };
  