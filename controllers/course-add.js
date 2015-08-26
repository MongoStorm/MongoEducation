'use strict';

function CourseAddController() {}

CourseAddController.prototype.new = function(req, res) {
  res.render('course-add');
};

CourseAddController.prototype.show = function(req, res) {
  res.render('teacher-profilr')
}

module.exports = CourseAddController;
