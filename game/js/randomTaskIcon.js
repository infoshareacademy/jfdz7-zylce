const gameMap = document.getElementById('game-map');
let img = document.createElement('img');

const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * taskIcons.length);
    return taskIcons[randomIndex];
};