$(function () {
  var id = $.cookie('id');
  if(id === 'null' || id === undefined){
    return;
  }

  var type = $.cookie('type');
  $('.userInfo').prepend('你好：',id);
  $('.dropdown-menu').empty().prepend('<li><a id="exit" href="/">注销</a></li>');

  if(type === 'teacher'){
    $('.dropdown-menu').prepend('<li><a href="/profile">个人中心</a></li>');
  }
  $('.offline').css('display','none');
  $('.online').css('display','block');

  $('#exit').on('click',function(){
    $.cookie('id',null);
    $.cookie('type',null);
    window.location.href='localhost:3000';
  });
});
