const playerNameInput = document.getElementById('player-name-input');
const startButton = document.getElementById('start-game-btn');

let players = [];

const getPlayerName = () => playerNameInput.value.charAt(0).toUpperCase() + playerNameInput.value.slice(1);
const getNewPlayer = () => ( {name: getPlayerName(), score: 0} );

function startGameActions() {
    players.push(getNewPlayer());
    hide(startScreen);
    fadeIn(gameScreen);
    gameTime.textContent = 30;
    clearInterval(cancel);
    cancel = setInterval(decrementSeconds, 1000);
    setTimeout(setGame(), 6000);
}


startButton.addEventListener('click', startGameActions);
document.getElementById('player-name-input').addEventListener('keyup', function(e){
    if ((!startButton.hasAttribute('disabled')) && (e.keyCode === 13)) {
        startGameActions();
    }
});








