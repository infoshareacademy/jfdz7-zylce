let scoreOnTopBar = document.getElementById('current-score');
let currentScore = parseInt(document.getElementById('current-score').innerHTML);

const addOnePoint = () => {
    currentScore += 1;
    console.log('Twoje punkty: ', currentScore);
}

let refreshScoreOnTobBar = setInterval( ()=> {
    scoreOnTopBar.innerHTML = currentScore;
}, 100);

let countScore = () => {
   if (seconds > 0) {
        addOnePoint();
   } else {
        console.log('Koniec gry');
        clearInterval(refreshScoreOnTobBar);
   }
}
