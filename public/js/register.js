'use strict';

$(document).ready(function(){

  var $email = $('#email');

  $($email).on('blur',function(){

    if($email.val() === ''){
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'block');

      return ;
    }

    var JUDGE=/^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

    if(JUDGE.test($email.val()) == false){
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'block');

      return ;
    }else{
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'none');
      return ;
    }

  });

  $('#sign-up').on('click',function(){



    var PASSWORD = /^(\w){6,20}$/;
    var $password = $('#password').val();
    if(PASSWORD.test($password) === false){
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'none');
      $('#password-error').css('display','block');

      return ;
    }

    if($password !== $('#conifrm').val()){
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'none');
      $('#password-error').css('display','none');
      $('#confirm-error').css('display','block');

      return ;
    }

    $('form').submit();
  });
});
