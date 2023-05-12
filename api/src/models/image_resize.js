module.exports = function(sequelize, DataTypes) {
    const ImageResize = sequelize.define('ImageResize', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      imageOriginalId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      imageConfigurationId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
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
        type: DataTypes.CHAR(2),
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
        type: DataTypes.ENUM('desktop', 'mobile', 'preview'),
        allowNull: false
      },
      sizeBytes: {
        type: DataTypes.INTEGER.UNSIGNED,
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
      tableName: 'image_resizes',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }]
        }
      ]
    });
  
    ImageResize.associate = function(models) {
      // Define las asociaciones con otros modelos aquí, si es necesario
    };
  
    return ImageResize;
  };