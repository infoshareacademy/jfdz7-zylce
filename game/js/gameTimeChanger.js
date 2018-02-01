function changeTime(time) {
    clearInterval(cancel);
    seconds = parseInt(document.getElementById('game-time').innerText) + time;
    document.getElementById('game-time').textContent = seconds;
    cancel = setInterval(decrementSeconds, 1000);
}