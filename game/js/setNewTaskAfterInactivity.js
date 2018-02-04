const INACTIVITY_MAX_TIME = 10000;
let isPlayerInactive ;

const stopIntervalAfterGameEnds = () => {
    let finalTime = parseInt(gameTime.innerText);
    if( finalTime === 0){
        clearInterval(isPlayerInactive);
    }
};

const checkPlayerActivity = () => {
    isPlayerInactive =  setInterval( () => {
        setTask();
        stopIntervalAfterGameEnds();
    }, INACTIVITY_MAX_TIME);
};

const clickOnIcon = () => {
    clearInterval(isPlayerInactive);
    setTimeout(checkPlayerActivity, 0);
};
