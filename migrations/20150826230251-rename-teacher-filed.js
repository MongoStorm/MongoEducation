'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Teachers', 'EmployeeId', 'employeeId')
  },

  down: function (queryInterface, Sequelize) {

  }
};
