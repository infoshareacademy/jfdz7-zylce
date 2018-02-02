let scoreOnTopBar = document.getElementById('current-score');
let currentScore = parseInt(document.getElementById('current-score').innerHTML); // dodane id w game.html

const addOnePoint = function () { //funkja wywolana w removeClick... na addeventlistenerze
    currentScore += 1;
    console.log(currentScore);
}

setInterval(function () {
    scoreOnTopBar.innerHTML = currentScore;
}, 100);