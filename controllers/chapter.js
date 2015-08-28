'use strict';

var db = require('../models/index');
var Chapter = db.Chapter;

function ChapterController() {

}

ChapterController.prototype.show = function(req,res) {
  Chapter.findAll().then(function(chaptersInfo){
    var currentCourseId = parseInt(req.params.course_id);
    var currentChapterId = parseInt(req.params.chapter_id);

    var currentChapters = chaptersInfo.filter(function(chapter){
      return chapter.dataValues.CourseId === currentCourseId
    });

    var currentVideoUrl = '';
    currentChapters.forEach(function(chapter){
        if(chapter.dataValues.id === currentChapterId){
          currentVideoUrl = chapter.dataValues.videoUrl;
        }
      });

    var previousChapterId;
    currentChapters.forEach(function(chapter){
      if(chapter.dataValues.id === currentChapterId - 1){
        previousChapterId = chapter.dataValues.id;
      }
    });

    var nextChapterId;
    currentChapters.forEach(function(chapter){
      if(chapter.dataValues.id === currentChapterId + 1){
        nextChapterId = chapter.dataValues.id;
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
