let taskOnMapClass = document.getElementById('game-map').getElementsByClassName('task-on-map');

const addNewTasksOnMap = (tasksNumber) => {
    let nextFreeIndex = coordinates.length;
    for(let i=nextFreeIndex; i < nextFreeIndex+tasksNumber; i++) {
        let tasksOnMapNum = taskOnMapClass.length;
        addTaskIconOnMap();
        taskOnMapClass[tasksOnMapNum].setAttribute('id', i);
        setIconsPosition(i);
        document.getElementById('game-task').removeAttribute('class');
        taskOnMapClass[tasksOnMapNum].addEventListener('click', function () {
            if (isThereAnyGameTaskIconOnMap()) {
                if (this.src === document.getElementById('game-task').src) {
                    countScore();
                    this.remove();
                    if (!isThereAnyGameTaskIconOnMap()) {
                        changeTime(3);
                        addNewTasksOnMap(6);
                    }
                } else {
                    changeTime(-2);
                }
            } else {
                setTask();
            }
        });
    }
};