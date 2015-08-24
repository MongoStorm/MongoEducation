'use strict'

function ChapterController() {

}

ChapterController.prototype.detail = function(req,res) {
  res.render('courses/chapters/chapter');
};

module.exports = ChapterController;
