'use strict';

var db = require('../models/index');

function CourseAddController() {}

CourseAddController.prototype.show = function(req, res) {
  res.render('course-add');
};

CourseAddController.prototype.new = function(req, res) {
  db.Course.interCourseData(req.body.course_name, req.body.course_desc);
  res.render('course-add');
};

module.exports = CourseAddController;
