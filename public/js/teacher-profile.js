'use strict';

$(function () {

  $('.delete').on('click', function() {
    $.ajax({
      url: '/management',
      method: 'POST',
      data: {
        courseId: $(this).val()
      },
      context: this,
      success: function() {
        $(this).closest('.panel').remove();
      }
    });
  });

  var totalPages = $('#pagination').attr('totalPages');
  var pageCount = $('#pageCount').text();

  $('#pagination').twbsPagination({
    first: '首页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: pageCount,
    visiblePages: 7,
    href: '?pageIndex={{number}}&pageSize='+8,
  });
});
