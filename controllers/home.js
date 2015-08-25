'use strict';

function HomeController() {}

HomeController.prototype.create = function (req,res) {
  res.render('index');
};

module.exports = HomeController;
