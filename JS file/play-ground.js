function continueGame(){
    const alphabet = gameLoop();
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set the keyboard background color
    setBackgroundColorById(alphabet);
}

function playNow(){
    hiddenElementById('play-section');
    addElementById('play-ground');
    continueGame();
}