'use strict';

function CourseHelper() {

}

CourseHelper.prototype.getFormatData = function(Courses,Chapters) {
  var courses = [];
  Courses.forEach(function(Course) {
    var chapters = [];
    Chapters.forEach(function(Chapter) {
      if(Course.id === Chapter.CourseId) {
        chapters.push({name:Chapter.name, videoUrl:Chapter.videoUrl});
      }
    });
    courses.push({name:Course.name, description:Course.description, chapters: chapters});
  })
  return courses;
};
module.exports = CourseHelper;
