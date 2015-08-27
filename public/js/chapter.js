'use strict';

$(function () {
  $('#return').on('click', function() {
    location.href = '/courses/' + $(this).val();
  });
});
