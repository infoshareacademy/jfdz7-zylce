function setGame() {
    window.addEventListener('selectstart', function(e){ e.preventDefault(); });
    setTask();
    generateTasksOnMap(8);
    clearInterval(stop)
    stop = setInterval(counter, 1000);


}

