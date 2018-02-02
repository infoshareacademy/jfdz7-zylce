const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const scoreScreen = document.getElementById('score-screen');

function hide(el){
            el.classList.add('hidden');
            el.style.opacity = .05;
}

function fadeIn(el){
    el.style.opacity = 0;
    el.classList.remove('hidden');
    (function fade() {
        let opacityValue = parseFloat(el.style.opacity);
        if (!((opacityValue += .02) > 1)) {
            el.style.opacity = opacityValue;
            requestAnimationFrame(fade);
        }
    })();
}