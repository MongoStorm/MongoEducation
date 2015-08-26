'use strict';

var Course = require('../models/index').Course;
var Chapter = require('../models/index').Chapter;

function CourseAddController() {}

CourseAddController.prototype.show = function(req, res) {
  res.render('course-add');
};

CourseAddController.prototype.new = function(req, res) {
  Course.create({name: req.body.course_name, description: req.body.course_desc});
  for(var i = 0; i < req.body.chapter_name.length; i++) {
    Chapter.create({name: req.body.chapter_name[i], videoUrl: req.body.commit_file[i]});
  }
  res.render('course-add');
};

module.exports = CourseAddController;
