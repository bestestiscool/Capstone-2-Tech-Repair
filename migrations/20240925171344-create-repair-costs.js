'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('repair_costs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      repair_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      estimated_time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('repair_costs');
  }
};
