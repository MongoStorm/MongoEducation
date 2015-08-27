$(function () {
  $('input[name="addBtn"]').on('click',function(){
    addChapter();
  });
  $('#fileupload').fileupload({
    dataType: 'json',
    done: function (e, data) {
      $.each(data.result.files, function (index, file) {
        $('<p/>').text(file.name).appendTo(document.body);
      });
    },
    progressall: function (e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
      $('#progress .bar').css(  'width', progress + '%');
    }
  })
  $('#btnSub').on('click',function(){
    var fulAvatarVal = $('#fulAvatar').val(),
      errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

    $("#errorTip,#alt_warning").remove();

    if(fulAvatarVal.length == 0)
    {
      $("#container").prepend(errorTip.format('请选择要上传的文件'));
      return false;
    }

    var extName = fulAvatarVal.substring(fulAvatarVal.lastIndexOf('.'),fulAvatarVal.length).toLowerCase();

    if(extName != '.png' && extName != '.jpg'){
      $("#container").prepend(errorTip.format('只支持png和jpg格式图片'));
      return false;
    }

    return true;
  })
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
                      '<input type="file" value="上传文件" name="commit_file" class="col-md-2 form-control"/>' +
                      '<div class="col-md-5"> </div> ' +
                      '<input type="button" id="update" value="上传" class="col-md-1 btn btn-primary text-right sectionbk"/> ' +
                      '</li> ' +
                      '<li class="list-group"><div class="col-md-9"></div> ' +
                      '<input type="button" id="new"  onclick="addChapter()" value="新增" class="col-md-1 btn btn-primary text-right sectionbk"/>' +
                      '<input type="button" id="delete" value="删除" onclick="delChapter()" class="col-md-1 btn btn-primary text-right sectionbk"/> ' +
                      '</li> </ul> </section>');
}

function delChapter(){
  $('form section:last').remove();
}


String.prototype.format = function (args) {
  var result = this;
  if (arguments.length > 0) {
    if (arguments.length == 1 && typeof (args) == "object") {
      for (var key in args) {
        if (args[key] != undefined) {
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    }
    else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          var reg = new RegExp("({)" + i + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
};

$(function(){
  $('#btnSub').on('click',function(){
    var fulAvatarVal = $('#fulAvatar').val(),
      errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

    $("#errorTip,#alt_warning").remove();

    if(fulAvatarVal.length == 0)
    {
      $("#container").prepend(errorTip.format('请选择要上传的文件'));
      return false;
    }

    var extName = fulAvatarVal.substring(fulAvatarVal.lastIndexOf('.'),fulAvatarVal.length).toLowerCase();

    if(extName != '.png' && extName != '.jpg'){
      $("#container").prepend(errorTip.format('只支持png和jpg格式图片'));
      return false;
    }

    return true;
  })
});
