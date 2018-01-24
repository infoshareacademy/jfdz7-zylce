$(document).ready(function() {

    const $page = $('body, html');
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
    const $socialIcons = $('.social-icons')

    $logo.show(500, function () {
        $welcomeText.animate({opacity: 1}, 150, function () {
            $joinUsBtn.animate({opacity: 1}, 150);
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
            $socialIcons.animate({left: 0}, 2000);
        }

    }

    $window.on('scroll', mainIconsVisibility);
    $window.on('scroll', addIconsVisibility);
    $window.on('scroll', teamMemberAnimation);

});