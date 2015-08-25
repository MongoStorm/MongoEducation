'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chapter = sequelize.define('Chapter', {
    name: DataTypes.STRING,
    videoUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Chapter.belongsTo(models.Course,{as: 'Course', foreignKey: 'CourseId'});
      }
    }
  });
  return Chapter;
};
