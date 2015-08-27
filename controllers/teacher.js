'use strict';

var db = require('../models/index');

var formidable = require('formidable'),
  fs = require('fs'),
  TITLE = 'formidable上传示例',
  AVATAR_UPLOAD_FOLDER = '/components/video';

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

TeacherController.prototype.new = function(req, res) {
  res.render('course/new');
};

TeacherController.prototype.create = function(req, res) {
  db.Course.create({name: req.body.course_name, description: req.body.course_desc});
  for(var i = 0; i < (req.body.chapter_name).length; i++) {
    db.Chapter.create({name: req.body.chapter_name[i], videoUrl: req.body.commit_file[i]});
  }
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;
  form.keepExtensions = true;
  form.maxFieldsSize = 2 * 1024 * 1024;

  form.parse(req, function( fields, files) {

    var extName = 'mp4';  //后缀名


    var videoName = Math.random() + '.' + extName;
    var newPath = form.uploadDir + videoName;


    fs.renameSync(files.fulAvatar.path, newPath);  //重命名
  });

  res.locals.success = '上传成功';
  res.render('course/new');
  //res.render('course/new');
};


module.exports = TeacherController;
