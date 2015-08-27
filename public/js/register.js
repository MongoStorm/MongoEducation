'use strict';

$(function () {
  var email = false,
    password = false,
    confirm = false;

  var $email = $('#email');

  $($email).on('blur', function () {

    if ($email.val() === '') {
      $('#email-error').css('display', 'none');
      $('#email-repeat').css('display', 'none');
      $('#email-null').css('display', 'block');

      return;
    }

    var JUDGE = /^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

    if (JUDGE.test($email.val()) == false) {
      $('#email-repeat').css('display', 'none');
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'block');

      return;
    } else {
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'none');
      $('#email-repeat').css('display', 'none');
      email = true;
      return;
    }

  });

  var PASSWORD = /^(\w){6,16}$/;
  var $password = $('#password');

  $($password).on('blur', function () {

    if (PASSWORD.test($password.val()) === false) {
      $('#password-error').css('display', 'block');

      return;
    } else {
      $('#password-error').css('display', 'none');
      password = true;
    }

  });

  $('#confirm').on('blur', function () {

    if ($password.val() !== $('#confirm').val()) {

      $('#confirm-error').css('display', 'block');

      return;

    } else {

      $('#confirm-error').css('display', 'none');
      confirm = true;
    }
  });

  $('#sign-up').on('click', function () {
    if ($email.val() === '') {
      $('#email-null').css('display', 'block');
      return;
    }
    if ($password.val() === '') {
      $('#password-error').css('display', 'block');
      return;
    }
    if ($('#confirm').val() === '') {
      $('#confirm-error').css('display', 'block');

      return;
    }
    if (email && password && confirm) {
      $.post("/register/judge",
        {
          email: $email.val()
        },
        function (res) {
          if (res.isExist) {
            $('#email-repeat').css('display', 'block');
          } else {
            $('form').submit();
          }
        });
    }


  });
});
