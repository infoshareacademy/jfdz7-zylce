const INACTIVITY_MAX_TIME = 10000;



const checkPlayerActivity = () => {
    isPlayerInactive =  setInterval( () => {
        console.log('nic nie kliknales');
        setTask()
    }, INACTIVITY_MAX_TIME);

};

const click = () => { //funckje dodać do addeventlistenera w setRandomTask...
    clearInterval(isPlayerInactive);
    console.log(gameTime.innerText);
    console.log('iterval stop and start');
    setTimeout(checkPlayerActivity, 0);
};

