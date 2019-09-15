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


    //免费领取 按钮  优惠卷按钮
    $('.on-audio-visual').click(function () {
        $('.course-details-pop').css('display', 'block')
        $('.course-details').css('display', 'block')
        $('.course-details').addClass('animated slideInUp faster')
    })
    // 确认支付 点击 弹窗显示
    $('.purchase-btn').click(function () {
        $('.course-details-pop').css('display', 'block')
        $('.course-details').css('display', 'block')
        $('.course-details').addClass('animated slideInUp faster')
    })
    // 确认支付 按钮 点击
    $('.course-details-btn').click(function () {
        animateCSS('.course-details', 'slideOutDown', allClose);
    })

    //关闭 弹窗 方法
    function allClose() {
        $('.course-details-pop').css('display', 'none')
        $('.course-details').css('display', 'none')
    }

    //点击背景 关闭弹窗
    $('.course-details-pop').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        animateCSS('.course-details', 'slideOutDown', allClose);
    })
    //点击关闭按钮 关闭弹窗
    $('.shut-down').click(function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        animateCSS('.course-details', 'slideOutDown', allClose);
    })

    //  阻止事件冒泡
    $('.course-details').click(function (event) {
        event.stopPropagation();
    })
});

//宝贝课堂上传图片
function onClassroom(input) {
    var file = input.files[0];
    var reader = new FileReader();
    // 图片读取成功回调函数
    reader.onload = function (e) {
        $(input).parent().find('.img').eq(0).attr('src', e.target.result);
    }
    reader.readAsDataURL(file)
}
