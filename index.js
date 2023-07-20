import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 


// EVENTO KEYUP

const textarea = document.querySelector('textarea[name="user-input"]');
const wordCountEl = document.querySelector('li[data-testid="word-count"]');
const charactCountEl = document.querySelector('li[data-testid="character-count"]');
const charactCountExcludingSpacesEl = document.querySelector('li[data-testid="character-no-spaces-count"]');
const averageWordLengthEl = document.querySelector('li[data-testid= "word-length-average"]');
const numberCountEl = document.querySelector('li[data-testid= "number-count"]');
const numberSumEl = document.querySelector('li[data-testid= "number-sum"]');


textarea.addEventListener('keyup', () => {
    
  const wordCount = analyzer.getWordCount(textarea.value)
  wordCountEl.innerHTML = `Recuento de palabras: ${wordCount}`// argumento

  const charactCount = analyzer.getCharacterCount(textarea.value)
  charactCountEl.innerHTML = `Recuento de caracteres: ${charactCount}`
  
  const charactCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value)
  charactCountExcludingSpacesEl.innerHTML = `Recuento de caracteres excluyendo espacios y signos de puntuación: ${charactCountExcludingSpaces}`
  
  const averageWordLength = analyzer.getAverageWordLength(textarea.value)
  averageWordLengthEl.innerHTML = `Longitud media de palabras: ${averageWordLength}`
  
  const numberCount = analyzer.getNumberCount(textarea.value)
  numberCountEl.innerHTML = `Recuento de números: ${numberCount}`
  
  const numberSum = analyzer.getNumberSum(textarea.value)
  numberSumEl.innerHTML = `Suma de números: ${numberSum}`

        
});


//BOTÓN PARA RESETEAR LA CAJA DE TEXTO AL HACER CLICK

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
  textarea.value = '';
  wordCountEl.innerHTML = "Palabras: 0";
  charactCountEl.innerHTML = "Caracteres: 0";
  charactCountExcludingSpacesEl.innerHTML = "Caracteres excluyendo espacios y signos de puntuación: 0";
  averageWordLengthEl.innerHTML = "Longitud media de palabras: 0";
  numberCountEl.innerHTML = "Números: 0";
  numberSumEl.innerHTML = "Suma de números: 0";

});

