'use strict';

module.exports = function (sequelize, DataTypes) {
  var Chapter = sequelize.define('Chapter', {
    name: DataTypes.STRING,
    videoUrl: DataTypes.STRING,
    courseId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Chapter.belongsTo(models.Course, {foreignKey: {name:'id'}});
      },
      findChaptersData: function (callback) {
        this.findAll({attributes: ['id', 'courseId', 'name', 'videoUrl']})
          .then(function (datas) {
            var result = [];
            datas.forEach(function(data) {
              result.push(data.dataValues);
            });
            callback(result);
          });
      }
    }
  });
  return Chapter;
};
