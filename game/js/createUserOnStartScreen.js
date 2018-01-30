
const $playerNameInput = document.getElementById('playerNameInput');
const $startButton = document.getElementById('startGameBtn');

const players = [];

const getPlayerName = () => $playerNameInput.value.charAt(0).toUpperCase() + $playerNameInput.value.slice(1);
const addPlayer = () => ( {name: getPlayerName(), score: 0} );

$startButton.addEventListener('click', function() {
    let newPlayer = addPlayer();
    console.log(newPlayer);
    players.push(newPlayer);
    console.log(players);
});








