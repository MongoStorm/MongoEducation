'use strict';
var db = require('../models/index');

function TeacherHelper() {

}

TeacherHelper.prototype.queryCourses = function(callback) {
  db.Course.findAll({
    attributes:['id', 'name'],
    where: {
      TeacherId: 1
    }
  }).then(function(courses) {
    callback(getCourses(courses));
  });
};

function getCourses(datas) {
  var courses = [];

  datas.forEach(function(data) {
    courses.push(data.dataValues);
  });

  return courses;
}

module.exports = TeacherHelper;
