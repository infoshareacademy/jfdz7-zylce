$(document).ready(function() {
    var $navLink = $('.navbar-nav>li>a');
    var $navCollapse = $('.navbar-collapse');
    var $smoothScroll = $('.smoothScroll');
    var activeNavLink = '.active';
    var $bodyHtml = $('body, html');
    var $navBrandImg = $('.navbar-brand img');

    $navLink.on('click', function(){
        $navCollapse.collapse('hide');
    });

    $smoothScroll.click(function() {
        $('.nav').find(activeNavLink).removeClass(activeNavLink);
        $(this).parent().addClass(activeNavLink);
        $bodyHtml.animate({
            scrollTop: $(this.hash).offset().top -30
        }, 900)
    });

    $navBrandImg.click(function () {
        $bodyHtml.animate({
            scrollTop: 0
        }, 700)
    });

    var $scrollToTopBtn = $('#scroll-to-top');
    var $window = $(window);
    var $page = $('body, html');
    var animationTime = 600;
    var scrollBtnThreshold = 150;

    function toggleScrollBtnVisibility() {
        if ($(this).scrollTop() > scrollBtnThreshold) {
                $scrollToTopBtn.fadeIn(1000);
        } else {
                $scrollToTopBtn.hide();
        }
    }

    function scrollToTop() {
        $page.animate({ scrollTop: 0 }, animationTime);
    }

    $window.on('scroll', toggleScrollBtnVisibility);
    $scrollToTopBtn.on('click', scrollToTop);

    $(window).on('scroll', function() {
        if($(document).scrollTop() > 850) {
            $('nav').addClass('nav-effect').animate({top: 0}, 900)
        }
        else {
            $('nav').removeClass('nav-effect');
        }
    });
});