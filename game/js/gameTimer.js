let gameTime = document.getElementById('game-time');


function decrementSeconds() {
    let seconds = parseInt(document.getElementById('game-time').innerText);
    if (seconds > 0) {
        seconds -= 1;
        gameTime.innerText = seconds;
    }
}

let cancel = setInterval(decrementSeconds, 1000);



