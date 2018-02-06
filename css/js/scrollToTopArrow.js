$(document).ready(function() {
    const $page = $('body, html');
    const $scrollToTopBtn = $('#scroll-to-top');
    const $window = $(window);
    const animationTime = 600;
    const scrollBtnThreshold = 150;

    function toggleScrollBtnVisibility() {
        if ($(this).scrollTop() > scrollBtnThreshold) {
            $scrollToTopBtn.fadeIn(1000);
        } else {
            $scrollToTopBtn.hide();
        }
    }

    function scrollToTop() {
        $page.animate({scrollTop: 0}, animationTime);
    }


    $window.on('scroll', toggleScrollBtnVisibility);
    $scrollToTopBtn.on('click', scrollToTop);

    $(window).scroll(function () {
        let fromTopPos = $(this).scrollTop();
        if (fromTopPos >= 200) {
            $('nav').addClass('resized');
            $('.navbar-brand img').addClass('resized-img');
            $('.navbar-brand-text').fadeIn(500);
        } else {
            $('nav').removeClass('resized');
            $('.navbar-brand img').removeClass('resized-img');
            $('.navbar-brand-text').fadeOut(500);


        }
    });

});