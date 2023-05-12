'use strict';

module.exports = (sequelize, DataTypes) => {
  const OriginalImage = sequelize.define('OriginalImage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    fileName: {
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
    sizeBytes: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    widthPx: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false
    },
    heightPx: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'original_images',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: ['id']
      }
    ]
  });

  OriginalImage.associate = function(models) {
    // Define las asociaciones con otros modelos aquí, si es necesario
  };

  return OriginalImage;
};