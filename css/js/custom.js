$(document).ready(function() {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    })

    $('.smoothScroll').click(function() {
        $('.nav').find('.active').removeClass('active');
        $(this).parent().addClass('active');
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })
});