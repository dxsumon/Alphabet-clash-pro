// function playNow(){
//     const playNowSection = document.getElementById('play-section');
//     playNowSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function playNow(){
    hiddenElementById('play-section');
    addElementById('play-ground');
}