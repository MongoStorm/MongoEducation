'use strict';

$(function () {
  var bemail = false;
  var bstudentPassword = false;
  var bemplyeeId = false;
  var bteacherPassword = false;

  var $email = $('#email');
  $($email).on('blur', function () {
    if ($email.val() === '') {
      hideBlock('#email-error');
      showBlock('#email-null');
      bemail = false;
      return;
    }

    var emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;;
    if (emailValidation.test($email.val()) == false) {
      hideBlock('#email-null');
      showBlock('#email-error');
      bemail = false;
    } else {
      hideBlock('#email-null');
      hideBlock('#email-error');
      bemail = true;
    }
  });

  var $studentPassword = $('#studentPassword');
  $($studentPassword).keydown(function () {
    hideBlock('#studentPassword-error');
  });

  $($studentPassword).keydown(function () {
    if ($studentPassword.val() === '') {
      hideBlock('#studentPassword-error');
      hideBlock('#studentPassword-length');
      showBlock('#studentPassword-null');

      bstudentPassword = false;
      return;
    }

    var studentPasswordValidation = /^(\w){5,16}$/;
    if (studentPasswordValidation.test($studentPassword.val()) === false) {
      hideBlock('#studentPassword-error');
      hideBlock('#studentPassword-null');
      showBlock('#studentPassword-length');
      bstudentPassword = false;
    } else {
      hideBlock('#studentPassword-error');
      hideBlock('#studentPassword-length');
      hideBlock('#studentPassword-error');
      bstudentPassword = true;
    }
  });

  var $employeeId = $('#employeeId');
  $($employeeId).on('blur', function () {
    if ($employeeId.val() === '') {
      hideBlock('#employeeId-error');
      showBlock('#employeeId-null');
      bemplyeeId = false;
      return;
    }

    var teacherIdValidation = /^[0-9]\d*$/;
    if (teacherIdValidation.test($employeeId.val()) === false) {
      hideBlock('#employeeId-null');
      showBlock('#employeeId-error');
      bemplyeeId = false;
    }
    else {
      hideBlock('#employeeId-null');
      hideBlock('#employeeId-error');
      bemplyeeId = true;
    }
  });

  var $teacherPassword = $('#teacherPassword');
  $($teacherPassword).keydown(function () {
    if ($teacherPassword.val() === '') {
      hideBlock('#teacherPassword-error');
      hideBlock('#teacherPassword-length');
      showBlock('#teacherPassword-null');
      bteacherPassword = false;
      return;
    }

    var teacherPasswordValidation = /^(\w){5,15}$/;
    if (teacherPasswordValidation.test($teacherPassword.val()) === false) {
      hideBlock('#teacherPassword-error');
      hideBlock('#teacherPassword-null');
      showBlock('#teacherPassword-length');
      bteacherPassword = false;
    } else {
      hideBlock('#teacherPassword-error');
      hideBlock('#teacherPassword-length');
      hideBlock('#teacherPassword-null');
      bteacherPassword = true;
    }
  });

  $('#studentSubmit').on('click', function () {
    if (bemail && bstudentPassword) {
      $.ajax({
        type: "POST",
        url: "/login",
        data: {
          userInput: $("#email").val(),
          password: $("#studentPassword").val(),
          userType: 'student'
        },
        dataType: "json",
        complete: function (data) {
          if (data.responseJSON.isTrue) {
            location.href = '/';
          }
          else {
            $('#studentPassword').val('');
            showBlock('#studentPassword-error');
          }
        }
      });
    }
  });


  $('#teacherSubmit').on('click', function () {
    if (bemplyeeId && bteacherPassword) {
      $.ajax({
        type: "POST",
        url: "/login",
        data: {
          userInput: $("#employeeId").val(),
          password: $("#teacherPassword").val(),
          userType: 'teacher'
        },
        dataType: "json",
        complete: function (data) {
          if (data.responseJSON.isTrue) {
            location.href = '/';
          }
          else {
            $('#teacherPassword').val('');
            showBlock('#teacherPassword-error');
          }
        }
      });
    }
  });

  $('#userTab').on('click', function (event) {
    if (event.target.id === 'student') {
      $('#student').prop('class', 'btn btn-default current');
      $('#teacher').prop('class', 'btn other-options');
    } else if (event.target.id === 'teacher') {
      $('#student').prop('class', 'btn other-options');
      $('#teacher').prop('class', 'btn btn-default current');
    }
  });

  function showBlock($blockName) {
    $($blockName).css('display', 'block');
  }

  function hideBlock($blockName) {
    $($blockName).css('display', 'none');
  }
});
