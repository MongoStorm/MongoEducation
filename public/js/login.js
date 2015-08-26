$(document).ready(function () {
  $('#studentsubmit').on('click', function () {
    $.ajax({
      type: "POST",
      url: "/login",
      data: {
        userInput: $("#email").val(),
        password: $("#studentpassword").val(),
        userIdentity:'student'
      },
      dataType: "json",
      complete: function (data) {

      }

    });
  });


  $('#teachersubmit').on('click', function () {
    $.ajax({
      type: "POST",
      url: "/login",
      data: {
        userInput: $("#employeeId").val(),
        password: $("#teacherpassword").val(),
        userIdentity:'teacher'
      },
      dataType: "json",
      complete: function (data) {

      }
    });
  });
});

