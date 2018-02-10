$(document).ready(function() {
    const $navLink = $('.navbar-nav>li>a');
    const $navCollapse = $('.navbar-collapse');

    function collapseNav() {
        $navCollapse.collapse('hide');
    }
    $navLink.on('click', collapseNav);
});