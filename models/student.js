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
      find:function(userinput,password){
        this.findAll({
          where: {
            email: userinput,
            password:password
          }
        }).then(function(data){
          return data;
        });
      }

    }
  });
  return Student;
};
