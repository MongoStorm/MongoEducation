'use strict';

var db = require('../models/index');

var formidable = require('formidable');
var fs = require('fs');
var UPLOAD_FOLDER = '/components/video';

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

TeacherController.prototype.create = function(req, res) {
  res.render('course/create');
};

TeacherController.prototype.new = function(req, res) {
  var courseId = 0;
  db.Course.create({name: req.body.course_name, description: req.body.course_desc}).then(function(){
    courseId = db.Course.findLastId(function(result){
      courseId = parseInt(result[result.length-1].id);
      console.log(courseId);
      if(typeof(req.body.chapter_name) === 'string'){
        db.Chapter.create({name: req.body.chapter_name, CourseId:courseId, videoUrl: req.body.commit_file});
      }else {
        for (var i = 0; i < req.body.chapter_name.length; i++) {
          db.Chapter.create({name: req.body.chapter_name[i], CourseId: courseId, videoUrl: req.body.commit_file[i]});
        }
      }
    });
  });

  var form = new formidable.IncomingForm();

  form.encoding = 'utf-8';
  form.uploadDir = 'public' + UPLOAD_FOLDER;
  form.keepExtensions = true;
  form.maxFieldsSize = 2 * 1024 * 1024;

  form.parse(req, function( fields, files) {

  });
  res.locals.success = '上传成功';
  res.render('course/create');
};


module.exports = TeacherController;
