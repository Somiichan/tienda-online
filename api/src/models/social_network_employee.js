const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const SocialNetworksEmployees = sequelize.define('SocialNetworksEmployees', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        socialNetworkId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        employeeId: {
            allowNull:false,
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        tableName: 'socialNetworksEmployees',
        timestamps: true,
        paranoid: true,
        indexes: []
    });


    SocialNetworksEmployees.associate = function(models) {
    };

    return SocialNetworksEmployees;
};