const beepSound = document.getElementById('time-beep');
const MAX_TO_END = 5;

let timerStart = setInterval( ()=> {
    const timer = parseInt(document.getElementById('game-time').innerText);
    if( timer <= MAX_TO_END && timer > 0) {
        beepSound.play();
        gameTime.classList.add('timer-alert');
    } else {
        beepSound.pause();
        gameTime.classList.remove('timer-alert');
    }
}, 1000);

const successClick = document.getElementById('succes-click');

const goodClick = () =>{
    // if (this.src === document.getElementById('game-task').src){
        successClick.play();
    // }
}

