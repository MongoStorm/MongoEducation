'use strict';

var db = require('../models/index');

function CourseAddController() {}

CourseAddController.prototype.new = function(req, res) {
  res.render('course-add');
};

CourseAddController.prototype.show = function(req, res) {
  db.Chapter.insertChapterData(req.chapter_1, 1, req.commit_file_1);
  res.render('profilr');
};

module.exports = CourseAddController;
