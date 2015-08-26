'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Courses', 'TeacherId', 'teacherId')
  },

  down: function (queryInterface, Sequelize) {

  }
};
