$(function() {

  var options = {
    currentPage:2,
    totalPages:10,
    numberOfPages:5,
    itemTexts: function (type, page, current) {
      switch (type) {
        case "first":
          return "首页";
        case "prev":
          return "上一页";
        case "next":
          return "下一页";
        case "last":
          return "末页";
        case "page":
          return  page;
      }
    },
    alignment:"center"
  };

  $('#page').bootstrapPaginator(options);
  $('#page>ul').addClass('pagination');

});
