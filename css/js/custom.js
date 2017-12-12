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
});