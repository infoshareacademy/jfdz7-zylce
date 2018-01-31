$(document).ready(function () {
    const randomX = Math.floor(Math.random() * 750);
    const randomY = Math.floor(Math.random() * 550);
    const $taskToClick = $('.taskToClick');
    const $taskArray = [
        'gfx/task_sport.jpg',
        'gfx/task_cinema.jpg',
        'gfx/task_theatre.jpg',
        'gfx/task_concert.jpg'
    ];

    const $getRadnomTaksFromArray = Math.floor(Math.random() * $taskArray.length);

    console.log(randomX);
    console.log(randomY);

    // const $createNewIcon =  $('<img class="currentTask" src="' + $taskArray[$getRadnomTaksFromArray] + '">');


    const $createNewTask = function () {
        let $createNewIcon =  $('<img class="currentTask" src="' + $taskArray[$getRadnomTaksFromArray] + '">');

        $('.gameScreen').append($createNewIcon);
        $createNewIcon.css({
           top: randomY,
           left: randomX
       });

    };

    const $createTaskToClick = function () {
        let $newTaskToClick = $('<img src="' + $taskArray[$getRadnomTaksFromArray] + '">');
        $newTaskToClick.appendTo('.taskToClick');
    }


    $createTaskToClick();
    $createNewTask();

    console.log($taskArray);
    console.log('losowy task to: ' + $getRadnomTaksFromArray);


});




