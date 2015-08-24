$(document).ready(function(){
  var news = $('#new');

  news.click(function(){
    $('form').append("<section class='container well panel-primary'> <ul class='list-unstyled list-group'> <li class='list-group-item col-md-12'> <label>第1章节:</label> <input type='text' class='form-control'/> </li> <li class='list-group-item col-md-12'> <label class='col-md-12'>上传文件:</label> <input type='file' value='上传文件' class='col-md-2 form-control'/> <label class='col-md-11'> </label> <input type='button' id='update' value='上传' class='col-md-1'/> </li> <li class='list-group'> <input type='button' id='new' value='新增' class='col-md-6'/> <input type='button' id='delete' value='删除' class='col-md-6'/> </li> </ul> </section>");
  });
});
