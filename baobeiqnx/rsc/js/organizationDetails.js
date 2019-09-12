$(function () {
    var swiper = new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        autoResize: true, //尺寸自适应
        loop: true, // 循环播放,
        autoplay: false, //自动轮播
        autoplay: {
            disableOnInteraction: false,  //触碰后自动切换也不会停止
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        preventClicksPropagation: false, //监听点击操作
    });
    $('.swiper-slide').each((i) => {
        $('.swiper-slide').eq(i).click(function () {
            console.log(swiper.activeIndex);
        })
    })

    //设置 是否已经认证  0未认证  1已认证
    function setDetailsCertification(type) {
        if (type == 0) {
            $('.details-box-top .no-active').css('display', 'block')
            $('.details-box-top .active').css('display', 'none')
        }
        else {
            $('.details-box-top .no-active').css('display', 'none')
            $('.details-box-top .active').css('display', 'block')
        }
    }

    setDetailsCertification(0)

    //点赞
    $('.details-like').click(function () {
        let classStr = $('.details-like').eq(0).attr('class')
        if (classStr.indexOf('active') >= 0) {
            $('.details-like').eq(0).removeClass('active');
        }
        else {
            $('.details-like').eq(0).addClass('active');
        }
    })

    //设置 详情地址  type  0 设置1行   1设置两行
    function setDetailsAddressInfo(type) {
        if (type == 0) {
            $('.details-address-info').eq(0).addClass('font-single-two')
            $('.details-address-info').eq(0).removeClass('font-Multiline')
        }
        else {
            $('.details-address-info').eq(0).addClass('font-Multiline')
            $('.details-address-info').eq(0).removeClass('font-single-two')
        }
    }
    setDetailsAddressInfo(0)


    // 电话咨询
    $('.telephone-consultation').click(function () {
        $('.pop-window-cover').css('display', 'block')
        $('.audition-popup-one').css('display', 'block')
    })
    // 预约试听
    $('.make-an-appointment').click(function () {
        $('.pop-window-cover').css('display', 'block')
        $('.advisory-popup-one').css('display', 'block')
    })


    //关闭弹窗
    $('.pop-window-cover').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        $(this).css('display', 'none')
        $('.audition-popup-one').css('display', 'none')
        $('.audition-popup-two').css('display', 'none')
        $('.advisory-popup-one').css('display', 'none')
        $('.advisory-popup-two').css('display', 'none')
    })
    $('.shut-down').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        $('.pop-window-cover').css('display', 'none')
        $('.audition-popup-one').css('display', 'none')
        $('.audition-popup-two').css('display', 'none')
        $('.advisory-popup-one').css('display', 'none')
        $('.advisory-popup-two').css('display', 'none')
    })

    //  阻止事件冒泡
    $('.audition-popup').click(function (event) {
        event.stopPropagation();
    })
    //  阻止事件冒泡
    $('.advisory-popup').click(function (event) {
        event.stopPropagation();
    })


    //地址关闭弹窗
    $('.address-popup').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        $(this).css('display', 'none')
    })
    $('.address-shut-down').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        $('.address-popup').css('display', 'none')
    })
    //地址阻止事件冒泡
    $('.address-con').click(function (event) {
        event.stopPropagation();
    })

});
