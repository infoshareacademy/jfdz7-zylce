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
    const $socialIcons = $('.team-member-social-icons');

    $logo.show(2000);
    $welcomeText.slideDown(1000);
    $joinUsBtn.show(2500);

    function mainIconsVisibility() {
        if ($(this).scrollTop() > 370) {
            $mainIcon1.fadeIn(700);
            $mainIcon2.fadeIn(1400);
            $mainIcon3.fadeIn(2100);
            $mainIcon4.fadeIn(2800);
        }}

    function addIconsVisibility() {
        if($(this).scrollTop() > 800) {
            $addIconsLeftPanel.animate({left: 0}, 700);
            $addIconsRightPanel.animate({left: 0}, 500);
        }
    }
    function teamMemberAnimation() {
        if($window.scrollTop() >  1000) {
            $teamMember.animate({top: 0}, 1260 );
        }

    }

    // function socialIconsShow() {
    //     if($window.scrollTop() )
    //
    // }

    function write() {
        if($window.scrollTop() > 1) {
            console.log('dupa dupa :)');
            console.log($window.scrollTop() + 'px');
        }

    }
    $window.on('scroll', mainIconsVisibility);
    $window.on('scroll', addIconsVisibility);
    $window.on('scroll', teamMemberAnimation);
    $window.on('scroll', write);
});