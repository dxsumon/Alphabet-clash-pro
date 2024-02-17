
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