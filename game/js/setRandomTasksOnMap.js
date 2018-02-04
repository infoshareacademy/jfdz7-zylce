const createTaskIcon = () => {
    img.src = getRandomIcon();
    img.setAttribute('class', 'task-on-map');
};

const addTaskIconOnMap = () => {
    createTaskIcon();
    gameMap.appendChild(img.cloneNode(true));
    addRandomCoordinates();
};

const setIconsPosition = (index) => {
    document.getElementById('game-map')
        .getElementsByClassName('task-on-map')[taskOnMapClass.length-1]
        .style.left = coordinates[index].x + 'px';
    document.getElementById('game-map')
        .getElementsByClassName('task-on-map')[taskOnMapClass.length-1]
        .style.top = coordinates[index].y + 'px';
};

const setIdToTaskOnMap = (index) => {
    document.getElementById('game-map')
        .getElementsByClassName('task-on-map')[index].setAttribute('id', index);
};

const generateTasksOnMap = (tasksNumber) => {
    while (gameMap.firstChild) gameMap.removeChild(gameMap.firstChild);
    coordinates.length = 0;
    for(let i=0; i < tasksNumber; i++) {
        addTaskIconOnMap(i);
        setIconsPosition(i);
        setIdToTaskOnMap(i);
        document.getElementById('game-task').removeAttribute('class');
        taskOnMapClass[i].addEventListener('click', iconsOnMapEvents);
    }
};