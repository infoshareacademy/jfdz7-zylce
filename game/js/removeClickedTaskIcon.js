const tasksOnMap = document.getElementsByClassName('task-on-map');
const taskToClick = document.getElementById('game-task');

setTask();
generateTasksOnMap(5);

    for (let i = 0; i < tasksOnMap.length; i++) {
        tasksOnMap[i].addEventListener('click', function () {
            let id = this.id;
            let imgSrc = this.src;

            if (this.src === taskToClick.src) {
                console.log('trafiłeś');
                this.remove();
            } else {
                console.log('nie trafiłes');
            }
        })

    }



