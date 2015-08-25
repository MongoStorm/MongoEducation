'use strict';

var CourseDataHelper = require('../helpers/course-data-helper');
var Sequelize = require('sequelize');
function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  var courseDataHelper = new CourseDataHelper();
  var courses = courseDataHelper.getCourseData(function(courses) {
    console.log(courses);
    res.render('course',courses);
  });

};

module.exports = CourseController;
