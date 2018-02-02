const tasksOnMap = document.getElementsByClassName('task-on-map');

const compareIconOnMapWithTask = () => {
    for (let i = 0; i < tasksOnMap.length; i++) {
        tasksOnMap[i].addEventListener('click', function () {
            let imgSrc = this.src;
            let taskSrc = document.getElementById('game-task').src;
            if (isThereAnyGameTaskIconOnMap()) {
                if (imgSrc === taskSrc) {
                    countScore();
                    this.remove();
                    if (!isThereAnyGameTaskIconOnMap()) {
                        changeTime(4);
                        addNewTasksOnMap(4);
                    }
                } else if (this.src !== taskSrc) {
                changeTime(-2)
            }}

        })
    }
};


