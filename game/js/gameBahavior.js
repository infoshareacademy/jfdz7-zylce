
function iconsOnMapEvents() {
    if (isThereAnyGameTaskIconOnMap()) {
        if (this.src === document.getElementById('game-task').src) {
            countScore();
            this.remove();
            if (!isThereAnyGameTaskIconOnMap()) {
                changeTime(3);
                addNewTasksOnMap(6);
            }
        } else {
            changeTime(-2);
            isGameOver();
        }
    } else {
        setTask();
    }
}


const isGameOver = () => {
    if (parseInt(document.getElementById('game-time').innerText) === 0) {
        let totalScore = parseInt(document.getElementById('current-score').innerText);
        players[players.length-1].score = totalScore;
        setTimeout(hide(gameScreen), 3000);
        fadeIn(scoreScreen);
        showLastPlayerScore();
        sortPlayersByHighestScore();
        createPlayersScoreTable();
    }
};

