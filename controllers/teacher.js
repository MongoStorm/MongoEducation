'use strict';

var db = require('../models/index');

function TeacherController() {

}

TeacherController.prototype.show = function(req, res) {
  var pageIndex = req.query.pageIndex || 1;
  var pageSize = req.query.pageSize || 8;
  var search = req.query.search || '';

  db.Course.findByTeacherId(pageIndex, pageSize, search, function(courses){
    res.render('teacher/show',{
      "courses": courses.rows,
      "totalPages": courses.count,
      "pageCount": Math.ceil(courses.count / pageSize),
      "search" : search
    });
  });

};

TeacherController.prototype.delete = function(req, res) {

  db.Course.deleteById(req.body.courseId, function(){
    res.send();
  });
};


module.exports = TeacherController;
