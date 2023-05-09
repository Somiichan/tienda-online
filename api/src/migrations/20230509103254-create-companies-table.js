'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fiscal_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comercial_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nif: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comercial_address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fiscal_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postal_code: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true
      },
      web: {
        allowNull: true,
        type: Sequelize.STRING
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('companies');
  }
};
