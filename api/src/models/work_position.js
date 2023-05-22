const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const WorkPosition = sequelize.define('WorkPosition', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'workPositions',
        timestamps: true,
        paranoid: true,
        indexes: [ {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
            ]
        }]
    });


    WorkPosition.associate = function(models) {
    };

    return WorkPosition;
};