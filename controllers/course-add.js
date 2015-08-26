'use strict';

function CourseAddController() {}

CourseAddController.prototype.new = function (req,res) {
  res.render('course-add');
};

module.exports = CourseAddController;
