'use strict';

$(function () {

  init();

  $('#search').click(function () {
    queryAndPage($('#query').val());
  });

  $('#query').keydown(function (event) {
    if(event.keyCode==13){
      queryAndPage($('#query').val());
    }
  });

  $('.category').on('click', 'a', function () {
    var level = $(this).parents('li').attr('level');
    classify($(this).attr('categoryId'), level);
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
  classify('',0);
}

function classify(id, level) {
  $.get('/category', {id: id, level: level}, function (result) {
    $('.category ul:gt(' + (level - 1) + ')').remove();
    $(result).appendTo('.category');
  });

  $.get('/page-content', {page: 1, query:'', categoryId: id}, function (result) {
    $('#page-content').html(result);
    initPagination(1, $('#pagination').attr('totalPages'));
  });
}

function initPagination(currentPage, totalPages) {
  $('#pagination').remove();
  $('.text-center').html('<div id="pagination" totalPages=' + totalPages + '></div>');
  $('#pagination').twbsPagination({
    startPage: currentPage,
    first: '第一页',
    prev: '前一页',
    next: '下一页',
    last: '最后一页',
    totalPages: totalPages,
    visiblePages: 7,
    onPageClick: function (event, page) {
      $.get('/page-content', {page: page, query: $('#query').val()}, function (result) {
        $('#page-content').html(result);
        initPagination(page, totalPages);
      });
    }
  });

}
