'use strict';

var TeacherHelper = require('../helpers/teacher-helper');

function TeacherController() {

}

TeacherController.prototype.index = function(req, res) {
  var teacherHelper = new TeacherHelper();

  teacherHelper.queryCourses(function(courses){
    console.log(courses);
    res.render('teacher-profile',{courses: courses});
  });


};

module.exports = TeacherController;
