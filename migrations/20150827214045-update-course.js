'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Courses','categoryId', {
      type:Sequelize.STRING,
      defaultValue: ''
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Courses','categoryId');
  }
};
