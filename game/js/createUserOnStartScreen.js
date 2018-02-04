
const playerNameInput = document.getElementById('player-name-input');
const startButton = document.getElementById('start-game-btn');

const players = [];

const getPlayerName = () => playerNameInput.value.charAt(0).toUpperCase() + playerNameInput.value.slice(1);
const getNewPlayer = () => ( {name: getPlayerName(), score: 0} );

startButton.addEventListener('click', function() {
    players.push(getNewPlayer());
    hide(startScreen);
    fadeIn(gameScreen);
    clearInterval(cancel);
    gameTime.textContent = 30;
    cancel = setInterval(decrementSeconds, 1000);
    setTimeout(setGame(), 6000);

});

players.push({name: 'Player1', score: 5});
players.push({name: 'Player2', score: 6});
players.push({name: 'Player3', score: 7});
players.push({name: 'Player4', score: 8});
players.push({name: 'Player5', score: 9});






