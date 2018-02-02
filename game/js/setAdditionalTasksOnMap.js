let taskOnMapClass = document.getElementById('game-map').getElementsByClassName('task-on-map');

const addNewTasksOnMap = (tasksNumber) => {
    let nextFreeIndex = coordinates.length;
    for(let i=nextFreeIndex; i < nextFreeIndex+tasksNumber; i++) {
        let tasksOnMapNum = taskOnMapClass.length;
        addTaskIconOnMap();
        taskOnMapClass[tasksOnMapNum].setAttribute('id', i);
        setIconsPosition(i);
        document.getElementById('game-task').removeAttribute('class');
        compareIconOnMapWithTask();
    }
};