$(function () {
    // animateCSS  方法
    function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }


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

    //预约礼 按钮  优惠卷按钮
    $('.on-audio-visual').click(function () {
        $('.pop-window-cover').css('display', 'block')
        $('.audition-popup-one').css('display', 'block')
        $('.audition-popup-one').addClass('animated slideInUp faster')
    })


    // 电话咨询 按钮 点击 弹窗显示
    $('.telephone-consultation').click(function () {
        $('.pop-window-cover').css('display', 'block')
        $('.advisory-popup-one').css('display', 'block')

        $('.advisory-popup-one').addClass('animated slideInUp faster')
    })
    //预约试听 按钮 点击 弹窗显示
    $('.make-an-appointment').click(function () {
        $('.pop-window-cover').css('display', 'block')
        $('.audition-popup-one').css('display', 'block')

        $('.audition-popup-one').addClass('animated slideInUp faster')
    })
    // 电话咨询弹窗 按钮 点击
    $('.audition-btn').click(function () {
        $('.audition-popup-one').css('display', 'none')
        $('.audition-popup-two').css('display', 'block')

        $('.audition-popup-two').addClass('animated slideInUp faster')
    })
    // 预约试听弹窗 按钮 点击
    $('.advisory-btn').click(function () {
        $('.advisory-popup-one').css('display', 'none')
        $('.advisory-popup-two').css('display', 'block')
        $('.advisory-popup-two').addClass('animated slideInUp faster')
    })


    //关闭 弹窗 方法
    function allClose() {
        $('.pop-window-cover').css('display', 'none')
        $('.audition-popup-one').css('display', 'none')
        $('.audition-popup-two').css('display', 'none')
        $('.advisory-popup-one').css('display', 'none')
        $('.advisory-popup-two').css('display', 'none')
    }
    //点击背景 关闭弹窗
    $('.pop-window-cover').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        if ($('.audition-popup-one').eq(0).css('display') == 'block') {
            animateCSS('.audition-popup-one', 'slideOutDown', allClose);
        }
        else if ($('.audition-popup-two').eq(0).css('display') == 'block') {
            animateCSS('.audition-popup-two', 'slideOutDown', allClose);
        }
        else if ($('.advisory-popup-one').eq(0).css('display') == 'block') {
            animateCSS('.advisory-popup-one', 'slideOutDown', allClose);
        }
        else if ($('.advisory-popup-two').eq(0).css('display') == 'block') {
            animateCSS('.advisory-popup-two', 'slideOutDown', allClose);
        }
    })
    //点击关闭按钮 关闭弹窗
    $('.shut-down').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        if ($('.audition-popup-one').eq(0).css('display') == 'block') {
            animateCSS('.audition-popup-one', 'slideOutDown', allClose);
        }
        else if ($('.audition-popup-two').eq(0).css('display') == 'block') {
            animateCSS('.audition-popup-two', 'slideOutDown', allClose);
        }
        else if ($('.advisory-popup-one').eq(0).css('display') == 'block') {
            animateCSS('.advisory-popup-one', 'slideOutDown', allClose);
        }
        else if ($('.advisory-popup-two').eq(0).css('display') == 'block') {
            animateCSS('.advisory-popup-two', 'slideOutDown', allClose);
        }
    })

    //  阻止事件冒泡
    $('.audition-popup').click(function (event) {
        event.stopPropagation();
    })
    //  阻止事件冒泡
    $('.advisory-popup').click(function (event) {
        event.stopPropagation();
    })


    // 点击地址详情拉起地址弹窗
    $('.details-address').click(function (event) {
        $('.address-popup').css('display', 'block')
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
