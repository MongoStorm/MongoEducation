'use strict';

var express = require('express');
var router = express.Router();
var ChapterController = require('../../../../../controllers/chapter');

var chapterController = new ChapterController();
router.get('/',chapterController.detail);

module.exports = router;
