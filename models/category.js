'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Category;
};
