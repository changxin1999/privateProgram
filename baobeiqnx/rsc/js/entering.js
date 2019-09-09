// 机构类型 点击效果
let organizationTypeList = $('.input-box-li-typesof-list li');
organizationTypeList.each(function (i) {
    organizationTypeList.eq(i).click(
        function () {
            organizationTypeList.each(function (i) {
                $(organizationTypeList[i]).removeClass("active")
            });
            $(this).addClass("active");
        }
    );
});

//修改 机构展示图片 详情
function uploadShowImg(input) {
    var file = input.files[0];
    var reader = new FileReader()
    // 图片读取成功回调函数
    reader.onload = function (e) {
        $(".show-pictures-info-img .show-img").eq(0).attr('src', e.target.result);
        $(".show-pictures-info-list .active .active-img").eq(0).attr('src', e.target.result);
    }
    reader.readAsDataURL(file)
}
//删除 机构展示图片 详情
$(".delete-icon").click(() => {
    let shopImg = $('.show-pictures-info-img .show-img').eq(0);
    let shopInput = $('.show-pictures-info-img .upload-show-input').eq(0);
    let listShopImg = $('.show-pictures-info-list .active .active-img').eq(0);
    shopImg.attr('src', '')
    shopInput.val("")
    listShopImg.attr('src', '')
})

//获取 机构展示 详情 list 点击修改
let shopPicturesList = $('.show-pictures-info-list li');
shopPicturesList.each(function (i) {
    shopPicturesList.eq(i).click(
        function () {
            setListImg(this)
        }
    );
});
function setListImg(_this) {
    shopPicturesList.each(function (i) {
        $(shopPicturesList[i]).removeClass("active")
    });
    //添加对应的class
    $(_this).addClass("active");
    let _thisInputVal = $(_this).find('.active-img').eq(0).attr('src');
    $(".show-pictures-info-img .show-img").eq(0).attr('src',_thisInputVal)
}

//机构展示图片 列表 上传图片
function modifyFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    // 图片读取成功回调函数
    reader.onload = function (e) {
        $(input).parent().find('.img').eq(0).attr('src', e.target.result);
    }
    reader.readAsDataURL(file)
}
