import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 


// EVENTO KEYUP

let textarea = document.querySelector('textarea[name="user-input"]');
textarea.addEventListener('keyup', ()=>{
    
    let wordCountEl = document.querySelector('.word-count-el');
    wordCountEl.innerHTML = analyzer.getWordCount(textarea.value) // argumento

    let charactCount = document.querySelector('.charact-count-el');
    charactCount.innerHTML = analyzer.getCharacterCount(textarea.value)

    let charactCountExcludingSpaces = document.querySelector('.charact-count-no-spaces-el');
    charactCountExcludingSpaces.innerHTML = analyzer.getCharacterCountExcludingSpaces(textarea.value)
        
    });


//BOTÓN PARA RESETEAR LA CAJA DE TEXTO AL HACER CLICK

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
    textarea.value = '';
    });