$(document).ready(function(){

    var $animated = $('#animated');
    var $images = ['url("images/header-background-01.jpg")', 'url("images/header-background-02.jpg")', 'url("images/header-background-03.jpg")']

    $animated.css('backgroundImage', 'url("images/header-background-01.jpg")');

    var count = 1;
    setInterval(function () {

        $animated.fadeOut(400, function () {
            $animated.css('backgroundImage', $images[count]);
            $animated.fadeIn(400);

        });

        count++;
        console.log('Obrazek: ' + count);
        if (count === $images.length ){
            count = 0
        }
        $('<h1>').stop();
    }, 5000)

});