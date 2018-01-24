$(document).ready(function() {
    const $page = $('body, html');
    const $navBrandImg = $('.navbar-brand img');
    const $navbar = $('.navbar-nav');
    const $navLinks = $navbar.find('a');

    function scrollToSection() {
        const animationTime = 700;
        const anchor = $(this).attr('href');
        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');

        $page.animate({scrollTop: $(anchor).offset().top}, animationTime);
    }

    $navLinks.on('click', scrollToSection);

    function scrollToTop() {
        const animationTime = 500;

        $page.animate({scrollTop: 0}, animationTime);
    }

    $navBrandImg.on('click', scrollToTop);
});