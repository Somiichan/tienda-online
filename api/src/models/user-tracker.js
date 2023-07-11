module.exports = function (sequelize, DataTypes) {
    const UserTracker = sequelize.define('UserTracker', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userIp: {
                type: DataTypes.STRING,
                allowNull: false
        },
        resource: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        method: {
                type: DataTypes.STRING,
                allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'users_tracker',
        timestamps: true,
        paranoid: true,
        indexes: [
        ]
    });
  
    UserTracker.associate = function (models) {
    };
  
    return UserTracker
};