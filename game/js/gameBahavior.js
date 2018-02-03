const isGameOver = () => {
    if (parseInt(document.getElementById('game-time').innerText) === 0) {
        let totalScore = parseInt(document.getElementById('current-score').innerText);
        players[players.length-1].score = totalScore;
        hide(gameScreen);
        fadeIn(scoreScreen);
    }
};

