const analyzer = {  
  getWordCount: (text) => { 
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.  
    if (!text.trim()) {
      return 0;
    }
    let words = text.trim().split(/\s+/).length;
      return words; 
      
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let characters = text.length;
    return characters;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let charactersEx = text.replace(/[\s.,\/#!$¡%\^&\*;:{}=\-+_`~()¿?']/g, '').length;
    return charactersEx;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let words = text.trim().split(/\s+/).length;
    let charactersEx = text.replace(/[\s.,\/#!$¡%\^&\*;:{}=\-+_`~()¿?']/g, '').length;
    let averageWordLength = charactersEx/words;
    return averageWordLength.toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};


export default analyzer;
