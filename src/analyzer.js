const analyzer = {  
  getWordCount: (text) => { 
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.  
    if (text.trim() === '') {
      return 0;
    }
    const words = text.trim().split(/\s+/).length;
    return words; 
      
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    if (text.trim() === '') {
      return 0;
    }
    const characters = text.trim().length;
    return characters;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charactersEx = text.replace(/[\s.,#!$¡%&;:{}=\-+_`~()¿?']/g, '').length;
    return charactersEx;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
       
    const words = text.trim().split(/\s+/).length;
    const totalCharacters = text.replace(/\s+/g, '').length;

    const averageWordLength = (totalCharacters / words).toFixed(2);
    return Number(averageWordLength);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split('');
    let numberCount = 0;
  
    for (let i = 0; i < words.length; i++) { //ACÁ NECESITO SABER COMO LLEGAR A LA LONGITUD DE LAS COINCIDENCIAS, NO DEL TEXTO COMPLETO
      if (Number(words[i])) {
        numberCount++
      }
    }  
    return numberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split('');
    let numberSum = 0;
    for (let i = 0; i < words.length; i++) {
      if (Number(words[i])) {
        numberSum += Number(words[i]);
      }
    }
    return numberSum;
  }
  
};


export default analyzer;
