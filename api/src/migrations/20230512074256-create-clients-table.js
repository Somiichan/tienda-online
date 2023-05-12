'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      surname: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING(255)
      },
      town: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      postal_code: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('clientes');
  }
};