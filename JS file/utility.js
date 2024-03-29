
function hiddenElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function gameLoop() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');
    const alphabetLength = alphabets.length
    const randomNumber = Math.random() * (alphabetLength - 1);
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#f87171]');
    element.classList.add('poppins-medium');
    element.classList.add('text-white');
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#f87171]');
    element.classList.remove('text-white');
    element.classList.remove('poppins-medium');
}

// Set innerText Value by function;
function getTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementTextValue = parseInt(elementText);
    return elementTextValue;
}
function setTextValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText=value;
}

const audio = new Audio();

function playerKeyPress(event) {
    const userKeyPressAlphabet = event.key;
    const displayAlphabets = document.getElementById('current-alphabet');
    const displayAlphabet = displayAlphabets.innerText;
    const screenAlphabet = displayAlphabet.toLocaleLowerCase();
    console.log(`user keypress ${userKeyPressAlphabet} But you need press ${screenAlphabet}`);
    if (userKeyPressAlphabet === screenAlphabet) {
        // console.log('You get a score');
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreNumber = currentScoreElement.innerText;
        // const score = parseInt(currentScoreNumber);
        // const newScore = score + 1;
        // currentScoreElement.innerText = newScore;
        // ----------------------------------------
        // Set audio if user click the right key
        audio.src = "./audio/mixkit-instant-win-2021.wav";
        audio.play();
        audio.volume = 0.5
        // Set the innerText Score;
        const scoreValue = getTextValueById('current-score');
        const updateScore = scoreValue + 1;
        setTextValueById('current-score',updateScore);

        removeBackgroundColor(screenAlphabet);
        continueGame();
    }
    else {
        audio.src = "./audio/wrong.wav"
        audio.play();
        audio.volume=0.5;
        const lifeScore = getTextValueById('life-score');
        const newLifeScore = lifeScore-1;
        setTextValueById('life-score', newLifeScore)
        if (newLifeScore === 0) { 
            audio.src = "./audio/afterScore.wav"
            audio.play();
            audio.volume = 0.5;
            hiddenElementById('play-ground');
            addElementById('score-section');
            const currentScore = getTextValueById('current-score');
            setTextValueById('over-all-score', currentScore)
        }
    }
}

document.addEventListener('keydown', playerKeyPress);

function continueGame() {
    const alphabet = gameLoop();
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set the keyboard background color
    setBackgroundColorById(alphabet);
}

function playAgain() {
    audio.src = "./audio/playGame.wav"
    audio.play();
    audio.volume=0.5;
    hiddenElementById('score-section');
    addElementById('play-ground');
    const currentScore = document.getElementById('current-score');
    currentScore.innerText = 0;
    const currentLife = document.getElementById('life-score');
    currentLife.innerText = 5;
}