'use strict';

$(function () {

  $('.gotoChapter').on('click', function() {
    location.href ='/courses/' + $(this).attr('name') +'/chapters/' + $(this).val();
  });
});
