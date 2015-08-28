'use strict';

$(function () {

  $('#studentSubmit').on('click', function () {

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

  });


  $('#teacherSubmit').on('click', function () {

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
