'use strict';

module.exports = function (sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Course.hasMany(models.Chapter, {as: 'Chapter'});
        Course.belongsTo(models.Teacher, {as: 'Teacher'});
      },
      findByTeacherId: function (page, count, search, callback) {
        this.findAndCount({
          where: {
            teacherId: 1,
            name: {
              $like:'%' + search + '%'
            }
          },
          limit: count,
          offset: (page - 1) * count
        }).then(function (courses) {
          callback(courses);
        });
      },
      findCoursesData: function (callback) {
        this.findAll({attributes: ['id', 'name', 'description']})
          .then(function (datas) {
            var result = [];

            datas.forEach(function (data) {
              result.push(data.dataValues);
            });

            callback(result);
          });
      },
      deleteById: function (courseId, callback) {
        this.destroy({
          where: {
            id: courseId
          }
        }).then(callback);
      },
      interCourseData: function (name, description) {
        this.create({name: name, description: description});
      },
      pageAll: function (pageSize, pageIndex, callback) {

        this.findAndCountAll({offset: pageIndex * pageSize, limit: pageSize}).then(function (result) {
          var totalPages = Math.ceil(result.count / pageSize);
          var courses = result.rows;
          callback(totalPages, courses);
        });
      },
      queryAndPage: function (pageSize, pageIndex, query, callback) {

        this.findAndCountAll({where:{name: {$like: '%' + query + '%'}},offset: pageIndex * pageSize, limit: pageSize}).then(function (result) {
          var totalPages = Math.ceil(result.count / pageSize);
          var courses = result.rows;
          callback(totalPages, courses);
        });
      }
    }
  });
  return Course;
};
