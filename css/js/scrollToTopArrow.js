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

    $(window).on('scroll', function () {
        if ($(document).scrollTop() >= screen.height-200) {
            $('nav').addClass('nav-effect');
        } else {
            $('nav').removeClass('nav-effect');
        }
    });

});
