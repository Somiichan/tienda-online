module.exports = function (sequelize, DataTypes) {
  const AdminResource = sequelize.define('AdminResource', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    element: {
      type: DataTypes.STRING,
      allowNull: false
    },
    structure: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admin_resources',
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

  AdminResource.associate = function (models) {
    
  }

  return AdminResource
}
