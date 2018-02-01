const gameTask = document.getElementById('game-task-icon');

const setTask = () => {
    while (gameTask.firstChild) gameTask.removeChild(gameTask.firstChild);
    gameTask.appendChild(img);
    img.src = getRandomIcon();
    img.setAttribute('id', 'game-task');
    document.getElementById('game-task').removeAttribute('class');
};