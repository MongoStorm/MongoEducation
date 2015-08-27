'use strict';

$(document).ready(function () {

  var $email = $('#email');

  $($email).on('blur', function () {

    if ($email.val() === '') {
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'block');

      return ;
    }

    var JUDGE = /^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

    if (JUDGE.test($email.val()) == false) {
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'block');

      return ;
    } else {
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'none');
      return ;
    }

  });

  var PASSWORD = /^(\w){6,20}$/;
  var $password = $('#password');

  $($password).on('blur',function(){

    if (PASSWORD.test($password.val()) === false) {
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'none');
      $('#password-error').css('display', 'block');

      return;
    }else{
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'none');
      $('#password-error').css('display', 'none');
    }

  });

  $('#confirm').on('blur',function(){

    if ($password.val() !== $('#confirm').val()) {
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'none');
      $('#password-error').css('display', 'none');
      $('#confirm-error').css('display', 'block');

      return ;

    }else{
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'none');
      $('#password-error').css('display', 'none');
      $('#confirm-error').css('display', 'none');
    }
  });

  $('#sign-up').on('click', function () {
    if($email.val() === ''){
      $('#email-null').css('display', 'block');
      return ;
    }
    if($password.val() === ''){
      $('#password-error').css('display', 'block');
      return ;
    }
    if($('#confirm').val() === ''){
      $('#confirm-error').css('display', 'block');

      return ;
    }

    $.post("/register/judge",
      {
        email: $email.val()
      },
      function(isExist){
        if(isExist){
          $('#email-repeat').css('display', 'block');
        }else{
          $('form').submit();
        }
      });

  });
});
