let seconds = parseInt(document.getElementById('game-time').innerText);
let el = document.getElementById('game-time');

function decrementSeconds() {
    seconds -= 1;
    el.innerText = seconds;
}

let cancel = setInterval(decrementSeconds, 1000);


