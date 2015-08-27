'use strict';

var id = $.cookie('id');
var type = $.cookie('type');
if (!(id && type)) {
  location.href = '/login';
}

$(function () {
  $('#return').on('click', function() {
    location.href = '/courses/' + $(this).val();
  });

  $('#last').on('click', function() {
    location.href = '/courses/' + $('#return').val() + '/chapters/' + $(this).val();
  });

  $('#next').on('click', function() {
    location.href = '/courses/' + $('#return').val() + '/chapters/' + $(this).val();
  });
});
