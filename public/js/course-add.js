$(document).ready(function(){
  var addBtn = $('#addBtn:last');
  var chapterId = 2;
  addBtn.click(function(){
    $('form').append("<section class='container well panel-primary'> <ul class='list-unstyled list-group'> <li class='list-group-item col-md-12'> <label id='chapter'>第"+chapterId+"章节:</label> <input type='text' class='form-control'/> </li> <li class='list-group-item col-md-12'> <div class='col-md-12'>上传文件:</div> <input type='file' value='上传文件' class='col-md-2 form-control'/> <div class='col-md-11'> </div> <input type='button' id='update' value='上传' class='col-md-1'/> </li> <li class='list-group'><div class='col-md-5'></div> <input type='button' id='new' value='新增' class='col-md-1'/> <input type='button' id='delete' value='删除' class='col-md-1'/> </li> </ul> </section>");
    chapterId++;
  });
});
