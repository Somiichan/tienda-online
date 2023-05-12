module.exports = function(sequelize, DataTypes) {

    const ImageConfiguration = sequelize.define('ImageConfiguration', {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        entity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        directory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        grid: {
            type: DataTypes.ENUM('desktop', 'mobile', 'preview'),
            allowNull: false
        },
        contentAccepted: {
            type: DataTypes.STRING,
            allowNull: false
        },
        extensionConversion: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        widthPx: {
            type: DataTypes.INTEGER(4).UNSIGNED
        },
        heightPx: {
            type: DataTypes.INTEGER(4).UNSIGNED
        },
        quality: {
            type: DataTypes.INTEGER(3).UNSIGNED,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'image-configurations',
        timestamps: true,
        paranoid: true,
    });


    ImageConfiguration.associate = function(models) {
    };

    return ImageConfiguration;
};