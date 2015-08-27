'use strict';

$(function () {

  var search = '';

  $('#search').bind('keypress', 'enter', function(){
    //TODO search data from course table
    $('#custom-search-form').submit();
  });

  $('.delete').on('click', function() {
    $.ajax({
      url: '/management/courses',
      method: 'POST',
      data: {
        courseId: $(this).val()
      },
      context: this,
      success: function() {
        //TODO refresh th page or new request
        location.reload();
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
    href: '?pageIndex={{number}}&pageSize=' + 8 +  '&search=' + $('#search').val(),
  });
});
