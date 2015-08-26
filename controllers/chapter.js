'use strict';

function ChapterController() {

}

ChapterController.prototype.show = function(req,res) {

  res.render('chapter');
};

module.exports = ChapterController;
