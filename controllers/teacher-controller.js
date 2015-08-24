'use strict';
function TeacherController() {

}

TeacherController.prototype.index = function(req, res) {
  res.render('teacher-profile',{courses: ['第一个课程的名称','第二个课程的名称','第三个课程的名称']});
};

module.exports = TeacherController;
