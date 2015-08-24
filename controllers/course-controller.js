'use strict'

function CourseController() {

}

CourseController.prototype.index = function(req,res) {
  res.render('_course');
};

module.exports = CourseController;
