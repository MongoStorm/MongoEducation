'use strict';

var db = require('../models/index');

function TeacherController() {

}

TeacherController.prototype.show = function(req, res) {
  var pageIndex = req.query.pageIndex || 1;
  var pageSize = req.query.pageSize || 8;

  db.Course.findByTeacherId(pageIndex, pageSize, function(courses){
    res.render('teacher-profile',{
      "courses": courses.rows,
      "totalPages": courses.count,
      "pageCount": Math.ceil(courses.count / pageSize)
    });
  });

};

TeacherController.prototype.delete = function(req, res) {

  db.Course.deleteById(req.body.courseId, function(){
    res.send();
  });
};


module.exports = TeacherController;
