'use strict';
var data = require('../config/config.json');
function CourseDataHelper() {

}

CourseDataHelper.prototype.getCourseData = function(callback) {

  var mysql = require('mysql');
  console.log(data);
  var connection = mysql.createConnection(data);

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected');
  });

  var courses = [];

  var select = 'SELECT Courses.id,Courses.name,Courses.description,cps.name as chapterName,cps.videoUrl FROM Courses' +
    ' LEFT JOIN Chapters cps ON Courses.id = cps.CourseId';

  connection.query(select,function(err,rows) {

    courses = rows;
    console.log(courses);
    callback(courses);
  });



};

module.exports = CourseDataHelper;



