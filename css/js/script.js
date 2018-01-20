$(document).ready(function() {
    const $navLink = $('.navbar-nav>li>a');
    const $navCollapse = $('.navbar-collapse');
    const $smoothScroll = $('.smoothScroll');
    const activeNavLink = '.active';
    const $bodyHtml = $('body, html');
    const $navBrandImg = $('.navbar-brand img');

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

    const $scrollToTopBtn = $('#scroll-to-top');
    const $window = $(window);
    const $page = $('body, html');
    const $animationTime = 600;
    const scrollBtnThreshold = 150;

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

    $logo.css('display', 'none');
    $welcomeText.css('opacity', 0);
    $joinUsBtn.css('opacity', 0);
    $mainIcon1.css('display', 'none');
    $mainIcon2.css('display', 'none');
    $mainIcon3.css('display', 'none');
    $mainIcon4.css('display', 'none');
    $addIconsLeftPanel.css('left', '-1000px');
    $addIconsRightPanel.css('left', '1000px');
    $teamMember.css('left', '-1500px');

    $logo.show(1000, function () {
        $welcomeText.animate({opacity: 1}, 400, function () {
            $joinUsBtn.animate({opacity: 1}, 200);
        });
    });

    function mainIconsVisibility() {
        if ($(this).scrollTop() > 370) {
            $mainIcon1.fadeIn(400, function () {
                $mainIcon2.fadeIn(400, function () {
                    $mainIcon3.fadeIn(400, function () {
                        $mainIcon4.fadeIn(400);
                    });
                });
            });
        }}

    function addIconsVisibility() {
        if($(this).scrollTop() > 800) {
            $addIconsLeftPanel.animate({left: 0}, 700);
            $addIconsRightPanel.animate({left: 0}, 500);
        }
    }
    function teamMemberAnimation() {
        if($window.scrollTop() >  1000) {
            $teamMember.animate({left: 0}, 1260 );
        }
    }

    $window.on('scroll', mainIconsVisibility);
    $window.on('scroll', addIconsVisibility);
    $window.on('scroll', teamMemberAnimation);
});