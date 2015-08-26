$(document).ready(function () {

  var totalPages = $('#pagination').attr('totalPages');

  $('#pagination').twbsPagination({
    first: '首页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: totalPages,
    visiblePages: 7,
    href: '?page={{number}}',
    onPageClick: function (event, page) {
      //control page content
    }
  });
});
