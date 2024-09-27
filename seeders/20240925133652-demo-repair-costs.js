'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Clear the table before inserting new data
    await queryInterface.bulkDelete('repair_costs', null, {});

    await queryInterface.bulkInsert('repair_costs', [
      // iPhone Models
      { device_type: 'Phone', model: 'iPhone 12', repair_type: 'Cracked Screen', cost: 250, estimated_time: '1-2 hours', createdAt: new Date(), updatedAt: new Date() },
      { device_type: 'Phone', model: 'iPhone 12', repair_type: 'Battery Issue', cost: 150, estimated_time: '1-2 hours', createdAt: new Date(), updatedAt: new Date() },
      { device_type: 'Phone', model: 'iPhone 12', repair_type: 'Water Damage', cost: 300, estimated_time: '1-2 days', createdAt: new Date(), updatedAt: new Date() },
      
      // Samsung Models
      { device_type: 'Phone', model: 'Samsung Galaxy S21', repair_type: 'Cracked Screen', cost: 270, estimated_time: '1-2 hours', createdAt: new Date(), updatedAt: new Date() },
      { device_type: 'Phone', model: 'Samsung Galaxy S21', repair_type: 'Battery Issue', cost: 140, estimated_time: '1-2 hours', createdAt: new Date(), updatedAt: new Date() },

      // Google Pixel Models
      { device_type: 'Phone', model: 'Google Pixel 5', repair_type: 'Cracked Screen', cost: 230, estimated_time: '1-2 hours', createdAt: new Date(), updatedAt: new Date() },

      // MacBook Models
      { device_type: 'Laptop', model: 'MacBook Pro (2020)', repair_type: 'Cracked Screen', cost: 600, estimated_time: '1-2 days', createdAt: new Date(), updatedAt: new Date() },
      { device_type: 'Laptop', model: 'MacBook Pro (2020)', repair_type: 'Battery Issue', cost: 200, estimated_time: '1-2 hours', createdAt: new Date(), updatedAt: new Date() },

      // Dell Models
      { device_type: 'Laptop', model: 'Dell XPS 13', repair_type: 'Cracked Screen', cost: 500, estimated_time: '1-2 days', createdAt: new Date(), updatedAt: new Date() },
      { device_type: 'Laptop', model: 'Dell XPS 13', repair_type: 'Battery Issue', cost: 160, estimated_time: '1-2 hours', createdAt: new Date(), updatedAt: new Date() },

      // Add more devices and repair types here...
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('repair_costs', null, {});
  }
};
