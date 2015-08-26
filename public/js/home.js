'use strict';

$(function () {

  var totalPages = $('#pagination').attr('totalPages');
  var query = $('form input').val();
  if (query !== '') {
    var href = '?page={{number}}&query=' + query;
  } else {
    var href = '?page={{number}}';
  }

  $('#pagination').twbsPagination({
    first: '首页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: totalPages,
    visiblePages: 7,
    href: href
  });

});
