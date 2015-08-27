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
        if(data.responseJSON.isTrue){
         location.href='/';
        }
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
        if(data.responseJSON.isTrue){
         location.href='/';
        }
      }
    });
  });

  $('#userTab').on('click',function(event){
    if(event.target.id === 'student'){
      $('#student').prop('class','btn current');
      $('#teacher').prop('class','btn btn-default');
    }else if(event.target.id === 'teacher'){
      $('#student').prop('class','btn btn-default');
      $('#teacher').prop('class','btn current');
    }
  });
});
