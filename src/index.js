import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 


// EVENTO KEYUP

const textarea = document.querySelector('textarea[name="user-input"]');
textarea.addEventListener('keyup', () => {
    
  const wordCountEl = document.querySelector('.word-count-el');
  wordCountEl.innerHTML = analyzer.getWordCount(textarea.value) // argumento

  const charactCount = document.querySelector('.charact-count-el');
  charactCount.innerHTML = analyzer.getCharacterCount(textarea.value)

  const charactCountExcludingSpaces = document.querySelector('.charact-count-no-spaces-el');
  charactCountExcludingSpaces.innerHTML = analyzer.getCharacterCountExcludingSpaces(textarea.value)

  const averageWordLengthEl = document.querySelector('.word-length-average-el');
  averageWordLengthEl.innerHTML = analyzer.getAverageWordLength(textarea.value)

  const numberCountEl = document.querySelector('.number-count-el');
  numberCountEl.innerHTML = analyzer.getNumberCount(textarea.value)

  const numberSumEl = document.querySelector('.number-sum-el');
  numberSumEl.innerHTML = analyzer.getNumberSum(textarea.value)

        
});


//BOTÓN PARA RESETEAR LA CAJA DE TEXTO AL HACER CLICK

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
  textarea.value = '';
});