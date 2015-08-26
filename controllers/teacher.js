'use strict';

var db = require('../models/index');

function TeacherController() {

}

TeacherController.prototype.show = function(req, res) {

  db.Course.findByTeacherId(function(courses){
    res.render('teacher-profile',{courses: courses});
  });


};

module.exports = TeacherController;
