'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Course.hasMany(models.Chapter,{as: 'Chapter'});
        Course.belongsTo(models.Teacher,{as: 'Teacher'});
      }
    }
  });
  return Course;
};
