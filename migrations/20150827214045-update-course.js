'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Courses','categoryId', {
      type:Sequelize.INTEGER,
      defaultValue: 0
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Courses','categoryId');
  }
};
