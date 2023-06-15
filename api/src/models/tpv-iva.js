module.exports = function (sequelize, DataTypes) {
    const Iva = sequelize.define('Iva', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        vigente: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        multiplicador: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        }
    }, {
        sequelize,
        timestamps: true,
        paranoid: false,
        tableName: 'ivas',
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

    Iva.associate = function (models) {
        Iva.hasMany(models.Precio, { as: 'IvaPrecio', foreignKey: 'iva_id'});
    }

    return Iva
}