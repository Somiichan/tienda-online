module.exports = function (sequelize, DataTypes) {
  const Email = sequelize.define('Email', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subject: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Asunto".'
        }
      }
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Contenido".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'emails',
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
      }
    ]
  })

  Email.associate = function (models) {
    Email.hasMany(models.SentEmail, { as: 'sentEmails', foreignKey: 'emailId' })
    Email.belongsToMany(models.Customer, { through: models.SentEmail, as: 'customers', foreignKey: 'emailId' })
  }

  return Email
}
