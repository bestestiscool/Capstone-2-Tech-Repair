'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    code_link: DataTypes.STRING,
    live_demo_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects', 
    freezeTableName: true,  // This is to prevent Sequelize from pluralizing the table name
  });
  return Project;
};
