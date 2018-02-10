const clickOnIcon = () => {
    clearInterval(stop);
    startTimer = 0;
    stop = setInterval(counter, 1000);
};

let startTimer = 0;
const counter = () => {
    startTimer++;
    if (startTimer === 10) {
        clearInterval(stop);
        setTask();
        while (!isThereAnyGameTaskIconOnMap()) {setTask()};
        startTimer = 0;
        stop = setInterval(counter, 1000);
    }
}

stop = setInterval(counter, 1000);
clearInterval(stop)



