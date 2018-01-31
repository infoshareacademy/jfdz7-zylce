const addNewTasksOnMap = (tasksNumber) => {
    let nextFreeIndex = coordinates.length;
    for(let i=nextFreeIndex; i < nextFreeIndex+tasksNumber; i++) {
        addTaskIconOnMap(i);
        setIconsPosition(i);
    }
};