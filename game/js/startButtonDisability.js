const isNameMissing = () => { return $playerNameInput.value.length <3 };

const isPlayerNameValid = () => {
    // $startButton.setAttribute('disabled', isNameMissing());
    isNameMissing() ? $startButton.setAttribute('disabled', '') : $startButton.removeAttribute('disabled')
};

$playerNameInput.addEventListener('keyup', isPlayerNameValid);