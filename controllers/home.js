'use strict';

function HomeController() {}

HomeController.prototype.index = function (req,res) {
  res.render('index');
};

module.exports = HomeController;
