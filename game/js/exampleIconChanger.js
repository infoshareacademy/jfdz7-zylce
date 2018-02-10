exampeIcon = document.getElementById('example-icon');

const taskIcons = ['gfx/task_cinema.jpg', 'gfx/task_concert.jpg', 'gfx/task_sport.jpg', 'gfx/task_theater.jpg', 'gfx/task_exhibition.jpg', 'gfx/task_party.jpg', 'gfx/task_restaurant.jpg'];

function srcChanger() {
    for (let i = 0; i < taskIcons.length; i++) {
        ((i) => {
            setTimeout(() => exampeIcon.src = taskIcons[i], 500 * i);
        })(i);
    }
}

function exampleIconChanger() {
    this.counter = 0;
    setInterval(() => {
        this.counter++;
        srcChanger()}
        , 2000
    )
}

const changeExampeIcon = new exampleIconChanger();

