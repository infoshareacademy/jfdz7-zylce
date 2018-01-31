const tasksOnMap = document.getElementsByClassName('task-on-map');
// const taskToClick = document.getElementById('game-task');



const compare = () => {
    for (let i = 0; i < tasksOnMap.length; i++) {
        tasksOnMap[i].addEventListener('click', function () {
            let id = this.id;
            let imgSrc = this.src;
            let taskSrc = document.getElementById('game-task').src;

            if (imgSrc === taskSrc) {
                console.log('trafiłeś');
                this.remove();
            } else {
                console.log('nie trafiłes');
            }
        })

    }
};

setTask();
generateTasksOnMap(5);
compare();