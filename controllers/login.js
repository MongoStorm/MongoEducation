'use strict'

function LoginController() {

}

LoginController.prototype.index = function(req,res) {
  res.render('login');
};

module.exports = LoginController;
