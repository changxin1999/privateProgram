function uploadShowImg(input) {
    var file = input.files[0];
    var reader = new FileReader()
    // 图片读取成功回调函数
    reader.onload = function (e) {
        $('.show-pictures-info-list .active .active-img').eq(0).attr('src', e.target.result);
        $(".show-pictures-info-img .show-img").eq(0).attr('src', e.target.result);
    }
    reader.readAsDataURL(file)
}
function updataListShowImg(input) {
    var file = input.files[0];
    var reader = new FileReader();

    //移除 list 所有class
    let shopPicturesList = $('.show-pictures-info-list li');
    shopPicturesList.each(function (i) {
        $(shopPicturesList[i]).removeClass("active")
    });

    //添加对应的class
    $(input).parent().addClass("active");

    // 图片读取成功回调函数
    reader.onload = function (e) {
        $('.show-pictures-info-list .active .active-img').eq(0).attr('src', e.target.result);
        $(".show-pictures-info-img .show-img").eq(0).attr('src', e.target.result);
    }
    reader.readAsDataURL(file)
}
$(".delete-icon").click(() => {
    let shopImg = $('.show-pictures-info-img .show-img').eq(0);
    let shopInput = $('.show-pictures-info-img .upload-show-input').eq(0);
    let listShopImg = $('.show-pictures-info-list .active .active-img').eq(0);
    let listShopInput = $('.show-pictures-info-list .active .upload-input').eq(0);

    shopImg.attr('src', '')
    shopInput.val("")
    listShopImg.attr('src', '')
    listShopInput.val("")
})

function modifyFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    // 图片读取成功回调函数
    reader.onload = function (e) {
        $(input).parent().find('.img').eq(0).attr('src', e.target.result);
    }
    reader.readAsDataURL(file)
}