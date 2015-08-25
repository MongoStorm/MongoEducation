
var chapterId = 2;
function addChapter(){
  $('#submit').before("<section class='container well panel-primary '> <ul class='list-unstyled list-group'> <li class='list-group-item col-md-12'> <label id='chapter'>第"+chapterId+"章节:</label> <input type='text' class='form-control' placeholder='请输入课程名' /> </li> <li class='list-group-item col-md-12'> <div class='col-md-12'>上传文件:</div> <input type='file' value='上传文件' class='col-md-2 form-control'/> <div class='col-md-5'> </div> <input type='button' id='update' value='上传' class='col-md-1 btn btn-primary text-right sectionbk'/> </li> <li class='list-group'><div class='col-md-9'></div> <input type='button' id='new'  onclick='addChapter()' value='新增' class='col-md-1 btn btn-primary text-right sectionbk'/> <input type='button' id='delete' value='删除' onclick='delChapter()' class='col-md-1 btn btn-primary text-right sectionbk'/> </li> </ul> </section>");
  chapterId++;
}

function delChapter(){
  $('form section:last').remove();
}
