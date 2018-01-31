$(document).ready(function () {
    const randomX = Math.floor(Math.random() * 770);
    const randomY = Math.floor(Math.random() * 620);
    const $gameBoard = $('.gameBoard');
    const $createNewIcon =  $('<img class="currentTask" src="gfx/task_sport.jpg">');

    const $taskArray = [
        'gfx/task_sport.jpg',
        'gfx/task_cinema.jpg',
        'gfx/task_theatre.jpg',
        'gfx/task_concert.jpg'
    ];

    const $getRadnomTaksFromArray = Math.floor(Math.random() * $taskArray.length);

    console.log(randomX);
    console.log(randomY);

    const $createNewTask = function () {
        const $createNewIcon =  $('<img class="currentTask" src="' + $taskArray[$getRadnomTaksFromArray] + '">');

        $createNewIcon.appendTo('.gameBoard');
        $createNewIcon.css({
           top: randomY,
           left: randomX
       })
    }

$createNewTask();
    console.log($taskArray);
    console.log('losowy task to: ' + $getRadnomTaksFromArray);


});




