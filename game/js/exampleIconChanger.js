$exampeIcon = document.getElementById('exampleIcon');

const icons = ['gfx/task_cinema.jpg', 'gfx/task_concert.jpg', 'gfx/task_sport.jpg', 'gfx/task_theatr.jpg'];

function srcChanger() {
    for (let i = 0; i < icons.length; i++) {
        ((i) => {
            setTimeout(() => $exampeIcon.src = icons[i], 1000 * i);
        })(i);
    }
}

function exampleIconChanger() {
    this.counter = 0;
    setInterval(() => {
        this.counter++;
        srcChanger()}
        , 4000
    )
};

const changeExampeIcon = new exampleIconChanger();

