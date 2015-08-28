'use strict';

var Course = require('../models/index').Course;
var Chapter = require('../models/index').Chapter;
var Category = require('../models/index').Category;

var formidable = require('formidable');
var fs = require('fs');
var UPLOAD_FOLDER = require('../config/path').video;

function TeacherController() {

}

TeacherController.prototype.show = function(req, res) {

  var teacherId = req.cookies.teacherId;

  if(!teacherId) {
    res.redirect('/login');
  }

  var pageIndex = req.query.pageIndex || 1;
  var pageSize = req.query.pageSize || 8;
  var search = req.query.search || '';

  Course.findByTeacherId(pageIndex, pageSize, search, teacherId, function(instance){
    res.render('teacher/show',{
      "courses": instance.rows,
      "totalPages": instance.count,
      "pageCount": Math.ceil(instance.count / pageSize),
      "search" : search
    });
  });

};

TeacherController.prototype.delete = function(req, res) {

  Course.deleteById(req.body.courseId, function(){
    res.send();
  });
};

TeacherController.prototype.new = function(req, res) {
  var teacherId = req.cookies.teacherId;

  if(!teacherId) {
    res.redirect('/login');
  }
  res.render('course/create');
};

TeacherController.prototype.create = function(req, res) {
  var teacherId = req.cookies.teacherId;
  Category.findIdByName(req.body.category_child,function(categoryId){

    Course.create({name: req.body.course_name, description: req.body.course_desc,teacherId:teacherId,categoryId:categoryId.toString()}).then(function(){

      Course.findLastId(function(currentId){
        if(typeof(req.body.chapter_name) === 'string'){

          Chapter.create({name: req.body.chapter_name, courseId:currentId, videoUrl: UPLOAD_FOLDER+req.body.showName});

        }else {

          for (var i = 0; i < req.body.chapter_name.length; i++) {
            Chapter.create({name: req.body.chapter_name[i], courseId: currentId, videoUrl: UPLOAD_FOLDER+req.body.showName[i]});
          }

        }
      });
    });
  });

};

TeacherController.prototype.updata = function(req, res) {

  var form = new formidable.IncomingForm();

  form.encoding = 'utf-8';
  form.uploadDir = 'public' + UPLOAD_FOLDER;
  form.keepExtensions = true;
  form.maxFieldsSize = 2 * 1024 * 1024;

  form .on('file', function(field, file) {
    fs.rename(file.path, form.uploadDir + "/" + file.name);
  });

  form.parse(req, function(err,fields, files) {
  });
  res.locals.success = '上传成功';
  res.redirect('/management/courses');
};


module.exports = TeacherController;
