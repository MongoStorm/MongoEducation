$(document).ready(function () {
  $('#studentsubmit').on('click', function () {
    console.log('student submit in ');
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
        if(data.responseJSON.judge){
         location.href='/';
        }
      }
    });
  });


  $('#teachersubmit').on('click', function () {
    console.log('tearch submit in ');
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
        if(data.responseJSON.judge){
         location.href='/';
        }
      }
    });
  });
});

