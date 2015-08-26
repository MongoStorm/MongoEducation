'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      add:function(email,password){
         Student.create({email:email,password:password});
        },
      verify:function(email,password,callback){
        this.findAll({
          where: {
            email: email,
            password: password
          }
        }).then(function(data){
          callback(data.length > 0);
        })
      }
    }
  });
  return Student;
};
