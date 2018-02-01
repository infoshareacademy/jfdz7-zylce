function changeTime(time) {
    clearInterval(cancel);
    seconds = parseInt(document.getElementById('game-time').innerText) + time;
    gameTime.textContent = seconds;
    cancel = setInterval(decrementSeconds, 1000);
}