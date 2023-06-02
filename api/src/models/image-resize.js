module.exports = function(sequelize, DataTypes) {

    const ImageResize = sequelize.define('ImageResize', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        imageId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'Image',
                key: 'id'
            },
        },
        imageConfigurationId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'ImageConfiguration',
                key: 'id'
            },
        },
        title: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        alt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entityKey: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        languageAlias: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mimeType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sizeBytes: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        widthPx: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        heightPx: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        quality: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'image_resizes',
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

    ImageResize.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return ImageResize;
};