'use strict';
var data = require('../config/config.json');
function CourseDataHelper() {

}

CourseDataHelper.prototype.getCourseData = function(callback) {

  var mysql = require('mysql');

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
    var chapters = [];
    var formatCourses = [];
    for(var i = 0; i < courses.length; i++) {

      if(chapters[courses[i].id]) {
        chapters[courses[i].id].push({chapterName:courses[i].chapterName, videoUrl:courses[i].videoUrl });
      }
      else {
        chapters[courses[i].id] = [];
        chapters[courses[i].id].push({chapterName:courses[i].chapterName, videoUrl:courses[i].videoUrl });
      }

      formatCourses[courses[i].id-1] = {name:courses[i].name, description:courses[i].description,
        chapters:chapters[courses[i].id]};

    }
    callback(formatCourses);
  });
};

module.exports = CourseDataHelper;



