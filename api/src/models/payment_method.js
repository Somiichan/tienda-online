module.exports = function(sequelize, DataTypes) {
    const PaymentMethod = sequelize.define('PaymentMethod', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visible: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: 1
        }
    }, {
      sequelize,
      tableName: 'payment_methods',
      timestamps: true,
      paranoid: true
    });
  
    return PaymentMethod;
};