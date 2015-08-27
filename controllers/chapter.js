'use strict';

var db = require('../models/index');
var Chapter = db.Chapter;

function ChapterController() {

}

ChapterController.prototype.show = function(req,res) {
  Chapter.findAll().then(function(chaptersInfo){
    var thisCourseId = parseInt(req.params.course_id);
    var thisChapterId = parseInt(req.params.chapter_id);

    var thisChapters = chaptersInfo.filter(function(chapter){
      return chapter.dataValues.courseId === thisCourseId
    });

    var thisVideoUrl = '';
    thisChapters.forEach(function(chapter){
        if(chapter.dataValues.id === thisChapterId){
          thisVideoUrl = chapter.dataValues.videoUrl;
        }
      });

    var lastChapterId;
    thisChapters.forEach(function(chapter){
      if(chapter.dataValues.id === thisChapterId - 1){
        lastChapterId = chapter.dataValues.id;
      }
    });

    var nextChapterId;
    thisChapters.forEach(function(chapter){
      if(chapter.dataValues.id === thisChapterId + 1){
        nextChapterId = chapter.dataValues.id;
      }
    });

    res.render('chapter/chapter',{
      thisCourseId : thisCourseId,
      thisVideoUrl : thisVideoUrl,
      lastChapterId : lastChapterId,
      nextChapterId : nextChapterId
    });
  });
};

module.exports = ChapterController;
