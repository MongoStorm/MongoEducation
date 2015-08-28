'use strict';
var bcrypt = require('../node_modules/bcrypt-nodejs/bCrypt');
var email = require('regex-box').email;
var PASSWORD_VERIFY = /^(\w){6,16}$/;

module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      verify: function (email, password, callback) {
        this.find({
          where: {
            email: email
          }
        }).then(function (data) {
          if (data) {
            var hash = data.dataValues.password;
            var isTrue = bcrypt.compareSync(password, hash);
            isTrue === true ? callback(data) : callback();
          }
          else {
            callback(data);
          }
        })
      },
      registerVerify: function (registerEmail, registerPassword, callback) {

        if(email.is(registerEmail) && PASSWORD_VERIFY.test(registerPassword)){
          this.findAll({
            where: {
              email: registerEmail
            }
          }).then(function (result) {
            if(result.length < 0){
              callback({isCorrect:true,isExist:false})
            }else{
              callback({isCorrect:true,isExist:true})
            }
          });
        }else{
          callback({isCorrect:false,isExist:null});
        }

      },
      add: function (email, password) {
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(password, salt, null);
        this.create({email: email, password: hash});
      }
    }
  });
  return Student;
};
