'use strict';
function TeacherController() {

}

TeacherController.prototype.index = function(req, res) {
  res.render('teacher-profile');
};

module.exports = TeacherController;
