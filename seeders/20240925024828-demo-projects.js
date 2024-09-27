'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert sample data into the 'projects' table (lowercase if you used Sequelize's default)
    
    // Clear the table before inserting new data
    await queryInterface.bulkDelete('projects', null, {});

    await queryInterface.bulkInsert('projects', [
      {
        name: 'First Project',
        description: 'This is the first sample project created using a seeder',
        code_link: 'https://github.com/bestestiscool/Unit_42_Hatchaway_Snack_or_booze',
        live_demo_link: 'https://first-project-demo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Second Project',
        description: 'This is the second sample project created using a seeder',
        code_link: 'https://github.com/bestestiscool/Unit_41.3_React_History_exercise_jokes',
        live_demo_link: 'https://second-project-demo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all entries from the 'projects' table (lowercase for consistency)
    await queryInterface.bulkDelete('projects', null, {});
  }
};
