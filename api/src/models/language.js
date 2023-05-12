module.exports = function(sequelize, DataTypes) {
    const Language = sequelize.define('Language', {
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
        abbreviation: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: {
                args: true,
                msg: 'Ya existe un idioma con esa abreviatura.'
            },
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Abreviatura".'
                }
            }
        }
    }, {
      sequelize,
      tableName: 'languages',
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
        {
          name: "abbreviation",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "abbreviation" },
          ]
        },
      ]
    });
  
    Language.associate = function(models) {
      // Define las asociaciones con otros modelos aquí, si es necesario
    };
  
    return Language;
};