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

    // Dynamika obrazków w headerze

    var $logo = $('.zaplanujto-logo');
    var $welcomeText = $('.welcome-text');
    var $joinUsBtn = $('.join-us-btn');
    var $mainIcon1 = $('.main-icon-1');
    var $mainIcon2 = $('.main-icon-2');
    var $mainIcon3 = $('.main-icon-3');
    var $mainIcon4 = $('.main-icon-4');


    $logo.show(2000);
    $welcomeText.slideDown(1000);
    $joinUsBtn.show(2500);


    //dynamika icon głównych
    function mainIconVisibility() {
        if ($(this).scrollTop() > 370) {
            $mainIcon1.fadeIn(700);
            $mainIcon2.fadeIn(1400);
            $mainIcon3.fadeIn(2100);
            $mainIcon4.fadeIn(2800);

            console.log($window.scrollTop() + 'px');
    }}
    $window.on('scroll', mainIconVisibility);




});