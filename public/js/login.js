$(document).ready(function () {

  var email = false;
  var password = false;
  var employeeId = false ;
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

  var $email = $('#email');
  $($email).on('blur',function(){
    if($email.val()===''){
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'block');
      return ;
    }

    var JUDGE = /^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

    if (JUDGE.test($email.val()) == false) {
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'block');

      return ;
    } else {
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'none');
      email = true;
      return ;
    }


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
