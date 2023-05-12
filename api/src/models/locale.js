module.exports = function(sequelize, DataTypes) {

  const Locale = sequelize.define('Locale', {
      id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
      },
      languageAlias: {
          type: DataTypes.CHAR(2),
          unique: true,
          allowNull: false
      },
      entity: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Entidad".'
            }
        }
      },
      entityKey: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      key: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Clave".'
            }
        }
      },
      value: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'locales',
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
  
  Locale.associate = function(models) {
  };

  return Locale;

};