'use strict';

function ChapterController() {

}

ChapterController.prototype.detail = function(req,res) {
  res.render('chapter');
};

module.exports = ChapterController;
