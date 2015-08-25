'use strict';
var data = require('../config/config.json');
var db = require('../models/index');
var Sequelize = require('sequelize');
function CourseDataHelper() {

}

CourseDataHelper.prototype.getCourseData = function(callback) {

  db.Course.findAll({
    include: [{
      model: db.Chapter,
      where: { id :db.Chapter.CourseId }
    }]
  })
    .then(function(courses) {
      //console.log(courses);

      callback(courses);
    });
};

module.exports = CourseDataHelper;



