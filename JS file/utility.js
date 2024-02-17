function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}