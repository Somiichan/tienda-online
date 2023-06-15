module.exports = function (sequelize, DataTypes) {
    const Producto = sequelize.define('Producto', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        nombre: {
          allowNull: false,
          type: DataTypes.STRING(255),
        },
        imagen_url: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        categoria_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'ProductoCategoria',
            key: 'id'
          }
        },
        visible: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        activo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        }
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      tableName: 'productos',
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
  
    Producto.associate = function (models) {
      Producto.belongsTo(models.ProductoCategoria, { as: 'CategoriaProducto', foreignKey: 'categoria_id' })
      Producto.hasOne(models.Precio, { as: 'PrecioProducto', foreignKey: 'producto_id' })
    }
  
    return Producto
}