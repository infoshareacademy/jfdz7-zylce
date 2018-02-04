const playAgainBtn = document.getElementById('play-again-btn');

function clearInput() {
    playerNameInput.value = "";
    startButton.setAttribute('disabled','');
}

function playAgainActions() {
    hide(scoreScreen);
    fadeIn(startScreen);
    playerNameInput.addEventListener('click', clearInput);
    deleteTable();
    clearCurrentScore();
}

playAgainBtn.addEventListener('click', playAgainActions);