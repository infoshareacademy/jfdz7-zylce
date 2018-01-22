$(document).ready(function() {
    const $navLink = $('.navbar-nav>li>a');
    const $navCollapse = $('.navbar-collapse');
    const $page = $('body, html');
    const $navBrandImg = $('.navbar-brand img');
    const $navbar = $('.navbar-nav');
    const $navLinks = $navbar.find('a');

    function collapseNav() {
        $navCollapse.collapse('hide');
    }
    $navLink.on('click', collapseNav);

    function scrollToSection() {
        const animationTime = 700;
        const anchor = $(this).attr('href');
        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');

        $page.animate({ scrollTop: $(anchor).offset().top }, animationTime);
    }
    $navLinks.on('click', scrollToSection);

    function scrollToTop() {
        const animationTime = 500;

        $page.animate({ scrollTop: 0}, animationTime);
    }
    $navBrandImg.on('click', scrollToTop);

    var $scrollToTopBtn = $('#scroll-to-top');
    var $window = $(window);
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

    const $logo = $('.zaplanujto-logo');
    const $welcomeText = $('.welcome-text');
    const $joinUsBtn = $('.join-us-btn');
    const $mainIcon1 = $('.main-icon-1');
    const $mainIcon2 = $('.main-icon-2');
    const $mainIcon3 = $('.main-icon-3');
    const $mainIcon4 = $('.main-icon-4');
    const $addIconsLeftPanel = $('.add-icons-left-panel');
    const $addIconsRightPanel = $('.add-icons-right-panel');
    const $teamMember = $('.team-member');

    $logo.show(500, function () {
        $welcomeText.animate({opacity: 1}, 150, function () {
            $joinUsBtn.animate({opacity: 1}, 100);
        });
    });

    function mainIconsVisibility() {
        if ($(this).scrollTop() > 300) {
            $mainIcon1.fadeIn(500, function () {
                $mainIcon2.fadeIn(150, function () {
                    $mainIcon3.fadeIn(150, function () {
                        $mainIcon4.fadeIn(150);
                    });
                });
            });
        }}

    function addIconsVisibility() {
        if($(this).scrollTop() > 700) {
            $addIconsLeftPanel.animate({left: 0}, 700);
            $addIconsRightPanel.animate({left: 0}, 500);
        }
    }
    function teamMemberAnimation() {
        if($window.scrollTop() >  1100) {
            $teamMember.animate({left: 0}, 1500 );
        }

    }

    $window.on('scroll', mainIconsVisibility);
    $window.on('scroll', addIconsVisibility);
    $window.on('scroll', teamMemberAnimation);

});