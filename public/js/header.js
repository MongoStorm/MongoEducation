$(function () {
  var id = $.cookie('id');
  var type = $.cookie('type');
  if (id === undefined || id === '') {
    return;
  }
  if (type === undefined || type === '') {
    return;
  }

  var type = $.cookie('type');
  $('.userInfo').prepend('你好：', id);
  $('.dropdown-menu').empty().prepend('<li><a id="exit" href="/login/logout">注销</a></li>');

  if (type === 'teacher') {
    $('.dropdown-menu').prepend('<li><a href="/profile">个人中心</a></li>');
  }
  $('.offline').css('display', 'none');
  $('.online').css('display', 'block');
});
