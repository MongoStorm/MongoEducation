'use strict';

$(function () {
  var $search = $('#search');
  var $pagination = $('#pagination');

  $search.bind('keypress', 'enter', function() {
    $('#custom-search-form').submit();
  });

  $search.next('button').on('click', function() {
    $('#custom-search-form').submit();
  });

  $('.delete').on('click', function() {

    $('#deleteModal').modal('show');

    var courseId = $(this).val();

    $('#delete').on('click', function() {

      $.ajax({
        url: '/management/courses',
        method: 'POST',
        data: {
          courseId: courseId
        },
        context: this,
        success: function() {

          if($('#content>div').length <= 1) {
            var pageInfo = parseUrl(location.search.substring(1));
            var pageIndex = parseInt(pageInfo.pageIndex) - 1;

            location.search = '?pageIndex=' + pageIndex + '&pageSize=' + pageInfo.pageSize + '&search=' + pageInfo.search;
          }else{
            location.reload();
          }
        }
      });
    });
  });

  var totalPages = $pagination.attr('totalPages');
  var pageCount = $('#pageCount').text();

  $pagination.twbsPagination({
    first: '第一页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: pageCount,
    visiblePages: 7,
    href: '?pageIndex={{number}}&pageSize=' + 8 +  '&search=' + $search.val()
  });

  function parseUrl(url) {
    var pageInfo = {};
    var parameters = url.split('&');

    parameters.forEach(function(parameter) {
      pageInfo[parameter.split('=')[0]] = parameter.split('=')[1];
    });

    return pageInfo;
  }
});
