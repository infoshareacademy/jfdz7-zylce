
const playerNameInput = document.getElementById('player-name-input');
const startButton = document.getElementById('start-game-btn');

const players = [];

const getPlayerName = () => playerNameInput.value.charAt(0).toUpperCase() + playerNameInput.value.slice(1);
const getNewPlayer = () => ( {name: getPlayerName(), score: 0} );

startButton.addEventListener('click', function() {
    players.push(getNewPlayer());
    console.log(players);
    hide(startScreen);
    fadeIn(gameScreen);
    clearInterval(cancel);
    gameTime.textContent = 30;
    cancel = setInterval(decrementSeconds, 1000);
    setTimeout(setGame(), 6000);

});








