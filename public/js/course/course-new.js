'use strict';

$(function () {

  $('input[name="addBtn"]').on('click',function(){
    addChapter();
  });

  $('#category_parent').on('change',function(){
    if($('#category_parent').val()=='Language') {
      $('#category_child').empty();
      $('#category_child').append('<option>French</option>' +
                                  '<option>English</option>'+
                                  '<option>Physics</option>')
    }
    else if($('#category_parent').val()=='Computer') {
      $('#category_child').empty();
      $('#category_child').append('<option>Web</option>' +
                                  '<option>Android</option>')
    }
    else if($('#category_parent').val()=='Physics') {
      $('#category_child').empty();

    }
  });


  $("#commit_file").on('change',function(){
   showFileName()
  });

  $('#submit').on('click',function(){
    $.ajax({
      type: "POST",
      url: "/management/courses/create",
      data: $("form").serialize(),
      complete: function(data){
      }
    });
  });


});

function showFileName(){
  var filePath = ($('input[name="commit_file"]:last').val()).split("\\");
  var fileName = filePath[filePath.length-1];
  $('input[name="showName"]:last').val(fileName);
}


function addChapter(){
  var chapterId = parseInt($('label[name="chapterId"]:last').text()[1]) + 1;
  $('#submit').before('<section class="container well panel-primary"> ' +
    '<ul class="list-unstyled list-group"> ' +
    '<li class="list-group-item col-md-12"> ' +
    '<label name="chapterId">第'+chapterId+'章节:</label> ' +
    '<input type="text" name="chapter_name" class="form-control" placeholder="请输入章节名" />' +
    '</li>' +
    '<li class="list-group-item col-md-12"> <div class="col-md-12">上传文件:</div>' +
    '<input id="commit_file" name="commit_file" type="file" onchange="showFileName()" class="form-control"/>' +
    '<input type="text" name="showName" id="showName" class="form-control"/>'+
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

