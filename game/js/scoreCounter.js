let scoreOnTopBar = document.getElementById('current-score');
let currentScore = parseInt(document.getElementById('current-score').innerHTML);
let secondsTimer = parseInt(document.getElementById('game-time').innerText);

const addOnePoint = () => {
    currentScore += 1;
};

let refreshScoreOnTobBar = setInterval( ()=> {
    scoreOnTopBar.innerHTML = currentScore;
}, 100);

let countScore = () => {
    if (secondsTimer > 0) {
        addOnePoint();
    } else {
        clearInterval(refreshScoreOnTobBar);
    }
};