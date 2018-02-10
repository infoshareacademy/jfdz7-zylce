$(document).ready(function(){
    var $randomBg = $('#random-bg');
    var $images = ['url("images/header-background-01.jpg")', 'url("images/header-background-02.jpg")', 'url("images/header-background-03.jpg")']
    var $randomNum = Math.floor(Math.random()* $images.length) ;
    $randomBg.css('backgroundImage', $images[$randomNum] );

});