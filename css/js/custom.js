var $getLink = $('.navbar-nav>li>a')
var $getNavCollapse = $('.navbar-collapse');

function navHide(){
    $getNavCollapse.collapse('hide');
}
$getLink.on('click', navHide);

// $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });


$(function () {
    var $scrollToTopBtn = $('#scroll-to-top');
    var $window = $(window);
    var $page = $('body, html');
    var animationTime = 600;
    var scrollBtnThreshold = 150;

    function toggleScrollBtnVisibility() {
        if ($(this).scrollTop() > scrollBtnThreshold) {
            $scrollToTopBtn.show();
        } else {
            $scrollToTopBtn.hide();
        }
    }

    function scrollToTop() {
        $page.animate({ scrollTop: 0 }, animationTime);
    }

    $window.on('scroll', toggleScrollBtnVisibility);
    $scrollToTopBtn.on('click', scrollToTop);
});
