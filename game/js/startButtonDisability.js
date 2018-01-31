const isNameMissing = () => {
    const MIN_REQUIRED_NAME_LENGTH = 2;
    return playerNameInput.value.length < MIN_REQUIRED_NAME_LENGTH };

const isPlayerNameValid = () => {
    isNameMissing() ? startButton.setAttribute('disabled', '') : startButton.removeAttribute('disabled')
};

const changeInputStyle = () => {
    isNameMissing() ? playerNameInput.classList.remove('valid') : playerNameInput.classList.add('valid')
};

playerNameInput.addEventListener('keyup', isPlayerNameValid);
playerNameInput.addEventListener('keyup', changeInputStyle);

