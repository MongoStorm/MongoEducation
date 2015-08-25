$(document).ready(function () {
  $('#pagination').twbsPagination({
    first: '首页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: 35,
    visiblePages: 7,
    href: '?page={{number}}',
    onPageClick: function (event, page) {
      //control page content
    }
  });
});
