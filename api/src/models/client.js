module.exports = function(sequelize, DataTypes) {
    const Client = sequelize.define('Client', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Nombre".'
          }
        }
      },
      surname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Apellido".'
          }
        }
      },
      telephone: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Teléfono".'
          }
        }
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: {
          args: true,
          msg: 'Ya existe un cliente con ese correo electrónico.'
        }
      },
      town: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      postal_code: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'clients',
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
  
    Client.associate = function(models) {
      // Define las asociaciones con otros modelos aquí, si es necesario
    };
  
    return Client;
};