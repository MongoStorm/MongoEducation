'use strict';

$(function () {

  $('input[name="addBtn"]').on('click',function(){
    addChapter();
  });

  $('#category_parent').on('change',function(){
    if($('#category_parent').val()=='1') {
      $('#category_child').empty();
      $('#category_child').append('<option>11</option>' +
                                  '<option>12</option>'+
                                  '<option>13</option>')
    }
    else if($('#category_parent').val()=='2') {
      $('#category_child').empty();
      $('#category_child').append('<option>21</option>' +
                                  '<option>22</option>')
    }
    else if($('#category_parent').val()=='3') {
      $('#category_child').empty();

    }
  });

});

function addChapter(){
  var chapterId = parseInt($('label[name="chapterId"]:last').text()[1]) + 1;
  $('#submit').before('<section class="container well panel-primary"> ' +
                      '<ul class="list-unstyled list-group"> ' +
                      '<li class="list-group-item col-md-12"> ' +
                      '<label name="chapterId">第'+chapterId+'章节:</label> ' +
                      '<input type="text" name="chapter_name" class="form-control" placeholder="请输入章节名" />' +
                      '</li>' +
                      '<li class="list-group-item col-md-12"> <div class="col-md-12">上传文件:</div>' +
                      '<input id="fulAvatar" name="commit_file" type="file" class="form-control"/>' +
                      '<div class="col-md-5"> </div> ' +
                      '</li> ' +
                      '<li class="list-group"><div class="col-md-9"></div> ' +
                      '<input type="button" id="new"  onclick="addChapter()" value="新增" class="col-md-1 btn btn-primary text-right sectionbk"/>' +
                      '<input type="button" id="delete" value="删除" onclick="delChapter()" class="col-md-1 btn btn-primary text-right sectionbk"/> ' +
                      '</li> </ul> </section>');
}

function delChapter(){
  $('form section:last').remove();
}



