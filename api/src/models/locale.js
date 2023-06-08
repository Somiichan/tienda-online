module.exports = function (sequelize, DataTypes) {
  const Locale = sequelize.define('Locale', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    languageAlias: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    entity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    entityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unsigned: true
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'locales',
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
        name: 'locale_languageAlias_entity_entityKey_key_idx',
        using: 'BTREE',
        fields: [
          { name: 'languageAlias' },
          { name: 'entity' },
          { name: 'entityKey' },
          { name: 'key' }
        ]
      }
    ]
  })

  Locale.associate = function (models) {

  }

  return Locale
}
