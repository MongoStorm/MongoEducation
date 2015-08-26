$(document).ready(function(){
  $('#sign-up').on('click',function(){
    if($('#email').val() === ''){
      $('#email-error').css('display', 'none');
      $('#email-null').css('display', 'block');
      return ;
    }
    var judge=/^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

    if(judge.test($('#email').val()) == false){
      $('#email-null').css('display', 'none');
      $('#email-error').css('display', 'block');
      return ;
    }
    if($('#password').val() === ''){
      $('#email-error').css('display', 'none');

      return ;
    }

    $('form').submit();
  });
});
