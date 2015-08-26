'use strict';

var data = require('../config/config.json');
var db = require('../models/index');

function CourseDataHelper() {

}

CourseDataHelper.prototype.getCourseData = function(callback) {

  db.Course.findAll({attributes: ['id', 'name','description']})
    .then(function(courses) {
      callback(getFormatQuery(courses));
    });
};

CourseDataHelper.prototype.getChapterData = function(callback) {

  db.Chapter.findAll({attributes: ['CourseId','name','videoUrl']})
    .then(function(chapters) {
      callback(getFormatQuery(chapters));
    });
};

function getFormatQuery(datas) {
  var result = [];

  datas.forEach(function(data) {
    result.push(data.dataValues);
  });

  return result;
}

module.exports = CourseDataHelper;



