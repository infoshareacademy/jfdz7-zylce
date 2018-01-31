const tasksOnMap = document.getElementsByClassName('task-on-map');
const taskToClick = document.getElementsByClassName('game-task');
generateTasksOnMap(5);
setInterval(setTask, 1000);


let newGameTask = document.getElementsByClassName('game-task').src;

for(let i = 0; i < tasksOnMap.length; i++){
    tasksOnMap[i].addEventListener('click', function() {
        // let id = this.id;
        // let imgSrc = this.src;

        if(this.src === taskToClick.src) {
            console.log('trafiłeś');
            this.remove();
            setTask()

        } else{
            console.log('nie trafiłes');
        }
    })

}





