'use strict';

var db = require('../models/index');

function TeacherController() {
  this.demo = 'test';
}

TeacherController.prototype.show = function(req, res) {
  var page = req.query.page || 1;
  var count = req.query.count || 8;

  db.Course.findByTeacherId(page, count, function(courses){
    res.render('teacher-profile',{
      "courses": courses.course,
      "totalPages": courses.count,
      "pageCount": Math.ceil(courses.count/count)
    });
  });

};

TeacherController.prototype.delete = function(req, res) {

  db.Course.deleteById(req.body.courseId, function(){
   res.send();
  });
};


module.exports = TeacherController;
