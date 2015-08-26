'use strict';

var db = require('../models/index');

function TeacherController() {

}

TeacherController.prototype.show = function(req, res) {

  db.Course.findByTeacherId(function(courses){
    res.render('teacher-profile',{courses: courses});
  });

};

TeacherController.prototype.delete = function(req, res) {

};

module.exports = TeacherController;
