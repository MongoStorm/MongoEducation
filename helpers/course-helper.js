'use strict';

function CourseHelper() {

}

CourseHelper.prototype.getFormatData = function (Courses, Chapters) {
  var courses = [];
  Courses.forEach(function (Course) {
    var chapters = [];

    Chapters.forEach(function(Chapter) {
      if(Course.id === Chapter.CourseId) {
        chapters.push({id: Chapter.id, name: Chapter.name, videoUrl: Chapter.videoUrl});
      }
    });
    courses.push({id: Course.id, name: Course.name, description: Course.description, chapters: chapters});
  });

  return courses;
};
module.exports = CourseHelper;
