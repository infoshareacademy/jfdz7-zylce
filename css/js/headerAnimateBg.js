$(document).ready(function(){
    var $window = $(window);
    var $animated = $('#animated');
    var $images = ['url("images/header-background-01.jpg")', 'url("images/header-background-02.jpg")', 'url("images/header-background-03.jpg")']
    var $randomNum = Math.floor(Math.random()* 3) ;
    $animated.css('backgroundImage', $images[$randomNum] );

});