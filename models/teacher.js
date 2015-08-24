'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    EmployeeId: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Teacher;
};
