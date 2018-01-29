
const $playerNameInput = document.getElementById('playerNameInput');
const $startButton = document.getElementById('startGameBtn');

const players = [];

const getPlayerName = () => $playerNameInput.value;
const addPlayer = () => { return {name: getPlayerName()} };

$startButton.addEventListener('click', function() {
    console.log('a');
    let newPlayer = addPlayer();
    // console.log(newPlayer);
    players.push(newPlayer);
    // console.log(players);
});


