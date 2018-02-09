function setGame() {
    setTask();
    generateTasksOnMap(8);
    clearInterval(stop)
    stop = setInterval(counter, 1000);


}

