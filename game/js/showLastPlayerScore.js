const showLastPlayerScore = () => {
    document.getElementById('player-score').innerHTML =
        (`${players[players.length-1].name}, Twój wynik to ${players[players.length-1].score} !`);
};