'use strict';

var TeacherHelper = require('../helpers/teacher-helper');

function TeacherController() {

}

TeacherController.prototype.show = function(req, res) {
  var teacherHelper = new TeacherHelper();

  teacherHelper.queryCourses(function(courses){
    res.render('teacher-profile',{courses: courses});
  });


};

module.exports = TeacherController;
