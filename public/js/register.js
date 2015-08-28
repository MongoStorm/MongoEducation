'use strict';

$(function () {
  var emailError = true,
    pwdError = true,
    confirmError = true;

  var $email = $('#email');

  $($email).on('blur', function () {

    if ($email.val() === '') {
      showError('email-null');
      return;
    }

    var EMAIL_VERIFY = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;

    if (!EMAIL_VERIFY.test($email.val())) {
      showError('email-error');
      return;
    } else {
      showError();
      emailError = false;

      return;
    }

  });

  var PASSWORD_VERIFY = /^(\w){6,16}$/;
  var $password = $('#password');

  $($password).on('blur', function () {

    if (PASSWORD_VERIFY.test($password.val()) === false) {
      $('#password-error').css('display', 'block');

      return;
    } else {
      $('#password-error').css('display', 'none');
      pwdError = true;
    }

  });

  $('#confirm').on('blur', function () {

    if ($password.val() !== $('#confirm').val()) {

      $('#confirm-error').css('display', 'block');

      return;

    } else {

      $('#confirm-error').css('display', 'none');
      confirmError = true;
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

    if (!emailError && !pwdError && !confirmError) {

      $.post("/register/judge",
        {
          email: $email.val(),
          password: $password.val()
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

function showError(id) {

  var $emailNull = $('#email-null'),
    $emailError = $('#email-error'),
    $emailRepeat = $('#email-repeat');

  $emailNull.css('display', 'none');
  $emailError.css('display', 'none');
  $emailRepeat.css('display', 'none');

  if (id === 'email-null') {
    $emailNull.css('display', 'block');
  } else if (id === 'email-error') {
    $emailError.css('display', 'block');
  } else if (id === 'email-repeat') {
    $emailRepeat.css('display', 'block');
  }

}
