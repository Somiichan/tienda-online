module.exports = function(sequelize, DataTypes) {
  
    const Cart = sequelize.define('Cart', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      client_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      fingerprint_Id: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    }, {
      sequelize,
      tableName: 'Carts',
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
  
    Cart.associate = function(models) {
      // Define las asociaciones con otros modelos aquí, si es necesario
    };
  
    return Cart;
};