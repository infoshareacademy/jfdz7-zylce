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
                    (!isThereAnyGameTaskIconOnMap()) ? addNewTasksOnMap(4) && changeTime(2) : null;
                    }
                } else if (imgSrc !== taskSrc) {
                changeTime(-2)
            }
        })
    }
};


