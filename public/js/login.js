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
      $('#student').prop('class','btn btn-default current');
      $('#teacher').prop('class','btn other-options');
    }else if(event.target.id === 'teacher'){
      $('#student').prop('class','btn other-options');
      $('#teacher').prop('class','btn btn-default current');
    }
  });
});
