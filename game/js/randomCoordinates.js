const additionalOffset = 80;
const minCoordinateX = 200;
const maxCoordinateX = 800;
const minCoordinateY = 200;
const maxCoordinateY = 650;

const coordinates = [];

const chooseRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min));
};

const addRandomCoordinates = () => {
    let x = chooseRandomNumber(minCoordinateX, maxCoordinateX) + additionalOffset;
    let y = chooseRandomNumber(minCoordinateY, maxCoordinateY) + additionalOffset;
    coordinates.push({x, y});
};