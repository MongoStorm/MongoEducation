'use strict';
module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Course.hasMany(models.Chapter, {as: 'Chapter'});
        Course.belongsTo(models.Teacher,{as: 'Teacher'});
      },
      findByTeacherId: function(callback) {
        this.findAll({
          attributes:['id', 'name'],
          where: {
            TeacherId: 1
          }
        }).then(function(datas) {
          var courses = [];

          datas.forEach(function(data) {
            courses.push(data.dataValues);
          });

          callback(courses);
        });
      }
    }
  });
  return Course;
};
