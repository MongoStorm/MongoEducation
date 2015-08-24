'use strict';

var db = require('../models/index');

db.Course.create({name: 'bootstrap', description: 'Bootstrap'}).then(function (bootstrap) {
  db.Chapter.bulkCreate([{name: 'first', videoUrl:'http://pan.baidu.com/s/1jGrNXB4'}, {name: 'second', videoUrl:'http://pan.baidu.com/s/1bnns5OF'}])
    .then(function () {
      db.Chapter.findAll().then(function (chapters) {
        bootstrap.setChapter(chapters);
      });
    });
});
