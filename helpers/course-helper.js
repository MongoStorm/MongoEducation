'use strict';

function CourseHelper () {

}

CourseHelper.prototype.getFormatData = function(datas) {
  var courses = [];
  datas.forEach(function(data) {

    var course = data.dataValues;
    var singleCourse = {id:course.id, name:course.name, description:course.description};
    var chapters = [];

    course.Chapters.forEach(function(chapter) {
      chapters.push(chapter.dataValues);
    });

    singleCourse.chapters = chapters;
    courses.push(singleCourse);
    
  });
  return courses;
};

module.exports = CourseHelper;

