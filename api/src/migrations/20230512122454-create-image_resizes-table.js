'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('image_resizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageOriginalId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      imageConfigurationId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      alt: {
        allowNull: false,
        type: Sequelize.STRING
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entityKey: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      languageAlias: {
        allowNull: false,
        type: Sequelize.CHAR(2)
      },
      filename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mimeType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grid: {
        allowNull: false,
        type: Sequelize.ENUM('desktop', 'mobile', 'preview')
      },
      sizeBytes: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      widthPx: {
        type: Sequelize.INTEGER(4).UNSIGNED
      },
      heightPx: {
        type: Sequelize.INTEGER(4).UNSIGNED
      },
      quality: {
        allowNull: false,
        type: Sequelize.INTEGER(3).UNSIGNED
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('image_resizes');
  }
};
