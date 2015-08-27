$(document).ready(function () {

  var email = false;
  var password = false;
  var emplyeeId = false;
  var teacherpassword =false;

  var $email = $('#email');
  $($email).on('blur', function () {
    if ($email.val() === '') {
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'block');
      email = false;
      return;
    }
    var JUDGE = /^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

    if (JUDGE.test($email.val()) == false) {
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'block');
      email = false;
      return;
    } else {
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'none');
      email = true;
      return;
    }
  });


  $("#studentpassword").keydown(function () {
    $('#password-error').css('display', 'none');
  });

  var PASSWORD = /^(\w){6,16}$/;
  var $password = $('#studentpassword');
  $($password).keydown(function () {
    if ($password.val() === '') {
      $('#password-error').css('display', 'none');
      $('#password-length').css('display', 'none');
      $('#password-null').css('display', 'block');
      password = false;
      return;
    }

    if (PASSWORD.test($password.val()) === false) {
      $('#password-error').css('display', 'none');
      $('#password-null').css('display', 'none');
      $('#password-length').css('display', 'block');
      password = false;
      return;
    } else {
      $('#password-error').css('display', 'none');
      $('#password-length').css('display', 'none');
      $('#password-null').css('display', 'none');
      password = true;
      return;
    }

  });

  var empoyeeIdregularexpression = /^[1-9]\d*|0$/;
  var $employeeId = $('#employeeId');
  $($employeeId).on('blur', function () {
    if ($employeeId.val() === '') {
      $('#employeeId-error').css('display','none');
      $('#employeeId-null').css('display', 'block');
      emplyeeId = false;
      return;
    }

    if(empoyeeIdregularexpression.test($employeeId.val())===false){

      $('#employeeId-null').css('display', 'none');
      $('#employeeId-error').css('display','block');
      emplyeeId = false;
      return
    }
    else {
      $('#employeeId-error').css('display','none');
      $('#employeeId-null').css('display', 'none');
      emplyeeId = true;
      return;
    }
  });


  var teacherPASSWORD = /^(\w){5,16}$/;
  var $teacherpassword = $('#teacherpassword');
  $($teacherpassword).keydown(function () {
    if ($teacherpassword.val() === '') {
      $('#teacherpassword-error').css('display', 'none');
      $('#teacherpassword-length').css('display', 'none');
      $('#teacherpassword-null').css('display', 'block');
      teacherpassword = false;
      return;
    }

    if (teacherPASSWORD.test($teacherpassword.val()) === false) {
      $('#teacherpassword-error').css('display', 'none');
      $('#teacherpassword-null').css('display', 'none');
      $('#teacherpassword-length').css('display', 'block');
      teacherpassword = false;
      return;
    } else {
      $('#teacherpassword-error').css('display', 'none');
      $('#teacherpassword-length').css('display', 'none');
      $('#teacherpassword-null').css('display', 'none');
      teacherpassword = true;
      return;
    }

  });


  $('#studentsubmit').on('click', function () {
    if (password && email) {
      $.ajax({
        type: "POST",
        url: "/login",
        data: {
          userInput: $("#email").val(),
          password: $("#studentpassword").val(),
          userIdentity: 'student'
        },
        dataType: "json",
        complete: function (data) {
          if (data.responseJSON.isTrue) {
            location.href = '/';
          }
          else {
            $('#studentpassword').val('');
            $('#password-error').css('display', 'block');
          }
        }
      });
    }
  });


  $('#teachersubmit').on('click', function () {
     if(emplyeeId && teacherpassword){
       $.ajax({
         type: "POST",
         url: "/login",
         data: {
           userInput: $("#employeeId").val(),
           password: $("#teacherpassword").val(),
           userIdentity: 'teacher'
         },
         dataType: "json",
         complete: function (data) {
           if (data.responseJSON.isTrue) {
             location.href = '/';
           }
           else{
             $('#teacherpassword').val('');
             $('#teacherpassword-error').css('display', 'block');
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

});
