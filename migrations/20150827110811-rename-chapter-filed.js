'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('Chapters', 'CourseId', 'courseId')
  },

  down: function (queryInterface, Sequelize) {

  }
};
