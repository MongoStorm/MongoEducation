'use strict';

$(function () {
  var bemail = false;
  var bstudentPassword = false;
  var bemplyeeId = false;
  var bteacherPassword = false;

  var $email = $('#email');
  $($email).on('blur', function () {
    if ($email.val() === '') {
      showBlock('#email-null');
      bemail = false;
    }
    else {
      hideBlock('#email-null');
      bemail = true;
    }
  });

  var $studentPassword = $('#studentPassword');
  $($studentPassword).keydown(function () {
    hideBlock('#studentPassword-error');
  });

  $($studentPassword).keydown(function () {
    if ($studentPassword.val() === '') {
      showBlock('#studentPassword-null');
      bstudentPassword = false;
    }
    else {
      hideBlock('#studentPassword-null');
      bstudentPassword = true;
    }
  });

  var $employeeId = $('#employeeId');
  $($employeeId).on('blur', function () {
    if ($employeeId.val() === '') {
      showBlock('#employeeId-null');
    }

    var teacherIdValidation = /^[0-9]\d*$/;
    if (teacherIdValidation.test($employeeId.val()) === false) {
      hideBlock('#employeeId-null');
      showBlock('#teacherPassword-error');
      bemplyeeId = false;
    }
    else {
      hideBlock('#employeeId-null');
      bemplyeeId = true;
    }
  });

  var $teacherPassword = $('#teacherPassword');
  $($teacherPassword).keydown(function () {
    if ($teacherPassword.val() === '') {
      hideBlock('#teacherPassword-error');
      showBlock('#teacherPassword-null');
      bteacherPassword = false;
    }
    else {
      hideBlock('#teacherPassword-error');
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
            $('#email').val('');
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
            $('#employeeId').val('');
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
