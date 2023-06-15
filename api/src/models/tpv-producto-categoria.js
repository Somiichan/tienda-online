module.exports = function (sequelize, DataTypes) {

    const ProductoCategoria = sequelize.define('ProductoCategoria', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen_url: {
            type: DataTypes.STRING(255),
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
      tableName: 'productos_categorias',
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
  
    ProductoCategoria.associate = function (models) {
      ProductoCategoria.hasMany(models.Producto, { as: 'CategoriaProducto', foreignKey: 'categoria_id' })
    }
  
    return ProductoCategoria
}
  