module.exports = function(sequelize, DataTypes) {
    const SentEmail = sequelize.define('SentEmail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customer',
          key: 'id'
        },
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "customerId".'
          }
        }
      },
      emailId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Email',
          key: 'id'
        },
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "emailId".'
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
    }, {
      sequelize,
      tableName: 'sent_emails',
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
  
    SentEmail.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
    };
  
    return SentEmail;
  };
  