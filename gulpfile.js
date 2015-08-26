var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;

gulp.task('init', function () {

  exec('node ./seeds/insert-course-items.js', function (err) {
    if(err){
      throw err;
    }
    console.log('插入数据成功!');
  });

});

gulp.task('start', function() {
  nodemon({
      script: './bin/www',
      ext: 'jade js sql json',
      ignore: ['public/*']
    })
    .on('restart', function() {
      console.log('restarted!');
    });

});
