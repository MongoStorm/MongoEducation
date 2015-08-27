'use strict';

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
