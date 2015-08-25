$(document).ready(function () {
  $('#studentsubmit').on('click',function(){
    $.ajax({
      type: "POST",
      url: "/login",
      data: {userInput:$("#email").val(), password:$("#studentpassword").val()},
      dataType: "json",
      complete: function(data) {

      },
      statusCode: {
        404: function() {
          alert( "page not found" );
        }
      }

    });
  });


  $('#teachersubmit').on('click',function(){

    $.ajax({
      type: "POST",
      url: "/login",
      data: {userInput:$("#employeeId").val(), password:$("#teacherpassword").val()},
      dataType: "json",
      complete: function(data) {

      },

      statusCode: {
        404: function() {
          alert( "page not found" );
        }
      }

    });
  });


});

