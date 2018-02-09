function setGame() {
    window.addEventListener('selectstart', function(e){ e.preventDefault(); });
    setTask();
    generateTasksOnMap(8);
    checkPlayerActivity();
}

