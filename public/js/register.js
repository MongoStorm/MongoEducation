'use strict';

$(document).ready(function(){
  $('#sign-up').on('click',function(){
    var $email = $('#email').val();

    if($email === ''){
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'block');
      return ;
    }
    var JUDGE=/^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

    if(JUDGE.test($email) == false){
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'block');
      return ;
    }
    if($('#password').val() === ''){
      $('#email-error').css('display', 'none');

      return ;
    }

    $('form').submit();
  });
});
