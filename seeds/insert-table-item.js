'use strict';

var db = require('../models/index');
var video = require('../config/video.json');

db.Course.create({name: 'bootstrap', description: 'Bootstrap'}).then(function (bootstrap) {
  db.Chapter.bulkCreate([{name: 'first', videoUrl:video.path+'1-1.ogg'}, {name: 'second', videoUrl:video.path+'1-2.ogg'}])
    .then(function () {
      db.Chapter.findAll().then(function (chapters) {
        bootstrap.setChapter(chapters);
      });
    });
});
