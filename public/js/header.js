'use strict';

$(function () {
  var id = $.cookie('id');
  var type = $.cookie('type');
  if (!(id && type)) {
    return;
  }

  $('.userInfo').prepend('你好：', id);
  var $dropdownMenu = $('.dropdown-menu');
  $dropdownMenu.empty().prepend('<li><a id="exit" href="/logout">注销</a></li>');

  if (type === 'teacher') {
    $dropdownMenu.prepend('<li><a href="/management/courses ">个人中心</a></li>');
  }

  $('.offline').toggle();
  $('.online').toggle();
});
