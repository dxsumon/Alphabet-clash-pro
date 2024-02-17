
function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function gameLoop(){
    const alphabetString= 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');
    const alphabetLength = alphabets.length
    const randomNumber = Math.random()*(alphabetLength-1);
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#f87171]')
    element.classList.add('poppins-medium');
    element.classList.add('text-white');
 }
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#f87171]');
    element.classList.remove('text-white');
    element.classList.remove('poppins-medium');
}

function playerKeyPress(event){
    const userKeyPressAlphabet = event.key;
    const displayAlphabets = document.getElementById('current-alphabet');
    const displayAlphabet = displayAlphabets.innerText;
    const screenAlphabet = displayAlphabet.toLocaleLowerCase();
    console.log(`user keypress ${userKeyPressAlphabet} But you need press ${screenAlphabet}`);
    let score = 0;
    if(userKeyPressAlphabet === screenAlphabet){
        console.log('You get a score');
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreNumber = currentScoreElement.innerText;
        const score = parseInt(currentScoreNumber);
        const newScore = score + 1;
        currentScoreElement.innerText = newScore;
        removeBackgroundColor(screenAlphabet);
        continueGame();
    }
    else{
        hiddenElementById('play-ground');
        addElementById('score-section');
        const lifeScoreElement = document.getElementById('life-score');
        const lifeScoreText = lifeScoreElement.innerText;
        const lifeScore = parseInt(lifeScoreText);
        const newLifeScore = lifeScore - 1;
        lifeScoreElement.innerText= newLifeScore;
    }
}

document.addEventListener('keyup', playerKeyPress);

function continueGame(){
    const alphabet = gameLoop();
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set the keyboard background color
    setBackgroundColorById(alphabet);
}

function playAgain(){
    hiddenElementById('score-section');
    addElementById('play-ground');
    const currentScore = document.getElementById('current-score');
    currentScore.innerText = 0;
}