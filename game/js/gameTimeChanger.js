function changeTime(timeToAdd) {
    clearInterval(cancel);
    seconds = parseInt(document.getElementById('game-time').innerText) + timeToAdd;
    if ( seconds > 0 ) {
        gameTime.textContent = seconds;
        cancel = setInterval(decrementSeconds, 1000);
    } else {
        gameTime.innerText = 0;
        clearInterval(cancel);
    }
}