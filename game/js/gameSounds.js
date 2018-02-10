const successClick = document.getElementById('succes-click');
const wrongClick = document.getElementById('wrong-click');

const goodClick = () => {
    successClick.play();
};

const badClick = () => {
    wrongClick.play();
    console.log('badclick');
};
