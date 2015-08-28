'use strict';

var db = require('../models/index');
var Chapter = db.Chapter;

function ChapterController() {

}

ChapterController.prototype.show = function(req,res) {
  Chapter.findAll().then(function(chapters){
    var currentCourseId = parseInt(req.params.course_id);
    var currentChapterId = parseInt(req.params.chapter_id);

    var currentChapters = chapters.filter(function(chapter){
      return chapter.dataValues.CourseId === currentCourseId
    });

    var currentVideoUrl = '';
    currentChapters.forEach(function(chapter, index){
        if(index + 1 === currentChapterId){
          currentVideoUrl = chapter.dataValues.videoUrl;
        }
      });

    var previousChapterId;
    currentChapters.forEach(function(chapter, index){
      if(index + 1 === currentChapterId - 1){
        previousChapterId = index + 1;
      }
    });

    var nextChapterId;
    currentChapters.forEach(function(chapter, index){
      if(index +1 === currentChapterId + 1){
        nextChapterId = index + 1;
      }
    });

    res.render('chapter/chapter',{
      currentCourseId : currentCourseId,
      currentVideoUrl : currentVideoUrl,
      previousChapterId : previousChapterId,
      nextChapterId : nextChapterId
    });
  });
};

module.exports = ChapterController;
