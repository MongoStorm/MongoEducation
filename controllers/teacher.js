'use strict';

var db = require('../models/index');

function TeacherController() {
  this.demo = 'test';
}

TeacherController.prototype.show = function(req, res) {

  db.Course.findByTeacherId(function(courses){
    res.render('teacher-profile',{courses: courses});
  });

};

TeacherController.prototype.delete = function(req, res) {

  db.Course.deleteById(req.body.courseId, function(){
   res.send();
  });
};


module.exports = TeacherController;
