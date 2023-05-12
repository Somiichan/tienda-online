module.exports = function(sequelize, DataTypes) {
    const Tax = sequelize.define('Tax', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vatRate: {
            type: DataTypes.INTEGER(2).UNSIGNED,
            allowNull: false
        },
        valid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
      sequelize,
      tableName: 'taxes',
      timestamps: true,
      paranoid: true
    });
  
    return Tax;
};