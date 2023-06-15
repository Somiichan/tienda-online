module.exports = function (sequelize, DataTypes) {
    const Precio = sequelize.define('Precio', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Producto',
                key: 'id'
            }
        },
        iva_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Iva',
                key: 'id'
            }
        },
        precio_base: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        vigente: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      tableName: 'precios',
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
  
    Precio.associate = function (models) {
      Precio.belongsTo(models.Producto, { as: 'PrecioProducto', foreignKey: 'producto_id' }),
      Precio.belongsTo(models.Iva, { as: 'PrecioIva', foreignKey: 'iva_id' })
    }
  
    return Precio
}
  