let gameTime = document.getElementById('game-time');


const decrementSeconds = () => {
    let seconds = parseInt(document.getElementById('game-time').innerText);
    if (seconds > 0) {
        seconds -= 1;
        gameTime.innerText = seconds;
        isGameOver();
    }
};

let cancel = setInterval(decrementSeconds, 1000);
clearInterval(cancel);



