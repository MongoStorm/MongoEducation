'use strict';

function ChapterController() {

}

ChapterController.prototype.show = function(req,res) {
  console.log(req.params.chapter_id);
  res.render('chapter');
};

module.exports = ChapterController;
