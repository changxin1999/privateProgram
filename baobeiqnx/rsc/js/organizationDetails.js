$(function() {
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
});
