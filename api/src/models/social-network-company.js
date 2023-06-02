module.exports = function(sequelize, DataTypes) {
    const SocialNetworkCompany = sequelize.define('SocialNetworkCompany', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Company',
                key: 'id'
            },
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "companyId".'
                }
            }
        },
        socialNetworkId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'SocialNetwork',
                key: 'id'
            },
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "socialNetworkId".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'social_networks_companies',
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
            {
                name: "email",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "email" },
                ]
            },
        ]
    });

    SocialNetworkCompany.associate = function(models) {
        SocialNetworkCompany.belongsTo(models.Company, {
            foreignKey: 'companyId',
            as: 'company'
        });

        SocialNetworkCompany.belongsTo(models.SocialNetwork, {
            foreignKey: 'socialNetworkId',
            as: 'socialNetwork'
        });
    };

    return SocialNetworkCompany;
};
