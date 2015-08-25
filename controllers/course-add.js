'use strict';

function CourseAddController() {}

CourseAddController.prototype.create = function (req,res) {
  res.render('course-add');
};

module.exports = CourseAddControllerr;
