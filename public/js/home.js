'use strict';

$(function () {

  init();

  $('#search').click(function () {
    queryAndPage($('#query').val());
  });

});


function queryAndPage(query) {
  $.get('/page-content', {page: 1, query: query}, function (result) {
    $('#page-content').html(result);
    initPagination(1, $('#pagination').attr('totalPages'));
  });
}

function init() {
  queryAndPage('');
}

function initPagination(currentPage,totalPages) {
  $('#pagination').remove();
  $('.text-center').html('<div id="pagination" totalPages='+ totalPages +'></div>');
  $('#pagination').twbsPagination({
    startPage: currentPage,
    first: '首页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: totalPages,
    visiblePages: 7,
    onPageClick: function (event, page) {
      $.get('/page-content',{page:page, query: $('#query').val()},function (result) {
        $('#page-content').html(result);
        initPagination(page,totalPages);
      });
    }
  });

}
