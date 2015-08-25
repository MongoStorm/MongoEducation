'use strict';

var db = require('./../models/index');

function Register(){

}

Register.prototype.insert = function(email,password){
  db.Student.create({email:email,password:password});
};


module.exports = Register;
