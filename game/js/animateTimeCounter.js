exampleTimeAnimation = document.getElementById('time-animated');

const INITIAL_TIME_LIMIT = 40;

function timeCounter(initialTime, destination) {
    let timeLeft = initialTime;
    setInterval(() => {
        if (timeLeft >= 0) {
            destination.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000)
}

const animateTimer = new timeCounter(INITIAL_TIME_LIMIT, exampleTimeAnimation);

