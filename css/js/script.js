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
    const $socialIcons = $('.team-member-social-icons');

    $logo.show(1000, function () {
        $welcomeText.animate({opacity: 1}, 1500, function () {
            $joinUsBtn.animate({opacity: 1}, 300);
        });
    });
    // $welcomeText.animate({opacity: 1}, 3500);
    // $joinUsBtn.animate({opacity: 1}, 3500);

    function mainIconsVisibility() {
        if ($(this).scrollTop() > 370) {
            $mainIcon1.fadeIn(400, function () {
                $mainIcon2.fadeIn(400, function () {
                    $mainIcon3.fadeIn(400, function () {
                        $mainIcon4.fadeIn(400);
                    });
                });
            });
            // $mainIcon2.fadeIn(1400);
            // $mainIcon3.fadeIn(2100);
            // $mainIcon4.fadeIn(2800);
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

    //dorobic  zeby ikony pod memberami sie pozniej pojawialy (po djecich)


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