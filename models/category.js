'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      findIdByName: function(name,callback){
        this.find({where:{name:name}}).then(function (result) {
          callback(result.id);
        });
      }
    }

  });
  return Category;
};
