const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define('Employee', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        workPositionId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        socialNetworksId: {
            allowNull: true,
            type:DataTypes.INTEGER,
        },
        profileImageId: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        languageId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                const hashedPassword = useBcrypt.hashSync(value, 10);
                this.setDataValue('password', hashedPassword);
            }
        }
    }, {
        sequelize,
        tableName: 'employees',
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
            }
        ]
    });


    Employee.associate = function(models) {
    };

    return Employee;
};