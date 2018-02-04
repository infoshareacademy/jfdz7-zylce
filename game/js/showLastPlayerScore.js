const declensionOfPointsWord = () => {
    let score = players[players.length-1].score;
    let pointsVariety;
    if ( score === 0 || ( score > 4 && score < 22)) {
        pointsVariety = "punktów";
    }
    if ( score === 1 ) {
        pointsVariety = "punkt";
    }
    if ((score > 1 && score < 5) || score > 21 ) {
        let scoreStr = String(score);
        let scoreLastDigit = parseInt(scoreStr.charAt(scoreStr.length-1));
        if ( scoreLastDigit > 1 && scoreLastDigit < 5 ) {
            pointsVariety = "punkty";
        }
        else pointsVariety = "punktów";
    }
    return pointsVariety;
};


const showLastPlayerScore = () => {
    if (players.length > 0) {
    document.getElementById('player-score').innerHTML =
        (`${players[players.length - 1].name}, Twój wynik to ${players[players.length - 1].score} ${declensionOfPointsWord()}!`);
    }
};

showLastPlayerScore();