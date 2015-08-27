'use strict';

$(function () {

  $('#search').bind('keypress', 'enter', function(){
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
        if($('#content>div').length <= 1) {
          
          var queryString = location.search.split(/=|&/);
          var pageIndex = (queryString[1]- 1 > 1) ? queryString[1]- 1 : 1;
          var pageSize = queryString[3];
          var search = queryString[5];

          location.search = '?pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&search=' + search;
        }else{
          location.reload();
        }
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
